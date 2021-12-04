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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.tasks {\n  list-style: none;\n  width: 100%;\n}\n\n.tasks li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n}\n\n.edy {\n  margin-left: 10px;\n  border-top: none;\n  border-bottom: none;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  padding: 10px 0;\n  font-size: 1rem;\n  transition: all 0.5s\n}\n\n.todo-container {\n  width: 40%;\n  margin: 2rem auto;\n  border: 1px solid #fff;\n  box-shadow: 2px 2px 7px 7px #ddd;\n  border-radius: 10px;\n  transition: all 0.5s;\n}\n\n.todo-container:hover {\n  transform: translateY(4px);\n  box-shadow: 3px 3px 3px 3px #ccc;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-self: center;\n  padding: 10px;\n}\n\n.mylo.crossed {\n  text-decoration: line-through;\n  color: rgb(177, 177, 177);\n}\n\n#enter {\n  background-color: #fff\n}\n\n.bx {\n  color: rgb(177, 177, 177);\n}\n\n.heading h1 {\n  font-size: 1.2rem;\n}\n\n.heading .bx {\n  cursor: pointer;\n}\n\n.i-task #move {\n  cursor: move;\n}\n\n.i-task #trash {\n  cursor: pointer;\n  display: none;\n}\n\n.i-task #trash:hover {\n  color: rgb(211, 17, 17);\n}\n\n.edy:focus {\n  background-color: rgb(234, 252, 158);\n  padding-left: 10px;\n  border-radius: 20px;\n  transition: all 0.5s;\n  outline: none;\n}\n\n#for-update {\n  width: 100%;\n  height: 50px;\n}\n\nbutton {\n  display: inline-block;\n  border: none;\n  background-color: rgb(243, 243, 243);\n  color: rgb(177, 177, 177);\n  font-size: 1rem;\n  transition: all 0.5s;\n}\n\nbutton:hover {\n  text-decoration: underline;\n  color: #000;\n  cursor: pointer;\n}\n\n.input {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.input .bx {\n  height: 50.71px;\n  padding-top: 0.6em;\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n  padding-right: 10px;\n}\n\n.input .bx:hover {\n  cursor: pointer;\n}\n\n.add-task {\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n  padding: 15px;\n  font-size: 1rem;\n}\n\n.add-task:focus {\n  outline: none;\n}\n\n.add-task::placeholder {\n  font-style: italic;\n}\n\n.check {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.complete-btn {\n  width: 100%;\n  text-align: center;\n  padding: 15px;\n  background-color: rgb(243, 243, 243);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf;AACF;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,sBAAsB;EACtB,gCAAgC;EAChC,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;EAC1B,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE;AACF;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,oCAAoC;EACpC,yBAAyB;EACzB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;EAC1B,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;EAC7B,0BAA0B;EAC1B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,oCAAoC;AACtC","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.tasks {\n  list-style: none;\n  width: 100%;\n}\n\n.tasks li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n}\n\n.edy {\n  margin-left: 10px;\n  border-top: none;\n  border-bottom: none;\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  padding: 10px 0;\n  font-size: 1rem;\n  transition: all 0.5s\n}\n\n.todo-container {\n  width: 40%;\n  margin: 2rem auto;\n  border: 1px solid #fff;\n  box-shadow: 2px 2px 7px 7px #ddd;\n  border-radius: 10px;\n  transition: all 0.5s;\n}\n\n.todo-container:hover {\n  transform: translateY(4px);\n  box-shadow: 3px 3px 3px 3px #ccc;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-self: center;\n  padding: 10px;\n}\n\n.mylo.crossed {\n  text-decoration: line-through;\n  color: rgb(177, 177, 177);\n}\n\n#enter {\n  background-color: #fff\n}\n\n.bx {\n  color: rgb(177, 177, 177);\n}\n\n.heading h1 {\n  font-size: 1.2rem;\n}\n\n.heading .bx {\n  cursor: pointer;\n}\n\n.i-task #move {\n  cursor: move;\n}\n\n.i-task #trash {\n  cursor: pointer;\n  display: none;\n}\n\n.i-task #trash:hover {\n  color: rgb(211, 17, 17);\n}\n\n.edy:focus {\n  background-color: rgb(234, 252, 158);\n  padding-left: 10px;\n  border-radius: 20px;\n  transition: all 0.5s;\n  outline: none;\n}\n\n#for-update {\n  width: 100%;\n  height: 50px;\n}\n\nbutton {\n  display: inline-block;\n  border: none;\n  background-color: rgb(243, 243, 243);\n  color: rgb(177, 177, 177);\n  font-size: 1rem;\n  transition: all 0.5s;\n}\n\nbutton:hover {\n  text-decoration: underline;\n  color: #000;\n  cursor: pointer;\n}\n\n.input {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.input .bx {\n  height: 50.71px;\n  padding-top: 0.6em;\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n  padding-right: 10px;\n}\n\n.input .bx:hover {\n  cursor: pointer;\n}\n\n.add-task {\n  width: 100%;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n  padding: 15px;\n  font-size: 1rem;\n}\n\n.add-task:focus {\n  outline: none;\n}\n\n.add-task::placeholder {\n  font-style: italic;\n}\n\n.check {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.complete-btn {\n  width: 100%;\n  text-align: center;\n  padding: 15px;\n  background-color: rgb(243, 243, 243);\n}\n"],"sourceRoot":""}]);
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
     let drake = JSON.parse(localStorage.getItem('Tasks')) || []
     return drake
  }

  setStorage() {
    localStorage.setItem('Tasks', JSON.stringify(this.taskList))
  }

  addItem() {
    const task = {
      index: this.index,
      description: this.description,
      completed: this.completed,
    };

    this.taskList = this.getStorage();
    this.taskList.push(task);
    this.setStorage()
  }
  
  updateItem(id,text) {
    id = Number(id);
    this.taskList = this.getStorage();
    for (let i = 0; i < this.taskList.length; i += 1) {
      if (this.taskList[i].index === id) { 
        text.addEventListener('change', (e) => {
          this.taskList[i].description = e.target.value
          console.log(this.taskList[i].index, id)
          this.setStorage()
        })
      }
    }
  }

  deleteAllCheckedItems(tasks) {
    this.taskList = tasks;
    this.taskList = this.getStorage();
    this.taskList = this.taskList.filter(task => task.completed === false)
    this.setStorage()  
  }

  deleteSingleItem(id) {
    this.taskList = this.getStorage();
    this.taskList = this.taskList.filter(task => task.index !== id)
    this.setStorage()
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


function updateValue() {
  const uText = document.querySelectorAll('.edy');
  uText.forEach((iUpdate) => {
    let updateId = iUpdate.dataset.id
    task.updateItem(updateId, iUpdate);
    task.setStorage();
    change();
    loadcheckedData();
    loadCrossed();
  });
}

function orderingTasks() {
  task.taskList = JSON.parse(localStorage.getItem('Tasks'));
  for (let i = 0; i < task.taskList.length; i += 1) {
    task.taskList[i].index = i + 1;
  }
  task.setStorage()
}

function deleteEverything() {
  const deleteAll = document.querySelector('#clear-all')
  deleteAll.addEventListener('click', () => {
    task.deleteAllCheckedItems(task.taskList);
    displayTasks();
    change();
    loadcheckedData();
    loadCrossed();
    orderingTasks()
  });
}

function changeToMove() {
  let teta = document.querySelectorAll('#move');
  let omega = document.querySelectorAll('.edy');
  omega.forEach((omi) => {
    let omiId = omi.dataset.id;
    omiId = Number(omiId);
    teta.forEach((tet) => {
      let tetID = tet.dataset.id;
      tetID = Number(tetID);
      omi.addEventListener('click', () => {
        if (omiId === tetID) {
          tet.style.display = 'none'
          console.log(tetID, omiId)
          console.log('yay')
        }
      })
      omi.addEventListener('change', () => {
        if (omiId === tetID) {
          tet.style.display = 'block'
        }
      })
    })
  })
}

function changeToTrash() {
  let delta = document.querySelectorAll('#trash')
  let omega = document.querySelectorAll('.edy')
  omega.forEach((omi) => {
    let omiId = omi.dataset.id;
    omiId = Number(omiId);
    delta.forEach((del) => {
      let delID = del.dataset.id;
      delID = Number(delID);
      omi.addEventListener('click', () => {
        if (omiId === delID) {
          del.style.display = 'block'
        }
      })
      omi.addEventListener('change', () => {
        if (omiId === delID) {
          del.style.display = 'none'
        }
      })
    })
    
  })
}

function deleteSingleTask() {
  let delta = document.querySelectorAll('#trash')
  delta = Array.from(delta)
  delta.forEach((del) => {
    let suprimeurId = del.dataset.id
    suprimeurId = Number(suprimeurId);
    del.addEventListener('click', () => {
      task.deleteSingleItem(suprimeurId)
      displayTasks()
      location.reload()
    })
  })
}




function displayTasks() {
  const tasks = document.querySelector('.tasks');
  task.taskList = task.getStorage()
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
  task.setStorage()
  change()
  loadcheckedData()
  loadCrossed()
  tasks.innerHTML = taskHolder;
}

function addTask() {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    task.index = task.taskList.length + 1
    task.description = text.value;
    task.completed = false
    task.addItem() 
    text.value = ''
    orderingTasks()
    displayTasks()
    updateValue()
    change()
    loadcheckedData()
    loadCrossed()
    deleteSingleTask()
    changeToTrash()
    changeToMove()
  })
}
addTask()


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

window.onload = () => {
  displayTasks();
  change();
  loadcheckedData();
  loadCrossed();
  updateValue()
  deleteEverything()
  deleteSingleTask()
  changeToMove()
  changeToTrash()
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2JveGljb25zL2Rpc3QvYm94aWNvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9mdWNudGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlLG4scixvKXtpZihcImN1c3RvbUVsZW1lbnRzXCJpbiBuKW8oKTtlbHNle2lmKG4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEwpcmV0dXJuIHZvaWQgbi5BV0FJVElOR19XRUJfQ09NUE9ORU5UU19QT0xZRklMTC50aGVuKG8pO3ZhciBhPW4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEw9ZigpO2EudGhlbihvKTt2YXIgaT1uLldFQl9DT01QT05FTlRTX1BPTFlGSUxMfHxcIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3dlYmNvbXBvbmVudHNqcy8yLjAuMi93ZWJjb21wb25lbnRzLWJ1bmRsZS5qc1wiLHM9bi5FUzZfQ09SRV9QT0xZRklMTHx8XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9jb3JlLWpzLzIuNS4zL2NvcmUubWluLmpzXCI7XCJQcm9taXNlXCJpbiBuP2MoaSkudGhlbigoZnVuY3Rpb24oKXthLmlzRG9uZT0hMCxhLmV4ZWMoKX0pKTpjKHMpLnRoZW4oKGZ1bmN0aW9uKCl7YyhpKS50aGVuKChmdW5jdGlvbigpe2EuaXNEb25lPSEwLGEuZXhlYygpfSkpfSkpfWZ1bmN0aW9uIGYoKXt2YXIgdD1bXTtyZXR1cm4gdC5pc0RvbmU9ITEsdC5leGVjPWZ1bmN0aW9uKCl7dC5zcGxpY2UoMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7dCgpfSkpfSx0LnRoZW49ZnVuY3Rpb24oZSl7cmV0dXJuIHQuaXNEb25lP2UoKTp0LnB1c2goZSksdH0sdH1mdW5jdGlvbiBjKHQpe3ZhciBlPWYoKSxuPXIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyZXR1cm4gbi50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIsbi5yZWFkeVN0YXRlP24ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7XCJsb2FkZWRcIiE9bi5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPW4ucmVhZHlTdGF0ZXx8KG4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsZS5pc0RvbmU9ITAsZS5leGVjKCkpfTpuLm9ubG9hZD1mdW5jdGlvbigpe2UuaXNEb25lPSEwLGUuZXhlYygpfSxuLnNyYz10LHIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKG4pLG4udGhlbj1lLnRoZW4sbn19KDAsMCx3aW5kb3csZG9jdW1lbnQsKGZ1bmN0aW9uKCl7dmFyIHQsZTt0PXdpbmRvdyxlPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9NSl9KFtmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcCgoZnVuY3Rpb24oZSl7dmFyIG49ZnVuY3Rpb24odCxlKXt2YXIgbixyPXRbMV18fFwiXCIsbz10WzNdO2lmKCFvKXJldHVybiByO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBhPShuPW8sXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSkrXCIgKi9cIiksaT1vLnNvdXJjZXMubWFwKChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrby5zb3VyY2VSb290K3QrXCIgKi9cIn0pKTtyZXR1cm5bcl0uY29uY2F0KGkpLmNvbmNhdChbYV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9KGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIituK1wifVwiOm59KSkuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciByPXt9LG89MDtvPHRoaXMubGVuZ3RoO28rKyl7dmFyIGE9dGhpc1tvXVswXTtcIm51bWJlclwiPT10eXBlb2YgYSYmKHJbYV09ITApfWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBpPXRbb107XCJudW1iZXJcIj09dHlwZW9mIGlbMF0mJnJbaVswXV18fChuJiYhaVsyXT9pWzJdPW46biYmKGlbMl09XCIoXCIraVsyXStcIikgYW5kIChcIituK1wiKVwiKSxlLnB1c2goaSkpfX0sZX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMpO3QuZXhwb3J0cz1cInN0cmluZ1wiPT10eXBlb2Ygcj9yOnIudG9TdHJpbmcoKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCk7dC5leHBvcnRzPVwic3RyaW5nXCI9PXR5cGVvZiByP3I6ci50b1N0cmluZygpfSxmdW5jdGlvbih0LGUsbil7KHQuZXhwb3J0cz1uKDApKCExKSkucHVzaChbdC5pLFwiQC13ZWJraXQta2V5ZnJhbWVzIHNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1Aa2V5ZnJhbWVzIHNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYnVyc3R7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX05MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYnVyc3R7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX05MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmbGFzaGluZ3swJXtvcGFjaXR5OjF9NDUle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZsYXNoaW5nezAle29wYWNpdHk6MX00NSV7b3BhY2l0eTowfTkwJXtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZS1sZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1yaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZS1yaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLXVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtdXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtZG93bnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyB0YWRhezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTEwJSwyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTUsLjk1LC45NSkgcm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpfTMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDEwZGVnKTt0cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyl9NDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKC0xMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fUBrZXlmcmFtZXMgdGFkYXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX0xMCUsMjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpfTQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmJ4LXNwaW4sLmJ4LXNwaW4taG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246c3BpbiAycyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW4gMnMgbGluZWFyIGluZmluaXRlfS5ieC10YWRhLC5ieC10YWRhLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOnRhZGEgMS41cyBlYXNlIGluZmluaXRlO2FuaW1hdGlvbjp0YWRhIDEuNXMgZWFzZSBpbmZpbml0ZX0uYngtZmxhc2hpbmcsLmJ4LWZsYXNoaW5nLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZsYXNoaW5nIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmbGFzaGluZyAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtYnVyc3QsLmJ4LWJ1cnN0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmJ1cnN0IDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpidXJzdCAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS11cCwuYngtZmFkZS11cC1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmYWRlLXVwIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLXVwIDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1mYWRlLWRvd24sLmJ4LWZhZGUtZG93bi1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmYWRlLWRvd24gMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhZGUtZG93biAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS1sZWZ0LC5ieC1mYWRlLWxlZnQtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1sZWZ0IDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLWxlZnQgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtcmlnaHQsLmJ4LWZhZGUtcmlnaHQtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1yaWdodCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS1yaWdodCAxLjVzIGluZmluaXRlIGxpbmVhcn1cIixcIlwiXSl9LGZ1bmN0aW9uKHQsZSxuKXsodC5leHBvcnRzPW4oMCkoITEpKS5wdXNoKFt0LmksJy5ieC1yb3RhdGUtOTB7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXCJ9LmJ4LXJvdGF0ZS0xODB7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVwifS5ieC1yb3RhdGUtMjcwe3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcIn0uYngtZmxpcC1ob3Jpem9udGFse3RyYW5zZm9ybTpzY2FsZVgoLTEpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcIn0uYngtZmxpcC12ZXJ0aWNhbHt0cmFuc2Zvcm06c2NhbGVZKC0xKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXCJ9JyxcIlwiXSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSksbi5kKGUsXCJCb3hJY29uRWxlbWVudFwiLChmdW5jdGlvbigpe3JldHVybiBnfSkpO3ZhciByLG8sYSxpLHM9bigxKSxmPW4ubihzKSxjPW4oMiksbD1uLm4oYyksbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gbiYmdChlLnByb3RvdHlwZSxuKSxyJiZ0KGUsciksZX19KCksZD0obz0ocj1PYmplY3QpLmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX199LGE9ci5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSxpPVwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3Q/XCJ1bmRlZmluZWRcIjptKFJlZmxlY3QpKT9SZWZsZWN0LmNvbnN0cnVjdDpmdW5jdGlvbih0LGUsbil7dmFyIHIsbz1bbnVsbF07cmV0dXJuIG8ucHVzaC5hcHBseShvLGUpLHI9dC5iaW5kLmFwcGx5KHQsbyksYShuZXcgcixuLnByb3RvdHlwZSl9LGZ1bmN0aW9uKHQpe3ZhciBlPW8odCk7cmV0dXJuIGEodCxhKChmdW5jdGlvbigpe3JldHVybiBpKGUsYXJndW1lbnRzLG8odGhpcykuY29uc3RydWN0b3IpfSksZSkpfSkscD13aW5kb3csYj17fSx5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxoPWZ1bmN0aW9uKCl7cmV0dXJuISFwLlNoYWR5Q1NTfTt5LmlubmVySFRNTD0nXFxuPHN0eWxlPlxcbjpob3N0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuOmhvc3QoW3NpemU9eHNdKSB7XFxuICAgIHdpZHRoOiAwLjhyZW07XFxuICAgIGhlaWdodDogMC44cmVtO1xcbn1cXG46aG9zdChbc2l6ZT1zbV0pIHtcXG4gICAgd2lkdGg6IDEuNTVyZW07XFxuICAgIGhlaWdodDogMS41NXJlbTtcXG59XFxuOmhvc3QoW3NpemU9bWRdKSB7XFxuICAgIHdpZHRoOiAyLjI1cmVtO1xcbiAgICBoZWlnaHQ6IDIuMjVyZW07XFxufVxcbjpob3N0KFtzaXplPWxnXSkge1xcbiAgICB3aWR0aDogMy4wcmVtO1xcbiAgICBoZWlnaHQ6IDMuMHJlbTtcXG59XFxuXFxuOmhvc3QoW3NpemVdOm5vdChbc2l6ZT1cIlwiXSk6bm90KFtzaXplPXhzXSk6bm90KFtzaXplPXNtXSk6bm90KFtzaXplPW1kXSk6bm90KFtzaXplPWxnXSkpIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuOmhvc3QoW3B1bGw9bGVmdF0pICNpY29uIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogLjNlbSFpbXBvcnRhbnQ7XFxufVxcbjpob3N0KFtwdWxsPXJpZ2h0XSkgI2ljb24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAuM2VtIWltcG9ydGFudDtcXG59XFxuOmhvc3QoW2JvcmRlcj1zcXVhcmVdKSAjaWNvbiB7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBib3JkZXI6IC4wN2VtIHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXG59XFxuOmhvc3QoW2JvcmRlcj1jaXJjbGVdKSAjaWNvbiB7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBib3JkZXI6IC4wN2VtIHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbiNpY29uLFxcbnN2ZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI2ljb24ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gXFxuJytmLmErXCJcXG5cIitsLmErJ1xcbjwvc3R5bGU+XFxuPGRpdiBpZD1cImljb25cIj48L2Rpdj4nO3ZhciBnPWQoZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSk7dmFyIHQ9ZnVuY3Rpb24odCxlKXtpZighdCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP3Q6ZX0odGhpcywoZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSkuY2FsbCh0aGlzKSk7cmV0dXJuIHQuJHVpPXQuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdC4kdWkuYXBwZW5kQ2hpbGQodC5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoeS5jb250ZW50LCEwKSksaCgpJiZwLlNoYWR5Q1NTLnN0eWxlRWxlbWVudCh0KSx0Ll9zdGF0ZT17JGljb25Ib2xkZXI6dC4kdWkuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpLHR5cGU6dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfSx0fXJldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiBlKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGUpOnQuX19wcm90b19fPWUpfShlLEhUTUxFbGVtZW50KSx1KGUsbnVsbCxbe2tleTpcImdldEljb25TdmdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuY2RuVXJsK1wiL3JlZ3VsYXIvYngtXCIrdCtcIi5zdmdcIjtyZXR1cm5cInNvbGlkXCI9PT1lP249dGhpcy5jZG5VcmwrXCIvc29saWQvYnhzLVwiK3QrXCIuc3ZnXCI6XCJsb2dvXCI9PT1lJiYobj10aGlzLmNkblVybCtcIi9sb2dvcy9ieGwtXCIrdCtcIi5zdmdcIiksbiYmYltuXXx8KGJbbl09bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQsZSl7dmFyIHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3IuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXt0aGlzLnN0YXR1czwyMDB8fHRoaXMuc3RhdHVzPj0zMDA/ZShuZXcgRXJyb3IodGhpcy5zdGF0dXMrXCIgXCIrdGhpcy5yZXNwb25zZVRleHQpKTp0KHRoaXMucmVzcG9uc2VUZXh0KX0pKSxyLm9uZXJyb3I9ZSxyLm9uYWJvcnQ9ZSxyLm9wZW4oXCJHRVRcIixuKSxyLnNlbmQoKX0pKSksYltuXX19LHtrZXk6XCJkZWZpbmVcIix2YWx1ZTpmdW5jdGlvbih0KXt0PXR8fHRoaXMudGFnTmFtZSxoKCkmJnAuU2hhZHlDU1MucHJlcGFyZVRlbXBsYXRlKHksdCksY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsdGhpcyl9fSx7a2V5OlwiY2RuVXJsXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCIvL3VucGtnLmNvbS9ib3hpY29uc0AyLjAuOS9zdmdcIn19LHtrZXk6XCJ0YWdOYW1lXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJib3gtaWNvblwifX0se2tleTpcIm9ic2VydmVkQXR0cmlidXRlc1wiLGdldDpmdW5jdGlvbigpe3JldHVybltcInR5cGVcIixcIm5hbWVcIixcImNvbG9yXCIsXCJzaXplXCIsXCJyb3RhdGVcIixcImZsaXBcIixcImFuaW1hdGlvblwiLFwiYm9yZGVyXCIsXCJwdWxsXCJdfX1dKSx1KGUsW3trZXk6XCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIix2YWx1ZTpmdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5fc3RhdGUuJGljb25Ib2xkZXI7c3dpdGNoKHQpe2Nhc2VcInR5cGVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3IuJGljb25Ib2xkZXIudGV4dENvbnRlbnQ9XCJcIixyLnR5cGUmJihyLnR5cGU9bnVsbCksci50eXBlPSFufHxcInNvbGlkXCIhPT1uJiZcImxvZ29cIiE9PW4/XCJyZWd1bGFyXCI6bix2b2lkIDAhPT1yLmN1cnJlbnROYW1lJiZ0LmNvbnN0cnVjdG9yLmdldEljb25Tdmcoci5jdXJyZW50TmFtZSxyLnR5cGUpLnRoZW4oKGZ1bmN0aW9uKHQpe3IudHlwZT09PW4mJihyLiRpY29uSG9sZGVyLmlubmVySFRNTD10KX0pKS5jYXRjaCgoZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGljb246IFwiK3IuY3VycmVudE5hbWUrXCJcXG5cIit0KX0pKX0odGhpcywwLG4pO2JyZWFrO2Nhc2VcIm5hbWVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3IuY3VycmVudE5hbWU9bixyLiRpY29uSG9sZGVyLnRleHRDb250ZW50PVwiXCIsbiYmdm9pZCAwIT09ci50eXBlJiZ0LmNvbnN0cnVjdG9yLmdldEljb25TdmcobixyLnR5cGUpLnRoZW4oKGZ1bmN0aW9uKHQpe3IuY3VycmVudE5hbWU9PT1uJiYoci4kaWNvbkhvbGRlci5pbm5lckhUTUw9dCl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpY29uOiBcIituK1wiXFxuXCIrdCl9KSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJjb2xvclwiOnIuc3R5bGUuZmlsbD1ufHxcIlwiO2JyZWFrO2Nhc2VcInNpemVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3Iuc2l6ZSYmKHIuJGljb25Ib2xkZXIuc3R5bGUud2lkdGg9ci4kaWNvbkhvbGRlci5zdHlsZS5oZWlnaHQ9XCJcIixyLnNpemU9ci5zaXplVHlwZT1udWxsKSxuJiYhL14oeHN8c218bWR8bGcpJC8udGVzdChyLnNpemUpJiYoci5zaXplPW4udHJpbSgpLHIuJGljb25Ib2xkZXIuc3R5bGUud2lkdGg9ci4kaWNvbkhvbGRlci5zdHlsZS5oZWlnaHQ9ci5zaXplKX0odGhpcywwLG4pO2JyZWFrO2Nhc2VcInJvdGF0ZVwiOmUmJnIuY2xhc3NMaXN0LnJlbW92ZShcImJ4LXJvdGF0ZS1cIitlKSxuJiZyLmNsYXNzTGlzdC5hZGQoXCJieC1yb3RhdGUtXCIrbik7YnJlYWs7Y2FzZVwiZmxpcFwiOmUmJnIuY2xhc3NMaXN0LnJlbW92ZShcImJ4LWZsaXAtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtZmxpcC1cIituKTticmVhaztjYXNlXCJhbmltYXRpb25cIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1cIitlKSxuJiZyLmNsYXNzTGlzdC5hZGQoXCJieC1cIituKX19fSx7a2V5OlwiY29ubmVjdGVkQ2FsbGJhY2tcIix2YWx1ZTpmdW5jdGlvbigpe2goKSYmcC5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodGhpcyl9fV0pLGV9KCkpO2UuZGVmYXVsdD1nLGcuZGVmaW5lKCl9XSl9LFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQm94SWNvbkVsZW1lbnQ9ZSgpOnQuQm94SWNvbkVsZW1lbnQ9ZSgpfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym94aWNvbnMuanMubWFwIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4udGFza3Mge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3MgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi5lZHkge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41c1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggN3B4IDdweCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4udG9kby1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggI2NjYztcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5teWxvLmNyb3NzZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcbn1cXG5cXG4jZW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxcbn1cXG5cXG4uYngge1xcbiAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXG59XFxuXFxuLmhlYWRpbmcgaDEge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5oZWFkaW5nIC5ieCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pLXRhc2sgI21vdmUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uaS10YXNrICN0cmFzaCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaS10YXNrICN0cmFzaDpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIxMSwgMTcsIDE3KTtcXG59XFxuXFxuLmVkeTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyNTIsIDE1OCk7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jZm9yLXVwZGF0ZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcXG4gIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6ICMwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQgLmJ4IHtcXG4gIGhlaWdodDogNTAuNzFweDtcXG4gIHBhZGRpbmctdG9wOiAwLjZlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaW5wdXQgLmJ4OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzazo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlLWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRhc2tzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4uZWR5IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXNcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDdweCA3cHggI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICNjY2M7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubXlsby5jcm9zc2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXG59XFxuXFxuI2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZcXG59XFxuXFxuLmJ4IHtcXG4gIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxufVxcblxcbi5oZWFkaW5nIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaGVhZGluZyAuYngge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaS10YXNrICNtb3ZlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmktdGFzayAjdHJhc2gge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmktdGFzayAjdHJhc2g6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMTEsIDE3LCAxNyk7XFxufVxcblxcbi5lZHk6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjUyLCAxNTgpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2Zvci11cGRhdGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxuICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0IC5ieCB7XFxuICBoZWlnaHQ6IDUwLjcxcHg7XFxuICBwYWRkaW5nLXRvcDogMC42ZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmlucHV0IC5ieDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzazpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2s6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNoZWNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFRhc2tzIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgfVxuXG4gIGdldFN0b3JhZ2UoKSB7XG4gICAgIGxldCBkcmFrZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rhc2tzJykpIHx8IFtdXG4gICAgIHJldHVybiBkcmFrZVxuICB9XG5cbiAgc2V0U3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tMaXN0KSlcbiAgfVxuXG4gIGFkZEl0ZW0oKSB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBjb21wbGV0ZWQ6IHRoaXMuY29tcGxldGVkLFxuICAgIH07XG5cbiAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIHRoaXMuc2V0U3RvcmFnZSgpXG4gIH1cbiAgXG4gIHVwZGF0ZUl0ZW0oaWQsdGV4dCkge1xuICAgIGlkID0gTnVtYmVyKGlkKTtcbiAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy50YXNrTGlzdFtpXS5pbmRleCA9PT0gaWQpIHsgXG4gICAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnRhc2tMaXN0W2ldLmRlc2NyaXB0aW9uID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tMaXN0W2ldLmluZGV4LCBpZClcbiAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUFsbENoZWNrZWRJdGVtcyh0YXNrcykge1xuICAgIHRoaXMudGFza0xpc3QgPSB0YXNrcztcbiAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgdGhpcy50YXNrTGlzdCA9IHRoaXMudGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKVxuICAgIHRoaXMuc2V0U3RvcmFnZSgpICBcbiAgfVxuXG4gIGRlbGV0ZVNpbmdsZUl0ZW0oaWQpIHtcbiAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy5nZXRTdG9yYWdlKCk7XG4gICAgdGhpcy50YXNrTGlzdCA9IHRoaXMudGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCAhPT0gaWQpXG4gICAgdGhpcy5zZXRTdG9yYWdlKClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGFza3M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICdib3hpY29ucyc7XG5pbXBvcnQgVGFza3MgZnJvbSAnLi9mdWNudGlvbnMuanMnO1xuXG5jb25zdCB0YXNrID0gbmV3IFRhc2tzKCk7XG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW50ZXInKTtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcblxuXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZSgpIHtcbiAgY29uc3QgdVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWR5Jyk7XG4gIHVUZXh0LmZvckVhY2goKGlVcGRhdGUpID0+IHtcbiAgICBsZXQgdXBkYXRlSWQgPSBpVXBkYXRlLmRhdGFzZXQuaWRcbiAgICB0YXNrLnVwZGF0ZUl0ZW0odXBkYXRlSWQsIGlVcGRhdGUpO1xuICAgIHRhc2suc2V0U3RvcmFnZSgpO1xuICAgIGNoYW5nZSgpO1xuICAgIGxvYWRjaGVja2VkRGF0YSgpO1xuICAgIGxvYWRDcm9zc2VkKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcmRlcmluZ1Rhc2tzKCkge1xuICB0YXNrLnRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza3MnKSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFzay50YXNrTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRhc2sudGFza0xpc3RbaV0uaW5kZXggPSBpICsgMTtcbiAgfVxuICB0YXNrLnNldFN0b3JhZ2UoKVxufVxuXG5mdW5jdGlvbiBkZWxldGVFdmVyeXRoaW5nKCkge1xuICBjb25zdCBkZWxldGVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItYWxsJylcbiAgZGVsZXRlQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2suZGVsZXRlQWxsQ2hlY2tlZEl0ZW1zKHRhc2sudGFza0xpc3QpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIGNoYW5nZSgpO1xuICAgIGxvYWRjaGVja2VkRGF0YSgpO1xuICAgIGxvYWRDcm9zc2VkKCk7XG4gICAgb3JkZXJpbmdUYXNrcygpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb01vdmUoKSB7XG4gIGxldCB0ZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21vdmUnKTtcbiAgbGV0IG9tZWdhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkeScpO1xuICBvbWVnYS5mb3JFYWNoKChvbWkpID0+IHtcbiAgICBsZXQgb21pSWQgPSBvbWkuZGF0YXNldC5pZDtcbiAgICBvbWlJZCA9IE51bWJlcihvbWlJZCk7XG4gICAgdGV0YS5mb3JFYWNoKCh0ZXQpID0+IHtcbiAgICAgIGxldCB0ZXRJRCA9IHRldC5kYXRhc2V0LmlkO1xuICAgICAgdGV0SUQgPSBOdW1iZXIodGV0SUQpO1xuICAgICAgb21pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAob21pSWQgPT09IHRldElEKSB7XG4gICAgICAgICAgdGV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICBjb25zb2xlLmxvZyh0ZXRJRCwgb21pSWQpXG4gICAgICAgICAgY29uc29sZS5sb2coJ3lheScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBvbWkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAob21pSWQgPT09IHRldElEKSB7XG4gICAgICAgICAgdGV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9UcmFzaCgpIHtcbiAgbGV0IGRlbHRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RyYXNoJylcbiAgbGV0IG9tZWdhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkeScpXG4gIG9tZWdhLmZvckVhY2goKG9taSkgPT4ge1xuICAgIGxldCBvbWlJZCA9IG9taS5kYXRhc2V0LmlkO1xuICAgIG9taUlkID0gTnVtYmVyKG9taUlkKTtcbiAgICBkZWx0YS5mb3JFYWNoKChkZWwpID0+IHtcbiAgICAgIGxldCBkZWxJRCA9IGRlbC5kYXRhc2V0LmlkO1xuICAgICAgZGVsSUQgPSBOdW1iZXIoZGVsSUQpO1xuICAgICAgb21pLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAob21pSWQgPT09IGRlbElEKSB7XG4gICAgICAgICAgZGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBvbWkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAob21pSWQgPT09IGRlbElEKSB7XG4gICAgICAgICAgZGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICAgIFxuICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVTaW5nbGVUYXNrKCkge1xuICBsZXQgZGVsdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHJhc2gnKVxuICBkZWx0YSA9IEFycmF5LmZyb20oZGVsdGEpXG4gIGRlbHRhLmZvckVhY2goKGRlbCkgPT4ge1xuICAgIGxldCBzdXByaW1ldXJJZCA9IGRlbC5kYXRhc2V0LmlkXG4gICAgc3VwcmltZXVySWQgPSBOdW1iZXIoc3VwcmltZXVySWQpO1xuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2suZGVsZXRlU2luZ2xlSXRlbShzdXByaW1ldXJJZClcbiAgICAgIGRpc3BsYXlUYXNrcygpXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG4gIH0pXG59XG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgdGFzay50YXNrTGlzdCA9IHRhc2suZ2V0U3RvcmFnZSgpXG4gIHRhc2sudGFza0xpc3Quc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuICBsZXQgdGFza0hvbGRlciA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2sudGFza0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0YXNrSG9sZGVyICs9IGBcbiAgICA8bGkgY2xhc3M9XCJpLXRhc2tcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2tcIj5cbiAgICAgICAgPGlucHV0IGRhdGEtaWQ9XCIke3Rhc2sudGFza0xpc3RbaV0uaW5kZXh9XCIgaWQ9XCJjaG9rZVwiIHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICA8aW5wdXQgaWQ9XCJmb3ItdXBkYXRlXCIgY2xhc3M9XCJlZHkgbXlsb1wiIGRhdGEtaWQ9XCIke3Rhc2sudGFza0xpc3RbaV0uaW5kZXh9XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dGFzay50YXNrTGlzdFtpXS5kZXNjcmlwdGlvbn1cIj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxmb3JtPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGkgZGF0YS1pZD1cIiR7dGFzay50YXNrTGlzdFtpXS5pbmRleH1cIiBjbGFzcz0nYnggYngtZG90cy12ZXJ0aWNhbC1yb3VuZGVkIGJ4LXNtJ2lkPVwibW92ZVwiPjwvaT5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsXCIgZGF0YS1pZD1cIiR7dGFzay50YXNrTGlzdFtpXS5pbmRleH1cIiBpZD1cInRyYXNoXCIgPjxpIGNsYXNzPSdieCBieC10cmFzaCBieC1zbSc+PC9pPjwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICAgYDtcbiAgfVxuICB0YXNrLnNldFN0b3JhZ2UoKVxuICBjaGFuZ2UoKVxuICBsb2FkY2hlY2tlZERhdGEoKVxuICBsb2FkQ3Jvc3NlZCgpXG4gIHRhc2tzLmlubmVySFRNTCA9IHRhc2tIb2xkZXI7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGFzay5pbmRleCA9IHRhc2sudGFza0xpc3QubGVuZ3RoICsgMVxuICAgIHRhc2suZGVzY3JpcHRpb24gPSB0ZXh0LnZhbHVlO1xuICAgIHRhc2suY29tcGxldGVkID0gZmFsc2VcbiAgICB0YXNrLmFkZEl0ZW0oKSBcbiAgICB0ZXh0LnZhbHVlID0gJydcbiAgICBvcmRlcmluZ1Rhc2tzKClcbiAgICBkaXNwbGF5VGFza3MoKVxuICAgIHVwZGF0ZVZhbHVlKClcbiAgICBjaGFuZ2UoKVxuICAgIGxvYWRjaGVja2VkRGF0YSgpXG4gICAgbG9hZENyb3NzZWQoKVxuICAgIGRlbGV0ZVNpbmdsZVRhc2soKVxuICAgIGNoYW5nZVRvVHJhc2goKVxuICAgIGNoYW5nZVRvTW92ZSgpXG4gIH0pXG59XG5hZGRUYXNrKClcblxuXG5mdW5jdGlvbiBsb2FkY2hlY2tlZERhdGEoKSB7XG4gIHRhc2sudGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrcycpKTtcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2hva2UnKTtcbiAgaXRlbSA9IEFycmF5LmZyb20oaXRlbSk7XG4gIGl0ZW0uZm9yRWFjaCgoY2hlY2spID0+IHtcbiAgICBsZXQgY2hlY2tJZCA9IGNoZWNrLmRhdGFzZXQuaWQ7XG4gICAgY2hlY2tJZCA9IE51bWJlcihjaGVja0lkKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2sudGFza0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjaGVja0lkID09PSB0YXNrLnRhc2tMaXN0W2ldLmluZGV4KSB7XG4gICAgICAgIGlmICh0YXNrLnRhc2tMaXN0W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbmZ1bmN0aW9uIGxvYWRDcm9zc2VkKCkge1xuICB0YXNrLnRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza3MnKSk7XG4gIGxldCBteWxvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15bG8nKTtcbiAgbXlsbyA9IEFycmF5LmZyb20obXlsbyk7XG4gIG15bG8uZm9yRWFjaCgobWlsZSkgPT4ge1xuICAgIGxldCBtaWxlSWQgPSBtaWxlLmRhdGFzZXQuaWQ7XG4gICAgbWlsZUlkID0gTnVtYmVyKG1pbGVJZCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLnRhc2tMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAobWlsZUlkID09PSB0YXNrLnRhc2tMaXN0W2ldLmluZGV4KSB7XG4gICAgICAgIGlmICh0YXNrLnRhc2tMaXN0W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1pbGUuY2xhc3NMaXN0LmFkZCgnY3Jvc3NlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pbGUuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3NlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlKCkge1xuICB0YXNrLnRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFza3MnKSk7XG4gIGNvbnN0IGNoZWNreSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjaG9rZScpO1xuICBjaGVja3kuZm9yRWFjaCgoY2hlY2spID0+IHtcbiAgICBsZXQgY2hlY2tJZCA9IGNoZWNrLmRhdGFzZXQuaWQ7XG4gICAgY2hlY2tJZCA9IE51bWJlcihjaGVja0lkKTtcbiAgICBjb25zdCBteWxvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15bG8nKTtcbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAoY2hlY2suY2hlY2tlZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2sudGFza0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAodGFzay50YXNrTGlzdFtpXS5pbmRleCA9PT0gY2hlY2tJZCkge1xuICAgICAgICAgICAgaWYgKHRhc2sudGFza0xpc3RbaV0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0YXNrLnRhc2tMaXN0W2ldLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIG15bG8uZm9yRWFjaCgobWlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtaWxlLnZhbHVlID09PSB0YXNrLnRhc2tMaXN0W2ldLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBtaWxlLmNsYXNzTGlzdC5hZGQoJ2Nyb3NzZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrLnRhc2tMaXN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2sudGFza0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAodGFzay50YXNrTGlzdFtpXS5pbmRleCA9PT0gY2hlY2tJZCkge1xuICAgICAgICAgICAgdGFzay50YXNrTGlzdFtpXS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG15bG8uZm9yRWFjaCgobWlsZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobWlsZS52YWx1ZSA9PT0gdGFzay50YXNrTGlzdFtpXS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChtaWxlLmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgICBtaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Nyb3NzZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFzay50YXNrTGlzdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZGlzcGxheVRhc2tzKCk7XG4gIGNoYW5nZSgpO1xuICBsb2FkY2hlY2tlZERhdGEoKTtcbiAgbG9hZENyb3NzZWQoKTtcbiAgdXBkYXRlVmFsdWUoKVxuICBkZWxldGVFdmVyeXRoaW5nKClcbiAgZGVsZXRlU2luZ2xlVGFzaygpXG4gIGNoYW5nZVRvTW92ZSgpXG4gIGNoYW5nZVRvVHJhc2goKVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=