/* ==========================================================================
   CASA v90 — Voice layer (English)
   Uses ONLY the v89 engine (App.cover / App.tv):
   inherits quiet hours, smart-stop, IP failover, optimistic animation.
   Roadmap Phase 3: local regex command router + stateful macros.
   ========================================================================== */
(function () {
  'use strict';

  var micBtn = document.getElementById('mic-btn');
  var micHint = document.getElementById('mic-hint');
  var feedback = document.getElementById('ai-feedback');
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  var ROOMS = ['kid', 'tv_area', 'sofa', 'master'];

  var ROOM_NAMES = { kid: "Kid's room", tv_area: 'TV area', sofa: 'Living room', master: 'Master bedroom' };

  var TV_APPS = {
    netflix: 'com.sony.dtv.com.netflix.ninja.com.netflix.ninja.MainActivity',
    disney: 'com.sony.dtv.com.disney.disneyplus.com.bamtechmedia.dominguez.main.MainActivity',
    hbo: 'com.sony.dtv.com.wbd.stream.com.wbd.beam.BeamActivity',
    'sony core': 'com.sony.dtv.com.sonypicturescore.com.sphe.bravialounge.SplashActivity'
  };

  function say(text) {
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  var fbTimer = null;
  function showFeedback(text, ms) {
    feedback.textContent = text;
    feedback.style.display = 'block';
    clearTimeout(fbTimer);
    fbTimer = setTimeout(function () { feedback.style.display = 'none'; }, ms || 2800);
  }

  function allRooms(action) {
    if (action === 'stop') {
      ROOMS.forEach(function (r) { App.cover(r, 'stop'); });
      App.cover('awning', 'stop');
      return;
    }
    // Sequential to avoid hammering the network; stop is instant on all
    ROOMS.reduce(function (p, r) {
      return p.then(function () { return App.cover(r, action); });
    }, Promise.resolve());
  }

  function matchRoom(t) {
    if (/kid'?s?( room)?/.test(t)) return 'kid';
    if (/tv( area)?/.test(t)) return 'tv_area';
    if (/sofa|living room|couch/.test(t)) return 'sofa';
    if (/master( bedroom)?|bedroom/.test(t)) return 'master';
    return null;
  }

  function handleVoice(raw) {
    var t = ' ' + raw.toLowerCase().trim() + ' ';
    showFeedback('\u201C' + raw + '\u201D');

    // --- stateful macro: movie mode (roadmap Phase 3) ---
    if (/movie mode|cinema mode/.test(t)) {
      App.tv('system', 'setPowerStatus', { status: true });
      allRooms('Close');
      say('Movie mode on. Enjoy the show.');
      showFeedback('🎬 Movie mode');
      return;
    }

    // --- stop ---
    if (/\bstop\b|stop everything|freeze/.test(t)) {
      allRooms('stop');
      say('Stopping everything.');
      showFeedback('⏸ Stopped');
      return;
    }

    // --- TV power ---
    if (/turn on the tv|tv on\b/.test(t)) {
      App.tv('system', 'setPowerStatus', { status: true });
      say('TV on.'); showFeedback('📺 TV on'); return;
    }
    if (/turn off the tv|tv off\b/.test(t)) {
      App.tv('system', 'setPowerStatus', { status: false });
      say('TV off.'); showFeedback('📺 TV off'); return;
    }

    // --- TV apps ---
    for (var name in TV_APPS) {
      if (t.indexOf(name) !== -1 && /open|launch|start|watch|put on/.test(t)) {
        App.tv('appControl', 'setActiveApp', { uri: TV_APPS[name] });
        var label = name.charAt(0).toUpperCase() + name.slice(1);
        say('Opening ' + label + '.'); showFeedback('📺 ' + label); return;
      }
    }

    // --- TV transport ---
    if (/\bpause\b/.test(t)) {
      App.tv('IRCC', 'Pause', {}); say('Paused.'); showFeedback('⏸ Paused'); return;
    }
    if (/\bplay\b|resume/.test(t)) {
      App.tv('IRCC', 'Play', {}); say('Playing.'); showFeedback('▶ Playing'); return;
    }
    if (/\bmute\b/.test(t)) {
      App.tv('audio', 'setAudioMute', {}); say('Done.'); showFeedback('🔇 Mute toggled'); return;
    }

    // --- direction ---
    var isUp = /\bopen\b|raise|\bup\b/.test(t);
    var isDown = /\bclose\b|lower|\bdown\b|shut/.test(t);
    if (!isUp && !isDown) {
      say("Sorry, I didn't catch that.");
      showFeedback('❓ Not understood — see “What can I say?”');
      return;
    }
    var action = isUp ? 'Open' : 'Close';

    // --- awning ---
    if (/awning|patio/.test(t)) {
      App.cover('awning', action.toLowerCase());
      say(isUp ? 'Opening the awning.' : 'Closing the awning.');
      showFeedback(isUp ? '⛱️ Awning opening' : '⛱️ Awning closing');
      return;
    }

    // --- single room ---
    var room = matchRoom(t);
    if (room) {
      App.cover(room, action);
      say((isUp ? 'Opening ' : 'Closing ') + ROOM_NAMES[room] + '.');
      showFeedback((isUp ? '⬆️ ' : '⬇️ ') + ROOM_NAMES[room]);
      return;
    }

    // --- all shutters ---
    if (/shutter|blind|all|everything/.test(t)) {
      allRooms(isUp ? 'Open' : 'Close');
      say(isUp ? 'Opening all shutters.' : 'Closing all shutters.');
      showFeedback(isUp ? '⬆️ All shutters' : '⬇️ All shutters');
      return;
    }

    say("Sorry, I didn't catch that.");
    showFeedback('❓ Not understood — see “What can I say?”');
  }

  if (!SR) {
    if (micBtn) micBtn.style.display = 'none';
    if (micHint) micHint.textContent = 'Voice not supported — use the buttons';
    return;
  }

  var rec = new SR();
  rec.lang = 'en-US';
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  micBtn.addEventListener('click', function () {
    try { rec.start(); } catch (e) {}
  });
  rec.onstart = function () {
    micBtn.classList.add('listening');
    if (micHint) micHint.textContent = 'Listening…';
    showFeedback('🎤 Go ahead…', 1500);
  };
  rec.onend = function () {
    micBtn.classList.remove('listening');
    if (micHint) micHint.textContent = 'Tap & talk 🎤';
  };
  rec.onresult = function (e) {
    handleVoice(e.results[0][0].transcript);
  };
  rec.onerror = function (e) {
    if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
      showFeedback('🎤 Mic blocked: enable it in Fully Kiosk settings', 6000);
      say('Microphone is blocked.');
    } else if (e.error === 'no-speech') {
      showFeedback("Didn't hear anything — try again");
    } else if (e.error === 'network') {
      showFeedback('Voice transcription needs internet');
    }
  };
})();
