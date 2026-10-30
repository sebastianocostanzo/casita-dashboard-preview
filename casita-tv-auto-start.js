/* casita-tv-auto-start.js v3 — PROD + TEST (issue #41, rail Sony speed work).
 *
 * Why: Home Assistant's Fully Kiosk integration polls the tablet every
 * 30 s, so the page-sensor automation can take up to 30 s to learn that
 * the TV view opened. This script runs IN the dashboard (already
 * authenticated in Fully) and fires the moment the TV view loads,
 * cutting the wait to the Sony's own boot time (~3 s, proven on test).
 *
 * v3 change vs v2: dual path gate. The resource loads globally, so one
 * file serves both dashboards:
 *  - TEST dashboard TV view (/casita-unified-test/tv): fires only when
 *    input_boolean.tv_autostart_test is ON (read via same-origin REST;
 *    hass.states is undefined from a global script on this frontend).
 *    OFF by default, so suite runs never fire it.
 *  - PROD dashboard TV view (/casita-v4/tv): fires unconditionally,
 *    because on prod opening the TV view IS the "I want to watch" signal.
 * turn_on is idempotent (harmless when already on, a no-op when the
 * Sony is unreachable), so no Sony-state gate is needed on either path.
 * One call per TV visit on each path. The Fully page-sensor automation
 * stays as a fallback; its own off-condition makes a second fire harmless.
 * Idempotent: safe if loaded twice.
 */
(function () {
  'use strict';
  try {
    if (window.__casitaTvAutoStartInstalled) return;
    window.__casitaTvAutoStartInstalled = true;
    var SONY = 'media_player.bravia_4k_ae2';
    var FLAG = 'input_boolean.tv_autostart_test';
    var fired = false;
    var flagFetching = false;
    var flagNextCheck = 0;

    function pathParts() {
      try {
        return window.location.pathname.split('/').filter(function (p) { return p.length > 0; });
      } catch (e) { return []; }
    }
    function tvPath() {
      var p = pathParts();
      if (p.length < 2 || p[1] !== 'tv') return null;
      if (p[0] === 'casita-unified-test') return 'test';
      if (p[0] === 'casita-v4') return 'prod';
      return null;
    }
    function getHass() {
      try {
        var el = document.querySelector('home-assistant');
        if (el && el.hass) return el.hass;
        var main = document.querySelector('home-assistant-main');
        if (main && main.hass) return main.hass;
      } catch (e) {}
      return null;
    }
    function getToken() {
      try {
        var raw = window.localStorage.getItem('hassTokens');
        if (!raw) return null;
        var parsed = JSON.parse(raw);
        return parsed.access_token || null;
      } catch (e) { return null; }
    }
    function fire(hass) {
      fired = true;
      try {
        console.log('[casita-tv-auto-start] TV view opened — calling turn_on');
        hass.callService('media_player', 'turn_on', { entity_id: SONY });
      } catch (e) {
        console.log('[casita-tv-auto-start] callService failed: ' + e);
        fired = false;
      }
    }
    function tick() {
      try {
        var kind = tvPath();
        if (!kind) { fired = false; flagFetching = false; return; }
        if (fired) return;
        var hass = getHass();
        if (!hass || typeof hass.callService !== 'function') return;
        if (kind === 'prod') { fire(hass); return; }
        // Test path: flag gate via same-origin REST. Fail safe: no token
        // or a failed fetch means no fire. Rechecked every 2 s so turning
        // the flag on while already on the TV view still fires.
        var now = Date.now();
        if (flagFetching || now < flagNextCheck) return;
        var token = getToken();
        if (!token) { flagNextCheck = now + 2000; return; }
        flagFetching = true;
        fetch('/api/states/' + FLAG, { headers: { 'Authorization': 'Bearer ' + token } })
          .then(function (r) { return r.json(); })
          .then(function (s) {
            flagFetching = false;
            if (s && s.state === 'on') { fire(hass); }
            else { flagNextCheck = Date.now() + 2000; }
          })
          .catch(function () { flagFetching = false; flagNextCheck = Date.now() + 2000; });
      } catch (e) {}
    }
    setInterval(tick, 500);
  } catch (e) {}
})();
