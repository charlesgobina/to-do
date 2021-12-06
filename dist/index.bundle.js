/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/boxicons/dist/boxicons.js":
/*!************************************************!*\
  !*** ./node_modules/boxicons/dist/boxicons.js ***!
  \************************************************/
/***/ ((module) => {

!function(t,e,n,r,o){if("customElements"in n)o();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);var a=n.AWAITING_WEB_COMPONENTS_POLYFILL=f();a.then(o);var i=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?c(i).then((function(){a.isDone=!0,a.exec()})):c(s).then((function(){c(i).then((function(){a.isDone=!0,a.exec()}))}))}function f(){var t=[];return t.isDone=!1,t.exec=function(){t.splice(0).forEach((function(t){t()}))},t.then=function(e){return t.isDone?e():t.push(e),t},t}function c(t){var e=f(),n=r.createElement("script");return n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e.isDone=!0,e.exec())}:n.onload=function(){e.isDone=!0,e.exec()},n.src=t,r.getElementsByTagName("head")[0].appendChild(n),n.then=e.then,n}}(0,0,window,document,(function(){var t,e;t=window,e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r=n(3);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(4);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(t,e,n){"use strict";n.r(e),n.d(e,"BoxIconElement",(function(){return g}));var r,o,a,i,s=n(1),f=n.n(s),c=n(2),l=n.n(c),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=(o=(r=Object).getPrototypeOf||function(t){return t.__proto__},a=r.setPrototypeOf||function(t,e){return t.__proto__=e,t},i="object"===("undefined"==typeof Reflect?"undefined":m(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),a(new r,n.prototype)},function(t){var e=o(t);return a(t,a((function(){return i(e,arguments,o(this).constructor)}),e))}),p=window,b={},y=document.createElement("template"),h=function(){return!!p.ShadyCSS};y.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+f.a+"\n"+l.a+'\n</style>\n<div id="icon"></div>';var g=d(function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.$ui=t.attachShadow({mode:"open"}),t.$ui.appendChild(t.ownerDocument.importNode(y.content,!0)),h()&&p.ShadyCSS.styleElement(t),t._state={$iconHolder:t.$ui.getElementById("icon"),type:t.getAttribute("type")},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,HTMLElement),u(e,null,[{key:"getIconSvg",value:function(t,e){var n=this.cdnUrl+"/regular/bx-"+t+".svg";return"solid"===e?n=this.cdnUrl+"/solid/bxs-"+t+".svg":"logo"===e&&(n=this.cdnUrl+"/logos/bxl-"+t+".svg"),n&&b[n]||(b[n]=new Promise((function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?e(new Error(this.status+" "+this.responseText)):t(this.responseText)})),r.onerror=e,r.onabort=e,r.open("GET",n),r.send()}))),b[n]}},{key:"define",value:function(t){t=t||this.tagName,h()&&p.ShadyCSS.prepareTemplate(y,t),customElements.define(t,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.0.9/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),u(e,[{key:"attributeChangedCallback",value:function(t,e,n){var r=this._state.$iconHolder;switch(t){case"type":!function(t,e,n){var r=t._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==r.currentName&&t.constructor.getIconSvg(r.currentName,r.type).then((function(t){r.type===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+r.currentName+"\n"+t)}))}(this,0,n);break;case"name":!function(t,e,n){var r=t._state;r.currentName=n,r.$iconHolder.textContent="",n&&void 0!==r.type&&t.constructor.getIconSvg(n,r.type).then((function(t){r.currentName===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+n+"\n"+t)}))}(this,0,n);break;case"color":r.style.fill=n||"";break;case"size":!function(t,e,n){var r=t._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=n.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,n);break;case"rotate":e&&r.classList.remove("bx-rotate-"+e),n&&r.classList.add("bx-rotate-"+n);break;case"flip":e&&r.classList.remove("bx-flip-"+e),n&&r.classList.add("bx-flip-"+n);break;case"animation":e&&r.classList.remove("bx-"+e),n&&r.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){h()&&p.ShadyCSS.styleElement(this)}}]),e}());e.default=g,g.define()}])}, true?module.exports=e():0}));
//# sourceMappingURL=boxicons.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.tasks {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\n.tasks li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.edy {\r\n  margin-left: 10px;\r\n  margin-right: 40px;\r\n  border-top: none;\r\n  border-bottom: none;\r\n  width: 90%;\r\n  border-left: none;\r\n  border-right: none;\r\n  padding: 10px 0;\r\n  font-size: 1rem;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.todo-container {\r\n  width: 90%;\r\n  margin: 2rem auto;\r\n  border: 1px solid #fff;\r\n  box-shadow: 2px 2px 7px 7px #ddd;\r\n  border-radius: 10px;\r\n  transition: all 0.5s;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .todo-container {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1400px) {\r\n  .todo-container {\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-self: center;\r\n  padding: 10px;\r\n}\r\n\r\n.mylo.crossed {\r\n  text-decoration: line-through;\r\n  color: rgb(177, 177, 177);\r\n}\r\n\r\n#enter {\r\n  background-color: #fff;\r\n}\r\n\r\n.bx {\r\n  color: rgb(177, 177, 177);\r\n}\r\n\r\n.heading h1 {\r\n  font-size: 1rem;\r\n}\r\n\r\n.heading .bx {\r\n  cursor: pointer;\r\n}\r\n\r\n.i-task #move {\r\n  cursor: move;\r\n  display: none;\r\n}\r\n\r\n.i-task #trash {\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.i-task #trash:hover {\r\n  color: rgb(211, 17, 17);\r\n}\r\n\r\n.edy:focus {\r\n  background-color: rgb(234, 252, 158);\r\n  padding-left: 10px;\r\n  border-radius: 20px;\r\n  transition: all 0.5s;\r\n  outline: none;\r\n}\r\n\r\n#for-update {\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  border: none;\r\n  background-color: rgb(243, 243, 243);\r\n  color: rgb(177, 177, 177);\r\n  font-size: 1rem;\r\n  transition: all 0.5s;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.input {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.input .bx {\r\n  height: 50.71px;\r\n  padding-top: 0.6em;\r\n  border-bottom: 1px solid #ddd;\r\n  border-top: 1px solid #ddd;\r\n  padding-right: 10px;\r\n}\r\n\r\n.input .bx:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.add-task {\r\n  width: 100%;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 1px solid #ddd;\r\n  border-top: 1px solid #ddd;\r\n  padding: 15px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.add-task:focus {\r\n  outline: none;\r\n}\r\n\r\n.add-task::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.check {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.complete-btn {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 15px;\r\n  background-color: rgb(243, 243, 243);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,sBAAsB;EACtB,gCAAgC;EAChC,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;EACzB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;EAC1B,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;EAC7B,0BAA0B;EAC1B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,oCAAoC;AACtC","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.tasks {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\n.tasks li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.edy {\r\n  margin-left: 10px;\r\n  margin-right: 40px;\r\n  border-top: none;\r\n  border-bottom: none;\r\n  width: 90%;\r\n  border-left: none;\r\n  border-right: none;\r\n  padding: 10px 0;\r\n  font-size: 1rem;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.todo-container {\r\n  width: 90%;\r\n  margin: 2rem auto;\r\n  border: 1px solid #fff;\r\n  box-shadow: 2px 2px 7px 7px #ddd;\r\n  border-radius: 10px;\r\n  transition: all 0.5s;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .todo-container {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1400px) {\r\n  .todo-container {\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-self: center;\r\n  padding: 10px;\r\n}\r\n\r\n.mylo.crossed {\r\n  text-decoration: line-through;\r\n  color: rgb(177, 177, 177);\r\n}\r\n\r\n#enter {\r\n  background-color: #fff;\r\n}\r\n\r\n.bx {\r\n  color: rgb(177, 177, 177);\r\n}\r\n\r\n.heading h1 {\r\n  font-size: 1rem;\r\n}\r\n\r\n.heading .bx {\r\n  cursor: pointer;\r\n}\r\n\r\n.i-task #move {\r\n  cursor: move;\r\n  display: none;\r\n}\r\n\r\n.i-task #trash {\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.i-task #trash:hover {\r\n  color: rgb(211, 17, 17);\r\n}\r\n\r\n.edy:focus {\r\n  background-color: rgb(234, 252, 158);\r\n  padding-left: 10px;\r\n  border-radius: 20px;\r\n  transition: all 0.5s;\r\n  outline: none;\r\n}\r\n\r\n#for-update {\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  border: none;\r\n  background-color: rgb(243, 243, 243);\r\n  color: rgb(177, 177, 177);\r\n  font-size: 1rem;\r\n  transition: all 0.5s;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.input {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.input .bx {\r\n  height: 50.71px;\r\n  padding-top: 0.6em;\r\n  border-bottom: 1px solid #ddd;\r\n  border-top: 1px solid #ddd;\r\n  padding-right: 10px;\r\n}\r\n\r\n.input .bx:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.add-task {\r\n  width: 100%;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 1px solid #ddd;\r\n  border-top: 1px solid #ddd;\r\n  padding: 15px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.add-task:focus {\r\n  outline: none;\r\n}\r\n\r\n.add-task::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.check {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.complete-btn {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 15px;\r\n  background-color: rgb(243, 243, 243);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fucntions.js":
/*!**************************!*\
  !*** ./src/fucntions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Tasks {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
    this.taskList = [];
  }

  getStorage() {
    this.taskList = JSON.parse(localStorage.getItem('Tasks')) || [];
    return this.taskList;
  }

  setStorage() {
    localStorage.setItem('Tasks', JSON.stringify(this.taskList));
  }

  addItem() {
    const task = {
      index: this.index,
      description: this.description,
      completed: this.completed,
    };

    this.taskList = this.getStorage();
    this.taskList.push(task);
    this.setStorage();
  }

  updateItem(id, text) {
    id = Number(id);
    this.taskList = this.getStorage();
    for (let i = 0; i < this.taskList.length; i += 1) {
      if (this.taskList[i].index === id) {
        text.addEventListener('change', (e) => {
          this.taskList[i].description = e.target.value;
          this.setStorage();
        });
      }
    }
  }

  deleteAllCheckedItems(tasks) {
    this.taskList = tasks;
    this.taskList = this.getStorage();
    this.taskList = this.taskList.filter((task) => task.completed === false);
    this.setStorage();
  }

  deleteSingleItem(id) {
    this.taskList = this.getStorage();
    this.taskList = this.taskList.filter((task) => task.index !== id);
    this.setStorage();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! boxicons */ "./node_modules/boxicons/dist/boxicons.js");
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(boxicons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fucntions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fucntions.js */ "./src/fucntions.js");




const task = new _fucntions_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
const addBtn = document.querySelector('#enter');
const text = document.querySelector('#add-task');

function change() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  const checky = document.querySelectorAll('#choke');
  checky.forEach((check) => {
    let checkId = check.dataset.id;
    checkId = Number(checkId);
    const mylo = document.querySelectorAll('.mylo');
    check.addEventListener('change', () => {
      if (check.checked) {
        for (let i = 0; i < task.taskList.length; i += 1) {
          if (task.taskList[i].index === checkId) {
            if (task.taskList[i].completed === false) {
              task.taskList[i].completed = true;
              mylo.forEach((mile) => {
                if (mile.value === task.taskList[i].description) {
                  mile.classList.add('crossed');
                }
              });
              localStorage.setItem('Tasks', JSON.stringify(task.taskList));
            }
          }
        }
      } else {
        for (let i = 0; i < task.taskList.length; i += 1) {
          if (task.taskList[i].index === checkId) {
            task.taskList[i].completed = false;
            mylo.forEach((mile) => {
              if (mile.value === task.taskList[i].description) {
                if (mile.classList.contains('crossed')) {
                  mile.classList.remove('crossed');
                }
              }
            });
            localStorage.setItem('Tasks', JSON.stringify(task.taskList));
          }
        }
      }
    });
  });
}

function loadcheckedData() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  let item = document.querySelectorAll('#choke');
  item = Array.from(item);
  item.forEach((check) => {
    let checkId = check.dataset.id;
    checkId = Number(checkId);
    for (let i = 0; i < task.taskList.length; i += 1) {
      if (checkId === task.taskList[i].index) {
        if (task.taskList[i].completed === true) {
          check.checked = true;
        }
      }
    }
  });
}

function loadCrossed() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  let mylo = document.querySelectorAll('.mylo');
  mylo = Array.from(mylo);
  mylo.forEach((mile) => {
    let mileId = mile.dataset.id;
    mileId = Number(mileId);
    for (let i = 0; i < task.taskList.length; i += 1) {
      if (mileId === task.taskList[i].index) {
        if (task.taskList[i].completed === true) {
          mile.classList.add('crossed');
        } else {
          mile.classList.remove('crossed');
        }
      }
    }
  });
}

function orderingTasks() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  for (let i = 0; i < task.taskList.length; i += 1) {
    task.taskList[i].index = i + 1;
  }
  task.setStorage();
}

function changeToMove() {
  const teta = document.querySelectorAll('#move');
  const omega = document.querySelectorAll('.edy');
  omega.forEach((omi) => {
    let omiId = omi.dataset.id;
    omiId = Number(omiId);
    teta.forEach((tet) => {
      let tetID = tet.dataset.id;
      tetID = Number(tetID);
      omi.addEventListener('click', () => {
        if (omiId === tetID) {
          tet.style.display = 'none';
        }
      });
      omi.addEventListener('change', () => {
        if (omiId === tetID) {
          tet.style.display = 'block';
        }
      });
    });
  });
}

function changeToTrash() {
  const delta = document.querySelectorAll('#trash');
  const omega = document.querySelectorAll('.edy');
  omega.forEach((omi) => {
    let omiId = omi.dataset.id;
    omiId = Number(omiId);
    delta.forEach((del) => {
      let delID = del.dataset.id;
      delID = Number(delID);
      omi.addEventListener('click', () => {
        if (omiId === delID) {
          del.style.display = 'block';
        }
      });
      omi.addEventListener('change', () => {
        if (omiId === delID) {
          del.style.display = 'none';
        }
      });
    });
  });
}

function displayTasks() {
  const tasks = document.querySelector('.tasks');
  task.taskList = task.getStorage();
  task.taskList.sort((a, b) => a.index - b.index);
  let taskHolder = '';
  for (let i = 0; i < task.taskList.length; i += 1) {
    taskHolder += `
    <li class="i-task">
      <span class="check">
        <input data-id="${task.taskList[i].index}" id="choke" type="checkbox">
        <input id="for-update" class="edy mylo" data-id="${task.taskList[i].index}" type="text" value="${task.taskList[i].description}">
      </span>
      <form>
      </form>
      <i data-id="${task.taskList[i].index}" class='bx bx-dots-vertical-rounded bx-sm'id="move"></i>
      <button type="button" class="del" data-id="${task.taskList[i].index}" id="trash" ><i class='bx bx-trash bx-sm'></i></button>
    </li>
    `;
  }
  task.setStorage();
  change();
  loadcheckedData();
  loadCrossed();
  tasks.innerHTML = taskHolder;
}

function deleteSingleTask() {
  let delta = document.querySelectorAll('#trash');
  delta = Array.from(delta);
  for (let i = 0; i < delta.length; i++) {
    let suprimeurId = delta[i].dataset.id;
    suprimeurId = Number(suprimeurId);
    delta[i].addEventListener('click', (e) => {
      console.log(e)
      task.deleteSingleItem(suprimeurId);
             
    });
  }
}

deleteSingleTask()

function deleteEverything() {
  const deleteAll = document.querySelector('#clear-all');
  deleteAll.addEventListener('click', () => {
    task.deleteAllCheckedItems(task.taskList);
    displayTasks();
    change();
    loadcheckedData();
    loadCrossed();
    orderingTasks();
    deleteSingleTask();
  });
}

function updateValue() {
  const uText = document.querySelectorAll('.edy');
  uText.forEach((iUpdate) => {
    const updateId = iUpdate.dataset.id;
    task.updateItem(updateId, iUpdate);
    task.setStorage();
    change();
    loadcheckedData();
    loadCrossed();
  });
}

function addTask() {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    task.index = task.taskList.length + 1;
    task.description = text.value;
    task.completed = false;
    task.addItem();
    text.value = '';
    orderingTasks();
    displayTasks();
    updateValue();
    change();
    loadcheckedData();
    loadCrossed();
    deleteSingleTask();
    changeToTrash();
    changeToMove();
  });
}
addTask();

window.onload = () => {
  displayTasks();
  change();
  loadcheckedData();
  loadCrossed();
  updateValue();
  deleteEverything();
  deleteSingleTask();
  changeToMove();
  changeToTrash();
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2JveGljb25zL2Rpc3QvYm94aWNvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9mdWNudGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlLG4scixvKXtpZihcImN1c3RvbUVsZW1lbnRzXCJpbiBuKW8oKTtlbHNle2lmKG4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEwpcmV0dXJuIHZvaWQgbi5BV0FJVElOR19XRUJfQ09NUE9ORU5UU19QT0xZRklMTC50aGVuKG8pO3ZhciBhPW4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEw9ZigpO2EudGhlbihvKTt2YXIgaT1uLldFQl9DT01QT05FTlRTX1BPTFlGSUxMfHxcIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3dlYmNvbXBvbmVudHNqcy8yLjAuMi93ZWJjb21wb25lbnRzLWJ1bmRsZS5qc1wiLHM9bi5FUzZfQ09SRV9QT0xZRklMTHx8XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9jb3JlLWpzLzIuNS4zL2NvcmUubWluLmpzXCI7XCJQcm9taXNlXCJpbiBuP2MoaSkudGhlbigoZnVuY3Rpb24oKXthLmlzRG9uZT0hMCxhLmV4ZWMoKX0pKTpjKHMpLnRoZW4oKGZ1bmN0aW9uKCl7YyhpKS50aGVuKChmdW5jdGlvbigpe2EuaXNEb25lPSEwLGEuZXhlYygpfSkpfSkpfWZ1bmN0aW9uIGYoKXt2YXIgdD1bXTtyZXR1cm4gdC5pc0RvbmU9ITEsdC5leGVjPWZ1bmN0aW9uKCl7dC5zcGxpY2UoMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7dCgpfSkpfSx0LnRoZW49ZnVuY3Rpb24oZSl7cmV0dXJuIHQuaXNEb25lP2UoKTp0LnB1c2goZSksdH0sdH1mdW5jdGlvbiBjKHQpe3ZhciBlPWYoKSxuPXIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyZXR1cm4gbi50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIsbi5yZWFkeVN0YXRlP24ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7XCJsb2FkZWRcIiE9bi5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPW4ucmVhZHlTdGF0ZXx8KG4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsZS5pc0RvbmU9ITAsZS5leGVjKCkpfTpuLm9ubG9hZD1mdW5jdGlvbigpe2UuaXNEb25lPSEwLGUuZXhlYygpfSxuLnNyYz10LHIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKG4pLG4udGhlbj1lLnRoZW4sbn19KDAsMCx3aW5kb3csZG9jdW1lbnQsKGZ1bmN0aW9uKCl7dmFyIHQsZTt0PXdpbmRvdyxlPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9NSl9KFtmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcCgoZnVuY3Rpb24oZSl7dmFyIG49ZnVuY3Rpb24odCxlKXt2YXIgbixyPXRbMV18fFwiXCIsbz10WzNdO2lmKCFvKXJldHVybiByO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBhPShuPW8sXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSkrXCIgKi9cIiksaT1vLnNvdXJjZXMubWFwKChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrby5zb3VyY2VSb290K3QrXCIgKi9cIn0pKTtyZXR1cm5bcl0uY29uY2F0KGkpLmNvbmNhdChbYV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9KGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIituK1wifVwiOm59KSkuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciByPXt9LG89MDtvPHRoaXMubGVuZ3RoO28rKyl7dmFyIGE9dGhpc1tvXVswXTtcIm51bWJlclwiPT10eXBlb2YgYSYmKHJbYV09ITApfWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBpPXRbb107XCJudW1iZXJcIj09dHlwZW9mIGlbMF0mJnJbaVswXV18fChuJiYhaVsyXT9pWzJdPW46biYmKGlbMl09XCIoXCIraVsyXStcIikgYW5kIChcIituK1wiKVwiKSxlLnB1c2goaSkpfX0sZX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMpO3QuZXhwb3J0cz1cInN0cmluZ1wiPT10eXBlb2Ygcj9yOnIudG9TdHJpbmcoKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCk7dC5leHBvcnRzPVwic3RyaW5nXCI9PXR5cGVvZiByP3I6ci50b1N0cmluZygpfSxmdW5jdGlvbih0LGUsbil7KHQuZXhwb3J0cz1uKDApKCExKSkucHVzaChbdC5pLFwiQC13ZWJraXQta2V5ZnJhbWVzIHNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1Aa2V5ZnJhbWVzIHNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYnVyc3R7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX05MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYnVyc3R7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX05MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmbGFzaGluZ3swJXtvcGFjaXR5OjF9NDUle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZsYXNoaW5nezAle29wYWNpdHk6MX00NSV7b3BhY2l0eTowfTkwJXtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZS1sZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1yaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZS1yaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLXVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtdXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtZG93bnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyB0YWRhezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTEwJSwyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTUsLjk1LC45NSkgcm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpfTMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDEwZGVnKTt0cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyl9NDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKC0xMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fUBrZXlmcmFtZXMgdGFkYXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX0xMCUsMjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpfTQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmJ4LXNwaW4sLmJ4LXNwaW4taG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246c3BpbiAycyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW4gMnMgbGluZWFyIGluZmluaXRlfS5ieC10YWRhLC5ieC10YWRhLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOnRhZGEgMS41cyBlYXNlIGluZmluaXRlO2FuaW1hdGlvbjp0YWRhIDEuNXMgZWFzZSBpbmZpbml0ZX0uYngtZmxhc2hpbmcsLmJ4LWZsYXNoaW5nLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZsYXNoaW5nIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmbGFzaGluZyAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtYnVyc3QsLmJ4LWJ1cnN0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmJ1cnN0IDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpidXJzdCAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS11cCwuYngtZmFkZS11cC1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmYWRlLXVwIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLXVwIDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1mYWRlLWRvd24sLmJ4LWZhZGUtZG93bi1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmYWRlLWRvd24gMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhZGUtZG93biAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS1sZWZ0LC5ieC1mYWRlLWxlZnQtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1sZWZ0IDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLWxlZnQgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtcmlnaHQsLmJ4LWZhZGUtcmlnaHQtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1yaWdodCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS1yaWdodCAxLjVzIGluZmluaXRlIGxpbmVhcn1cIixcIlwiXSl9LGZ1bmN0aW9uKHQsZSxuKXsodC5leHBvcnRzPW4oMCkoITEpKS5wdXNoKFt0LmksJy5ieC1yb3RhdGUtOTB7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXCJ9LmJ4LXJvdGF0ZS0xODB7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVwifS5ieC1yb3RhdGUtMjcwe3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcIn0uYngtZmxpcC1ob3Jpem9udGFse3RyYW5zZm9ybTpzY2FsZVgoLTEpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcIn0uYngtZmxpcC12ZXJ0aWNhbHt0cmFuc2Zvcm06c2NhbGVZKC0xKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXCJ9JyxcIlwiXSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSksbi5kKGUsXCJCb3hJY29uRWxlbWVudFwiLChmdW5jdGlvbigpe3JldHVybiBnfSkpO3ZhciByLG8sYSxpLHM9bigxKSxmPW4ubihzKSxjPW4oMiksbD1uLm4oYyksbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gbiYmdChlLnByb3RvdHlwZSxuKSxyJiZ0KGUsciksZX19KCksZD0obz0ocj1PYmplY3QpLmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX199LGE9ci5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSxpPVwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3Q/XCJ1bmRlZmluZWRcIjptKFJlZmxlY3QpKT9SZWZsZWN0LmNvbnN0cnVjdDpmdW5jdGlvbih0LGUsbil7dmFyIHIsbz1bbnVsbF07cmV0dXJuIG8ucHVzaC5hcHBseShvLGUpLHI9dC5iaW5kLmFwcGx5KHQsbyksYShuZXcgcixuLnByb3RvdHlwZSl9LGZ1bmN0aW9uKHQpe3ZhciBlPW8odCk7cmV0dXJuIGEodCxhKChmdW5jdGlvbigpe3JldHVybiBpKGUsYXJndW1lbnRzLG8odGhpcykuY29uc3RydWN0b3IpfSksZSkpfSkscD13aW5kb3csYj17fSx5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxoPWZ1bmN0aW9uKCl7cmV0dXJuISFwLlNoYWR5Q1NTfTt5LmlubmVySFRNTD0nXFxuPHN0eWxlPlxcbjpob3N0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuOmhvc3QoW3NpemU9eHNdKSB7XFxuICAgIHdpZHRoOiAwLjhyZW07XFxuICAgIGhlaWdodDogMC44cmVtO1xcbn1cXG46aG9zdChbc2l6ZT1zbV0pIHtcXG4gICAgd2lkdGg6IDEuNTVyZW07XFxuICAgIGhlaWdodDogMS41NXJlbTtcXG59XFxuOmhvc3QoW3NpemU9bWRdKSB7XFxuICAgIHdpZHRoOiAyLjI1cmVtO1xcbiAgICBoZWlnaHQ6IDIuMjVyZW07XFxufVxcbjpob3N0KFtzaXplPWxnXSkge1xcbiAgICB3aWR0aDogMy4wcmVtO1xcbiAgICBoZWlnaHQ6IDMuMHJlbTtcXG59XFxuXFxuOmhvc3QoW3NpemVdOm5vdChbc2l6ZT1cIlwiXSk6bm90KFtzaXplPXhzXSk6bm90KFtzaXplPXNtXSk6bm90KFtzaXplPW1kXSk6bm90KFtzaXplPWxnXSkpIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuOmhvc3QoW3B1bGw9bGVmdF0pICNpY29uIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogLjNlbSFpbXBvcnRhbnQ7XFxufVxcbjpob3N0KFtwdWxsPXJpZ2h0XSkgI2ljb24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAuM2VtIWltcG9ydGFudDtcXG59XFxuOmhvc3QoW2JvcmRlcj1zcXVhcmVdKSAjaWNvbiB7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBib3JkZXI6IC4wN2VtIHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXG59XFxuOmhvc3QoW2JvcmRlcj1jaXJjbGVdKSAjaWNvbiB7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBib3JkZXI6IC4wN2VtIHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbiNpY29uLFxcbnN2ZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI2ljb24ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gXFxuJytmLmErXCJcXG5cIitsLmErJ1xcbjwvc3R5bGU+XFxuPGRpdiBpZD1cImljb25cIj48L2Rpdj4nO3ZhciBnPWQoZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSk7dmFyIHQ9ZnVuY3Rpb24odCxlKXtpZighdCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP3Q6ZX0odGhpcywoZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSkuY2FsbCh0aGlzKSk7cmV0dXJuIHQuJHVpPXQuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdC4kdWkuYXBwZW5kQ2hpbGQodC5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoeS5jb250ZW50LCEwKSksaCgpJiZwLlNoYWR5Q1NTLnN0eWxlRWxlbWVudCh0KSx0Ll9zdGF0ZT17JGljb25Ib2xkZXI6dC4kdWkuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpLHR5cGU6dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfSx0fXJldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiBlKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGUpOnQuX19wcm90b19fPWUpfShlLEhUTUxFbGVtZW50KSx1KGUsbnVsbCxbe2tleTpcImdldEljb25TdmdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuY2RuVXJsK1wiL3JlZ3VsYXIvYngtXCIrdCtcIi5zdmdcIjtyZXR1cm5cInNvbGlkXCI9PT1lP249dGhpcy5jZG5VcmwrXCIvc29saWQvYnhzLVwiK3QrXCIuc3ZnXCI6XCJsb2dvXCI9PT1lJiYobj10aGlzLmNkblVybCtcIi9sb2dvcy9ieGwtXCIrdCtcIi5zdmdcIiksbiYmYltuXXx8KGJbbl09bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQsZSl7dmFyIHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3IuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXt0aGlzLnN0YXR1czwyMDB8fHRoaXMuc3RhdHVzPj0zMDA/ZShuZXcgRXJyb3IodGhpcy5zdGF0dXMrXCIgXCIrdGhpcy5yZXNwb25zZVRleHQpKTp0KHRoaXMucmVzcG9uc2VUZXh0KX0pKSxyLm9uZXJyb3I9ZSxyLm9uYWJvcnQ9ZSxyLm9wZW4oXCJHRVRcIixuKSxyLnNlbmQoKX0pKSksYltuXX19LHtrZXk6XCJkZWZpbmVcIix2YWx1ZTpmdW5jdGlvbih0KXt0PXR8fHRoaXMudGFnTmFtZSxoKCkmJnAuU2hhZHlDU1MucHJlcGFyZVRlbXBsYXRlKHksdCksY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsdGhpcyl9fSx7a2V5OlwiY2RuVXJsXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCIvL3VucGtnLmNvbS9ib3hpY29uc0AyLjAuOS9zdmdcIn19LHtrZXk6XCJ0YWdOYW1lXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJib3gtaWNvblwifX0se2tleTpcIm9ic2VydmVkQXR0cmlidXRlc1wiLGdldDpmdW5jdGlvbigpe3JldHVybltcInR5cGVcIixcIm5hbWVcIixcImNvbG9yXCIsXCJzaXplXCIsXCJyb3RhdGVcIixcImZsaXBcIixcImFuaW1hdGlvblwiLFwiYm9yZGVyXCIsXCJwdWxsXCJdfX1dKSx1KGUsW3trZXk6XCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIix2YWx1ZTpmdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5fc3RhdGUuJGljb25Ib2xkZXI7c3dpdGNoKHQpe2Nhc2VcInR5cGVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3IuJGljb25Ib2xkZXIudGV4dENvbnRlbnQ9XCJcIixyLnR5cGUmJihyLnR5cGU9bnVsbCksci50eXBlPSFufHxcInNvbGlkXCIhPT1uJiZcImxvZ29cIiE9PW4/XCJyZWd1bGFyXCI6bix2b2lkIDAhPT1yLmN1cnJlbnROYW1lJiZ0LmNvbnN0cnVjdG9yLmdldEljb25Tdmcoci5jdXJyZW50TmFtZSxyLnR5cGUpLnRoZW4oKGZ1bmN0aW9uKHQpe3IudHlwZT09PW4mJihyLiRpY29uSG9sZGVyLmlubmVySFRNTD10KX0pKS5jYXRjaCgoZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGljb246IFwiK3IuY3VycmVudE5hbWUrXCJcXG5cIit0KX0pKX0odGhpcywwLG4pO2JyZWFrO2Nhc2VcIm5hbWVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3IuY3VycmVudE5hbWU9bixyLiRpY29uSG9sZGVyLnRleHRDb250ZW50PVwiXCIsbiYmdm9pZCAwIT09ci50eXBlJiZ0LmNvbnN0cnVjdG9yLmdldEljb25TdmcobixyLnR5cGUpLnRoZW4oKGZ1bmN0aW9uKHQpe3IuY3VycmVudE5hbWU9PT1uJiYoci4kaWNvbkhvbGRlci5pbm5lckhUTUw9dCl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpY29uOiBcIituK1wiXFxuXCIrdCl9KSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJjb2xvclwiOnIuc3R5bGUuZmlsbD1ufHxcIlwiO2JyZWFrO2Nhc2VcInNpemVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3Iuc2l6ZSYmKHIuJGljb25Ib2xkZXIuc3R5bGUud2lkdGg9ci4kaWNvbkhvbGRlci5zdHlsZS5oZWlnaHQ9XCJcIixyLnNpemU9ci5zaXplVHlwZT1udWxsKSxuJiYhL14oeHN8c218bWR8bGcpJC8udGVzdChyLnNpemUpJiYoci5zaXplPW4udHJpbSgpLHIuJGljb25Ib2xkZXIuc3R5bGUud2lkdGg9ci4kaWNvbkhvbGRlci5zdHlsZS5oZWlnaHQ9ci5zaXplKX0odGhpcywwLG4pO2JyZWFrO2Nhc2VcInJvdGF0ZVwiOmUmJnIuY2xhc3NMaXN0LnJlbW92ZShcImJ4LXJvdGF0ZS1cIitlKSxuJiZyLmNsYXNzTGlzdC5hZGQoXCJieC1yb3RhdGUtXCIrbik7YnJlYWs7Y2FzZVwiZmxpcFwiOmUmJnIuY2xhc3NMaXN0LnJlbW92ZShcImJ4LWZsaXAtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtZmxpcC1cIituKTticmVhaztjYXNlXCJhbmltYXRpb25cIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1cIitlKSxuJiZyLmNsYXNzTGlzdC5hZGQoXCJieC1cIituKX19fSx7a2V5OlwiY29ubmVjdGVkQ2FsbGJhY2tcIix2YWx1ZTpmdW5jdGlvbigpe2goKSYmcC5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodGhpcyl9fV0pLGV9KCkpO2UuZGVmYXVsdD1nLGcuZGVmaW5lKCl9XSl9LFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQm94SWNvbkVsZW1lbnQ9ZSgpOnQuQm94SWNvbkVsZW1lbnQ9ZSgpfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym94aWNvbnMuanMubWFwIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3Mge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5lZHkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggN3B4IDdweCAjZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxyXFxuICAudG9kby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5teWxvLmNyb3NzZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcclxcbn1cXHJcXG5cXHJcXG4jZW50ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ4IHtcXHJcXG4gIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcgLmJ4IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmktdGFzayAjbW92ZSB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaS10YXNrICN0cmFzaCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5pLXRhc2sgI3RyYXNoOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjExLCAxNywgMTcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWR5OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDI1MiwgMTU4KTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNmb3ItdXBkYXRlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xcclxcbiAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCAuYngge1xcclxcbiAgaGVpZ2h0OiA1MC43MXB4O1xcclxcbiAgcGFkZGluZy10b3A6IDAuNmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCAuYng6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3Mge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5lZHkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggN3B4IDdweCAjZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxyXFxuICAudG9kby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5teWxvLmNyb3NzZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcclxcbn1cXHJcXG5cXHJcXG4jZW50ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ4IHtcXHJcXG4gIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcgLmJ4IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmktdGFzayAjbW92ZSB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaS10YXNrICN0cmFzaCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5pLXRhc2sgI3RyYXNoOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjExLCAxNywgMTcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWR5OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDI1MiwgMTU4KTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNmb3ItdXBkYXRlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xcclxcbiAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCAuYngge1xcclxcbiAgaGVpZ2h0OiA1MC43MXB4O1xcclxcbiAgcGFkZGluZy10b3A6IDAuNmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCAuYng6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUYXNrcyB7XHJcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RvcmFnZSgpIHtcclxuICAgIHRoaXMudGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrcycpKSB8fCBbXTtcclxuICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xyXG4gIH1cclxuXHJcbiAgc2V0U3RvcmFnZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza0xpc3QpKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oKSB7XHJcbiAgICBjb25zdCB0YXNrID0ge1xyXG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbXBsZXRlZDogdGhpcy5jb21wbGV0ZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGFza0xpc3QgPSB0aGlzLmdldFN0b3JhZ2UoKTtcclxuICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcclxuICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSXRlbShpZCwgdGV4dCkge1xyXG4gICAgaWQgPSBOdW1iZXIoaWQpO1xyXG4gICAgdGhpcy50YXNrTGlzdCA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhc2tMaXN0W2ldLmluZGV4ID09PSBpZCkge1xyXG4gICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgIHRoaXMudGFza0xpc3RbaV0uZGVzY3JpcHRpb24gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVBbGxDaGVja2VkSXRlbXModGFza3MpIHtcclxuICAgIHRoaXMudGFza0xpc3QgPSB0YXNrcztcclxuICAgIHRoaXMudGFza0xpc3QgPSB0aGlzLmdldFN0b3JhZ2UoKTtcclxuICAgIHRoaXMudGFza0xpc3QgPSB0aGlzLnRhc2tMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcclxuICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlU2luZ2xlSXRlbShpZCkge1xyXG4gICAgdGhpcy50YXNrTGlzdCA9IHRoaXMuZ2V0U3RvcmFnZSgpO1xyXG4gICAgdGhpcy50YXNrTGlzdCA9IHRoaXMudGFza0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmluZGV4ICE9PSBpZCk7XHJcbiAgICB0aGlzLnNldFN0b3JhZ2UoKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGFza3M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJ2JveGljb25zJztcclxuaW1wb3J0IFRhc2tzIGZyb20gJy4vZnVjbnRpb25zLmpzJztcclxuXHJcbmNvbnN0IHRhc2sgPSBuZXcgVGFza3MoKTtcclxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyJyk7XHJcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZSgpIHtcclxuICB0YXNrLnRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza3MnKSk7XHJcbiAgY29uc3QgY2hlY2t5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Nob2tlJyk7XHJcbiAgY2hlY2t5LmZvckVhY2goKGNoZWNrKSA9PiB7XHJcbiAgICBsZXQgY2hlY2tJZCA9IGNoZWNrLmRhdGFzZXQuaWQ7XHJcbiAgICBjaGVja0lkID0gTnVtYmVyKGNoZWNrSWQpO1xyXG4gICAgY29uc3QgbXlsbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5teWxvJyk7XHJcbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjaGVjay5jaGVja2VkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLnRhc2tMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICBpZiAodGFzay50YXNrTGlzdFtpXS5pbmRleCA9PT0gY2hlY2tJZCkge1xyXG4gICAgICAgICAgICBpZiAodGFzay50YXNrTGlzdFtpXS5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgdGFzay50YXNrTGlzdFtpXS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIG15bG8uZm9yRWFjaCgobWlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pbGUudmFsdWUgPT09IHRhc2sudGFza0xpc3RbaV0uZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgbWlsZS5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFzay50YXNrTGlzdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFzay50YXNrTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgaWYgKHRhc2sudGFza0xpc3RbaV0uaW5kZXggPT09IGNoZWNrSWQpIHtcclxuICAgICAgICAgICAgdGFzay50YXNrTGlzdFtpXS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbXlsby5mb3JFYWNoKChtaWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG1pbGUudmFsdWUgPT09IHRhc2sudGFza0xpc3RbaV0uZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChtaWxlLmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3NlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1pbGUuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2sudGFza0xpc3QpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkY2hlY2tlZERhdGEoKSB7XHJcbiAgdGFzay50YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rhc2tzJykpO1xyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Nob2tlJyk7XHJcbiAgaXRlbSA9IEFycmF5LmZyb20oaXRlbSk7XHJcbiAgaXRlbS5mb3JFYWNoKChjaGVjaykgPT4ge1xyXG4gICAgbGV0IGNoZWNrSWQgPSBjaGVjay5kYXRhc2V0LmlkO1xyXG4gICAgY2hlY2tJZCA9IE51bWJlcihjaGVja0lkKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFzay50YXNrTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoY2hlY2tJZCA9PT0gdGFzay50YXNrTGlzdFtpXS5pbmRleCkge1xyXG4gICAgICAgIGlmICh0YXNrLnRhc2tMaXN0W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRDcm9zc2VkKCkge1xyXG4gIHRhc2sudGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrcycpKTtcclxuICBsZXQgbXlsbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5teWxvJyk7XHJcbiAgbXlsbyA9IEFycmF5LmZyb20obXlsbyk7XHJcbiAgbXlsby5mb3JFYWNoKChtaWxlKSA9PiB7XHJcbiAgICBsZXQgbWlsZUlkID0gbWlsZS5kYXRhc2V0LmlkO1xyXG4gICAgbWlsZUlkID0gTnVtYmVyKG1pbGVJZCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2sudGFza0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKG1pbGVJZCA9PT0gdGFzay50YXNrTGlzdFtpXS5pbmRleCkge1xyXG4gICAgICAgIGlmICh0YXNrLnRhc2tMaXN0W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgbWlsZS5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1pbGUuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3NlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcmRlcmluZ1Rhc2tzKCkge1xyXG4gIHRhc2sudGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrcycpKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2sudGFza0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHRhc2sudGFza0xpc3RbaV0uaW5kZXggPSBpICsgMTtcclxuICB9XHJcbiAgdGFzay5zZXRTdG9yYWdlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRvTW92ZSgpIHtcclxuICBjb25zdCB0ZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21vdmUnKTtcclxuICBjb25zdCBvbWVnYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZHknKTtcclxuICBvbWVnYS5mb3JFYWNoKChvbWkpID0+IHtcclxuICAgIGxldCBvbWlJZCA9IG9taS5kYXRhc2V0LmlkO1xyXG4gICAgb21pSWQgPSBOdW1iZXIob21pSWQpO1xyXG4gICAgdGV0YS5mb3JFYWNoKCh0ZXQpID0+IHtcclxuICAgICAgbGV0IHRldElEID0gdGV0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIHRldElEID0gTnVtYmVyKHRldElEKTtcclxuICAgICAgb21pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChvbWlJZCA9PT0gdGV0SUQpIHtcclxuICAgICAgICAgIHRldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIG9taS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG9taUlkID09PSB0ZXRJRCkge1xyXG4gICAgICAgICAgdGV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVG9UcmFzaCgpIHtcclxuICBjb25zdCBkZWx0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0cmFzaCcpO1xyXG4gIGNvbnN0IG9tZWdhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkeScpO1xyXG4gIG9tZWdhLmZvckVhY2goKG9taSkgPT4ge1xyXG4gICAgbGV0IG9taUlkID0gb21pLmRhdGFzZXQuaWQ7XHJcbiAgICBvbWlJZCA9IE51bWJlcihvbWlJZCk7XHJcbiAgICBkZWx0YS5mb3JFYWNoKChkZWwpID0+IHtcclxuICAgICAgbGV0IGRlbElEID0gZGVsLmRhdGFzZXQuaWQ7XHJcbiAgICAgIGRlbElEID0gTnVtYmVyKGRlbElEKTtcclxuICAgICAgb21pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChvbWlJZCA9PT0gZGVsSUQpIHtcclxuICAgICAgICAgIGRlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBvbWkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChvbWlJZCA9PT0gZGVsSUQpIHtcclxuICAgICAgICAgIGRlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xyXG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcbiAgdGFzay50YXNrTGlzdCA9IHRhc2suZ2V0U3RvcmFnZSgpO1xyXG4gIHRhc2sudGFza0xpc3Quc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gIGxldCB0YXNrSG9sZGVyID0gJyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLnRhc2tMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICB0YXNrSG9sZGVyICs9IGBcclxuICAgIDxsaSBjbGFzcz1cImktdGFza1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNoZWNrXCI+XHJcbiAgICAgICAgPGlucHV0IGRhdGEtaWQ9XCIke3Rhc2sudGFza0xpc3RbaV0uaW5kZXh9XCIgaWQ9XCJjaG9rZVwiIHR5cGU9XCJjaGVja2JveFwiPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cImZvci11cGRhdGVcIiBjbGFzcz1cImVkeSBteWxvXCIgZGF0YS1pZD1cIiR7dGFzay50YXNrTGlzdFtpXS5pbmRleH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0YXNrLnRhc2tMaXN0W2ldLmRlc2NyaXB0aW9ufVwiPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxpIGRhdGEtaWQ9XCIke3Rhc2sudGFza0xpc3RbaV0uaW5kZXh9XCIgY2xhc3M9J2J4IGJ4LWRvdHMtdmVydGljYWwtcm91bmRlZCBieC1zbSdpZD1cIm1vdmVcIj48L2k+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsXCIgZGF0YS1pZD1cIiR7dGFzay50YXNrTGlzdFtpXS5pbmRleH1cIiBpZD1cInRyYXNoXCIgPjxpIGNsYXNzPSdieCBieC10cmFzaCBieC1zbSc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPC9saT5cclxuICAgIGA7XHJcbiAgfVxyXG4gIHRhc2suc2V0U3RvcmFnZSgpO1xyXG4gIGNoYW5nZSgpO1xyXG4gIGxvYWRjaGVja2VkRGF0YSgpO1xyXG4gIGxvYWRDcm9zc2VkKCk7XHJcbiAgdGFza3MuaW5uZXJIVE1MID0gdGFza0hvbGRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlU2luZ2xlVGFzaygpIHtcclxuICBsZXQgZGVsdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHJhc2gnKTtcclxuICBkZWx0YSA9IEFycmF5LmZyb20oZGVsdGEpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzdXByaW1ldXJJZCA9IGRlbHRhW2ldLmRhdGFzZXQuaWQ7XHJcbiAgICBzdXByaW1ldXJJZCA9IE51bWJlcihzdXByaW1ldXJJZCk7XHJcbiAgICBkZWx0YVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIHRhc2suZGVsZXRlU2luZ2xlSXRlbShzdXByaW1ldXJJZCk7XHJcbiAgICAgICAgICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZGVsZXRlU2luZ2xlVGFzaygpXHJcblxyXG5mdW5jdGlvbiBkZWxldGVFdmVyeXRoaW5nKCkge1xyXG4gIGNvbnN0IGRlbGV0ZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1hbGwnKTtcclxuICBkZWxldGVBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0YXNrLmRlbGV0ZUFsbENoZWNrZWRJdGVtcyh0YXNrLnRhc2tMaXN0KTtcclxuICAgIGRpc3BsYXlUYXNrcygpO1xyXG4gICAgY2hhbmdlKCk7XHJcbiAgICBsb2FkY2hlY2tlZERhdGEoKTtcclxuICAgIGxvYWRDcm9zc2VkKCk7XHJcbiAgICBvcmRlcmluZ1Rhc2tzKCk7XHJcbiAgICBkZWxldGVTaW5nbGVUYXNrKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlKCkge1xyXG4gIGNvbnN0IHVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkeScpO1xyXG4gIHVUZXh0LmZvckVhY2goKGlVcGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZUlkID0gaVVwZGF0ZS5kYXRhc2V0LmlkO1xyXG4gICAgdGFzay51cGRhdGVJdGVtKHVwZGF0ZUlkLCBpVXBkYXRlKTtcclxuICAgIHRhc2suc2V0U3RvcmFnZSgpO1xyXG4gICAgY2hhbmdlKCk7XHJcbiAgICBsb2FkY2hlY2tlZERhdGEoKTtcclxuICAgIGxvYWRDcm9zc2VkKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRhc2suaW5kZXggPSB0YXNrLnRhc2tMaXN0Lmxlbmd0aCArIDE7XHJcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gdGV4dC52YWx1ZTtcclxuICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0YXNrLmFkZEl0ZW0oKTtcclxuICAgIHRleHQudmFsdWUgPSAnJztcclxuICAgIG9yZGVyaW5nVGFza3MoKTtcclxuICAgIGRpc3BsYXlUYXNrcygpO1xyXG4gICAgdXBkYXRlVmFsdWUoKTtcclxuICAgIGNoYW5nZSgpO1xyXG4gICAgbG9hZGNoZWNrZWREYXRhKCk7XHJcbiAgICBsb2FkQ3Jvc3NlZCgpO1xyXG4gICAgZGVsZXRlU2luZ2xlVGFzaygpO1xyXG4gICAgY2hhbmdlVG9UcmFzaCgpO1xyXG4gICAgY2hhbmdlVG9Nb3ZlKCk7XHJcbiAgfSk7XHJcbn1cclxuYWRkVGFzaygpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBkaXNwbGF5VGFza3MoKTtcclxuICBjaGFuZ2UoKTtcclxuICBsb2FkY2hlY2tlZERhdGEoKTtcclxuICBsb2FkQ3Jvc3NlZCgpO1xyXG4gIHVwZGF0ZVZhbHVlKCk7XHJcbiAgZGVsZXRlRXZlcnl0aGluZygpO1xyXG4gIGRlbGV0ZVNpbmdsZVRhc2soKTtcclxuICBjaGFuZ2VUb01vdmUoKTtcclxuICBjaGFuZ2VUb1RyYXNoKCk7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9