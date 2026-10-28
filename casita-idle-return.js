/* casita-idle-return v2 — dashboard-agnostic idle return to the dashboard root.
 *
 * After 60 seconds without a touch, key press or scroll, a tablet
 * viewing any view other than the first view of its CURRENT dashboard
 * is switched back to that dashboard's root (Album on the Casita
 * dashboards), in-page (no reload, so no photo re-download).
 *
 * v2 change vs v1 (issue #36): v1 hardcoded DASHBOARD = 'casita-v4' and
 * did nothing anywhere else, so on the test dashboard
 * (casita-unified-test) it silently never returned — diagnosed
 * 2026-10-28, not a tablet fault, just v1 scope. v2 derives the
 * dashboard from the live URL at fire time: the first path segment.
 * It NEVER hardcodes a dashboard name, so it cannot send the test
 * tablet to the production dashboard or stop working if production
 * ever moves to the unified dashboard name.
 * - Behaviour on casita-v4 is identical to v1 (root is /casita-v4).
 * - Deliberately NO dialog guard (kept from v1, proven 2026-10-26):
 *   the dialog lives at app level, above the views, and SURVIVES a
 *   view change — a forgotten open dialog must not block the return
 *   forever. Closing the dialog then reveals the root view.
 * - Any user activity re-arms the timer; arriving on a view (tap or
 *   navigation) also re-arms it.
 * - Idempotent: safe if loaded twice.
 * - Lovelace resources load on every dashboard, so this script is
 *   present on all of them; returning to the current dashboard's root
 *   is harmless on non-Casita dashboards too.
 */
(function () {
  'use strict';
  try {
    if (window.__casitaIdleReturnInstalled) return;
    window.__casitaIdleReturnInstalled = true;
    var IDLE_MS = 60000;
    var timer = null;

    function pathParts() {
      try {
        return window.location.pathname.split('/').filter(function (p) { return p.length > 0; });
      } catch (e) { return []; }
    }
    function dashboardRoot() {
      var p = pathParts();
      return p.length > 0 ? '/' + p[0] : null;
    }
    function onFirstView() {
      return pathParts().length <= 1;
    }
    function goRoot() {
      try {
        var root = dashboardRoot();
        if (!root || onFirstView()) return;
        window.history.pushState(null, '', root);
        window.dispatchEvent(new CustomEvent('location-changed'));
      } catch (e) {
        // Fallback: a full load of the dashboard root still lands on the first view.
        try { var r = dashboardRoot(); if (r) window.location.href = r; } catch (e2) {}
      }
    }
    function arm() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(goRoot, IDLE_MS);
    }
    ['pointerdown', 'touchstart', 'mousedown', 'keydown', 'wheel'].forEach(function (ev) {
      window.addEventListener(ev, arm, { capture: true, passive: true });
    });
    window.addEventListener('popstate', arm);
    window.addEventListener('location-changed', arm);
    arm();
  } catch (e) {}
})();
