/* ==========================================================================
   MANUAL TEST SUITE v40 (Panel Consistency)
   - Fix: syncToApp now also refreshes the panel's own slider/pos readouts
     (they showed stale boot values, e.g. MASTER 0% while dashboard showed 100%)
   - Fix: power toggle button now shows ON/OFF state + log line (was unresponsive-looking)
   - Fix: monitor rows have aria-labels
   - Inherits v39: parse-time interceptor install (boot-race fix)
   ========================================================================== */

const SimDash = {
    // --- 1. VIRTUAL BACKEND ---
    // TV_IP must match the hardcoded tvIP inside App.tv (v89 engine).
    TV_IP: '203.0.113.154',
    VirtualState: {
        kid:     { pos: 0,   offline: false },
        master:  { pos: 100, offline: false },
        tv_area: { pos: 50,  offline: false },
        sofa:    { pos: 0,   offline: true },
        awning:  { pos: 0,   offline: false } // <--- NEW: Virtual Awning
    },
    Network: { deadIPs: [] }, 

    init: () => {
        // v39: install the fetch interceptor IMMEDIATELY (parse time), not on
        // window.load. App.init runs on DOMContentLoaded (which fires BEFORE
        // window.load) and issues finalize/syncTVPower calls — without this,
        // those boot calls use the native fetch (real egress + console errors).
        // The interceptor needs only CONFIG (already parsed); UI waits for load.
        SimDash.setupInterceptors();
        window.addEventListener('load', () => {
            window.SimDash = SimDash; 
            SimDash.injectStyles();
            SimDash.renderUI();
            setTimeout(() => {
                if (window.isSimulationMode) SimDash.syncAllToApp();
                SimDash.updateModeUI();
                SimDash.log("🚀 READY. All systems nominal.", "SYSTEM");
            }, 800);
            setInterval(SimDash.monitorLoop, 500);
        });
    },

    // --- 2. TESTS ---
    Tests: [
        { 
            id: 1, name: "1. Startup & Recovery", 
            instruct: "<b>STEPS:</b><br>1. Toggle Sofa PWR (Offline). Check Grey.<br>2. Toggle PWR (Online). Check Blue.",
            setup: async () => { 
                 if(window.isSimulationMode) { SimDash.VirtualState.sofa.offline = true; SimDash.syncToApp('sofa'); }
                 else { await App.finalize('sofa'); }
            },
            verify: async () => {
                const col = document.querySelector('.room-column[data-room="sofa"]');
                if(window.isSimulationMode) {
                     if(!col.classList.contains('offline')) throw "Should be GREY";
                     SimDash.VirtualState.sofa.offline = false;
                     SimDash.syncToApp('sofa');
                     await SimDash.wait(500);
                     if(col.classList.contains('offline')) throw "Should be BLUE";
                     return true;
                }
                return !col.classList.contains('offline');
            }
        },
        { 
            id: 1.1, name: "1.1 Button Limits", 
            instruct: "<b>MANUAL:</b> Check Arrow disabled states at 0% and 100%.",
            setup: async () => {
                SimDash.VirtualState.kid.pos = 0; SimDash.VirtualState.master.pos = 100;
                SimDash.syncToApp('kid'); SimDash.syncToApp('master');
            },
            verify: async () => {
                const btnDown = document.querySelector('.room-column[data-room="kid"] .ghost-btn:nth-of-type(2)');
                if (!btnDown.disabled) throw "Down btn enabled at 0%";
                return true;
            }
        },
        { 
            id: 2, name: "2. Movement & Icons (Optimistic)", 
            instruct: "<b>STEPS:</b><br>1. Click Open on Kid.<br>2. Verify Icon becomes PAUSE instantly.",
            setup: async () => {
                SimDash.forceReset('kid');
                SimDash.VirtualState.kid.pos = 50;
                SimDash.syncToApp('kid');
            },
            verify: async () => {
                App.cover('kid', 'Open'); 
                await SimDash.wait(50); 

                const btn = document.querySelector('.room-column[data-room="kid"] .ghost-btn:first-child');
                const html = btn.innerHTML.toLowerCase();
                if (html.includes('line') || html.includes('rect')) return true; 

                throw "Icon didn't optimistically change to PAUSE";
            }
        },
        { 
            id: 2.1, name: "2.1 True Pause Logic", 
            instruct: "<b>MANUAL:</b> Click Open, then Pause. Verify the slider actually freezes.",
            setup: async () => {
                SimDash.forceReset('kid');
                SimDash.VirtualState.kid.pos = 0;
                SimDash.syncToApp('kid');
            },
            verify: async () => {
                App.cover('kid', 'Open'); 
                await SimDash.wait(800);  
                App.cover('kid', 'Open'); // Send Smart Stop
                await SimDash.wait(800);  
                
                const stoppedPos = SimDash.VirtualState.kid.pos;
                await SimDash.wait(600);  
                
                if (SimDash.VirtualState.kid.pos !== stoppedPos) throw "Virtual Motor kept dragging!";
                if (stoppedPos <= 0 || stoppedPos >= 100) throw "Slider didn't stop in the middle!";
                return true;
            }
        },
        { 
            id: 3, name: "3. Progress Bar Target", 
            instruct: "<b>MANUAL:</b> Click bar middle. Verify Pink Line.",
            setup: async () => {
                SimDash.forceReset('kid');
                SimDash.VirtualState.kid.pos = 0;
                SimDash.syncToApp('kid');
            },
            verify: async () => {
                await App.cover('kid', 'pos', 50);
                await SimDash.wait(100); 
                const target = document.getElementById('target-kid');
                if (!target || !target.classList.contains('visible')) throw "Target line missing";
                return true;
            }
        },
        { 
            id: 4, name: "4. IP Failover (Background)", 
            instruct: "<b>MANUAL:</b> Block IP. Click Open. Check logs for failover.",
            setup: async () => {
                SimDash.forceReset('kid');
                SimDash.Network.deadIPs = [CONFIG.IPS.kid[0]]; 
                SimDash.log("⚠️ Primary IP Blocked", "NETWORK");
            },
            verify: async () => {
                App.cover('kid', 'Open');
                await SimDash.wait(600); 
                SimDash.Network.deadIPs = []; 
                
                const col = document.querySelector('.room-column[data-room="kid"]');
                if (col.classList.contains('offline')) throw "Failover failed (Room dropped offline)";
                return true;
            }
        },
        {
            id: 6, name: "6. External Event Sync",
            instruct: "<b>MANUAL:</b> Simulate Shelly App moving cover. UI should update on next poll.",
            setup: async () => {
                SimDash.forceReset('kid');
                SimDash.VirtualState.kid.pos = 0;
                SimDash.syncToApp('kid');
            },
            verify: async () => {
                SimDash.VirtualState.kid.pos = 75;
                await App.finalize('kid'); 
                await SimDash.wait(300);
                
                const bar = document.getElementById('prog-kid');
                if (bar.style.height !== '75%') throw "UI didn't sync to external change";
                return true;
            }
        },
        {
            id: 7, name: "7. Awning API & Pause Logic",
            instruct: "<b>STEPS:</b><br>1. Click Extend Awning.<br>2. Verifies BleBox endpoint and Pause intercept.",
            setup: async () => {
                SimDash.forceReset('awning');
                SimDash.VirtualState.awning.pos = 0;
                SimDash.syncToApp('awning');
            },
            verify: async () => {
                // Sends the new 'open' command
                App.cover('awning', 'open');
                await SimDash.wait(100);
                
                // THE FIX: Select all ghost buttons in the awning bar and check the second one (index 1)
                const btns = document.querySelectorAll('.room-column[data-room="awning"] .ghost-btn');
                const html = btns[1].innerHTML.toLowerCase();
                
                if (!html.includes('line') && !html.includes('rect')) throw "Horizontal Pause icon didn't render.";
                
                // Trigger the Smart Stop
                App.cover('awning', 'open');
                await SimDash.wait(600);
                
                const stoppedPos = SimDash.VirtualState.awning.pos;
                if (stoppedPos <= 0 || stoppedPos >= 100) throw "Awning didn't stop in the middle!";
                return true;
            }
        },
        {
            id: 8, name: "8. Awning Asymmetric Math",
            instruct: "<b>STEPS:</b><br>1. Test checks if extending (50s) uses different math than retracting (60s).",
            setup: async () => {
                SimDash.forceReset('awning');
                SimDash.VirtualState.awning.pos = 0;
                SimDash.syncToApp('awning');
            },
            verify: async () => {
                App.cover('awning', 'pos', 10);
                await SimDash.wait(50);
                
                // If it uses the 50s math, 10% should take exactly 5000ms. 
                // We check if the interval is successfully registered.
                if (!State.intervals['awning']) throw "Asymmetric interval failed to start.";
                return true;
            }
        }   
        
    ],

    // --- 3. HELPERS ---
    toggleOffline: (id) => {
        if (!window.isSimulationMode) return alert("Switch to SIM MODE.");
        const dev = SimDash.VirtualState[id];
        dev.offline = !dev.offline;
        SimDash.syncToApp(id); // v40: also refreshes the pwr button label
        SimDash.log(`🔌 ${id.toUpperCase()} virtual power: ${dev.offline ? 'OFFLINE' : 'ONLINE'}`, "SYSTEM");
    },
    updatePosFromSlider: (id, val) => {
        if (!window.isSimulationMode) return;
        SimDash.VirtualState[id].pos = parseInt(val);
        SimDash.syncToApp(id);
        document.getElementById(`pos-${id}`).innerText = `${val}%`;
    },

    forceReset: (id) => {
        SimDash.stopVirtualMotor(id);
        if (State.movingRooms && State.movingRooms[id]) delete State.movingRooms[id];
        if (State.intervals && State.intervals[id]) {
            clearInterval(State.intervals[id]);
            delete State.intervals[id];
        }
        SimDash.syncToApp(id);
    },
    
    stopVirtualMotor: (id) => {
        const dev = SimDash.VirtualState[id];
        dev.moving = false;
        if (dev.interval) clearInterval(dev.interval); 
    },

    syncToApp: (id) => {
        const v = SimDash.VirtualState[id];
        State.onlineStatus[id] = !v.offline;
        State.positions[id] = v.pos;
        App.updateButtons(id);
        const bar = document.getElementById(`prog-${id}`);
        if(bar) {
            // THE FIX: Horizontal sync for Awning
            if (id === 'awning') bar.style.width = `${v.pos}%`;
            else bar.style.height = `${v.pos}%`;
        }
        // v40: keep the panel's OWN monitor readouts in sync too (they kept
        // showing stale boot values while the dashboard showed the truth).
        const sl = document.getElementById(`slider-${id}`);
        if (sl) sl.value = v.pos;
        const po = document.getElementById(`pos-${id}`);
        if (po) po.innerText = `${v.pos}%`;
        SimDash.refreshPwrBtn(id);
    },

    // v40: the power toggle gave no visual feedback — the button label now
    // always reflects the virtual offline state.
    refreshPwrBtn: (id) => {
        const btn = document.getElementById(`pwr-btn-${id}`);
        if (!btn || !SimDash.VirtualState[id]) return;
        const off = SimDash.VirtualState[id].offline;
        btn.innerText = off ? 'OFF' : 'ON';
        btn.style.background = off ? '#ff5555' : '#00aa55';
        btn.style.color = '#fff';
    },
    
    // --- 4. ENGINE CORE ---
    showTestInfo: (id) => {
        const test = SimDash.Tests.find(t => t.id === id);
        const box = document.getElementById('test-info-box');
        box.style.display = 'block'; 
        box.innerHTML = `<div style="color:#00d2ff; font-weight:bold; margin-bottom:5px;">${test.name}</div>${test.instruct}`;
    },
    syncAllToApp: () => Object.keys(SimDash.VirtualState).forEach(id => SimDash.syncToApp(id)),
    wait: (ms) => new Promise(r => setTimeout(r, ms)),

    setupInterceptors: () => {
        window.originalFetch = window.fetch;
        window.fetch = async (url, options) => {
            if (!window.isSimulationMode) return window.originalFetch(url, options);

            // --- v38: SmartThings cloud bridge (Play/Pause) — never touch the real API in sim ---
            if (typeof url === 'string' && url.includes('api.smartthings.com')) {
                await SimDash.wait(50);
                SimDash.log(`☁️ MOCK ST: ${url.split('/').pop()}`, "NETWORK");
                return {
                    ok: true,
                    text: async () => '{}',
                    json: async () => ({})
                };
            }

            const ipMatch = url.match(/http:\/\/([0-9.]+)/);
            const targetIP = ipMatch ? ipMatch[1] : null;

            if (targetIP && SimDash.Network.deadIPs.includes(targetIP)) {
                SimDash.log(`❌ BLOCKING IP: ${targetIP}`, "NETWORK");
                throw new TypeError("Network Error (Simulated)");
            }

            let deviceId = null;
            Object.keys(CONFIG.IPS).forEach(k => { if(CONFIG.IPS[k].includes(targetIP)) deviceId = k; });

            // --- v38: Sony TV (App.tv hardcodes its IP; it is not in CONFIG.IPS) ---
            if (!deviceId && targetIP === SimDash.TV_IP) {
                await SimDash.wait(50);
                SimDash.log(`📺 MOCK TV: ${url.split('/').pop()}`, "NETWORK");
                const isPowerQuery = url.includes('/sony/system');
                const payload = isPowerQuery ? { result: [{ status: 'active' }] } : { result: [{}] };
                return {
                    ok: true,
                    text: async () => JSON.stringify(payload),
                    json: async () => payload
                };
            }

            if (!deviceId) return window.originalFetch(url, options);

            const dev = SimDash.VirtualState[deviceId];
            
            if (dev.offline) {
                SimDash.log(`🔌 OFFLINE: Ignoring request to ${deviceId}`, "NETWORK");
                throw new TypeError("Failed to fetch (Simulated Power Loss)");
            }

            await SimDash.wait(50); 
            SimDash.log(`⚡ MOCK RX: ${deviceId} -> ${url.split('/').pop()}`, "NETWORK");

            // --- SHELLY MOCKS ---
            if (url.includes('Cover.Open')) SimDash.startMotor(deviceId, 100);
            if (url.includes('Cover.Close')) SimDash.startMotor(deviceId, 0);
            if (url.includes('Cover.Stop')) SimDash.stopVirtualMotor(deviceId);
            if (url.includes('Cover.GoToPosition')) {
                const m = url.match(/pos=(\d+)/);
                if (m) SimDash.startMotor(deviceId, parseInt(m[1]));
            }

            // --- BLEBOX AWNING MOCKS ---
            if (url.includes('/s/s')) SimDash.stopVirtualMotor(deviceId);
            if (url.includes('/s/p/')) {
                const m = url.match(/\/s\/p\/(\d+)/);
                if (m) SimDash.startMotor(deviceId, parseInt(m[1]));
            }

            // --- DYNAMIC PAYLOAD RETURN ---
            return { 
                ok: true, 
                text: async () => deviceId === 'awning' 
                    ? JSON.stringify({ shutter: { currentPos: { position: dev.pos } } })
                    : JSON.stringify({ current_pos: dev.pos }),
                json: async () => deviceId === 'awning'
                    ? { shutter: { currentPos: { position: dev.pos } } }
                    : { current_pos: dev.pos } 
            };
        };
    },
    startMotor: (id, target) => {
        const dev = SimDash.VirtualState[id];
        SimDash.stopVirtualMotor(id); 
        dev.moving = true;
        const step = dev.pos < target ? 2 : -2;
        
        dev.interval = setInterval(() => {
            dev.pos += step;
            if ((step > 0 && dev.pos >= target) || (step < 0 && dev.pos <= target)) {
                dev.pos = target;
                dev.moving = false;
                clearInterval(dev.interval);
            }
            const sl = document.getElementById(`slider-${id}`);
            if(sl) sl.value = dev.pos;
            const po = document.getElementById(`pos-${id}`);
            if(po) po.innerText = `${dev.pos}%`;
        }, 50);
    },

    // --- 5. UI RENDERER ---
    injectStyles: () => {
        const s = document.createElement('style');
        s.innerHTML = `
            #sim-dash-trigger { position: fixed; bottom: 10px; left: 10px; z-index: 9999; background: #333; color: white; border: 1px solid #555; padding: 10px; border-radius: 5px; cursor: pointer; }
            #sim-dashboard { position: fixed; top: 10%; left: 10%; width: 80%; height: 80%; background: #111; border: 2px solid #444; z-index: 10000; display: none; color: #eee; font-family: monospace; flex-direction: column; padding: 20px; box-shadow: 0 10px 50px black; }
            .sim-cols { display: flex; gap: 20px; flex: 1; overflow: hidden; }
            #sim-log-output { flex: 1; background: #000; border: 1px solid #333; padding: 10px; overflow-y: auto; font-size: 11px; }
            .test-row { padding: 8px; border-bottom: 1px solid #222; cursor: pointer; font-size: 12px; }
            .mon-row { display: flex; align-items: center; font-size: 10px; margin: 5px 0; background: #222; padding: 5px; gap: 5px;}
            .run-batch-btn { background: #00ff88; width: 100%; padding: 10px; border: none; font-weight: bold; margin-bottom: 10px; cursor: pointer; }
            .sim-btn-small { background: #444; color: #fff; border: 1px solid #666; font-size: 9px; cursor: pointer; padding: 2px 6px; border-radius: 3px; }
            .sim-slider { flex:1; cursor: pointer; }
        `;
        document.head.appendChild(s);
    },
    renderUI: () => {
        const dash = document.createElement('div');
        dash.id = 'sim-dashboard';
        dash.innerHTML = `
            <div style="margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:18px; font-weight:bold; color:#ff0055;">SIMULATION MODE</span>
                <div>
                    <button id="mode-exit-btn" style="background:#ff0055; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-weight:bold; margin-right: 8px;">🛑 EXIT TO REAL</button>
                    <button id="mode-close-btn" style="background:#444; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Close</button>
                </div>
            </div>
            <div id="test-info-box" style="display:none; background:#222; padding:10px; border:1px solid #444; margin-bottom:15px; font-size:12px; border-left: 3px solid #00d2ff;"></div>
            <div class="sim-cols">
                <div style="flex:0 0 280px;">
                    <button id="run-selected-btn" class="run-batch-btn">🚀 RUN SELECTED</button>
                    <div id="test-list-hybrid"></div>
                    <div id="sim-monitor-rows" style="margin-top:20px;"></div>
                </div>
                <div id="sim-log-output"></div>
            </div>
        `;
        document.body.appendChild(dash);
        
        document.getElementById('mode-exit-btn').onclick = () => window.location.search = '';
        document.getElementById('mode-close-btn').onclick = () => document.getElementById('sim-dashboard').style.display = 'none';
        document.getElementById('run-selected-btn').onclick = SimDash.runSelectedTests;

        SimDash.Tests.forEach(t => {
            const row = document.createElement('div'); 
            row.className = "test-row";
            row.innerHTML = `
                <input type="checkbox" class="test-checkbox" value="${t.id}" id="cb-${t.id}"> 
                <label id="test-lbl-${t.id}" for="cb-${t.id}" style="cursor:pointer; padding-left:5px;">${t.name}</label>   
            `;
            row.onclick = () => { SimDash.showTestInfo(t.id); };
            document.getElementById('test-list-hybrid').appendChild(row);
        });

        Object.keys(SimDash.VirtualState).forEach(id => {
            const row = document.createElement('div'); row.className = "mon-row";
            row.setAttribute('role', 'group');
            row.setAttribute('aria-label', `Virtual device ${id}`); // v40: a11y label
            row.innerHTML = `
                <div style="width:50px;">${id.toUpperCase()}</div>
                <input type="range" id="slider-${id}" class="sim-slider" min="0" max="100" value="0" aria-label="${id} virtual position">
                <span id="pos-${id}" style="width:30px; text-align:right;">0%</span>
                <button id="pwr-btn-${id}" class="sim-btn-small" style="width:35px; font-weight:bold; border:none; border-radius:3px;">ON</button>
            `;
            document.getElementById('sim-monitor-rows').appendChild(row);

            document.getElementById(`slider-${id}`).oninput = (e) => SimDash.updatePosFromSlider(id, e.target.value);
            document.getElementById(`pwr-btn-${id}`).onclick = () => SimDash.toggleOffline(id);
            SimDash.refreshPwrBtn(id); // v40: correct initial label (sofa starts offline)
        });

        const trig = document.createElement('button'); trig.id = 'sim-dash-trigger'; trig.innerText = '🛠️ TEST';
        trig.onclick = () => { const d = document.getElementById('sim-dashboard'); d.style.display = d.style.display==='flex'?'none':'flex'; };
        document.body.appendChild(trig);
    },
    toggleMode: () => {
        window.isSimulationMode = !window.isSimulationMode;
        SimDash.updateModeUI();
        if(window.isSimulationMode) SimDash.syncAllToApp();
    },
    updateModeUI: () => {
        const btn = document.getElementById('mode-toggle-btn');
        if(btn) btn.innerText = window.isSimulationMode ? "SWITCH TO REAL" : "SWITCH TO SIM"; 
    },
    runSelectedTests: async () => {
        const checkboxes = document.querySelectorAll('.test-checkbox:checked');
        if (checkboxes.length === 0) { alert("Select tests."); return; }
        SimDash.log("--- BATCH RUN START ---", "SYSTEM");
        for (const cb of checkboxes) {
            const testId = parseFloat(cb.value);
            const test = SimDash.Tests.find(t => t.id === testId);
            const label = document.getElementById(`test-lbl-${testId}`);
            label.style.color = "#fff"; label.innerText = `⏳ ${test.name}`;
            try {
                await test.setup();
                await SimDash.wait(250);
                const success = await test.verify();
                if(success) {
                    label.style.color = "#00ff88"; label.innerText = `✅ ${test.name}`;
                    SimDash.log(`PASSED: ${test.name}`, "SYSTEM");
                }
            } catch (e) {
                label.style.color = "#ff5555"; label.innerText = `❌ ${test.name}`;
                SimDash.log(`FAILED: ${test.name} - ${e}`, "ERROR");
            }
            await SimDash.wait(800);
        }
        SimDash.log("--- BATCH RUN COMPLETE ---", "SYSTEM");
    },
    monitorLoop: () => {
        if (!window.isSimulationMode) {
            const dash = document.getElementById('sim-dashboard');
            const trigger = document.getElementById('sim-dash-trigger');
            if (dash) dash.style.display = 'none';
            if (trigger) trigger.style.display = 'none';
            return; 
        }

        const trigger = document.getElementById('sim-dash-trigger');
        if (trigger) trigger.style.display = 'block';

        Object.keys(SimDash.VirtualState).forEach(id => {
            const dev = SimDash.VirtualState[id];
            const el = document.getElementById(`mon-${id}`);
            if (el) el.innerText = dev.offline ? 'OFFLINE' : `POS: ${dev.pos}%${dev.moving ? ' (MOVING)' : ''}`;
        });
    },
    log: (msg, type="INFO") => {
        const box = document.getElementById('sim-log-output'); if(!box) return;
        const color = type==="ERROR"?"#ff5555":type==="NETWORK"?"#ff00ff":type==="SYSTEM"?"#00d2ff":"#eee";
        box.innerHTML = `<div style="border-bottom:1px solid #333; padding:4px;"><span style="color:${color}">[${type}]</span> ${msg}</div>` + box.innerHTML;
    }
};

SimDash.init();