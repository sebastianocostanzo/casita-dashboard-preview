/* casita-stream v1 — Casita v4 stream-to-TV helper.
 * Only acts on the casita-v4 dashboard, and only inside Fully Kiosk.
 * - Entering /casita-v4/stream opens the tablet's Cast control (Google Home)
 *   once, so the user picks the Sony TV once. Mirroring then shows the
 *   minimal stream view (no rail) on the TV.
 * - Leaving the stream view clears the flag, so the next entry opens it again.
 * - A 'casita-stop-cast' event (Stop cast button in Streaming) opens the
 *   same Cast control, where the user taps Disconnect.
 * - If Fully is not present (desktop, other browsers) this is a harmless no-op.
 * - No photos, tokens, or server references in this file.
 */
(function () {
  'use strict';
  try {
    if (window.__casitaStreamInstalled) return;
    window.__casitaStreamInstalled = true;
    var DASHBOARD = 'casita-v4';
    var STREAM_PATH = '/casita-v4/stream';
    var FLAG = 'casita-stream-cast-opened';
    function onDashboard() {
      try { return window.location.pathname.split('/')[1] === DASHBOARD; } catch (e) { return false; }
    }
    function onStream() {
      try { return window.location.pathname === STREAM_PATH || window.location.pathname === STREAM_PATH + '/'; } catch (e) { return false; }
    }
    function openCastControl() {
      try {
        var f = window.fully;
        if (f && typeof f.startApplication === 'function') {
          f.startApplication('com.google.android.apps.chromecast.app');
          return true;
        }
      } catch (e) {}
      return false;
    }
    function check() {
      try {
        if (!onDashboard()) return;
        if (onStream()) {
          if (!window.sessionStorage.getItem(FLAG)) {
            window.sessionStorage.setItem(FLAG, '1');
            openCastControl();
          }
        } else {
          window.sessionStorage.removeItem(FLAG);
        }
      } catch (e) {}
    }
    document.addEventListener('casita-stop-cast', function () { try { openCastControl(); } catch (e) {} }, true);
    window.addEventListener('casita-stop-cast', function () { try { openCastControl(); } catch (e) {} }, true);
    window.addEventListener('popstate', function () { setTimeout(check, 300); });
    window.addEventListener('location-changed', function () { setTimeout(check, 300); });
    setInterval(check, 1000);
    check();
  } catch (e) {}
})();
