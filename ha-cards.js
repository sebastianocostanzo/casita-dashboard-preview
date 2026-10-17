"use strict";(()=>{var Ft=Object.defineProperty;var Gt=Object.getOwnPropertyDescriptor;var c=(n,t,e,i)=>{for(var s=i>1?void 0:i?Gt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Ft(t,e,s),s};var tt=globalThis,et=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),wt=new WeakMap,V=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(et&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wt.set(e,t))}return t}toString(){return this.cssText}},$t=n=>new V(typeof n=="string"?n:n+"",void 0,dt),v=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new V(e,n,dt)},Ct=(n,t)=>{if(et)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=tt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},pt=et?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return $t(e)})(n):n;var{is:Jt,defineProperty:Wt,getOwnPropertyDescriptor:Yt,getOwnPropertyNames:Qt,getOwnPropertySymbols:Xt,getPrototypeOf:Zt}=Object,A=globalThis,St=A.trustedTypes,Kt=St?St.emptyScript:"",te=A.reactiveElementPolyfillSupport,q=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?Kt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},it=(n,t)=>!Jt(n,t),Et={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Wt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Yt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){let l=s?.call(this);r?.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;let t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){let e=this.properties,i=[...Qt(e),...Xt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(pt(s))}else t!==void 0&&e.push(pt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:j).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:j;this._$Em=s;let l=o.fromAttribute(e,r.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let o=this.constructor;if(s===!1&&(r=this[t]),i??(i=o.getPropertyOptions(t)),!((i.hasChanged??it)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:o}=r,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[q("elementProperties")]=new Map,C[q("finalized")]=new Map,te?.({ReactiveElement:C}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");var G=globalThis,At=n=>n,st=G.trustedTypes,Tt=st?st.createPolicy("lit-html",{createHTML:n=>n}):void 0,Rt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+T,ee=`<${Ht}>`,R=document,J=()=>R.createComment(""),W=n=>n===null||typeof n!="object"&&typeof n!="function",bt=Array.isArray,ie=n=>bt(n)||typeof n?.[Symbol.iterator]=="function",ut=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Pt=/>/g,O=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Ot=/"/g,Nt=/^(?:script|style|textarea|title)$/i,yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=yt(1),Ee=yt(2),Ae=yt(3),S=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Mt=new WeakMap,M=R.createTreeWalker(R,129);function Dt(n,t){if(!bt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tt!==void 0?Tt.createHTML(t):t}var se=(n,t)=>{let e=n.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",o=F;for(let l=0;l<e;l++){let a=n[l],h,m,u=-1,w=0;for(;w<a.length&&(o.lastIndex=w,m=o.exec(a),m!==null);)w=o.lastIndex,o===F?m[1]==="!--"?o=kt:m[1]!==void 0?o=Pt:m[2]!==void 0?(Nt.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=O):m[3]!==void 0&&(o=O):o===O?m[0]===">"?(o=s??F,u=-1):m[1]===void 0?u=-2:(u=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?O:m[3]==='"'?Ot:It):o===Ot||o===It?o=O:o===kt||o===Pt?o=F:(o=O,s=void 0);let $=o===O&&n[l+1].startsWith("/>")?" ":"";r+=o===F?a+ee:u>=0?(i.push(h),a.slice(0,u)+Rt+a.slice(u)+T+$):a+T+(u===-2?l:$)}return[Dt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Y=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0,l=t.length-1,a=this.parts,[h,m]=se(t,e);if(this.el=n.createElement(h,i),M.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=M.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(Rt)){let w=m[o++],$=s.getAttribute(u).split(T),I=/([.?@])?(.*)/.exec(w);a.push({type:1,index:r,name:I[2],strings:$,ctor:I[1]==="."?ft:I[1]==="?"?gt:I[1]==="@"?vt:B}),s.removeAttribute(u)}else u.startsWith(T)&&(a.push({type:6,index:r}),s.removeAttribute(u));if(Nt.test(s.tagName)){let u=s.textContent.split(T),w=u.length-1;if(w>0){s.textContent=st?st.emptyScript:"";for(let $=0;$<w;$++)s.append(u[$],J()),M.nextNode(),a.push({type:2,index:++r});s.append(u[w],J())}}}else if(s.nodeType===8)if(s.data===Ht)a.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(T,u+1))!==-1;)a.push({type:7,index:r}),u+=T.length-1}r++}}static createElement(t,e){let i=R.createElement("template");return i.innerHTML=t,i}};function U(n,t,e=n,i){if(t===S)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=W(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=U(n,s._$AS(n,t.values),s,i)),t}var mt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);M.currentNode=s;let r=M.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new Q(r,r.nextSibling,this,t):a.type===1?h=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(h=new _t(r,this,t)),this._$AV.push(h),a=i[++l]}o!==a?.index&&(r=M.nextNode(),o++)}return M.currentNode=R,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Q=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),W(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ie(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Y.createElement(Dt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new mt(s,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new Y(t)),e}k(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new n(this.O(J()),this.O(J()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=At(t).nextSibling;At(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},B=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(t,e=this,i,s){let r=this.strings,o=!1;if(r===void 0)t=U(this,t,e,0),o=!W(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{let l=t,a,h;for(t=r[0],a=0;a<r.length-1;a++)h=U(this,l[i+a],e,a),h===S&&(h=this._$AH[a]),o||(o=!W(h)||h!==this._$AH[a]),h===f?t=f:t!==f&&(t+=(h??"")+r[a+1]),this._$AH[a]=h}o&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ft=class extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},gt=class extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},vt=class extends B{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??f)===S)return;let i=this._$AH,s=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},_t=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};var ne=G.litHtmlPolyfillSupport;ne?.(Y,Q),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.3.3");var Lt=(n,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new Q(t.insertBefore(J(),r),r,void 0,e??{})}return s._$AI(n),s};var X=globalThis,g=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};g._$litElement$=!0,g.finalized=!0,X.litElementHydrateSupport?.({LitElement:g});var re=X.litElementPolyfillSupport;re?.({LitElement:g});(X.litElementVersions??(X.litElementVersions=[])).push("4.2.2");var z=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var oe={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:it},ae=(n=oe,t,e)=>{let{kind:i,metadata:s}=e,r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),i==="accessor"){let{name:o}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,n,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,n,l),l}}}if(i==="setter"){let{name:o}=e;return function(l){let a=this[o];t.call(this,l),this.requestUpdate(o,a,n,!0,l)}}throw Error("Unsupported decorator location: "+i)};function d(n){return(t,e)=>typeof e=="object"?ae(n,t,e):((i,s,r)=>{let o=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(n,t,e)}function _(n){return d({...n,state:!0,attribute:!1})}var k={TRAVEL_TIME:{default:26e3,awning_out:5e4,awning_in:6e4},POLL_INTERVAL:6e4,SLIDE_INTERVAL:15e3,WEATHER_INTERVAL:18e5,IPS:{kid:["192.168.86.203","192.168.55.203"],master:["192.168.86.22","192.168.55.13"],tv_area:["192.168.86.50","192.168.55.16"],sofa:["192.168.55.17","192.168.86.21"],awning:["192.168.86.27"]},BRIDGE_URL:"https://script.google.com/macros/s/AKfycbxzSWDfAiOOxyzQLMYdwOPAxAak-HEBGCstUARUDVQkWt9qSTqXvjCBr7-8q3qkKfQ7/exec",COORDS:{lat:51.078,lng:16.92}},Ut={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"};var le={0:"Clear",1:"Mainly Clear",2:"Partly Cloudy",3:"Overcast",45:"Foggy",61:"Rainy",63:"Heavy Rain",80:"Showers"},b=class extends g{constructor(){super(...arguments);this.latitude=0;this.longitude=0;this.pollInterval=k.WEATHER_INTERVAL;this.temperature=null;this.condition="";this.aqi=null;this._timer=null;this._lastCoords=""}static weatherCodeText(e){return le[e]??"Cloudy"}static aqiBand(e){return e<=50?{label:"Good",color:"#4caf50"}:e<=100?{label:"Moderate",color:"#ffeb3b"}:e<=150?{label:"Unhealthy (sensitive)",color:"#ff9800"}:{label:"Unhealthy",color:"#f44336"}}connectedCallback(){super.connectedCallback(),this._lastCoords=`${this.latitude},${this.longitude}`,this.refresh(),this._startTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(e){if(e.has("pollInterval")&&this._startTimer(),e.has("latitude")||e.has("longitude")){let i=`${this.latitude},${this.longitude}`;i!==this._lastCoords&&(this._lastCoords=i,this.refresh())}}async refresh(){await Promise.allSettled([this._fetchWeather(),this._fetchAqi()])}_startTimer(){this._stopTimer(),this.pollInterval>0&&(this._timer=setInterval(()=>{this.refresh()},this.pollInterval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}async _fetchWeather(){try{let e=`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,weather_code`,i=await fetch(e);if(!i.ok)return;let s=await i.json();if(!s||!s.current)return;this.temperature=Math.round(s.current.temperature_2m),this.condition=b.weatherCodeText(s.current.weather_code)}catch{}}async _fetchAqi(){try{let e=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${this.latitude}&longitude=${this.longitude}&current=us_aqi`,i=await fetch(e);if(!i.ok)return;let s=await i.json();if(!s||!s.current||s.current.us_aqi==null)return;this.aqi=Math.round(s.current.us_aqi)}catch{}}render(){let e=this.temperature===null?"\u2026":`${this.temperature}\xB0`,i=this.condition===""?"\u2026":this.condition,s=this.aqi===null?null:b.aqiBand(this.aqi);return p`
      <div class="weather">
        <div class="temp" part="temp">${e}</div>
        <div class="condition" part="condition">${i}</div>
        ${s!==null?p`
              <div class="aqi" part="aqi">
                <span class="dot" style="color:${s.color}">●</span>
                AQI ${this.aqi} ${s.label}
              </div>
            `:""}
      </div>
    `}};b.styles=v`
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
  `,c([d({type:Number})],b.prototype,"latitude",2),c([d({type:Number})],b.prototype,"longitude",2),c([d({type:Number})],b.prototype,"pollInterval",2),c([_()],b.prototype,"temperature",2),c([_()],b.prototype,"condition",2),c([_()],b.prototype,"aqi",2),b=c([z("kiosk-weather")],b);var rt=class extends b{setConfig(t){if(!t||typeof t.latitude!="number"||typeof t.longitude!="number")throw new Error("ha-weather-card: config must include numeric latitude and longitude");this._config=t,this.latitude=t.latitude,this.longitude=t.longitude,t.poll_interval&&(this.pollInterval=t.poll_interval)}getCardSize(){return 2}static getStubConfig(){return{latitude:51.078,longitude:16.92}}};customElements.define("ha-weather-card",rt);var Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=n=>(...t)=>({_$litDirective$:n,values:t}),ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Z=class extends ot{constructor(t){if(super(t),this.it=f,t.type!==Bt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||t==null)return this._t=void 0,this.it=t;if(t===S)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Z.directiveName="unsafeHTML",Z.resultType=1;var K=zt(Z);var ce={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"},xt=class{constructor(t={}){this.handlers=new Map;this.activeIPs={};this.onlineStatus={};this.hassSocket=null;this.hassMsgId=0;this.hassPending=new Map;this.hassStates=new Map;this.backend=t.backend??"shelly-direct",this.ips=t.ips??k.IPS,this.deviceToEntity=t.deviceToEntity??ce,this.hassUrl=t.hassUrl,this.hassToken=t.hassToken,this.fetchFn=t.fetchFn??fetch,this.log=t.logFn??(()=>{})}on(t,e){this.handlers.has(t)||this.handlers.set(t,new Set),this.handlers.get(t).add(e)}off(t,e){this.handlers.get(t)?.delete(e)}emit(t,e){this.handlers.get(t)?.forEach(i=>{try{i(e)}catch{}})}getBackend(){return this.backend}setBackend(t,e={}){e.hassUrl!==void 0&&(this.hassUrl=e.hassUrl),e.hassToken!==void 0&&(this.hassToken=e.hassToken),e.deviceToEntity!==void 0&&(this.deviceToEntity=e.deviceToEntity),e.ips!==void 0&&(this.ips=e.ips),t!==this.backend&&(this.disconnectHass(),this.backend=t)}async fetchDevice(t,e){let s=[...this.ips[t]??[]],r=this.activeIPs[t];r&&s.includes(r)&&(s=[r,...s.filter(o=>o!==r)]);for(let o of s)try{let l=new AbortController,a=setTimeout(()=>l.abort(),2e3),h=await this.fetchFn(`http://${o}${e}`,{signal:l.signal,cache:"no-store"});if(clearTimeout(a),h.ok){this.activeIPs[t]=o,this.onlineStatus[t]||(this.onlineStatus[t]=!0,this.log(`[${t.toUpperCase()}] Online via ${o}`,"success"),this.emit("device-online",{deviceId:t,ip:o}));let m=await h.text();try{return m?JSON.parse(m):{ok:!0}}catch{return{ok:!0}}}}catch{o===r&&this.log(`[${t.toUpperCase()}] Primary IP ${o} failed. Seeking failover...`,"warn")}return this.onlineStatus[t]!==!1&&(this.onlineStatus[t]=!1,this.activeIPs[t]=null,this.log(`[${t.toUpperCase()}] Connection Lost - Device Offline`,"error"),this.emit("device-offline",{deviceId:t})),null}shellyStatusEndpoint(t){return t==="awning"?"/api/shutter/state":"/rpc/Cover.GetStatus?id=0"}shellyPositionOf(t,e){if(!e)return null;if(t==="awning"){let i=e?.shutter?.currentPos?.position;return typeof i=="number"?i:null}return typeof e.current_pos=="number"?e.current_pos:typeof e.pos=="number"?e.pos:null}async getCoverStatus(t){if(this.backend==="hass")return this.hassCoverStatus(t);let e=await this.fetchDevice(t,this.shellyStatusEndpoint(t));if(!e)return{position:null,online:!1,moving:"stopped"};let i={position:this.shellyPositionOf(t,e),online:!0,moving:"stopped"};return this.emit("cover-state",{deviceId:t,state:i}),i}async coverCommand(t,e,i){if(this.backend==="hass")return this.hassCoverCommand(t,e,i);let s;switch(e){case"open":s="/rpc/Cover.Open?id=0";break;case"close":s="/rpc/Cover.Close?id=0";break;case"stop":s="/rpc/Cover.Stop?id=0";break;case"set":if(i===void 0)throw new Error("coverCommand: position required for set");s=`/rpc/Cover.GoToPosition?id=0&pos=${Math.round(i)}`;break}return t==="awning"&&(s=e==="open"?"/api/shutter/open":e==="close"?"/api/shutter/close":e==="stop"?"/api/shutter/stop":`/api/shutter/set?position=${Math.round(i??0)}`),await this.fetchDevice(t,s)!==null}entityFor(t){let e=this.deviceToEntity[t];if(!e)throw new Error(`No HA entity mapped for device '${t}'`);return e}async connectHass(t=1e4){if(!this.hassUrl)throw new Error("hassUrl not configured");this.hassSocket&&this.hassSocket.readyState===WebSocket.OPEN||await new Promise((e,i)=>{let s=setTimeout(()=>i(new Error("HA websocket connect timeout")),t),r=new WebSocket(this.hassUrl),o=!1;r.onmessage=l=>{let a;try{a=JSON.parse(String(l.data))}catch{return}if(a.type==="auth_required"&&!o){r.send(JSON.stringify({type:"auth",access_token:this.hassToken??""}));return}if(a.type==="auth_ok"){o=!0,this.hassSocket=r,this.attachHassHandlers(r),this.hassCall(r,"get_states").then(h=>{for(let m of h)this.hassStates.set(m.entity_id,m);this.hassCall(r,"subscribe_events",{event_type:"state_changed"}).then(()=>{clearTimeout(s),e()}).catch(i)}).catch(i);return}a.type==="auth_invalid"&&(clearTimeout(s),i(new Error("HA auth rejected: "+(a.message??"unknown"))))},r.onerror=()=>{clearTimeout(s),i(new Error("HA websocket error"))}})}attachHassHandlers(t){t.onmessage=e=>{let i;try{i=JSON.parse(String(e.data))}catch{return}if(i.id!==void 0&&this.hassPending.has(i.id)){let s=this.hassPending.get(i.id);this.hassPending.delete(i.id),i.type==="result"&&i.success?s(i.result):s(void 0);return}if(i.type==="event"&&i.event?.event_type==="state_changed"){let s=i.event.data;s?.entity_id&&s?.new_state&&(this.hassStates.set(s.entity_id,s.new_state),this.emit("cover-state",{entityId:s.entity_id,state:s.new_state}))}},t.onclose=()=>{this.hassSocket===t&&(this.hassSocket=null),this.emit("hass-disconnected",{})}}hassCall(t,e,i={}){let s=++this.hassMsgId;return new Promise(r=>{this.hassPending.set(s,r),t.send(JSON.stringify({id:s,type:e,...i})),setTimeout(()=>{this.hassPending.has(s)&&(this.hassPending.delete(s),r(void 0))},8e3)})}hassCoverStatus(t){let e=this.hassStates.get(this.entityFor(t));if(!e)return{position:null,online:!1,moving:"stopped"};let i=e.attributes.current_position,s=e.state;return{position:typeof i=="number"?i:null,online:s!=="unavailable"&&s!=="unknown",moving:s==="opening"?"opening":s==="closing"?"closing":"stopped"}}async hassCoverCommand(t,e,i){if(!this.hassSocket||this.hassSocket.readyState!==WebSocket.OPEN)return!1;let s=this.entityFor(t),r="",o={entity_id:s};switch(e){case"open":r="open_cover";break;case"close":r="close_cover";break;case"stop":r="stop_cover";break;case"set":if(i===void 0)throw new Error("coverCommand: position required for set");r="set_cover_position",o.position=Math.round(i);break}return await this.hassCall(this.hassSocket,"call_service",{domain:"cover",service:r,service_data:o,target:{entity_id:s}})!==void 0}injectHassState(t){this.hassStates.set(t.entity_id,t)}disconnectHass(){try{this.hassSocket?.close()}catch{}this.hassSocket=null}},Vt=new xt;var he='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',de='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',qt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><line x1="10" y1="4" x2="10" y2="20"></line><line x1="14" y1="4" x2="14" y2="20"></line></svg>',pe='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>';function ue(n){return!!n&&typeof n=="object"&&"position"in n&&"online"in n}function me(n){let t=n;return!!t&&typeof t=="object"&&typeof t.entity_id=="string"&&typeof t.state=="string"}function fe(n){let t=n.attributes.current_position,e=n.state;return{position:typeof t=="number"?t:null,online:e!=="unavailable"&&e!=="unknown",moving:e==="opening"?"opening":e==="closing"?"closing":"stopped"}}var y=class extends g{constructor(){super(...arguments);this.deviceId="";this.room="";this.icon="";this.bus=Vt;this.position=null;this.shown=null;this.online=!0;this.moving="stopped";this.target=null;this.animTimer=null;this.subscribedBus=null;this.onCoverState=e=>{let i=e;if(!(!i||typeof i!="object")){if(i.deviceId===this.deviceId&&ue(i.state)){this.applyCoverState(i.state);return}typeof i.entityId=="string"&&me(i.state)&&Ut[this.deviceId]===i.entityId&&this.applyCoverState(fe(i.state))}};this.onDeviceOffline=e=>{let i=e;i&&i.deviceId===this.deviceId&&(this.online=!1,this.settle())};this.onDeviceOnline=e=>{let i=e;i&&i.deviceId===this.deviceId&&(this.online=!0,this.refresh())}}connectedCallback(){super.connectedCallback(),this.subscribe(this.bus),this.refresh()}disconnectedCallback(){this.unsubscribe(),this.stopAnim(),super.disconnectedCallback()}updated(e){e.has("bus")&&this.isConnected&&this.subscribe(this.bus),e.has("deviceId")&&e.get("deviceId")!==void 0&&this.refresh()}subscribe(e){this.subscribedBus!==e&&(this.unsubscribe(),e.on("cover-state",this.onCoverState),e.on("device-offline",this.onDeviceOffline),e.on("device-online",this.onDeviceOnline),this.subscribedBus=e)}unsubscribe(){this.subscribedBus&&(this.subscribedBus.off("cover-state",this.onCoverState),this.subscribedBus.off("device-offline",this.onDeviceOffline),this.subscribedBus.off("device-online",this.onDeviceOnline),this.subscribedBus=null)}async refresh(){if(this.deviceId)try{this.applyCoverState(await this.bus.getCoverStatus(this.deviceId))}catch{this.online=!1}}applyCoverState(e){if(this.position=e.position,this.online=e.online,e.position!==null&&(this.shown=e.position),e.moving==="opening"||e.moving==="closing"){this.moving=e.moving;let i=e.moving==="opening"?100:0;this.target!==i&&this.startAnim(i);return}if(this.target!==null&&e.position!==null&&(this.target===100?e.position>=100:e.position<=0)){this.settle();return}this.animTimer||this.settle()}settle(){this.stopAnim(),this.moving="stopped",this.target=null}stopAnim(){this.animTimer!==null&&(clearInterval(this.animTimer),this.animTimer=null)}startAnim(e){this.stopAnim(),this.target=e;let i=this.shown??this.position??(e===100?0:100);if(i===e){this.shown=e;return}let s=Math.max(500,k.TRAVEL_TIME.default*Math.abs(e-i)/100),r=Date.now();this.animTimer=setInterval(()=>{let o=Math.min((Date.now()-r)/s,1);this.shown=Math.round(i+(e-i)*o),o>=1&&(this.stopAnim(),this.refresh())},150)}async userCommand(e){if(!this.deviceId)return;let i=e==="stop"||this.moving!=="stopped"?"stop":e;this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:i},bubbles:!0,composed:!0})),i==="stop"?this.settle():(this.moving=i==="open"?"opening":"closing",this.startAnim(i==="open"?100:0));let s=!1;try{s=await this.bus.coverCommand(this.deviceId,i)}catch{s=!1}if(!s){this.settle(),this.online=!1;return}i==="stop"&&(await new Promise(r=>setTimeout(r,300)),await this.refresh())}pill(){return this.online?this.position===null?{text:"\u2026",cls:"unknown"}:this.position>=97?{text:"OPEN",cls:"open"}:this.position<=3?{text:"CLOSED",cls:"closed"}:{text:`${this.position}%`,cls:"mid"}:{text:"OFFLINE",cls:"offline"}}get isMoving(){return this.moving!=="stopped"}get iconTemplate(){if(!this.icon)return p``;let e=this.icon.trim();return e.startsWith("<")?p`${K(e)}`:p`<span class="emoji">${e}</span>`}render(){let e=this.pill(),i=!this.online||!this.isMoving&&(this.position??-1)>=100,s=!this.online||!this.isMoving&&(this.position??101)<=0,r=!this.online;return p`
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
              ${K(this.moving==="opening"?qt:he)}
            </button>
            <button class="stop" ?disabled=${r} aria-label="Stop ${this.room} shutter"
                    @click=${()=>this.userCommand("stop")}>
              ${K(pe)}
            </button>
            <button class="down ${this.moving==="closing"?"active":""}"
                    ?disabled=${s} aria-label="Close ${this.room} shutter"
                    @click=${()=>this.userCommand("close")}>
              ${K(this.moving==="closing"?qt:de)}
            </button>
          </div>
        </div>
      </div>
    `}};y.styles=v`
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
  `,c([d({attribute:"device-id"})],y.prototype,"deviceId",2),c([d({attribute:"room"})],y.prototype,"room",2),c([d()],y.prototype,"icon",2),c([d({attribute:!1})],y.prototype,"bus",2),c([_()],y.prototype,"position",2),c([_()],y.prototype,"shown",2),c([_()],y.prototype,"online",2),c([_()],y.prototype,"moving",2),y=c([z("kiosk-shutter")],y);var at=v`
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
`;var H=class extends y{constructor(){super(...arguments);this._hassBus=null;this.hass=null;this._pressing=null;this._pressTimer=null}setConfig(e){if(!e||!e.entity)throw new Error("ha-shutter-card: config must include entity");this._config=e;let i=e.entity.replace("cover.","").replace("_shutter","").replace("_","_");this.deviceId=i,this.room=e.name||e.entity,e.icon&&(this.icon=e.icon),this._hassBus=null}async userCommand(e){if(this._pressing=e,this._pressTimer&&clearTimeout(this._pressTimer),this._pressTimer=setTimeout(()=>{this._pressing=null},1e3),this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:e},bubbles:!0,composed:!0})),e==="stop"?this.settle():(this.moving=e==="open"?"opening":"closing",this.startAnim(e==="open"?100:0)),!this.hass){this.settle(),this.online=!1,console.error("[ha-shutter-card] hass is null/undefined");return}if(typeof this.hass.callService!="function"){this.settle(),this.online=!1,console.error("[ha-shutter-card] hass.callService is not a function");return}try{let i=this._config.entity.replace("cover.","").replace("_shutter",""),s=JSON.stringify({device:i,action:e,id:Date.now().toString(36)+Math.random().toString(36).slice(2,7)});await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:s}),this.online=!0}catch(i){this.settle(),this.online=!1,console.error("[ha-shutter-card] callService failed:",i)}}async refresh(){}getCardSize(){return 3}render(){let e=this._config?.name||this._config?.entity||"Shutter",i=(s,r,o)=>p`
      <button
        class="ha-shutter-btn ${this._pressing===s?"pressing":""}"
        @click=${()=>this.userCommand(s)}
      >
        <span class="ha-shutter-icon">${r}</span>
        <span>${o}</span>
      </button>
    `;return p`
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
    `}static getStubConfig(){return{entity:"cover.kid_shutter",name:"Kid"}}disconnectedCallback(){super.disconnectedCallback(),this._hassBus?.disconnectHass()}subscribe(e){}};H.styles=at,c([d({attribute:!1})],H.prototype,"hass",2),c([d({attribute:!1})],H.prototype,"_pressing",2);customElements.define("ha-shutter-card",H);function ge(n){let t=[...n],e=t.length;for(;e>0;){let i=Math.floor(Math.random()*e);e--,[t[e],t[i]]=[t[i],t[e]]}return t}function ve(n){if(!n)return"";let t=n.trim();if(!t)return"";let e=/^(\d{4})-(\d{2})-(\d{2})/.exec(t),i;return e?i=new Date(+e[1],+e[2]-1,+e[3]):i=new Date(t),isNaN(i.getTime())?"":i.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}function _e(n){let t=[];n.desc&&t.push(n.desc);let e=ve(n.date);return e&&t.push(e),t.join(" \u2022 ")}var x=class extends g{constructor(){super(...arguments);this.photos=[];this.interval=k.SLIDE_INTERVAL;this._order=[];this._caption="";this._index=-1;this._activeLayer=0;this._timer=null}get currentIndex(){return this._index}get currentPhoto(){return this._index>=0&&this._index<this._order.length?this._order[this._index]:null}connectedCallback(){super.connectedCallback(),this._order.length>0&&this._restartTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(e){super.updated(e),e.has("photos")?this._resetSlideshow():e.has("interval")&&this._restartTimer()}next(){this._order.length!==0&&this._goTo(this._index+1)}previous(){this._order.length!==0&&this._goTo(this._index-1)}_resetSlideshow(){this._stopTimer();let e=this.photos??[];if(e.length===0){this._order=[],this._caption="",this._index=-1,this._activeLayer=0;return}this._order=ge(e),this._index=-1,this._activeLayer=0,this._restartTimer(),this._goTo(0)}_restartTimer(){this._stopTimer(),this._order.length>0&&this.interval>0&&(this._timer=setInterval(()=>this.next(),this.interval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}_goTo(e,i=0){let s=this._order.length;if(s===0)return;let r=(e%s+s)%s;this._preload(this._order[r].url,o=>{if(o){this._reveal(r);return}i+1<s&&this._goTo(r+1,i+1)})}_preload(e,i){let s=globalThis.Image;if(typeof s!="function"||!e){i(!0);return}try{let r=new s;r.onload=()=>i(!0),r.onerror=()=>i(!1),r.src=e}catch{i(!1)}}async _reveal(e){let i=this._order[e];if(!i)return;await this.updateComplete;let s=this.renderRoot.querySelectorAll(".slide");if(s.length<2)return;let r=this._activeLayer===0?1:0,o=s[r];o.style.backgroundImage=`url("${i.url}")`,o.classList.add("active"),s[this._activeLayer].classList.remove("active"),this._activeLayer=r,this._index=e,this._caption=_e(i),this.dispatchEvent(new CustomEvent("photo-change",{detail:{index:e,photo:i},bubbles:!0,composed:!0}))}render(){return this._order.length===0?p``:p`
      <div class="slide"></div>
      <div class="slide"></div>
      ${this._caption?p`<div class="caption">${this._caption}</div>`:""}
    `}};x.styles=v`
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
  `,c([d({type:Array})],x.prototype,"photos",2),c([d({type:Number})],x.prototype,"interval",2),c([_()],x.prototype,"_order",2),c([_()],x.prototype,"_caption",2),x=c([z("kiosk-photo-slideshow")],x);var lt=class extends x{async setConfig(t){if(!t)throw new Error("ha-photo-card: config required");if(this._config=t,t.interval&&(this.interval=t.interval),t.photos)this.photos=t.photos;else if(t.photos_url)try{let e=await fetch(t.photos_url);this.photos=await e.json()}catch{this.photos=[]}}getCardSize(){return 4}static getStubConfig(){return{interval:15e3,photos:[]}}};customElements.define("ha-photo-card",lt);var E=class extends g{constructor(){super(...arguments);this.hass=null;this._volume=25;this._muted=!1;this._power=!0}setConfig(e){this._config=e||{type:"custom:ha-tv-card"}}async tvCommand(e,i={}){if(!this.hass){console.error("[ha-tv-card] No hass object");return}let s={device:"tv",action:e,params:i,id:Math.random().toString(36).substring(2,10)};try{await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:JSON.stringify(s)}),console.log("[ha-tv-card] Sent:",e)}catch(r){console.error("[ha-tv-card] Failed:",r)}}_togglePower(){this._power=!this._power,this.tvCommand(this._power?"power_on":"power_off")}_toggleMute(){this._muted=!this._muted,this.tvCommand(this._muted?"mute":"unmute")}_onVolumeChange(e){let i=e.target;this._volume=parseInt(i.value,10)}_onVolumeCommit(){this.tvCommand("set_volume",{volume:this._volume}),this._muted&&this._volume>0&&(this._muted=!1)}render(){let e=this._config?.name||"TV";return p`
      <ha-card>
        <div class="tv-card">
          <div class="tv-name">${e}</div>
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
    `}getCardSize(){return 3}static getStubConfig(){return{name:"TV"}}};E.styles=[at,v`
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
    `],c([d({attribute:!1})],E.prototype,"hass",2),c([d({attribute:!1})],E.prototype,"_volume",2),c([d({attribute:!1})],E.prototype,"_muted",2),c([d({attribute:!1})],E.prototype,"_power",2);customElements.define("ha-tv-card",E);var P=class extends g{constructor(){super(...arguments);this.hass=null;this._sessionStart=null;this._now=Date.now();this._timer=null}setConfig(e){this._config=e||{type:"custom:ha-tv-screentime-card"}}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=Date.now()},5e3)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}_getTvStatus(){if(!this.hass?.states?.["input_text.tv_status"])return null;try{return JSON.parse(this.hass.states["input_text.tv_status"].state)}catch{return null}}_getDailyTotal(){if(!this.hass?.states?.["input_text.tv_daily_total"])return 0;try{let e=JSON.parse(this.hass.states["input_text.tv_daily_total"].state),i=new Date().toISOString().split("T")[0];return e.date!==i?0:e.total_ms||0}catch{return 0}}_formatDuration(e){let i=Math.floor(e/6e4),s=Math.floor(i/60),r=i%60;return s>0?`${s}h ${r}m`:`${r}m`}render(){let e=this._config?.name||"TV Screen Time",i=(this._config?.warn_after||120)*6e4,s=this._getTvStatus();if(!s||s.power!=="active")return p`
        <ha-card><div class="st-card">
          <div class="st-name">${e}</div>
          <div class="st-off">📺 TV is off</div>
        </div></ha-card>
      `;let r=s.session_start;if(!r)return p`
        <ha-card><div class="st-card">
          <div class="st-name">${e}</div>
          <div class="st-off">📺 TV is off</div>
        </div></ha-card>
      `;let o=this._now-r,l=o>=i,a=this._getDailyTotal()+o;return p`
      <ha-card><div class="st-card">
        <div class="st-name">${e}</div>
        <div class="st-time ${l?"warn":""}">${this._formatDuration(o)}</div>
        <div class="st-status">
          ${l?"\u26A0\uFE0F Consider a break!":"This session"}
        </div>
        <div class="st-daily">Today total: ${this._formatDuration(a)}</div>
      </div></ha-card>
    `}getCardSize(){return 2}static getStubConfig(){return{name:"TV Screen Time",warn_after:120}}};P.styles=v`
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
  `,c([d({attribute:!1})],P.prototype,"hass",2),c([_()],P.prototype,"_sessionStart",2),c([_()],P.prototype,"_now",2);customElements.define("ha-tv-screentime-card",P);var N=class extends g{constructor(){super(...arguments);this.hass=null;this._pressing=null;this._pressTimer=null}setConfig(e){this._config=e||{type:"custom:ha-awning-card"}}async _sendCommand(e){if(!this.hass)return;this._pressing=e,this._pressTimer&&clearTimeout(this._pressTimer),this._pressTimer=setTimeout(()=>{this._pressing=null},1e3);let i={device:"awning",action:e,id:Math.random().toString(36).substring(2,10)};try{await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:JSON.stringify(i)})}catch(s){console.error("[ha-awning-card] Failed:",s)}}render(){let e=this._config?.name||"Awning",i=(s,r,o)=>p`
      <button
        class="awning-btn ${this._pressing===s?"pressing":""}"
        @click=${()=>this._sendCommand(s)}
      >
        <span class="awning-icon">${r}</span>
        <span>${o}</span>
      </button>
    `;return p`
      <ha-card><div class="awning-card">
        <div class="awning-name">⛱️ ${e}</div>
        <div class="awning-controls">
          ${i("open","\u2B06\uFE0F","Open")}
          ${i("stop","\u23F9\uFE0F","Stop")}
          ${i("close","\u2B07\uFE0F","Close")}
        </div>
      </div></ha-card>
    `}getCardSize(){return 2}static getStubConfig(){return{name:"Awning"}}};N.styles=v`
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
  `,c([d({attribute:!1})],N.prototype,"hass",2),c([d({attribute:!1})],N.prototype,"_pressing",2);customElements.define("ha-awning-card",N);var D=class extends g{constructor(){super(...arguments);this._now=new Date;this._taps=[]}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=new Date},1e3)}disconnectedCallback(){this._timer&&clearInterval(this._timer),this._timer=void 0,super.disconnectedCallback()}_tap(){let e=Date.now();this._taps=this._taps.filter(i=>e-i<2e3),this._taps.push(e),this._taps.length>=5&&(this._taps=[],this.dispatchEvent(new CustomEvent("admin-request",{bubbles:!0,composed:!0})))}render(){let e=this._now.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return p`<div class="clock" @click=${()=>this._tap()}>${e}</div>`}};D.styles=v`
    :host { display: block; }
    .clock {
      font-size: 52px; font-weight: 800; color: var(--primary-text-color, #fff); text-align: center;
      font-variant-numeric: tabular-nums; user-select: none; cursor: default;
    }
  `,c([_()],D.prototype,"_now",2);customElements.define("kiosk-clock",D);var ct=class extends D{constructor(){super()}setConfig(t){}getCardSize(){return 1}static getStubConfig(){return{}}};customElements.define("ha-clock-card",ct);var ht=class extends x{constructor(){super(...arguments);this._loaded=!1}async setConfig(e){if(!e)throw new Error("ha-immich-card: config required");this._config=e,e.interval&&(this.interval=e.interval),!this._loaded&&e.immich_url&&e.api_key&&(this._loaded=!0,this._loadPhotos())}async _loadPhotos(){let{immich_url:e,api_key:i,album_name:s}=this._config;if(!e||!i)return;let r=e.replace(/\/$/,""),o={"x-api-key":i};try{let a=await(await fetch(`${r}/api/albums`,{headers:o})).json(),h=a.find(L=>L.albumName===s);if(!h&&a.length>0&&(h=a[0]),!h){console.warn("ha-immich-card: no albums found");return}let w=(await(await fetch(`${r}/api/search/metadata`,{method:"POST",headers:{...o,"Content-Type":"application/json"},body:JSON.stringify({albumIds:[h.id],size:1e3})})).json()).assets?.items||[],I=(await Promise.all(w.map(async L=>{try{let jt=await(await fetch(`${r}/api/assets/${L.id}/thumbnail?size=preview`,{headers:o})).blob();return{url:URL.createObjectURL(jt),desc:"",date:L.fileCreatedAt||""}}catch{return null}}))).filter(L=>L!==null);I.length>0&&(this.photos=I)}catch(l){console.error("ha-immich-card: failed to load photos",l)}}getCardSize(){return 4}static getStubConfig(){return{interval:15e3,album_name:"Kiosk"}}};customElements.define("ha-immich-card",ht);})();
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
