"use strict";(self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[]).push([[664],{5348:(t,e,r)=>{r.r(e),r.d(e,{default:()=>y});var o=r(232),n=r.n(o),i=r(6039),u=r(8696);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,a(o.key),o)}}function a(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:String(e)}function c(t,e,r){return e=p(e),function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,f()?Reflect.construct(e,r||[],p(t).constructor):e.apply(t,r))}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}const y=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=c(this,e,arguments)).Name="Line",t.HistoryName="line",t.Tip="Line",t.ImgName="line",t.CursorName="crosshair",t.BrushColor="#00FF00",t.BrushWidth=10,t.DrawFunction=function(e,r,o){var i=e.find(".prev-line"),u=void 0;i.length>0?u=i[0]:(u=new(n().Line)({name:"prev-line"}),e.add(u)),t.ifDrawing&&(u.setAttr("stroke",t.BrushColor),u.setAttr("strokeWidth",t.BrushWidth),u.setAttr("lineCap","round"),u.setAttr("lineJoin","round"),u.setAttr("globalCompositeOperation",t.CompositeOperation),u.setAttr("points",[t.LastX,t.LastY,t.NextX,t.NextY]))},t.CompositeOperation="source-over",t}var r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(e,t),r=e,(o=[{key:"Settings",get:function(){return{Name:"Brush",Settings:new Map([["BrushColor",{type:i.Q7.Color,label:"Brush Color",value:this.BrushColor}],["BrushWidth",{type:i.Q7.Number,label:"Brush Width",info:[1,64],value:this.BrushWidth}]])}},set:function(t){var e,r;if(void 0===t.Settings)throw new Error("INTENAL_ERROR: Settings are missing");var o=!1;void 0!==t.Settings.get("BrushColor")&&(this.BrushColor=null===(e=t.Settings.get("BrushColor"))||void 0===e?void 0:e.value,o=!0),void 0!==t.Settings.get("BrushWidth")&&(this.BrushWidth=null===(r=t.Settings.get("BrushWidth"))||void 0===r?void 0:r.value,o=!0),o&&u.A$.dispatch(u.Qd.sidebar_window.update({id:"SettingsPage",new_func:null}))}}])&&l(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}(i.Yj)}}]);