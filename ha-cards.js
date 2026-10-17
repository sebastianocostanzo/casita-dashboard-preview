"use strict";(()=>{var zt=Object.defineProperty;var jt=Object.getOwnPropertyDescriptor;var l=(n,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&zt(t,e,s),s};var K=globalThis,tt=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),wt=new WeakMap,D=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(tt&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wt.set(e,t))}return t}toString(){return this.cssText}},xt=n=>new D(typeof n=="string"?n:n+"",void 0,dt),b=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new D(e,n,dt)},$t=(n,t)=>{if(tt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=K.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},pt=tt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return xt(e)})(n):n;var{is:Ft,defineProperty:Gt,getOwnPropertyDescriptor:Wt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Yt,getPrototypeOf:Qt}=Object,T=globalThis,Ct=T.trustedTypes,Xt=Ct?Ct.emptyScript:"",Zt=T.reactiveElementPolyfillSupport,B=(n,t)=>n,V={toAttribute(n,t){switch(t){case Boolean:n=n?Xt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},et=(n,t)=>!Ft(n,t),St={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),T.litPropertyMetadata??(T.litPropertyMetadata=new WeakMap);var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=St){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Gt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Wt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){let c=s?.call(this);r?.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??St}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;let t=Qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){let e=this.properties,i=[...Jt(e),...Yt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(pt(s))}else t!==void 0&&e.push(pt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:V).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:V;this._$Em=s;let c=o.fromAttribute(e,r.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let o=this.constructor;if(s===!1&&(r=this[t]),i??(i=o.getPropertyOptions(t)),!((i.hasChanged??et)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:o}=r,c=this[s];o!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[B("elementProperties")]=new Map,S[B("finalized")]=new Map,Zt?.({ReactiveElement:S}),(T.reactiveElementVersions??(T.reactiveElementVersions=[])).push("2.1.2");var z=globalThis,Et=n=>n,it=z.trustedTypes,At=it?it.createPolicy("lit-html",{createHTML:n=>n}):void 0,Mt="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+k,Kt=`<${Ht}>`,M=document,j=()=>M.createComment(""),F=n=>n===null||typeof n!="object"&&typeof n!="function",bt=Array.isArray,te=n=>bt(n)||typeof n?.[Symbol.iterator]=="function",ut=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,kt=/>/g,I=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,It=/"/g,Rt=/^(?:script|style|textarea|title)$/i,_t=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),f=_t(1),Se=_t(2),Ee=_t(3),E=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ot=new WeakMap,O=M.createTreeWalker(M,129);function Nt(n,t){if(!bt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return At!==void 0?At.createHTML(t):t}var ee=(n,t)=>{let e=n.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",o=q;for(let c=0;c<e;c++){let a=n[c],d,u,h=-1,C=0;for(;C<a.length&&(o.lastIndex=C,u=o.exec(a),u!==null);)C=o.lastIndex,o===q?u[1]==="!--"?o=Tt:u[1]!==void 0?o=kt:u[2]!==void 0?(Rt.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=I):u[3]!==void 0&&(o=I):o===I?u[0]===">"?(o=s??q,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?I:u[3]==='"'?It:Pt):o===It||o===Pt?o=I:o===Tt||o===kt?o=q:(o=I,s=void 0);let A=o===I&&n[c+1].startsWith("/>")?" ":"";r+=o===q?a+Kt:h>=0?(i.push(d),a.slice(0,h)+Mt+a.slice(h)+k+A):a+k+(h===-2?c:A)}return[Nt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},G=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0,c=t.length-1,a=this.parts,[d,u]=ee(t,e);if(this.el=n.createElement(d,i),O.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=O.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(Mt)){let C=u[o++],A=s.getAttribute(h).split(k),Z=/([.?@])?(.*)/.exec(C);a.push({type:1,index:r,name:Z[2],strings:A,ctor:Z[1]==="."?mt:Z[1]==="?"?vt:Z[1]==="@"?gt:L}),s.removeAttribute(h)}else h.startsWith(k)&&(a.push({type:6,index:r}),s.removeAttribute(h));if(Rt.test(s.tagName)){let h=s.textContent.split(k),C=h.length-1;if(C>0){s.textContent=it?it.emptyScript:"";for(let A=0;A<C;A++)s.append(h[A],j()),O.nextNode(),a.push({type:2,index:++r});s.append(h[C],j())}}}else if(s.nodeType===8)if(s.data===Ht)a.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(k,h+1))!==-1;)a.push({type:7,index:r}),h+=k.length-1}r++}}static createElement(t,e){let i=M.createElement("template");return i.innerHTML=t,i}};function N(n,t,e=n,i){if(t===E)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=F(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=N(n,s._$AS(n,t.values),s,i)),t}var ft=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);O.currentNode=s;let r=O.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new W(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new yt(r,this,t)),this._$AV.push(d),a=i[++c]}o!==a?.index&&(r=O.nextNode(),o++)}return O.currentNode=M,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},W=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),F(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):te(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=G.createElement(Nt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new ft(s,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=Ot.get(t.strings);return e===void 0&&Ot.set(t.strings,e=new G(t)),e}k(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new n(this.O(j()),this.O(j()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Et(t).nextSibling;Et(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},L=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(t,e=this,i,s){let r=this.strings,o=!1;if(r===void 0)t=N(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{let c=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=N(this,c[i+a],e,a),d===E&&(d=this._$AH[a]),o||(o=!F(d)||d!==this._$AH[a]),d===v?t=v:t!==v&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},mt=class extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},vt=class extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},gt=class extends L{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??v)===E)return;let i=this._$AH,s=t===v&&i!==v||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==v&&(i===v||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},yt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var ie=z.litHtmlPolyfillSupport;ie?.(G,W),(z.litHtmlVersions??(z.litHtmlVersions=[])).push("3.3.3");var Lt=(n,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new W(t.insertBefore(j(),r),r,void 0,e??{})}return s._$AI(n),s};var J=globalThis,g=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};g._$litElement$=!0,g.finalized=!0,J.litElementHydrateSupport?.({LitElement:g});var se=J.litElementPolyfillSupport;se?.({LitElement:g});(J.litElementVersions??(J.litElementVersions=[])).push("4.2.2");var U=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var ne={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:et},re=(n=ne,t,e)=>{let{kind:i,metadata:s}=e,r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),i==="accessor"){let{name:o}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,n,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,n,c),c}}}if(i==="setter"){let{name:o}=e;return function(c){let a=this[o];t.call(this,c),this.requestUpdate(o,a,n,!0,c)}}throw Error("Unsupported decorator location: "+i)};function p(n){return(t,e)=>typeof e=="object"?re(n,t,e):((i,s,r)=>{let o=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(n,t,e)}function m(n){return p({...n,state:!0,attribute:!1})}var P={TRAVEL_TIME:{default:26e3,awning_out:5e4,awning_in:6e4},POLL_INTERVAL:6e4,SLIDE_INTERVAL:15e3,WEATHER_INTERVAL:18e5,IPS:{kid:["192.168.86.203","192.168.55.203"],master:["192.168.86.22","192.168.55.13"],tv_area:["192.168.86.50","192.168.55.16"],sofa:["192.168.55.17","192.168.86.21"],awning:["192.168.86.27"]},BRIDGE_URL:"https://script.google.com/macros/s/AKfycbxzSWDfAiOOxyzQLMYdwOPAxAak-HEBGCstUARUDVQkWt9qSTqXvjCBr7-8q3qkKfQ7/exec",COORDS:{lat:51.078,lng:16.92}},Ut={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"};var oe={0:"Clear",1:"Mainly Clear",2:"Partly Cloudy",3:"Overcast",45:"Foggy",61:"Rainy",63:"Heavy Rain",80:"Showers"},y=class extends g{constructor(){super(...arguments);this.latitude=0;this.longitude=0;this.pollInterval=P.WEATHER_INTERVAL;this.temperature=null;this.condition="";this.aqi=null;this._timer=null;this._lastCoords=""}static weatherCodeText(e){return oe[e]??"Cloudy"}static aqiBand(e){return e<=50?{label:"Good",color:"#4caf50"}:e<=100?{label:"Moderate",color:"#ffeb3b"}:e<=150?{label:"Unhealthy (sensitive)",color:"#ff9800"}:{label:"Unhealthy",color:"#f44336"}}connectedCallback(){super.connectedCallback(),this._lastCoords=`${this.latitude},${this.longitude}`,this.refresh(),this._startTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(e){if(e.has("pollInterval")&&this._startTimer(),e.has("latitude")||e.has("longitude")){let i=`${this.latitude},${this.longitude}`;i!==this._lastCoords&&(this._lastCoords=i,this.refresh())}}async refresh(){await Promise.allSettled([this._fetchWeather(),this._fetchAqi()])}_startTimer(){this._stopTimer(),this.pollInterval>0&&(this._timer=setInterval(()=>{this.refresh()},this.pollInterval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}async _fetchWeather(){try{let e=`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,weather_code`,i=await fetch(e);if(!i.ok)return;let s=await i.json();if(!s||!s.current)return;this.temperature=Math.round(s.current.temperature_2m),this.condition=y.weatherCodeText(s.current.weather_code)}catch{}}async _fetchAqi(){try{let e=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${this.latitude}&longitude=${this.longitude}&current=us_aqi`,i=await fetch(e);if(!i.ok)return;let s=await i.json();if(!s||!s.current||s.current.us_aqi==null)return;this.aqi=Math.round(s.current.us_aqi)}catch{}}render(){let e=this.temperature===null?"\u2026":`${this.temperature}\xB0`,i=this.condition===""?"\u2026":this.condition,s=this.aqi===null?null:y.aqiBand(this.aqi);return f`
      <div class="weather">
        <div class="temp" part="temp">${e}</div>
        <div class="condition" part="condition">${i}</div>
        ${s!==null?f`
              <div class="aqi" part="aqi">
                <span class="dot" style="color:${s.color}">●</span>
                AQI ${this.aqi} ${s.label}
              </div>
            `:""}
      </div>
    `}};y.styles=b`
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
  `,l([p({type:Number})],y.prototype,"latitude",2),l([p({type:Number})],y.prototype,"longitude",2),l([p({type:Number})],y.prototype,"pollInterval",2),l([m()],y.prototype,"temperature",2),l([m()],y.prototype,"condition",2),l([m()],y.prototype,"aqi",2),y=l([U("kiosk-weather")],y);var nt=class extends y{setConfig(t){if(!t||typeof t.latitude!="number"||typeof t.longitude!="number")throw new Error("ha-weather-card: config must include numeric latitude and longitude");this._config=t,this.latitude=t.latitude,this.longitude=t.longitude,t.poll_interval&&(this.pollInterval=t.poll_interval)}getCardSize(){return 2}static getStubConfig(){return{latitude:51.078,longitude:16.92}}};customElements.define("ha-weather-card",nt);var Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bt=n=>(...t)=>({_$litDirective$:n,values:t}),rt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Y=class extends rt{constructor(t){if(super(t),this.it=v,t.type!==Dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===E)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Y.directiveName="unsafeHTML",Y.resultType=1;var Q=Bt(Y);var ae={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"},X=class{constructor(t={}){this.handlers=new Map;this.activeIPs={};this.onlineStatus={};this.hassSocket=null;this.hassMsgId=0;this.hassPending=new Map;this.hassStates=new Map;this.backend=t.backend??"shelly-direct",this.ips=t.ips??P.IPS,this.deviceToEntity=t.deviceToEntity??ae,this.hassUrl=t.hassUrl,this.hassToken=t.hassToken,this.fetchFn=t.fetchFn??fetch,this.log=t.logFn??(()=>{})}on(t,e){this.handlers.has(t)||this.handlers.set(t,new Set),this.handlers.get(t).add(e)}off(t,e){this.handlers.get(t)?.delete(e)}emit(t,e){this.handlers.get(t)?.forEach(i=>{try{i(e)}catch{}})}getBackend(){return this.backend}setBackend(t,e={}){e.hassUrl!==void 0&&(this.hassUrl=e.hassUrl),e.hassToken!==void 0&&(this.hassToken=e.hassToken),e.deviceToEntity!==void 0&&(this.deviceToEntity=e.deviceToEntity),e.ips!==void 0&&(this.ips=e.ips),t!==this.backend&&(this.disconnectHass(),this.backend=t)}async fetchDevice(t,e){let s=[...this.ips[t]??[]],r=this.activeIPs[t];r&&s.includes(r)&&(s=[r,...s.filter(o=>o!==r)]);for(let o of s)try{let c=new AbortController,a=setTimeout(()=>c.abort(),2e3),d=await this.fetchFn(`http://${o}${e}`,{signal:c.signal,cache:"no-store"});if(clearTimeout(a),d.ok){this.activeIPs[t]=o,this.onlineStatus[t]||(this.onlineStatus[t]=!0,this.log(`[${t.toUpperCase()}] Online via ${o}`,"success"),this.emit("device-online",{deviceId:t,ip:o}));let u=await d.text();try{return u?JSON.parse(u):{ok:!0}}catch{return{ok:!0}}}}catch{o===r&&this.log(`[${t.toUpperCase()}] Primary IP ${o} failed. Seeking failover...`,"warn")}return this.onlineStatus[t]!==!1&&(this.onlineStatus[t]=!1,this.activeIPs[t]=null,this.log(`[${t.toUpperCase()}] Connection Lost - Device Offline`,"error"),this.emit("device-offline",{deviceId:t})),null}shellyStatusEndpoint(t){return t==="awning"?"/api/shutter/state":"/rpc/Cover.GetStatus?id=0"}shellyPositionOf(t,e){if(!e)return null;if(t==="awning"){let i=e?.shutter?.currentPos?.position;return typeof i=="number"?i:null}return typeof e.current_pos=="number"?e.current_pos:typeof e.pos=="number"?e.pos:null}async getCoverStatus(t){if(this.backend==="hass")return this.hassCoverStatus(t);let e=await this.fetchDevice(t,this.shellyStatusEndpoint(t));if(!e)return{position:null,online:!1,moving:"stopped"};let i={position:this.shellyPositionOf(t,e),online:!0,moving:"stopped"};return this.emit("cover-state",{deviceId:t,state:i}),i}async coverCommand(t,e,i){if(this.backend==="hass")return this.hassCoverCommand(t,e,i);let s;switch(e){case"open":s="/rpc/Cover.Open?id=0";break;case"close":s="/rpc/Cover.Close?id=0";break;case"stop":s="/rpc/Cover.Stop?id=0";break;case"set":if(i===void 0)throw new Error("coverCommand: position required for set");s=`/rpc/Cover.GoToPosition?id=0&pos=${Math.round(i)}`;break}return t==="awning"&&(s=e==="open"?"/api/shutter/open":e==="close"?"/api/shutter/close":e==="stop"?"/api/shutter/stop":`/api/shutter/set?position=${Math.round(i??0)}`),await this.fetchDevice(t,s)!==null}entityFor(t){let e=this.deviceToEntity[t];if(!e)throw new Error(`No HA entity mapped for device '${t}'`);return e}async connectHass(t=1e4){if(!this.hassUrl)throw new Error("hassUrl not configured");this.hassSocket&&this.hassSocket.readyState===WebSocket.OPEN||await new Promise((e,i)=>{let s=setTimeout(()=>i(new Error("HA websocket connect timeout")),t),r=new WebSocket(this.hassUrl),o=!1;r.onmessage=c=>{let a;try{a=JSON.parse(String(c.data))}catch{return}if(a.type==="auth_required"&&!o){r.send(JSON.stringify({type:"auth",access_token:this.hassToken??""}));return}if(a.type==="auth_ok"){o=!0,this.hassSocket=r,this.attachHassHandlers(r),this.hassCall(r,"get_states").then(d=>{for(let u of d)this.hassStates.set(u.entity_id,u);this.hassCall(r,"subscribe_events",{event_type:"state_changed"}).then(()=>{clearTimeout(s),e()}).catch(i)}).catch(i);return}a.type==="auth_invalid"&&(clearTimeout(s),i(new Error("HA auth rejected: "+(a.message??"unknown"))))},r.onerror=()=>{clearTimeout(s),i(new Error("HA websocket error"))}})}attachHassHandlers(t){t.onmessage=e=>{let i;try{i=JSON.parse(String(e.data))}catch{return}if(i.id!==void 0&&this.hassPending.has(i.id)){let s=this.hassPending.get(i.id);this.hassPending.delete(i.id),i.type==="result"&&i.success?s(i.result):s(void 0);return}if(i.type==="event"&&i.event?.event_type==="state_changed"){let s=i.event.data;s?.entity_id&&s?.new_state&&(this.hassStates.set(s.entity_id,s.new_state),this.emit("cover-state",{entityId:s.entity_id,state:s.new_state}))}},t.onclose=()=>{this.hassSocket===t&&(this.hassSocket=null),this.emit("hass-disconnected",{})}}hassCall(t,e,i={}){let s=++this.hassMsgId;return new Promise(r=>{this.hassPending.set(s,r),t.send(JSON.stringify({id:s,type:e,...i})),setTimeout(()=>{this.hassPending.has(s)&&(this.hassPending.delete(s),r(void 0))},8e3)})}hassCoverStatus(t){let e=this.hassStates.get(this.entityFor(t));if(!e)return{position:null,online:!1,moving:"stopped"};let i=e.attributes.current_position,s=e.state;return{position:typeof i=="number"?i:null,online:s!=="unavailable"&&s!=="unknown",moving:s==="opening"?"opening":s==="closing"?"closing":"stopped"}}async hassCoverCommand(t,e,i){if(!this.hassSocket||this.hassSocket.readyState!==WebSocket.OPEN)return!1;let s=this.entityFor(t),r="",o={entity_id:s};switch(e){case"open":r="open_cover";break;case"close":r="close_cover";break;case"stop":r="stop_cover";break;case"set":if(i===void 0)throw new Error("coverCommand: position required for set");r="set_cover_position",o.position=Math.round(i);break}return await this.hassCall(this.hassSocket,"call_service",{domain:"cover",service:r,service_data:o,target:{entity_id:s}})!==void 0}injectHassState(t){this.hassStates.set(t.entity_id,t)}disconnectHass(){try{this.hassSocket?.close()}catch{}this.hassSocket=null}},ot=new X;var le='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',ce='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',Vt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><line x1="10" y1="4" x2="10" y2="20"></line><line x1="14" y1="4" x2="14" y2="20"></line></svg>',he='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>';function de(n){return!!n&&typeof n=="object"&&"position"in n&&"online"in n}function pe(n){let t=n;return!!t&&typeof t=="object"&&typeof t.entity_id=="string"&&typeof t.state=="string"}function ue(n){let t=n.attributes.current_position,e=n.state;return{position:typeof t=="number"?t:null,online:e!=="unavailable"&&e!=="unknown",moving:e==="opening"?"opening":e==="closing"?"closing":"stopped"}}var _=class extends g{constructor(){super(...arguments);this.deviceId="";this.room="";this.icon="";this.bus=ot;this.position=null;this.shown=null;this.online=!0;this.moving="stopped";this.target=null;this.animTimer=null;this.subscribedBus=null;this.onCoverState=e=>{let i=e;if(!(!i||typeof i!="object")){if(i.deviceId===this.deviceId&&de(i.state)){this.applyCoverState(i.state);return}typeof i.entityId=="string"&&pe(i.state)&&Ut[this.deviceId]===i.entityId&&this.applyCoverState(ue(i.state))}};this.onDeviceOffline=e=>{let i=e;i&&i.deviceId===this.deviceId&&(this.online=!1,this.settle())};this.onDeviceOnline=e=>{let i=e;i&&i.deviceId===this.deviceId&&(this.online=!0,this.refresh())}}connectedCallback(){super.connectedCallback(),this.subscribe(this.bus),this.refresh()}disconnectedCallback(){this.unsubscribe(),this.stopAnim(),super.disconnectedCallback()}updated(e){e.has("bus")&&this.isConnected&&this.subscribe(this.bus),e.has("deviceId")&&e.get("deviceId")!==void 0&&this.refresh()}subscribe(e){this.subscribedBus!==e&&(this.unsubscribe(),e.on("cover-state",this.onCoverState),e.on("device-offline",this.onDeviceOffline),e.on("device-online",this.onDeviceOnline),this.subscribedBus=e)}unsubscribe(){this.subscribedBus&&(this.subscribedBus.off("cover-state",this.onCoverState),this.subscribedBus.off("device-offline",this.onDeviceOffline),this.subscribedBus.off("device-online",this.onDeviceOnline),this.subscribedBus=null)}async refresh(){if(this.deviceId)try{this.applyCoverState(await this.bus.getCoverStatus(this.deviceId))}catch{this.online=!1}}applyCoverState(e){if(this.position=e.position,this.online=e.online,e.position!==null&&(this.shown=e.position),e.moving==="opening"||e.moving==="closing"){this.moving=e.moving;let i=e.moving==="opening"?100:0;this.target!==i&&this.startAnim(i);return}if(this.target!==null&&e.position!==null&&(this.target===100?e.position>=100:e.position<=0)){this.settle();return}this.animTimer||this.settle()}settle(){this.stopAnim(),this.moving="stopped",this.target=null}stopAnim(){this.animTimer!==null&&(clearInterval(this.animTimer),this.animTimer=null)}startAnim(e){this.stopAnim(),this.target=e;let i=this.shown??this.position??(e===100?0:100);if(i===e){this.shown=e;return}let s=Math.max(500,P.TRAVEL_TIME.default*Math.abs(e-i)/100),r=Date.now();this.animTimer=setInterval(()=>{let o=Math.min((Date.now()-r)/s,1);this.shown=Math.round(i+(e-i)*o),o>=1&&(this.stopAnim(),this.refresh())},150)}async userCommand(e){if(!this.deviceId)return;let i=e==="stop"||this.moving!=="stopped"?"stop":e;this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:i},bubbles:!0,composed:!0})),i==="stop"?this.settle():(this.moving=i==="open"?"opening":"closing",this.startAnim(i==="open"?100:0));let s=!1;try{s=await this.bus.coverCommand(this.deviceId,i)}catch{s=!1}if(!s){this.settle(),this.online=!1;return}i==="stop"&&(await new Promise(r=>setTimeout(r,300)),await this.refresh())}pill(){return this.online?this.position===null?{text:"\u2026",cls:"unknown"}:this.position>=97?{text:"OPEN",cls:"open"}:this.position<=3?{text:"CLOSED",cls:"closed"}:{text:`${this.position}%`,cls:"mid"}:{text:"OFFLINE",cls:"offline"}}get isMoving(){return this.moving!=="stopped"}get iconTemplate(){if(!this.icon)return f``;let e=this.icon.trim();return e.startsWith("<")?f`${Q(e)}`:f`<span class="emoji">${e}</span>`}render(){let e=this.pill(),i=!this.online||!this.isMoving&&(this.position??-1)>=100,s=!this.online||!this.isMoving&&(this.position??101)<=0,r=!this.online;return f`
      <div class="card ${this.online?"":"offline"}">
        <h2 class="room">${this.iconTemplate}<span>${this.room}</span></h2>
        <div class="pill ${e.cls} ${this.isMoving?"moving":""}">${e.text}</div>
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
              ${Q(this.moving==="opening"?Vt:le)}
            </button>
            <button class="stop" ?disabled=${r} aria-label="Stop ${this.room} shutter"
                    @click=${()=>this.userCommand("stop")}>
              ${Q(he)}
            </button>
            <button class="down ${this.moving==="closing"?"active":""}"
                    ?disabled=${s} aria-label="Close ${this.room} shutter"
                    @click=${()=>this.userCommand("close")}>
              ${Q(this.moving==="closing"?Vt:ce)}
            </button>
          </div>
        </div>
      </div>
    `}};_.styles=b`
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
  `,l([p({attribute:"device-id"})],_.prototype,"deviceId",2),l([p({attribute:"room"})],_.prototype,"room",2),l([p()],_.prototype,"icon",2),l([p({attribute:!1})],_.prototype,"bus",2),l([m()],_.prototype,"position",2),l([m()],_.prototype,"shown",2),l([m()],_.prototype,"online",2),l([m()],_.prototype,"moving",2),_=l([U("kiosk-shutter")],_);var qt=b`
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
`;var H=class extends _{constructor(){super(...arguments);this._hassBus=null;this.hass=null;this._pressing=null;this._pressTimer=null}setConfig(e){if(!e||!e.entity)throw new Error("ha-shutter-card: config must include entity");this._config=e;let i=e.entity.replace("cover.","").replace("_shutter","").replace("_","_");this.deviceId=i,this.room=e.name||e.entity,e.icon&&(this.icon=e.icon),this._hassBus=null}async userCommand(e){if(this._pressing=e,this._pressTimer&&clearTimeout(this._pressTimer),this._pressTimer=setTimeout(()=>{this._pressing=null},1e3),this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:e},bubbles:!0,composed:!0})),e==="stop"?this.settle():(this.moving=e==="open"?"opening":"closing",this.startAnim(e==="open"?100:0)),!this.hass){this.settle(),this.online=!1,console.error("[ha-shutter-card] hass is null/undefined");return}if(typeof this.hass.callService!="function"){this.settle(),this.online=!1,console.error("[ha-shutter-card] hass.callService is not a function");return}try{let i=this._config.entity.replace("cover.","").replace("_shutter",""),s=JSON.stringify({device:i,action:e,id:Date.now().toString(36)+Math.random().toString(36).slice(2,7)});await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:s}),this.online=!0}catch(i){this.settle(),this.online=!1,console.error("[ha-shutter-card] callService failed:",i)}}async refresh(){}getCardSize(){return 3}render(){let e=this._config?.name||this._config?.entity||"Shutter",i=(s,r,o)=>f`
      <button
        class="ha-shutter-btn ${this._pressing===s?"pressing":""}"
        @click=${()=>this.userCommand(s)}
      >
        <span class="ha-shutter-icon">${r}</span>
        <span>${o}</span>
      </button>
    `;return f`
      <ha-card>
        <div class="ha-shutter-wrap">
          <div class="ha-shutter-name">${e}</div>
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
      </style>
    `}static getStubConfig(){return{entity:"cover.kid_shutter",name:"Kid"}}disconnectedCallback(){super.disconnectedCallback(),this._hassBus?.disconnectHass()}subscribe(e){}};H.styles=qt,l([p({attribute:!1})],H.prototype,"hass",2),l([p({attribute:!1})],H.prototype,"_pressing",2);customElements.define("ha-shutter-card",H);function fe(n){let t=[...n],e=t.length;for(;e>0;){let i=Math.floor(Math.random()*e);e--,[t[e],t[i]]=[t[i],t[e]]}return t}function me(n){if(!n)return"";let t=n.trim();if(!t)return"";let e=/^(\d{4})-(\d{2})-(\d{2})/.exec(t),i;return e?i=new Date(+e[1],+e[2]-1,+e[3]):i=new Date(t),isNaN(i.getTime())?"":i.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}function ve(n){let t=[];n.desc&&t.push(n.desc);let e=me(n.date);return e&&t.push(e),t.join(" \u2022 ")}var x=class extends g{constructor(){super(...arguments);this.photos=[];this.interval=P.SLIDE_INTERVAL;this._order=[];this._caption="";this._index=-1;this._activeLayer=0;this._timer=null}get currentIndex(){return this._index}get currentPhoto(){return this._index>=0&&this._index<this._order.length?this._order[this._index]:null}connectedCallback(){super.connectedCallback(),this._order.length>0&&this._restartTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(e){super.updated(e),e.has("photos")?this._resetSlideshow():e.has("interval")&&this._restartTimer()}next(){this._order.length!==0&&this._goTo(this._index+1)}previous(){this._order.length!==0&&this._goTo(this._index-1)}_resetSlideshow(){this._stopTimer();let e=this.photos??[];if(e.length===0){this._order=[],this._caption="",this._index=-1,this._activeLayer=0;return}this._order=fe(e),this._index=-1,this._activeLayer=0,this._restartTimer(),this._goTo(0)}_restartTimer(){this._stopTimer(),this._order.length>0&&this.interval>0&&(this._timer=setInterval(()=>this.next(),this.interval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}_goTo(e,i=0){let s=this._order.length;if(s===0)return;let r=(e%s+s)%s;this._preload(this._order[r].url,o=>{if(o){this._reveal(r);return}i+1<s&&this._goTo(r+1,i+1)})}_preload(e,i){let s=globalThis.Image;if(typeof s!="function"||!e){i(!0);return}try{let r=new s;r.onload=()=>i(!0),r.onerror=()=>i(!1),r.src=e}catch{i(!1)}}async _reveal(e){let i=this._order[e];if(!i)return;await this.updateComplete;let s=this.renderRoot.querySelectorAll(".slide");if(s.length<2)return;let r=this._activeLayer===0?1:0,o=s[r];o.style.backgroundImage=`url("${i.url}")`,o.classList.add("active"),s[this._activeLayer].classList.remove("active"),this._activeLayer=r,this._index=e,this._caption=ve(i),this.dispatchEvent(new CustomEvent("photo-change",{detail:{index:e,photo:i},bubbles:!0,composed:!0}))}render(){return this._order.length===0?f``:f`
      <div class="slide"></div>
      <div class="slide"></div>
      ${this._caption?f`<div class="caption">${this._caption}</div>`:""}
    `}};x.styles=b`
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
  `,l([p({type:Array})],x.prototype,"photos",2),l([p({type:Number})],x.prototype,"interval",2),l([m()],x.prototype,"_order",2),l([m()],x.prototype,"_caption",2),x=l([U("kiosk-photo-slideshow")],x);var at=class extends x{async setConfig(t){if(!t)throw new Error("ha-photo-card: config required");if(this._config=t,t.interval&&(this.interval=t.interval),t.photos)this.photos=t.photos;else if(t.photos_url)try{let e=await fetch(t.photos_url);this.photos=await e.json()}catch{this.photos=[]}}getCardSize(){return 4}static getStubConfig(){return{interval:15e3,photos:[]}}};customElements.define("ha-photo-card",at);function ge(n,t){for(let e of t){let i=e.toLowerCase();for(let s of n)if(String(s?.title??"").toLowerCase().includes(i)&&s.uri)return s}return null}var ye={Netflix:"com.sony.dtv.com.netflix.ninja.com.netflix.ninja.MainActivity","Prime Video":"com.sony.dtv.com.amazon.amazonvideo.livingroom.com.amazon.amazonvideo.livingroom.MainActivity",Max:"com.sony.dtv.com.wbd.stream.com.wbd.beam.BeamActivity","Sony Core":"com.sony.dtv.com.sonypicturescore.com.sphe.bravialounge.SplashActivity"},be={Netflix:["netflix"],"Prime Video":["prime video","prime"],Max:["hbo max","max"],"Sony Core":["sony pictures core","sony core","core"]},w=class extends g{constructor(){super(...arguments);this.tvIp="";this.psk="1234";this.apps=["Netflix","Prime Video","Max","Sony Core"];this._powerOn=!1;this._online=!0;this._volume=20}connectedCallback(){super.connectedCallback(),this.syncPower()}async sony(e,i,s){try{let o=await(await fetch(`http://${this.tvIp}/sony/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-PSK":this.psk},body:JSON.stringify({method:i,version:"1.0",id:1,params:[s]})})).json();return this._online=!o.error,o.error?null:o}catch{return this._online=!1,null}}async syncPower(){let e=await this.sony("system","getPowerStatus",[]);if(e){let i=e?.result?.[0]?.status;this._powerOn=i==="active"}}emit(e,i={}){this.dispatchEvent(new CustomEvent("tv-command",{detail:{action:e,...i},bubbles:!0,composed:!0}))}async togglePower(){let e=!this._powerOn;await this.sony("system","setPowerStatus",{status:e}),this.emit(e?"power-on":"power-off"),await this.syncPower()}async volume(e){this._volume=Math.min(100,Math.max(0,this._volume+e)),await this.sony("audio","setAudioVolume",{target:"speaker",volume:String(this._volume)}),this.emit(e>0?"vol-up":"vol-down",{volume:this._volume})}titleCandidates(e){return be[e]??[e.toLowerCase()]}async launchApp(e){let i=this.titleCandidates(e),s=ye[e];try{let o=(await this.sony("appControl","getApplicationList",[]))?.result?.[0]??[],c=ge(o,i);c?.uri&&(s=c.uri)}catch{}await this.sony("appControl","setActiveApp",{uri:s}),this.emit("launch-app",{app:e})}render(){return f`
      <div class="tv">
        <div class="row">
          <button class="power ${this._powerOn?"online":""}"
                  @click=${()=>{this.togglePower()}}
                  aria-label="TV power">⏻</button>
          <button @click=${()=>{this.volume(-1)}} aria-label="Volume down">−</button>
          <span class="vol">🔊 ${this._volume}</span>
          <button @click=${()=>{this.volume(1)}} aria-label="Volume up">+</button>
        </div>
        <div class="row">
          ${this.apps.map(e=>f`<button @click=${()=>{this.launchApp(e)}}>${e}</button>`)}
        </div>
        <div class="status ${this._online?"":"offline"}">
          ${this._online?this._powerOn?"TV ONLINE":"KIOSK ACTIVE":"OFFLINE"}
        </div>
      </div>
    `}};w.styles=b`
    :host { display: block; }
    .tv { display: flex; flex-direction: column; gap: 12px; align-items: center; }
    .row { display: flex; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap; }
    button {
      font-size: 24px; font-weight: 700; padding: 14px 22px; border-radius: 14px;
      border: 3px solid #e8a33d; background: #5a3d1c; color: #ffe3b3; cursor: pointer;
      min-width: 64px;
    }
    button:active { transform: scale(0.96); }
    button.power.online { background: #2e6b2e; border-color: #7fd67f; }
    .status { font-size: 20px; font-weight: 700; color: #ffd98a; }
    .status.offline { color: #ff7b7b; }
    .vol { font-size: 22px; font-weight: 800; color: #fff; min-width: 90px; text-align: center; }
  `,l([p({attribute:"tv-ip"})],w.prototype,"tvIp",2),l([p()],w.prototype,"psk",2),l([p({type:Array,converter:{fromAttribute:e=>(e??"").split(",").map(i=>i.trim()).filter(Boolean),toAttribute:e=>(e??[]).join(",")}})],w.prototype,"apps",2),l([m()],w.prototype,"_powerOn",2),l([m()],w.prototype,"_online",2),l([m()],w.prototype,"_volume",2);customElements.define("kiosk-tv",w);var lt=class extends w{constructor(){super(...arguments);this._hass=null}setConfig(e){if(!e||!e.entity)throw new Error("ha-tv-card: config must include entity");this._config=e}set hass(e){this._hass=e;let i=e?.states?.[this._config.entity];i&&this._syncFromHass(i)}_syncFromHass(e){e.state==="on"||e.state}getCardSize(){return 3}static getStubConfig(){return{entity:"media_player.living_room_tv"}}};customElements.define("ha-tv-card",lt);var $=class extends g{constructor(){super(...arguments);this.deviceId="awning";this.bus=ot;this._position=null;this._online=!0;this._busy=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){let e=await this.bus.getCoverStatus(this.deviceId);this._position=e.position,this._online=e.online}async command(e){this.dispatchEvent(new CustomEvent("awning-move",{detail:{action:e},bubbles:!0,composed:!0})),this._busy=!0;try{await this.bus.coverCommand(this.deviceId,e)}finally{await this.refresh(),this._busy=!1}}render(){let e=this._online?this._position===null?"\u2026":`${Math.round(this._position)}%`:"OFFLINE";return f`
      <div class="awning">
        <div class="row">
          <button @click=${()=>{this.command("open")}} ?disabled=${this._busy} aria-label="Open awning">▲ Open</button>
          <button @click=${()=>{this.command("stop")}} ?disabled=${this._busy} aria-label="Stop awning">⏸ Stop</button>
          <button @click=${()=>{this.command("close")}} ?disabled=${this._busy} aria-label="Close awning">▼ Close</button>
        </div>
        <div class="pill ${this._online?"":"offline"}">${e}</div>
      </div>
    `}};$.styles=b`
    :host { display: block; }
    .awning { display: flex; flex-direction: column; gap: 12px; align-items: center; }
    .row { display: flex; gap: 12px; }
    button {
      font-size: 26px; font-weight: 800; padding: 16px 24px; border-radius: 14px;
      border: 3px solid #e8a33d; background: #5a3d1c; color: #ffe3b3; cursor: pointer;
    }
    button:active { transform: scale(0.96); }
    button:disabled { opacity: 0.5; cursor: default; }
    .pill {
      font-size: 24px; font-weight: 800; padding: 8px 20px; border-radius: 999px;
      background: #2a1f14; color: #ffd98a; border: 2px solid #e8a33d;
    }
    .pill.offline { color: #ff7b7b; border-color: #ff7b7b; }
  `,l([p({attribute:"device-id"})],$.prototype,"deviceId",2),l([m()],$.prototype,"_position",2),l([m()],$.prototype,"_online",2),l([m()],$.prototype,"_busy",2);customElements.define("kiosk-awning",$);var ct=class extends ${constructor(){super(...arguments);this._hassBus=null}setConfig(e){if(!e||!e.entity)throw new Error("ha-awning-card: config must include entity");this._config=e,this.deviceId="awning",this._hassBus=new X({backend:"hass",hassUrl:e.hass_url,hassToken:e.hass_token,deviceToEntity:{awning:e.entity},logFn:()=>{}}),this.bus=this._hassBus}set hass(e){}getCardSize(){return 2}static getStubConfig(){return{entity:"cover.patio_awning"}}disconnectedCallback(){super.disconnectedCallback(),this._hassBus?.disconnectHass()}};customElements.define("ha-awning-card",ct);var R=class extends g{constructor(){super(...arguments);this._now=new Date;this._taps=[]}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=new Date},1e3)}disconnectedCallback(){this._timer&&clearInterval(this._timer),this._timer=void 0,super.disconnectedCallback()}_tap(){let e=Date.now();this._taps=this._taps.filter(i=>e-i<2e3),this._taps.push(e),this._taps.length>=5&&(this._taps=[],this.dispatchEvent(new CustomEvent("admin-request",{bubbles:!0,composed:!0})))}render(){let e=this._now.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return f`<div class="clock" @click=${()=>this._tap()}>${e}</div>`}};R.styles=b`
    :host { display: block; }
    .clock {
      font-size: 52px; font-weight: 800; color: var(--primary-text-color, #fff); text-align: center;
      font-variant-numeric: tabular-nums; user-select: none; cursor: default;
    }
  `,l([m()],R.prototype,"_now",2);customElements.define("kiosk-clock",R);var ht=class extends R{constructor(){super()}setConfig(t){}getCardSize(){return 1}static getStubConfig(){return{}}};customElements.define("ha-clock-card",ht);})();
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
