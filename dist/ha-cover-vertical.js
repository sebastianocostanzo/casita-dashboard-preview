"use strict";(()=>{var s=class extends HTMLElement{setConfig(t){if(!t||!t.entity)throw new Error("Please define an entity");this.config=t}set hass(t){this._hass=t,this._rendered?this.update():(this._rendered=!0,this.render())}render(){this.innerHTML=`
      <ha-card>
        <style>
          .wrap { display: flex; gap: 12px; padding: 16px; align-items: stretch; }
          .info { flex: 1; display: flex; flex-direction: column; justify-content: center; }
          .name { font-size: 18px; font-weight: 600; margin-bottom: 4px; }
          .pos { font-size: 14px; opacity: 0.7; }
          .controls { display: flex; gap: 12px; align-items: center; }
          .slider-wrap { display: flex; align-items: center; height: 120px; }
          input[type=range].vslider {
            writing-mode: vertical-lr;
            direction: rtl;
            width: 32px; height: 110px;
            accent-color: var(--primary-color);
          }
          .btns { display: flex; flex-direction: column; gap: 8px; }
          .btns button {
            padding: 10px 18px; font-size: 15px; border: none; border-radius: 8px;
            background: var(--primary-color); color: white; cursor: pointer;
            min-width: 90px;
          }
          .btns button:active { opacity: 0.7; }
          .btns button.pause { background: var(--secondary-background-color); color: var(--primary-text-color); }
        </style>
        <div class="wrap">
          <div class="info">
            <div class="name" id="cname">Loading...</div>
            <div class="pos" id="cpos"></div>
          </div>
          <div class="controls">
            <div class="slider-wrap">
              <input type="range" class="vslider" min="0" max="100" value="0" id="cslider">
            </div>
            <div class="btns">
              <button id="copen">Open</button>
              <button id="cpause" class="pause">Pause</button>
              <button id="cclose">Close</button>
            </div>
          </div>
        </div>
      </ha-card>
    `,this.querySelector("#copen").onclick=()=>this._hass.callService("cover","open_cover",{entity_id:this.config.entity}),this.querySelector("#cpause").onclick=()=>this._hass.callService("cover","stop_cover",{entity_id:this.config.entity}),this.querySelector("#cclose").onclick=()=>this._hass.callService("cover","close_cover",{entity_id:this.config.entity}),this.querySelector("#cslider").onchange=t=>this._hass.callService("cover","set_cover_position",{entity_id:this.config.entity,position:parseInt(t.target.value)}),this.update()}update(){if(!this._hass||!this.config)return;let t=this._hass.states[this.config.entity],e=this.querySelector("#cname"),n=this.querySelector("#cpos"),i=this.querySelector("#cslider");if(!e)return;if(!t){e.textContent="Entity not found",n.textContent=this.config.entity;return}let o=t.attributes.current_position??0,r=this.config.name||t.attributes.friendly_name||this.config.entity;e.textContent=r,n.textContent=t.state==="unavailable"?"Unavailable":`${o}%`,i&&document.activeElement!==i&&(i.value=o)}getCardSize(){return 3}};customElements.define("ha-cover-vertical-card",s);})();
