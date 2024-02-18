/*! For license information please see modeEditor.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[]).push([[913],{9194:(t,e,n)=>{n.r(e),n.d(e,{EditorCanvas:()=>it,btnCanvas:()=>rt,default:()=>ot});var r=n(1216),i=n(5272);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:String(e)}const c=function(){function t(e,n,r){var o,a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dialog=(0,i.q0)("TD_Background",(0,i.q0)("Top_Dialog",[(0,i.q0)("TD_Header",[(0,i.BS)("TD_Title",e),(o=(0,i.BS)("TD_BtnDialogCloss","X"),o.addEventListener("click",void 0!==r?function(t){r(t),a.close()}:function(){return a.close()}),o)]),(0,i.q0)("TD_Body",n)]))}var e,n;return e=t,(n=[{key:"ShowDialog",value:function(){var t=document.body;this.dialog.style.display="flex",t.appendChild(this.dialog)}},{key:"CloseDialog",value:function(){this.dialog.style.display="none"}},{key:"show",value:function(){this.ShowDialog()}},{key:"close",value:function(){this.CloseDialog()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:String(e)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var y=f((function t(){d(this,t),this.Name="btn_undo",this.ImgName="undo",this.Tip="Undo",this.StartFunction=function(t){return t.undo(),!1}})),p=f((function t(){d(this,t),this.Name="btn_redo",this.ImgName="redo",this.Tip="Redo",this.StartFunction=function(t){return t.redo(),!1}})),v=f((function t(){d(this,t),this.Name="btn_clear",this.ImgName="clear",this.Tip="Clear the canvas",this.StartFunction=function(t){return t.clear(),!1}})),g=f((function t(){d(this,t),this.Name="btn_save",this.ImgName="save",this.Tip="Download a image",this.StartFunction=function(t){return t.save(),!1}})),w=f((function t(){d(this,t),this.Name="btn_touch",this.ImgName="toggleTouch",this.Tip="Toggle Touch / Pen",this.StartFunction=function(t){return t.toggleTouch(),!1}})),m=f((function t(){d(this,t),this.Name="btn_reset_scale",this.ImgName="resetScale",this.Tip="Reset scale to 100%",this.StartFunction=function(t){return t.scaleTo(1),!1}})),b=f((function t(){d(this,t),this.Name="btn_reset_rotate",this.ImgName="resetRotate",this.Tip="Reset rotate to 0°",this.StartFunction=function(t){return t.rotateTo(0),!1}})),S=n(1749),E=n.n(S),D=n(4150),L=n(5615),T=n.n(L),_=n(9863),k=n(2545),x=n(4515);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}function I(t,e,n){return e&&N(t.prototype,e),n&&N(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t){var e=function(t,e){if("object"!=C(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==C(e)?e:String(e)}function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var O=function(){function t(e,n,r){A(this,t),this.layerList=new Map,this.id2zIndex=new Map,this.cvs=new(T().Stage)({container:e,width:n,height:r}),this.ctx=new(T().Layer),this.cvs.add(this.ctx),this.defaultLayer=this.addLayer(),this.id2zIndex.set(this.defaultLayer,0)}return I(t,[{key:"addLayer",value:function(){var t=(0,_.A)(),e=new F(t,"Layer ".concat(this.layerList.size+1));return this.layerList.set(t,e),this.ctx.add(e.prev),this.ctx.add(e.render),t}},{key:"addLayerAfter",value:function(){var t=this,e=this.addLayer(),n=this.id2zIndex.get(this.defaultLayer);if(void 0===n)throw new Error("INTERNAL_ERROR: ZIndex of layer is missing.");return this.id2zIndex.forEach((function(e,r){e>=n&&t.id2zIndex.set(r,e+1)})),this.id2zIndex.set(e,n),this.layerList.forEach((function(e,n){var r=t.id2zIndex.get(n);if(void 0===r)throw new Error("INTERNAL_ERROR: ZIndex of layer is missing.");e.zIndex=r})),this.defaultLayer=e,e}},{key:"changeTo",value:function(t){if(!this.layerList.has(t))throw new Error("Layer ".concat(t," not exist"));this.defaultLayer=t,window.editorUI.forceRerender()}},{key:"Canvas",get:function(){return this.cvs}},{key:"Layer",get:function(){var t=this.defaultLayer;if(!this.layerList.has(t))throw new Error("Layer ".concat(t," not exist"));return this.layerList.get(t)}},{key:"LayerList",get:function(){var t=[];return this.layerList.forEach((function(e){return t.push({Snapshot:e.Preview,Name:e.Name,ID:e.ID})})),t}},{key:"clear",value:function(){console.log("[EUI] Layer clear"),this.layerList.forEach((function(t){return t.clear()}))}}]),t}(),F=function(){function t(e,n){A(this,t),this._previewImage="",this._isPreview=!1,this._id=e,this._name=n,this._render=new(T().Group)({name:"render_".concat(e)}),this._prev=new(T().Group)({name:"prev_".concat(e)})}return I(t,[{key:"ID",get:function(){return this._id}},{key:"Name",get:function(){return this._name}},{key:"zIndex",get:function(){return this._render.zIndex/2},set:function(t){this._render.setZIndex(2*t),this._prev.setZIndex(2*t+1)}},{key:"content",value:function(){return this._render.children}},{key:"merge",value:function(t){var e=this;this._isPreview=!1,t.content().forEach((function(t){e._render.add(t)}))}},{key:"Preview",get:function(){return this._previewImage=this._render.toDataURL(),this._previewImage}},{key:"diff",value:function(){var t=this,e=[];return this._prev.children.forEach((function(n){var r={layerID:t._id,paintToolName:n.className,shapeName:n.name(),data:n.attrs};console.log("[DEB] Diff : ",r),e.push(r)})),e}},{key:"flush",value:function(){var t=this;this._isPreview=!1,this._prev.children.forEach((function(e){t._render.add(e)})),this._prev.destroyChildren()}},{key:"add",value:function(t){this._isPreview=!1,this._render.add(t)}},{key:"clear",value:function(){this._prev.destroyChildren(),this._render.destroyChildren(),this._isPreview=!1}},{key:"render",get:function(){return this._render}},{key:"prev",get:function(){return this._prev}}]),t}();const R=I((function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];A(this,t),this.Name="LayerMgrSidebar",this.ImgName="layer",this.Tip="Layer Manager",this.Visible=!1,this.Title=function(){return"Layer"},this.Body=function(){if(e.Visible){var t=(0,x.Ex)("editor.layer.info.list");console.log("[EUI] LayerMgrSidebar : ",t);var n=function(t,e,n){var r;return(0,D.FD)(k.Tr,{className:t,onclick:function(t){window.editorUI.CenterCanvas.LayerManager.changeTo(n.ID)},children:[(0,D.Y)(k.Td,{children:"".concat(e).padStart(6)}),(0,D.Y)(k.Td,{children:(r=n.Snapshot,(0,D.Y)(k.E9,{$style:{maxWidth:"96px",maxHeight:"54px"},src:r}))}),(0,D.Y)(k.Td,{children:n.Name})]})},r=window.editorUI.CenterCanvas.LayerManager.Layer.ID,i=t.map((function(t,e){return t.ID===r?n("editted-layer",e,t):n("normal-layer",e,t)}));return(0,D.FD)(k.XI,{className:"w-full b-none align-right",children:[(0,D.FD)(k.Tr,{className:"layers-header",children:[(0,D.Y)(k.Td,{children:"Index"}),(0,D.Y)(k.Td,{children:"Preview"}),(0,D.Y)(k.Td,{children:"Name"})]}),i]})}return(0,D.Y)(k.i,{})},this.Visible=n}));function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,z(r.key),r)}}function j(t,e,n){return e&&Y(t.prototype,e),n&&Y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function z(t){var e=function(t,e){if("object"!=M(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==M(e)?e:String(e)}var U=function(t){return(0,D.Y)(k.i,{className:"w-full flex flex-row",children:(0,D.Y)(k.pd,{type:"range",min:t.min,max:t.max,value:t.defValue.toString(),onchange:t.changeHandler})})},K=function(t){return(0,D.FD)(k.JU,{className:"switch",children:[(0,D.Y)(k.pd,{type:"checkbox",checked:t.value,onchange:t.changeHandler}),(0,D.Y)(k.L9,{className:"slider"})]})},B=j((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.Name="SettingsPage",this.ImgName="property",this.Tip="Settings",this.Visible=!1,this.Title=function(){var t=window.editorUI.CenterCanvas.settings.Name;return void 0===t?"Settings":"Settings of ".concat(t)},this.Body=function(){var t=window.editorUI.CenterCanvas.settings;if(console.log("[DEB] Setting of ".concat(t.Name),t.Settings),void 0===t.Name||null==t.Settings)return(0,D.Y)(k.i,{className:"w-full",children:"Empty Setting Page"});var e=[];return t.Settings.forEach((function(t,n){switch(t.type){case r.Nr.Number:if(void 0===t.info||2!==t.info.length)throw new Error("INTERNAL_ERROR: Setting info has wrong type");e.push((0,D.FD)(k.Tr,{className:"w-full",children:[(0,D.Y)(k.Td,{children:t.label}),(0,D.Y)(k.Td,{children:(0,D.Y)(U,{min:t.info[0],max:t.info[1],defValue:t.value,changeHandler:function(e){var r={Settings:new Map([[n,{type:t.type,label:t.label,info:t.info,value:parseInt(e.target.value)}]])};window.editorUI.CenterCanvas.settings=r}})})]}));break;case r.Nr.Color:e.push((0,D.FD)(k.Tr,{className:"w-full",children:[(0,D.Y)(k.Td,{children:t.label}),(0,D.Y)(k.Td,{children:(0,D.Y)(k.pd,{type:"color",value:t.value,onchange:function(e){var r={Settings:new Map([[n,{type:t.type,label:t.label,info:t.info,value:e.target.value}]])};window.editorUI.CenterCanvas.settings=r}})})]}));break;case r.Nr.Boolean:e.push((0,D.FD)(k.Tr,{className:"w-full",children:[(0,D.Y)(k.Td,{children:t.label}),(0,D.Y)(k.Td,{children:(0,D.Y)(K,{value:t.value,changeHandler:function(e){console.log("[DEB] Boolean : ",e.target.value);var r={Settings:new Map([[n,{type:t.type,label:t.label,info:t.info,value:e.target.checked}]])};window.editorUI.CenterCanvas.settings=r}})})]}));break;default:e.push((0,D.FD)(k.i,{className:"w-full",children:["`Unsupported Setting Type $",t.type,"`"]}))}})),(0,D.FD)(k.XI,{className:"w-full b-none align-right",children:[(0,D.FD)(k.Tr,{className:"layers-header",children:[(0,D.Y)(k.Td,{children:"Property"}),(0,D.Y)(k.Td,{children:"Value"})]}),e]})}}));const G=B;function X(t){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,H(r.key),r)}}function H(t){var e=function(t,e){if("object"!=X(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=X(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==X(e)?e:String(e)}const W=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.undo_stk_history=new Array,this.redo_stk_history=new Array}var e,n;return e=t,(n=[{key:"redo",value:function(){if(0===this.redo_stk_history.length)return[{layerID:"",paintToolName:"noop",shapeName:"noop",data:null}];var t=this.redo_stk_history.pop();return this.undo_stk_history.push(t),console.log("undo",this.undo_stk_history,"redo",this.redo_stk_history),t}},{key:"undo",value:function(){if(0===this.undo_stk_history.length)return[{layerID:"",paintToolName:"noop",shapeName:"noop",data:null}];var t=this.undo_stk_history.pop();return this.redo_stk_history.push(t),console.log("undo",this.undo_stk_history,"redo",this.redo_stk_history),t}},{key:"undoList",get:function(){return this.undo_stk_history}},{key:"redoList",get:function(){return this.redo_stk_history}},{key:"add",value:function(t){this.undo_stk_history.push(t),this.redo_stk_history=new Array,console.log("undo",this.undo_stk_history,"redo",this.redo_stk_history)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function $(){$=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),s=new N(r||[]);return i(a,"_invoke",{value:_(t,n,s)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",y="executing",p="completed",v={};function g(){}function w(){}function m(){}var b={};l(b,a,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(I([])));E&&E!==n&&r.call(E,a)&&(b=E);var D=m.prototype=g.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(i,o,a,s){var c=f(t[i],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==V(u)&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,i){n(t,r,e,i)}))}return o=o?o.then(i,i):i()}})}function _(e,n,r){var i=h;return function(o,a){if(i===y)throw new Error("Generator is already running");if(i===p){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var c=k(s,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=y;var l=f(e,n,r);if("normal"===l.type){if(i=r.done?p:d,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=p,r.method="throw",r.arg=l.arg)}}}function k(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=f(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(V(e)+" is not iterable")}return w.prototype=m,i(D,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:w,configurable:!0}),w.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(D),t},e.awrap=function(t){return{__await:t}},L(T.prototype),l(T.prototype,s,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new T(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(D),l(D,c,"Generator"),l(D,a,(function(){return this})),l(D,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=I,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,tt(r.key),r)}}function Q(t,e,n){return e&&J(t.prototype,e),n&&J(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t){var e=function(t,e){if("object"!=V(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==V(e)?e:String(e)}function et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var nt=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},rt=Q((function t(e,n,r,i){var o=this;et(this,t),this.StartFunction=function(t){return nt(o,void 0,void 0,$().mark((function e(){return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=this.draw_func){e.next=4;break}return e.next=3,this.loadModule();case 3:this.draw_func=e.sent;case 4:return t.setFunction(this.draw_func),e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e,this)})))},this.Name=e,this.ImgName=n,this.Tip=r,this.loadModule=i})),it=function(){function t(e,n){var o=this;et(this,t),this.name="EditorCanvas",this.scrollDiv=(0,i.q0)("w-full h-full overflowX-scroll overflowY-scroll relative disable-touch"),this.scaleElement=(0,i.q0)("absolute w-fit h-fit transform-center"),this.backgroundDiv=(0,i.q0)("absolute disable-mouse"),this.draw_func=new r.x9,this.EventFired=!1,this.isPointOut=void 0,this.isUpdate=!1,this.historyMagr=new W,this.undo=function(){var t=o.historyMagr.undo();if(0===t.length)throw new Error("INTERNEL_ERROR: Undo list is empty");t.forEach((function(t){if("noop"!==t.paintToolName){var e=o.LayerManager.Canvas.find(".".concat(t.shapeName));if(0===e.length)throw new Error("INTERNEL_ERROR: Shape not found");e.forEach((function(t){t.hide()}))}}))},this.redo=function(){var t=o.historyMagr.redo();if(0===t.length)throw new Error("INTERNEL_ERROR: Redo list is empty");t.forEach((function(t){if("noop"!==t.paintToolName){var e=o.LayerManager.Canvas.find(".".concat(t.shapeName));if(0===e.length)throw new Error("INTERNEL_ERROR: Shape not found");e.forEach((function(t){t.show()}))}}))},this.initCanvas=function(){o.LayerManager.clear()},this.angleScale={angle:0,scale:1},this.dragMoveListener=function(t,e,n){var r=(parseFloat(e.getAttribute("data-x")||"0")||0)+t.dx,i=(parseFloat(e.getAttribute("data-y")||"0")||0)+t.dy,a=o.normalizeRotate((t.angle||0)+n.angle),s=(t.scale||1)*n.scale;o.transformTo(e,r,i,a,s),e.setAttribute("data-x",r.toString()),e.setAttribute("data-y",i.toString()),o.refreshScaleTip(a,s)},this.isDrawing=!1,this.isDrawRotate=!0,this.layerInfoList=[],this.setLayerInfoList=function(){},this.resizeCanvas=function(t){},this.removeCanvas=function(){},this.render=function(){if(o.EventFired){var t=o.isDrawRotate?o.angleScale.angle:0;o.draw_func.DrawFunction(o.LayerManager.Layer.prev,o.width,o.height,t),void 0!==o.isPointOut&&(void 0!==o.draw_func.PointerOut&&(o.draw_func.PointerOut(o.isPointOut),o.isPointOut=void 0,requestAnimationFrame(o.render)),o.draw_func.DrawFunction(o.LayerManager.Layer.prev,o.width,o.height,t),o.isPointOut=void 0),o.draw_func.CanFinishDrawing&&o.finishDrawing(),requestAnimationFrame(o.render)}o.isPointOut=void 0},this.drawWithTouch=!1,this.toggleTouch=function(){o.drawWithTouch=!o.drawWithTouch},this.open=function(){var t=document.createElement("input");t.setAttribute("type","file"),t.setAttribute("accept","image/*"),t.onchange=function(t){var n=t.currentTarget.files;if(null!==n){var r=new Image,i=URL.createObjectURL(n[0]);r.src=i}else e.close()};var e=new c("Upload A Image",t);e.show()},this.normalizeRotate=function(t){var e=t%360;return e>0?e>180?-360+e:e:e<-180?360+e:e},this.refreshScaleTip=function(t,e){o.scaleTip.updateTip("Rotate : "+t.toFixed(0)+"°, Scale : "+(100*e).toFixed(0)+"%")},this.isCtlKeyDown=!1,this.isShiftDown=!1,this.isAltDown=!1,this.transformTo=function(t,e,n,r,i){t.style.transformOrigin="".concat(o.width/2,"px ").concat(o.height/2,"px"),t.style.transform="translate("+e+"px, "+n+"px)rotate("+r+"deg)scale("+i+")"},this.scaleTo=function(t){var e=t;e>=4&&(e=4),e<=.1&&(e=.1);var n=parseFloat(o.scaleElement.getAttribute("data-x")||"0"),r=parseFloat(o.scaleElement.getAttribute("data-y")||"0");o.angleScale.scale=e,o.refreshScaleTip(o.angleScale.angle,o.angleScale.scale),console.log("Next scale factor = "+o.angleScale.scale),o.transformTo(o.scaleElement,n,r,o.angleScale.angle,o.angleScale.scale)},this.rotateTo=function(t){var e=o.normalizeRotate(t),n=parseFloat(o.scaleElement.getAttribute("data-x")||"0"),r=parseFloat(o.scaleElement.getAttribute("data-y")||"0");o.angleScale.angle=e,o.refreshScaleTip(o.angleScale.angle,o.angleScale.scale),console.log("Next rotate factor = "+o.angleScale.scale),o.transformTo(o.scaleElement,n,r,o.angleScale.angle,o.angleScale.scale)},this.moveTo=function(t,e){o.transformTo(o.scaleElement,t,e,o.angleScale.angle,o.angleScale.scale),o.scaleElement.setAttribute("data-x",t.toString()),o.scaleElement.setAttribute("data-y",e.toString())},this.cvsMouseWheelHandler=function(t){if(o.isCtlKeyDown&&!o.isShiftDown&&!o.isAltDown)return t.preventDefault(),t.deltaY<0?o.scaleTo(o.scaleFactor+.1):t.deltaY>0&&o.scaleTo(o.scaleFactor-.1),void o.render();if(!o.isCtlKeyDown&&!o.isShiftDown&&!o.isAltDown){t.preventDefault();var e=parseFloat(o.scaleElement.getAttribute("data-x")||"0"),n=parseFloat(o.scaleElement.getAttribute("data-y")||"0");return t.deltaY<0?n-=30:t.deltaY>0&&(n+=30),o.transformTo(o.scaleElement,e,n,o.angleScale.angle,o.angleScale.scale),o.scaleElement.setAttribute("data-x",e.toString()),o.scaleElement.setAttribute("data-y",n.toString()),void o.render()}if(!o.isCtlKeyDown&&o.isShiftDown&&!o.isAltDown){t.preventDefault();var r=parseFloat(o.scaleElement.getAttribute("data-x")||"0"),i=parseFloat(o.scaleElement.getAttribute("data-y")||"0");return t.deltaY<0?r+=30:t.deltaY>0&&(r-=30),o.transformTo(o.scaleElement,r,i,o.angleScale.angle,o.angleScale.scale),o.scaleElement.setAttribute("data-x",r.toString()),o.scaleElement.setAttribute("data-y",i.toString()),void o.render()}return o.isCtlKeyDown||o.isShiftDown||!o.isAltDown?void 0:(t.preventDefault(),t.deltaY<0?o.rotateTo(o.angleScale.angle+2):t.deltaY>0&&o.rotateTo(o.angleScale.angle-2),void o.render())},this.docKeydownHandler=function(t){"Control"===t.key&&(t.preventDefault(),o.isCtlKeyDown=!0),"Shift"===t.key&&(t.preventDefault(),o.isShiftDown=!0),"Alt"===t.key&&(t.preventDefault(),o.isAltDown=!0),"+"!==t.key||!o.isCtlKeyDown||o.isShiftDown||o.isAltDown||(t.preventDefault(),o.scaleTo(o.scaleFactor+.1)),"-"!==t.key||!o.isCtlKeyDown||o.isShiftDown||o.isAltDown||(t.preventDefault(),o.scaleTo(o.scaleFactor-.1)),"0"!==t.key||!o.isCtlKeyDown||o.isShiftDown||o.isAltDown||(t.preventDefault(),o.scaleTo(1)),"z"!==t.key||!o.isCtlKeyDown||o.isShiftDown||o.isAltDown||(t.preventDefault(),o.undo()),"y"!==t.key||!o.isCtlKeyDown||o.isShiftDown||o.isAltDown||(t.preventDefault(),o.redo())},this.docKeyupHandler=function(t){"Control"===t.key&&(t.preventDefault(),o.isCtlKeyDown=!1),"Shift"===t.key&&(t.preventDefault(),o.isShiftDown=!1),"Alt"===t.key&&(t.preventDefault(),o.isAltDown=!1)},this.width=e,this.height=n,this.scaleTip=window.editorUI.Statusbar.addTip("",!0),this.refreshScaleTip(0,1),this.cnt=(0,i.q0)("w-full h-full"),this.LayerManager=new O(this.cnt,e,n),this.render_layer=this.LayerManager.Layer,this.LayerManager.addLayerAfter(),this.LayerManager.addLayerAfter(),this.LayerManager.addLayerAfter(),this.LayerManager.addLayerAfter()}return Q(t,[{key:"finishDrawing",value:function(){var t=this,e=this.LayerManager.Layer.diff(),n=this.historyMagr.redoList;console.log("[DEB] Needed Remove Shape List: ",n),n.forEach((function(e){e.forEach((function(e){var n=t.LayerManager.Canvas.find(".".concat(e.shapeName));if(0===n.length)throw new Error("INTERNEL_ERROR: Shape not found");n.forEach((function(t){t.destroy()}))}))})),this.historyMagr.add(e),this.LayerManager.Layer.flush(),this.EventFired=!1,this.isDrawing=!1,this.isPointOut=void 0,this.setLayerInfoList(this.LayerManager.LayerList)}},{key:"attachCanvas",value:function(t){var e=this;console.log("[HOK] Canvas Size ",this.width,this.height),this.backgroundDiv.style.width="".concat(this.width,"px"),this.backgroundDiv.style.height="".concat(this.height,"px"),this.backgroundDiv.style.backgroundColor="white",this.backgroundDiv.id="backgroundDiv";var n=E()(this.cnt,{styleCursor:!1}),r=function(t){console.log("[DEB] isDrawing GestureStart ".concat(f)),f||(console.log("[EUI] Gesture start scale:".concat(t.scale,", angle: ").concat(t.angle)),t.preventDefault(),t.stopPropagation(),l.angle-=t.angle,c.classList.remove("reset"))},i=function(t){console.log("[DEB] isDrawing GestureMove ".concat(f)),f||(console.log("[EUI] Gesture move scale:".concat(t.ds,", angle: ").concat(t.da)),t.angle,l.angle,t.scale,l.scale,u(t,c,l),t.preventDefault(),t.stopPropagation())},o=function(t){f||(console.log("[EUI] Gesture end scale:".concat(t.scale,", angle: ").concat(t.angle)),l.angle=l.angle+t.angle,l.scale=l.scale*t.scale,t.preventDefault(),t.stopPropagation())},a=function(t){f||void 0!==e.isPointOut||u(t,c,l)},s=function(t){var n={X:t.offsetX,Y:t.offsetY,type:t.pointerType||"mouse",pressure:t.pressure};void 0!==e.draw_func.PointerMove&&e.draw_func.PointerMove(n),e.isDrawing=!1,e.isPointOut=n},c=this.scaleElement,l=this.angleScale,u=this.dragMoveListener,f=this.isDrawing;n.gesturable({listeners:{start:r,move:i,end:o}}).draggable({listeners:{move:a}}).on("down",(function(n){if(e.isPointOut=void 0,"touch"===n.pointerType&&!1===window.editorUI.CenterCanvas.canDrawWithTouch)return t.style.touchAction="auto",void(f=!1);t.style.touchAction="none",n.preventDefault(),n.stopPropagation();var r={X:n.offsetX,Y:n.offsetY,type:"mouse",pressure:1};void 0!==e.draw_func.PointerDown&&(e.EventFired=!0,e.draw_func.PointerDown(r),requestAnimationFrame(e.render)),f=!0})).on("move",(function(t){if("touch"!==t.pointerType||!1!==window.editorUI.CenterCanvas.canDrawWithTouch){t.preventDefault(),t.stopPropagation(),(t.offsetX<0||t.offsetX>e.width||t.offsetY<0||t.offsetY>e.height)&&s(t);var n={X:t.offsetX,Y:t.offsetY,type:"mouse",pressure:1};void 0!==e.draw_func.PointerMove&&e.draw_func.PointerMove(n)}})).on("up",(function(n){if("touch"!==n.pointerType||!1!==window.editorUI.CenterCanvas.canDrawWithTouch){t.style.touchAction="none",n.preventDefault(),n.stopPropagation();var r={X:n.offsetX,Y:n.offsetY,type:"mouse",pressure:1};void 0!==e.draw_func.PointerUp&&e.draw_func.PointerUp(r),f=!1}else t.style.touchAction="none"})).on("pointerleave",s),E()(this.scrollDiv,{styleCursor:!1}).gesturable({listeners:{start:r,move:i,end:o}}).draggable({listeners:{move:a}}).on("down",(function(t){f=!1,e.isPointOut=void 0})).on("up",(function(t){"touch"===t.pointerType&&(f=!1,e.isPointOut=void 0)})),t.addEventListener("wheel",this.cvsMouseWheelHandler),window.addEventListener("keydown",this.docKeydownHandler),window.addEventListener("keyup",this.docKeyupHandler),this.scaleElement.appendChild(this.backgroundDiv),this.scaleElement.appendChild(this.cnt),this.scrollDiv.appendChild(this.scaleElement),t.appendChild(this.scrollDiv),this.initCanvas();var h,d,y=(h=(0,x.Dz)("editor.layer.info.list",[]),d=2,function(t){if(Array.isArray(t))return t}(h)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,a,s=[],c=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){l=!0,i=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw i}}return s}}(h,d)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}(h,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());this.layerInfoList=y[0],this.setLayerInfoList=y[1],this.setLayerInfoList(this.LayerManager.LayerList)}},{key:"enableDrag",value:function(){this.cnt.style.touchAction="auto"}},{key:"disableDrag",value:function(){this.cnt.style.touchAction="none"}},{key:"setFunction",value:function(t){console.log("setFunction",t),this.draw_func=t,void 0!==t.CursorName&&(["alias","all-scroll","auto","cell","col-resize","context-menu","copy","crosshair","default","e-resize","ew-resize","grab","grabbing","help","move","n-resize","ne-resize","nesw-resize","ns-resize","nw-resize","nwse-resize","no-drop","none","not-allowed","pointer","progress","row-resize","s-resize","se-resize","sw-resize","text","w-resize","wait","zoom-in","zoom-out"].includes(t.CursorName)?(console.log("CursorName ".concat(t.CursorName," in list")),this.cnt.style.cursor=t.CursorName):(console.log("CursorName ".concat(t.CursorName," not in list")),this.cnt.style.cursor="url(img/cursor/"+t.CursorName+".cur), auto"),window.editorUI.forceRerender())}},{key:"canDrawWithTouch",get:function(){return this.drawWithTouch}},{key:"save",value:function(){var t=this,e=(0,i.n5)("ok_btn","OK"),n=(0,i.a$)("txt"),r=new c("Enter the name of image",(0,i.q0)("w-fit flex flex-row",[n,(0,i.BS)("whitespace","  .png "),e]));e.onclick=function(){var e,i,o;e=t.LayerManager.Canvas.toDataURL(),i=n.value,(o=document.createElement("a")).download=i,o.href=e,o.click(),r.close()},r.show()}},{key:"clear",value:function(){var t=this,e=(0,i.n5)("w-full mx-2rem","Cancel");e.onclick=function(){r.close()};var n=(0,i.n5)("w-full mx-2rem","OK");n.onclick=function(){t.initCanvas(),r.close()};var r=new c("Do you want to clear the canvas ?",(0,i.q0)("w-full flex flex-row",[e,n]));r.show()}},{key:"scaleFactor",get:function(){return this.angleScale.scale}},{key:"settings",get:function(){return void 0===this.draw_func.Settings?{}:this.draw_func.Settings},set:function(t){void 0!==this.draw_func.Settings&&(this.draw_func.Settings=t)}}]),t}();const ot=function(){function t(){var e=this;et(this,t),this.Enable=!0,this.CenterCanvas=new it(1920,1080),this.MenuToolbarLeft=[new y,new p,new v,new rt("Eraser","eraser","Eraser",(function(){return nt(e,void 0,void 0,$().mark((function t(){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(522).then(n.bind(n,9230));case 2:return t.t0=t.sent.default,t.abrupt("return",new t.t0);case 4:case"end":return t.stop()}}),t)})))}))],this.MenuToolbarRight=[new m,new b,new w,new g],this.LeftToolbarTop=[new rt("Brush","brush","Brush",(function(){return nt(e,void 0,void 0,$().mark((function t(){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(214).then(n.bind(n,1176));case 2:return t.t0=t.sent.default,t.abrupt("return",new t.t0);case 4:case"end":return t.stop()}}),t)})))})),new rt("Line","line","Line",(function(){return nt(e,void 0,void 0,$().mark((function t(){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(248).then(n.bind(n,208));case 2:return t.t0=t.sent.default,t.abrupt("return",new t.t0);case 4:case"end":return t.stop()}}),t)})))})),new rt("Circle","circle","Circle",(function(){return nt(e,void 0,void 0,$().mark((function t(){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(756).then(n.bind(n,2986));case 2:return t.t0=t.sent.CircleCVSFunc,t.abrupt("return",new t.t0);case 4:case"end":return t.stop()}}),t)})))})),new rt("Triangle","triangle","Triangle",(function(){return nt(e,void 0,void 0,$().mark((function t(){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(756).then(n.bind(n,2986));case 2:return t.t0=t.sent.TriangleCVSFunc,t.abrupt("return",new t.t0);case 4:case"end":return t.stop()}}),t)})))})),new rt("Rectangle","rectangle","Rectangle",(function(){return nt(e,void 0,void 0,$().mark((function t(){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(756).then(n.bind(n,2986));case 2:return t.t0=t.sent.RectangleCVSFunc,t.abrupt("return",new t.t0);case 4:case"end":return t.stop()}}),t)})))}))],this.RightToolbarTop=[new R,new G]}return Q(t,[{key:"StartMode",value:function(){}},{key:"EndMode",value:function(){}}]),t}()}}]);