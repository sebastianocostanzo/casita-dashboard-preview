"use strict";(()=>{var Xt=Object.create;var ut=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var Zt=Object.getOwnPropertyNames;var Kt=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty;var ee=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ie=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Zt(e))!te.call(r,s)&&s!==t&&ut(r,s,{get:()=>e[s],enumerable:!(i=At(e,s))||i.enumerable});return r};var se=(r,e,t)=>(t=r!=null?Xt(Kt(r)):{},ie(e||!r||!r.__esModule?ut(t,"default",{value:r,enumerable:!0}):t,r));var c=(r,e,t,i)=>{for(var s=i>1?void 0:i?At(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ut(e,t,s),s};var Qt=ee(()=>{"use strict";var Et=class extends HTMLElement{setConfig(e){if(!e||!e.entity)throw new Error("Please define an entity");this.config=e}set hass(e){this._hass=e,this._rendered?this.update():(this._rendered=!0,this.render())}render(){this.innerHTML=`
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
    `,this.querySelector("#copen").onclick=()=>this._hass.callService("cover","open_cover",{entity_id:this.config.entity}),this.querySelector("#cpause").onclick=()=>this._hass.callService("cover","stop_cover",{entity_id:this.config.entity}),this.querySelector("#cclose").onclick=()=>this._hass.callService("cover","close_cover",{entity_id:this.config.entity}),this.querySelector("#cslider").onchange=e=>this._hass.callService("cover","set_cover_position",{entity_id:this.config.entity,position:parseInt(e.target.value)}),this.update()}update(){if(!this._hass||!this.config)return;let e=this._hass.states[this.config.entity],t=this.querySelector("#cname"),i=this.querySelector("#cpos"),s=this.querySelector("#cslider");if(!t)return;if(!e){t.textContent="Entity not found",i.textContent=this.config.entity;return}let n=e.attributes.current_position??0,o=this.config.name||e.attributes.friendly_name||this.config.entity;t.textContent=o,i.textContent=e.state==="unavailable"?"Unavailable":`${n}%`,s&&document.activeElement!==s&&(s.value=n)}getCardSize(){return 3}};customElements.define("ha-cover-vertical-card",Et)});var it=globalThis,st=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),kt=new WeakMap,V=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(st&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=kt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&kt.set(t,e))}return e}toString(){return this.cssText}},Tt=r=>new V(typeof r=="string"?r:r+"",void 0,mt),_=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new V(t,r,mt)},Pt=(r,e)=>{if(st)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=it.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},ft=st?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Tt(t)})(r):r;var{is:ne,defineProperty:re,getOwnPropertyDescriptor:oe,getOwnPropertyNames:ae,getOwnPropertySymbols:le,getPrototypeOf:ce}=Object,T=globalThis,Mt=T.trustedTypes,he=Mt?Mt.emptyScript:"",de=T.reactiveElementPolyfillSupport,j=(r,e)=>r,F={toAttribute(r,e){switch(e){case Boolean:r=r?he:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},nt=(r,e)=>!ne(r,e),It={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),T.litPropertyMetadata??(T.litPropertyMetadata=new WeakMap);var E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=It){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&re(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:n}=oe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let l=s?.call(this);n?.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??It}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let e=ce(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let t=this.properties,i=[...ae(t),...le(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(ft(s))}else e!==void 0&&t.push(ft(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:F).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:F;this._$Em=s;let l=o.fromAttribute(t,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(e!==void 0){let o=this.constructor;if(s===!1&&(n=this[e]),i??(i=o.getPropertyOptions(e)),!((i.hasChanged??nt)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:o}=n,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[j("elementProperties")]=new Map,E[j("finalized")]=new Map,de?.({ReactiveElement:E}),(T.reactiveElementVersions??(T.reactiveElementVersions=[])).push("2.1.2");var J=globalThis,Ot=r=>r,rt=J.trustedTypes,Rt=rt?rt.createPolicy("lit-html",{createHTML:r=>r}):void 0,zt="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,Bt="?"+P,pe=`<${Bt}>`,N=document,W=()=>N.createComment(""),Y=r=>r===null||typeof r!="object"&&typeof r!="function",wt=Array.isArray,ue=r=>wt(r)||typeof r?.[Symbol.iterator]=="function",gt=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Nt=/>/g,R=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Ut=/"/g,qt=/^(?:script|style|textarea|title)$/i,$t=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),d=$t(1),He=$t(2),ze=$t(3),A=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ht=new WeakMap,D=N.createTreeWalker(N,129);function Vt(r,e){if(!wt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(e):e}var me=(r,e)=>{let t=r.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",o=G;for(let l=0;l<t;l++){let a=r[l],h,u,p=-1,w=0;for(;w<a.length&&(o.lastIndex=w,u=o.exec(a),u!==null);)w=o.lastIndex,o===G?u[1]==="!--"?o=Dt:u[1]!==void 0?o=Nt:u[2]!==void 0?(qt.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=R):u[3]!==void 0&&(o=R):o===R?u[0]===">"?(o=s??G,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?R:u[3]==='"'?Ut:Lt):o===Ut||o===Lt?o=R:o===Dt||o===Nt?o=G:(o=R,s=void 0);let S=o===R&&r[l+1].startsWith("/>")?" ":"";n+=o===G?a+pe:p>=0?(i.push(h),a.slice(0,p)+zt+a.slice(p)+P+S):a+P+(p===-2?l:S)}return[Vt(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Q=class r{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0,l=e.length-1,a=this.parts,[h,u]=me(e,t);if(this.el=r.createElement(h,i),D.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=D.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(zt)){let w=u[o++],S=s.getAttribute(p).split(P),y=/([.?@])?(.*)/.exec(w);a.push({type:1,index:n,name:y[2],strings:S,ctor:y[1]==="."?_t:y[1]==="?"?bt:y[1]==="@"?yt:q}),s.removeAttribute(p)}else p.startsWith(P)&&(a.push({type:6,index:n}),s.removeAttribute(p));if(qt.test(s.tagName)){let p=s.textContent.split(P),w=p.length-1;if(w>0){s.textContent=rt?rt.emptyScript:"";for(let S=0;S<w;S++)s.append(p[S],W()),D.nextNode(),a.push({type:2,index:++n});s.append(p[w],W())}}}else if(s.nodeType===8)if(s.data===Bt)a.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(P,p+1))!==-1;)a.push({type:7,index:n}),p+=P.length-1}n++}}static createElement(e,t){let i=N.createElement("template");return i.innerHTML=e,i}};function B(r,e,t=r,i){if(e===A)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,n=Y(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=B(r,s._$AS(r,e.values),s,i)),e}var vt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??N).importNode(t,!0);D.currentNode=s;let n=D.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new X(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new xt(n,this,e)),this._$AV.push(h),a=i[++l]}o!==a?.index&&(n=D.nextNode(),o++)}return D.currentNode=N,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},X=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),Y(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ue(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Q.createElement(Vt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let n=new vt(s,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=Ht.get(e.strings);return t===void 0&&Ht.set(e.strings,t=new Q(e)),t}k(e){wt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let n of e)s===t.length?t.push(i=new r(this.O(W()),this.O(W()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Ot(e).nextSibling;Ot(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,s){let n=this.strings,o=!1;if(n===void 0)e=B(this,e,t,0),o=!Y(e)||e!==this._$AH&&e!==A,o&&(this._$AH=e);else{let l=e,a,h;for(e=n[0],a=0;a<n.length-1;a++)h=B(this,l[i+a],t,a),h===A&&(h=this._$AH[a]),o||(o=!Y(h)||h!==this._$AH[a]),h===v?e=v:e!==v&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!s&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_t=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},bt=class extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},yt=class extends q{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??v)===A)return;let i=this._$AH,s=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==v&&(i===v||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}};var fe=J.litHtmlPolyfillSupport;fe?.(Q,X),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.3.3");var jt=(r,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=t?.renderBefore??null;i._$litPart$=s=new X(e.insertBefore(W(),n),n,void 0,t??{})}return s._$AI(r),s};var Z=globalThis,g=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};g._$litElement$=!0,g.finalized=!0,Z.litElementHydrateSupport?.({LitElement:g});var ge=Z.litElementPolyfillSupport;ge?.({LitElement:g});(Z.litElementVersions??(Z.litElementVersions=[])).push("4.2.2");var M=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var ve={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:nt},_e=(r=ve,e,t)=>{let{kind:i,metadata:s}=t,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),i==="accessor"){let{name:o}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(i==="setter"){let{name:o}=t;return function(l){let a=this[o];e.call(this,l),this.requestUpdate(o,a,r,!0,l)}}throw Error("Unsupported decorator location: "+i)};function m(r){return(e,t)=>typeof t=="object"?_e(r,e,t):((i,s,n)=>{let o=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}function f(r){return m({...r,state:!0,attribute:!1})}var I={TRAVEL_TIME:{default:26e3,awning_out:5e4,awning_in:6e4},POLL_INTERVAL:6e4,SLIDE_INTERVAL:15e3,WEATHER_INTERVAL:18e5,IPS:{kid:["192.168.86.203","192.168.55.203"],master:["192.168.86.22","192.168.55.13"],tv_area:["192.168.86.50","192.168.55.16"],sofa:["192.168.55.17","192.168.86.21"],awning:["192.168.86.27"]},BRIDGE_URL:"https://script.google.com/macros/s/AKfycbxzSWDfAiOOxyzQLMYdwOPAxAak-HEBGCstUARUDVQkWt9qSTqXvjCBr7-8q3qkKfQ7/exec",COORDS:{lat:51.078,lng:16.92}},Ft={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"};var be={0:"Clear",1:"Mainly Clear",2:"Partly Cloudy",3:"Overcast",45:"Foggy",61:"Rainy",63:"Heavy Rain",80:"Showers"},b=class extends g{constructor(){super(...arguments);this.latitude=0;this.longitude=0;this.pollInterval=I.WEATHER_INTERVAL;this.temperature=null;this.condition="";this.aqi=null;this._timer=null;this._lastCoords=""}static weatherCodeText(t){return be[t]??"Cloudy"}static aqiBand(t){return t<=50?{label:"Good",color:"#4caf50"}:t<=100?{label:"Moderate",color:"#ffeb3b"}:t<=150?{label:"Unhealthy (sensitive)",color:"#ff9800"}:{label:"Unhealthy",color:"#f44336"}}connectedCallback(){super.connectedCallback(),this._lastCoords=`${this.latitude},${this.longitude}`,this.refresh(),this._startTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(t){if(t.has("pollInterval")&&this._startTimer(),t.has("latitude")||t.has("longitude")){let i=`${this.latitude},${this.longitude}`;i!==this._lastCoords&&(this._lastCoords=i,this.refresh())}}async refresh(){await Promise.allSettled([this._fetchWeather(),this._fetchAqi()])}_startTimer(){this._stopTimer(),this.pollInterval>0&&(this._timer=setInterval(()=>{this.refresh()},this.pollInterval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}async _fetchWeather(){try{let t=`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,weather_code`,i=await fetch(t);if(!i.ok)return;let s=await i.json();if(!s||!s.current)return;this.temperature=Math.round(s.current.temperature_2m),this.condition=b.weatherCodeText(s.current.weather_code)}catch{}}async _fetchAqi(){try{let t=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${this.latitude}&longitude=${this.longitude}&current=us_aqi`,i=await fetch(t);if(!i.ok)return;let s=await i.json();if(!s||!s.current||s.current.us_aqi==null)return;this.aqi=Math.round(s.current.us_aqi)}catch{}}render(){let t=this.temperature===null?"\u2026":`${this.temperature}\xB0`,i=this.condition===""?"\u2026":this.condition,s=this.aqi===null?null:b.aqiBand(this.aqi);return d`
      <div class="weather">
        <div class="temp" part="temp">${t}</div>
        <div class="condition" part="condition">${i}</div>
        ${s!==null?d`
              <div class="aqi" part="aqi">
                <span class="dot" style="color:${s.color}">●</span>
                AQI ${this.aqi} ${s.label}
              </div>
            `:""}
      </div>
    `}};b.styles=_`
    :host {
      display: block;
      font-family: -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--primary-text-color, #fff);
      text-align: center;
      user-select: none;
    }
    .weather {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 8px;
    }
    /* Kiosk readability: temperature is the hero number (50+ eyes). */
    .temp {
      font-size: 64px;
      font-weight: 800;
      line-height: 1;
    }
    .condition {
      font-size: 32px;
      font-weight: 600;
      line-height: 1.2;
    }
    .aqi {
      font-size: 28px;
      font-weight: 600;
      line-height: 1.3;
      margin-top: 4px;
    }
    .aqi .dot {
      font-size: 1em;
    }
  `,c([m({type:Number})],b.prototype,"latitude",2),c([m({type:Number})],b.prototype,"longitude",2),c([m({type:Number})],b.prototype,"pollInterval",2),c([f()],b.prototype,"temperature",2),c([f()],b.prototype,"condition",2),c([f()],b.prototype,"aqi",2),b=c([M("kiosk-weather")],b);var at=class extends b{setConfig(e){if(!e||typeof e.latitude!="number"||typeof e.longitude!="number")throw new Error("ha-weather-card: config must include numeric latitude and longitude");this._config=e,this.latitude=e.latitude,this.longitude=e.longitude,e.poll_interval&&(this.pollInterval=e.poll_interval)}getCardSize(){return 2}static getStubConfig(){return{latitude:51.078,longitude:16.92}}};customElements.define("ha-weather-card",at);var Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jt=r=>(...e)=>({_$litDirective$:r,values:e}),lt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var K=class extends lt{constructor(e){if(super(e),this.it=v,e.type!==Gt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this._t=void 0,this.it=e;if(e===A)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};K.directiveName="unsafeHTML",K.resultType=1;var tt=Jt(K);var ye={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"},St=class{constructor(e={}){this.handlers=new Map;this.activeIPs={};this.onlineStatus={};this.hassSocket=null;this.hassMsgId=0;this.hassPending=new Map;this.hassStates=new Map;this.backend=e.backend??"shelly-direct",this.ips=e.ips??I.IPS,this.deviceToEntity=e.deviceToEntity??ye,this.hassUrl=e.hassUrl,this.hassToken=e.hassToken,this.fetchFn=e.fetchFn??fetch,this.log=e.logFn??(()=>{})}on(e,t){this.handlers.has(e)||this.handlers.set(e,new Set),this.handlers.get(e).add(t)}off(e,t){this.handlers.get(e)?.delete(t)}emit(e,t){this.handlers.get(e)?.forEach(i=>{try{i(t)}catch{}})}getBackend(){return this.backend}setBackend(e,t={}){t.hassUrl!==void 0&&(this.hassUrl=t.hassUrl),t.hassToken!==void 0&&(this.hassToken=t.hassToken),t.deviceToEntity!==void 0&&(this.deviceToEntity=t.deviceToEntity),t.ips!==void 0&&(this.ips=t.ips),e!==this.backend&&(this.disconnectHass(),this.backend=e)}async fetchDevice(e,t){let s=[...this.ips[e]??[]],n=this.activeIPs[e];n&&s.includes(n)&&(s=[n,...s.filter(o=>o!==n)]);for(let o of s)try{let l=new AbortController,a=setTimeout(()=>l.abort(),2e3),h=await this.fetchFn(`http://${o}${t}`,{signal:l.signal,cache:"no-store"});if(clearTimeout(a),h.ok){this.activeIPs[e]=o,this.onlineStatus[e]||(this.onlineStatus[e]=!0,this.log(`[${e.toUpperCase()}] Online via ${o}`,"success"),this.emit("device-online",{deviceId:e,ip:o}));let u=await h.text();try{return u?JSON.parse(u):{ok:!0}}catch{return{ok:!0}}}}catch{o===n&&this.log(`[${e.toUpperCase()}] Primary IP ${o} failed. Seeking failover...`,"warn")}return this.onlineStatus[e]!==!1&&(this.onlineStatus[e]=!1,this.activeIPs[e]=null,this.log(`[${e.toUpperCase()}] Connection Lost - Device Offline`,"error"),this.emit("device-offline",{deviceId:e})),null}shellyStatusEndpoint(e){return e==="awning"?"/api/shutter/state":"/rpc/Cover.GetStatus?id=0"}shellyPositionOf(e,t){if(!t)return null;if(e==="awning"){let i=t?.shutter?.currentPos?.position;return typeof i=="number"?i:null}return typeof t.current_pos=="number"?t.current_pos:typeof t.pos=="number"?t.pos:null}async getCoverStatus(e){if(this.backend==="hass")return this.hassCoverStatus(e);let t=await this.fetchDevice(e,this.shellyStatusEndpoint(e));if(!t)return{position:null,online:!1,moving:"stopped"};let i={position:this.shellyPositionOf(e,t),online:!0,moving:"stopped"};return this.emit("cover-state",{deviceId:e,state:i}),i}async coverCommand(e,t,i){if(this.backend==="hass")return this.hassCoverCommand(e,t,i);let s;switch(t){case"open":s="/rpc/Cover.Open?id=0";break;case"close":s="/rpc/Cover.Close?id=0";break;case"stop":s="/rpc/Cover.Stop?id=0";break;case"set":if(i===void 0)throw new Error("coverCommand: position required for set");s=`/rpc/Cover.GoToPosition?id=0&pos=${Math.round(i)}`;break}return e==="awning"&&(s=t==="open"?"/api/shutter/open":t==="close"?"/api/shutter/close":t==="stop"?"/api/shutter/stop":`/api/shutter/set?position=${Math.round(i??0)}`),await this.fetchDevice(e,s)!==null}entityFor(e){let t=this.deviceToEntity[e];if(!t)throw new Error(`No HA entity mapped for device '${e}'`);return t}async connectHass(e=1e4){if(!this.hassUrl)throw new Error("hassUrl not configured");this.hassSocket&&this.hassSocket.readyState===WebSocket.OPEN||await new Promise((t,i)=>{let s=setTimeout(()=>i(new Error("HA websocket connect timeout")),e),n=new WebSocket(this.hassUrl),o=!1;n.onmessage=l=>{let a;try{a=JSON.parse(String(l.data))}catch{return}if(a.type==="auth_required"&&!o){n.send(JSON.stringify({type:"auth",access_token:this.hassToken??""}));return}if(a.type==="auth_ok"){o=!0,this.hassSocket=n,this.attachHassHandlers(n),this.hassCall(n,"get_states").then(h=>{for(let u of h)this.hassStates.set(u.entity_id,u);this.hassCall(n,"subscribe_events",{event_type:"state_changed"}).then(()=>{clearTimeout(s),t()}).catch(i)}).catch(i);return}a.type==="auth_invalid"&&(clearTimeout(s),i(new Error("HA auth rejected: "+(a.message??"unknown"))))},n.onerror=()=>{clearTimeout(s),i(new Error("HA websocket error"))}})}attachHassHandlers(e){e.onmessage=t=>{let i;try{i=JSON.parse(String(t.data))}catch{return}if(i.id!==void 0&&this.hassPending.has(i.id)){let s=this.hassPending.get(i.id);this.hassPending.delete(i.id),i.type==="result"&&i.success?s(i.result):s(void 0);return}if(i.type==="event"&&i.event?.event_type==="state_changed"){let s=i.event.data;s?.entity_id&&s?.new_state&&(this.hassStates.set(s.entity_id,s.new_state),this.emit("cover-state",{entityId:s.entity_id,state:s.new_state}))}},e.onclose=()=>{this.hassSocket===e&&(this.hassSocket=null),this.emit("hass-disconnected",{})}}hassCall(e,t,i={}){let s=++this.hassMsgId;return new Promise(n=>{this.hassPending.set(s,n),e.send(JSON.stringify({id:s,type:t,...i})),setTimeout(()=>{this.hassPending.has(s)&&(this.hassPending.delete(s),n(void 0))},8e3)})}hassCoverStatus(e){let t=this.hassStates.get(this.entityFor(e));if(!t)return{position:null,online:!1,moving:"stopped"};let i=t.attributes.current_position,s=t.state;return{position:typeof i=="number"?i:null,online:s!=="unavailable"&&s!=="unknown",moving:s==="opening"?"opening":s==="closing"?"closing":"stopped"}}async hassCoverCommand(e,t,i){if(!this.hassSocket||this.hassSocket.readyState!==WebSocket.OPEN)return!1;let s=this.entityFor(e),n="",o={entity_id:s};switch(t){case"open":n="open_cover";break;case"close":n="close_cover";break;case"stop":n="stop_cover";break;case"set":if(i===void 0)throw new Error("coverCommand: position required for set");n="set_cover_position",o.position=Math.round(i);break}return await this.hassCall(this.hassSocket,"call_service",{domain:"cover",service:n,service_data:o,target:{entity_id:s}})!==void 0}injectHassState(e){this.hassStates.set(e.entity_id,e)}disconnectHass(){try{this.hassSocket?.close()}catch{}this.hassSocket=null}},Wt=new St;var xe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',we='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',Yt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><line x1="10" y1="4" x2="10" y2="20"></line><line x1="14" y1="4" x2="14" y2="20"></line></svg>',$e='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>';function Se(r){return!!r&&typeof r=="object"&&"position"in r&&"online"in r}function Ce(r){let e=r;return!!e&&typeof e=="object"&&typeof e.entity_id=="string"&&typeof e.state=="string"}function Ee(r){let e=r.attributes.current_position,t=r.state;return{position:typeof e=="number"?e:null,online:t!=="unavailable"&&t!=="unknown",moving:t==="opening"?"opening":t==="closing"?"closing":"stopped"}}var x=class extends g{constructor(){super(...arguments);this.deviceId="";this.room="";this.icon="";this.bus=Wt;this.position=null;this.shown=null;this.online=!0;this.moving="stopped";this.target=null;this.animTimer=null;this.subscribedBus=null;this.onCoverState=t=>{let i=t;if(!(!i||typeof i!="object")){if(i.deviceId===this.deviceId&&Se(i.state)){this.applyCoverState(i.state);return}typeof i.entityId=="string"&&Ce(i.state)&&Ft[this.deviceId]===i.entityId&&this.applyCoverState(Ee(i.state))}};this.onDeviceOffline=t=>{let i=t;i&&i.deviceId===this.deviceId&&(this.online=!1,this.settle())};this.onDeviceOnline=t=>{let i=t;i&&i.deviceId===this.deviceId&&(this.online=!0,this.refresh())}}connectedCallback(){super.connectedCallback(),this.subscribe(this.bus),this.refresh()}disconnectedCallback(){this.unsubscribe(),this.stopAnim(),super.disconnectedCallback()}updated(t){t.has("bus")&&this.isConnected&&this.subscribe(this.bus),t.has("deviceId")&&t.get("deviceId")!==void 0&&this.refresh()}subscribe(t){this.subscribedBus!==t&&(this.unsubscribe(),t.on("cover-state",this.onCoverState),t.on("device-offline",this.onDeviceOffline),t.on("device-online",this.onDeviceOnline),this.subscribedBus=t)}unsubscribe(){this.subscribedBus&&(this.subscribedBus.off("cover-state",this.onCoverState),this.subscribedBus.off("device-offline",this.onDeviceOffline),this.subscribedBus.off("device-online",this.onDeviceOnline),this.subscribedBus=null)}async refresh(){if(this.deviceId)try{this.applyCoverState(await this.bus.getCoverStatus(this.deviceId))}catch{this.online=!1}}applyCoverState(t){if(this.position=t.position,this.online=t.online,t.position!==null&&(this.shown=t.position),t.moving==="opening"||t.moving==="closing"){this.moving=t.moving;let i=t.moving==="opening"?100:0;this.target!==i&&this.startAnim(i);return}if(this.target!==null&&t.position!==null&&(this.target===100?t.position>=100:t.position<=0)){this.settle();return}this.animTimer||this.settle()}settle(){this.stopAnim(),this.moving="stopped",this.target=null}stopAnim(){this.animTimer!==null&&(clearInterval(this.animTimer),this.animTimer=null)}startAnim(t){this.stopAnim(),this.target=t;let i=this.shown??this.position??(t===100?0:100);if(i===t){this.shown=t;return}let s=Math.max(500,I.TRAVEL_TIME.default*Math.abs(t-i)/100),n=Date.now();this.animTimer=setInterval(()=>{let o=Math.min((Date.now()-n)/s,1);this.shown=Math.round(i+(t-i)*o),o>=1&&(this.stopAnim(),this.refresh())},150)}async userCommand(t){if(!this.deviceId)return;let i=t==="stop"||this.moving!=="stopped"?"stop":t;this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:i},bubbles:!0,composed:!0})),i==="stop"?this.settle():(this.moving=i==="open"?"opening":"closing",this.startAnim(i==="open"?100:0));let s=!1;try{s=await this.bus.coverCommand(this.deviceId,i)}catch{s=!1}if(!s){this.settle(),this.online=!1;return}i==="stop"&&(await new Promise(n=>setTimeout(n,300)),await this.refresh())}pill(){return this.online?this.position===null?{text:"\u2026",cls:"unknown"}:this.position>=97?{text:"OPEN",cls:"open"}:this.position<=3?{text:"CLOSED",cls:"closed"}:{text:`${this.position}%`,cls:"mid"}:{text:"OFFLINE",cls:"offline"}}get isMoving(){return this.moving!=="stopped"}get iconTemplate(){if(!this.icon)return d``;let t=this.icon.trim();return t.startsWith("<")?d`${tt(t)}`:d`<span class="emoji">${t}</span>`}render(){let t=this.pill(),i=!this.online||!this.isMoving&&(this.position??-1)>=100,s=!this.online||!this.isMoving&&(this.position??101)<=0,n=!this.online;return d`
      <div class="card ${this.online?"":"offline"}">
        <h2 class="room">${this.iconTemplate}<span>${this.room}</span></h2>
        <div class="pill ${t.cls} ${this.isMoving?"moving":""}">${t.text}</div>
        <div class="body">
          <div class="track" role="progressbar"
               aria-valuemin="0" aria-valuemax="100" aria-valuenow="${this.shown??0}"
               aria-label="${this.room} shutter position">
            <div class="fill" style="height: ${this.shown??0}%"></div>
          </div>
          <div class="btns">
            <button class="up ${this.moving==="opening"?"active":""}"
                    ?disabled=${i} aria-label="Open ${this.room} shutter"
                    @click=${()=>this.userCommand("open")}>
              ${tt(this.moving==="opening"?Yt:xe)}
            </button>
            <button class="stop" ?disabled=${n} aria-label="Stop ${this.room} shutter"
                    @click=${()=>this.userCommand("stop")}>
              ${tt($e)}
            </button>
            <button class="down ${this.moving==="closing"?"active":""}"
                    ?disabled=${s} aria-label="Close ${this.room} shutter"
                    @click=${()=>this.userCommand("close")}>
              ${tt(this.moving==="closing"?Yt:we)}
            </button>
          </div>
        </div>
      </div>
    `}};x.styles=_`
    :host { display: block; }
    .card {
      display: flex; flex-direction: column; align-items: center; gap: 14px;
      background: #14181f; border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 18px; padding: 20px 16px; min-height: 360px;
      color: #fff; box-sizing: border-box;
    }
    .card.offline { border-color: rgba(255, 59, 48, 0.65); }
    .room {
      font-size: 32px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
      display: flex; align-items: center; gap: 10px; margin: 0;
    }
    .room .emoji { font-size: 34px; line-height: 1; }
    .room svg { width: 34px; height: 34px; }
    .pill {
      font-size: 24px; font-weight: 700; padding: 8px 20px; border-radius: 999px;
      background: rgba(255, 255, 255, 0.08); min-width: 120px; text-align: center;
    }
    .pill.open { background: rgba(46, 204, 113, 0.25); color: #7bed9f; }
    .pill.closed { background: rgba(243, 156, 18, 0.25); color: #ffcf7d; }
    .pill.mid { background: rgba(52, 152, 219, 0.25); color: #9fd3ff; }
    .pill.unknown { color: rgba(255, 255, 255, 0.5); }
    .pill.offline { background: rgba(255, 59, 48, 0.28); color: #ff8a80; }
    .pill.moving { outline: 2px solid rgba(255, 193, 7, 0.75); }
    .body { display: flex; align-items: stretch; justify-content: center; gap: 16px; width: 100%; flex: 1; }
    .track {
      position: relative; width: 14px; min-height: 150px; border-radius: 7px;
      background: rgba(255, 255, 255, 0.12); overflow: hidden; align-self: stretch;
    }
    .fill {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: linear-gradient(to top, #2e86de, #54a0ff);
      transition: height 0.15s linear;
    }
    .btns { display: flex; flex-direction: column; gap: 12px; justify-content: center; }
    .btns button {
      width: 88px; height: 88px; border-radius: 14px;
      background: transparent; border: 2px solid rgba(255, 255, 255, 0.2);
      color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
      padding: 0;
    }
    .btns button svg { width: 42px; height: 42px; }
    .btns button:disabled { opacity: 0.3; cursor: default; }
    .btns button:not(:disabled):active { background: rgba(255, 255, 255, 0.12); }
    .btns button.active { border-color: #ffc107; color: #ffc107; }
  `,c([m({attribute:"device-id"})],x.prototype,"deviceId",2),c([m({attribute:"room"})],x.prototype,"room",2),c([m()],x.prototype,"icon",2),c([m({attribute:!1})],x.prototype,"bus",2),c([f()],x.prototype,"position",2),c([f()],x.prototype,"shown",2),c([f()],x.prototype,"online",2),c([f()],x.prototype,"moving",2),x=c([M("kiosk-shutter")],x);var ct=_`
  .card {
    position: relative;
  }
  .build-stamp {
    position: absolute;
    right: 8px;
    bottom: 6px;
    font-family: monospace;
    font-size: 11px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.45);
    pointer-events: none;
    user-select: none;
  }
`;var L=class extends x{constructor(){super(...arguments);this._hassBus=null;this.hass=null;this._pressing=null;this._pressTimer=null}setConfig(t){if(!t||!t.entity)throw new Error("ha-shutter-card: config must include entity");this._config=t;let i=t.entity.replace("cover.","").replace("_shutter","").replace("_","_");this.deviceId=i,this.room=t.name||t.entity,t.icon&&(this.icon=t.icon),this._hassBus=null}async userCommand(t){if(this._pressing=t,this._pressTimer&&clearTimeout(this._pressTimer),this._pressTimer=setTimeout(()=>{this._pressing=null},1e3),this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:t},bubbles:!0,composed:!0})),t==="stop"?this.settle():(this.moving=t==="open"?"opening":"closing",this.startAnim(t==="open"?100:0)),!this.hass){this.settle(),this.online=!1,console.error("[ha-shutter-card] hass is null/undefined");return}if(typeof this.hass.callService!="function"){this.settle(),this.online=!1,console.error("[ha-shutter-card] hass.callService is not a function");return}try{let i=this._config.entity.replace("cover.","").replace("_shutter",""),s=JSON.stringify({device:i,action:t,id:Date.now().toString(36)+Math.random().toString(36).slice(2,7)});await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:s}),this.online=!0}catch(i){this.settle(),this.online=!1,console.error("[ha-shutter-card] callService failed:",i)}}async refresh(){}getCardSize(){return 3}render(){let t=this._config?.name||this._config?.entity||"Shutter",i=(s,n,o)=>d`
      <button
        class="ha-shutter-btn ${this._pressing===s?"pressing":""}"
        @click=${()=>this.userCommand(s)}
      >
        <span class="ha-shutter-icon">${n}</span>
        <span>${o}</span>
      </button>
    `;return d`
      <ha-card>
        <div class="ha-shutter-wrap">
          <div class="ha-shutter-name">${t}</div>
          <div class="ha-shutter-btns">
            ${i("open","\u25B2","Open")}
            ${i("stop","\u25A0","Stop")}
            ${i("close","\u25BC","Close")}
          </div>
        </div>
      </ha-card>
      <style>
        .ha-shutter-wrap { padding: 16px; }
        .ha-shutter-name {
          font-size: 20px; font-weight: 600; margin-bottom: 12px;
          text-align: center;
        }
        .ha-shutter-btns {
          display: flex; gap: 8px; justify-content: center;
        }
        .ha-shutter-btn {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          gap: 4px; padding: 14px 8px; border-radius: 12px;
          background: var(--primary-color, #03a9f4); color: white;
          border: none; font-size: 14px; font-weight: 500;
          cursor: pointer; min-height: 70px; justify-content: center;
          transition: transform 0.1s, opacity 0.2s;
        }
        .ha-shutter-btn:active { transform: scale(0.95); }
        .ha-shutter-btn.pressing {
          background: var(--accent-color, #ff9800);
          transform: scale(0.95);
          box-shadow: 0 0 12px rgba(255, 152, 0, 0.5);
        }
        .ha-shutter-icon { font-size: 22px; line-height: 1; }
        /* Phone: more compact buttons */
        @media (max-width: 600px) {
          .ha-shutter-wrap { padding: 12px 8px; }
          .ha-shutter-name { font-size: 17px; margin-bottom: 8px; }
          .ha-shutter-btns { gap: 6px; }
          .ha-shutter-btn {
            padding: 10px 4px; min-height: 60px;
            font-size: 12px; border-radius: 10px;
          }
          .ha-shutter-icon { font-size: 18px; }
        }
      </style>
    `}static getStubConfig(){return{entity:"cover.kid_shutter",name:"Kid"}}disconnectedCallback(){super.disconnectedCallback(),this._hassBus?.disconnectHass()}subscribe(t){}};L.styles=ct,c([m({attribute:!1})],L.prototype,"hass",2),c([m({attribute:!1})],L.prototype,"_pressing",2);customElements.define("ha-shutter-card",L);function Ae(r){let e=[...r],t=e.length;for(;t>0;){let i=Math.floor(Math.random()*t);t--,[e[t],e[i]]=[e[i],e[t]]}return e}function ke(r){if(!r)return"";let e=r.trim();if(!e)return"";let t=/^(\d{4})-(\d{2})-(\d{2})/.exec(e),i;return t?i=new Date(+t[1],+t[2]-1,+t[3]):i=new Date(e),isNaN(i.getTime())?"":i.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}function Te(r){let e=[];r.desc&&e.push(r.desc);let t=ke(r.date);return t&&e.push(t),e.join(" \u2022 ")}var C=class extends g{constructor(){super(...arguments);this.photos=[];this.interval=I.SLIDE_INTERVAL;this._order=[];this._caption="";this._index=-1;this._activeLayer=0;this._timer=null}get currentIndex(){return this._index}get currentPhoto(){return this._index>=0&&this._index<this._order.length?this._order[this._index]:null}connectedCallback(){super.connectedCallback(),this._order.length>0&&this._restartTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(t){super.updated(t),t.has("photos")?this._resetSlideshow():t.has("interval")&&this._restartTimer()}next(){this._order.length!==0&&this._goTo(this._index+1)}previous(){this._order.length!==0&&this._goTo(this._index-1)}_resetSlideshow(){this._stopTimer();let t=this.photos??[];if(t.length===0){this._order=[],this._caption="",this._index=-1,this._activeLayer=0;return}this._order=Ae(t),this._index=-1,this._activeLayer=0,this._restartTimer(),this._goTo(0)}_restartTimer(){this._stopTimer(),this._order.length>0&&this.interval>0&&(this._timer=setInterval(()=>this.next(),this.interval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}_goTo(t,i=0){let s=this._order.length;if(s===0)return;let n=(t%s+s)%s;this._preload(this._order[n].url,o=>{if(o){this._reveal(n);return}i+1<s&&this._goTo(n+1,i+1)})}_preload(t,i){let s=globalThis.Image;if(typeof s!="function"||!t){i(!0);return}try{let n=new s;n.onload=()=>i(!0),n.onerror=()=>i(!1),n.src=t}catch{i(!1)}}async _reveal(t){let i=this._order[t];if(!i)return;await this.updateComplete;let s=this.renderRoot.querySelectorAll(".slide");if(s.length<2)return;let n=this._activeLayer===0?1:0,o=s[n];o.style.backgroundImage=`url("${i.url}")`,o.classList.add("active"),s[this._activeLayer].classList.remove("active"),this._activeLayer=n,this._index=t,this._caption=Te(i),this.dispatchEvent(new CustomEvent("photo-change",{detail:{index:t,photo:i},bubbles:!0,composed:!0}))}render(){return this._order.length===0?d``:d`
      <div class="slide"></div>
      <div class="slide"></div>
      ${this._caption?d`<div class="caption">${this._caption}</div>`:""}
    `}};C.styles=_`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #000;
    }
    .slide {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0;
      transition: opacity 1.2s ease;
    }
    .slide.active {
      opacity: 1;
    }
    .caption {
      position: absolute;
      left: 24px;
      bottom: 18px;
      z-index: 6;
      font-size: 48px;
      line-height: 1.15;
      font-weight: 600;
      color: #f7ead9;
      background: rgba(0, 0, 0, 0.55);
      padding: 6px 14px;
      border-radius: 14px;
      text-shadow: 0 2px 6px #000;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,c([m({type:Array})],C.prototype,"photos",2),c([m({type:Number})],C.prototype,"interval",2),c([f()],C.prototype,"_order",2),c([f()],C.prototype,"_caption",2),C=c([M("kiosk-photo-slideshow")],C);var ht=class extends C{async setConfig(e){if(!e)throw new Error("ha-photo-card: config required");if(this._config=e,e.interval&&(this.interval=e.interval),e.photos)this.photos=e.photos;else if(e.photos_url)try{let t=await fetch(e.photos_url);this.photos=await t.json()}catch{this.photos=[]}}getCardSize(){return 4}static getStubConfig(){return{interval:15e3,photos:[]}}};customElements.define("ha-photo-card",ht);var k=class extends g{constructor(){super(...arguments);this.hass=null;this._volume=25;this._muted=!1;this._power=!0}setConfig(t){this._config=t||{type:"custom:ha-tv-card"}}async tvCommand(t,i={}){if(!this.hass){console.error("[ha-tv-card] No hass object");return}let s={device:"tv",action:t,params:i,id:Math.random().toString(36).substring(2,10)};try{await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:JSON.stringify(s)}),console.log("[ha-tv-card] Sent:",t)}catch(n){console.error("[ha-tv-card] Failed:",n)}}_togglePower(){this._power=!this._power,this.tvCommand(this._power?"power_on":"power_off")}_toggleMute(){this._muted=!this._muted,this.tvCommand(this._muted?"mute":"unmute")}_onVolumeChange(t){let i=t.target;this._volume=parseInt(i.value,10)}_onVolumeCommit(){this.tvCommand("set_volume",{volume:this._volume}),this._muted&&this._volume>0&&(this._muted=!1)}render(){let t=this._config?.name||"TV";return d`
      <ha-card>
        <div class="tv-card">
          <div class="tv-name">${t}</div>
          <div class="tv-controls">
            <button class="tv-btn ${this._power?"":"off"}" @click=${this._togglePower}>
              <span class="tv-icon">⏻</span>
              <span>${this._power?"On":"Off"}</span>
            </button>
            <button class="tv-btn ${this._muted?"muted":""}" @click=${this._toggleMute}>
              <span class="tv-icon">${this._muted?"\u{1F507}":"\u{1F50A}"}</span>
              <span>${this._muted?"Muted":"Mute"}</span>
            </button>
          </div>
          <div class="volume-row">
            <span>🔈</span>
            <input
              type="range" min="0" max="100" .value=${String(this._volume)}
              @input=${this._onVolumeChange}
              @change=${this._onVolumeCommit}
            />
            <span>${this._volume}</span>
          </div>
          <div class="tv-apps">
            <button class="tv-btn app-btn" @click=${()=>this.tvCommand("launch_app",{app:"youtube"})}>
              <span class="tv-icon">▶</span>
              <span>YouTube</span>
            </button>
            <button class="tv-btn app-btn" @click=${()=>this.tvCommand("launch_app",{app:"netflix"})}>
              <span class="tv-icon">N</span>
              <span>Netflix</span>
            </button>
            <button class="tv-btn app-btn" @click=${()=>this.tvCommand("launch_app",{app:"max",uri:"com.sony.dtv.com.wbd.stream.com.wbd.beam.BeamActivity"})}>
              <span class="tv-icon">M</span>
              <span>Max</span>
            </button>
            <button class="tv-btn app-btn" @click=${()=>this.tvCommand("launch_app",{app:"core",uri:"com.sony.dtv.com.sonypicturescore.com.sphe.bravialounge.SplashActivity"})}>
              <span class="tv-icon">S</span>
              <span>Core</span>
            </button>
          </div>
          <div class="tv-apps">
            <button class="tv-btn app-btn" @click=${()=>this.tvCommand("launch_app",{app:"prime"})}>
              <span class="tv-icon">P</span>
              <span>Prime</span>
            </button>
          </div>
        </div>
      </ha-card>
    `}getCardSize(){return 3}static getStubConfig(){return{name:"TV"}}};k.styles=[ct,_`
      :host { display: block; }
      .tv-card { padding: 16px; }
      .tv-name {
        font-size: 20px; font-weight: 600; margin-bottom: 12px;
        text-align: center;
      }
      .tv-controls {
        display: flex; gap: 8px; justify-content: center;
        margin-bottom: 16px;
      }
      .tv-btn {
        flex: 1; display: flex; flex-direction: column; align-items: center;
        gap: 4px; padding: 12px 8px; border-radius: 12px;
        background: var(--primary-color, #03a9f4); color: white;
        border: none; font-size: 13px; font-weight: 500;
        cursor: pointer; min-height: 60px; justify-content: center;
      }
      .tv-btn:active { transform: scale(0.95); }
      .tv-btn.off { background: var(--disabled-color, #9e9e9e); }
      .tv-btn.muted { background: var(--warning-color, #ff9800); }
      .tv-icon { font-size: 20px; line-height: 1; }
      .volume-row {
        display: flex; align-items: center; gap: 12px;
        padding: 0 4px;
      }
      .volume-row span { font-size: 14px; min-width: 40px; text-align: center; }
      input[type="range"] {
        flex: 1; height: 6px; border-radius: 3px;
        background: var(--divider-color, #e0e0e0);
        outline: none; -webkit-appearance: none;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; width: 24px; height: 24px;
        border-radius: 50%; background: var(--primary-color, #03a9f4);
        cursor: pointer;
      }
      .tv-apps {
        display: flex; gap: 8px; justify-content: center;
        margin-top: 12px;
      }
      .app-btn { min-height: 50px; }
      @media (max-width: 600px) {
        .tv-card { padding: 12px 8px; }
        .tv-name { font-size: 17px; }
        .tv-btn { font-size: 12px; min-height: 55px; padding: 10px 4px; }
      }
    `],c([m({attribute:!1})],k.prototype,"hass",2),c([m({attribute:!1})],k.prototype,"_volume",2),c([m({attribute:!1})],k.prototype,"_muted",2),c([m({attribute:!1})],k.prototype,"_power",2);customElements.define("ha-tv-card",k);var O=class extends g{constructor(){super(...arguments);this.hass=null;this._sessionStart=null;this._now=Date.now();this._timer=null}setConfig(t){this._config=t||{type:"custom:ha-tv-screentime-card"}}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=Date.now()},5e3)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}_getTvStatus(){if(!this.hass?.states?.["input_text.tv_status"])return null;try{return JSON.parse(this.hass.states["input_text.tv_status"].state)}catch{return null}}_getDailyTotal(){if(!this.hass?.states?.["input_text.tv_daily_total"])return 0;try{let t=JSON.parse(this.hass.states["input_text.tv_daily_total"].state),i=new Date().toISOString().split("T")[0];return t.date!==i?0:t.total_ms||0}catch{return 0}}_formatDuration(t){let i=Math.floor(t/6e4),s=Math.floor(i/60),n=i%60;return s>0?`${s}h ${n}m`:`${n}m`}render(){let t=this._config?.name||"TV Screen Time",i=(this._config?.warn_after||120)*6e4,s=this._getTvStatus();if(!s||s.power!=="active")return d`
        <ha-card><div class="st-card">
          <div class="st-name">${t}</div>
          <div class="st-off">📺 TV is off</div>
        </div></ha-card>
      `;let n=s.session_start;if(!n)return d`
        <ha-card><div class="st-card">
          <div class="st-name">${t}</div>
          <div class="st-off">📺 TV is off</div>
        </div></ha-card>
      `;let o=this._now-n,l=o>=i,a=this._getDailyTotal()+o;return d`
      <ha-card><div class="st-card">
        <div class="st-name">${t}</div>
        <div class="st-time ${l?"warn":""}">${this._formatDuration(o)}</div>
        <div class="st-status">
          ${l?"\u26A0\uFE0F Consider a break!":"This session"}
        </div>
        <div class="st-daily">Today total: ${this._formatDuration(a)}</div>
      </div></ha-card>
    `}getCardSize(){return 2}static getStubConfig(){return{name:"TV Screen Time",warn_after:120}}};O.styles=_`
    :host { display: block; }
    .st-card { padding: 16px; text-align: center; }
    .st-name { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
    .st-time { font-size: 36px; font-weight: 700; margin: 8px 0; font-variant-numeric: tabular-nums; }
    .st-time.warn { color: var(--warning-color, #ff9800); }
    .st-status { font-size: 14px; color: var(--secondary-text-color, #666); }
    .st-off { color: var(--disabled-color, #9e9e9e); font-size: 16px; padding: 12px; }
    .st-daily { font-size: 13px; color: var(--secondary-text-color, #888); margin-top: 4px; }
    @media (max-width: 600px) {
      .st-time { font-size: 28px; }
    }
  `,c([m({attribute:!1})],O.prototype,"hass",2),c([f()],O.prototype,"_sessionStart",2),c([f()],O.prototype,"_now",2);customElements.define("ha-tv-screentime-card",O);var U=class extends g{constructor(){super(...arguments);this.hass=null;this._pressing=null;this._pressTimer=null}setConfig(t){this._config=t||{type:"custom:ha-awning-card"}}async _sendCommand(t){if(!this.hass)return;this._pressing=t,this._pressTimer&&clearTimeout(this._pressTimer),this._pressTimer=setTimeout(()=>{this._pressing=null},1e3);let i={device:"awning",action:t,id:Math.random().toString(36).substring(2,10)};try{await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:JSON.stringify(i)})}catch(s){console.error("[ha-awning-card] Failed:",s)}}render(){let t=this._config?.name||"Awning",i=(s,n,o)=>d`
      <button
        class="awning-btn ${this._pressing===s?"pressing":""}"
        @click=${()=>this._sendCommand(s)}
      >
        <span class="awning-icon">${n}</span>
        <span>${o}</span>
      </button>
    `;return d`
      <ha-card><div class="awning-card">
        <div class="awning-name">⛱️ ${t}</div>
        <div class="awning-controls">
          ${i("open","\u2B06\uFE0F","Open")}
          ${i("stop","\u23F9\uFE0F","Stop")}
          ${i("close","\u2B07\uFE0F","Close")}
        </div>
      </div></ha-card>
    `}getCardSize(){return 2}static getStubConfig(){return{name:"Awning"}}};U.styles=_`
    :host { display: block; }
    .awning-card { padding: 16px; }
    .awning-name {
      font-size: 20px; font-weight: 600; margin-bottom: 12px;
      text-align: center;
    }
    .awning-controls {
      display: flex; gap: 8px; justify-content: center;
    }
    .awning-btn {
      flex: 1; display: flex; flex-direction: column; align-items: center;
      gap: 4px; padding: 14px 8px; border-radius: 12px;
      background: var(--primary-color, #03a9f4); color: white;
      border: none; font-size: 14px; font-weight: 500;
      cursor: pointer; min-height: 65px; justify-content: center;
      transition: transform 0.1s, background 0.2s;
    }
    .awning-btn:active { transform: scale(0.95); }
    .awning-btn.pressing {
      background: var(--accent-color, #ff9800);
      box-shadow: 0 0 12px var(--accent-color, #ff9800);
    }
    .awning-icon { font-size: 22px; line-height: 1; }
    @media (max-width: 600px) {
      .awning-card { padding: 12px 8px; }
      .awning-name { font-size: 17px; }
      .awning-btn { font-size: 13px; min-height: 60px; }
    }
  `,c([m({attribute:!1})],U.prototype,"hass",2),c([m({attribute:!1})],U.prototype,"_pressing",2);customElements.define("ha-awning-card",U);var H=class extends g{constructor(){super(...arguments);this._now=new Date;this._taps=[]}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=new Date},1e3)}disconnectedCallback(){this._timer&&clearInterval(this._timer),this._timer=void 0,super.disconnectedCallback()}_tap(){let t=Date.now();this._taps=this._taps.filter(i=>t-i<2e3),this._taps.push(t),this._taps.length>=5&&(this._taps=[],this.dispatchEvent(new CustomEvent("admin-request",{bubbles:!0,composed:!0})))}render(){let t=this._now.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return d`<div class="clock" @click=${()=>this._tap()}>${t}</div>`}};H.styles=_`
    :host { display: block; }
    .clock {
      font-size: 52px; font-weight: 800; color: var(--primary-text-color, #fff); text-align: center;
      font-variant-numeric: tabular-nums; user-select: none; cursor: default;
    }
  `,c([f()],H.prototype,"_now",2);customElements.define("kiosk-clock",H);var dt=class extends H{constructor(){super()}setConfig(e){}getCardSize(){return 1}static getStubConfig(){return{}}};customElements.define("ha-clock-card",dt);var Pe=800,Me="v40-20261018-selfheal",Ie="/local/immich-photos.json",Ct="ha-immich-card-cache-v2",Oe=1440*60*1e3;var $=class extends g{constructor(){super(...arguments);this._photos=[];this._index=0;this._loading=!0;this._error="";this._fading=!1;this._started=!1;this._timer=null}async setConfig(t){if(!t)throw new Error("ha-immich-card: config required");this._config=t}set hass(t){this._hass=t,this._started||(this._started=!0,this._load())}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){let t=this._config?.album_name||"Kiosk",i=this._config?.max_photos||100,n=`${this._config?.index_url||Ie}?t=${Date.now()}`;try{let o=await fetch(n);if(o.ok){let a=((await o.json()).photos||[]).slice(0,i);if(a.length>0){this._photos=this._orderByCurrentMonth(a),this._loading=!1,this._startSlideshow();return}}}catch{}try{let o=localStorage.getItem(`${Ct}-${t}`);if(o){let l=JSON.parse(o);if(Date.now()-l.timestamp<Oe&&l.photos?.length>0){this._photos=this._orderByCurrentMonth(l.photos.slice(0,i)),this._loading=!1,this._startSlideshow(),this._refreshCache(t,i);return}}}catch{}await this._loadFresh(t,i)}_startSlideshow(){this._preload(1),this._timer&&clearInterval(this._timer),this._timer=setInterval(()=>this._next(),this._config?.interval||15e3)}async _refreshCache(t,i){try{let s=await this._fetchPhotos(t,i);s.length>0&&localStorage.setItem(`${Ct}-${t}`,JSON.stringify({timestamp:Date.now(),photos:s}))}catch{}}async _loadFresh(t,i){try{let s=await this._fetchPhotos(t,i);if(s.length===0)throw new Error("No photos resolved");try{localStorage.setItem(`${Ct}-${t}`,JSON.stringify({timestamp:Date.now(),photos:s}))}catch{}this._photos=this._orderByCurrentMonth(s),this._loading=!1,this._startSlideshow()}catch(s){this._error=s.message||"Failed to load",this._loading=!1}}async _fetchPhotos(t,i){let s=async(y,pt=15e3)=>Promise.race([this._hass.callWS(y),new Promise((z,et)=>setTimeout(()=>et(new Error("timeout")),pt))]),o=(await s({type:"media_source/browse_media",media_content_id:"media-source://immich"})).children?.[0];if(!o)throw new Error("No Immich user");let a=(await s({type:"media_source/browse_media",media_content_id:o.media_content_id})).children?.find(y=>y.title==="albums");if(!a)throw new Error("No albums folder");let h=await s({type:"media_source/browse_media",media_content_id:a.media_content_id}),u=h.children?.find(y=>y.title===t)||h.children?.[0];if(!u)throw new Error(`Album "${t}" not found`);let w=((await s({type:"media_source/browse_media",media_content_id:u.media_content_id})).children||[]).slice(0,i),S=[];for(let y=0;y<w.length;y+=15){let pt=await Promise.all(w.slice(y,y+15).map(async z=>{try{let et=await s({type:"media_source/resolve_media",media_content_id:z.media_content_id},8e3);if(et?.url)return{url:et.url.replace("/fullsize/","/preview/"),title:z.title||""}}catch{}return null}));for(let z of pt)z&&S.push(z)}return S}_preload(t){let i=this._photos[t%this._photos.length];if(i){let s=new Image;s.src=i.url}}_next(){!this._photos.length||this._fading||(this._fading=!0,this.requestUpdate(),setTimeout(()=>{this._index=(this._index+1)%this._photos.length,this._fading=!1,this._preload(this._index+1),this.requestUpdate()},Pe))}render(){if(this._loading)return d`<div class="status">Loading Immich photos…</div>`;if(this._error)return d`<div class="status" style="color:#f66">${this._error}</div>`;if(!this._photos.length)return d`<div class="status">No photos</div>`;let t=this._photos[this._index],i=this._fading?"fading":"",s=this._formatCaption(t),n=t.description||"";return d`
      <div class="blur-bg ${i}" style="background-image: url('${t.url}')"></div>
      <img class="sharp ${i}" src="${t.url}"
           @click="${()=>{this._next()}}"
           @error="${()=>{this._onImageError()}}" alt="" />
      <div class="version">${Me}</div>
      <div class="counter">${this._index+1} / ${this._photos.length}</div>
      ${n?d`<div class="description">${n}</div>`:""}
      ${s?d`<div class="caption">${s}</div>`:""}
    `}_onImageError(){let t=this._photos[this._index];t?.media_content_id&&!t._retrying?(t._retrying=!0,console.warn("[ha-immich-card] Re-resolving expired URL"),this._hass.callWS({type:"media_source/resolve_media",media_content_id:t.media_content_id}).then(i=>{if(i?.url){t.url=i.url,t._retrying=!1,this.requestUpdate();return}throw new Error("no url")}).catch(()=>{t._retrying=!1,this._next()})):this._next()}_formatCaption(t){let i=[];if(t.people&&t.people.length>0){let s=t.people.map(n=>{let o=this._calcAge(n,t.date);return o?`${n} (${o})`:n}).join(", ");i.push(s)}if(t.location&&i.push(t.location),t.date)try{let s=new Date(t.date);isNaN(s.getTime())||i.push(s.toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"}))}catch{}return i.length>0?i.join(" \u2022 "):"Memories"}_calcAge(t,i){let n=(this._config?.birthdates||{})[t];if(!n||!i)return null;try{let o=new Date(n),l=new Date(i),a=(l.getFullYear()-o.getFullYear())*12+(l.getMonth()-o.getMonth());if(l.getDate()<o.getDate()&&a--,a<0)return null;if(a<12)return`${a} mies.`;let h=l.getFullYear()-o.getFullYear();return(l.getMonth()<o.getMonth()||l.getMonth()===o.getMonth()&&l.getDate()<o.getDate())&&h--,h>=0?`${h}`:null}catch{return null}}_orderByCurrentMonth(t){let s=new Date().getMonth(),n=[];for(let a of t){let h=a.date?new Date(a.date):null,u=1;if(h&&!isNaN(h.getTime())){let p=(h.getMonth()-s+12)%12;p===0?u=4:(p===1||p===11)&&(u=2)}for(let p=0;p<u;p++)n.push(a)}for(let a=n.length-1;a>0;a--){let h=Math.floor(Math.random()*(a+1));[n[a],n[h]]=[n[h],n[a]]}let o=new Set,l=[];for(let a of n)o.has(a.url)||(o.add(a.url),l.push(a));return l}getCardSize(){return 5}static getStubConfig(){return{album_name:"Kiosk",interval:15e3}}};$.styles=_`
    :host { display: block; position: relative; width: 100%; height: 100%;
      min-height: 400px; background: #000; overflow: hidden; cursor: pointer; }
    /* Blurred background layer (like tablet kiosk) */
    .blur-bg {
      position: absolute; inset: -20px;
      background-size: cover; background-position: center;
      filter: blur(20px) brightness(0.7);
      transition: opacity 0.8s ease;
    }
    /* Sharp centered photo */
    img.sharp {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: contain; transition: opacity 0.8s ease; z-index: 1;
    }
    img.fading { opacity: 0; }
    .blur-bg.fading { opacity: 0; }
    /* Tablet-style caption — responsive, wraps to 2 lines max */
    .caption {
      position: absolute; left: 16px; bottom: 14px; z-index: 2;
      font: 600 clamp(15px, 3.2vw, 26px)/1.3 system-ui, sans-serif;
      color: #f7ead9;
      background: rgba(0,0,0,0.55); padding: 6px 12px; border-radius: 12px;
      text-shadow: 0 2px 6px #000; max-width: calc(100% - 32px);
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
      overflow: hidden;
    }
    /* Description subtitle — responsive */
    .description {
      position: absolute; left: 16px; bottom: 58px; z-index: 2;
      font: 400 clamp(13px, 2.5vw, 20px)/1.3 system-ui, sans-serif;
      color: rgba(247,234,217,0.9);
      background: rgba(0,0,0,0.45); padding: 5px 10px; border-radius: 10px;
      text-shadow: 0 1px 4px #000; max-width: calc(100% - 120px);
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
      overflow: hidden;
    }
    /* Version badge — shows build version for cache debugging */
    .version {
      position: absolute; left: 12px; top: 10px; z-index: 2;
      color: rgba(255,255,255,0.5); font: 11px monospace;
      background: rgba(0,0,0,0.35); padding: 2px 8px; border-radius: 8px;
    }
    .counter { position: absolute; right: 16px; top: 12px; z-index: 2;
      color: rgba(255,255,255,0.7); font: 14px system-ui, sans-serif;
      background: rgba(0,0,0,0.45); padding: 4px 12px; border-radius: 10px; }
    .status { position: absolute; inset: 0; display: flex;
      align-items: center; justify-content: center; color: #888;
      font: 16px system-ui, sans-serif; }
  `,c([f()],$.prototype,"_config",2),c([f()],$.prototype,"_photos",2),c([f()],$.prototype,"_index",2),c([f()],$.prototype,"_loading",2),c([f()],$.prototype,"_error",2),c([f()],$.prototype,"_fading",2),$=c([M("ha-immich-card")],$);var Ls=se(Qt());})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
