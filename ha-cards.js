"use strict";(()=>{var Vt=Object.defineProperty;var qt=Object.getOwnPropertyDescriptor;var l=(n,t,e,s)=>{for(var i=s>1?void 0:s?qt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Vt(t,e,i),i};var K=globalThis,tt=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),yt=new WeakMap,B=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(tt&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&yt.set(e,t))}return t}toString(){return this.cssText}},xt=n=>new B(typeof n=="string"?n:n+"",void 0,ct),g=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new B(e,n,ct)},$t=(n,t)=>{if(tt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=K.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},ht=tt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return xt(e)})(n):n;var{is:jt,defineProperty:Ft,getOwnPropertyDescriptor:Gt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Wt,getPrototypeOf:Yt}=Object,A=globalThis,wt=A.trustedTypes,Qt=wt?wt.emptyScript:"",Xt=A.reactiveElementPolyfillSupport,z=(n,t)=>n,V={toAttribute(n,t){switch(t){case Boolean:n=n?Qt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},et=(n,t)=>!jt(n,t),Ct={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);var w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ft(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=Gt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let c=i?.call(this);r?.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ct}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;let t=Yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){let e=this.properties,s=[...Jt(e),...Wt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(ht(i))}else t!==void 0&&e.push(ht(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:V).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:V;this._$Em=i;let c=o.fromAttribute(e,r.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let o=this.constructor;if(i===!1&&(r=this[t]),s??(s=o.getPropertyOptions(t)),!((s.hasChanged??et)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:o}=r,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[z("elementProperties")]=new Map,w[z("finalized")]=new Map,Xt?.({ReactiveElement:w}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");var j=globalThis,St=n=>n,st=j.trustedTypes,Et=st?st.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ot="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+T,Zt=`<${Mt}>`,M=document,F=()=>M.createComment(""),G=n=>n===null||typeof n!="object"&&typeof n!="function",gt=Array.isArray,Kt=n=>gt(n)||typeof n?.[Symbol.iterator]=="function",pt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,Tt=/>/g,I=RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,Pt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,_t=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=_t(1),xe=_t(2),$e=_t(3),C=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),It=new WeakMap,O=M.createTreeWalker(M,129);function Ht(n,t){if(!gt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}var te=(n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",o=q;for(let c=0;c<e;c++){let a=n[c],u,m,d=-1,$=0;for(;$<a.length&&(o.lastIndex=$,m=o.exec(a),m!==null);)$=o.lastIndex,o===q?m[1]==="!--"?o=At:m[1]!==void 0?o=Tt:m[2]!==void 0?(Rt.test(m[2])&&(i=RegExp("</"+m[2],"g")),o=I):m[3]!==void 0&&(o=I):o===I?m[0]===">"?(o=i??q,d=-1):m[1]===void 0?d=-2:(d=o.lastIndex-m[2].length,u=m[1],o=m[3]===void 0?I:m[3]==='"'?Pt:kt):o===Pt||o===kt?o=I:o===At||o===Tt?o=q:(o=I,i=void 0);let E=o===I&&n[c+1].startsWith("/>")?" ":"";r+=o===q?a+Zt:d>=0?(s.push(u),a.slice(0,d)+Ot+a.slice(d)+T+E):a+T+(d===-2?c:E)}return[Ht(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},J=class n{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,c=t.length-1,a=this.parts,[u,m]=te(t,e);if(this.el=n.createElement(u,s),O.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=O.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(Ot)){let $=m[o++],E=i.getAttribute(d).split(T),Z=/([.?@])?(.*)/.exec($);a.push({type:1,index:r,name:Z[2],strings:E,ctor:Z[1]==="."?ut:Z[1]==="?"?mt:Z[1]==="@"?ft:L}),i.removeAttribute(d)}else d.startsWith(T)&&(a.push({type:6,index:r}),i.removeAttribute(d));if(Rt.test(i.tagName)){let d=i.textContent.split(T),$=d.length-1;if($>0){i.textContent=st?st.emptyScript:"";for(let E=0;E<$;E++)i.append(d[E],F()),O.nextNode(),a.push({type:2,index:++r});i.append(d[$],F())}}}else if(i.nodeType===8)if(i.data===Mt)a.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(T,d+1))!==-1;)a.push({type:7,index:r}),d+=T.length-1}r++}}static createElement(t,e){let s=M.createElement("template");return s.innerHTML=t,s}};function D(n,t,e=n,s){if(t===C)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=G(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=D(n,i._$AS(n,t.values),i,s)),t}var dt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);O.currentNode=i;let r=O.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let u;a.type===2?u=new W(r,r.nextSibling,this,t):a.type===1?u=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(u=new vt(r,this,t)),this._$AV.push(u),a=s[++c]}o!==a?.index&&(r=O.nextNode(),o++)}return O.currentNode=M,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},W=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),G(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=J.createElement(Ht(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new dt(i,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new J(t)),e}k(t){gt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new n(this.O(F()),this.O(F()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=St(t).nextSibling;St(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},L=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=D(this,t,e,0),o=!G(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{let c=t,a,u;for(t=r[0],a=0;a<r.length-1;a++)u=D(this,c[s+a],e,a),u===C&&(u=this._$AH[a]),o||(o=!G(u)||u!==this._$AH[a]),u===f?t=f:t!==f&&(t+=(u??"")+r[a+1]),this._$AH[a]=u}o&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ut=class extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},mt=class extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},ft=class extends L{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??f)===C)return;let s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},vt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var ee=j.litHtmlPolyfillSupport;ee?.(J,W),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.3.3");var Nt=(n,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new W(t.insertBefore(F(),r),r,void 0,e??{})}return i._$AI(n),i};var Y=globalThis,v=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};v._$litElement$=!0,v.finalized=!0,Y.litElementHydrateSupport?.({LitElement:v});var se=Y.litElementPolyfillSupport;se?.({LitElement:v});(Y.litElementVersions??(Y.litElementVersions=[])).push("4.2.2");var U=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var ie={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:et},ne=(n=ie,t,e)=>{let{kind:s,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),s==="accessor"){let{name:o}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,n,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,n,c),c}}}if(s==="setter"){let{name:o}=e;return function(c){let a=this[o];t.call(this,c),this.requestUpdate(o,a,n,!0,c)}}throw Error("Unsupported decorator location: "+s)};function h(n){return(t,e)=>typeof e=="object"?ne(n,t,e):((s,i,r)=>{let o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}function _(n){return h({...n,state:!0,attribute:!1})}var k={TRAVEL_TIME:{default:26e3,awning_out:5e4,awning_in:6e4},POLL_INTERVAL:6e4,SLIDE_INTERVAL:15e3,WEATHER_INTERVAL:18e5,IPS:{kid:["192.168.86.203","192.168.55.203"],master:["192.168.86.22","192.168.55.13"],tv_area:["192.168.86.50","192.168.55.16"],sofa:["192.168.55.17","192.168.86.21"],awning:["192.168.86.27"]},BRIDGE_URL:"https://script.google.com/macros/s/AKfycbxzSWDfAiOOxyzQLMYdwOPAxAak-HEBGCstUARUDVQkWt9qSTqXvjCBr7-8q3qkKfQ7/exec",COORDS:{lat:51.078,lng:16.92}},Dt={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"};var re={0:"Clear",1:"Mainly Clear",2:"Partly Cloudy",3:"Overcast",45:"Foggy",61:"Rainy",63:"Heavy Rain",80:"Showers"},b=class extends v{constructor(){super(...arguments);this.latitude=0;this.longitude=0;this.pollInterval=k.WEATHER_INTERVAL;this.temperature=null;this.condition="";this.aqi=null;this._timer=null;this._lastCoords=""}static weatherCodeText(e){return re[e]??"Cloudy"}static aqiBand(e){return e<=50?{label:"Good",color:"#4caf50"}:e<=100?{label:"Moderate",color:"#ffeb3b"}:e<=150?{label:"Unhealthy (sensitive)",color:"#ff9800"}:{label:"Unhealthy",color:"#f44336"}}connectedCallback(){super.connectedCallback(),this._lastCoords=`${this.latitude},${this.longitude}`,this.refresh(),this._startTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(e){if(e.has("pollInterval")&&this._startTimer(),e.has("latitude")||e.has("longitude")){let s=`${this.latitude},${this.longitude}`;s!==this._lastCoords&&(this._lastCoords=s,this.refresh())}}async refresh(){await Promise.allSettled([this._fetchWeather(),this._fetchAqi()])}_startTimer(){this._stopTimer(),this.pollInterval>0&&(this._timer=setInterval(()=>{this.refresh()},this.pollInterval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}async _fetchWeather(){try{let e=`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,weather_code`,s=await fetch(e);if(!s.ok)return;let i=await s.json();if(!i||!i.current)return;this.temperature=Math.round(i.current.temperature_2m),this.condition=b.weatherCodeText(i.current.weather_code)}catch{}}async _fetchAqi(){try{let e=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${this.latitude}&longitude=${this.longitude}&current=us_aqi`,s=await fetch(e);if(!s.ok)return;let i=await s.json();if(!i||!i.current||i.current.us_aqi==null)return;this.aqi=Math.round(i.current.us_aqi)}catch{}}render(){let e=this.temperature===null?"\u2026":`${this.temperature}\xB0`,s=this.condition===""?"\u2026":this.condition,i=this.aqi===null?null:b.aqiBand(this.aqi);return p`
      <div class="weather">
        <div class="temp" part="temp">${e}</div>
        <div class="condition" part="condition">${s}</div>
        ${i!==null?p`
              <div class="aqi" part="aqi">
                <span class="dot" style="color:${i.color}">●</span>
                AQI ${this.aqi} ${i.label}
              </div>
            `:""}
      </div>
    `}};b.styles=g`
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
  `,l([h({type:Number})],b.prototype,"latitude",2),l([h({type:Number})],b.prototype,"longitude",2),l([h({type:Number})],b.prototype,"pollInterval",2),l([_()],b.prototype,"temperature",2),l([_()],b.prototype,"condition",2),l([_()],b.prototype,"aqi",2),b=l([U("kiosk-weather")],b);var nt=class extends b{setConfig(t){if(!t||typeof t.latitude!="number"||typeof t.longitude!="number")throw new Error("ha-weather-card: config must include numeric latitude and longitude");this._config=t,this.latitude=t.latitude,this.longitude=t.longitude,t.poll_interval&&(this.pollInterval=t.poll_interval)}getCardSize(){return 2}static getStubConfig(){return{latitude:51.078,longitude:16.92}}};customElements.define("ha-weather-card",nt);var Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=n=>(...t)=>({_$litDirective$:n,values:t}),rt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Q=class extends rt{constructor(t){if(super(t),this.it=f,t.type!==Lt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||t==null)return this._t=void 0,this.it=t;if(t===C)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Q.directiveName="unsafeHTML",Q.resultType=1;var X=Ut(Q);var oe={kid:"cover.kid_shutter",master:"cover.master_shutter",tv_area:"cover.tv_area_shutter",sofa:"cover.sofa_shutter",awning:"cover.patio_awning"},bt=class{constructor(t={}){this.handlers=new Map;this.activeIPs={};this.onlineStatus={};this.hassSocket=null;this.hassMsgId=0;this.hassPending=new Map;this.hassStates=new Map;this.backend=t.backend??"shelly-direct",this.ips=t.ips??k.IPS,this.deviceToEntity=t.deviceToEntity??oe,this.hassUrl=t.hassUrl,this.hassToken=t.hassToken,this.fetchFn=t.fetchFn??fetch,this.log=t.logFn??(()=>{})}on(t,e){this.handlers.has(t)||this.handlers.set(t,new Set),this.handlers.get(t).add(e)}off(t,e){this.handlers.get(t)?.delete(e)}emit(t,e){this.handlers.get(t)?.forEach(s=>{try{s(e)}catch{}})}getBackend(){return this.backend}setBackend(t,e={}){e.hassUrl!==void 0&&(this.hassUrl=e.hassUrl),e.hassToken!==void 0&&(this.hassToken=e.hassToken),e.deviceToEntity!==void 0&&(this.deviceToEntity=e.deviceToEntity),e.ips!==void 0&&(this.ips=e.ips),t!==this.backend&&(this.disconnectHass(),this.backend=t)}async fetchDevice(t,e){let i=[...this.ips[t]??[]],r=this.activeIPs[t];r&&i.includes(r)&&(i=[r,...i.filter(o=>o!==r)]);for(let o of i)try{let c=new AbortController,a=setTimeout(()=>c.abort(),2e3),u=await this.fetchFn(`http://${o}${e}`,{signal:c.signal,cache:"no-store"});if(clearTimeout(a),u.ok){this.activeIPs[t]=o,this.onlineStatus[t]||(this.onlineStatus[t]=!0,this.log(`[${t.toUpperCase()}] Online via ${o}`,"success"),this.emit("device-online",{deviceId:t,ip:o}));let m=await u.text();try{return m?JSON.parse(m):{ok:!0}}catch{return{ok:!0}}}}catch{o===r&&this.log(`[${t.toUpperCase()}] Primary IP ${o} failed. Seeking failover...`,"warn")}return this.onlineStatus[t]!==!1&&(this.onlineStatus[t]=!1,this.activeIPs[t]=null,this.log(`[${t.toUpperCase()}] Connection Lost - Device Offline`,"error"),this.emit("device-offline",{deviceId:t})),null}shellyStatusEndpoint(t){return t==="awning"?"/api/shutter/state":"/rpc/Cover.GetStatus?id=0"}shellyPositionOf(t,e){if(!e)return null;if(t==="awning"){let s=e?.shutter?.currentPos?.position;return typeof s=="number"?s:null}return typeof e.current_pos=="number"?e.current_pos:typeof e.pos=="number"?e.pos:null}async getCoverStatus(t){if(this.backend==="hass")return this.hassCoverStatus(t);let e=await this.fetchDevice(t,this.shellyStatusEndpoint(t));if(!e)return{position:null,online:!1,moving:"stopped"};let s={position:this.shellyPositionOf(t,e),online:!0,moving:"stopped"};return this.emit("cover-state",{deviceId:t,state:s}),s}async coverCommand(t,e,s){if(this.backend==="hass")return this.hassCoverCommand(t,e,s);let i;switch(e){case"open":i="/rpc/Cover.Open?id=0";break;case"close":i="/rpc/Cover.Close?id=0";break;case"stop":i="/rpc/Cover.Stop?id=0";break;case"set":if(s===void 0)throw new Error("coverCommand: position required for set");i=`/rpc/Cover.GoToPosition?id=0&pos=${Math.round(s)}`;break}return t==="awning"&&(i=e==="open"?"/api/shutter/open":e==="close"?"/api/shutter/close":e==="stop"?"/api/shutter/stop":`/api/shutter/set?position=${Math.round(s??0)}`),await this.fetchDevice(t,i)!==null}entityFor(t){let e=this.deviceToEntity[t];if(!e)throw new Error(`No HA entity mapped for device '${t}'`);return e}async connectHass(t=1e4){if(!this.hassUrl)throw new Error("hassUrl not configured");this.hassSocket&&this.hassSocket.readyState===WebSocket.OPEN||await new Promise((e,s)=>{let i=setTimeout(()=>s(new Error("HA websocket connect timeout")),t),r=new WebSocket(this.hassUrl),o=!1;r.onmessage=c=>{let a;try{a=JSON.parse(String(c.data))}catch{return}if(a.type==="auth_required"&&!o){r.send(JSON.stringify({type:"auth",access_token:this.hassToken??""}));return}if(a.type==="auth_ok"){o=!0,this.hassSocket=r,this.attachHassHandlers(r),this.hassCall(r,"get_states").then(u=>{for(let m of u)this.hassStates.set(m.entity_id,m);this.hassCall(r,"subscribe_events",{event_type:"state_changed"}).then(()=>{clearTimeout(i),e()}).catch(s)}).catch(s);return}a.type==="auth_invalid"&&(clearTimeout(i),s(new Error("HA auth rejected: "+(a.message??"unknown"))))},r.onerror=()=>{clearTimeout(i),s(new Error("HA websocket error"))}})}attachHassHandlers(t){t.onmessage=e=>{let s;try{s=JSON.parse(String(e.data))}catch{return}if(s.id!==void 0&&this.hassPending.has(s.id)){let i=this.hassPending.get(s.id);this.hassPending.delete(s.id),s.type==="result"&&s.success?i(s.result):i(void 0);return}if(s.type==="event"&&s.event?.event_type==="state_changed"){let i=s.event.data;i?.entity_id&&i?.new_state&&(this.hassStates.set(i.entity_id,i.new_state),this.emit("cover-state",{entityId:i.entity_id,state:i.new_state}))}},t.onclose=()=>{this.hassSocket===t&&(this.hassSocket=null),this.emit("hass-disconnected",{})}}hassCall(t,e,s={}){let i=++this.hassMsgId;return new Promise(r=>{this.hassPending.set(i,r),t.send(JSON.stringify({id:i,type:e,...s})),setTimeout(()=>{this.hassPending.has(i)&&(this.hassPending.delete(i),r(void 0))},8e3)})}hassCoverStatus(t){let e=this.hassStates.get(this.entityFor(t));if(!e)return{position:null,online:!1,moving:"stopped"};let s=e.attributes.current_position,i=e.state;return{position:typeof s=="number"?s:null,online:i!=="unavailable"&&i!=="unknown",moving:i==="opening"?"opening":i==="closing"?"closing":"stopped"}}async hassCoverCommand(t,e,s){if(!this.hassSocket||this.hassSocket.readyState!==WebSocket.OPEN)return!1;let i=this.entityFor(t),r="",o={entity_id:i};switch(e){case"open":r="open_cover";break;case"close":r="close_cover";break;case"stop":r="stop_cover";break;case"set":if(s===void 0)throw new Error("coverCommand: position required for set");r="set_cover_position",o.position=Math.round(s);break}return await this.hassCall(this.hassSocket,"call_service",{domain:"cover",service:r,service_data:o,target:{entity_id:i}})!==void 0}injectHassState(t){this.hassStates.set(t.entity_id,t)}disconnectHass(){try{this.hassSocket?.close()}catch{}this.hassSocket=null}},Bt=new bt;var ae='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',le='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',zt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><line x1="10" y1="4" x2="10" y2="20"></line><line x1="14" y1="4" x2="14" y2="20"></line></svg>',ce='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>';function he(n){return!!n&&typeof n=="object"&&"position"in n&&"online"in n}function pe(n){let t=n;return!!t&&typeof t=="object"&&typeof t.entity_id=="string"&&typeof t.state=="string"}function de(n){let t=n.attributes.current_position,e=n.state;return{position:typeof t=="number"?t:null,online:e!=="unavailable"&&e!=="unknown",moving:e==="opening"?"opening":e==="closing"?"closing":"stopped"}}var y=class extends v{constructor(){super(...arguments);this.deviceId="";this.room="";this.icon="";this.bus=Bt;this.position=null;this.shown=null;this.online=!0;this.moving="stopped";this.target=null;this.animTimer=null;this.subscribedBus=null;this.onCoverState=e=>{let s=e;if(!(!s||typeof s!="object")){if(s.deviceId===this.deviceId&&he(s.state)){this.applyCoverState(s.state);return}typeof s.entityId=="string"&&pe(s.state)&&Dt[this.deviceId]===s.entityId&&this.applyCoverState(de(s.state))}};this.onDeviceOffline=e=>{let s=e;s&&s.deviceId===this.deviceId&&(this.online=!1,this.settle())};this.onDeviceOnline=e=>{let s=e;s&&s.deviceId===this.deviceId&&(this.online=!0,this.refresh())}}connectedCallback(){super.connectedCallback(),this.subscribe(this.bus),this.refresh()}disconnectedCallback(){this.unsubscribe(),this.stopAnim(),super.disconnectedCallback()}updated(e){e.has("bus")&&this.isConnected&&this.subscribe(this.bus),e.has("deviceId")&&e.get("deviceId")!==void 0&&this.refresh()}subscribe(e){this.subscribedBus!==e&&(this.unsubscribe(),e.on("cover-state",this.onCoverState),e.on("device-offline",this.onDeviceOffline),e.on("device-online",this.onDeviceOnline),this.subscribedBus=e)}unsubscribe(){this.subscribedBus&&(this.subscribedBus.off("cover-state",this.onCoverState),this.subscribedBus.off("device-offline",this.onDeviceOffline),this.subscribedBus.off("device-online",this.onDeviceOnline),this.subscribedBus=null)}async refresh(){if(this.deviceId)try{this.applyCoverState(await this.bus.getCoverStatus(this.deviceId))}catch{this.online=!1}}applyCoverState(e){if(this.position=e.position,this.online=e.online,e.position!==null&&(this.shown=e.position),e.moving==="opening"||e.moving==="closing"){this.moving=e.moving;let s=e.moving==="opening"?100:0;this.target!==s&&this.startAnim(s);return}if(this.target!==null&&e.position!==null&&(this.target===100?e.position>=100:e.position<=0)){this.settle();return}this.animTimer||this.settle()}settle(){this.stopAnim(),this.moving="stopped",this.target=null}stopAnim(){this.animTimer!==null&&(clearInterval(this.animTimer),this.animTimer=null)}startAnim(e){this.stopAnim(),this.target=e;let s=this.shown??this.position??(e===100?0:100);if(s===e){this.shown=e;return}let i=Math.max(500,k.TRAVEL_TIME.default*Math.abs(e-s)/100),r=Date.now();this.animTimer=setInterval(()=>{let o=Math.min((Date.now()-r)/i,1);this.shown=Math.round(s+(e-s)*o),o>=1&&(this.stopAnim(),this.refresh())},150)}async userCommand(e){if(!this.deviceId)return;let s=e==="stop"||this.moving!=="stopped"?"stop":e;this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:s},bubbles:!0,composed:!0})),s==="stop"?this.settle():(this.moving=s==="open"?"opening":"closing",this.startAnim(s==="open"?100:0));let i=!1;try{i=await this.bus.coverCommand(this.deviceId,s)}catch{i=!1}if(!i){this.settle(),this.online=!1;return}s==="stop"&&(await new Promise(r=>setTimeout(r,300)),await this.refresh())}pill(){return this.online?this.position===null?{text:"\u2026",cls:"unknown"}:this.position>=97?{text:"OPEN",cls:"open"}:this.position<=3?{text:"CLOSED",cls:"closed"}:{text:`${this.position}%`,cls:"mid"}:{text:"OFFLINE",cls:"offline"}}get isMoving(){return this.moving!=="stopped"}get iconTemplate(){if(!this.icon)return p``;let e=this.icon.trim();return e.startsWith("<")?p`${X(e)}`:p`<span class="emoji">${e}</span>`}render(){let e=this.pill(),s=!this.online||!this.isMoving&&(this.position??-1)>=100,i=!this.online||!this.isMoving&&(this.position??101)<=0,r=!this.online;return p`
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
                    ?disabled=${s} aria-label="Open ${this.room} shutter"
                    @click=${()=>this.userCommand("open")}>
              ${X(this.moving==="opening"?zt:ae)}
            </button>
            <button class="stop" ?disabled=${r} aria-label="Stop ${this.room} shutter"
                    @click=${()=>this.userCommand("stop")}>
              ${X(ce)}
            </button>
            <button class="down ${this.moving==="closing"?"active":""}"
                    ?disabled=${i} aria-label="Close ${this.room} shutter"
                    @click=${()=>this.userCommand("close")}>
              ${X(this.moving==="closing"?zt:le)}
            </button>
          </div>
        </div>
      </div>
    `}};y.styles=g`
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
  `,l([h({attribute:"device-id"})],y.prototype,"deviceId",2),l([h({attribute:"room"})],y.prototype,"room",2),l([h()],y.prototype,"icon",2),l([h({attribute:!1})],y.prototype,"bus",2),l([_()],y.prototype,"position",2),l([_()],y.prototype,"shown",2),l([_()],y.prototype,"online",2),l([_()],y.prototype,"moving",2),y=l([U("kiosk-shutter")],y);var ot=g`
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
`;var R=class extends y{constructor(){super(...arguments);this._hassBus=null;this.hass=null;this._pressing=null;this._pressTimer=null}setConfig(e){if(!e||!e.entity)throw new Error("ha-shutter-card: config must include entity");this._config=e;let s=e.entity.replace("cover.","").replace("_shutter","").replace("_","_");this.deviceId=s,this.room=e.name||e.entity,e.icon&&(this.icon=e.icon),this._hassBus=null}async userCommand(e){if(this._pressing=e,this._pressTimer&&clearTimeout(this._pressTimer),this._pressTimer=setTimeout(()=>{this._pressing=null},1e3),this.dispatchEvent(new CustomEvent("shutter-move",{detail:{deviceId:this.deviceId,action:e},bubbles:!0,composed:!0})),e==="stop"?this.settle():(this.moving=e==="open"?"opening":"closing",this.startAnim(e==="open"?100:0)),!this.hass){this.settle(),this.online=!1,console.error("[ha-shutter-card] hass is null/undefined");return}if(typeof this.hass.callService!="function"){this.settle(),this.online=!1,console.error("[ha-shutter-card] hass.callService is not a function");return}try{let s=this._config.entity.replace("cover.","").replace("_shutter",""),i=JSON.stringify({device:s,action:e,id:Date.now().toString(36)+Math.random().toString(36).slice(2,7)});await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:i}),this.online=!0}catch(s){this.settle(),this.online=!1,console.error("[ha-shutter-card] callService failed:",s)}}async refresh(){}getCardSize(){return 3}render(){let e=this._config?.name||this._config?.entity||"Shutter",s=(i,r,o)=>p`
      <button
        class="ha-shutter-btn ${this._pressing===i?"pressing":""}"
        @click=${()=>this.userCommand(i)}
      >
        <span class="ha-shutter-icon">${r}</span>
        <span>${o}</span>
      </button>
    `;return p`
      <ha-card>
        <div class="ha-shutter-wrap">
          <div class="ha-shutter-name">${e}</div>
          <div class="ha-shutter-btns">
            ${s("open","\u25B2","Open")}
            ${s("stop","\u25A0","Stop")}
            ${s("close","\u25BC","Close")}
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
    `}static getStubConfig(){return{entity:"cover.kid_shutter",name:"Kid"}}disconnectedCallback(){super.disconnectedCallback(),this._hassBus?.disconnectHass()}subscribe(e){}};R.styles=ot,l([h({attribute:!1})],R.prototype,"hass",2),l([h({attribute:!1})],R.prototype,"_pressing",2);customElements.define("ha-shutter-card",R);function ue(n){let t=[...n],e=t.length;for(;e>0;){let s=Math.floor(Math.random()*e);e--,[t[e],t[s]]=[t[s],t[e]]}return t}function me(n){if(!n)return"";let t=n.trim();if(!t)return"";let e=/^(\d{4})-(\d{2})-(\d{2})/.exec(t),s;return e?s=new Date(+e[1],+e[2]-1,+e[3]):s=new Date(t),isNaN(s.getTime())?"":s.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}function fe(n){let t=[];n.desc&&t.push(n.desc);let e=me(n.date);return e&&t.push(e),t.join(" \u2022 ")}var x=class extends v{constructor(){super(...arguments);this.photos=[];this.interval=k.SLIDE_INTERVAL;this._order=[];this._caption="";this._index=-1;this._activeLayer=0;this._timer=null}get currentIndex(){return this._index}get currentPhoto(){return this._index>=0&&this._index<this._order.length?this._order[this._index]:null}connectedCallback(){super.connectedCallback(),this._order.length>0&&this._restartTimer()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimer()}updated(e){super.updated(e),e.has("photos")?this._resetSlideshow():e.has("interval")&&this._restartTimer()}next(){this._order.length!==0&&this._goTo(this._index+1)}previous(){this._order.length!==0&&this._goTo(this._index-1)}_resetSlideshow(){this._stopTimer();let e=this.photos??[];if(e.length===0){this._order=[],this._caption="",this._index=-1,this._activeLayer=0;return}this._order=ue(e),this._index=-1,this._activeLayer=0,this._restartTimer(),this._goTo(0)}_restartTimer(){this._stopTimer(),this._order.length>0&&this.interval>0&&(this._timer=setInterval(()=>this.next(),this.interval))}_stopTimer(){this._timer!==null&&(clearInterval(this._timer),this._timer=null)}_goTo(e,s=0){let i=this._order.length;if(i===0)return;let r=(e%i+i)%i;this._preload(this._order[r].url,o=>{if(o){this._reveal(r);return}s+1<i&&this._goTo(r+1,s+1)})}_preload(e,s){let i=globalThis.Image;if(typeof i!="function"||!e){s(!0);return}try{let r=new i;r.onload=()=>s(!0),r.onerror=()=>s(!1),r.src=e}catch{s(!1)}}async _reveal(e){let s=this._order[e];if(!s)return;await this.updateComplete;let i=this.renderRoot.querySelectorAll(".slide");if(i.length<2)return;let r=this._activeLayer===0?1:0,o=i[r];o.style.backgroundImage=`url("${s.url}")`,o.classList.add("active"),i[this._activeLayer].classList.remove("active"),this._activeLayer=r,this._index=e,this._caption=fe(s),this.dispatchEvent(new CustomEvent("photo-change",{detail:{index:e,photo:s},bubbles:!0,composed:!0}))}render(){return this._order.length===0?p``:p`
      <div class="slide"></div>
      <div class="slide"></div>
      ${this._caption?p`<div class="caption">${this._caption}</div>`:""}
    `}};x.styles=g`
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
  `,l([h({type:Array})],x.prototype,"photos",2),l([h({type:Number})],x.prototype,"interval",2),l([_()],x.prototype,"_order",2),l([_()],x.prototype,"_caption",2),x=l([U("kiosk-photo-slideshow")],x);var at=class extends x{async setConfig(t){if(!t)throw new Error("ha-photo-card: config required");if(this._config=t,t.interval&&(this.interval=t.interval),t.photos)this.photos=t.photos;else if(t.photos_url)try{let e=await fetch(t.photos_url);this.photos=await e.json()}catch{this.photos=[]}}getCardSize(){return 4}static getStubConfig(){return{interval:15e3,photos:[]}}};customElements.define("ha-photo-card",at);var S=class extends v{constructor(){super(...arguments);this.hass=null;this._volume=25;this._muted=!1;this._power=!0}setConfig(e){this._config=e||{type:"custom:ha-tv-card"}}async tvCommand(e,s={}){if(!this.hass){console.error("[ha-tv-card] No hass object");return}let i={device:"tv",action:e,params:s,id:Math.random().toString(36).substring(2,10)};try{await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:JSON.stringify(i)}),console.log("[ha-tv-card] Sent:",e)}catch(r){console.error("[ha-tv-card] Failed:",r)}}_togglePower(){this._power=!this._power,this.tvCommand(this._power?"power_on":"power_off")}_toggleMute(){this._muted=!this._muted,this.tvCommand(this._muted?"mute":"unmute")}_onVolumeChange(e){let s=e.target;this._volume=parseInt(s.value,10)}_onVolumeCommit(){this.tvCommand("set_volume",{volume:this._volume}),this._muted&&this._volume>0&&(this._muted=!1)}render(){let e=this._config?.name||"TV";return p`
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
    `}getCardSize(){return 3}static getStubConfig(){return{name:"TV"}}};S.styles=[ot,g`
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
    `],l([h({attribute:!1})],S.prototype,"hass",2),l([h({attribute:!1})],S.prototype,"_volume",2),l([h({attribute:!1})],S.prototype,"_muted",2),l([h({attribute:!1})],S.prototype,"_power",2);customElements.define("ha-tv-card",S);var P=class extends v{constructor(){super(...arguments);this.hass=null;this._sessionStart=null;this._now=Date.now();this._timer=null}setConfig(e){this._config=e||{type:"custom:ha-tv-screentime-card"}}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=Date.now()},5e3)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}_getTvStatus(){if(!this.hass?.states?.["input_text.tv_status"])return null;try{return JSON.parse(this.hass.states["input_text.tv_status"].state)}catch{return null}}_getDailyTotal(){if(!this.hass?.states?.["input_text.tv_daily_total"])return 0;try{let e=JSON.parse(this.hass.states["input_text.tv_daily_total"].state),s=new Date().toISOString().split("T")[0];return e.date!==s?0:e.total_ms||0}catch{return 0}}_formatDuration(e){let s=Math.floor(e/6e4),i=Math.floor(s/60),r=s%60;return i>0?`${i}h ${r}m`:`${r}m`}render(){let e=this._config?.name||"TV Screen Time",s=(this._config?.warn_after||120)*6e4,i=this._getTvStatus();if(!i||i.power!=="active")return p`
        <ha-card><div class="st-card">
          <div class="st-name">${e}</div>
          <div class="st-off">📺 TV is off</div>
        </div></ha-card>
      `;let r=i.session_start;if(!r)return p`
        <ha-card><div class="st-card">
          <div class="st-name">${e}</div>
          <div class="st-off">📺 TV is off</div>
        </div></ha-card>
      `;let o=this._now-r,c=o>=s,a=this._getDailyTotal()+o;return p`
      <ha-card><div class="st-card">
        <div class="st-name">${e}</div>
        <div class="st-time ${c?"warn":""}">${this._formatDuration(o)}</div>
        <div class="st-status">
          ${c?"\u26A0\uFE0F Consider a break!":"This session"}
        </div>
        <div class="st-daily">Today total: ${this._formatDuration(a)}</div>
      </div></ha-card>
    `}getCardSize(){return 2}static getStubConfig(){return{name:"TV Screen Time",warn_after:120}}};P.styles=g`
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
  `,l([h({attribute:!1})],P.prototype,"hass",2),l([_()],P.prototype,"_sessionStart",2),l([_()],P.prototype,"_now",2);customElements.define("ha-tv-screentime-card",P);var H=class extends v{constructor(){super(...arguments);this.hass=null;this._pressing=null;this._pressTimer=null}setConfig(e){this._config=e||{type:"custom:ha-awning-card"}}async _sendCommand(e){if(!this.hass)return;this._pressing=e,this._pressTimer&&clearTimeout(this._pressTimer),this._pressTimer=setTimeout(()=>{this._pressing=null},1e3);let s={device:"awning",action:e,id:Math.random().toString(36).substring(2,10)};try{await this.hass.callService("input_text","set_value",{entity_id:"input_text.bridge_command",value:JSON.stringify(s)})}catch(i){console.error("[ha-awning-card] Failed:",i)}}render(){let e=this._config?.name||"Awning",s=(i,r,o)=>p`
      <button
        class="awning-btn ${this._pressing===i?"pressing":""}"
        @click=${()=>this._sendCommand(i)}
      >
        <span class="awning-icon">${r}</span>
        <span>${o}</span>
      </button>
    `;return p`
      <ha-card><div class="awning-card">
        <div class="awning-name">⛱️ ${e}</div>
        <div class="awning-controls">
          ${s("open","\u2B06\uFE0F","Open")}
          ${s("stop","\u23F9\uFE0F","Stop")}
          ${s("close","\u2B07\uFE0F","Close")}
        </div>
      </div></ha-card>
    `}getCardSize(){return 2}static getStubConfig(){return{name:"Awning"}}};H.styles=g`
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
  `,l([h({attribute:!1})],H.prototype,"hass",2),l([h({attribute:!1})],H.prototype,"_pressing",2);customElements.define("ha-awning-card",H);var N=class extends v{constructor(){super(...arguments);this._now=new Date;this._taps=[]}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>{this._now=new Date},1e3)}disconnectedCallback(){this._timer&&clearInterval(this._timer),this._timer=void 0,super.disconnectedCallback()}_tap(){let e=Date.now();this._taps=this._taps.filter(s=>e-s<2e3),this._taps.push(e),this._taps.length>=5&&(this._taps=[],this.dispatchEvent(new CustomEvent("admin-request",{bubbles:!0,composed:!0})))}render(){let e=this._now.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return p`<div class="clock" @click=${()=>this._tap()}>${e}</div>`}};N.styles=g`
    :host { display: block; }
    .clock {
      font-size: 52px; font-weight: 800; color: var(--primary-text-color, #fff); text-align: center;
      font-variant-numeric: tabular-nums; user-select: none; cursor: default;
    }
  `,l([_()],N.prototype,"_now",2);customElements.define("kiosk-clock",N);var lt=class extends N{constructor(){super()}setConfig(t){}getCardSize(){return 1}static getStubConfig(){return{}}};customElements.define("ha-clock-card",lt);})();
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
