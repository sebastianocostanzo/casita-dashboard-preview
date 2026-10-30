/* casita-tv-auto-start.js v2 — TEST ONLY (issue #41, rail Sony speed work).
 *
 * Why: Home Assistant's Fully Kiosk integration polls the tablet every
 * 30 s, so the page-sensor automation can take up to 30 s to learn that
 * the TV view opened. This script runs IN the dashboard (already
 * authenticated in Fully) and fires the moment the TV view loads,
 * cutting the wait to the Sony's own boot time (~a few seconds).
 *
 * v2 change vs v1: v1 read the Sony and flag states from hass.states,
 * but on this frontend hass.states is undefined from a global script,
 * so v1 never fired (proven by probe: hass present, callService present,
 * states undefined; a direct in-page callService DID power the Sony on).
 * v2 reads the flag through same-origin REST with the frontend's own
 * token from localStorage, and skips the Sony state check entirely:
 * turn_on is idempotent (harmless when already on, a no-op when
 * unreachable), so no Sony-state gate is needed.
 *
 * Scope guards (both must hold, or it does nothing):
 *  1. The dashboard path must be the TEST dashboard's TV view
 *     (/casita-unified-test/tv). On prod (/casita-v4/...) and every other
 *     dashboard it is a deliberate no-op, even though Lovelace resources
 *     load globally.
 *  2. input_boolean.tv_autostart_test must be ON. It is OFF by default,
 *     so suite runs (which tap the TV view) never fire it. Enable it only
 *     for a live auto-start test, disable it right after.
 * One call per TV visit: after firing, it waits until the path leaves the
 * TV view before it can fire again, so the 500 ms tick cannot spam calls.
 * The Fully page-sensor automation stays as a fallback; its own
 * off-condition makes a second fire harmless.
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
    function onTestTv() {
      var p = pathParts();
      return p.length >= 2 && p[0] === 'casita-unified-test' && p[1] === 'tv';
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
    function tick() {
      try {
        if (!onTestTv()) { fired = false; flagFetching = false; return; }
        if (fired) return;
        var hass = getHass();
        if (!hass || typeof hass.callService !== 'function') return;
        // Flag gate via same-origin REST (hass.states is undefined from a
        // global script on this frontend — proven by probe). Fail safe:
        // no token or a failed fetch means no fire. Rechecked every 2 s
        // so turning the flag on while already on the TV view still fires.
        var now = Date.now();
        if (flagFetching || now < flagNextCheck) return;
        var token = getToken();
        if (!token) { flagNextCheck = now + 2000; return; }
        flagFetching = true;
        fetch('/api/states/' + FLAG, { headers: { 'Authorization': 'Bearer ' + token } })
          .then(function (r) { return r.json(); })
          .then(function (s) {
            flagFetching = false;
            if (s && s.state === 'on') {
              fired = true;
              try {
                console.log('[casita-tv-auto-start] TV view opened, flag on — calling turn_on');
                hass.callService('media_player', 'turn_on', { entity_id: SONY });
              } catch (e) {
                console.log('[casita-tv-auto-start] callService failed: ' + e);
                fired = false;
              }
            } else {
              flagNextCheck = Date.now() + 2000;
            }
          })
          .catch(function () { flagFetching = false; flagNextCheck = Date.now() + 2000; });
      } catch (e) {}
    }
    setInterval(tick, 500);
  } catch (e) {}
})();
