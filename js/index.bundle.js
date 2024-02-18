/*! For license information please see index.bundle.js.LICENSE.txt */
(()=>{var t,e,r,n,o={6468:(t,e,r)=>{r.p="./"},2614:(t,e,r)=>{"use strict";r.d(e,{IP:()=>Y,Qx:()=>s,a6:()=>u,jM:()=>J,ss:()=>K});var n=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),i=Symbol.for("immer-state");function a(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var c=Object.getPrototypeOf;function s(t){return!!t&&!!t[i]}function u(t){return!!t&&(l(t)||Array.isArray(t)||!!t[o]||!!t.constructor?.[o]||_(t)||v(t))}var f=Object.prototype.constructor.toString();function l(t){if(!t||"object"!=typeof t)return!1;const e=c(t);if(null===e)return!0;const r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===f}function p(t,e){0===h(t)?Object.entries(t).forEach((([r,n])=>{e(r,n,t)})):t.forEach(((r,n)=>e(n,r,t)))}function h(t){const e=t[i];return e?e.type_:Array.isArray(t)?1:_(t)?2:v(t)?3:0}function d(t,e){return 2===h(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function y(t,e,r){const n=h(t);2===n?t.set(e,r):3===n?t.add(r):t[e]=r}function _(t){return t instanceof Map}function v(t){return t instanceof Set}function b(t){return t.copy_||t.base_}function g(t,e){if(_(t))return new Map(t);if(v(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&l(t)){if(!c(t)){const e=Object.create(null);return Object.assign(e,t)}return{...t}}const r=Object.getOwnPropertyDescriptors(t);delete r[i];let n=Reflect.ownKeys(r);for(let e=0;e<n.length;e++){const o=n[e],i=r[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(c(t),r)}function m(t,e=!1){return O(t)||s(t)||!u(t)||(h(t)>1&&(t.set=t.add=t.clear=t.delete=w),Object.freeze(t),e&&p(t,((t,e)=>m(e,!0)))),t}function w(){a(2)}function O(t){return Object.isFrozen(t)}var S,P={};function x(t){const e=P[t];return e||a(0),e}function j(){return S}function E(t,e){e&&(x("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function k(t){z(t),t.drafts_.forEach(M),t.drafts_=null}function z(t){t===S&&(S=t.parent_)}function L(t){return S={drafts_:[],parent_:S,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function M(t){const e=t[i];0===e.type_||1===e.type_?e.revoke_():e.revoked_=!0}function F(t,e){e.unfinalizedDrafts_=e.drafts_.length;const r=e.drafts_[0];return void 0!==t&&t!==r?(r[i].modified_&&(k(e),a(4)),u(t)&&(t=A(e,t),e.parent_||C(e,t)),e.patches_&&x("Patches").generateReplacementPatches_(r[i].base_,t,e.patches_,e.inversePatches_)):t=A(e,r,[]),k(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==n?t:void 0}function A(t,e,r){if(O(e))return e;const n=e[i];if(!n)return p(e,((o,i)=>N(t,n,e,o,i,r))),e;if(n.scope_!==t)return e;if(!n.modified_)return C(t,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const e=n.copy_;let o=e,i=!1;3===n.type_&&(o=new Set(e),e.clear(),i=!0),p(o,((o,a)=>N(t,n,e,o,a,r,i))),C(t,e,!1),r&&t.patches_&&x("Patches").generatePatches_(n,r,t.patches_,t.inversePatches_)}return n.copy_}function N(t,e,r,n,o,i,a){if(s(o)){const a=A(t,o,i&&e&&3!==e.type_&&!d(e.assigned_,n)?i.concat(n):void 0);if(y(r,n,a),!s(a))return;t.canAutoFreeze_=!1}else a&&r.add(o);if(u(o)&&!O(o)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;A(t,o),e&&e.scope_.parent_||C(t,o)}}function C(t,e,r=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&m(e,r)}var T={get(t,e){if(e===i)return t;const r=b(t);if(!d(r,e))return function(t,e,r){const n=U(e,r);return n?"value"in n?n.value:n.get?.call(t.draft_):void 0}(t,r,e);const n=r[e];return t.finalized_||!u(n)?n:n===I(t.base_,e)?(R(t),t.copy_[e]=q(n,t)):n},has:(t,e)=>e in b(t),ownKeys:t=>Reflect.ownKeys(b(t)),set(t,e,r){const n=U(b(t),e);if(n?.set)return n.set.call(t.draft_,r),!0;if(!t.modified_){const n=I(b(t),e),c=n?.[i];if(c&&c.base_===r)return t.copy_[e]=r,t.assigned_[e]=!1,!0;if(((o=r)===(a=n)?0!==o||1/o==1/a:o!=o&&a!=a)&&(void 0!==r||d(t.base_,e)))return!0;R(t),G(t)}var o,a;return t.copy_[e]===r&&(void 0!==r||e in t.copy_)||Number.isNaN(r)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=r,t.assigned_[e]=!0),!0},deleteProperty:(t,e)=>(void 0!==I(t.base_,e)||e in t.base_?(t.assigned_[e]=!1,R(t),G(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0),getOwnPropertyDescriptor(t,e){const r=b(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.type_||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty(){a(11)},getPrototypeOf:t=>c(t.base_),setPrototypeOf(){a(12)}},D={};function I(t,e){const r=t[i];return(r?b(r):t)[e]}function U(t,e){if(!(e in t))return;let r=c(t);for(;r;){const t=Object.getOwnPropertyDescriptor(r,e);if(t)return t;r=c(r)}}function G(t){t.modified_||(t.modified_=!0,t.parent_&&G(t.parent_))}function R(t){t.copy_||(t.copy_=g(t.base_,t.scope_.immer_.useStrictShallowCopy_))}function q(t,e){const r=_(t)?x("MapSet").proxyMap_(t,e):v(t)?x("MapSet").proxySet_(t,e):function(t,e){const r=Array.isArray(t),n={type_:r?1:0,scope_:e?e.scope_:j(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=T;r&&(o=[n],i=D);const{revoke:a,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=a,c}(t,e);return(e?e.scope_:j()).drafts_.push(r),r}function K(t){return s(t)||a(10),W(t)}function W(t){if(!u(t)||O(t))return t;const e=t[i];let r;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,r=g(t,e.scope_.immer_.useStrictShallowCopy_)}else r=g(t,!0);return p(r,((t,e)=>{y(r,t,W(e))})),e&&(e.finalized_=!1),r}function Y(){class t extends Map{constructor(t,e){super(),this[i]={type_:2,parent_:e,scope_:e?e.scope_:j(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:t,draft_:this,isManual_:!1,revoked_:!1}}get size(){return b(this[i]).size}has(t){return b(this[i]).has(t)}set(t,r){const n=this[i];return o(n),b(n).has(t)&&b(n).get(t)===r||(e(n),G(n),n.assigned_.set(t,!0),n.copy_.set(t,r),n.assigned_.set(t,!0)),this}delete(t){if(!this.has(t))return!1;const r=this[i];return o(r),e(r),G(r),r.base_.has(t)?r.assigned_.set(t,!1):r.assigned_.delete(t),r.copy_.delete(t),!0}clear(){const t=this[i];o(t),b(t).size&&(e(t),G(t),t.assigned_=new Map,p(t.base_,(e=>{t.assigned_.set(e,!1)})),t.copy_.clear())}forEach(t,e){b(this[i]).forEach(((r,n,o)=>{t.call(e,this.get(n),n,this)}))}get(t){const r=this[i];o(r);const n=b(r).get(t);if(r.finalized_||!u(n))return n;if(n!==r.base_.get(t))return n;const a=q(n,r);return e(r),r.copy_.set(t,a),a}keys(){return b(this[i]).keys()}values(){const t=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const e=t.next();return e.done?e:{done:!1,value:this.get(e.value)}}}}entries(){const t=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const e=t.next();if(e.done)return e;const r=this.get(e.value);return{done:!1,value:[e.value,r]}}}}[Symbol.iterator](){return this.entries()}}function e(t){t.copy_||(t.assigned_=new Map,t.copy_=new Map(t.base_))}class r extends Set{constructor(t,e){super(),this[i]={type_:3,parent_:e,scope_:e?e.scope_:j(),modified_:!1,finalized_:!1,copy_:void 0,base_:t,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return b(this[i]).size}has(t){const e=this[i];return o(e),e.copy_?!!e.copy_.has(t)||!(!e.drafts_.has(t)||!e.copy_.has(e.drafts_.get(t))):e.base_.has(t)}add(t){const e=this[i];return o(e),this.has(t)||(n(e),G(e),e.copy_.add(t)),this}delete(t){if(!this.has(t))return!1;const e=this[i];return o(e),n(e),G(e),e.copy_.delete(t)||!!e.drafts_.has(t)&&e.copy_.delete(e.drafts_.get(t))}clear(){const t=this[i];o(t),b(t).size&&(n(t),G(t),t.copy_.clear())}values(){const t=this[i];return o(t),n(t),t.copy_.values()}entries(){const t=this[i];return o(t),n(t),t.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(t,e){const r=this.values();let n=r.next();for(;!n.done;)t.call(e,n.value,n.value,this),n=r.next()}}function n(t){t.copy_||(t.copy_=new Set,t.base_.forEach((e=>{if(u(e)){const r=q(e,t);t.drafts_.set(e,r),t.copy_.add(r)}else t.copy_.add(e)})))}function o(t){t.revoked_&&a(3,JSON.stringify(b(t)))}var c,s;s={proxyMap_:function(e,r){return new t(e,r)},proxySet_:function(t,e){return new r(t,e)}},P[c="MapSet"]||(P[c]=s)}p(T,((t,e)=>{D[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),D.deleteProperty=function(t,e){return D.set.call(this,t,e,void 0)},D.set=function(t,e,r){return T.set.call(this,t[0],e,r,t[0])};var B=new class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,e,r)=>{if("function"==typeof t&&"function"!=typeof e){const r=e;e=t;const n=this;return function(t=r,...o){return n.produce(t,(t=>e.call(this,t,...o)))}}let o;if("function"!=typeof e&&a(6),void 0!==r&&"function"!=typeof r&&a(7),u(t)){const n=L(this),i=q(t,void 0);let a=!0;try{o=e(i),a=!1}finally{a?k(n):z(n)}return E(n,r),F(o,n)}if(!t||"object"!=typeof t){if(o=e(t),void 0===o&&(o=t),o===n&&(o=void 0),this.autoFreeze_&&m(o,!0),r){const e=[],n=[];x("Patches").generateReplacementPatches_(t,o,e,n),r(e,n)}return o}a(1)},this.produceWithPatches=(t,e)=>{if("function"==typeof t)return(e,...r)=>this.produceWithPatches(e,(e=>t(e,...r)));let r,n;return[this.produce(t,e,((t,e)=>{r=t,n=e})),r,n]},"boolean"==typeof t?.autoFreeze&&this.setAutoFreeze(t.autoFreeze),"boolean"==typeof t?.useStrictShallowCopy&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){u(t)||a(8),s(t)&&(t=K(t));const e=L(this),r=q(t,void 0);return r[i].isManual_=!0,z(e),r}finishDraft(t,e){const r=t&&t[i];r&&r.isManual_||a(9);const{scope_:n}=r;return E(n,e),F(void 0,n)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let r;for(r=e.length-1;r>=0;r--){const n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));const n=x("Patches").applyPatches_;return s(t)?n(t,e):this.produce(t,(t=>n(t,e)))}},J=B.produce;B.produceWithPatches.bind(B),B.setAutoFreeze.bind(B),B.setUseStrictShallowCopy.bind(B),B.applyPatches.bind(B),B.createDraft.bind(B),B.finishDraft.bind(B)}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);a.r(o);var i={};t=t||[null,e({}),e([]),e(e)];for(var c=2&n&&r;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>r[t]));return i.default=()=>r,a.d(o,i),o},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[])),a.u=t=>"js/"+({38:"editorUI",214:"paint-brush",248:"paint-line",366:"eruda",522:"paint-eraser",756:"paint-polygon",913:"modeEditor"}[t]||t)+".chunk.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r={},n="mylittlepaint2:",a.l=(t,e,o,i)=>{if(r[t])r[t].push(e);else{var c,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var l=u[f];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==n+o){c=l;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",n+o),c.src=t),r[t]=[e];var p=(e,n)=>{c.onerror=c.onload=null,clearTimeout(h);var o=r[t];if(delete r[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((t=>t(n))),e)return e(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.p="public/",(()=>{var t={57:0};a.f.j=(e,r)=>{var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(e),c=new Error;a.l(i,(r=>{if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}}),"chunk-"+e,e)}};var e=(e,r)=>{var n,o,[i,c,s]=r,u=0;if(i.some((e=>0!==t[e]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);s&&s(a)}for(e&&e(r);u<i.length;u++)o=i[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0},r=self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),(()=>{"use strict";a(6468);var t=a(2614);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return n};var t,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new F(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var d="suspendedStart",y="suspendedYield",_="executing",v="completed",b={};function g(){}function m(){}function w(){}var O={};l(O,s,(function(){return this}));var S=Object.getPrototypeOf,P=S&&S(S(A([])));P&&P!==o&&i.call(P,s)&&(O=P);var x=w.prototype=g.prototype=Object.create(O);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,r){function n(o,a,c,s){var u=h(t[o],t,a);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==e(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function k(e,r,n){var o=d;return function(i,a){if(o===_)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=z(c,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=_;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?v:y,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function z(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,z(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function A(r){if(r||""===r){var n=r[s];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return m.prototype=w,a(x,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,f,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},j(E.prototype),l(E.prototype,u,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new E(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),l(x,f,"Generator"),l(x,s,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=A,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},n}(0,t.IP)(),function(){if(void 0===Object.id){var t=0;Object.id=function(e){return void 0===e.__uniqueid&&Object.defineProperty(e,"__uniqueid",{value:++t,enumerable:!1,writable:!1}),e.__uniqueid}}}(),document.addEventListener("DOMContentLoaded",(function(){return t=void 0,e=void 0,n=void 0,o=r().mark((function t(){var e,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window,t.next=6;break;case 5:t.sent.default.init();case 6:return t.next=8,Promise.all([a.e(769),a.e(62),a.e(857),a.e(38)]).then(a.bind(a,3871));case 8:return e=t.sent,t.next=11,Promise.all([a.e(769),a.e(3),a.e(857),a.e(913)]).then(a.bind(a,9194));case 11:n=t.sent,window.editorUI=new e.default,window.editorUI.Mode.add("editor",new n.default),window.editorUI.Mount("editorUI_container"),window.editorUI.Mode.changeTo("editor");case 16:case"end":return t.stop()}}),t)})),new(n||(n=Promise))((function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((o=o.apply(t,e||[])).next())}));var t,e,n,o}))})()})();