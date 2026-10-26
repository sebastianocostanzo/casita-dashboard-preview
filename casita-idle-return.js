/* casita-idle-return v1 — Casita v4 idle return to Album.
 *
 * After 60 seconds without a touch, key press or scroll, a tablet
 * viewing casita-v4 on any view other than the first (Album) is
 * switched back to Album, in-page (no reload, so no photo re-download).
 * - Only acts on the casita-v4 dashboard; a harmless no-op elsewhere
 *   (Lovelace resources load on every dashboard).
 * - Deliberately NO dialog guard (removed after the 2026-10-26 test):
 *   the real more-info dialog was not detected by a shadow-tree walk
 *   for ha-dialog, and more importantly the test showed the dialog
 *   SURVIVES a view change (it lives at app level, above the views):
 *   after 60 s idle with the Master Bedroom dialog open, the background
 *   returned to Album while the dialog stayed put. That is the desired
 *   kiosk behaviour — a forgotten open dialog must not block the return
 *   forever. Closing the dialog then reveals Album.
 * - Any user activity re-arms the timer; arriving on a view (tap or
 *   navigation) also re-arms it.
 * - Idempotent: safe if loaded twice.
 */
(function () {
  'use strict';
  try {
    if (window.__casitaIdleReturnInstalled) return;
    window.__casitaIdleReturnInstalled = true;
    var IDLE_MS = 60000;
    var DASHBOARD = 'casita-v4';
    var timer = null;

    function pathParts() {
      try {
        return window.location.pathname.split('/').filter(function (p) { return p.length > 0; });
      } catch (e) { return []; }
    }
    function onDashboard() {
      var p = pathParts();
      return p.length > 0 && p[0] === DASHBOARD;
    }
    function onFirstView() {
      return pathParts().length <= 1;
    }
    function goAlbum() {
      try {
        if (!onDashboard() || onFirstView()) return;
        window.history.pushState(null, '', '/' + DASHBOARD);
        window.dispatchEvent(new CustomEvent('location-changed'));
      } catch (e) {
        // Fallback: a full load of the dashboard root still lands on Album.
        try { window.location.href = '/' + DASHBOARD; } catch (e2) {}
      }
    }
    function arm() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(goAlbum, IDLE_MS);
    }
    ['pointerdown', 'touchstart', 'mousedown', 'keydown', 'wheel'].forEach(function (ev) {
      window.addEventListener(ev, arm, { capture: true, passive: true });
    });
    window.addEventListener('popstate', arm);
    window.addEventListener('location-changed', arm);
    arm();
  } catch (e) {}
})();
