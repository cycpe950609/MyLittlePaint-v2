"use strict";(self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[]).push([[38],{3871:(t,e,n)=>{n.r(e),n.d(e,{default:()=>st});var o,r=n(4150);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,c(o.key),o)}}function c(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:String(e)}!function(t){t.String="string",t.Integer="integer",t.Float="float",t.Color="color",t.StringList="stringlist",t.IntegerList="integerlist",t.FloatList="floatlist",t.ColorList="colorlist"}(o||(o={}));var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.Name="no_op",this.ImgName="text",this.Tip="",this.MouseDown=function(t){},this.Tip="This is a example of using FunctionInterface "+e.toString()}var e,n;return e=t,(n=[{key:"StartFunction",value:function(t){return!1}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),l=n(9863),u=n(9196),d=n(2545);const f=function(t){return(0,r.Y)(d.i,{className:"toolbar-item",onclick:function(){return window.editorUI.Mode.changeFunction(t)},$style:{backgroundImage:"url(img/"+(void 0!==t.ImgName?t.ImgName:"color_selector")+".png)"},children:void 0!==t.Tip&&(0,r.Y)(d.L9,{className:"tooltip-text",children:"string"==typeof t.Tip?t.Tip:t.Tip()})})};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,y(o.key),o)}}function p(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:String(e)}var v=function(){function t(e){m(this,t),this.name=e}return p(t,[{key:"clear",value:function(){console.log("[EUI] Toolbar ".concat(this.name," clear")),u.GL.dispatch(u.R8[this.name].clear(void 0))}},{key:"addButtonList",value:function(t){var e=this;return console.log("[TBR] AddButtonList",t),void 0===t||0===t.length?[]:t.map((function(t){return e.addButton(t)}))}},{key:"addButton",value:function(t){var e=(0,l.A)();return console.log("[TBR] AddButton"),u.GL.dispatch(u.R8[this.name].add({id:e,func:t})),e}},{key:"removeButton",value:function(t){return t in u.GL.getState()[this.name]&&(u.GL.dispatch(u.R8[this.name].remove(t)),!0)}},{key:"size",value:function(){return Object.keys(u.GL.getState()[this.name]).length}},{key:"hasChildren",value:function(){return Object.keys(u.GL.getState()[this.name]).length>0}}]),t}();const g=function(){function t(e,n,o){m(this,t),_[e]=o,this.Top=new v("".concat(e,"_top_").concat(n)),this.Bottom=new v("".concat(e,"_bottom_").concat(n))}return p(t,[{key:"removeButton",value:function(t){this.Top.removeButton(t)||this.Bottom.removeButton(t)}},{key:"clear",value:function(){this.Top.clear(),this.Bottom.clear()}},{key:"size",value:function(){return this.Bottom.size()+this.Top.size()}},{key:"hasChildren",value:function(){var t=this.Bottom.hasChildren(),e=this.Top.hasChildren();return t||e}}]),t}();var _={},w=function(t,e,n,o){return console.log("[TBR] ToolbarPart render",n,Object.keys(o).length),(0,r.Y)(d.i,{className:e,children:Object.keys(o).map((function(e){return f(_[t](n,e,o[e]))}))})},S=function(t){var e=t.type,n=("editorui-".concat(e),e.replace("-","_")),o=u.GL.getState()["".concat(n,"_top_")].data,i=u.GL.getState()["".concat(n,"_top_perm")].data,a=u.GL.getState()["".concat(n,"_bottom_")].data,c=u.GL.getState()["".concat(n,"_bottom_perm")].data;return console.log("[DEB] ToolbarComp",u.GL.getState()),Object.keys(o).length+Object.keys(i).length+Object.keys(a).length+Object.keys(c).length===0?(0,r.Y)(d.i,{}):(0,r.FD)(d.i,{className:"toolbar-vertical",children:[w(e,"toolbar-perm","".concat(n,"_top_perm"),i),w(e,"toolbar-top","".concat(n,"_top_"),o),w(e,"toolbar-bottom","".concat(n,"_bottom_"),a),w(e,"toolbar-perm","".concat(n,"_bottom_perm"),c)]})};function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,T(o.key),o)}}function T(t){var e=function(t,e){if("object"!=L(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=L(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==L(e)?e:String(e)}var G=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.listName=e,this.interfaceUUID=n,this.Name=o.Name,this.ImgName=o.ImgName,this.Tip=o.Tip}var e,n;return e=t,(n=[{key:"showSidebar",value:function(){var t=u.GL.getState()[this.listName].data[this.interfaceUUID];!0!==t.Visible&&(t.Visible=!0,u.GL.dispatch(u.R8[this.listName].update({id:this.interfaceUUID,new_func:t})))}},{key:"hiddenSidebar",value:function(){var t=u.GL.getState()[this.listName].data[this.interfaceUUID];!1!==t.Visible&&(t.Visible=!1,u.GL.dispatch(u.R8[this.listName].update({id:this.interfaceUUID,new_func:t})))}},{key:"toggleSidebar",value:function(){1==!u.GL.getState()[this.listName].data[this.interfaceUUID].Visible?this.showSidebar():this.hiddenSidebar(),console.log("[EUI] Toggle sidebar")}},{key:"StartFunction",value:function(){return this.toggleSidebar(),!1}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const I=G;var N=function(t){return(0,r.Y)(d.i,{className:"w-fit h-fit",children:Object.keys(t).map((function(e){return!1===t[e].Visible?(0,r.Y)(d.i,{}):function(t,e){var n=void 0;if(t in u.GL.getState().sidebar_top_.data?n=u.GL.getState().sidebar_top_.data[t]:t in u.GL.getState().sidebar_top_perm.data?n=u.GL.getState().sidebar_top_perm.data[t]:t in u.GL.getState().sidebar_bottom_.data?n=u.GL.getState().sidebar_bottom_.data[t]:t in u.GL.getState().sidebar_bottom_perm.data&&(n=u.GL.getState().sidebar_bottom_perm.data[t]),void 0===n)throw new Error("INTERNAL_ERROR: SidebarInterface is not found");return console.log("[EUI] renderWindow",n.Body()),(0,r.FD)(d.i,{className:"property-bar",$style:{pointerEvents:"all"},children:[(0,r.Y)(d.i,{className:"pd_title",children:(0,r.Y)(d.L9,{className:"pb_Property_close",children:n.Title()})}),(0,r.Y)(d.i,{className:"pb_Property_bdy",children:n.Body()})]})}(e,t[e].Name)}))})},C=function(){var t=u.GL.getState().sidebar_top_.data,e=u.GL.getState().sidebar_top_perm.data,n=u.GL.getState().sidebar_bottom_.data,o=u.GL.getState().sidebar_bottom_perm.data,i=function(t){var e=0;return Object.keys(t).forEach((function(n){e+=t[n].Visible?1:0})),e},a=i(t)+i(n)+i(e)+i(o),c=(0,r.FD)(d.i,{Id:"editorui-sidebar-windows",className:"sidebar",$style:{pointerEvents:a>0?"all":"none"},children:[N(t),N(e),N(n),N(o)]});return window.editorUI.CenterCanvas.isUpdate=!1,c},j=n(1216);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function U(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,R(o.key),o)}}function O(t,e,n){return e&&B(t.prototype,e),n&&B(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function R(t){var e=function(t,e){if("object"!=E(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=E(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==E(e)?e:String(e)}var Y=function(){function t(e,n,o){U(this,t),this.idx=o,this.side=n,console.log("[EUI] ".concat(o," tip component created")),u.GL.dispatch(u.R8["statusbar_".concat(this.side,"_")].update({id:this.idx,new_func:{tip:e,showed:!0}}))}return O(t,[{key:"updateTip",value:function(t){u.GL.dispatch(u.R8["statusbar_".concat(this.side,"_")].update({id:this.idx,new_func:{tip:t,showed:!0}}))}},{key:"hide",value:function(){u.GL.dispatch(u.R8["statusbar_".concat(this.side,"_")].update({id:this.idx,new_func:{tip:u.GL.getState()["statusbar_".concat(this.side,"_")][this.idx].tip,showed:!1}}))}},{key:"show",value:function(){u.GL.dispatch(u.R8["statusbar_".concat(this.side,"_")].update({id:this.idx,new_func:{tip:u.GL.getState()["statusbar_".concat(this.side,"_")][this.idx].tip,showed:!0}}))}}]),t}();const M=function(){function t(){U(this,t)}return O(t,[{key:"__createTipComponent__",value:function(t){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]){var e=Object.keys(u.GL.getState().statusbar_right_.data).length;return new Y(t,"right",e+1)}var n=Object.keys(u.GL.getState().statusbar_left_.data).length;return new Y(t,"left",n+1)}},{key:"addTip",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.__createTipComponent__(t,e)}},{key:"clear",value:function(){u.GL.dispatch(u.R8.statusbar_left_.clear(void 0)),u.GL.dispatch(u.R8.statusbar_right_.clear(void 0))}}]),t}();var F=function(t){var e,n=t.side,o="editorui-statusbar-".concat(n);return(0,r.Y)(d.i,{className:o,children:("statusbar_".concat(n,"_"),e=u.GL.getState()["statusbar_".concat(n,"_")].data,Object.keys(e).map((function(t){return e[t].showed?(n=e[t].tip,(0,r.Y)(d.i,{className:"status-bar",children:(0,r.Y)(d.L9,{className:"status_help_tip",children:n})})):(0,r.Y)(d.L9,{});var n})))})};console.log=(console.log,function(){}),console.error=(console.error,function(){}),console.info=(console.info,function(){});var P=n(2555),D=n(4417),A=n(5363),x=n(1488),z=n(5348),V=n(3422),$={},q=function(t,e){return(0,r.Y)(d.i,{className:"meanu-perm",children:Object.keys(e).map((function(n){return $[t]=!0,f(e[n])}))})},K=function(t){var e=t.side,n="editorui-menubar-".concat(e),o=u.GL.getState()["menubar_".concat(e,"_")].data,i=u.GL.getState()["menubar_".concat(e,"_perm")].data;return Object.keys(o).length+Object.keys(i).length===0?(0,r.Y)(d.i,{}):(0,r.FD)(d.i,{Id:n,className:"menu-box",children:[q("menubar_".concat(e,"_perm"),i),q("menubar_".concat(e,"_"),o)]})},H=function(){return(0,r.Y)(d.i,{Id:"editorui-menubar-middle",className:"buttongroup",children:Object.keys(u.GL.getState().mode.data).map((function(t){var e=u.GL.getState().mode.data[t],n=e.def.ModeSelectorText;return void 0===n?(0,r.Y)(r.FK,{}):(0,r.FD)(d.JU,{className:"buttongroup-item",onclick:function(){return window.editorUI.Mode.changeTo(e.modeName)},children:[(0,r.Y)(d.pd,{type:"radio",className:"button_input",name:"modeSelector",defaultChecked:!1,disabled:!0!==e.enable}),(0,r.Y)(d.i,{className:"button",children:(0,r.Y)(d.i,{children:n})})]})}))})},J=n(4515);function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var Q=function(t){var e,n,o=(e=(0,J.zy)(),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i,a,c=[],s=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(c.push(o.value),c.length!==e);s=!0);}catch(t){l=!0,r=t}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=(o[0],o[1]);return setTimeout((function(){i(u.GL.getState().mode.root)}),1e3),(0,r.Y)(r.FK,{children:(0,r.Y)(d.i,{className:"w-full h-full",$style:{backgroundColor:"black",color:"red"},children:(0,r.FD)(d.i,{className:"flex flex-row",$style:{height:"100%",position:"relative",top:"50%"},children:[(0,r.Y)(d.L9,{className:"horiz-center",children:"Oops! Something went wrong."}),(0,r.Y)(d.L9,{className:"horiz-center",children:"Jump to HomePage in 1 second."})]})})})},X=n(5272);function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function nt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,rt(o.key),o)}}function ot(t,e,n){return e&&nt(t.prototype,e),n&&nt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t){var e=function(t,e){if("object"!=Z(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=Z(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Z(e)?e:String(e)}var it=function(){function t(){et(this,t),this.selectorBtn=new Map,this.func_mode="noop",this.funcNoop=new s(0),this.func=this.funcNoop,this.isModeChanged=!1}return ot(t,[{key:"currentMode",value:function(){return this.func_mode}},{key:"enable",value:function(t){u.GL.dispatch((0,u.z$)(t))}},{key:"disable",value:function(t){u.GL.dispatch((0,u.Cl)(t))}},{key:"toggle",value:function(t){u.GL.dispatch((0,u.Ei)(t))}},{key:"add",value:function(t,e,n){if(t in u.GL.getState().mode.data)throw new Error("Mode "+t+" exist");if(!(t in u.GL.getState().mode.data)){var o="#/".concat(t);u.GL.dispatch((0,u.r$)({def:e,enable:void 0!==n?n:e.Enable,modeName:t,btn:document.createElement("label")})),void 0!==n||e.Enable,""===u.GL.getState().mode.root&&u.GL.dispatch((0,u.yx)(o))}console.log("[EUI] Add mode "+t)}},{key:"remove",value:function(t){u.GL.dispatch((0,u.CH)(t))}},{key:"changeFunction",value:function(t){void 0!==this.func.EndFunction&&this.func.EndFunction(window.editorUI.CenterCanvas);var e=t.StartFunction(window.editorUI.CenterCanvas);window.editorUI.CenterCanvas.render(),!0===e&&(this.func=t)}},{key:"changeTo",value:function(t){if(console.log("[MOD] Before change mode to "+t),this.func_mode!==t){var e="#/".concat(t);if(!(e in u.GL.getState().mode.data)||!0===u.GL.getState().mode.data[e].enable){console.log("[MOD] Change mode to ".concat(t," 2")),function(t){var e=u.GL.getState().mode.data[t];void 0!==e.def.StartMode&&e.def.StartMode(),void 0!==e.def.StartMode&&e.def.StartMode(),window.editorUI.CenterCanvas=e.def.CenterCanvas,console.log("[MOD] mode.def",e),window.editorUI.Menubar.clear(),window.editorUI.Menubar.Left.addButtonList(e.def.MenuToolbarLeft),window.editorUI.Menubar.Right.addButtonList(e.def.MenuToolbarRight),window.editorUI.Toolbar.clear(),console.log("[TBR] LeftToolbarTop",e.def.LeftToolbarTop),console.log("[TBR] LeftToolbarBottom",e.def.LeftToolbarBottom),window.editorUI.Toolbar.Top.addButtonList(e.def.LeftToolbarTop),window.editorUI.Toolbar.Bottom.addButtonList(e.def.LeftToolbarBottom),window.editorUI.Sidebar.clear(),window.editorUI.Sidebar.Top.addButtonList(e.def.RightToolbarTop),window.editorUI.Sidebar.Bottom.addButtonList(e.def.RightToolbarBottom);var n=new s(0);window.editorUI.Mode.changeFunction(n),console.log("[EUI] Mode ".concat(e.modeName," mounted"))}(e),this.isModeChanged=!0,console.log("[DEB]",t,u.GL.getState().mode.data),console.log("[MOD] Change mode to "+t);var n=(o=(0,J.zy)(),r=2,function(t){if(Array.isArray(t))return t}(o)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i,a,c=[],s=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(c.push(o.value),c.length!==e);s=!0);}catch(t){l=!0,r=t}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return c}}(o,r)||function(t,e){if(t){if("string"==typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tt(t,e):void 0}}(o,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());n[0],(0,n[1])(e)}}var o,r}},{key:"ModeChanged",get:function(){var t=this.isModeChanged;return this.isModeChanged=!1,t}}]),t}(),at=function(){function t(){et(this,t),this.Left=new v("menubar_left_"),this.Right=new v("menubar_right_")}return ot(t,[{key:"removeButton",value:function(t){this.Left.removeButton(t)||this.Right.removeButton(t)}},{key:"clear",value:function(){this.Left.clear(),this.Right.clear()}},{key:"size",value:function(){return this.Right.size()+this.Left.size()}},{key:"hasChildren",value:function(){var t=this.Right.hasChildren(),e=this.Left.hasChildren();return t||e}}]),t}(),ct=function(){function t(){var e=this;et(this,t),this.noop_cvs=new j.n1,this.cvs=this.noop_cvs,this.renderVNode=(0,P.T)([D.h,A.l,x.W,z.I],void 0,{experimental:{fragments:!0}}),this.time_to_rerender=!0,this.should_rerender=!1,this.canvas_container_vnode=(0,V.E)((0,X.q0)("canvas_group")),this.timeToRerender=function(){e.time_to_rerender=!0,e.render(),window.requestAnimationFrame(e.timeToRerender)},this.Toolbar=new g("toolbar","",(function(t,e,n){return n})),this.Sidebar=new g("sidebar","",(function(t,e,n){return console.log("[EUI] Create sidebar funcInterface"),new I(t,e,n)})),this.Statusbar=new M,this.Menubar=new at,this.Mode=new it}return ot(t,[{key:"CenterCanvas",get:function(){return this.cvs},set:function(t){this.cvs=void 0!==t?t:this.noop_cvs}},{key:"render",value:function(){if(this.time_to_rerender&&this.should_rerender){this.should_rerender=!1,this.time_to_rerender=!1,console.log("[EUI] Render"),console.log("[DEB] Render");var t=window.location,e=!(t.hash in u.GL.getState().mode.data),n=t.hash in u.GL.getState().mode.data&&!1===u.GL.getState().mode.data[t.hash].enable,o=e||n;this.Mode.ModeChanged?window.editorUI.CenterCanvas.attachCanvas(this.canvas_container_vnode.elm):window.editorUI.CenterCanvas.render();var i=(0,r.Y)(r.FK,{children:(0,r.FD)(d.i,{children:[this.canvas_container_vnode,(0,r.Y)(d.i,{className:"toolbar-vertical-cnt toolbar-vertical-cnt-left",children:(0,r.Y)(S,{type:"toolbar"})}),(0,r.Y)(d.i,{className:"toolbar-vertical-cnt toolbar-vertical-cnt-right",children:(0,r.Y)(S,{type:"sidebar"})}),(0,r.Y)(C,{}),(0,r.FD)(d.i,{className:"status-bar-cnt",children:[(0,r.Y)(F,{side:"left"}),(0,r.Y)(d.i,{Id:"editorui-statusbar-middle"}),(0,r.Y)(F,{side:"right"})]}),(0,r.FD)(d.i,{className:"menu",children:[(0,r.Y)(d.i,{className:"menu-left-part",children:(0,r.Y)(K,{side:"left"})}),(0,r.Y)(d.i,{className:"menu-middle-part",children:(0,r.Y)(H,{})}),(0,r.Y)(d.i,{className:"menu-right-part",children:(0,r.Y)(K,{side:"right"})})]})]})}),a=o?(0,r.Y)(Q,{}):i;this.renderVNode(this.lastVNode,a),this.lastVNode=a}}},{key:"forceRerender",value:function(){this.should_rerender=!0,this.time_to_rerender=!0,this.render()}},{key:"Mount",value:function(t){var e=this;if(this.container=document.createElement("div"),"string"==typeof t){var n=document.getElementById(t);if(null===n)throw new Error("INTERNAL_ERROR: Cannt found container");this.container=n}else this.container=t;this.lastVNode=(0,V.E)(this.container),this.unsubscribe=u.GL.subscribe((function(){var t=u.GL.getState().state.action,n=u.GL.getState().binder.action;"state.usestate"===t&&"data.use.data"===n||(console.log("[EUI] Should Render ",t,n),e.should_rerender=!0),e.render()})),window.requestAnimationFrame(this.timeToRerender),this.render(),console.log("[EUI] EditorUI Mounted")}}]),t}();const st=ct}}]);