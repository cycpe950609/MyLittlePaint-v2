"use strict";(self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[]).push([[811],{1216:(t,e,o)=>{o.d(e,{Nr:()=>n,SM:()=>b,n1:()=>y,qx:()=>h,x9:()=>m});var n,a=o(9863);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e,o){return e=s(e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,c()?Reflect.construct(e,o||[],s(t).constructor):e.apply(t,o))}function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(c=function(){return!!t})()}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function f(t,e,o){return e&&l(t.prototype,e),o&&l(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:String(e)}!function(t){t[t.Number=0]="Number",t[t.Color=1]="Color",t[t.Boolean=2]="Boolean"}(n||(n={}));var h=function(){function t(){d(this,t),this.Name="base",this._canfinishDrawing=!0,this.LastX=0,this.LastY=0,this.NextX=0,this.NextY=0,this.ifDrawing=!1,this.ifMouseMove=!1,this.CompositeOperation="source-over"}return f(t,[{key:"CanFinishDrawing",get:function(){return this._canfinishDrawing}},{key:"PointerDown",value:function(t){var e=[t.X,t.Y];this.LastX=e[0],this.LastY=e[1];var o=[t.X,t.Y];this.NextX=o[0],this.NextY=o[1],this.ifDrawing=!0,this.ifMouseMove=!1,this._canfinishDrawing=!1,this.shapeID=(0,a.A)()}},{key:"PointerMove",value:function(t){if(this.ifDrawing){this.ifMouseMove=!0;var e=[t.X,t.Y];this.NextX=e[0],this.NextY=e[1]}}},{key:"PointerUp",value:function(t){this._canfinishDrawing=!0,this.ifMouseMove=!1,this.ifDrawing=!1}},{key:"PointerOut",value:function(t){this._canfinishDrawing=!0,this.ifMouseMove=!1,this.ifDrawing=!1}},{key:"rotatedDelta",value:function(t){var e=this.NextX,o=this.NextY,n=e-this.LastX,a=o-this.LastY;return[n*Math.cos(t)-a*Math.sin(-t),n*Math.sin(-t)+a*Math.cos(t)]}},{key:"rotatedPoint",value:function(t,e,o){var n=t,a=e;return[n*Math.cos(o)-a*Math.sin(o),n*Math.sin(o)+a*Math.cos(o)]}},{key:"DrawFunction",value:function(t,e,o,n){}},{key:"Settings",get:function(){return{}},set:function(t){}}]),t}(),b=function(){function t(){d(this,t),this.Name="base",this._canfinishDrawing=!0,this.LastX=0,this.LastY=0,this.NextX=0,this.NextY=0,this.ifDrawing=!1,this.ifMouseMove=!1,this.isPointOut=!1,this.points=[],this.CompositeOperation="source-over"}return f(t,[{key:"CanFinishDrawing",get:function(){return this._canfinishDrawing}},{key:"PointerDown",value:function(t){if(1==this._canfinishDrawing){var e=[t.X,t.Y];this.LastX=e[0],this.LastY=e[1];var o=[t.X,t.Y];this.NextX=o[0],this.NextY=o[1],this.ifDrawing=!0,this.ifMouseMove=!1,this._canfinishDrawing=!1,this.shapeID=(0,a.A)(),this.points=[[t.X,t.Y]]}}},{key:"PointerMove",value:function(t){if(this.ifDrawing){this.isPointOut=!1,this.ifMouseMove=!0;var e=[t.X,t.Y];this.NextX=e[0],this.NextY=e[1]}}},{key:"PointerUp",value:function(t){this.points.push([t.X,t.Y])}},{key:"RightPointerUp",value:function(t){this._canfinishDrawing=!0,this.ifMouseMove=!1,this.ifDrawing=!1}},{key:"PointerOut",value:function(t){this.isPointOut=!0}},{key:"rotatedDelta",value:function(t,e,o){var n=void 0!==e?e:this.NextX,a=void 0!==o?o:this.NextY,i=n-this.LastX,r=a-this.LastY;return[i*Math.cos(t)-r*Math.sin(-t),i*Math.sin(-t)+r*Math.cos(t)]}},{key:"rotatedPoint",value:function(t,e,o){var n=t,a=e;return[n*Math.cos(o)-a*Math.sin(o),n*Math.sin(o)+a*Math.cos(o)]}},{key:"DrawFunction",value:function(t,e,o,n){}},{key:"Settings",get:function(){return{}},set:function(t){}}]),t}(),m=function(t){function e(){return d(this,e),r(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(e,t),f(e)}(h),y=function(){function t(){d(this,t),this.name="NoOPCanvas",this.isUpdate=!1}return f(t,[{key:"attachCanvas",value:function(t){}},{key:"Function",set:function(t){console.log("setFunction",t)}},{key:"resizeCanvas",value:function(t){}},{key:"removeCanvas",value:function(){}},{key:"render",value:function(){}}]),t}()},9196:(t,e,o)=>{o.d(e,{CH:()=>p,Cl:()=>u,Ei:()=>l,GL:()=>C,NF:()=>b,R8:()=>N,r$:()=>f,yx:()=>h,z$:()=>d});var n=o(7358);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}var i=(0,n.Z0)({name:"stateManager",initialState:{action:"state.init",useStateCount:0,firstInit:!0,data:[]},reducers:{useState:function(t,e){return t.useStateCount===t.data.length&&t.firstInit&&(t.data=[].concat(function(t){if(Array.isArray(t))return a(t)}(o=t.data)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(t,e):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.payload])),t.action="state.usestate",t.useStateCount+=1,t;var o},setState:function(t,e){if(e.payload.id>=t.data.length)throw console.log("[HOK] setState",e.payload.id,t.data.length),new Error("INTERNEL ERROR : id of setState is out of bound");return console.log("[HOK] setState",e.payload.id,e.payload.val),t.data[e.payload.id]=e.payload.val,t.action="state.setstate",t}}}),r=(0,n.Z0)({name:"dataManager",initialState:{action:"data.init",useStateCount:0,firstInit:!0,data:{}},reducers:{useData:function(t,e){if(e.payload.key in t.data&&!0===t.data[e.payload.key].isCreated)throw new Error("Multiple useProvider with same namespace");return e.payload.key in t.data||(t.data[e.payload.key]={isCreated:!0,val:e.payload.val},console.log("[STA] useData",t.data)),e.payload.key in t.data&&(t.data[e.payload.key].isCreated=!0),t.action="data.use.data",t},setData:function(t,e){if(!(e.payload.key in t.data))throw console.log("[HOK] setData",e.payload.key,t.data),new Error("INTERNEL ERROR : key of setData is not found");return console.log("[HOK] setData",e.payload.key,e.payload.val),t.data[e.payload.key]=Object.assign(Object.assign({},t.data[e.payload.key]),{val:e.payload.val}),t.action="data.set.data",t}}}),c=(0,n.Z0)({name:"modeManager",initialState:{root:"",action:"",data:{},curMode:"",lastMode:""},reducers:{rendered:function(t,e){t.action=""},enable:function(t,e){var o=e.payload;if(console.log("[EUI] Tried to enable "+o),o in t.data){console.log("[EUI] Enable "+o);var n=t.data[o];if(void 0===n)throw new Error("MODEMGR_INTERNAL_ERROR");n.enable=!0,t.action="mode.".concat(o,".enable")}},disable:function(t,e){var o=e.payload;if(o in t.data){var n=t.data[o];if(void 0===n)throw new Error("MODEMGR_INTERNAL_ERROR");n.enable=!1,t.action="mode.".concat(o,".disable")}},toggle:function(t,e){var o=e.payload;if(o in t){var n=t.data[o];if(void 0===n)throw new Error("MODEMGR_INTERNAL_ERROR");!0===n.enable?C.dispatch(N.mode.disable(o)):C.dispatch(c.actions.enable(o))}},add:function(t,e){var o=e.payload.modeName;t.data[o]=e.payload,t.action="mode.".concat(e.payload.modeName,".added")},remove:function(t,e){var o=e.payload;if(o===t.root)throw new Error("MODEMGR_ERROR: root can't be delete");o in t&&(delete t.data[o],t.action="mode.".concat(o,".removed"))},setRoot:function(t,e){t.root=e.payload,t.curMode=e.payload},changeTo:function(t,e){if(t.curMode!==e.payload&&e.payload in t.data)return t.lastMode=t.curMode,t.curMode=e.payload,t.action="mode.changed",t}}}),s=c.actions,u=s.disable,d=s.enable,l=s.toggle,f=s.add,p=s.remove,h=s.setRoot,b=s.changeTo,m=function(t){return(0,n.Z0)({name:t,initialState:{action:"",data:{}},reducers:{rendered:function(t,e){t.action=""},updateAll:function(e,o){e.data=o.payload,e.action="".concat(t,".all.update")},update:function(e,o){e.data[o.payload.id]=o.payload.new_func,e.action="".concat(t,".").concat(o.payload.id,".update")},add:function(e,o){e.data[o.payload.id]=o.payload.func,e.action="".concat(t,".").concat(o.payload.id,".add")},remove:function(e,o){o.payload in e&&(delete e.data[o.payload],e.action="".concat(t,".").concat(o.payload,".delete"))},clear:function(e,o){return{action:"".concat(t,".clear"),data:{}}}}})},y=m("menubar_left"),v=m("menubar_left_perm"),g=m("menubar_right"),_=m("menubar_right_perm"),w=m("toolbar_top"),M=m("toolbar_top_perm"),T=m("toolbar_bottom"),L=m("toolbar_bottom_perm"),O=m("sidebar_top"),S=m("sidebar_top_perm"),I=m("sidebar_bottom"),E=m("sidebar_bottom_perm"),R=m("sidebar_window"),k=m("statusbar_left"),D=m("statusbar_right"),N={mode:c.actions,menubar_left_:y.actions,menubar_left_perm:v.actions,menubar_right_:g.actions,menubar_right_perm:_.actions,toolbar_top_:w.actions,toolbar_top_perm:M.actions,toolbar_bottom_:T.actions,toolbar_bottom_perm:L.actions,sidebar_top_:O.actions,sidebar_top_perm:S.actions,sidebar_bottom_:I.actions,sidebar_bottom_perm:E.actions,sidebar_window:R.actions,statusbar_left_:k.actions,statusbar_right_:D.actions,state:i.actions,binder:r.actions},C=(0,n.U1)({reducer:{mode:c.reducer,menubar_left_:y.reducer,menubar_left_perm:v.reducer,menubar_right_:g.reducer,menubar_right_perm:_.reducer,toolbar_top_:w.reducer,toolbar_top_perm:M.reducer,toolbar_bottom_:T.reducer,toolbar_bottom_perm:L.reducer,sidebar_top_:O.reducer,sidebar_top_perm:S.reducer,sidebar_bottom_:I.reducer,sidebar_bottom_perm:E.reducer,sidebar_window:R.reducer,statusbar_left_:k.reducer,statusbar_right_:D.reducer,state:i.reducer,binder:r.reducer},middleware:function(t){return t({serializableCheck:!1})}})},4520:(t,e,o)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function i(t){var e=function(t,e){if("object"!=n(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var a=o.call(t,"string");if("object"!=n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(e)?e:String(e)}var r;o.d(e,{h:()=>c}),function(t){t.String="string",t.Integer="integer",t.Float="float",t.Color="color",t.StringList="stringlist",t.IntegerList="integerlist",t.FloatList="floatlist",t.ColorList="colorlist"}(r||(r={}));var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.Name="no_op",this.ImgName="text",this.Tip="",this.MouseDown=function(t){},this.Tip="This is a example of using FunctionInterface "+e.toString()}var e,o;return e=t,(o=[{key:"StartFunction",value:function(t){}}])&&a(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},8507:(t,e,o)=>{o.d(e,{Pz:()=>s,sP:()=>c,xb:()=>u});var n=o(9196),a=o(4520),i=[],r=function(t){var e=!0===t.clearToolbar;e&&window.editorUI.Menubar.clear(),window.editorUI.Menubar.Left.addButtonList(t.MenuToolbarLeft),window.editorUI.Menubar.Right.addButtonList(t.MenuToolbarRight),e&&window.editorUI.Toolbar.clear(),console.log("[TBR] LeftToolbarTop",t.LeftToolbarTop),console.log("[TBR] LeftToolbarBottom",t.LeftToolbarBottom),window.editorUI.Toolbar.Top.addButtonList(t.LeftToolbarTop),window.editorUI.Toolbar.Bottom.addButtonList(t.LeftToolbarBottom),e&&window.editorUI.Sidebar.clear(),window.editorUI.Sidebar.Top.addButtonList(t.RightToolbarTop),window.editorUI.Sidebar.Bottom.addButtonList(t.RightToolbarBottom)},c=function(){void 0!==i[i.length-1].EndMode&&i[i.length-1].EndMode(),i.pop(),r(i[i.length-1]);var t=new a.h(0);window.editorUI.Mode.changeFunction(t)},s=function(t){i.push(t),r(t)},u=function(t){var e=n.GL.getState().mode.data[t],o=n.GL.getState().mode.data[n.GL.getState().mode.curMode];void 0===e.def.CenterCanvas||void 0===o||void 0===o.def.EndMode||o.def.EndMode(),void 0!==e.def.StartMode&&e.def.StartMode(),window.editorUI.CenterCanvas=e.def.CenterCanvas,console.log("[MOD] mode.def",e);var r={clearToolbar:!0,MenuToolbarLeft:e.def.MenuToolbarLeft,MenuToolbarRight:e.def.MenuToolbarRight,LeftToolbarTop:e.def.LeftToolbarTop,LeftToolbarBottom:e.def.LeftToolbarBottom,RightToolbarTop:e.def.RightToolbarTop,RightToolbarBottom:e.def.RightToolbarBottom};i=[],s(r),n.GL.dispatch((0,n.NF)(e.modeName));var c=new a.h(0);window.editorUI.Mode.changeFunction(c),console.log("[EUI] Mode ".concat(e.modeName," mounted"))}},2545:(t,e,o)=>{o.d(e,{E9:()=>l,JU:()=>r,L9:()=>c,Td:()=>d,Tr:()=>u,XI:()=>s,i:()=>a,pd:()=>i});var n=o(4150),a=function(t){return(0,n.Y)("div",Object.assign({},t,{id:null!=t.Id?t.Id:"divcnt",children:t.children}))},i=function(t){return(0,n.Y)("input",Object.assign({},t,{id:null!=t.Id?t.Id:"inpcnt",children:t.children}))},r=function(t){return(0,n.Y)("label",Object.assign({},t,{id:null!=t.Id?t.Id:"lblcnt",children:t.children}))},c=function(t){return(0,n.Y)("span",Object.assign({},t,{id:null!=t.Id?t.Id:"spcnt",children:t.children}))},s=function(t){return(0,n.Y)("table",Object.assign({},t,{id:null!=t.Id?t.Id:"tblcnt",children:t.children}))},u=function(t){return(0,n.Y)("tr",Object.assign({},t,{id:null!=t.Id?t.Id:"trcnt",children:t.children}))},d=function(t){return(0,n.Y)("td",Object.assign({},t,{id:null!=t.Id?t.Id:"tdcnt",children:t.children}))},l=function(t){return(0,n.Y)("img",Object.assign({},t,{id:null!=t.Id?t.Id:"imgcnt",children:t.children}))}},5272:(t,e,o)=>{o.d(e,{BS:()=>a,a$:()=>i,n5:()=>r,q0:()=>n});var n=function(t,e){var o=document.createElement("div");return t.split(" ").map((function(t){return o.classList.add(t)})),void 0===e||(e instanceof HTMLElement||e instanceof DocumentFragment?o.appendChild(e):e.map((function(t){o.appendChild(t)}))),o},a=function(t,e){var o=document.createElement("span");return t.split(" ").map((function(t){return o.classList.add(t)})),o.append(e),o},i=function(t){var e=document.createElement("input");return t.split(" ").map((function(t){return e.classList.add(t)})),e.required=!0,e},r=function(t,e){var o=document.createElement("input");return o.classList.add("button"),t.split(" ").map((function(t){return o.classList.add(t)})),o.type="button",void 0===e?o:e instanceof HTMLElement||e instanceof DocumentFragment?(o.appendChild(e),o):"string"==typeof e?(o.value=e,o):(e.map((function(t){o.appendChild(t)})),o)}}}]);