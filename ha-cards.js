"use strict";(()=>{var qt=Object.defineProperty;var jt=Object.getOwnPropertyDescriptor;var l=(n,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&qt(t,e,s),s};var tt=globalThis,et=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),$t=new WeakMap,B=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(et&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&$t.set(e,t))}return t}toString(){return this.cssText}},wt=n=>new B(typeof n=="string"?n:n+"",void 0,pt),b=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new B(e,n,pt)},Ct=(n,t)=>{if(et)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=tt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},ut=et?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return wt(e)})(n):n;var{is:Ft,defineProperty:Gt,getOwnPropertyDescriptor:Wt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Yt,getPrototypeOf:Qt}=Object,k=globalThis,St=k.trustedTypes,Xt=St?St.emptyScript:"",Zt=k.reactiveElementPolyfillSupport,z=(n,t)=>n,V={toAttribute(n,t){switch(t){case Boolean:n=n?Xt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},it=(n,t)=>!Ft(n,t),Et={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Gt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Wt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){let c=s?.call(this);r?.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;let t=Qt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){let e=this.properties,i=[...Jt(e),...Yt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(ut(s))}else t!==void 0&&e.push(ut(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:V).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:V;this._$Em=s;let c=o.fromAttribute(e,r.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){let o=this.constructor;if(s===!1&&(r=this[t]),i??(i=o.getPropertyOptions(t)),!((i.hasChanged??it)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:o}=r,c=this[s];o!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[z("elementProperties")]=new Map,C[z("finalized")]=new Map,Zt?.({ReactiveElement:C}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.1.2");var j=globalThis,At=n=>n,st=j.trustedTypes,kt=st?st.createPolicy("lit-html",{createHTML:n=>n}):void 0,Rt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+T,Kt=`<${Ht}>`,R=document,F=()=>R.createComment(""),G=n=>n===null||typeof n!="object"&&typeof n!="function",yt=Array.isArray,te=n=>yt(n)||typeof n?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Pt=/>/g,O=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Ot=/"/g,Nt=/^(?:script|style|textarea|title)$/i,xt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=xt(1),$e=xt(2),we=xt(3),S=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Mt=new WeakMap,M=R.createTreeWalker(R,129);function Lt(n,t){if(!yt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(t):t}var ee=(n,t)=>{let e=n.length-1,i=[],s,r=t===2?"<svg>":t===3?"<math>":"",o=q;for(let c=0;c<e;c++){let a=n[c],u,m,d=-1,w=0;for(;w<a.length&&(o.lastIndex=w,m=o.exec(a),m!==null);)w=o.lastIndex,o===q?m[1]==="!--"?o=Tt:m[1]!==void 0?o=Pt:m[2]!==void 0?(Nt.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=O):m[3]!==void 0&&(o=O):o===O?m[0]===">"?(o=s??q,d=-1):m[1]===void 0?d=-2:(d=o.lastIndex-m[2].length,u=m[1],o=m[3]===void 0?O:m[3]==='"'?Ot:It):o===Ot||o===It?o=O:o===Tt||o===Pt?o=q:(o=O,s=void 0);let A=o===O&&n[c+1].startsWith("/>")?" ":"";r+=o===q?a+Kt:d>=0?(i.push(u),a.slice(0,d)+Rt+a.slice(d)+T+A):a+T+(d===-2?c:A)}return[Lt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},W=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0,c=t.length-1,a=this.parts,[u,m]=ee(t,e);if(this.el=n.createElement(u,i),M.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=M.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Rt)){let w=m[o++],A=s.getAttribute(d).split(T),K=/([.?@])?(.*)/.exec(w);a.push({type:1,index:r,name:K[2],strings:A,ctor:K[1]==="."?vt:K[1]==="?"?gt:K[1]==="@"?bt:D}),s.removeAttribute(d)}else d.startsWith(T)&&(a.push({type:6,index:r}),s.removeAttribute(d));if(Nt.test(s.tagName)){let d=s.textContent.split(T),w=d.length-1;if(w>0){s.textContent=st?st.emptyScript:"";for(let A=0;A<w;A++)s.append(d[A],F()),M.nextNode(),a.push({type:2,index:++r});s.append(d[w],F())}}}else if(s.nodeType===8)if(s.data===Ht)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(T,d+1))!==-1;)a.push({type:7,index:r}),d+=T.length-1}r++}}static createElement(t,e){let i=R.createElement("template");return i.innerHTML=t,i}};function L(n,t,e=n,i){if(t===S)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,r=G(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=L(n,s._$AS(n,t.values),s,i)),t}var ft=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);M.currentNode=s;let r=M.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let u;a.type===2?u=new J(r,r.nextSibling,this,t):a.type===1?u=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(u=new _t(r,this,t)),this._$AV.push(u),a=i[++c]}o!==a?.index&&(r=M.nextNode(),o++)}return M.currentNode=R,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},J=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),G(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):te(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=W.createElement(Lt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new ft(s,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new W(t)),e}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new n(this.O(F()),this.O(F()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=At(t).nextSibling;At(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(t,e=this,i,s){let r=this.strings,o=!1;if(r===void 0)t=L(this,t,e,0),o=!G(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{let c=t,a,u;for(t=r[0],a=0;a<r.length-1;a++)u=L(this,c[i+a],e,a),u===S&&(u=this._$AH[a]),o||(o=!G(u)||u!==this._$AH[a]),u===f?t=f:t!==f&&(t+=(u??"")+r[a+1]),this._$AH[a]=u}o&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},vt=class extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},gt=class extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},bt=class extends D{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??f)===S)return;let i=this._$AH,s=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},_t=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}};var ie=j.litHtmlPolyfillSupport;ie?.(W,J),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.3.3");var Dt=(n,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let r=e?.renderBefore??null;i._$litPart$=s=new J(t.insertBefore(F(),r),r,void 0,e??{})}return s._$AI(n),s};var Y=globalThis,g=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};g._$litElement$=!0,g.finalized=!0,Y.litElementHydrateSupport?.({LitElement:g});var se=Y.litElementPolyfillSupport;se?.({LitElement:g});(Y.litElementVersions??(Y.litElementVersions=[])).push("4.2.2");var U=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var ne={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:it},re=(n=ne,t,e)=>{let{kind:i,metadata:s}=e,r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),i==="accessor"){let{name:o}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,n,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,n,c),c}}}if(i==="setter"){let{name:o}=e;return function(c){let a=this[o];t.call(this,c),this.requestUpdate(o,a,n,!0,c)}}throw Error("Unsupported decorator location: "+i)};function h(n){return(t,e)=>typeof e=="object"?re(n,t,e):((i,s,r)=>{let o=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(n,t,e)}function v(n){return h({...n,state:!0,attribute:!1})}var P={TRAVEL_TIME:{default:26e3,awning_out:5e4,awning_in:6e4},POLL_INTERVAL:6e4,SLIDE_INTERVAL:15e3,WEATHER_INTERVAL:18e5,IPS:{kid:["192.168.86.203","192.168.55.203"],master:["192.168.86.22","192.168.55.13"],tv_area:["192.168.86.50","192.168.55.16"],sofa:["192.168.55.17","192.168.86.21"],awning:["192.168.86.27"]},BRIDGE_URL:"https://script.google.com/macros/s/AKfycbxzSWDfAiOOxyzQLMYdwOPAxAak-HEBGCstUARUDVQkWt9qSTqXvjCBr7-8q3qkKfQ7/exec",COORDS:{lat:51.078,lng:16.92}},Ut={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"};var oe={0:"Clear",1:"Mainly Clear",2:"Partly Cloudy",3:"Overcast",45:"Foggy",61:"Rainy",63:"Heavy Rain",80:"Showers"},_=class extends g{constructor(){super(...arguments);this.latitude=0;this.longitude=0;this.pollInterval=P.WEATHER_INTERVAL;this.temperature=null;this.condition="";this.aqi=null;this._timer=null;this._lastCoords=""}static weatherCodeText(e){return oe[e]??"Cloudy"}static aqiBand(e){return e<=50?{label:"Good",color:"#4caf50"}:e<=100?{label:"Moderate",color:"#ffeb3b"}:e<=150?{label:"Unhealthy (sensitive)",color:"#ff9800"}:{label:"Unhealthy",color:"#f44336"}}connectedCallback(){super.connectedCallback(),this._lastCoords=`${this.latitude},${this.longitude}`,this.refresh(),this._startTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(e){if(e.has("pollInterval")&&this._startTimer(),e.has("latitude")||e.has("longitude")){let i=`${this.latitude},${this.longitude}`;i!==this._lastCoords&&(this._lastCoords=i,this.refresh())}}async refresh(){await Promise.allSettled([this._fetchWeather(),this._fetchAqi()])}_startTimer(){this._stopTimer(),this.pollInterval>0&&(this._timer=setInterval(()=>{this.refresh()},this.pollInterval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}async _fetchWeather(){try{let e=`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,weather_code`,i=await fetch(e);if(!i.ok)return;let s=await i.json();if(!s||!s.current)return;this.temperature=Math.round(s.current.temperature_2m),this.condition=_.weatherCodeText(s.current.weather_code)}catch{}}async _fetchAqi(){try{let e=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${this.latitude}&longitude=${this.longitude}&current=us_aqi`,i=await fetch(e);if(!i.ok)return;let s=await i.json();if(!s||!s.current||s.current.us_aqi==null)return;this.aqi=Math.round(s.current.us_aqi)}catch{}}render(){let e=this.temperature===null?"\u2026":`${this.temperature}\xB0`,i=this.condition===""?"\u2026":this.condition,s=this.aqi===null?null:_.aqiBand(this.aqi);return p`
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
    `}};_.styles=b`
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
  `,l([h({type:Number})],_.prototype,"latitude",2),l([h({type:Number})],_.prototype,"longitude",2),l([h({type:Number})],_.prototype,"pollInterval",2),l([v()],_.prototype,"temperature",2),l([v()],_.prototype,"condition",2),l([v()],_.prototype,"aqi",2),_=l([U("kiosk-weather")],_);var rt=class extends _{setConfig(t){if(!t||typeof t.latitude!="number"||typeof t.longitude!="number")throw new Error("ha-weather-card: config must include numeric latitude and longitude");this._config=t,this.latitude=t.latitude,this.longitude=t.longitude,t.poll_interval&&(this.pollInterval=t.poll_interval)}getCardSize(){return 2}static getStubConfig(){return{latitude:51.078,longitude:16.92}}};customElements.define("ha-weather-card",rt);var Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=n=>(...t)=>({_$litDirective$:n,values:t}),ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Q=class extends ot{constructor(t){if(super(t),this.it=f,t.type!==Bt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||t==null)return this._t=void 0,this.it=t;if(t===S)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Q.directiveName="unsafeHTML",Q.resultType=1;var X=zt(Q);var ae={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"},Z=class{constructor(t={}){this.handlers=new Map;this.activeIPs={};this.onlineStatus={};this.hassSocket=null;this.hassMsgId=0;this.hassPending=new Map;this.hassStates=new Map;this.backend=t.backend??"shelly-direct",this.ips=t.ips??P.IPS,this.deviceToEntity=t.deviceToEntity??ae,this.hassUrl=t.hassUrl,this.hassToken=t.hassToken,this.fetchFn=t.fetchFn??fetch,this.log=t.logFn??(()=>{})}on(t,e){this.handlers.has(t)||this.handlers.set(t,new Set),this.handlers.get(t).add(e)}off(t,e){this.handlers.get(t)?.delete(e)}emit(t,e){this.handlers.get(t)?.forEach(i=>{try{i(e)}catch{}})}getBackend(){return this.backend}setBackend(t,e={}){e.hassUrl!==void 0&&(this.hassUrl=e.hassUrl),e.hassToken!==void 0&&(this.hassToken=e.hassToken),e.deviceToEntity!==void 0&&(this.deviceToEntity=e.deviceToEntity),e.ips!==void 0&&(this.ips=e.ips),t!==this.backend&&(this.disconnectHass(),this.backend=t)}async fetchDevice(t,e){let s=[...this.ips[t]??[]],r=this.activeIPs[t];r&&s.includes(r)&&(s=[r,...s.filter(o=>o!==r)]);for(let o of s)try{let c=new AbortController,a=setTimeout(()=>c.abort(),2e3),u=await this.fetchFn(`http://${o}${e}`,{signal:c.signal,cache:"no-store"});if(clearTimeout(a),u.ok){this.activeIPs[t]=o,this.onlineStatus[t]||(this.onlineStatus[t]=!0,this.log(`[${t.toUpperCase()}] Online via ${o}`,"success"),this.emit("device-online",{deviceId:t,ip:o}));let m=await u.text();try{return m?JSON.parse(m):{ok:!0}}catch{return{ok:!0}}}}catch{o===r&&this.log(`[${t.toUpperCase()}] Primary IP ${o} failed. Seeking failover...`,"warn")}return this.onlineStatus[t]!==!1&&(this.onlineStatus[t]=!1,this.activeIPs[t]=null,this.log(`[${t.toUpperCase()}] Connection Lost - Device Offline`,"error"),this.emit("device-offline",{deviceId:t})),null}shellyStatusEndpoint(t){return t==="awning"?"/api/shutter/state":"/rpc/Cover.GetStatus?id=0"}shellyPositionOf(t,e){if(!e)return null;if(t==="awning"){let i=e?.shutter?.currentPos?.position;return typeof i=="number"?i:null}return typeof e.current_pos=="number"?e.current_pos:typeof e.pos=="number"?e.pos:null}async getCoverStatus(t){if(this.backend==="hass")return this.hassCoverStatus(t);let e=await this.fetchDevice(t,this.shellyStatusEndpoint(t));if(!e)return{position:null,online:!1,moving:"stopped"};let i={position:this.shellyPositionOf(t,e),online:!0,moving:"stopped"};return this.emit("cover-state",{deviceId:t,state:i}),i}async coverCommand(t,e,i){if(this.backend==="hass")return this.hassCoverCommand(t,e,i);let s;switch(e){case"open":s="/rpc/Cover.Open?id=0";break;case"close":s="/rpc/Cover.Close?id=0";break;case"stop":s="/rpc/Cover.Stop?id=0";break;case"set":if(i===void 0)throw new Error("coverCommand: position required for set");s=`/rpc/Cover.GoToPosition?id=0&pos=${Math.round(i)}`;break}return t==="awning"&&(s=e==="open"?"/api/shutter/open":e==="close"?"/api/shutter/close":e==="stop"?"/api/shutter/stop":`/api/shutter/set?position=${Math.round(i??0)}`),await this.fetchDevice(t,s)!==null}entityFor(t){let e=this.deviceToEntity[t];if(!e)throw new Error(`No HA entity mapped for device '${t}'`);return e}async connectHass(t=1e4){if(!this.hassUrl)throw new Error("hassUrl not configured");this.hassSocket&&this.hassSocket.readyState===WebSocket.OPEN||await new Promise((e,i)=>{let s=setTimeout(()=>i(new Error("HA websocket connect timeout")),t),r=new WebSocket(this.hassUrl),o=!1;r.onmessage=c=>{let a;try{a=JSON.parse(String(c.data))}catch{return}if(a.type==="auth_required"&&!o){r.send(JSON.stringify({type:"auth",access_token:this.hassToken??""}));return}if(a.type==="auth_ok"){o=!0,this.hassSocket=r,this.attachHassHandlers(r),this.hassCall(r,"get_states").then(u=>{for(let m of u)this.hassStates.set(m.entity_id,m);this.hassCall(r,"subscribe_events",{event_type:"state_changed"}).then(()=>{clearTimeout(s),e()}).catch(i)}).catch(i);return}a.type==="auth_invalid"&&(clearTimeout(s),i(new Error("HA auth rejected: "+(a.message??"unknown"))))},r.onerror=()=>{clearTimeout(s),i(new Error("HA websocket error"))}})}attachHassHandlers(t){t.onmessage=e=>{let i;try{i=JSON.parse(String(e.data))}catch{return}if(i.id!==void 0&&this.hassPending.has(i.id)){let s=this.hassPending.get(i.id);this.hassPending.delete(i.id),i.type==="result"&&i.success?s(i.result):s(void 0);return}if(i.type==="event"&&i.event?.event_type==="state_changed"){let s=i.event.data;s?.entity_id&&s?.new_state&&(this.hassStates.set(s.entity_id,s.new_state),this.emit("cover-state",{entityId:s.entity_id,state:s.new_state}))}},t.onclose=()=>{this.hassSocket===t&&(this.hassSocket=null),this.emit("hass-disconnected",{})}}hassCall(t,e,i={}){let s=++this.hassMsgId;return new Promise(r=>{this.hassPending.set(s,r),t.send(JSON.stringify({id:s,type:e,...i})),setTimeout(()=>{this.hassPending.has(s)&&(this.hassPending.delete(s),r(void 0))},8e3)})}hassCoverStatus(t){let e=this.hassStates.get(this.entityFor(t));if(!e)return{position:null,online:!1,moving:"stopped"};let i=e.attributes.current_position,s=e.state;return{position:typeof i=="number"?i:null,online:s!=="unavailable"&&s!=="unknown",moving:s==="opening"?"opening":s==="closing"?"closing":"stopped"}}async hassCoverCommand(t,e,i){if(!this.hassSocket||this.hassSocket.readyState!==WebSocket.OPEN)return!1;let s=this.entityFor(t),r="",o={entity_id:s};switch(e){case"open":r="open_cover";break;case"close":r="close_cover";break;case"stop":r="stop_cover";break;case"set":if(i===void 0)throw new Error("coverCommand: position required for set");r="set_cover_position",o.position=Math.round(i);break}return await this.hassCall(this.hassSocket,"call_service",{domain:"cover",service:r,service_data:o,target:{entity_id:s}})!==void 0}injectHassState(t){this.hassStates.set(t.entity_id,t)}disconnectHass(){try{this.hassSocket?.close()}catch{}this.hassSocket=null}},at=new Z;var le='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',ce='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',Vt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><line x1="10" y1="4" x2="10" y2="20"></line><line x1="14" y1="4" x2="14" y2="20"></line></svg>',he='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>';function de(n){return!!n&&typeof n=="object"&&"position"in n&&"online"in n}function pe(n){let t=n;return!!t&&typeof t=="object"&&typeof t.entity_id=="string"&&typeof t.state=="string"}function ue(n){let t=n.attributes.current_position,e=n.state;return{position:typeof t=="number"?t:null,online:e!=="unavailable"&&e!=="unknown",moving:e==="opening"?"opening":e==="closing"?"closing":"stopped"}}var y=class extends g{constructor(){super(...arguments);this.deviceId="";this.room="";this.icon="";this.bus=at;this.position=null;this.shown=null;this.online=!0;this.moving="stopped";this.target=null;this.animTimer=null;this.subscribedBus=null;this.onCoverState=e=>{let i=e;if(!(!i||typeof i!="object")){if(i.deviceId===this.deviceId&&de(i.state)){this.applyCoverState(i.state);return}typeof i.entityId=="string"&&pe(i.state)&&Ut[this.deviceId]===i.entityId&&this.applyCoverState(ue(i.state))}};this.onDeviceOffline=e=>{let i=e;i&&i.deviceId===this.deviceId&&(this.online=!1,this.settle())};this.onDeviceOnline=e=>{let i=e;i&&i.deviceId===this.deviceId&&(this.online=!0,this.refresh())}}connectedCallback(){super.connectedCallback(),this.subscribe(this.bus),this.refresh()}disconnectedCallback(){this.unsubscribe(),this.stopAnim(),super.disconnectedCallback()}updated(e){e.has("bus")&&this.isConnected&&this.subscribe(this.bus),e.has("deviceId")&&e.get("deviceId")!==void 0&&this.refresh()}subscribe(e){this.subscribedBus!==e&&(this.unsubscribe(),e.on("cover-state",this.onCoverState),e.on("device-offline",this.onDeviceOffline),e.on("device-online",this.onDeviceOnline),this.subscribedBus=e)}unsubscribe(){this.subscribedBus&&(this.subscribedBus.off("cover-state",this.onCoverState),this.subscribedBus.off("device-offline",this.onDeviceOffline),this.subscribedBus.off("device-online",this.onDeviceOnline),this.subscribedBus=null)}async refresh(){if(this.deviceId)try{this.applyCoverState(await this.bus.getCoverStatus(this.deviceId))}catch{this.online=!1}}applyCoverState(e){if(this.position=e.position,this.online=e.online,e.position!==null&&(this.shown=e.position),e.moving==="opening"||e.moving==="closing"){this.moving=e.moving;let i=e.moving==="opening"?100:0;this.target!==i&&this.startAnim(i);return}if(this.target!==null&&e.position!==null&&(this.target===100?e.position>=100:e.position<=0)){this.settle();return}this.animTimer||this.settle()}settle(){this.stopAnim(),this.moving="stopped",this.target=null}stopAnim(){this.animTimer!==null&&(clearInterval(this.animTimer),this.animTimer=null)}startAnim(e){this.stopAnim(),this.target=e;let i=this.shown??this.position??(e===100?0:100);if(i===e){this.shown=e;return}let s=Math.max(500,P.TRAVEL_TIME.default*Math.abs(e-i)/100),r=Date.now();this.animTimer=setInterval(()=>{let o=Math.min((Date.now()-r)/s,1);this.shown=Math.round(i+(e-i)*o),o>=1&&(this.stopAnim(),this.refresh())},150)}async userCommand(e){if(!this.deviceId)return;let i=e==="stop"||this.moving!=="stopped"?"stop":e;this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:i},bubbles:!0,composed:!0})),i==="stop"?this.settle():(this.moving=i==="open"?"opening":"closing",this.startAnim(i==="open"?100:0));let s=!1;try{s=await this.bus.coverCommand(this.deviceId,i)}catch{s=!1}if(!s){this.settle(),this.online=!1;return}i==="stop"&&(await new Promise(r=>setTimeout(r,300)),await this.refresh())}pill(){return this.online?this.position===null?{text:"\u2026",cls:"unknown"}:this.position>=97?{text:"OPEN",cls:"open"}:this.position<=3?{text:"CLOSED",cls:"closed"}:{text:`${this.position}%`,cls:"mid"}:{text:"OFFLINE",cls:"offline"}}get isMoving(){return this.moving!=="stopped"}get iconTemplate(){if(!this.icon)return p``;let e=this.icon.trim();return e.startsWith("<")?p`${X(e)}`:p`<span class="emoji">${e}</span>`}render(){let e=this.pill(),i=!this.online||!this.isMoving&&(this.position??-1)>=100,s=!this.online||!this.isMoving&&(this.position??101)<=0,r=!this.online;return p`
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
              ${X(this.moving==="opening"?Vt:le)}
            </button>
            <button class="stop" ?disabled=${r} aria-label="Stop ${this.room} shutter"
                    @click=${()=>this.userCommand("stop")}>
              ${X(he)}
            </button>
            <button class="down ${this.moving==="closing"?"active":""}"
                    ?disabled=${s} aria-label="Close ${this.room} shutter"
                    @click=${()=>this.userCommand("close")}>
              ${X(this.moving==="closing"?Vt:ce)}
            </button>
          </div>
        </div>
      </div>
    `}};y.styles=b`
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
  `,l([h({attribute:"device-id"})],y.prototype,"deviceId",2),l([h({attribute:"room"})],y.prototype,"room",2),l([h()],y.prototype,"icon",2),l([h({attribute:!1})],y.prototype,"bus",2),l([v()],y.prototype,"position",2),l([v()],y.prototype,"shown",2),l([v()],y.prototype,"online",2),l([v()],y.prototype,"moving",2),y=l([U("kiosk-shutter")],y);var lt=b`
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
    `}static getStubConfig(){return{entity:"cover.kid_shutter",name:"Kid"}}disconnectedCallback(){super.disconnectedCallback(),this._hassBus?.disconnectHass()}subscribe(e){}};H.styles=lt,l([h({attribute:!1})],H.prototype,"hass",2),l([h({attribute:!1})],H.prototype,"_pressing",2);customElements.define("ha-shutter-card",H);function me(n){let t=[...n],e=t.length;for(;e>0;){let i=Math.floor(Math.random()*e);e--,[t[e],t[i]]=[t[i],t[e]]}return t}function fe(n){if(!n)return"";let t=n.trim();if(!t)return"";let e=/^(\d{4})-(\d{2})-(\d{2})/.exec(t),i;return e?i=new Date(+e[1],+e[2]-1,+e[3]):i=new Date(t),isNaN(i.getTime())?"":i.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}function ve(n){let t=[];n.desc&&t.push(n.desc);let e=fe(n.date);return e&&t.push(e),t.join(" \u2022 ")}var x=class extends g{constructor(){super(...arguments);this.photos=[];this.interval=P.SLIDE_INTERVAL;this._order=[];this._caption="";this._index=-1;this._activeLayer=0;this._timer=null}get currentIndex(){return this._index}get currentPhoto(){return this._index>=0&&this._index<this._order.length?this._order[this._index]:null}connectedCallback(){super.connectedCallback(),this._order.length>0&&this._restartTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(e){super.updated(e),e.has("photos")?this._resetSlideshow():e.has("interval")&&this._restartTimer()}next(){this._order.length!==0&&this._goTo(this._index+1)}previous(){this._order.length!==0&&this._goTo(this._index-1)}_resetSlideshow(){this._stopTimer();let e=this.photos??[];if(e.length===0){this._order=[],this._caption="",this._index=-1,this._activeLayer=0;return}this._order=me(e),this._index=-1,this._activeLayer=0,this._restartTimer(),this._goTo(0)}_restartTimer(){this._stopTimer(),this._order.length>0&&this.interval>0&&(this._timer=setInterval(()=>this.next(),this.interval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}_goTo(e,i=0){let s=this._order.length;if(s===0)return;let r=(e%s+s)%s;this._preload(this._order[r].url,o=>{if(o){this._reveal(r);return}i+1<s&&this._goTo(r+1,i+1)})}_preload(e,i){let s=globalThis.Image;if(typeof s!="function"||!e){i(!0);return}try{let r=new s;r.onload=()=>i(!0),r.onerror=()=>i(!1),r.src=e}catch{i(!1)}}async _reveal(e){let i=this._order[e];if(!i)return;await this.updateComplete;let s=this.renderRoot.querySelectorAll(".slide");if(s.length<2)return;let r=this._activeLayer===0?1:0,o=s[r];o.style.backgroundImage=`url("${i.url}")`,o.classList.add("active"),s[this._activeLayer].classList.remove("active"),this._activeLayer=r,this._index=e,this._caption=ve(i),this.dispatchEvent(new CustomEvent("photo-change",{detail:{index:e,photo:i},bubbles:!0,composed:!0}))}render(){return this._order.length===0?p``:p`
      <div class="slide"></div>
      <div class="slide"></div>
      ${this._caption?p`<div class="caption">${this._caption}</div>`:""}
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
  `,l([h({type:Array})],x.prototype,"photos",2),l([h({type:Number})],x.prototype,"interval",2),l([v()],x.prototype,"_order",2),l([v()],x.prototype,"_caption",2),x=l([U("kiosk-photo-slideshow")],x);var ct=class extends x{async setConfig(t){if(!t)throw new Error("ha-photo-card: config required");if(this._config=t,t.interval&&(this.interval=t.interval),t.photos)this.photos=t.photos;else if(t.photos_url)try{let e=await fetch(t.photos_url);this.photos=await e.json()}catch{this.photos=[]}}getCardSize(){return 4}static getStubConfig(){return{interval:15e3,photos:[]}}};customElements.define("ha-photo-card",ct);var E=class extends g{constructor(){super(...arguments);this.hass=null;this._volume=25;this._muted=!1;this._power=!0}setConfig(e){this._config=e||{type:"custom:ha-tv-card"}}async tvCommand(e,i={}){if(!this.hass){console.error("[ha-tv-card] No hass object");return}let s={device:"tv",action:e,params:i,id:Math.random().toString(36).substring(2,10)};try{await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:JSON.stringify(s)}),console.log("[ha-tv-card] Sent:",e)}catch(r){console.error("[ha-tv-card] Failed:",r)}}_togglePower(){this._power=!this._power,this.tvCommand(this._power?"power_on":"power_off")}_toggleMute(){this._muted=!this._muted,this.tvCommand(this._muted?"mute":"unmute")}_onVolumeChange(e){let i=e.target;this._volume=parseInt(i.value,10)}_onVolumeCommit(){this.tvCommand("set_volume",{volume:this._volume}),this._muted&&this._volume>0&&(this._muted=!1)}render(){let e=this._config?.name||"TV";return p`
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
            <button class="tv-btn app-btn" @click=${()=>this.tvCommand("launch_app",{app:"prime"})}>
              <span class="tv-icon">P</span>
              <span>Prime</span>
            </button>
          </div>
        </div>
      </ha-card>
    `}getCardSize(){return 3}static getStubConfig(){return{name:"TV"}}};E.styles=[lt,b`
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
    `],l([h({attribute:!1})],E.prototype,"hass",2),l([h({attribute:!1})],E.prototype,"_volume",2),l([h({attribute:!1})],E.prototype,"_muted",2),l([h({attribute:!1})],E.prototype,"_power",2);customElements.define("ha-tv-card",E);var I=class extends g{constructor(){super(...arguments);this.hass=null;this._sessionStart=null;this._now=Date.now();this._timer=null}setConfig(e){this._config=e||{type:"custom:ha-tv-screentime-card"}}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=Date.now()},3e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}_getTvStatus(){if(!this.hass?.states?.["input_text.tv_status"])return null;try{return JSON.parse(this.hass.states["input_text.tv_status"].state)}catch{return null}}_formatDuration(e){let i=Math.floor(e/6e4),s=Math.floor(i/60),r=i%60;return s>0?`${s}h ${r}m`:`${r}m`}render(){let e=this._config?.name||"TV Screen Time",i=(this._config?.warn_after||120)*6e4,s=this._getTvStatus();if(!s||s.power!=="active")return p`
        <ha-card><div class="st-card">
          <div class="st-name">${e}</div>
          <div class="st-off">📺 TV is off</div>
        </div></ha-card>
      `;let r=this._now-s.timestamp,o=r>=i;return p`
      <ha-card><div class="st-card">
        <div class="st-name">${e}</div>
        <div class="st-time ${o?"warn":""}">${this._formatDuration(r)}</div>
        <div class="st-status">
          ${o?"\u26A0\uFE0F Consider a break!":"Watching now"}
        </div>
      </div></ha-card>
    `}getCardSize(){return 2}static getStubConfig(){return{name:"TV Screen Time",warn_after:120}}};I.styles=b`
    :host { display: block; }
    .st-card { padding: 16px; text-align: center; }
    .st-name { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
    .st-time { font-size: 36px; font-weight: 700; margin: 8px 0; font-variant-numeric: tabular-nums; }
    .st-time.warn { color: var(--warning-color, #ff9800); }
    .st-status { font-size: 14px; color: var(--secondary-text-color, #666); }
    .st-off { color: var(--disabled-color, #9e9e9e); font-size: 16px; padding: 12px; }
    @media (max-width: 600px) {
      .st-time { font-size: 28px; }
    }
  `,l([h({attribute:!1})],I.prototype,"hass",2),l([v()],I.prototype,"_sessionStart",2),l([v()],I.prototype,"_now",2);customElements.define("ha-tv-screentime-card",I);var $=class extends g{constructor(){super(...arguments);this.deviceId="awning";this.bus=at;this._position=null;this._online=!0;this._busy=!1}connectedCallback(){super.connectedCallback(),this.refresh()}async refresh(){let e=await this.bus.getCoverStatus(this.deviceId);this._position=e.position,this._online=e.online}async command(e){this.dispatchEvent(new CustomEvent("awning-move",{detail:{action:e},bubbles:!0,composed:!0})),this._busy=!0;try{await this.bus.coverCommand(this.deviceId,e)}finally{await this.refresh(),this._busy=!1}}render(){let e=this._online?this._position===null?"\u2026":`${Math.round(this._position)}%`:"OFFLINE";return p`
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
  `,l([h({attribute:"device-id"})],$.prototype,"deviceId",2),l([v()],$.prototype,"_position",2),l([v()],$.prototype,"_online",2),l([v()],$.prototype,"_busy",2);customElements.define("kiosk-awning",$);var ht=class extends ${constructor(){super(...arguments);this._hassBus=null}setConfig(e){if(!e||!e.entity)throw new Error("ha-awning-card: config must include entity");this._config=e,this.deviceId="awning",this._hassBus=new Z({backend:"hass",hassUrl:e.hass_url,hassToken:e.hass_token,deviceToEntity:{awning:e.entity},logFn:()=>{}}),this.bus=this._hassBus}set hass(e){}getCardSize(){return 2}static getStubConfig(){return{entity:"cover.patio_awning"}}disconnectedCallback(){super.disconnectedCallback(),this._hassBus?.disconnectHass()}};customElements.define("ha-awning-card",ht);var N=class extends g{constructor(){super(...arguments);this._now=new Date;this._taps=[]}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=new Date},1e3)}disconnectedCallback(){this._timer&&clearInterval(this._timer),this._timer=void 0,super.disconnectedCallback()}_tap(){let e=Date.now();this._taps=this._taps.filter(i=>e-i<2e3),this._taps.push(e),this._taps.length>=5&&(this._taps=[],this.dispatchEvent(new CustomEvent("admin-request",{bubbles:!0,composed:!0})))}render(){let e=this._now.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return p`<div class="clock" @click=${()=>this._tap()}>${e}</div>`}};N.styles=b`
    :host { display: block; }
    .clock {
      font-size: 52px; font-weight: 800; color: var(--primary-text-color, #fff); text-align: center;
      font-variant-numeric: tabular-nums; user-select: none; cursor: default;
    }
  `,l([v()],N.prototype,"_now",2);customElements.define("kiosk-clock",N);var dt=class extends N{constructor(){super()}setConfig(t){}getCardSize(){return 1}static getStubConfig(){return{}}};customElements.define("ha-clock-card",dt);})();
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
