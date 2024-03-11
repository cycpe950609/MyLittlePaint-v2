"use strict";(self.webpackChunkmylittlepaint2=self.webpackChunkmylittlepaint2||[]).push([[62],{4214:(e,t,n)=>{function r(e){if(o(e)){for(;e&&o(e);)e=i(e).parent;return null!=e?e:null}return e.parentNode}function o(e){return 11===e.nodeType}function i(e,t){var n,r,o,i=e;return null!==(n=i.parent)&&void 0!==n||(i.parent=null!=t?t:null),null!==(r=i.firstChildNode)&&void 0!==r||(i.firstChildNode=e.firstChild),null!==(o=i.lastChildNode)&&void 0!==o||(i.lastChildNode=e.lastChild),i}n.d(t,{i:()=>l});var l={createElement:function(e,t){return document.createElement(e,t)},createElementNS:function(e,t,n){return document.createElementNS(e,t,n)},createTextNode:function(e){return document.createTextNode(e)},createDocumentFragment:function(){return i(document.createDocumentFragment())},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){if(o(e)){for(var r=e;r&&o(r);)r=i(r).parent;e=null!=r?r:e}o(t)&&(t=i(t,e)),n&&o(n)&&(n=i(n).firstChildNode),e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){o(t)&&(t=i(t,e)),e.appendChild(t)},parentNode:r,nextSibling:function(e){var t;if(o(e)){var n=i(e),l=r(n);if(l&&n.lastChildNode){var a=Array.from(l.childNodes),d=a.indexOf(n.lastChildNode);return null!==(t=a[d+1])&&void 0!==t?t:null}return null}return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType},isDocumentFragment:o}},2555:(e,t,n)=>{n.d(t,{T:()=>y});var r=n(4989),o=Array.isArray,i=n(4214);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(e){return void 0===e}function f(e){return void 0!==e}var c=(0,r.p)("",{},[],void 0,void 0);function s(e,t){var n,r,o=e.key===t.key,i=(null===(n=e.data)||void 0===n?void 0:n.is)===(null===(r=t.data)||void 0===r?void 0:r.is),l=e.sel===t.sel,a=!(!e.sel&&e.sel===t.sel)||d(e.text)===d(t.text);return l&&o&&i&&a}function v(){throw new Error("The document fragment is not supported on this platform.")}function m(e,t,n){for(var r,o={},i=t;i<=n;++i){var l=null===(r=e[i])||void 0===r?void 0:r.key;void 0!==l&&(o[l]=i)}return o}var p=["create","update","remove","destroy","pre","post"];function y(e,t,n){var a,d={create:[],update:[],remove:[],destroy:[],pre:[],post:[]},y=void 0!==t?t:i.i,h=l(p);try{for(h.s();!(a=h.n()).done;){var g,x=a.value,b=l(e);try{for(b.s();!(g=b.n()).done;){var C=g.value[x];void 0!==C&&d[x].push(C)}}catch(e){b.e(e)}finally{b.f()}}}catch(e){h.e(e)}finally{h.f()}function N(e){var t=e.id?"#"+e.id:"",n=e.getAttribute("class"),o=n?"."+n.split(" ").join("."):"";return(0,r.p)(y.tagName(e).toLowerCase()+t+o,{},[],void 0,e)}function w(e){return(0,r.p)(void 0,{},[],void 0,e)}function S(e,t){return function(){if(0==--t){var n=y.parentNode(e);null!==n&&y.removeChild(n,e)}}}function T(e,t){var r,i,l,a,s,m=e.data;if(void 0!==m){var p=null===(r=m.hook)||void 0===r?void 0:r.init;f(p)&&(p(e),m=e.data)}var h,g=e.children,x=e.sel;if("!"===x)u(e.text)&&(e.text=""),e.elm=y.createComment(e.text);else if(""===x)e.elm=y.createTextNode(e.text);else if(void 0!==x){var b=x.indexOf("#"),C=x.indexOf(".",b),N=b>0?b:x.length,w=C>0?C:x.length,S=-1!==b||-1!==C?x.slice(0,Math.min(N,w)):x,k=e.elm=f(m)&&f(s=m.ns)?y.createElementNS(s,S,m):y.createElement(S,m);for(N<w&&k.setAttribute("id",x.slice(N+1,w)),C>0&&k.setAttribute("class",x.slice(w+1).replace(/\./g," ")),s=0;s<d.create.length;++s)d.create[s](c,e);if(!("string"==typeof(h=e.text)||"number"==typeof h||h instanceof String||h instanceof Number)||o(g)&&0!==g.length||y.appendChild(k,y.createTextNode(e.text)),o(g))for(s=0;s<g.length;++s){var E=g[s];null!=E&&y.appendChild(k,T(E,t))}var A=e.data.hook;f(A)&&(null===(i=A.create)||void 0===i||i.call(A,c,e),A.insert&&t.push(e))}else if((null===(l=null==n?void 0:n.experimental)||void 0===l?void 0:l.fragments)&&e.children){for(e.elm=(null!==(a=y.createDocumentFragment)&&void 0!==a?a:v)(),s=0;s<d.create.length;++s)d.create[s](c,e);for(s=0;s<e.children.length;++s){var O=e.children[s];null!=O&&y.appendChild(e.elm,T(O,t))}}else e.elm=y.createTextNode(e.text);return e.elm}function k(e,t,n,r,o,i){for(;r<=o;++r){var l=n[r];null!=l&&y.insertBefore(e,T(l,i),t)}}function E(e){var t,n,r=e.data;if(void 0!==r){null===(n=null===(t=null==r?void 0:r.hook)||void 0===t?void 0:t.destroy)||void 0===n||n.call(t,e);for(var o=0;o<d.destroy.length;++o)d.destroy[o](e);if(void 0!==e.children)for(var i=0;i<e.children.length;++i){var l=e.children[i];null!=l&&"string"!=typeof l&&E(l)}}}function A(e,t,n,r){for(var o,i;n<=r;++n){var l=void 0,a=void 0,u=t[n];if(null!=u)if(f(u.sel)){E(u),l=d.remove.length+1,a=S(u.elm,l);for(var c=0;c<d.remove.length;++c)d.remove[c](u,a);var s=null===(i=null===(o=null==u?void 0:u.data)||void 0===o?void 0:o.hook)||void 0===i?void 0:i.remove;f(s)?s(u,a):a()}else u.children?(E(u),A(e,u.children,0,u.children.length-1)):y.removeChild(e,u.elm)}}function O(e,t,n){var r,o,i,l,a,c,v,p,h=null===(r=t.data)||void 0===r?void 0:r.hook;null===(o=null==h?void 0:h.prepatch)||void 0===o||o.call(h,e,t);var g=t.elm=e.elm;if(e!==t){if(void 0!==t.data||f(t.text)&&t.text!==e.text){null!==(i=t.data)&&void 0!==i||(t.data={}),null!==(l=e.data)&&void 0!==l||(e.data={});for(var x=0;x<d.update.length;++x)d.update[x](e,t);null===(v=null===(c=null===(a=t.data)||void 0===a?void 0:a.hook)||void 0===c?void 0:c.update)||void 0===v||v.call(c,e,t)}var b=e.children,C=t.children;u(t.text)?f(b)&&f(C)?b!==C&&function(e,t,n,r){for(var o,i,l,a=0,d=0,f=t.length-1,c=t[0],v=t[f],p=n.length-1,h=n[0],g=n[p];a<=f&&d<=p;)null==c?c=t[++a]:null==v?v=t[--f]:null==h?h=n[++d]:null==g?g=n[--p]:s(c,h)?(O(c,h,r),c=t[++a],h=n[++d]):s(v,g)?(O(v,g,r),v=t[--f],g=n[--p]):s(c,g)?(O(c,g,r),y.insertBefore(e,c.elm,y.nextSibling(v.elm)),c=t[++a],g=n[--p]):s(v,h)?(O(v,h,r),y.insertBefore(e,v.elm,c.elm),v=t[--f],h=n[++d]):(void 0===o&&(o=m(t,a,f)),u(i=o[h.key])?(y.insertBefore(e,T(h,r),c.elm),h=n[++d]):u(o[g.key])?(y.insertBefore(e,T(g,r),y.nextSibling(v.elm)),g=n[--p]):((l=t[i]).sel!==h.sel?y.insertBefore(e,T(h,r),c.elm):(O(l,h,r),t[i]=void 0,y.insertBefore(e,l.elm,c.elm)),h=n[++d]));d<=p&&k(e,null==n[p+1]?null:n[p+1].elm,n,d,p,r),a<=f&&A(e,t,a,f)}(g,b,C,n):f(C)?(f(e.text)&&y.setTextContent(g,""),k(g,null,C,0,C.length-1,n)):f(b)?A(g,b,0,b.length-1):f(e.text)&&y.setTextContent(g,""):e.text!==t.text&&(f(b)&&A(g,b,0,b.length-1),y.setTextContent(g,t.text)),null===(p=null==h?void 0:h.postpatch)||void 0===p||p.call(h,e,t)}}return function(e,t){var n,r,o,i=[];for(n=0;n<d.pre.length;++n)d.pre[n]();for(function(e,t){return e.isElement(t)}(y,e)?e=N(e):function(e,t){return e.isDocumentFragment(t)}(y,e)&&(e=w(e)),s(e,t)?O(e,t,i):(r=e.elm,o=y.parentNode(r),T(t,i),null!==o&&(y.insertBefore(o,t.elm,y.nextSibling(r)),A(o,[e],0,0))),n=0;n<i.length;++n)i[n].data.hook.insert(i[n]);for(n=0;n<d.post.length;++n)d.post[n]();return t}}},4417:(e,t,n)=>{function r(e,t){var n,r,o=t.elm,i=e.data.class,l=t.data.class;if((i||l)&&i!==l){for(r in l=l||{},i=i||{})i[r]&&!Object.prototype.hasOwnProperty.call(l,r)&&o.classList.remove(r);for(r in l)(n=l[r])!==i[r]&&o.classList[n?"add":"remove"](r)}}n.d(t,{h:()=>o});var o={create:r,update:r}},5348:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){if("function"==typeof e)e.call(t,n,t);else if("object"===r(e))for(var i=0;i<e.length;i++)o(e[i],t,n)}function i(e,t){var n=e.type,r=t.data.on;r&&r[n]&&o(r[n],t,e)}function l(e,t){var n,r=e.data.on,o=e.listener,l=e.elm,a=t&&t.data.on,d=t&&t.elm;if(r!==a){if(r&&o)if(a)for(n in r)a[n]||l.removeEventListener(n,o,!1);else for(n in r)l.removeEventListener(n,o,!1);if(a){var u=t.listener=e.listener||function e(t){i(t,e.vnode)};if(u.vnode=t,r)for(n in a)r[n]||d.addEventListener(n,u,!1);else for(n in a)d.addEventListener(n,u,!1)}}}n.d(t,{I:()=>a});var a={create:l,update:l,destroy:l}},5363:(e,t,n)=>{function r(e,t){var n,r,o=t.elm,i=e.data.props,l=t.data.props;if((i||l)&&i!==l)for(n in i=i||{},l=l||{})r=l[n],i[n]===r||"value"===n&&o[n]===r||(o[n]=r)}n.d(t,{l:()=>o});var o={create:r,update:r}},1488:(e,t,n)=>{n.d(t,{W:()=>d});var r="function"==typeof(null===window||void 0===window?void 0:window.requestAnimationFrame)?window.requestAnimationFrame.bind(window):setTimeout,o=function(e){r((function(){r(e)}))},i=!1;function l(e,t,n){o((function(){e[t]=n}))}function a(e,t){var n,r,o=t.elm,i=e.data.style,a=t.data.style;if((i||a)&&i!==a){a=a||{};var d="delayed"in(i=i||{});for(r in i)r in a||("-"===r[0]&&"-"===r[1]?o.style.removeProperty(r):o.style[r]="");for(r in a)if(n=a[r],"delayed"===r&&a.delayed)for(var u in a.delayed)n=a.delayed[u],d&&n===i.delayed[u]||l(o.style,u,n);else"remove"!==r&&n!==i[r]&&("-"===r[0]&&"-"===r[1]?o.style.setProperty(r,n):o.style[r]=n)}}var d={pre:function(){i=!1},create:a,update:a,destroy:function(e){var t,n,r=e.elm,o=e.data.style;if(o&&(t=o.destroy))for(n in t)r.style[n]=t[n]},remove:function(e,t){var n=e.data.style;if(n&&n.remove){var r;i||(e.elm.offsetLeft,i=!0);var o=e.elm,l=0,a=n.remove,d=0,u=[];for(r in a)u.push(r),o.style[r]=a[r];for(var f=getComputedStyle(o)["transition-property"].split(", ");l<f.length;++l)-1!==u.indexOf(f[l])&&d++;o.addEventListener("transitionend",(function(e){e.target===o&&--d,0===d&&t()}))}else t()}}},3422:(e,t,n)=>{function r(e,t,n){if(e.ns="http://www.w3.org/2000/svg","foreignObject"!==n&&void 0!==t)for(var o=0;o<t.length;++o){var i=t[o];if("string"!=typeof i){var l=i.data;void 0!==l&&r(l,i.children,i.sel)}}}n.d(t,{E:()=>l});var o=n(4989),i=n(4214);function l(e,t){var n,a=void 0!==t?t:i.i;if(a.isElement(e)){var d,u,f,c=e.id?"#"+e.id:"",s=e.getAttribute("class"),v=s?"."+s.split(" ").join("."):"",m=a.tagName(e).toLowerCase()+c+v,p={},y={},h={},g=[],x=e.attributes,b=e.childNodes;for(u=0,f=x.length;u<f;u++)(d=x[u].nodeName).startsWith("data-")?y[d.slice(5)]=x[u].nodeValue||"":"id"!==d&&"class"!==d&&(p[d]=x[u].nodeValue);for(u=0,f=b.length;u<f;u++)g.push(l(b[u],t));return Object.keys(p).length>0&&(h.attrs=p),Object.keys(y).length>0&&(h.dataset=y),!m.startsWith("svg")||3!==m.length&&"."!==m[3]&&"#"!==m[3]||r(h,g,m),(0,o.p)(m,h,g,void 0,e)}return a.isText(e)?(n=a.getTextContent(e),(0,o.p)(void 0,void 0,void 0,n,e)):a.isComment(e)?(n=a.getTextContent(e),(0,o.p)("!",{},[],n,e)):(0,o.p)("",{},[],void 0,e)}},4989:(e,t,n)=>{function r(e,t,n,r,o){return{sel:e,data:t,children:n,text:r,elm:o,key:void 0===t?void 0:t.key}}n.d(t,{p:()=>r})}}]);