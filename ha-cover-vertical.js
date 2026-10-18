"use strict";(()=>{var o=class extends HTMLElement{setConfig(t){if(!t||!t.entity)throw new Error("Please define an entity");this.config=t}set hass(t){this._hass=t,this._rendered?this.update():(this._rendered=!0,this.render())}render(){let t=this.config.icon||"mdi:window-shutter";this.innerHTML=`
      <ha-card>
        <style>
          .card { padding: 16px; text-align: center; }
          .icon { font-size: 32px; margin-bottom: 8px; }
          .status {
            display: inline-block; padding: 4px 12px; border-radius: 12px;
            font-size: 12px; font-weight: 600; margin-bottom: 8px;
            background: var(--secondary-background-color);
          }
          .status.open { background: #4caf50; color: white; }
          .status.closed { background: #616161; color: white; }
          .name { font-size: 16px; font-weight: 700; text-transform: uppercase; margin-bottom: 16px; letter-spacing: 0.5px; }
          .controls { display: flex; align-items: stretch; justify-content: center; gap: 8px; height: 140px; }
          .btn {
            flex: 1; border: none; border-radius: 12px; cursor: pointer;
            background: var(--secondary-background-color);
            display: flex; align-items: center; justify-content: center;
            font-size: 36px; color: var(--primary-text-color);
            min-width: 60px;
          }
          .btn:active { opacity: 0.6; }
          .slider-wrap { display: flex; align-items: center; padding: 0 4px; }
          input[type=range].vslider {
            writing-mode: vertical-lr; direction: rtl;
            width: 28px; height: 130px;
            accent-color: var(--primary-color);
          }
          .pos { margin-top: 12px; font-size: 13px; opacity: 0.7; }
        </style>
        <div class="card">
          <div class="icon"><ha-icon icon="${t}"></ha-icon></div>
          <div><span class="status" id="cstatus">\u2026</span></div>
          <div class="name" id="cname">Loading\u2026</div>
          <div class="controls">
            <button class="btn" id="copen" aria-label="Open">\u25B2</button>
            <div class="slider-wrap">
              <input type="range" class="vslider" min="0" max="100" value="0" id="cslider" aria-label="Position">
            </div>
            <button class="btn" id="cclose" aria-label="Close">\u25BC</button>
          </div>
          <div class="pos" id="cpos"></div>
        </div>
      </ha-card>
    `,this.querySelector("#copen").onclick=()=>{let e=this._hass.states[this.config.entity];e&&e.state==="opening"?this._hass.callService("cover","stop_cover",{entity_id:this.config.entity}):this._hass.callService("cover","open_cover",{entity_id:this.config.entity})},this.querySelector("#cclose").onclick=()=>{let e=this._hass.states[this.config.entity];e&&e.state==="closing"?this._hass.callService("cover","stop_cover",{entity_id:this.config.entity}):this._hass.callService("cover","close_cover",{entity_id:this.config.entity})},this.querySelector("#cslider").onchange=e=>this._hass.callService("cover","set_cover_position",{entity_id:this.config.entity,position:parseInt(e.target.value)}),this.querySelector("#cslider").ondblclick=()=>this._hass.callService("cover","stop_cover",{entity_id:this.config.entity}),this.update()}update(){if(!this._hass||!this.config)return;let t=this._hass.states[this.config.entity],e=this.querySelector("#cname"),s=this.querySelector("#cstatus"),d=this.querySelector("#cpos"),n=this.querySelector("#cslider");if(!e)return;if(!t){e.textContent="Not found",s.textContent="ERROR";return}let i=t.attributes.current_position??0,p=this.config.name||t.attributes.friendly_name||this.config.entity,c=i>=100,a=i<=0;e.textContent=p,s.textContent=t.state==="unavailable"?"OFFLINE":c?"OPEN":a?"CLOSED":`${i}%`,s.className="status"+(c?" open":a?" closed":""),d.textContent=t.state==="unavailable"?"Unavailable":"";let r=this.querySelector("#copen"),l=this.querySelector("#cclose");r&&(r.textContent=t.state==="opening"?"\u23F8":"\u25B2"),l&&(l.textContent=t.state==="closing"?"\u23F8":"\u25BC"),n&&document.activeElement!==n&&(n.value=i)}getCardSize(){return 4}};customElements.define("ha-cover-vertical-card",o);})();
