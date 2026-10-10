/* Kiosk self-updater — test builds.
 *
 * Polls version.js from the public preview site. When a newer build is
 * published, reloads the page once the screen has been idle, so the files
 * Fully pulled take effect with zero manual restarts.
 *
 * Plain web tech only: no Fully JS APIs, no PLUS license, no extra tablet
 * settings. The version check loads via a <script> tag (with cache-buster),
 * which is not subject to CORS / file-origin restrictions.
 *
 * window.__KIOSK_BUILD is stamped into index.html at build time by build_qa.py.
 */
(function () {
  'use strict';

  var VERSION_URL = 'https://sebastianocostanzo.github.io/casita-dashboard-preview/version.js';
  var POLL_MS = 2 * 60 * 1000;   // check every 2 minutes
  var IDLE_MS = 60 * 1000;       // reload only after 60s without interaction
  var MAX_RELOADS = 30;          // stop trying after ~1h of unsuccessful updates

  var BUILD = window.__KIOSK_BUILD || 'dev';

  var lastTouch = Date.now();

  function poke() { lastTouch = Date.now(); }
  ['touchstart', 'touchmove', 'mousedown', 'keydown', 'wheel'].forEach(function (ev) {
    document.addEventListener(ev, poke, { passive: true });
  });

  // Persisted across reloads: caps the update-reload loop if Fully's pull is broken
  function getCount() {
    try { return parseInt(localStorage.getItem('kioskUpdaterReloads') || '0', 10) || 0; }
    catch (e) { return 0; }
  }
  function setCount(n) {
    try { localStorage.setItem('kioskUpdaterReloads', String(n)); } catch (e) {}
  }

  function check() {
    // Don't pile up checks if a previous one is still in flight
    if (document.querySelector('script[data-kiosk-updater]')) return;
    var s = document.createElement('script');
    s.setAttribute('data-kiosk-updater', '1');
    s.src = VERSION_URL + '?t=' + Date.now();  // cache-buster: always fresh
    s.onload = function () {
      s.remove();
      var latest = window.__KIOSK_LATEST_BUILD;
      if (!latest || latest === BUILD) { setCount(0); return; }  // up to date
      var n = getCount() + 1;
      setCount(n);
      if (n > MAX_RELOADS) {
        console.warn('[updater] build ' + latest + ' published but not installed after ' +
          MAX_RELOADS + ' reloads; stopping auto-update checks until next manual load ' +
          '(running ' + BUILD + ')');
        clearInterval(timer);
        return;
      }
      if (Date.now() - lastTouch >= IDLE_MS) {
        console.log('[updater] new build ' + latest + ' published (running ' + BUILD + '), reloading');
        location.reload();
      }
      // else: screen in use — retry on the next poll
    };
    s.onerror = function () { s.remove(); };  // offline/unreachable: retry next poll
    document.head.appendChild(s);
  }

  var timer = setInterval(check, POLL_MS);
  check();  // check immediately on page load, don't wait for the first interval
})();
