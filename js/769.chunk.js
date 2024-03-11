"use strict";(self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[]).push([[769],{9863:(e,t,r)=>{r.d(t,{A:()=>u});const n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var o,i=new Uint8Array(16);function c(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}for(var a=[],s=0;s<256;++s)a.push((s+256).toString(16).slice(1));const u=function(e,t,r){if(n.randomUUID&&!t&&!e)return n.randomUUID();var o=(e=e||{}).random||(e.rng||c)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=o[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]}(o)}},7358:(e,t,r)=>{r.d(t,{U1:()=>P,Z0:()=>B});var n=r(2614);var o=e=>Array.isArray(e)?e:[e];Symbol(),Object.getPrototypeOf({});var i="undefined"!=typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},c=0,a=1;function s(){return{s:c,v:void 0,o:null,p:null}}function u(e,t={}){let r=s();const{resultEqualityCheck:n}=t;let o,c=0;function u(){let t=r;const{length:u}=arguments;for(let e=0,r=u;e<r;e++){const r=arguments[e];if("function"==typeof r||"object"==typeof r&&null!==r){let e=t.o;null===e&&(t.o=e=new WeakMap);const n=e.get(r);void 0===n?(t=s(),e.set(r,t)):t=n}else{let e=t.p;null===e&&(t.p=e=new Map);const n=e.get(r);void 0===n?(t=s(),e.set(r,t)):t=n}}const l=t;let f;if(t.s===a?f=t.v:(f=e.apply(null,arguments),c++),l.s=a,n){const e=o?.deref?.()??o;null!=e&&n(e,f)&&(f=e,0!==c&&c--),o="object"==typeof f&&null!==f||"function"==typeof f?new i(f):f}return l.v=f,f}return u.clearCache=()=>{r=s(),u.resetResultsCount()},u.resultsCount=()=>c,u.resetResultsCount=()=>{c=0},u}function l(e,...t){const r="function"==typeof e?{memoize:e,memoizeOptions:t}:e,n=(...e)=>{let t,n=0,i=0,c={},a=e.pop();"object"==typeof a&&(c=a,a=e.pop()),function(e,t="expected a function, instead received "+typeof e){if("function"!=typeof e)throw new TypeError(t)}(a,`createSelector expects an output function after the inputs, but received: [${typeof a}]`);const s={...r,...c},{memoize:l,memoizeOptions:f=[],argsMemoize:d=u,argsMemoizeOptions:p=[],devModeChecks:y={}}=s,h=o(f),v=o(p),m=function(e){const t=Array.isArray(e[0])?e[0]:e;return function(e,t="expected all items to be functions, instead received the following types: "){if(!e.every((e=>"function"==typeof e))){const r=e.map((e=>"function"==typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${r}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}(e),w=l((function(){return n++,a.apply(null,arguments)}),...h),b=d((function(){i++;const e=function(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}(m,arguments);return t=w.apply(null,e),t}),...v);return Object.assign(b,{resultFunc:a,memoizedResultFunc:w,dependencies:m,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>t,recomputations:()=>n,resetRecomputations:()=>{n=0},memoize:l,argsMemoize:d})};return Object.assign(n,{withTypes:()=>n}),n}var f=l(u),d=Object.assign(((e,t=f)=>{!function(e,t="expected an object, instead received "+typeof e){if("object"!=typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const r=Object.keys(e);return t(r.map((t=>e[t])),((...e)=>e.reduce(((e,t,n)=>(e[r[n]]=t,e)),{})))}),{withTypes:()=>d});function p(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var y=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),h=()=>Math.random().toString(36).substring(7).split("").join("."),v={INIT:`@@redux/INIT${h()}`,REPLACE:`@@redux/REPLACE${h()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${h()}`};function m(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function w(e,t,r){if("function"!=typeof e)throw new Error(p(2));if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(p(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(p(1));return r(w)(e,t)}let n=e,o=t,i=new Map,c=i,a=0,s=!1;function u(){c===i&&(c=new Map,i.forEach(((e,t)=>{c.set(t,e)})))}function l(){if(s)throw new Error(p(3));return o}function f(e){if("function"!=typeof e)throw new Error(p(4));if(s)throw new Error(p(5));let t=!0;u();const r=a++;return c.set(r,e),function(){if(t){if(s)throw new Error(p(6));t=!1,u(),c.delete(r),i=null}}}function d(e){if(!m(e))throw new Error(p(7));if(void 0===e.type)throw new Error(p(8));if("string"!=typeof e.type)throw new Error(p(17));if(s)throw new Error(p(9));try{s=!0,o=n(o,e)}finally{s=!1}return(i=c).forEach((e=>{e()})),e}return d({type:v.INIT}),{dispatch:d,subscribe:f,getState:l,replaceReducer:function(e){if("function"!=typeof e)throw new Error(p(10));n=e,d({type:v.REPLACE})},[y]:function(){const e=f;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(p(11));function r(){const e=t;e.next&&e.next(l())}return r(),{unsubscribe:e(r)}},[y](){return this}}}}}function b(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...r)=>e(t(...r))))}function g(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var O=g(),E=g,j=(((...e)=>{const t=l(...e),r=Object.assign(((...e)=>{const r=t(...e),o=(e,...t)=>r((0,n.Qx)(e)?(0,n.ss)(e):e,...t);return Object.assign(o,r),o}),{withTypes:()=>r})})(u),"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?b:b.apply(null,arguments)});function k(e,t){function r(...r){if(t){let n=t(...r);if(!n)throw new Error(Q(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>function(e){return m(e)&&"type"in e&&"string"==typeof e.type}(t)&&t.type===e,r}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var S=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function x(e){return(0,n.a6)(e)?(0,n.jM)(e,(()=>{})):e}function C(e,t,r){if(e.has(t)){let n=e.get(t);return r.update&&(n=r.update(n,t,e),e.set(t,n)),n}if(!r.insert)throw new Error(Q(10));const n=r.insert(t,e);return e.set(t,n),n}var T=()=>function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{};let i=new S;return t&&("boolean"==typeof t?i.push(O):i.push(E(t.extraArgument))),i},A=e=>t=>{setTimeout(t,e)},R="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:A(10),_=e=>function(t){const{autoBatch:r=!0}=t??{};let n=new S(e);return r&&n.push(((e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,i=!1,c=!1;const a=new Set,s="tick"===e.type?queueMicrotask:"raf"===e.type?R:"callback"===e.type?e.queueNotification:A(e.timeout),u=()=>{c=!1,i&&(i=!1,a.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>o&&e()));return a.add(e),()=>{t(),a.delete(e)}},dispatch(e){try{return o=!e?.meta?.RTK_autoBatch,i=!o,i&&(c||(c=!0,s(u))),n.dispatch(e)}finally{o=!0}}})})("object"==typeof r?r:void 0)),n},N=!0;function P(e){const t=T(),{reducer:r,middleware:n,devTools:o=!0,preloadedState:i,enhancers:c}=e||{};let a,s;if("function"==typeof r)a=r;else{if(!m(r))throw new Error(Q(1));a=function(e){const t=Object.keys(e),r={};for(let n=0;n<t.length;n++){const o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}const n=Object.keys(r);let o;try{!function(e){Object.keys(e).forEach((t=>{const r=e[t];if(void 0===r(void 0,{type:v.INIT}))throw new Error(p(12));if(void 0===r(void 0,{type:v.PROBE_UNKNOWN_ACTION()}))throw new Error(p(13))}))}(r)}catch(e){o=e}return function(e={},t){if(o)throw o;let i=!1;const c={};for(let o=0;o<n.length;o++){const a=n[o],s=r[a],u=e[a],l=s(u,t);if(void 0===l)throw t&&t.type,new Error(p(14));c[a]=l,i=i||l!==u}return i=i||n.length!==Object.keys(e).length,i?c:e}}(r)}if(!N&&n&&"function"!=typeof n)throw new Error(Q(2));if("function"==typeof n){if(s=n(t),!N&&!Array.isArray(s))throw new Error(Q(3))}else s=t();if(!N&&s.some((e=>"function"!=typeof e)))throw new Error(Q(4));let u=b;o&&(u=j({trace:!N,..."object"==typeof o&&o}));const l=function(...e){return t=>(r,n)=>{const o=t(r,n);let i=()=>{throw new Error(p(15))};const c={getState:o.getState,dispatch:(e,...t)=>i(e,...t)},a=e.map((e=>e(c)));return i=b(...a)(o.dispatch),{...o,dispatch:i}}}(...s),f=_(l);if(!N&&c&&"function"!=typeof c)throw new Error(Q(5));let d="function"==typeof c?c(f):f();if(!N&&!Array.isArray(d))throw new Error(Q(6));if(!N&&d.some((e=>"function"!=typeof e)))throw new Error(Q(7));return N||!s.length||d.includes(l)||console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`"),w(a,i,u(...d))}function M(e){const t={},r=[];let n;const o={addCase(e,r){const n="string"==typeof e?e:e.type;if(!n)throw new Error(Q(28));if(n in t)throw new Error(Q(29));return t[n]=r,o},addMatcher:(e,t)=>(r.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(n=e,o)};return e(o),[t,r,n]}var I=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},$=Symbol.for("rtk-slice-createasyncthunk");function D(e,t){return`${e}/${t}`}function U({creators:e}={}){const t=e?.asyncThunk?.[$];return function(e){const{name:r,reducerPath:o=r}=e;if(!r)throw new Error(Q(11));const i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},c=Object.keys(i),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){const r="string"==typeof e?e:e.type;if(!r)throw new Error(Q(12));if(r in a.sliceCaseReducersByType)throw new Error(Q(13));return a.sliceCaseReducersByType[r]=t,s},addMatcher:(e,t)=>(a.sliceMatchers.push({matcher:e,reducer:t}),s),exposeAction:(e,t)=>(a.actionCreators[e]=t,s),exposeCaseReducer:(e,t)=>(a.sliceCaseReducersByName[e]=t,s)};function u(){const[t={},r=[],o]="function"==typeof e.extraReducers?M(e.extraReducers):[e.extraReducers],i={...t,...a.sliceCaseReducersByType};return function(e,t){let c,[s,u,l]=M((e=>{for(let t in i)e.addCase(t,i[t]);for(let t of a.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);o&&e.addDefaultCase(o)}));if("function"==typeof e)c=()=>x(e());else{const t=x(e);c=()=>t}function f(e=c(),t){let r=[s[t.type],...u.filter((({matcher:e})=>e(t))).map((({reducer:e})=>e))];return 0===r.filter((e=>!!e)).length&&(r=[l]),r.reduce(((e,r)=>{if(r){if((0,n.Qx)(e)){const n=r(e,t);return void 0===n?e:n}if((0,n.a6)(e))return(0,n.jM)(e,(e=>r(e,t)));{const n=r(e,t);if(void 0===n){if(null===e)return e;throw new Error(Q(9))}return n}}return e}),e)}return f.getInitialState=c,f}(e.initialState)}c.forEach((n=>{const o=i[n],c={reducerName:n,type:D(r,n),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(o)?function({type:e,reducerName:t,createNotation:r},n,o){let i,c;if("reducer"in n){if(r&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(n))throw new Error(Q(17));i=n.reducer,c=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,c?k(e,c):k(e))}(c,o,s):function({type:e,reducerName:t},r,n,o){if(!o)throw new Error(Q(18));const{payloadCreator:i,fulfilled:c,pending:a,rejected:s,settled:u,options:l}=r,f=o(e,i,l);n.exposeAction(t,f),c&&n.addCase(f.fulfilled,c),a&&n.addCase(f.pending,a),s&&n.addCase(f.rejected,s),u&&n.addMatcher(f.settled,u),n.exposeCaseReducer(t,{fulfilled:c||z,pending:a||z,rejected:s||z,settled:u||z})}(c,o,s,t)}));const l=e=>e,f=new Map;let d;function p(e,t){return d||(d=u()),d(e,t)}function y(){return d||(d=u()),d.getInitialState()}function h(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=y()),n}function o(t=l){const n=C(f,r,{insert:()=>new WeakMap});return C(n,t,{insert:()=>{const n={};for(const[o,i]of Object.entries(e.selectors??{}))n[o]=W(i,t,y,r);return n}})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}const v={name:r,reducer:p,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:y,...h(o),injectInto(e,{reducerPath:t,...r}={}){const n=t??o;return e.inject({reducerPath:n,reducer:p},r),{...v,...h(n,!0)}}};return v}}function W(e,t,r,n){function o(o,...i){let c=t(o);return void 0===c&&n&&(c=r()),e(c,...i)}return o.unwrapped=e,o}var B=U();function z(){}var{assign:X}=Object,L="listenerMiddleware",V=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=k(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(Q(21));return((e,t)=>{if("function"!=typeof e)throw new Error(Q(32))})(i),{predicate:o,type:t,effect:i}},F=Object.assign((e=>{const{type:t,predicate:r,effect:n}=V(e);return{id:I(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(Q(22))}}}),{withTypes:()=>F}),q=Object.assign(k(`${L}/add`),{withTypes:()=>q}),K=(k(`${L}/removeAll`),Object.assign(k(`${L}/remove`),{withTypes:()=>K}));function Q(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}Symbol.for("rtk-state-proxy-original")},4150:(e,t,r)=>{r.d(t,{FD:()=>b,FK:()=>g,Y:()=>w});var n=["className"],o=["props"],i=["children"];function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e,t,r){var n;return n=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==c(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=d(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function d(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(e){return Array.isArray(e)},h=function(e){var t,r,n=function(e){if(Array.isArray(e))return e}(r=e.split("-"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||d(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=n[0],i=null!=o?o:"",c=f(n.slice(1));try{for(c.s();!(t=c.n()).done;){var a=t.value;i+=a.substring(0,1).toUpperCase()+a.substring(1)}}catch(e){c.e(e)}finally{c.f()}return i},v=function e(t){var r,i,c=null!==(r=t.data)&&void 0!==r?r:{},a=c.props,l=void 0===a?{}:a,f=(l.className,u(l,n)),d=u(c,o);return s(s({},t),{},{data:s(s({},d),{},{attrs:f,ns:"http://www.w3.org/2000/svg"}),children:null===(i=t.children)||void 0===i?void 0:i.map((function(t){return"string"==typeof t?t:e(t)}))})},m=function(e){return"string"==typeof e||"number"==typeof e?{children:void 0,data:void 0,elm:void 0,key:void 0,sel:void 0,text:String(e)}:null==e||!1===e||!0===e?{children:void 0,data:{},elm:void 0,key:void 0,sel:"!",text:String(e)}:e},w=function(e,t,r){t.key=r;var n="children"in t;if("function"==typeof e){var o;if(1===e.length)o=m(e(t));else{t.children;var a=u(t,i),s=t.children;o=m(e(a,n?y(s)?s.flatMap((function(e){return Array.isArray(e)?e.map(m):m(e)})):m(s):[]))}return void 0!==t.$key?o.key=t.$key:void 0!==t.key&&(o.key=t.key),o}var d=e,p=t.id;void 0!==p&&(d+="#".concat(p));var w=t.className;if(void 0!==w){var b,g=f(w.trim().split(" "));try{for(g.s();!(b=g.n()).done;){var O=b.value;d+=".".concat(O)}}catch(e){g.e(e)}finally{g.f()}}var E,j=function(e){var t={};for(var r in e){var n,o=e[r];if(void 0!==o)if("$attrs"===r||"attrs"===r)t.attrs=Object.assign(o,null!==(n=t.attrs)&&void 0!==n?n:{});else if(r.startsWith("aria-")){var i;null!==(i=t.attrs)&&void 0!==i||(t.attrs={}),t.attrs[r]=o}else if("children"===r);else if("$class"===r||"class"===r)t.class=o;else if("className"===r||"id"===r);else if("$data"===r||"data"===r||"dataset"===r){var c;t.dataset=Object.assign(o,null!==(c=t.dataset)&&void 0!==c?c:{})}else if(r.startsWith("data-")){var a,s=h(r.replace("data-",""));null!==(a=t.dataset)&&void 0!==a||(t.dataset={}),t.dataset[s]=o}else if("$hook"===r||"hook"===r)t.hook=o;else if("is"===r)t.is=o;else if("$key"===r||"key"===r)t.key=o;else if("$on"===r||"on"===r){var u;t.on=Object.assign(o,null!==(u=t.on)&&void 0!==u?u:{})}else if("$props"===r||"props"===r){var f;t.props=Object.assign(o,null!==(f=t.props)&&void 0!==f?f:{})}else if(r.startsWith("on")){var d=r.replace("on","");void 0===t.on?t.on=l({},d,o):t.on[d]=o}else if("list"===r||"role"===r){var p;null!==(p=t.attrs)&&void 0!==p||(t.attrs={}),t.attrs[r]=o}else if("$style"===r||"style"===r)t.style=o;else if(r.startsWith("$"))t[r.substring(1)]=o;else{var y;null!==(y=t.props)&&void 0!==y||(t.props={}),t.props[r]=o}}return t}(t),k=t.children;if(n)if(y(k))E=1!==k.length||"number"!=typeof k[0]&&"string"!=typeof k[0]?1===k.length&&"object"===c(k[0])&&null!==k[0]&&void 0===k[0].sel?{children:k[0].children,data:j,elm:void 0,sel:d,key:j.key,text:void 0}:{children:k.flatMap((function(e){return Array.isArray(e)?e.map(m):m(e)})),data:j,elm:void 0,sel:d,key:j.key,text:void 0}:{children:void 0,data:j,elm:void 0,sel:d,key:j.key,text:String(k[0])};else if(void 0===k)E={children:void 0,data:j,elm:void 0,sel:d,key:j.key,text:void 0};else if("number"==typeof k||"string"==typeof k)E={children:void 0,data:j,elm:void 0,sel:d,key:j.key,text:String(k)};else if(null===k||"boolean"==typeof k)E={children:[m(k)],data:j,elm:void 0,sel:d,key:j.key,text:void 0};else if(void 0===k.sel&&"string"==typeof k.text){var S;E={children:void 0,data:j,elm:void 0,sel:d,key:null!==(S=t.$key)&&void 0!==S?S:t.key,text:k.text}}else{var x;E={children:[k],data:j,elm:void 0,sel:d,key:null!==(x=t.$key)&&void 0!==x?x:t.key,text:void 0}}else E={children:void 0,data:j,elm:void 0,sel:d,key:j.key,text:void 0};if(void 0!==E.children&&1===E.children.length){var C=E.children[0];"string"==typeof C?(E.text=C,E.children=void 0):"object"===c(C)&&void 0===C.sel&&void 0!==C.text&&(E.text=C.text,E.children=void 0)}return"svg"===e?v(E):E};function b(e,t){return w(e,t)}function g(e){var t=e.children;return{children:void 0===t?[]:[t].flat().map(m),data:{},elm:void 0,sel:void 0,key:void 0,text:void 0}}}}]);