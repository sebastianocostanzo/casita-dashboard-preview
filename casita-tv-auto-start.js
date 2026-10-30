/* casita-tv-auto-start.js — TEST ONLY (issue #41, rail Sony speed work).
 *
 * Why: Home Assistant's Fully Kiosk integration polls the tablet every
 * 30 s, so the page-sensor automation can take up to 30 s to learn that
 * the TV view opened. This script runs IN the dashboard (already
 * authenticated in Fully) and fires the moment the TV view loads,
 * cutting the wait to the Sony's own boot time (~a few seconds).
 *
 * Scope guards (all three must hold, or it does nothing):
 *  1. The dashboard path must be the TEST dashboard's TV view
 *     (/casita-unified-test/tv). On prod (/casita-v4/...) and every other
 *     dashboard it is a deliberate no-op, even though Lovelace resources
 *     load globally.
 *  2. input_boolean.tv_autostart_test must be ON. It is OFF by default,
 *     so suite runs (which tap the TV view) never fire it. Enable it only
 *     for a live auto-start test, disable it right after.
 *  3. The Sony must currently be 'off'. If it is on, unavailable, or
 *     anything else, no call is made.
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
    function stateOf(hass, entityId) {
      try {
        var states = hass.states || [];
        for (var i = 0; i < states.length; i++) {
          if (states[i].entity_id === entityId) return states[i].state;
        }
      } catch (e) {}
      return null;
    }
    function tick() {
      try {
        if (!onTestTv()) { fired = false; return; }
        if (fired) return;
        var hass = getHass();
        if (!hass) return;
        if (stateOf(hass, FLAG) !== 'on') return;
        if (stateOf(hass, SONY) !== 'off') return;
        fired = true;
        try {
          console.log('[casita-tv-auto-start] TV view opened, Sony off, flag on — calling turn_on');
          hass.callService('media_player', 'turn_on', { entity_id: SONY });
        } catch (e) {
          console.log('[casita-tv-auto-start] callService failed: ' + e);
          fired = false;
        }
      } catch (e) {}
    }
    setInterval(tick, 500);
  } catch (e) {}
})();
