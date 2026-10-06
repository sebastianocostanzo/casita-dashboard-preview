/* Mobile view for casa-dashboard v90 — activated ONLY by ?mobile in the URL.
 *
 * Same file, same engine, same element IDs as the kiosk view. The kiosk
 * (no ?mobile) never executes any of this: everything below is gated on
 * the URL param, and all CSS lives under body.mobile.
 *
 * What it does:
 *  1. Adds body.mobile (drives the phone stylesheet).
 *  2. Allows pinch-zoom (kiosk keeps user-scalable=no).
 *  3. Rebinds the 4 shutter tracks to horizontal tap-to-seek
 *     (App.seek already supports horizontal mode — the awning uses it).
 *  4. Mirrors the engine's vertical fill model (style.height / style.bottom)
 *     onto the horizontal mobile tracks (style.width / style.left) via
 *     MutationObserver. The engine file itself is NOT modified.
 *  5. Wires the quick-actions row (all open / all close / movie mode).
 */
(function () {
  'use strict';
  if (!new URLSearchParams(window.location.search).has('mobile')) return;

  var ROOMS = ['kid', 'tv_area', 'sofa', 'master'];

  document.body.classList.add('mobile');

  // Kiosk forbids zoom; on a phone that hurts accessibility — relax it here only.
  var vp = document.querySelector('meta[name="viewport"]');
  if (vp) vp.setAttribute('content', 'width=device-width, initial-scale=1.0');

  // Engine writes style.height on prog-{room} and style.bottom on
  // target-{room} (vertical model). Mirror them to width/left for the
  // horizontal mobile tracks. Each handler is self-terminating: the
  // follow-up mutation it causes finds nothing left to copy.
  function mirrorFill(id) {
    var bar = document.getElementById('prog-' + id);
    if (bar) {
      new MutationObserver(function () {
        var h = bar.style.height;
        if (h) { bar.style.width = h; bar.style.height = ''; }
      }).observe(bar, { attributes: true, attributeFilter: ['style'] });
    }
    var tl = document.getElementById('target-' + id);
    if (tl) {
      new MutationObserver(function () {
        var b = tl.style.bottom;
        if (b) { tl.style.left = b; tl.style.bottom = ''; }
      }).observe(tl, { attributes: true, attributeFilter: ['style'] });
    }
  }

  // Sequential cover commands — same pattern as the voice engine's allRooms(),
  // to avoid hammering the network with parallel requests.
  function chainCover(action) {
    ROOMS.reduce(function (p, r) {
      return p.then(function () { return App.cover(r, action); });
    }, Promise.resolve());
  }

  function init() {
    ROOMS.forEach(function (id) {
      var track = document.querySelector('.room-column[data-room="' + id + '"] .progress-track');
      if (track) {
        track.onclick = function (e) { App.seek(e, id, true); };
      }
      mirrorFill(id);
    });

    var b;
    b = document.getElementById('m-all-open');
    if (b) b.onclick = function () { chainCover('Open'); };
    b = document.getElementById('m-all-close');
    if (b) b.onclick = function () { chainCover('Close'); };
    b = document.getElementById('m-movie');
    if (b) b.onclick = function () {
      App.tv('system', 'setPowerStatus', { status: true });
      chainCover('Close');
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
