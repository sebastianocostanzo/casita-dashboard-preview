"use strict";(()=>{var a=class extends HTMLElement{setConfig(t){if(!t||!t.entity)throw new Error("Please define an entity");this.config=t}set hass(t){this._hass=t,this._rendered?this.update():(this._rendered=!0,this.render())}render(){let t=this.config.icon||"mdi:window-shutter";this.innerHTML=`
      <ha-card>
        <style>
          .card { padding: 20px 16px; text-align: center; }
          .icon { font-size: 36px; margin-bottom: 8px; }
          .status {
            display: inline-block; padding: 4px 14px; border-radius: 12px;
            font-size: 13px; font-weight: 600; margin-bottom: 10px;
            background: var(--secondary-background-color);
          }
          .status.open { background: #4caf50; color: white; }
          .status.closed { background: #616161; color: white; }
          .name { font-size: 17px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 0.5px; }
          .slider-wrap { display: flex; justify-content: center; height: 180px; }
          input[type=range].vslider {
            writing-mode: vertical-lr; direction: rtl;
            width: 40px; height: 170px;
            accent-color: var(--primary-color);
            cursor: pointer;
          }
        </style>
        <div class="card">
          <div class="icon"><ha-icon icon="${t}"></ha-icon></div>
          <div><span class="status" id="cstatus">\u2026</span></div>
          <div class="name" id="cname">Loading\u2026</div>
          <div class="slider-wrap">
            <input type="range" class="vslider" min="0" max="100" value="0" id="cslider" aria-label="Position">
          </div>
        </div>
      </ha-card>
    `,this.querySelector("#cslider").onchange=e=>{this._hass.callService("cover","set_cover_position",{entity_id:this.config.entity,position:parseInt(e.target.value)})},this.update()}update(){if(!this._hass||!this.config)return;let t=this._hass.states[this.config.entity],e=this.querySelector("#cname"),s=this.querySelector("#cstatus"),n=this.querySelector("#cslider");if(!e)return;if(!t){e.textContent="Not found",s.textContent="ERROR";return}let i=t.attributes.current_position??0,c=this.config.name||t.attributes.friendly_name||this.config.entity,r=i>=100,o=i<=0;e.textContent=c,s.textContent=t.state==="unavailable"?"OFFLINE":r?"OPEN":o?"CLOSED":`${i}%`,s.className="status"+(r?" open":o?" closed":""),n&&document.activeElement!==n&&(n.value=i)}getCardSize(){return 4}};customElements.define("ha-cover-vertical-card",a);})();
