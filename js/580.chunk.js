"use strict";(self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[]).push([[580],{40:(t,e,n)=>{function r(t,e,n){return e=function(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:String(e)}(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}n.d(e,{WK:()=>At,iG:()=>ut,kL:()=>Gt});var i=Object.freeze({__proto__:null,get start(){return Gt},get ensureJQuerySupport(){return ht},get setBootstrapMaxTime(){return Q},get setMountMaxTime(){return Y},get setUnmountMaxTime(){return z},get setUnloadMaxTime(){return X},get registerApplication(){return At},get unregisterApplication(){return Ct},get getMountedApps(){return Ot},get getAppStatus(){return St},get unloadApplication(){return jt},get checkActivityFunctions(){return xt},get getAppNames(){return Pt},get pathToActiveWhen(){return Lt},get navigateToUrl(){return ut},get patchHistoryApi(){return dt},get triggerAppChange(){return Bt},get addErrorHandler(){return s},get removeErrorHandler(){return f},get mountRootParcel(){return K},get NOT_LOADED(){return v},get LOADING_SOURCE_CODE(){return h},get NOT_BOOTSTRAPPED(){return m},get BOOTSTRAPPING(){return y},get NOT_MOUNTED(){return g},get MOUNTING(){return w},get UPDATING(){return b},get LOAD_ERROR(){return P},get MOUNTED(){return E},get UNLOADING(){return O},get UNMOUNTING(){return T},get SKIP_BECAUSE_BROKEN(){return S}}),u=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}).CustomEvent,a=function(){try{var t=new u("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?u:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n},l=[];function c(t,e,n){var r=p(t,e,n);l.length?l.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function s(t){if("function"!=typeof t)throw Error(d(28,!1));l.push(t)}function f(t){if("function"!=typeof t)throw Error(d(29,!1));var e=!1;return l=l.filter((function(n){var r=n===t;return e=e||r,!r})),e}function d(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(e?e+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function p(t,e,n){var r,o="".concat(j(e)," '").concat(x(e),"' died in status ").concat(e.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(d(30,!1,e.status,x(e)));try{r=Error(o+JSON.stringify(t))}catch(e){r=t}}return r.appOrParcelName=x(e),e.status=n,r}var v="NOT_LOADED",h="LOADING_SOURCE_CODE",m="NOT_BOOTSTRAPPED",y="BOOTSTRAPPING",g="NOT_MOUNTED",w="MOUNTING",E="MOUNTED",b="UPDATING",T="UNMOUNTING",O="UNLOADING",P="LOAD_ERROR",S="SKIP_BECAUSE_BROKEN";function N(t){return t.status===E}function A(t){try{return t.activeWhen(window.location)}catch(e){return c(e,t,S),!1}}function x(t){return t.name}function C(t){return Boolean(t.unmountThisParcel)}function j(t){return C(t)?"parcel":"application"}function _(){for(var t=arguments.length-1;t>0;t--)for(var e in arguments[t])"__proto__"!==e&&(arguments[t-1][e]=arguments[t][e]);return arguments[0]}function D(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function L(t){return t&&("function"==typeof t||(e=t,Array.isArray(e)&&!D(e,(function(t){return"function"!=typeof t}))));var e}function M(t,e){var n=t[e]||[];0===(n=Array.isArray(n)?n:[n]).length&&(n=[function(){return Promise.resolve()}]);var r=j(t),o=x(t);return function(t){return n.reduce((function(n,i,u){return n.then((function(){var n=i(t);return U(n)?n:Promise.reject(d(15,!1,r,o,e,u))}))}),Promise.resolve())}}function U(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}var k=[];function B(t,e){return Promise.resolve().then((function(){return t.status!==m?t:(t.status=y,t.bootstrap?Z(t,"bootstrap").then(n).catch((function(n){if(e)throw p(n,t,S);return c(n,t,S),t})):Promise.resolve().then(n))}));function n(){return t.status=g,t}}function I(t,e){return Promise.resolve().then((function(){if(t.status!==E)return t;t.status=T;var n=Object.keys(t.parcels).map((function(e){return t.parcels[e].unmountThisParcel()}));return Promise.all(n).then(r,(function(n){return r().then((function(){var r=Error(n.message);if(e)throw p(r,t,S);c(r,t,S)}))})).then((function(){return t}));function r(){return Z(t,"unmount").then((function(){t.status=g}),(function(n){if(e)throw p(n,t,S);c(n,t,S)}))}}))}var R=!1,W=!1;function G(t,e){return Promise.resolve().then((function(){return t.status!==g?t:(R||(window.dispatchEvent(new a("single-spa:before-first-mount")),R=!0),t.status=w,Z(t,"mount").then((function(){return t.status=E,W||(window.dispatchEvent(new a("single-spa:first-mount")),W=!0),t})).catch((function(n){return t.status=E,I(t,!0).then(r,r);function r(){if(e)throw p(n,t,S);return c(n,t,S),t}})))}))}var F=0,$={parcels:{}};function K(){return q.apply($,arguments)}function q(t,e){var n=this;if(!t||"object"!=o(t)&&"function"!=typeof t)throw Error(d(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(d(3,!1,o(t.name)));var r=F++,i=t.name||"parcel-".concat(r);if("object"!=o(e))throw Error(d(4,!1,i,o(e)));if(!e.domElement)throw Error(d(5,!1,i));var u,a="function"==typeof t,l=a?t:function(){return Promise.resolve(t)},c={id:r,parcels:{},status:a?h:m,customProps:e,parentName:x(n),unmountThisParcel:function(){return w.then((function(){if(c.status!==E)throw Error(d(6,!1,i,c.status));return I(c,!0)})).then((function(t){return c.parentName&&delete n.parcels[c.id],t})).then((function(t){return f(t),t})).catch((function(t){throw c.status=S,v(t),t}))}};n.parcels[r]=c;var s=l();if(!s||"function"!=typeof s.then)throw Error(d(7,!1));s=s.then((function(t){if(!t)throw Error(d(8,!1));if(i=t.name||"parcel-".concat(r),Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!L(t.bootstrap))throw Error(d(9,!1,i));if(!L(t.mount))throw Error(d(10,!1,i));if(!L(t.unmount))throw Error(d(11,!1,i));if(t.update&&!L(t.update))throw Error(d(12,!1,i));var e=M(t,"bootstrap"),n=M(t,"mount"),o=M(t,"unmount");c.status=m,c.name=i,c.bootstrap=e,c.mount=n,c.unmount=o,c.timeouts=tt(t.timeouts),t.update&&(c.update=M(t,"update"),u.update=function(t){return c.customProps=t,V((e=c,Promise.resolve().then((function(){if(e.status!==E)throw Error(d(32,!1,x(e)));return e.status=b,Z(e,"update").then((function(){return e.status=E,e})).catch((function(t){throw p(t,e,S)}))}))));var e})}));var f,v,y=s.then((function(){return B(c,!0)})),w=y.then((function(){return G(c,!0)})),T=new Promise((function(t,e){f=t,v=e}));return u={mount:function(){return V(Promise.resolve().then((function(){if(c.status!==g)throw Error(d(13,!1,i,c.status));return n.parcels[r]=c,G(c)})))},unmount:function(){return V(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:V(s),bootstrapPromise:V(y),mountPromise:V(w),unmountPromise:V(T)}}function V(t){return t.then((function(){return null}))}function H(t){var e=x(t),n="function"==typeof t.customProps?t.customProps(e,window.location):t.customProps;("object"!=o(n)||null===n||Array.isArray(n))&&(n={},console.warn(d(40,!1),e,n));var r=_({},n,{name:e,mountParcel:q.bind(t),singleSpa:i});return C(t)&&(r.unmountSelf=t.unmountThisParcel),r}var J={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function Q(t,e,n){if("number"!=typeof t||t<=0)throw Error(d(16,!1));J.bootstrap={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function Y(t,e,n){if("number"!=typeof t||t<=0)throw Error(d(17,!1));J.mount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function z(t,e,n){if("number"!=typeof t||t<=0)throw Error(d(18,!1));J.unmount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function X(t,e,n){if("number"!=typeof t||t<=0)throw Error(d(19,!1));J.unload={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function Z(t,e){var n=t.timeouts[e],r=n.warningMillis,o=j(t);return new Promise((function(i,u){var a=!1,l=!1;t[e](H(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return s(1)}),r),setTimeout((function(){return s(!0)}),n.millis);var c=d(31,!1,e,o,x(t),n.millis);function s(t){if(!a)if(!0===t)l=!0,n.dieOnTimeout?u(Error(c)):console.error(c);else if(!l){var e=t,o=e*r;console.warn(c),o+r<n.millis&&setTimeout((function(){return s(e+1)}),r)}}}))}function tt(t){var e={};for(var n in J)e[n]=_({},J[n],t&&t[n]||{});return e}function et(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==v&&t.status!==P?t:(t.status=h,t.loadPromise=Promise.resolve().then((function(){var r=t.loadApp(H(t));if(!U(r))throw n=!0,Error(d(33,!1,x(t)));return r.then((function(n){var r;t.loadErrorTime=null,"object"!=o(e=n)&&(r=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!L(e.bootstrap)&&(r=35),L(e.mount)||(r=36),L(e.unmount)||(r=37);var i=j(e);if(r){var u;try{u=JSON.stringify(e)}catch(t){}return console.error(d(r,!1,i,x(t),u),e),c(void 0,t,S),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=_({},t.devtools.overlays,e.devtools.overlays)),t.status=m,t.bootstrap=M(e,"bootstrap"),t.mount=M(e,"mount"),t.unmount=M(e,"unmount"),t.unload=M(e,"unload"),t.timeouts=tt(e.timeouts),delete t.loadPromise,t}))})).catch((function(e){var r;return delete t.loadPromise,n?r=S:(r=P,t.loadErrorTime=(new Date).getTime()),c(e,t,r),t})));var e,n}))}var nt,rt="undefined"!=typeof window,ot={hashchange:[],popstate:[]},it=["hashchange","popstate"];function ut(t){var e;if("string"==typeof t)e=t;else if(this&&this.href)e=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(d(14,!1));e=t.currentTarget.href,t.preventDefault()}var n=pt(window.location.href),r=pt(e);0===e.indexOf("#")?window.location.hash=r.hash:n.host!==r.host&&r.host?window.location.href=e:r.pathname===n.pathname&&r.search===n.search?window.location.hash=r.hash:window.history.pushState(null,null,e)}function at(t){var e=this;if(t){var n=t[0].type;it.indexOf(n)>=0&&ot[n].forEach((function(n){try{n.apply(e,t)}catch(t){setTimeout((function(){throw t}))}}))}}function lt(){It([],arguments)}function ct(t,e){return function(){var n=window.location.href,r=t.apply(this,arguments),o=window.location.href;return nt&&n===o||window.dispatchEvent(function(t,e){var n;try{n=new PopStateEvent("popstate",{state:t})}catch(e){(n=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return n.singleSpa=!0,n.singleSpaTrigger=e,n}(window.history.state,e)),r}}var st=null,ft=!1;function dt(t){if(ft)throw Error(d(43,!1));nt=!t||!t.hasOwnProperty("urlRerouteOnly")||t.urlRerouteOnly,ft=!0,st=window.history.replaceState,window.addEventListener("hashchange",lt),window.addEventListener("popstate",lt);var e=window.addEventListener,n=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&it.indexOf(t)>=0)||D(ot[t],(function(t){return t===n})))return e.apply(this,arguments);ot[t].push(n)},window.removeEventListener=function(t,e){if(!("function"==typeof e&&it.indexOf(t)>=0))return n.apply(this,arguments);ot[t]=ot[t].filter((function(t){return t!==e}))},window.history.pushState=ct(window.history.pushState,"pushState"),window.history.replaceState=ct(st,"replaceState")}function pt(t){var e=document.createElement("a");return e.href=t,e}rt&&(window.singleSpaNavigate?console.warn(d(41,!1)):window.singleSpaNavigate=ut);var vt=!1;function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!vt){var e=t.fn.on,n=t.fn.off;t.fn.on=function(t,n){return mt.call(this,e,window.addEventListener,t,n,arguments)},t.fn.off=function(t,e){return mt.call(this,n,window.removeEventListener,t,e,arguments)},vt=!0}}function mt(t,e,n,r,o){return"string"!=typeof n?t.apply(this,o):(n.split(/\s+/).forEach((function(t){it.indexOf(t)>=0&&(e(t,r),n=n.replace(t,""))})),""===n.trim()?this:t.apply(this,o))}var yt={};function gt(t){return Promise.resolve().then((function(){var e=yt[x(t)];if(!e)return t;if(t.status===v)return wt(t,e),t;if(t.status===O)return e.promise.then((function(){return t}));if(t.status!==g&&t.status!==P)return t;var n=t.status===P?Promise.resolve():Z(t,"unload");return t.status=O,n.then((function(){return wt(t,e),t})).catch((function(n){return function(t,e,n){delete yt[x(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,c(n,t,S),e.reject(n)}(t,e,n),t}))}))}function wt(t,e){delete yt[x(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=v,e.resolve()}function Et(t,e,n,r){yt[x(t)]={app:t,resolve:n,reject:r},Object.defineProperty(yt[x(t)],"promise",{get:e})}function bt(t){return yt[t]}var Tt=[];function Ot(){return Tt.filter(N).map(x)}function Pt(){return Tt.map(x)}function St(t){var e=D(Tt,(function(e){return x(e)===t}));return e?e.status:null}var Nt=!1;function At(t,e,n,r){var i=function(t,e,n,r){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"==o(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(d(39,!1));var e=["name","app","activeWhen","customProps"],n=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==n.length)throw Error(d(38,!1,e.join(", "),n.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(d(20,!1));if("object"!=o(t.app)&&"function"!=typeof t.app)throw Error(d(20,!1));var r=function(t){return"string"==typeof t||"function"==typeof t};if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(d(24,!1));if(!Dt(t.customProps))throw Error(d(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,e,n,r){if("string"!=typeof t||0===t.length)throw Error(d(20,!1));if(!e)throw Error(d(23,!1));if("function"!=typeof n)throw Error(d(24,!1));if(!Dt(r))throw Error(d(22,!1))}(t,e,n,r),u.name=t,u.loadApp=e,u.activeWhen=n,u.customProps=r),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var e=Array.isArray(t)?t:[t];return e=e.map((function(t){return"function"==typeof t?t:Lt(t)})),function(t){return e.some((function(e){return e(t)}))}}(u.activeWhen),u}(t,e,n,r);if(Ft()||Nt||(Nt=!0,setTimeout((function(){Ft()||console.warn(d(1,!1))}),5e3)),-1!==Pt().indexOf(i.name))throw Error(d(21,!1,i.name));Tt.push(_({loadErrorTime:null,status:v,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),rt&&(ht(),It())}function xt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return Tt.filter((function(e){return e.activeWhen(t)})).map(x)}function Ct(t){if(0===Tt.filter((function(e){return x(e)===t})).length)throw Error(d(25,!1,t));return(rt?jt(t,{waitForUnmount:!1}):Promise.resolve()).then((function(){var e=Tt.map(x).indexOf(t);Tt.splice(e,1)}))}function jt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(d(26,!1));var n=D(Tt,(function(e){return x(e)===t}));if(!n)throw Error(d(27,!1,t));var r,o=bt(x(n));if(e&&e.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,e){Et(n,(function(){return i}),t,e)}));return i}return o?(r=o.promise,_t(n,o.resolve,o.reject)):r=new Promise((function(t,e){Et(n,(function(){return r}),t,e),_t(n,t,e)})),r}function _t(t,e,n){Promise.resolve().then((function(){if(D(xt(),(function(e){return e===x(t)})))return Bt()})).then((function(){return I(t).then(gt).then((function(){e(),setTimeout((function(){It()}))}))})).catch(n)}function Dt(t){return!t||"function"==typeof t||"object"==o(t)&&null!==t&&!Array.isArray(t)}function Lt(t,e){var n=function(t,e){var n=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i)}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(n,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)e&&(o+="$");else{var a=e?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$")}r=!r,n=i}}(t,e);return function(t){var e=t.origin;e||(e="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(e,"").replace(t.search,"").split("?")[0];return n.test(r)}}var Mt=!1,Ut=[],kt=rt&&window.location.href;function Bt(){return It()}function It(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Mt)return new Promise((function(t,n){Ut.push({resolve:t,reject:n,eventArguments:e})}));var o,i=function(){var t=[],e=[],n=[],r=[],o=(new Date).getTime();return Tt.forEach((function(i){var u=i.status!==S&&A(i);switch(i.status){case P:u&&o-i.loadErrorTime>=200&&n.push(i);break;case v:case h:u&&n.push(i);break;case m:case g:!u&&bt(x(i))?t.push(i):u&&r.push(i);break;case E:u||e.push(i)}})),{appsToUnload:t,appsToUnmount:e,appsToLoad:n,appsToMount:r}}(),u=i.appsToUnload,l=i.appsToUnmount,c=i.appsToLoad,s=i.appsToMount,f=[],p=kt,y=kt=window.location.href;return Ft()?(Mt=!0,o=u.concat(c,l,s),Promise.resolve().then((function(){return N(0===o.length?"before-no-app-change":"before-app-change",O(!0)),N("before-routing-event",O(!0,{cancelNavigation:w})),Promise.all(f).then((function(n){if(n.some((function(t){return t})))return st.call(window.history,history.state,"",p.substring(location.origin.length)),kt=location.href,Mt=!1,It(t,e,!0);var r=u.map(gt),o=l.map(I).map((function(t){return t.then(gt)})).concat(r),i=Promise.all(o);i.then((function(){N("before-mount-routing-event",O(!0))}),(function(t){throw t}));var a=c.map((function(t){return et(t).then((function(t){return Rt(t,i)}))})),f=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return Rt(t,i)}));return i.catch((function(t){throw T(),t})).then((function(){return T(),Promise.all(a.concat(f)).catch((function(e){throw t.forEach((function(t){return t.reject(e)})),e})).then(b).then((function(){}),(function(t){throw t}))}))}))}))):(o=c,Promise.resolve().then((function(){var t=c.map(et);return Promise.all(t).then(T).then((function(){return[]})).catch((function(t){throw T(),t})).finally((function(){}))})));function w(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e="function"==typeof(null==t?void 0:t.then)?t:Promise.resolve(t);f.push(e.catch((function(t){return console.warn(Error(d(42,!1))),console.warn(t),!1})))}function b(){var e=Ot();t.forEach((function(t){return t.resolve(e)}));try{N(0===o.length?"no-app-change":"app-change",O()),N("routing-event",O())}catch(t){setTimeout((function(){throw t}))}if(Mt=!1,Ut.length>0){var n=Ut;Ut=[],It(n)}return e}function T(){n||(t.forEach((function(t){at(t.eventArguments)})),at(e))}function O(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0,i={},a=r(r(r(r({},E,[]),g,[]),v,[]),S,[]);t?(c.concat(s).forEach((function(t,e){d(t,E)})),u.forEach((function(t){d(t,v)})),l.forEach((function(t){d(t,g)}))):o.forEach((function(t){d(t)}));var f={detail:{newAppStatuses:i,appsByNewStatus:a,totalAppChanges:o.length,originalEvent:null==e?void 0:e[0],oldUrl:p,newUrl:y}};return n&&_(f.detail,n),f;function d(t,e){var n=x(t);e=e||St(n),i[n]=e,(a[e]=a[e]||[]).push(n)}}function N(t,e){n||window.dispatchEvent(new a("single-spa:".concat(t),e))}}function Rt(t,e){return A(t)?B(t).then((function(t){return e.then((function(){return A(t)?G(t):t}))})):e.then((function(){return t}))}var Wt=!1;function Gt(t){Wt=!0,rt&&(dt(t),It())}function Ft(){return Wt}var $t={getRawAppData:function(){return[].concat(Tt)},reroute:It,NOT_LOADED:v,toLoadPromise:et,toBootstrapPromise:B,unregisterApplication:Ct,getProfilerData:function(){return k}};rt&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=$t)},2464:(t,e,n)=>{function r(t){if(o(t)){for(;t&&o(t);)t=i(t).parent;return null!=t?t:null}return t.parentNode}function o(t){return 11===t.nodeType}function i(t,e){var n,r,o,i=t;return null!==(n=i.parent)&&void 0!==n||(i.parent=null!=e?e:null),null!==(r=i.firstChildNode)&&void 0!==r||(i.firstChildNode=t.firstChild),null!==(o=i.lastChildNode)&&void 0!==o||(i.lastChildNode=t.lastChild),i}n.d(e,{u:()=>u});var u={createElement:function(t,e){return document.createElement(t,e)},createElementNS:function(t,e,n){return document.createElementNS(t,e,n)},createTextNode:function(t){return document.createTextNode(t)},createDocumentFragment:function(){return i(document.createDocumentFragment())},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){if(o(t)){for(var r=t;r&&o(r);)r=i(r).parent;t=null!=r?r:t}o(e)&&(e=i(e,t)),n&&o(n)&&(n=i(n).firstChildNode),t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){o(e)&&(e=i(e,t)),t.appendChild(e)},parentNode:r,nextSibling:function(t){var e;if(o(t)){var n=i(t),u=r(n);if(u&&n.lastChildNode){var a=Array.from(u.childNodes),l=a.indexOf(n.lastChildNode);return null!==(e=a[l+1])&&void 0!==e?e:null}return null}return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},getTextContent:function(t){return t.textContent},isElement:function(t){return 1===t.nodeType},isText:function(t){return 3===t.nodeType},isComment:function(t){return 8===t.nodeType},isDocumentFragment:o}},1088:(t,e,n)=>{n.d(e,{_:()=>m});var r=n(4885),o=n(608),i=n(2464);function u(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t){return void 0===t}function s(t){return void 0!==t}var f=(0,r.o)("",{},[],void 0,void 0);function d(t,e){var n,r,o=t.key===e.key,i=(null===(n=t.data)||void 0===n?void 0:n.is)===(null===(r=e.data)||void 0===r?void 0:r.is),u=t.sel===e.sel,a=!(!t.sel&&t.sel===e.sel)||l(t.text)===l(e.text);return u&&o&&i&&a}function p(){throw new Error("The document fragment is not supported on this platform.")}function v(t,e,n){for(var r,o={},i=e;i<=n;++i){var u=null===(r=t[i])||void 0===r?void 0:r.key;void 0!==u&&(o[u]=i)}return o}var h=["create","update","remove","destroy","pre","post"];function m(t,e,n){var a,l={create:[],update:[],remove:[],destroy:[],pre:[],post:[]},m=void 0!==e?e:i.u,y=u(h);try{for(y.s();!(a=y.n()).done;){var g,w=a.value,E=u(t);try{for(E.s();!(g=E.n()).done;){var b=g.value[w];void 0!==b&&l[w].push(b)}}catch(t){E.e(t)}finally{E.f()}}}catch(t){y.e(t)}finally{y.f()}function T(t,e){return function(){if(0==--e){var n=m.parentNode(t);null!==n&&m.removeChild(n,t)}}}function O(t,e){var r,i,u,a,d,v=t.data;if(void 0!==v){var h=null===(r=v.hook)||void 0===r?void 0:r.init;s(h)&&(h(t),v=t.data)}var y=t.children,g=t.sel;if("!"===g)c(t.text)&&(t.text=""),t.elm=m.createComment(t.text);else if(""===g)t.elm=m.createTextNode(t.text);else if(void 0!==g){var w=g.indexOf("#"),E=g.indexOf(".",w),b=w>0?w:g.length,T=E>0?E:g.length,P=-1!==w||-1!==E?g.slice(0,Math.min(b,T)):g,S=t.elm=s(v)&&s(d=v.ns)?m.createElementNS(d,P,v):m.createElement(P,v);for(b<T&&S.setAttribute("id",g.slice(b+1,T)),E>0&&S.setAttribute("class",g.slice(T+1).replace(/\./g," ")),d=0;d<l.create.length;++d)l.create[d](f,t);if(!o.g(t.text)||o.M(y)&&0!==y.length||m.appendChild(S,m.createTextNode(t.text)),o.M(y))for(d=0;d<y.length;++d){var N=y[d];null!=N&&m.appendChild(S,O(N,e))}var A=t.data.hook;s(A)&&(null===(i=A.create)||void 0===i||i.call(A,f,t),A.insert&&e.push(t))}else if((null===(u=null==n?void 0:n.experimental)||void 0===u?void 0:u.fragments)&&t.children){for(t.elm=(null!==(a=m.createDocumentFragment)&&void 0!==a?a:p)(),d=0;d<l.create.length;++d)l.create[d](f,t);for(d=0;d<t.children.length;++d){var x=t.children[d];null!=x&&m.appendChild(t.elm,O(x,e))}}else t.elm=m.createTextNode(t.text);return t.elm}function P(t,e,n,r,o,i){for(;r<=o;++r){var u=n[r];null!=u&&m.insertBefore(t,O(u,i),e)}}function S(t){var e,n,r=t.data;if(void 0!==r){null===(n=null===(e=null==r?void 0:r.hook)||void 0===e?void 0:e.destroy)||void 0===n||n.call(e,t);for(var o=0;o<l.destroy.length;++o)l.destroy[o](t);if(void 0!==t.children)for(var i=0;i<t.children.length;++i){var u=t.children[i];null!=u&&"string"!=typeof u&&S(u)}}}function N(t,e,n,r){for(var o,i;n<=r;++n){var u=void 0,a=void 0,c=e[n];if(null!=c)if(s(c.sel)){S(c),u=l.remove.length+1,a=T(c.elm,u);for(var f=0;f<l.remove.length;++f)l.remove[f](c,a);var d=null===(i=null===(o=null==c?void 0:c.data)||void 0===o?void 0:o.hook)||void 0===i?void 0:i.remove;s(d)?d(c,a):a()}else c.children?(S(c),N(t,c.children,0,c.children.length-1)):m.removeChild(t,c.elm)}}function A(t,e,n){var r,o,i,u,a,f,p,h,y=null===(r=e.data)||void 0===r?void 0:r.hook;null===(o=null==y?void 0:y.prepatch)||void 0===o||o.call(y,t,e);var g=e.elm=t.elm;if(t!==e){if(void 0!==e.data||s(e.text)&&e.text!==t.text){null!==(i=e.data)&&void 0!==i||(e.data={}),null!==(u=t.data)&&void 0!==u||(t.data={});for(var w=0;w<l.update.length;++w)l.update[w](t,e);null===(p=null===(f=null===(a=e.data)||void 0===a?void 0:a.hook)||void 0===f?void 0:f.update)||void 0===p||p.call(f,t,e)}var E=t.children,b=e.children;c(e.text)?s(E)&&s(b)?E!==b&&function(t,e,n,r){for(var o,i,u,a=0,l=0,s=e.length-1,f=e[0],p=e[s],h=n.length-1,y=n[0],g=n[h];a<=s&&l<=h;)null==f?f=e[++a]:null==p?p=e[--s]:null==y?y=n[++l]:null==g?g=n[--h]:d(f,y)?(A(f,y,r),f=e[++a],y=n[++l]):d(p,g)?(A(p,g,r),p=e[--s],g=n[--h]):d(f,g)?(A(f,g,r),m.insertBefore(t,f.elm,m.nextSibling(p.elm)),f=e[++a],g=n[--h]):d(p,y)?(A(p,y,r),m.insertBefore(t,p.elm,f.elm),p=e[--s],y=n[++l]):(void 0===o&&(o=v(e,a,s)),c(i=o[y.key])?(m.insertBefore(t,O(y,r),f.elm),y=n[++l]):c(o[g.key])?(m.insertBefore(t,O(g,r),m.nextSibling(p.elm)),g=n[--h]):((u=e[i]).sel!==y.sel?m.insertBefore(t,O(y,r),f.elm):(A(u,y,r),e[i]=void 0,m.insertBefore(t,u.elm,f.elm)),y=n[++l]));l<=h&&P(t,null==n[h+1]?null:n[h+1].elm,n,l,h,r),a<=s&&N(t,e,a,s)}(g,E,b,n):s(b)?(s(t.text)&&m.setTextContent(g,""),P(g,null,b,0,b.length-1,n)):s(E)?N(g,E,0,E.length-1):s(t.text)&&m.setTextContent(g,""):t.text!==e.text&&(s(E)&&N(g,E,0,E.length-1),m.setTextContent(g,e.text)),null===(h=null==y?void 0:y.postpatch)||void 0===h||h.call(y,t,e)}}return function(t,e){var n,o,i,u,a=[];for(n=0;n<l.pre.length;++n)l.pre[n]();for(function(t,e){return t.isElement(e)}(m,t)?t=function(t){var e=t.id?"#"+t.id:"",n=t.getAttribute("class"),o=n?"."+n.split(" ").join("."):"";return(0,r.o)(m.tagName(t).toLowerCase()+e+o,{},[],void 0,t)}(t):function(t,e){return t.isDocumentFragment(e)}(m,t)&&(u=t,t=(0,r.o)(void 0,{},[],void 0,u)),d(t,e)?A(t,e,a):(o=t.elm,i=m.parentNode(o),O(e,a),null!==i&&(m.insertBefore(i,e.elm,m.nextSibling(o)),N(i,[t],0,0))),n=0;n<a.length;++n)a[n].data.hook.insert(a[n]);for(n=0;n<l.post.length;++n)l.post[n]();return e}}},4256:(t,e,n)=>{function r(t,e){var n,r,o=e.elm,i=t.data.class,u=e.data.class;if((i||u)&&i!==u){for(r in u=u||{},i=i||{})i[r]&&!Object.prototype.hasOwnProperty.call(u,r)&&o.classList.remove(r);for(r in u)(n=u[r])!==i[r]&&o.classList[n?"add":"remove"](r)}}n.d(e,{Y:()=>o});var o={create:r,update:r}},3096:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e,n){if("function"==typeof t)t.call(e,n,e);else if("object"===r(t))for(var i=0;i<t.length;i++)o(t[i],e,n)}function i(t,e){var n=t.type,r=e.data.on;r&&r[n]&&o(r[n],e,t)}function u(t,e){var n,r=t.data.on,o=t.listener,u=t.elm,a=e&&e.data.on,l=e&&e.elm;if(r!==a){if(r&&o)if(a)for(n in r)a[n]||u.removeEventListener(n,o,!1);else for(n in r)u.removeEventListener(n,o,!1);if(a){var c=e.listener=t.listener||function t(e){i(e,t.vnode)};if(c.vnode=e,r)for(n in a)r[n]||l.addEventListener(n,c,!1);else for(n in a)l.addEventListener(n,c,!1)}}}n.d(e,{C:()=>a});var a={create:u,update:u,destroy:u}},3036:(t,e,n)=>{function r(t,e){var n,r,o=e.elm,i=t.data.props,u=e.data.props;if((i||u)&&i!==u)for(n in i=i||{},u=u||{})r=u[n],i[n]===r||"value"===n&&o[n]===r||(o[n]=r)}n.d(e,{q:()=>o});var o={create:r,update:r}},9008:(t,e,n)=>{n.d(e,{Y:()=>l});var r="function"==typeof(null===window||void 0===window?void 0:window.requestAnimationFrame)?window.requestAnimationFrame.bind(window):setTimeout,o=function(t){r((function(){r(t)}))},i=!1;function u(t,e,n){o((function(){t[e]=n}))}function a(t,e){var n,r,o=e.elm,i=t.data.style,a=e.data.style;if((i||a)&&i!==a){a=a||{};var l="delayed"in(i=i||{});for(r in i)r in a||("-"===r[0]&&"-"===r[1]?o.style.removeProperty(r):o.style[r]="");for(r in a)if(n=a[r],"delayed"===r&&a.delayed)for(var c in a.delayed)n=a.delayed[c],l&&n===i.delayed[c]||u(o.style,c,n);else"remove"!==r&&n!==i[r]&&("-"===r[0]&&"-"===r[1]?o.style.setProperty(r,n):o.style[r]=n)}}var l={pre:function(){i=!1},create:a,update:a,destroy:function(t){var e,n,r=t.elm,o=t.data.style;if(o&&(e=o.destroy))for(n in e)r.style[n]=e[n]},remove:function(t,e){var n=t.data.style;if(n&&n.remove){var r;i||(t.elm.offsetLeft,i=!0);var o=t.elm,u=0,a=n.remove,l=0,c=[];for(r in a)c.push(r),o.style[r]=a[r];for(var s=getComputedStyle(o)["transition-property"].split(", ");u<s.length;++u)-1!==c.indexOf(s[u])&&l++;o.addEventListener("transitionend",(function(t){t.target===o&&--l,0===l&&e()}))}else e()}}},2456:(t,e,n)=>{n.d(e,{m:()=>u});var r=n(44),o=n(4885),i=n(2464);function u(t,e){var n,a=void 0!==e?e:i.u;if(a.isElement(t)){var l,c,s,f=t.id?"#"+t.id:"",d=t.getAttribute("class"),p=d?"."+d.split(" ").join("."):"",v=a.tagName(t).toLowerCase()+f+p,h={},m={},y={},g=[],w=t.attributes,E=t.childNodes;for(c=0,s=w.length;c<s;c++)(l=w[c].nodeName).startsWith("data-")?m[l.slice(5)]=w[c].nodeValue||"":"id"!==l&&"class"!==l&&(h[l]=w[c].nodeValue);for(c=0,s=E.length;c<s;c++)g.push(u(E[c],e));return Object.keys(h).length>0&&(y.attrs=h),Object.keys(m).length>0&&(y.dataset=m),!v.startsWith("svg")||3!==v.length&&"."!==v[3]&&"#"!==v[3]||(0,r.O)(y,g,v),(0,o.o)(v,y,g,void 0,t)}return a.isText(t)?(n=a.getTextContent(t),(0,o.o)(void 0,void 0,void 0,n,t)):a.isComment(t)?(n=a.getTextContent(t),(0,o.o)("!",{},[],n,t)):(0,o.o)("",{},[],void 0,t)}}}]);