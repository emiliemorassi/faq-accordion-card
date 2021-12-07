/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg-pattern-mobile.svg */ "./src/assets/images/bg-pattern-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icon-arrow-down.svg */ "./src/assets/images/icon-arrow-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg-pattern-desktop.svg */ "./src/assets/images/bg-pattern-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Generic */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  font-style: normal;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root {\r\n  font-size: 62.5%; /* 1rem = 10px (1.6rem = 16px) */\r\n\r\n  /* Text */\r\n  --darkDesatBlue: hsl(238, 29%, 16%);\r\n  --softRed: hsl(14, 88%, 65%);\r\n\r\n  /* shadow*/\r\n  --color-h: 238; /* Hue        */\r\n  --color-s: 29%; /* Saturation */\r\n  --color-l: 16%; /* Lightness  */\r\n\r\n  /* Background Gradient */\r\n  --softViolet: hsl(273, 75%, 66%);\r\n  --softBlue: hsl(240, 73%, 65%);\r\n\r\n  /* Text */\r\n  --veryDarkGrayishBlue: hsl(237, 12%, 33%);\r\n  --darkGrayishBlue: hsl(240, 6%, 50%);\r\n\r\n  /* Dividers */\r\n  --lightgrayishBlue: hsl(240, 5%, 91%);\r\n}\r\nbody {\r\n  font-family: \"Kumbh Sans\", sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 400;\r\n}\r\nmain {\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-image: linear-gradient(var(--softViolet), var(--softBlue));\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 5rem;\r\n  position: relative;\r\n}\r\n.card {\r\n  width: 80%;\r\n  max-width: 95rem;\r\n  height: fit-content;\r\n  min-height: 70vh;\r\n  /* height: 70vh; */\r\n  background-color: white;\r\n  border-radius: 2.5rem;\r\n  position: relative;\r\n  margin-top: 10rem;\r\n  padding: 10rem 0 2rem 0;\r\n  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n#icon {\r\n  text-align: center;\r\n  width: 100%;\r\n  position: absolute;\r\n  transform: translate(0, -50%);\r\n  top: -4%;\r\n}\r\n.mobileImg {\r\n  width: 80%;\r\n  max-width: 23rem;\r\n}\r\n#icon::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  position: absolute;\r\n  transform: translate(-50%, 50%);\r\n  left: 50%;\r\n  top: 5rem;\r\n}\r\n.desktopImg,\r\n.containerBox,\r\n.boxTest {\r\n  display: none;\r\n}\r\n#content {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n.accordion {\r\n  padding-top: 2rem;\r\n  max-width: 30rem;\r\n  margin: auto;\r\n}\r\nh2 {\r\n  font-weight: normal;\r\n  font-size: 1.2rem;\r\n  padding: 1.5rem 0;\r\n}\r\nh2:hover {\r\n  color: var(--softRed);\r\n  cursor: pointer;\r\n}\r\ndetails {\r\n  border-bottom: solid var(--lightgrayishBlue) 1px;\r\n}\r\ndetails > summary {\r\n  list-style-type: none;\r\n  position: relative;\r\n}\r\ndetails > summary > h2::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 1%;\r\n  transition: transform 0.4s;\r\n}\r\ndetails[open] > summary > h2::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 1%;\r\n  transform: rotate(180deg);\r\n  transition: transform 0.4s;\r\n}\r\ndetails[open] {\r\n  padding-bottom: 2rem;\r\n}\r\ndetails[open] h2 {\r\n  font-weight: 700;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n}\r\n@media (min-width: 992px) {\r\n  main {\r\n    padding-top: 0;\r\n  }\r\n  .card {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    padding: unset;\r\n    overflow: hidden;\r\n  }\r\n  #icon,\r\n  #content {\r\n    width: 50%;\r\n  }\r\n  #icon {\r\n    position: relative;\r\n    transform: unset;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: 150%;\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    left: -5rem;\r\n  }\r\n  #icon::after {\r\n    display: none;\r\n  }\r\n  .mobileImg {\r\n    display: none;\r\n  }\r\n  .desktopImg {\r\n    display: block;\r\n    width: 100%;\r\n    position: absolute;\r\n    transform: translateY(-50%);\r\n    top: 50%;\r\n  }\r\n  #content {\r\n    margin: unset;\r\n    padding-top: 10rem;\r\n  }\r\n  .accordion {\r\n    height: 30rem;\r\n    overflow-y: scroll;\r\n    padding-right: 1.8rem;\r\n  }\r\n  ::-webkit-scrollbar {\r\n    width: 0.7rem;\r\n  }\r\n  ::-webkit-scrollbar-thumb {\r\n    background: linear-gradient(transparent, var(--softViolet));\r\n    border-radius: 0.5rem;\r\n  }\r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: linear-gradient(transparent, var(--softRed));\r\n  }\r\n  .accordion,\r\n  h1 {\r\n    margin-left: 6rem;\r\n    text-align: left;\r\n  }\r\n  .containerBox {\r\n    display: block;\r\n    position: relative;\r\n  }\r\n  .box {\r\n    display: block;\r\n    position: absolute;\r\n    top: 47%;\r\n    left: -95px;\r\n    z-index: 2;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;;;EAGE,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;AACA;EACE,gBAAgB,EAAE,gCAAgC;;EAElD,SAAS;EACT,mCAAmC;EACnC,4BAA4B;;EAE5B,UAAU;EACV,cAAc,EAAE,eAAe;EAC/B,cAAc,EAAE,eAAe;EAC/B,cAAc,EAAE,eAAe;;EAE/B,wBAAwB;EACxB,gCAAgC;EAChC,8BAA8B;;EAE9B,SAAS;EACT,yCAAyC;EACzC,oCAAoC;;EAEpC,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,WAAW;EACX,qEAAqE;EACrE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,+CAA+C;AACjD;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,QAAQ;AACV;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,gDAAqD;EACrD,kBAAkB;EAClB,+BAA+B;EAC/B,SAAS;EACT,SAAS;AACX;AACA;;;EAGE,aAAa;AACf;AACA;EACE,UAAU;EACV,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,gDAAgD;AAClD;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,gDAAmD;EACnD,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,0BAA0B;AAC5B;AACA;EACE,gDAAmD;EACnD,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,yBAAyB;EACzB,0BAA0B;AAC5B;AACA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;AAClB;;AAEA;AACA;AACA;EACE;IACE,cAAc;EAChB;EACA;IACE,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;IACd,gBAAgB;EAClB;EACA;;IAEE,UAAU;EACZ;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,yDAA+D;IAC/D,qBAAqB;IACrB,4BAA4B;IAC5B,0BAA0B;IAC1B,WAAW;EACb;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,2BAA2B;IAC3B,QAAQ;EACV;EACA;IACE,aAAa;IACb,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,kBAAkB;IAClB,qBAAqB;EACvB;EACA;IACE,aAAa;EACf;EACA;IACE,2DAA2D;IAC3D,qBAAqB;EACvB;EACA;IACE,wDAAwD;EAC1D;EACA;;IAEE,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,UAAU;EACZ;AACF","sourcesContent":["/* Generic */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  font-style: normal;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n:root {\r\n  font-size: 62.5%; /* 1rem = 10px (1.6rem = 16px) */\r\n\r\n  /* Text */\r\n  --darkDesatBlue: hsl(238, 29%, 16%);\r\n  --softRed: hsl(14, 88%, 65%);\r\n\r\n  /* shadow*/\r\n  --color-h: 238; /* Hue        */\r\n  --color-s: 29%; /* Saturation */\r\n  --color-l: 16%; /* Lightness  */\r\n\r\n  /* Background Gradient */\r\n  --softViolet: hsl(273, 75%, 66%);\r\n  --softBlue: hsl(240, 73%, 65%);\r\n\r\n  /* Text */\r\n  --veryDarkGrayishBlue: hsl(237, 12%, 33%);\r\n  --darkGrayishBlue: hsl(240, 6%, 50%);\r\n\r\n  /* Dividers */\r\n  --lightgrayishBlue: hsl(240, 5%, 91%);\r\n}\r\nbody {\r\n  font-family: \"Kumbh Sans\", sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 400;\r\n}\r\nmain {\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-image: linear-gradient(var(--softViolet), var(--softBlue));\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 5rem;\r\n  position: relative;\r\n}\r\n.card {\r\n  width: 80%;\r\n  max-width: 95rem;\r\n  height: fit-content;\r\n  min-height: 70vh;\r\n  /* height: 70vh; */\r\n  background-color: white;\r\n  border-radius: 2.5rem;\r\n  position: relative;\r\n  margin-top: 10rem;\r\n  padding: 10rem 0 2rem 0;\r\n  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n#icon {\r\n  text-align: center;\r\n  width: 100%;\r\n  position: absolute;\r\n  transform: translate(0, -50%);\r\n  top: -4%;\r\n}\r\n.mobileImg {\r\n  width: 80%;\r\n  max-width: 23rem;\r\n}\r\n#icon::after {\r\n  content: url(\"./assets/images/bg-pattern-mobile.svg\");\r\n  position: absolute;\r\n  transform: translate(-50%, 50%);\r\n  left: 50%;\r\n  top: 5rem;\r\n}\r\n.desktopImg,\r\n.containerBox,\r\n.boxTest {\r\n  display: none;\r\n}\r\n#content {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n.accordion {\r\n  padding-top: 2rem;\r\n  max-width: 30rem;\r\n  margin: auto;\r\n}\r\nh2 {\r\n  font-weight: normal;\r\n  font-size: 1.2rem;\r\n  padding: 1.5rem 0;\r\n}\r\nh2:hover {\r\n  color: var(--softRed);\r\n  cursor: pointer;\r\n}\r\ndetails {\r\n  border-bottom: solid var(--lightgrayishBlue) 1px;\r\n}\r\ndetails > summary {\r\n  list-style-type: none;\r\n  position: relative;\r\n}\r\ndetails > summary > h2::after {\r\n  content: url(\"./assets/images/icon-arrow-down.svg\");\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 1%;\r\n  transition: transform 0.4s;\r\n}\r\ndetails[open] > summary > h2::after {\r\n  content: url(\"./assets/images/icon-arrow-down.svg\");\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 1%;\r\n  transform: rotate(180deg);\r\n  transition: transform 0.4s;\r\n}\r\ndetails[open] {\r\n  padding-bottom: 2rem;\r\n}\r\ndetails[open] h2 {\r\n  font-weight: 700;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n}\r\n@media (min-width: 992px) {\r\n  main {\r\n    padding-top: 0;\r\n  }\r\n  .card {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    padding: unset;\r\n    overflow: hidden;\r\n  }\r\n  #icon,\r\n  #content {\r\n    width: 50%;\r\n  }\r\n  #icon {\r\n    position: relative;\r\n    transform: unset;\r\n    background-image: url(\"./assets/images/bg-pattern-desktop.svg\");\r\n    background-size: 150%;\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    left: -5rem;\r\n  }\r\n  #icon::after {\r\n    display: none;\r\n  }\r\n  .mobileImg {\r\n    display: none;\r\n  }\r\n  .desktopImg {\r\n    display: block;\r\n    width: 100%;\r\n    position: absolute;\r\n    transform: translateY(-50%);\r\n    top: 50%;\r\n  }\r\n  #content {\r\n    margin: unset;\r\n    padding-top: 10rem;\r\n  }\r\n  .accordion {\r\n    height: 30rem;\r\n    overflow-y: scroll;\r\n    padding-right: 1.8rem;\r\n  }\r\n  ::-webkit-scrollbar {\r\n    width: 0.7rem;\r\n  }\r\n  ::-webkit-scrollbar-thumb {\r\n    background: linear-gradient(transparent, var(--softViolet));\r\n    border-radius: 0.5rem;\r\n  }\r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: linear-gradient(transparent, var(--softRed));\r\n  }\r\n  .accordion,\r\n  h1 {\r\n    margin-left: 6rem;\r\n    text-align: left;\r\n  }\r\n  .containerBox {\r\n    display: block;\r\n    position: relative;\r\n  }\r\n  .box {\r\n    display: block;\r\n    position: absolute;\r\n    top: 47%;\r\n    left: -95px;\r\n    z-index: 2;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/bg-pattern-desktop.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/bg-pattern-desktop.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f51e07a2f52390c60484.svg";

/***/ }),

/***/ "./src/assets/images/bg-pattern-mobile.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/bg-pattern-mobile.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55aee9128a769eedabec.svg";

/***/ }),

/***/ "./src/assets/images/icon-arrow-down.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icon-arrow-down.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "852fa301a0e795e07c59.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map