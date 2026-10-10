/* ==========================================================================
   SMART HUB v88 (DEV)
   - Photos selection
   ========================================================================== */

window.isSimulationMode = true; // forced for public preview
window.__PREVIEW_FORCED_SIM = true;

const CONFIG = {
    // ASYMMETRIC TIMING
    TRAVEL_TIME: {
        default: 26000, 
        awning_out: 50000, // 0 to 100 (Extending/Pushing out)
        awning_in: 60000   // 100 to 0 (Retracting/Pulling in)
    },
    POLL_INTERVAL: 60000, 
    SLIDE_INTERVAL: 15000,
    WEATHER_INTERVAL: 1800000, // 30 mins

    // NETWORK
    IPS: { 
        kid:     ['203.0.113.203', '203.0.113.203'], 
        master:  ['203.0.113.22',  '203.0.113.13'], 
        tv_area: ['203.0.113.50',  '203.0.113.16'], 
        sofa:    ['203.0.113.17',  '203.0.113.21'],
        awning:  ['203.0.113.27'] // Shutterbox Awning (No failover IP)
    },
    
    // SERVICES
    BRIDGE_URL: "https://example.com/scrubbed",
    COORDS: { lat: 51.078, lng: 16.92 } // <--- Updated to exact Awning coordinates
    

};

// Virtual switches to press play/pause buttons
const ST_TOKEN = "SCRUBBED";
const PAUSE_SWITCH_ID = "bd097074-7253-49a0-9bb6-9e828bdee854";
const PLAY_SWITCH_ID = "247130e3-66d9-4cdc-bcdc-48d0c31fd1b1"; // <-- Add your new Play ID here
const State = {
    // Hardware State
    movingRooms: {},    
    onlineStatus: {},   
    positions: {},      
    intervals: {},  
    activeIPs: {},      // Remembers the working IP to eliminate failover lag    

    // Media State
    photos: [],
    photoIndex: 0,
    slideIdx: 1,
    locationCache: {}, 
    currentLocation: "Home"
};

const App = {
    // --- BOOT SEQUENCE ---
    init: () => {
        const log = document.getElementById('debug-log');
        if (log) {
            log.innerHTML = window.isSimulationMode 
                ? "<span style='color:#ff0055'>[SIMULATION MODE]</span><br>" 
                : "<span style='color:#00d2ff'>[REAL MODE]</span><br>";
        }
        
        Object.keys(CONFIG.IPS).forEach(id => App.finalize(id));

        App.updateWeather();
        App.loadPhotos();
        App.updateLocation(); 
        App.syncTVPower(); 

        App.startBackgroundJobs();
    },

    log: (msg, type = 'info') => {
        const box = document.getElementById('debug-log');
        if (!box) return;

        const time = new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        let color = '#ffffff'; 
        if (type === 'error') color = '#ff0055'; 
        if (type === 'warn') color = '#ffcc00';  
        if (type === 'success') color = '#00ffaa'; 

        box.innerHTML += `<span style="color:${color}">[${time}] ${msg}</span><br>`;
        box.scrollTop = box.scrollHeight;

        if (type === 'error') console.error(msg);
        else if (type === 'warn') console.warn(msg);
        else console.log(msg);
    },

    // --- 1. NETWORK ENGINE ---
    fetchDevice: async (id, endpoint) => {
        const ips = CONFIG.IPS[id] || [];
        
        // SMART FAILOVER: Reorder the array to test the known working IP first
        let targetIPs = [...ips];
        const knownActive = State.activeIPs[id];
        if (knownActive && targetIPs.includes(knownActive)) {
            targetIPs = [knownActive, ...targetIPs.filter(ip => ip !== knownActive)];
        }

        for (const ip of targetIPs) {
            try {
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 2000); 
                
                const res = await fetch(`http://${ip}${endpoint}`, { 
                    signal: controller.signal,
                    cache: 'no-store',
                    keepalive: true // Keeps the socket warm
                });
                clearTimeout(timeout);
                
                if (res.ok) {
                    State.activeIPs[id] = ip;

                    if (!State.onlineStatus[id]) {
                        State.onlineStatus[id] = true;
                        if (App.log) App.log(`[${id.toUpperCase()}] Online via ${ip}`, 'success');
                        App.updateButtons(id);
                    }
                    
                    const text = await res.text();
                    try { return text ? JSON.parse(text) : { ok: true }; }
                    catch(e) { return { ok: true }; }
                }
            } catch (e) { 
                if (ip === knownActive && App.log) {
                    App.log(`[${id.toUpperCase()}] Primary IP ${ip} failed. Seeking failover...`, 'warn');
                }
            } 
        }
        
        // Device is completely offline
        if (State.onlineStatus[id] !== false) {
            State.onlineStatus[id] = false;
            State.activeIPs[id] = null; 
            if (App.log) App.log(`[${id.toUpperCase()}] Connection Lost - Device Offline`, 'error');
            App.updateButtons(id);
        }
        return null;
    },

    finalize: async (id) => {
        // BleBox API vs Shelly API
        const endpoint = id === 'awning' ? '/api/shutter/state' : '/rpc/Cover.GetStatus?id=0';
        const data = await App.fetchDevice(id, endpoint);
        
        if (data) {
            State.onlineStatus[id] = true;
            let pos = 0;
            if (id === 'awning') pos = data.shutter?.currentPos?.position || 0;
            else pos = data.current_pos !== undefined ? data.current_pos : (data.pos || 0);
            
            State.positions[id] = pos;
            
            const prog = document.getElementById(`prog-${id}`);
            if (prog) {
                if (id === 'awning') prog.style.width = `${pos}%`;
                else prog.style.height = `${pos}%`;
            }
            App.updateButtons(id);
        } else {
            State.onlineStatus[id] = false;
            App.updateButtons(id);
        }
    },

    // --- 2. COMMANDS & UI ---
    seek: (e, id, isHorizontal = false) => {
        if (State.onlineStatus[id] === false) return;
        const rect = e.currentTarget.getBoundingClientRect();
        let pos;
        if (isHorizontal) {
            pos = Math.round(((e.clientX - rect.left) / rect.width) * 100);
        } else {
            pos = Math.round((1 - ((e.clientY - rect.top) / rect.height)) * 100);
        }
        pos = Math.max(0, Math.min(100, pos));
        App.cover(id, 'pos', pos);
    },

    cover: async (id, actionInput, pos) => {
        let action = actionInput.toLowerCase();

        // 1. SMART STOP LOGIC
        if (State.movingRooms[id] && (action === 'open' || action === 'close')) {
            App.log(`[${id.toUpperCase()}] Intercepted movement. Sending STOP.`, 'warn');
            action = 'stop';
        }

        // 2. TIME-BASED SAFETY BLOCKS
        if (!window.isSimulationMode) {
            const hour = new Date().getHours();
            
            // Master/Kid night lock
            if ((id === 'master' || id === 'kid') && (hour >= 20 || hour < 7)) {
                App.log(`[${id.toUpperCase()}] Action blocked: Quiet hours active.`, 'error');
                const btnCol = document.querySelector(`.room-column[data-room="${id}"]`);
                if(btnCol) {
                    const btns = btnCol.querySelectorAll('.ghost-btn');
                    btns.forEach(b => {
                        const oldHtml = b.innerHTML;
                        b.innerHTML = '🌙'; 
                        b.style.borderColor = '#ff0055'; 
                        setTimeout(() => { b.innerHTML = oldHtml; b.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }, 1500);
                    });
                }
                return;
            }
            
            // Awning Quiet Hours (Afternoon/Evening lock - 15:00 to 06:00)
            if (id === 'awning' && (hour >= 15 || hour < 6)) {
                App.log(`[AWNING] Blocked by quiet hours.`, 'error');
                const btnCol = document.querySelector(`.room-column[data-room="${id}"]`);
                if(btnCol) {
                    const btns = btnCol.querySelectorAll('.ghost-btn');
                    btns.forEach(b => {
                        const oldHtml = b.innerHTML;
                        b.innerHTML = '🌙'; 
                        b.style.borderColor = '#ff0055'; 
                        setTimeout(() => { b.innerHTML = oldHtml; b.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }, 1500);
                    });
                }
                return;
            }
        }

        const startPos = State.positions[id] || 0;
        const targetLine = document.getElementById(`target-${id}`);

        // 3. OPTIMISTIC UI (INSTANT FEEDBACK)
        if (action === 'stop') {
            if (State.intervals[id]) clearInterval(State.intervals[id]);
            delete State.movingRooms[id];
            if (targetLine) targetLine.classList.remove('visible');
            App.updateButtons(id);
        } else if (action === 'open' && startPos < 100) {
            State.movingRooms[id] = 'up';
            App.updateButtons(id);
        } else if (action === 'close' && startPos > 0) {
            State.movingRooms[id] = 'down';
            App.updateButtons(id);
        } else if (action === 'pos' && pos !== startPos) {
            State.movingRooms[id] = pos > startPos ? 'up' : 'down';
            if (targetLine) { 
                if (id === 'awning') targetLine.style.left = `${pos}%`;
                else targetLine.style.bottom = `${pos}%`; 
                targetLine.classList.add('visible'); 
            }
            App.updateButtons(id);
        }

        // 4. NETWORK COMMAND (BleBox vs Shelly Bypass)
        let endpoint = "";
        if (id === 'awning') {
            if (action === 'stop') endpoint = `/s/s`;
            else if (action === 'open') endpoint = `/s/p/100`; 
            else if (action === 'close') endpoint = `/s/p/0`;  
            else endpoint = `/s/p/${pos}`;
        } else {
            const rpcAction = action.charAt(0).toUpperCase() + action.slice(1);
            endpoint = action === 'pos' ? `/rpc/Cover.GoToPosition?id=0&pos=${pos}` : `/rpc/Cover.${rpcAction}?id=0`;
        }

        App.fetchDevice(id, endpoint);
        
        // 5. CONFIRMATION & ANIMATION (Optimistic Execution)
        if (action === 'stop') {
            setTimeout(() => App.finalize(id), 500); 
        }
        else if (action === 'open') App.move(id, 100, 'up', false);
        else if (action === 'close') App.move(id, 0, 'down', false);
        else if (action === 'pos') App.move(id, pos, pos > startPos ? 'up' : 'down', true);
    },

    updateButtons: (id) => {
        const col = document.querySelector(`.room-column[data-room="${id}"]`);
        if (!col) return;
        
        if (id === 'awning') {
            const statusIndicator = document.getElementById('awning-status');
            if (State.onlineStatus[id] === false) { 
                col.classList.add('offline'); 
                if (statusIndicator) statusIndicator.innerText = "OFFLINE";
                return; 
            } else {
                col.classList.remove('offline');
                if (statusIndicator) statusIndicator.innerText = "ONLINE";
            }
        } else {
            if (State.onlineStatus[id] === false) { col.classList.add('offline'); return; } 
            col.classList.remove('offline');
        }

        const pos = State.positions[id] || 0;
        const buttons = col.querySelectorAll('.ghost-btn');
        
        if (buttons.length >= 2) {
            const movingDir = State.movingRooms[id]; 
            
            buttons[0].disabled = !movingDir && (pos <= 0); // Awning: 0 is in. Shelly: 0 is up. (adjusted logically)
            if (id !== 'awning') buttons[0].disabled = !movingDir && (pos >= 100);

            buttons[1].disabled = !movingDir && (pos >= 100); // Awning: 100 is out.
            if (id !== 'awning') buttons[1].disabled = !movingDir && (pos <= 0);

            const pauseSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="10" y1="4" x2="10" y2="20"></line><line x1="14" y1="4" x2="14" y2="20"></line></svg>`;
            const upSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`;
            const downSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>`;
            
            // Awning has horizontal arrows
            const leftSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>`;
            const rightSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`;

            if (id === 'awning') {
                buttons[0].innerHTML = (movingDir === 'down') ? pauseSvg : leftSvg;
                buttons[1].innerHTML = (movingDir === 'up') ? pauseSvg : rightSvg;
            } else {
                buttons[0].innerHTML = (movingDir === 'up') ? pauseSvg : upSvg;
                buttons[1].innerHTML = (movingDir === 'down') ? pauseSvg : downSvg;
            }
        }
    },

    move: (id, target, direction, showTargetLine = false) => {
        const start = State.positions[id] || 0;
        if (start === target) return;
        
        State.movingRooms[id] = direction || (target > start ? 'up' : 'down');
        
        const targetLine = document.getElementById(`target-${id}`);
        if(targetLine && showTargetLine) {
            if (id === 'awning') targetLine.style.left = `${target}%`;
            else targetLine.style.bottom = `${target}%`;
            targetLine.classList.add('visible');
        }

        App.updateButtons(id); 

        // ASYMMETRIC MATH CALCULATION
        let masterTime = CONFIG.TRAVEL_TIME.default;
        if (id === 'awning') {
            // Extending (0 to 100) takes 50s. Retracting (100 to 0) takes 60s.
            masterTime = target > start ? CONFIG.TRAVEL_TIME.awning_out : CONFIG.TRAVEL_TIME.awning_in;
        }

        const percentageToTravel = Math.abs(target - start) / 100;
        const duration = masterTime * percentageToTravel; 
        const startTime = Date.now();

        if (State.intervals[id]) clearInterval(State.intervals[id]);

        State.intervals[id] = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = duration > 0 ? Math.min(elapsed / duration, 1) : 1; 
            const current = Math.round(start + (target - start) * progress);
            
            State.positions[id] = current;
            const bar = document.getElementById(`prog-${id}`);
            if(bar) {
                if (id === 'awning') bar.style.width = `${current}%`;
                else bar.style.height = `${current}%`;
            }

            if (progress >= 1) {
                clearInterval(State.intervals[id]);
                delete State.movingRooms[id];
                if (targetLine) targetLine.classList.remove('visible');
                App.finalize(id); 
            }
        }, 150); 
    },

    syncTVPower: async () => {
        try {
            const tvIP = "203.0.113.154";
            const PSK = "1234";
            const payload = { method: "getPowerStatus", id: 50, params: [], version: "1.0" };

            const res = await fetch(`http://${tvIP}/sony/system`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Auth-PSK': PSK },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            const status = data.result[0].status; 
            const isNowOn = (status === "active");

            const btn = document.getElementById('tv-power-btn');
            const tvContainer = document.querySelector('.tv-meta');
            const statusText = document.getElementById('tv-status-text');

            if (isNowOn) {
                btn?.classList.add('online');
                tvContainer?.classList.remove('tv-off');
                if(statusText) statusText.innerText = "TV ONLINE";
            } else {
                btn?.classList.remove('online');
                tvContainer?.classList.add('tv-off');
                if(statusText) statusText.innerText = "KIOSK ACTIVE";
                document.getElementById('tv-mute-btn')?.classList.remove('muted');
            }
        } catch (e) {
            document.querySelector('.tv-meta')?.classList.add('tv-off');
        }
    },

    // --- 3. MEDIA ENGINE (Photos & Weather) ---
    
    updateWeather: () => {
        console.log("🌦️ Fetching Weather & Awning Intel...");
        
        // THE FIX 1: Removed 'sun_azimuth' from the URL to stop the 400 Bad Request crash
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${CONFIG.COORDS.lat}&longitude=${CONFIG.COORDS.lng}&current=temperature_2m,weather_code,cloud_cover,wind_speed_10m,precipitation`)
            .then(r => r.json())
            .then(d => {
                if (d.current) {
                    const tempEl = document.getElementById('temp');
                    const descEl = document.getElementById('weather-desc');
                    if (tempEl) tempEl.innerText = Math.round(d.current.temperature_2m) + "°";
                    if (descEl) {
                        const code = d.current.weather_code;
                        const weatherMap = { 0: "Clear", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast", 45: "Foggy", 61: "Rainy", 63: "Heavy Rain", 80: "Showers" };
                        const weatherText = weatherMap[code] || "Cloudy";
                        
                        const loc = State.currentLocation && State.currentLocation !== "Unknown" ? State.currentLocation : "";
                        descEl.innerText = loc ? `${loc} • ${weatherText}` : weatherText;
                    }

                    // --- AWNING INTELLIGENCE & WEATHER WARNINGS ---
                    const wind = d.current.wind_speed_10m; // km/h
                    const rain = d.current.precipitation; // mm
                    const clouds = d.current.cloud_cover; // %
                    
                    // THE FIX 2: Time-based solar logic specific to your 98° ENE orientation
                    const hour = new Date().getHours();
                    const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
                    const isSummerHalf = month >= 3 && month <= 9; // Apr to Oct

                    const intelBox = document.getElementById('sun-intel');
                    if (intelBox) {
                        // 1. Critical Weather Overrides
                        if (wind > 30) {
                            intelBox.innerText = `⚠️ Strong Wind (${Math.round(wind)}km/h). Keep Retracted (0%)`;
                            intelBox.style.color = "#ff0055"; // Red
                        } else if (rain > 0 || [61,63,80].includes(d.current.weather_code)) {
                            intelBox.innerText = `☔ Rain detected. Keep Retracted (0%)`;
                            intelBox.style.color = "#00d2ff"; // Blue
                        } else if (clouds > 80) {
                            intelBox.innerText = `☁️ Overcast (${clouds}% clouds). Awning not needed.`;
                            intelBox.style.color = "#aaaaaa"; // Grey
                        } 
                        // 2. Solar Glare Logic (True East ~98°)
                        else if (hour < 5 || hour >= 21) {
                            intelBox.innerText = `🌙 Sun is down.`;
                            intelBox.style.color = "#aaaaaa"; // Grey
                        } else if (hour >= 6 && hour < 13) {
                            // An East window takes direct glare from sunrise until ~12:30 PM
                            const recPos = isSummerHalf ? "100%" : "60%"; 
                            intelBox.innerText = `☀️ East Glare Active. Optimal deploy: ${recPos}`;
                            intelBox.style.color = "#ffcc00"; // Yellow
                        } else {
                            // After 1 PM, the sun is in the West, and the house shadows the patio
                            intelBox.innerText = `🌤️ House shadow active. Awning optional.`;
                            intelBox.style.color = "#00ffaa"; // Green
                        }
                    }
                }
            })
            .catch(e => { if(App.log) App.log("Weather Sync Failed", "warn"); });
    },

    updateLocation: async () => {
        try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${CONFIG.COORDS.lat}&lon=${CONFIG.COORDS.lng}`;
            const r = await fetch(url, { headers: { 'User-Agent': 'SmartHub-v87' } });
            const data = await r.json();
            
            const city = data.address.city || data.address.town || data.address.village || data.address.municipality || data.address.state || "Unknown";
            State.currentLocation = city;
            
            const descEl = document.getElementById('weather-desc');
            if (descEl && !descEl.innerText.includes(city) && city !== "Unknown") {
                descEl.innerText = `${city} • ${descEl.innerText}`;
            }
            
            if(App.log) App.log(`📍 Hub Location set to ${city}`, 'info');
            
        } catch (e) { 
            if(App.log) App.log("Location Geocoding Failed", "warn");
        }
    },

    loadPhotos: async () => {
        console.log("📸 Loading Photos...");
        
        // 1. Check if the local JS file was successfully loaded into memory (CORS Bypass!)
        if (typeof LOCAL_PHOTOS !== 'undefined' && LOCAL_PHOTOS.length > 0) {
            if (App.log) App.log("Loaded Curated Photos (photos_data.js)", "success");
            
            // Shuffle the static array so it feels fresh on every boot
            State.photos = App.shuffleArray(LOCAL_PHOTOS); 
            App.nextSlide();
            return; // Exit here so it doesn't trigger the Google Script
        }

        // 2. Fallback to the live Google Apps Script bridge if the local file is missing
        console.log("No photos_data.js found, falling back to Google Drive Bridge...");
        fetch(CONFIG.BRIDGE_URL + "?cb=" + Date.now())
            .then(r => r.json())
            .then(data => { 
                if (App.log) App.log("Loaded Live Photos from Google Drive", "info");
                State.photos = data; 
                if (State.photos.length > 0) App.nextSlide(); 
            })
            .catch(() => { if (App.log) App.log("Photo Bridge Offline - Check Wi-Fi", "error"); });
    },

    // --- HELPER: Local Fisher-Yates Shuffler ---
    shuffleArray: (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    },

    nextSlide: () => {
        if (!State.photos || !State.photos.length) return;
        
        const p = State.photos[State.photoIndex];
        const nextIdx = (State.slideIdx === 1) ? 2 : 1;
        
        const img = new Image();
        img.onload = async () => { 
            const sharp = document.getElementById(`sharp-${nextIdx}`);
            const blur = document.getElementById(`blur-${nextIdx}`);
            if(sharp) sharp.style.backgroundImage = `url('${p.url}')`;
            if(blur) blur.style.backgroundImage = `url('${p.url}')`;

            document.getElementById(`slide-${nextIdx}`).classList.add('active');
            document.getElementById(`slide-${State.slideIdx}`).classList.remove('active');
    
            let locName = "Smart Home";
            if (p.latitude && p.longitude) {
                locName = await App.getPhotoLocation(p.latitude, p.longitude);
            } else {
                locName = p.location || p.desc || "Memories";
            }

            let dateString = "";
            if (p.date) {
                try {
                    const d = new Date(p.date);
                    if (!isNaN(d.getTime())) {
                        dateString = d.toLocaleDateString('pl-PL', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                        });
                    }
                } catch(e) { console.warn("Could not parse photo date."); }
            }
            
            const descEl = document.getElementById('photo-desc');
            if (descEl) {
                descEl.innerText = dateString ? `${locName} • ${dateString}` : locName;
            }
            
            State.slideIdx = nextIdx;
            State.photoIndex = (State.photoIndex + 1) % State.photos.length;
        };
        img.src = p.url; 
    },

    getPhotoLocation: async (lat, lng) => {
        const key = `${parseFloat(lat).toFixed(3)},${parseFloat(lng).toFixed(3)}`;
        if (State.locationCache[key]) return State.locationCache[key]; 

        try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
            const r = await fetch(url, { headers: { 'User-Agent': 'SmartHub-v87' } });
            const data = await r.json();
            
            const city = data.address.city || data.address.town || data.address.village || data.address.state;
            const country = data.address.country;
            const finalName = city ? `${city}, ${country}` : country;

            State.locationCache[key] = finalName;
            return finalName;
        } catch (e) { return "Travels"; }
    },

    triggerCloudMedia: async (actionName, targetSwitchId) => {
        try {
            const res = await fetch(`https://api.smartthings.com/v1/devices/${targetSwitchId}/commands`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${ST_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    commands: [{
                        component: "main",
                        capability: "switch",
                        command: "on"
                    }]
                })
            });

            if (res.ok) {
                if (App.log) App.log(`Cloud Bridge: ${actionName} sent successfully`, "success");
            } else {
                if (App.log) App.log(`Cloud Bridge: SmartThings rejected ${actionName}`, "warn");
            }
        } catch (e) {
            if (App.log) App.log("Cloud Bridge: Network failure", "error");
        }
    },

    tv: async (service, method, params) => { 
        if (App.log) App.log(`TV Cmd: ${method}`, 'info');

        const tvIP = "203.0.113.154";
        const PSK = "1234"; 
        
        let finalService = service;
        let finalParams = params;

        if (method === 'setPowerStatus') {
            const btn = document.getElementById('tv-power-btn');
            const tvContainer = document.querySelector('.tv-meta');
            if (params.status) {
                btn?.classList.add('online');
                tvContainer?.classList.remove('tv-off');
            } else {
                btn?.classList.remove('online');
                tvContainer?.classList.add('tv-off');
                document.getElementById('tv-mute-btn')?.classList.remove('muted'); 
            }
        }

        if (method === 'setAudioMute') {
            finalService = 'audio';
            const btn = document.getElementById('tv-mute-btn');
            const isCurrentlyMuted = btn?.classList.contains('muted');
            const newStatus = !isCurrentlyMuted; 
            
            if (newStatus) btn?.classList.add('muted');
            else btn?.classList.remove('muted');
            
            finalParams = { status: newStatus }; 
        }

        if (method === 'setAudioVolume') {
            finalService = 'audio';
            finalParams = { target: "speaker", volume: params.volume.toString() };
        }

        if (method === 'setActiveApp') {
            finalService = 'appControl';
        }

        // --- Google Home Cloud Bridge ---
        if (service === 'IRCC') {
            if (method === 'Pause') {
                App.triggerCloudMedia('Pause', PAUSE_SWITCH_ID);
                return;
            }
            if (method === 'Play') {
                App.triggerCloudMedia('Play', PLAY_SWITCH_ID);
                return;
            }
        }
        
        
        try {
            const payload = { method: method, version: "1.0", id: 1, params: [finalParams] };
            const res = await fetch(`http://${tvIP}/sony/${finalService}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Auth-PSK': PSK },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (data.error) {
                if(App.log) App.log(`TV Error: ${data.error[1]}`, "warn");
            } else {
                if(App.log) App.log(`TV Success: ${method}`, "success");
            }

        } catch(e) {
            if(App.log) App.log("TV Command Failed", "error");
        }
    },

    startBackgroundJobs: () => {
        setInterval(() => { 
            const clk = document.getElementById('widget-clock'); 
            if(clk) clk.innerText = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}); 
        }, 1000);

        setInterval(App.nextSlide, CONFIG.SLIDE_INTERVAL);
        setInterval(App.updateWeather, CONFIG.WEATHER_INTERVAL);

        let lastInteraction = Date.now();
        
        document.addEventListener('click', () => { 
            lastInteraction = Date.now(); 
        });

        const runSmartPoll = () => {
            const timeSinceActive = Date.now() - lastInteraction;
            const nextDelay = (timeSinceActive < 180000) ? 60000 : 300000;

            setTimeout(() => {
                if (!window.isSimulationMode && !document.hidden) {
                    App.syncTVPower();
                    Object.keys(CONFIG.IPS).forEach(id => {
                        if (State.onlineStatus[id] === false) App.finalize(id); 
                        else if (!State.movingRooms[id]) App.finalize(id);      
                    });
                }
                runSmartPoll(); 
            }, nextDelay);
        };
        
        runSmartPoll();

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === 'visible' && !window.isSimulationMode) {
                lastInteraction = Date.now(); 
                Object.keys(CONFIG.IPS).forEach(id => {
                    if (!State.movingRooms[id]) App.finalize(id);
                });
            }
        });
    }
};

window.App = App;
window.toggleDrawer = () => document.getElementById('control-drawer')?.classList.toggle('hidden');
window.toggleDebug = () => { const box = document.getElementById('debug-log'); if(box) box.style.display = (box.style.display === 'none') ? 'block' : 'none'; };
window.toggleTopDrawer = () => document.getElementById('super-widget')?.classList.toggle('active');

document.addEventListener('DOMContentLoaded', App.init);