"use strict";(()=>{var n=class extends HTMLElement{setConfig(t){this.config=t,this.entity=t.entity||"media_player.bravia_4k_ae2"}set hass(t){this._hass=t,this._rendered?this.update():(this._rendered=!0,this.render())}launchApp(t){this._hass.callService("media_player","play_media",{entity_id:this.entity,media_content_type:"app",media_content_id:t})}render(){let t=[{name:"Netflix",id:"com.netflix.ninja",color:"#e50914",text:"N"},{name:"Prime Video",id:"com.amazon.amazonvideo.livingroom",color:"#00a8e1",text:"prime video"},{name:"YouTube",id:"com.google.android.youtube.tv",color:"#ff0000",text:"\u25B6 YouTube"},{name:"Spotify",id:"com.spotify.tv.android",color:"#1db954",text:"Spotify"},{name:"Max",id:"com.wbd.stream",color:"#8b5cf6",text:"max"}];this.innerHTML=`
      <ha-card>
        <style>
          .tv { padding: 16px; }
          .row { display: flex; gap: 12px; margin-bottom: 12px; }
          .btn {
            flex: 1; padding: 20px; border: none; border-radius: 12px;
            font-size: 16px; font-weight: 600; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            min-height: 70px; color: white;
          }
          .btn:active { opacity: 0.7; }
          .power { background: #2e7d32; }
          .power.off { background: #616161; }
          .mute { background: #37474f; }
          .app { font-size: 18px; }
        </style>
        <div class="tv">
          <div class="row">
            <button class="btn power" id="tpower">\u23FB Power</button>
            <button class="btn mute" id="tmute">\u{1F507} Mute</button>
          </div>
          <div class="row" id="apps1"></div>
          <div class="row" id="apps2"></div>
        </div>
      </ha-card>
    `;let o=this.querySelector("#apps1"),s=this.querySelector("#apps2");t.slice(0,3).forEach(i=>{let e=document.createElement("button");e.className="btn app",e.style.background=i.color,e.textContent=i.text,e.onclick=()=>this.launchApp(i.id),o.appendChild(e)}),t.slice(3).forEach(i=>{let e=document.createElement("button");e.className="btn app",e.style.background=i.color,e.textContent=i.text,e.onclick=()=>this.launchApp(i.id),s.appendChild(e)}),this.querySelector("#tpower").onclick=()=>this._hass.callService("media_player","toggle",{entity_id:this.entity}),this.querySelector("#tmute").onclick=()=>this._hass.callService("media_player","volume_mute",{entity_id:this.entity,is_volume_muted:!0}),this.update()}update(){if(!this._hass)return;let t=this._hass.states[this.entity],o=this.querySelector("#tpower");if(!o||!t)return;let s=t.state==="off"||t.state==="unavailable";o.classList.toggle("off",s),o.textContent=s?"\u23FB Off":"\u23FB On"}getCardSize(){return 4}};customElements.define("ha-tv-v2-card",n);})();
