/*! For license information please see modeEditor.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[]).push([[913],{9194:(e,t,n)=>{n.r(t),n.d(t,{EditorCanvas:()=>oe,btnCanvas:()=>re,default:()=>ie});var r=n(1216),o=n(5272);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function s(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:String(t)}const c=function(){function e(t,n,r){var i,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dialog=(0,o.q0)("TD_Background",(0,o.q0)("Top_Dialog",[(0,o.q0)("TD_Header",[(0,o.BS)("TD_Title",t),(i=(0,o.BS)("TD_BtnDialogCloss","X"),i.addEventListener("click",void 0!==r?function(e){r(e),a.close()}:function(){return a.close()}),i)]),(0,o.q0)("TD_Body",n)]))}var t,n;return t=e,(n=[{key:"ShowDialog",value:function(){var e=document.body;this.dialog.style.display="flex",e.appendChild(this.dialog)}},{key:"CloseDialog",value:function(){this.dialog.style.display="none"}},{key:"show",value:function(){this.ShowDialog()}},{key:"close",value:function(){this.CloseDialog()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function h(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:String(t)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var y=h((function e(){d(this,e),this.Name="btn_undo",this.ImgName="undo",this.Tip="Undo",this.StartFunction=function(e){return e.undo(),!1}})),p=h((function e(){d(this,e),this.Name="btn_redo",this.ImgName="redo",this.Tip="Redo",this.StartFunction=function(e){return e.redo(),!1}})),v=h((function e(){d(this,e),this.Name="btn_clear",this.ImgName="clear",this.Tip="Clear the canvas",this.StartFunction=function(e){return e.clear(),!1}})),g=h((function e(){d(this,e),this.Name="btn_save",this.ImgName="save",this.Tip="Download a image",this.StartFunction=function(e){return e.save(),!1}})),w=h((function e(){d(this,e),this.Name="btn_touch",this.ImgName="toggleTouch",this.Tip="Toggle Touch / Pen",this.StartFunction=function(e){return e.toggleTouch(),!1}})),m=h((function e(){d(this,e),this.Name="btn_reset_scale",this.ImgName="resetScale",this.Tip="Reset scale to 100%",this.StartFunction=function(e){return e.scaleTo(1),!1}})),b=h((function e(){d(this,e),this.Name="btn_reset_rotate",this.ImgName="resetRotate",this.Tip="Reset rotate to 0°",this.StartFunction=function(e){return e.rotateTo(0),!1}})),S=n(1749),T=n.n(S),L=n(4150),_=n(5615),D=n.n(_),k=n(9863),P=n(2545),x=n(4515);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,I(r.key),r)}}function N(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function I(e){var t=function(e,t){if("object"!=E(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==E(t)?t:String(t)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var R=function(){function e(t,n,r){M(this,e),this.layerList=new Map,this.id2zIndex=new Map,this.cvs=new(D().Stage)({container:t,width:n,height:r}),this.ctx=new(D().Layer),this.cvs.add(this.ctx),this.defaultLayer=this.addLayer(),this.id2zIndex.set(this.defaultLayer,0)}return N(e,[{key:"addLayer",value:function(){var e=(0,k.A)(),t=new O(e,"Layer ".concat(this.layerList.size+1));return this.layerList.set(e,t),this.ctx.add(t.prev),this.ctx.add(t.render),e}},{key:"addLayerAfter",value:function(){var e=this,t=this.addLayer(),n=this.id2zIndex.get(this.defaultLayer);if(void 0===n)throw new Error("INTERNAL_ERROR: ZIndex of layer is missing.");return this.id2zIndex.forEach((function(t,r){t>=n&&e.id2zIndex.set(r,t+1)})),this.id2zIndex.set(t,n),this.layerList.forEach((function(t,n){var r=e.id2zIndex.get(n);if(void 0===r)throw new Error("INTERNAL_ERROR: ZIndex of layer is missing.");t.zIndex=r})),this.defaultLayer=t,t}},{key:"changeTo",value:function(e){if(!this.layerList.has(e))throw new Error("Layer ".concat(e," not exist"));this.defaultLayer=e,window.editorUI.forceRerender()}},{key:"Canvas",get:function(){return this.cvs}},{key:"Layer",get:function(){var e=this.defaultLayer;if(!this.layerList.has(e))throw new Error("Layer ".concat(e," not exist"));return this.layerList.get(e)}},{key:"LayerList",get:function(){var e=[];return this.layerList.forEach((function(t){return e.push({Snapshot:t.Preview,Name:t.Name,ID:t.ID})})),e}},{key:"clear",value:function(){console.log("[EUI] Layer clear"),this.layerList.forEach((function(e){return e.clear()}))}},{key:"resize",value:function(e,t){this.cvs.width(e),this.cvs.height(t)}},{key:"moveTo",value:function(e,t){this.ctx.position({x:e,y:t})}},{key:"scaleTo",value:function(e){this.ctx.scale({x:e,y:e})}},{key:"rotateTo",value:function(e){this.ctx.rotation(e)}}]),e}(),O=function(){function e(t,n){M(this,e),this._previewImage="",this._isPreview=!1,this._id=t,this._name=n,this._render=new(D().Group)({name:"render_".concat(t)}),this._prev=new(D().Group)({name:"prev_".concat(t)})}return N(e,[{key:"ID",get:function(){return this._id}},{key:"Name",get:function(){return this._name}},{key:"zIndex",get:function(){return this._render.zIndex/2},set:function(e){this._render.setZIndex(2*e),this._prev.setZIndex(2*e+1)}},{key:"content",value:function(){return this._render.children}},{key:"merge",value:function(e){var t=this;this._isPreview=!1,e.content().forEach((function(e){t._render.add(e)}))}},{key:"Preview",get:function(){return this._previewImage=this._render.toDataURL(),this._previewImage}},{key:"diff",value:function(){var e=this,t=[];return this._prev.children.forEach((function(n){var r={layerID:e._id,paintToolName:n.className,shapeName:n.name(),data:n.attrs};console.log("[DEB] Diff : ",r),t.push(r)})),t}},{key:"flush",value:function(){var e=this;this._isPreview=!1,this._prev.children.forEach((function(t){e._render.add(t)})),this._prev.destroyChildren()}},{key:"add",value:function(e){this._isPreview=!1,this._render.add(e)}},{key:"clear",value:function(){this._prev.destroyChildren(),this._render.destroyChildren(),this._isPreview=!1}},{key:"render",get:function(){return this._render}},{key:"prev",get:function(){return this._prev}}]),e}();const A=N((function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];M(this,e),this.Name="LayerMgrSidebar",this.ImgName="layer",this.Tip="Layer Manager",this.Visible=!1,this.Title=function(){return"Layer"},this.Body=function(){if(t.Visible){var e=(0,x.Ex)("editor.layer.info.list");console.log("[EUI] LayerMgrSidebar : ",e);var n=function(e,t,n){var r;return(0,L.FD)(P.Tr,{className:e,onclick:function(e){window.editorUI.CenterCanvas.LayerManager.changeTo(n.ID)},children:[(0,L.Y)(P.Td,{children:"".concat(t).padStart(6)}),(0,L.Y)(P.Td,{children:(r=n.Snapshot,(0,L.Y)(P.E9,{$style:{maxWidth:"96px",maxHeight:"54px"},src:r}))}),(0,L.Y)(P.Td,{children:n.Name})]})},r=window.editorUI.CenterCanvas.LayerManager.Layer.ID,o=e.map((function(e,t){return e.ID===r?n("editted-layer",t,e):n("normal-layer",t,e)}));return(0,L.FD)(P.XI,{className:"w-full b-none align-right",children:[(0,L.FD)(P.Tr,{className:"layers-header",children:[(0,L.Y)(P.Td,{children:"Index"}),(0,L.Y)(P.Td,{children:"Preview"}),(0,L.Y)(P.Td,{children:"Name"})]}),o]})}return(0,L.Y)(P.i,{})},this.Visible=n}));function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,z(r.key),r)}}function j(e,t,n){return t&&Y(e.prototype,t),n&&Y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function z(e){var t=function(e,t){if("object"!=F(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==F(t)?t:String(t)}var U=function(e){return(0,L.Y)(P.i,{className:"w-full flex flex-row",children:(0,L.Y)(P.pd,{type:"range",min:e.min,max:e.max,value:e.defValue.toString(),onchange:e.changeHandler})})},K=function(e){return(0,L.FD)(P.JU,{className:"switch",children:[(0,L.Y)(P.pd,{type:"checkbox",checked:e.value,onchange:e.changeHandler}),(0,L.Y)(P.L9,{className:"slider"})]})},B=j((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.Name="SettingsPage",this.ImgName="property",this.Tip="Settings",this.Visible=!1,this.Title=function(){var e=window.editorUI.CenterCanvas.settings.Name;return void 0===e?"Settings":"Settings of ".concat(e)},this.Body=function(){var e=window.editorUI.CenterCanvas.settings;if(console.log("[DEB] Setting of ".concat(e.Name),e.Settings),void 0===e.Name||null==e.Settings)return(0,L.Y)(P.i,{className:"w-full",children:"Empty Setting Page"});var t=[];return e.Settings.forEach((function(e,n){switch(e.type){case r.Nr.Number:if(void 0===e.info||2!==e.info.length)throw new Error("INTERNAL_ERROR: Setting info has wrong type");t.push((0,L.FD)(P.Tr,{className:"w-full",children:[(0,L.Y)(P.Td,{children:e.label}),(0,L.Y)(P.Td,{children:(0,L.Y)(U,{min:e.info[0],max:e.info[1],defValue:e.value,changeHandler:function(t){var r={Settings:new Map([[n,{type:e.type,label:e.label,info:e.info,value:parseInt(t.target.value)}]])};window.editorUI.CenterCanvas.settings=r}})})]}));break;case r.Nr.Color:t.push((0,L.FD)(P.Tr,{className:"w-full",children:[(0,L.Y)(P.Td,{children:e.label}),(0,L.Y)(P.Td,{children:(0,L.Y)(P.pd,{type:"color",value:e.value,onchange:function(t){var r={Settings:new Map([[n,{type:e.type,label:e.label,info:e.info,value:t.target.value}]])};window.editorUI.CenterCanvas.settings=r}})})]}));break;case r.Nr.Boolean:t.push((0,L.FD)(P.Tr,{className:"w-full",children:[(0,L.Y)(P.Td,{children:e.label}),(0,L.Y)(P.Td,{children:(0,L.Y)(K,{value:e.value,changeHandler:function(t){console.log("[DEB] Boolean : ",t.target.value);var r={Settings:new Map([[n,{type:e.type,label:e.label,info:e.info,value:t.target.checked}]])};window.editorUI.CenterCanvas.settings=r}})})]}));break;default:t.push((0,L.FD)(P.i,{className:"w-full",children:["`Unsupported Setting Type $",e.type,"`"]}))}})),(0,L.FD)(P.XI,{className:"w-full b-none align-right",children:[(0,L.FD)(P.Tr,{className:"layers-header",children:[(0,L.Y)(P.Td,{children:"Property"}),(0,L.Y)(P.Td,{children:"Value"})]}),t]})}}));const H=B;function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,V(r.key),r)}}function V(e){var t=function(e,t){if("object"!=G(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==G(t)?t:String(t)}const X=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.undo_stk_history=new Array,this.redo_stk_history=new Array}var t,n;return t=e,(n=[{key:"redo",value:function(){if(0===this.redo_stk_history.length)return[{layerID:"",paintToolName:"noop",shapeName:"noop",data:null}];var e=this.redo_stk_history.pop();return this.undo_stk_history.push(e),console.log("undo",this.undo_stk_history,"redo",this.redo_stk_history),e}},{key:"undo",value:function(){if(0===this.undo_stk_history.length)return[{layerID:"",paintToolName:"noop",shapeName:"noop",data:null}];var e=this.undo_stk_history.pop();return this.redo_stk_history.push(e),console.log("undo",this.undo_stk_history,"redo",this.redo_stk_history),e}},{key:"undoList",get:function(){return this.undo_stk_history}},{key:"redoList",get:function(){return this.redo_stk_history}},{key:"add",value:function(e){this.undo_stk_history.push(e),this.redo_stk_history=new Array,console.log("undo",this.undo_stk_history,"redo",this.redo_stk_history)}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(){$=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),s=new C(r||[]);return o(a,"_invoke",{value:k(e,n,s)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",y="executing",p="completed",v={};function g(){}function w(){}function m(){}var b={};l(b,a,(function(){return this}));var S=Object.getPrototypeOf,T=S&&S(S(N([])));T&&T!==n&&r.call(T,a)&&(b=T);var L=m.prototype=g.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function D(e,t){function n(o,i,a,s){var c=h(e[o],e,i);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==q(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(u).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function k(t,n,r){var o=f;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=P(s,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=h(t,n,r);if("normal"===l.type){if(o=r.done?p:d,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=p,r.method="throw",r.arg=l.arg)}}}function P(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=h(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(q(t)+" is not iterable")}return w.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:w,configurable:!0}),w.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},_(D.prototype),l(D.prototype,s,(function(){return this})),t.AsyncIterator=D,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new D(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(L),l(L,c,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ee(r.key),r)}}function Q(e,t,n){return t&&J(e.prototype,t),n&&J(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e){var t=function(e,t){if("object"!=q(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==q(t)?t:String(t)}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ne=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},re=Q((function e(t,n,r,o){var i=this;te(this,e),this.StartFunction=function(e){return ne(i,void 0,void 0,$().mark((function t(){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=this.draw_func){t.next=4;break}return t.next=3,this.loadModule();case 3:this.draw_func=t.sent;case 4:return e.setFunction(this.draw_func),t.abrupt("return",!0);case 6:case"end":return t.stop()}}),t,this)})))},this.Name=t,this.ImgName=n,this.Tip=r,this.loadModule=o})),oe=function(){function e(t,n){var i=this;te(this,e),this.name="EditorCanvas",this.backgroundDiv=(0,o.q0)("absolute disable-mouse"),this.draw_func=new r.x9,this.EventFired=!1,this.isPointOut=void 0,this.isUpdate=!1,this.historyMagr=new X,this.undo=function(){var e=i.historyMagr.undo();if(0===e.length)throw new Error("INTERNEL_ERROR: Undo list is empty");e.forEach((function(e){if("noop"!==e.paintToolName){var t=i.LayerManager.Canvas.find(".".concat(e.shapeName));if(0===t.length)throw new Error("INTERNEL_ERROR: Shape not found");t.forEach((function(e){e.hide()}))}}))},this.redo=function(){var e=i.historyMagr.redo();if(0===e.length)throw new Error("INTERNEL_ERROR: Redo list is empty");e.forEach((function(e){if("noop"!==e.paintToolName){var t=i.LayerManager.Canvas.find(".".concat(e.shapeName));if(0===t.length)throw new Error("INTERNEL_ERROR: Shape not found");t.forEach((function(e){e.show()}))}}))},this.initCanvas=function(){i.LayerManager.clear()},this.angleScalePos={angle:0,scale:1,pos:{x:0,y:0}},this.dragMoveListener=function(e,t,n){i.angleScalePos.pos.x=i.angleScalePos.pos.x+e.dx,i.angleScalePos.pos.y=i.angleScalePos.pos.y+e.dy,i.rotateTo(n.angle),i.scaleTo(n.scale),i.moveTo(i.angleScalePos.pos.x,i.angleScalePos.pos.y),i.refreshScaleTip(n.angle,n.scale)},this.isDrawing=!1,this.isDrawRotate=!0,this.layerInfoList=[],this.setLayerInfoList=function(){},this.resizeCanvas=function(e){i.backgroundDiv.style.width="".concat(window.innerWidth,"px"),i.backgroundDiv.style.height="".concat(window.innerHeight,"px"),i.LayerManager.resize(window.innerWidth,window.innerHeight)},this.removeCanvas=function(){},this.render=function(){if(i.EventFired){var e=i.isDrawRotate?i.angleScalePos.angle:0;i.draw_func.DrawFunction(i.LayerManager.Layer.prev,i.width,i.height,e),void 0!==i.isPointOut&&(void 0!==i.draw_func.PointerOut&&(i.draw_func.PointerOut(i.isPointOut),i.isPointOut=void 0,requestAnimationFrame(i.render)),i.draw_func.DrawFunction(i.LayerManager.Layer.prev,i.width,i.height,e),i.isPointOut=void 0),i.draw_func.CanFinishDrawing&&i.finishDrawing(),requestAnimationFrame(i.render)}i.isPointOut=void 0},this.drawWithTouch=!1,this.toggleTouch=function(){i.drawWithTouch=!i.drawWithTouch},this.open=function(){var e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.onchange=function(e){var n=e.currentTarget.files;if(null!==n){var r=new Image,o=URL.createObjectURL(n[0]);r.src=o}else t.close()};var t=new c("Upload A Image",e);t.show()},this.normalizeRotate=function(e){var t=e%360;return t>0?t>180?-360+t:t:t<-180?360+t:t},this.refreshScaleTip=function(e,t){i.scaleTip.updateTip("Rotate : "+e.toFixed(0)+"°, Scale : "+(100*t).toFixed(0)+"%")},this.isCtlKeyDown=!1,this.isShiftDown=!1,this.isAltDown=!1,this.scaleTo=function(e){var t=e;t>=4&&(t=4),t<=.1&&(t=.1),i.angleScalePos.scale=t,i.refreshScaleTip(i.angleScalePos.angle,i.angleScalePos.scale),i.LayerManager.scaleTo(t)},this.rotateTo=function(e){var t=i.normalizeRotate(e);i.angleScalePos.angle=t,i.refreshScaleTip(i.angleScalePos.angle,i.angleScalePos.scale),i.LayerManager.rotateTo(t)},this.moveTo=function(e,t){i.angleScalePos.pos.x=e,i.angleScalePos.pos.y=t,i.LayerManager.moveTo(e,t)},this.cvsMouseWheelHandler=function(e){return!i.isCtlKeyDown||i.isShiftDown||i.isAltDown?i.isCtlKeyDown||i.isShiftDown||i.isAltDown?i.isCtlKeyDown||!i.isShiftDown||i.isAltDown?i.isCtlKeyDown||i.isShiftDown||!i.isAltDown?void 0:(e.preventDefault(),e.deltaY<0?i.rotateTo(i.angleScalePos.angle+2):e.deltaY>0&&i.rotateTo(i.angleScalePos.angle-2),void i.render()):(e.preventDefault(),e.deltaY<0?i.moveTo(i.angleScalePos.pos.x+30,i.angleScalePos.pos.y):e.deltaY>0&&i.moveTo(i.angleScalePos.pos.x-30,i.angleScalePos.pos.y),void i.render()):(e.preventDefault(),e.deltaY<0?i.moveTo(i.angleScalePos.pos.x,i.angleScalePos.pos.y+30):e.deltaY>0&&i.moveTo(i.angleScalePos.pos.x,i.angleScalePos.pos.y-30),void i.render()):(e.preventDefault(),e.deltaY<0?i.scaleTo(i.angleScalePos.scale+.1):e.deltaY>0&&i.scaleTo(i.angleScalePos.scale-.1),void i.render())},this.docKeydownHandler=function(e){"Control"===e.key&&(e.preventDefault(),i.isCtlKeyDown=!0),"Shift"===e.key&&(e.preventDefault(),i.isShiftDown=!0),"Alt"===e.key&&(e.preventDefault(),i.isAltDown=!0),"+"!==e.key||!i.isCtlKeyDown||i.isShiftDown||i.isAltDown||(e.preventDefault(),i.scaleTo(i.scaleFactor+.1)),"-"!==e.key||!i.isCtlKeyDown||i.isShiftDown||i.isAltDown||(e.preventDefault(),i.scaleTo(i.scaleFactor-.1)),"0"!==e.key||!i.isCtlKeyDown||i.isShiftDown||i.isAltDown||(e.preventDefault(),i.scaleTo(1)),"z"!==e.key||!i.isCtlKeyDown||i.isShiftDown||i.isAltDown||(e.preventDefault(),i.undo()),"y"!==e.key||!i.isCtlKeyDown||i.isShiftDown||i.isAltDown||(e.preventDefault(),i.redo())},this.docKeyupHandler=function(e){"Control"===e.key&&(e.preventDefault(),i.isCtlKeyDown=!1),"Shift"===e.key&&(e.preventDefault(),i.isShiftDown=!1),"Alt"===e.key&&(e.preventDefault(),i.isAltDown=!1)},this.width=t,this.height=n,this.scaleTip=window.editorUI.Statusbar.addTip("",!0),this.refreshScaleTip(0,1),this.cnt=(0,o.q0)("w-full h-full"),this.LayerManager=new R(this.cnt,window.innerWidth,window.innerHeight),this.render_layer=this.LayerManager.Layer,this.LayerManager.addLayerAfter(),this.LayerManager.addLayerAfter(),this.LayerManager.addLayerAfter(),this.LayerManager.addLayerAfter()}return Q(e,[{key:"finishDrawing",value:function(){var e=this,t=this.LayerManager.Layer.diff(),n=this.historyMagr.redoList;console.log("[DEB] Needed Remove Shape List: ",n),n.forEach((function(t){t.forEach((function(t){var n=e.LayerManager.Canvas.find(".".concat(t.shapeName));if(0===n.length)throw new Error("INTERNEL_ERROR: Shape not found");n.forEach((function(e){e.destroy()}))}))})),this.historyMagr.add(t),this.LayerManager.Layer.flush(),this.EventFired=!1,this.isDrawing=!1,this.isPointOut=void 0,this.setLayerInfoList(this.LayerManager.LayerList)}},{key:"attachCanvas",value:function(e){var t=this;console.log("[HOK] Canvas Size ",this.width,this.height),this.backgroundDiv.style.width="".concat(window.innerWidth,"px"),this.backgroundDiv.style.height="".concat(window.innerHeight,"px"),this.backgroundDiv.style.backgroundColor="white",this.backgroundDiv.id="backgroundDiv";var n=T()(this.cnt,{styleCursor:!1}),r=0,o=1,i=function(e){var n=(e.offsetX-t.angleScalePos.pos.x)/t.angleScalePos.scale,r=(e.offsetY-t.angleScalePos.pos.y)/t.angleScalePos.scale,o=-a.angle/180*Math.PI,i={X:n*Math.cos(o)-r*Math.sin(o),Y:n*Math.sin(o)+r*Math.cos(o),type:e.pointerType||"mouse",pressure:e.pressure};void 0!==t.draw_func.PointerMove&&t.draw_func.PointerMove(i),t.isDrawing=!1,t.isPointOut=i},a=this.angleScalePos,s=this.dragMoveListener,c=this.isDrawing;n.gesturable({listeners:{start:function(e){console.log("[DEB] isDrawing GestureStart ".concat(c)),c||(console.log("[CVS] Gesture start scale:".concat(e.scale,", angle: ").concat(e.angle)),e.preventDefault(),e.stopPropagation(),r=a.angle-e.angle,o=e.scale,t.cnt.classList.remove("reset"))},move:function(e){console.log("[DEB] isDrawing GestureMove ".concat(c)),c||(console.log("[CVS] Gesture move scale:".concat(e.ds,", angle: ").concat(e.da)),a.angle=t.normalizeRotate(e.angle+r),a.scale=e.scale*o,s(e,t.cnt,a),e.preventDefault(),e.stopPropagation())},end:function(e){c||(console.log("[CVS] Gesture end scale:".concat(e.scale,", angle: ").concat(e.angle)),a.angle=t.normalizeRotate(r+e.angle),a.scale=e.scale*o,e.preventDefault(),e.stopPropagation())}}}).draggable({listeners:{move:function(e){c||void 0!==t.isPointOut||s(e,t.cnt,a)}}}).on("down",(function(n){if(t.isPointOut=void 0,"touch"===n.pointerType&&!1===window.editorUI.CenterCanvas.canDrawWithTouch)return e.style.touchAction="auto",void(c=!1);e.style.touchAction="none",n.preventDefault(),n.stopPropagation();var r=(n.offsetX-t.angleScalePos.pos.x)/t.angleScalePos.scale,o=(n.offsetY-t.angleScalePos.pos.y)/t.angleScalePos.scale,i=-a.angle/180*Math.PI,s={X:r*Math.cos(i)-o*Math.sin(i),Y:r*Math.sin(i)+o*Math.cos(i),type:"mouse",pressure:1};void 0!==t.draw_func.PointerDown&&(t.EventFired=!0,t.draw_func.PointerDown(s),requestAnimationFrame(t.render)),c=!0})).on("move",(function(e){if("touch"!==e.pointerType||!1!==window.editorUI.CenterCanvas.canDrawWithTouch){e.preventDefault(),e.stopPropagation(),(e.offsetX<0||e.offsetX>t.width||e.offsetY<0||e.offsetY>t.height)&&i(e);var n=(e.offsetX-t.angleScalePos.pos.x)/t.angleScalePos.scale,r=(e.offsetY-t.angleScalePos.pos.y)/t.angleScalePos.scale,o=-a.angle/180*Math.PI,s={X:n*Math.cos(o)-r*Math.sin(o),Y:n*Math.sin(o)+r*Math.cos(o),type:"mouse",pressure:1};void 0!==t.draw_func.PointerMove&&t.draw_func.PointerMove(s)}})).on("up",(function(n){if("touch"!==n.pointerType||!1!==window.editorUI.CenterCanvas.canDrawWithTouch){e.style.touchAction="none",n.preventDefault(),n.stopPropagation();var r=(n.offsetX-t.angleScalePos.pos.x)/t.angleScalePos.scale,o=(n.offsetY-t.angleScalePos.pos.y)/t.angleScalePos.scale,i=-a.angle/180*Math.PI,s={X:r*Math.cos(i)-o*Math.sin(i),Y:r*Math.sin(i)+o*Math.cos(i),type:"mouse",pressure:1};void 0!==t.draw_func.PointerUp&&t.draw_func.PointerUp(s),c=!1}else e.style.touchAction="none"})).on("pointerleave",i),e.addEventListener("wheel",this.cvsMouseWheelHandler),window.addEventListener("keydown",this.docKeydownHandler),window.addEventListener("keyup",this.docKeyupHandler),e.appendChild(this.backgroundDiv),e.appendChild(this.cnt),this.initCanvas();var l,u,h=(l=(0,x.Dz)("editor.layer.info.list",[]),u=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(l,u)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(l,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());this.layerInfoList=h[0],this.setLayerInfoList=h[1],this.setLayerInfoList(this.LayerManager.LayerList)}},{key:"enableDrag",value:function(){this.cnt.style.touchAction="auto"}},{key:"disableDrag",value:function(){this.cnt.style.touchAction="none"}},{key:"setFunction",value:function(e){console.log("setFunction",e),this.draw_func=e,void 0!==e.CursorName&&(["alias","all-scroll","auto","cell","col-resize","context-menu","copy","crosshair","default","e-resize","ew-resize","grab","grabbing","help","move","n-resize","ne-resize","nesw-resize","ns-resize","nw-resize","nwse-resize","no-drop","none","not-allowed","pointer","progress","row-resize","s-resize","se-resize","sw-resize","text","w-resize","wait","zoom-in","zoom-out"].includes(e.CursorName)?(console.log("CursorName ".concat(e.CursorName," in list")),this.cnt.style.cursor=e.CursorName):(console.log("CursorName ".concat(e.CursorName," not in list")),this.cnt.style.cursor="url(img/cursor/"+e.CursorName+".cur), auto"),window.editorUI.forceRerender())}},{key:"canDrawWithTouch",get:function(){return this.drawWithTouch}},{key:"save",value:function(){var e=this,t=(0,o.n5)("ok_btn","OK"),n=(0,o.a$)("txt"),r=new c("Enter the name of image",(0,o.q0)("w-fit flex flex-row",[n,(0,o.BS)("whitespace","  .png "),t]));t.onclick=function(){var t,o,i;t=e.LayerManager.Canvas.toDataURL(),o=n.value,(i=document.createElement("a")).download=o,i.href=t,i.click(),r.close()},r.show()}},{key:"clear",value:function(){var e=this,t=(0,o.n5)("w-full mx-2rem","Cancel");t.onclick=function(){r.close()};var n=(0,o.n5)("w-full mx-2rem","OK");n.onclick=function(){e.initCanvas(),r.close()};var r=new c("Do you want to clear the canvas ?",(0,o.q0)("w-full flex flex-row",[t,n]));r.show()}},{key:"scaleFactor",get:function(){return this.angleScalePos.scale}},{key:"settings",get:function(){return void 0===this.draw_func.Settings?{}:this.draw_func.Settings},set:function(e){void 0!==this.draw_func.Settings&&(this.draw_func.Settings=e)}}]),e}();const ie=function(){function e(){var t=this;te(this,e),this.Enable=!0,this.CenterCanvas=new oe(1920,1080),this.MenuToolbarLeft=[new y,new p,new v,new re("Eraser","eraser","Eraser",(function(){return ne(t,void 0,void 0,$().mark((function e(){return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(522).then(n.bind(n,9230));case 2:return e.t0=e.sent.default,e.abrupt("return",new e.t0);case 4:case"end":return e.stop()}}),e)})))}))],this.MenuToolbarRight=[new m,new b,new w,new g],this.LeftToolbarTop=[new re("Brush","brush","Brush",(function(){return ne(t,void 0,void 0,$().mark((function e(){return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(214).then(n.bind(n,1176));case 2:return e.t0=e.sent.default,e.abrupt("return",new e.t0);case 4:case"end":return e.stop()}}),e)})))})),new re("Line","line","Line",(function(){return ne(t,void 0,void 0,$().mark((function e(){return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(248).then(n.bind(n,208));case 2:return e.t0=e.sent.default,e.abrupt("return",new e.t0);case 4:case"end":return e.stop()}}),e)})))})),new re("Circle","circle","Circle",(function(){return ne(t,void 0,void 0,$().mark((function e(){return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(756).then(n.bind(n,2986));case 2:return e.t0=e.sent.CircleCVSFunc,e.abrupt("return",new e.t0);case 4:case"end":return e.stop()}}),e)})))})),new re("Triangle","triangle","Triangle",(function(){return ne(t,void 0,void 0,$().mark((function e(){return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(756).then(n.bind(n,2986));case 2:return e.t0=e.sent.TriangleCVSFunc,e.abrupt("return",new e.t0);case 4:case"end":return e.stop()}}),e)})))})),new re("Rectangle","rectangle","Rectangle",(function(){return ne(t,void 0,void 0,$().mark((function e(){return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(756).then(n.bind(n,2986));case 2:return e.t0=e.sent.RectangleCVSFunc,e.abrupt("return",new e.t0);case 4:case"end":return e.stop()}}),e)})))}))],this.RightToolbarTop=[new A,new H]}return Q(e,[{key:"StartMode",value:function(){}},{key:"EndMode",value:function(){}}]),e}()}}]);