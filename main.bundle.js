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
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg-pattern-mobile.svg */ "./src/assets/images/bg-pattern-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icon-arrow-down.svg */ "./src/assets/images/icon-arrow-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg-pattern-desktop.svg */ "./src/assets/images/bg-pattern-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Generic */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-style: normal;\n  margin: 0;\n  padding: 0;\n}\n:root {\n  font-size: 62.5%; /* 1rem = 10px (1.6rem = 16px) */\n\n  /* Text */\n  --darkDesatBlue: hsl(238, 29%, 16%);\n  --softRed: hsl(14, 88%, 65%);\n\n  /* shadow*/\n  --color-h: 238; /* Hue        */\n  --color-s: 29%; /* Saturation */\n  --color-l: 16%; /* Lightness  */\n\n  /* Background Gradient */\n  --softViolet: hsl(273, 75%, 66%);\n  --softBlue: hsl(240, 73%, 65%);\n\n  /* Text */\n  --veryDarkGrayishBlue: hsl(237, 12%, 33%);\n  --darkGrayishBlue: hsl(240, 6%, 50%);\n\n  /* Dividers */\n  --lightgrayishBlue: hsl(240, 5%, 91%);\n}\nbody {\n  font-family: \"Kumbh Sans\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\nmain {\n  height: 100vh;\n  width: 100%;\n  background-image: linear-gradient(var(--softViolet), var(--softBlue));\n  display: flex;\n  justify-content: center;\n  padding-top: 5rem;\n  position: relative;\n}\n.card {\n  width: 80%;\n  max-width: 95rem;\n  height: fit-content;\n  min-height: 70vh;\n  /* height: 70vh; */\n  background-color: white;\n  border-radius: 2.5rem;\n  position: relative;\n  margin-top: 10rem;\n  padding: 10rem 0 2rem 0;\n  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.3);\n}\n#icon {\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  transform: translate(0, -50%);\n  top: -4%;\n}\n.mobileImg {\n  width: 80%;\n  max-width: 23rem;\n}\n#icon::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  position: absolute;\n  transform: translate(-50%, 50%);\n  left: 50%;\n  top: 5rem;\n}\n.desktopImg,\n.containerBox,\n.boxTest {\n  display: none;\n}\n#content {\n  width: 80%;\n  margin: auto;\n}\nh1 {\n  text-align: center;\n  font-size: 3rem;\n}\n.accordion {\n  padding-top: 2rem;\n  max-width: 30rem;\n  margin: auto;\n}\nh2 {\n  font-weight: normal;\n  font-size: 1.2rem;\n  padding: 1.5rem 0;\n}\nh2:hover {\n  color: var(--softRed);\n  cursor: pointer;\n}\ndetails {\n  border-bottom: solid var(--lightgrayishBlue) 1px;\n}\ndetails > summary {\n  list-style-type: none;\n  position: relative;\n}\ndetails > summary > h2::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  display: inline-block;\n  position: absolute;\n  right: 1%;\n  transition: transform 0.4s;\n}\ndetails[open] > summary > h2::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  display: inline-block;\n  position: absolute;\n  right: 1%;\n  transform: rotate(180deg);\n  transition: transform 0.4s;\n}\ndetails[open] {\n  padding-bottom: 2rem;\n}\ndetails[open] h2 {\n  font-weight: 700;\n}\n\n@media (min-width: 768px) {\n}\n@media (min-width: 992px) {\n  main {\n    padding-top: 0;\n  }\n  .card {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: unset;\n    overflow: hidden;\n  }\n  #icon,\n  #content {\n    width: 50%;\n  }\n  #icon {\n    position: relative;\n    transform: unset;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: 150%;\n    background-repeat: no-repeat;\n    background-position: right;\n    left: -5rem;\n  }\n  #icon::after {\n    display: none;\n  }\n  .mobileImg {\n    display: none;\n  }\n  .desktopImg {\n    display: block;\n    width: 100%;\n    position: absolute;\n    transform: translateY(-50%);\n    top: 50%;\n  }\n  #content {\n    margin: unset;\n    padding-top: 10rem;\n  }\n  .accordion {\n    height: 30rem;\n    overflow-y: scroll;\n    padding-right: 1.8rem;\n  }\n  ::-webkit-scrollbar {\n    width: 0.7rem;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: linear-gradient(transparent, var(--softViolet));\n    border-radius: 0.5rem;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: linear-gradient(transparent, var(--softRed));\n  }\n  .accordion,\n  h1 {\n    margin-left: 6rem;\n    text-align: left;\n  }\n  .containerBox {\n    display: block;\n    position: relative;\n  }\n  .box {\n    display: block;\n    position: absolute;\n    top: 47%;\n    left: -95px;\n    z-index: 2;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;;;EAGE,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;AACA;EACE,gBAAgB,EAAE,gCAAgC;;EAElD,SAAS;EACT,mCAAmC;EACnC,4BAA4B;;EAE5B,UAAU;EACV,cAAc,EAAE,eAAe;EAC/B,cAAc,EAAE,eAAe;EAC/B,cAAc,EAAE,eAAe;;EAE/B,wBAAwB;EACxB,gCAAgC;EAChC,8BAA8B;;EAE9B,SAAS;EACT,yCAAyC;EACzC,oCAAoC;;EAEpC,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,WAAW;EACX,qEAAqE;EACrE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,+CAA+C;AACjD;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,QAAQ;AACV;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,gDAAqD;EACrD,kBAAkB;EAClB,+BAA+B;EAC/B,SAAS;EACT,SAAS;AACX;AACA;;;EAGE,aAAa;AACf;AACA;EACE,UAAU;EACV,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,gDAAgD;AAClD;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,gDAAmD;EACnD,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,0BAA0B;AAC5B;AACA;EACE,gDAAmD;EACnD,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,yBAAyB;EACzB,0BAA0B;AAC5B;AACA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;AAClB;;AAEA;AACA;AACA;EACE;IACE,cAAc;EAChB;EACA;IACE,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;IACd,gBAAgB;EAClB;EACA;;IAEE,UAAU;EACZ;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,yDAA+D;IAC/D,qBAAqB;IACrB,4BAA4B;IAC5B,0BAA0B;IAC1B,WAAW;EACb;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,2BAA2B;IAC3B,QAAQ;EACV;EACA;IACE,aAAa;IACb,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,kBAAkB;IAClB,qBAAqB;EACvB;EACA;IACE,aAAa;EACf;EACA;IACE,2DAA2D;IAC3D,qBAAqB;EACvB;EACA;IACE,wDAAwD;EAC1D;EACA;;IAEE,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,UAAU;EACZ;AACF","sourcesContent":["/* Generic */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-style: normal;\n  margin: 0;\n  padding: 0;\n}\n:root {\n  font-size: 62.5%; /* 1rem = 10px (1.6rem = 16px) */\n\n  /* Text */\n  --darkDesatBlue: hsl(238, 29%, 16%);\n  --softRed: hsl(14, 88%, 65%);\n\n  /* shadow*/\n  --color-h: 238; /* Hue        */\n  --color-s: 29%; /* Saturation */\n  --color-l: 16%; /* Lightness  */\n\n  /* Background Gradient */\n  --softViolet: hsl(273, 75%, 66%);\n  --softBlue: hsl(240, 73%, 65%);\n\n  /* Text */\n  --veryDarkGrayishBlue: hsl(237, 12%, 33%);\n  --darkGrayishBlue: hsl(240, 6%, 50%);\n\n  /* Dividers */\n  --lightgrayishBlue: hsl(240, 5%, 91%);\n}\nbody {\n  font-family: \"Kumbh Sans\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\nmain {\n  height: 100vh;\n  width: 100%;\n  background-image: linear-gradient(var(--softViolet), var(--softBlue));\n  display: flex;\n  justify-content: center;\n  padding-top: 5rem;\n  position: relative;\n}\n.card {\n  width: 80%;\n  max-width: 95rem;\n  height: fit-content;\n  min-height: 70vh;\n  /* height: 70vh; */\n  background-color: white;\n  border-radius: 2.5rem;\n  position: relative;\n  margin-top: 10rem;\n  padding: 10rem 0 2rem 0;\n  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.3);\n}\n#icon {\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  transform: translate(0, -50%);\n  top: -4%;\n}\n.mobileImg {\n  width: 80%;\n  max-width: 23rem;\n}\n#icon::after {\n  content: url(\"./assets/images/bg-pattern-mobile.svg\");\n  position: absolute;\n  transform: translate(-50%, 50%);\n  left: 50%;\n  top: 5rem;\n}\n.desktopImg,\n.containerBox,\n.boxTest {\n  display: none;\n}\n#content {\n  width: 80%;\n  margin: auto;\n}\nh1 {\n  text-align: center;\n  font-size: 3rem;\n}\n.accordion {\n  padding-top: 2rem;\n  max-width: 30rem;\n  margin: auto;\n}\nh2 {\n  font-weight: normal;\n  font-size: 1.2rem;\n  padding: 1.5rem 0;\n}\nh2:hover {\n  color: var(--softRed);\n  cursor: pointer;\n}\ndetails {\n  border-bottom: solid var(--lightgrayishBlue) 1px;\n}\ndetails > summary {\n  list-style-type: none;\n  position: relative;\n}\ndetails > summary > h2::after {\n  content: url(\"./assets/images/icon-arrow-down.svg\");\n  display: inline-block;\n  position: absolute;\n  right: 1%;\n  transition: transform 0.4s;\n}\ndetails[open] > summary > h2::after {\n  content: url(\"./assets/images/icon-arrow-down.svg\");\n  display: inline-block;\n  position: absolute;\n  right: 1%;\n  transform: rotate(180deg);\n  transition: transform 0.4s;\n}\ndetails[open] {\n  padding-bottom: 2rem;\n}\ndetails[open] h2 {\n  font-weight: 700;\n}\n\n@media (min-width: 768px) {\n}\n@media (min-width: 992px) {\n  main {\n    padding-top: 0;\n  }\n  .card {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: unset;\n    overflow: hidden;\n  }\n  #icon,\n  #content {\n    width: 50%;\n  }\n  #icon {\n    position: relative;\n    transform: unset;\n    background-image: url(\"./assets/images/bg-pattern-desktop.svg\");\n    background-size: 150%;\n    background-repeat: no-repeat;\n    background-position: right;\n    left: -5rem;\n  }\n  #icon::after {\n    display: none;\n  }\n  .mobileImg {\n    display: none;\n  }\n  .desktopImg {\n    display: block;\n    width: 100%;\n    position: absolute;\n    transform: translateY(-50%);\n    top: 50%;\n  }\n  #content {\n    margin: unset;\n    padding-top: 10rem;\n  }\n  .accordion {\n    height: 30rem;\n    overflow-y: scroll;\n    padding-right: 1.8rem;\n  }\n  ::-webkit-scrollbar {\n    width: 0.7rem;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: linear-gradient(transparent, var(--softViolet));\n    border-radius: 0.5rem;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: linear-gradient(transparent, var(--softRed));\n  }\n  .accordion,\n  h1 {\n    margin-left: 6rem;\n    text-align: left;\n  }\n  .containerBox {\n    display: block;\n    position: relative;\n  }\n  .box {\n    display: block;\n    position: absolute;\n    top: 47%;\n    left: -95px;\n    z-index: 2;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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