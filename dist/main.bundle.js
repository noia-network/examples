/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/loader.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/loader.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  -webkit-animation: spinner-reveal 1.4s steps(1, end) infinite, spinner-rotation 1.4s ease-in-out infinite;\n          animation: spinner-reveal 1.4s steps(1, end) infinite, spinner-rotation 1.4s ease-in-out infinite;\n  -webkit-clip-path: inset(0 0 0 50%);\n          clip-path: inset(0 0 0 50%); }\n  .loader.big {\n    height: 64px;\n    width: 64px; }\n  .loader::before, .loader::after {\n    box-sizing: border-box;\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    border: 2px solid #ffffff;\n    border-radius: 50%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-clip-path: inset(0 50% 0 0);\n            clip-path: inset(0 50% 0 0);\n    -webkit-animation: spinner-rotation-a 1.4s linear infinite;\n            animation: spinner-rotation-a 1.4s linear infinite;\n    transition: border-color 0.5s ease-out; }\n  .loader::after {\n    -webkit-animation-name: spinner-rotation-b;\n            animation-name: spinner-rotation-b; }\n\n/***\r\n   * Animations\r\n   */\n@-webkit-keyframes spinner-rotation {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spinner-rotation {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes spinner-rotation-a {\n  40%,\n  60% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); } }\n\n@keyframes spinner-rotation-a {\n  40%,\n  60% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); } }\n\n@-webkit-keyframes spinner-rotation-b {\n  40% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  80% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); } }\n\n@keyframes spinner-rotation-b {\n  40% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  80% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); } }\n\n@-webkit-keyframes spinner-reveal {\n  40% {\n    -webkit-clip-path: inset(0 0 0 0);\n            clip-path: inset(0 0 0 0); }\n  80% {\n    -webkit-clip-path: inset(0 50% 0 0);\n            clip-path: inset(0 50% 0 0); } }\n\n@keyframes spinner-reveal {\n  40% {\n    -webkit-clip-path: inset(0 0 0 0);\n            clip-path: inset(0 0 0 0); }\n  80% {\n    -webkit-clip-path: inset(0 50% 0 0);\n            clip-path: inset(0 50% 0 0); } }\n"

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/main.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/main.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\nhtml {\n  height: 100%; }\n\nhtml,\nbody {\n  min-height: 100%; }\n\nbody {\n  background: #191c86;\n  display: flex;\n  flex-direction: column; }\n\n.example-container {\n  padding: 20px;\n  color: white;\n  font-family: \"Roboto\", sans-serif; }\n  .example-container h2 {\n    padding-bottom: 20px; }\n"

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/reset.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/reset.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n* {\n  box-sizing: border-box; }\n"

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/image/image.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/image/image.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-example {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/models/models.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/models/models.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-example img {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/video/video.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/video/video.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-example {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!**************************************************************!*\
  !*** ./node_modules/webpack/hot sync nonrecursive ^\.\/log$ ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/.registry.npmjs.org/webpack/4.23.1/node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/assets/loader.scss":
/*!********************************!*\
  !*** ./src/assets/loader.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!../../node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./loader.scss */ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/loader.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/main.scss":
/*!******************************!*\
  !*** ./src/assets/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!../../node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/reset.scss":
/*!*******************************!*\
  !*** ./src/assets/reset.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!../../node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./reset.scss */ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/assets/reset.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/base64.ts":
/*!***********************!*\
  !*** ./src/base64.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // @ts-ignore
// tslint:disable

function bytesToBase64(arrayBuffer) {
  var base64 = "";
  var encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var bytes = new Uint8Array(arrayBuffer);
  var byteLength = bytes.byteLength;
  var byteRemainder = byteLength % 3;
  var mainLength = byteLength - byteRemainder;
  var a, b, c, d;
  var chunk; // Main loop deals with bytes in chunks of 3

  for (var i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2]; // Use bitmasks to extract 6-bit segments from the triplet

    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18

    b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12

    c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6

    d = chunk & 63; // 63       = 2^6 - 1
    // Convert the raw binary segments to the appropriate ASCII encoding

    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  } // Deal with the remaining bytes and padding


  if (byteRemainder == 1) {
    chunk = bytes[mainLength];
    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
    // Set the 4 least significant bits to zero

    b = (chunk & 3) << 4; // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + "==";
  } else if (byteRemainder == 2) {
    chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];
    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10

    b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4
    // Set the 2 least significant bits to zero

    c = (chunk & 15) << 2; // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + "=";
  }

  return base64;
}

exports.bytesToBase64 = bytesToBase64; // tslint:enable

/***/ }),

/***/ "./src/examples/image/image-react.tsx":
/*!********************************************!*\
  !*** ./src/examples/image/image-react.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "./node_modules/.registry.npmjs.org/react/16.6.0/node_modules/react/index.js");

var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/.registry.npmjs.org/react-dom/16.6.0/node_modules/react-dom/index.js");

var sdk_1 = __webpack_require__(/*! @noia-network/sdk */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/dist/main.js");

var sdk_react_1 = __webpack_require__(/*! @noia-network/sdk-react */ "./node_modules/.registry.npmjs.org/@noia-network/sdk-react/2.0.1-rc/node_modules/@noia-network/sdk-react/dist/index.js");

var PieceWorker = __webpack_require__(/*! worker-loader!@noia-network/sdk/worker */ "./node_modules/.registry.npmjs.org/worker-loader/2.0.0/node_modules/worker-loader/dist/cjs.js!./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/worker.js");

var Sha1Worker = __webpack_require__(/*! worker-loader!rusha/dist/rusha */ "./node_modules/.registry.npmjs.org/worker-loader/2.0.0/node_modules/worker-loader/dist/cjs.js!./node_modules/.registry.npmjs.org/rusha/0.8.13/node_modules/rusha/dist/rusha.js");

__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/dist/vendors~main.js");

__webpack_require__(/*! ./image.scss */ "./src/examples/image/image.scss");

var noiaClient = new sdk_1.NoiaClient({
  logger: undefined,
  pieceWorkerConstructor: function () {
    return new PieceWorker();
  },
  sha1WorkerConstructor: function () {
    return new Sha1Worker();
  }
});
sdk_1.NoiaClientContainer.initialize(noiaClient);

var ExampleView =
/** @class */
function (_super) {
  __extends(ExampleView, _super);

  function ExampleView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ExampleView.prototype.render = function () {
    return React.createElement("div", {
      className: "image-example"
    }, React.createElement(sdk_react_1.Image, {
      src: "https://noia.network/samples/image.jpg",
      loaderComponent: React.createElement("div", {
        className: "loader"
      })
    }));
  };

  return ExampleView;
}(React.Component);

exports.ExampleView = ExampleView;

function run(container) {
  return __awaiter(this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      console.info("Image with React example.");
      ReactDOM.render(React.createElement(ExampleView, {
        noiaClient: noiaClient
      }), container);
      return [2
      /*return*/
      ];
    });
  });
}

exports.run = run;

/***/ }),

/***/ "./src/examples/image/image.scss":
/*!***************************************!*\
  !*** ./src/examples/image/image.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!../../../node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./image.scss */ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/image/image.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/examples/image/image.ts":
/*!*************************************!*\
  !*** ./src/examples/image/image.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/dist/vendors~main.js");

var base64_1 = __webpack_require__(/*! ../../base64 */ "./src/base64.ts");

__webpack_require__(/*! ./image.scss */ "./src/examples/image/image.scss");

function run(container, noiaClient) {
  return __awaiter(this, void 0, Promise, function () {
    var stream, imageBytes, imageType;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.info("Image example.");
          container.className = "image-example";
          container.innerHTML = "<div class=\"loader\" />";
          return [4
          /*yield*/
          , noiaClient.openStream({
            src: "https://noia.network/samples/image.jpg"
          })];

        case 1:
          stream = _a.sent();
          return [4
          /*yield*/
          , stream.getAllBytes()];

        case 2:
          imageBytes = _a.sent();
          console.info("Image downloaded (" + imageBytes.length + " bytes)");
          imageType = "image/jpeg";
          container.innerHTML = "<img src=\"data:" + imageType + ";base64," + base64_1.bytesToBase64(imageBytes) + "\" />";
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.run = run;

/***/ }),

/***/ "./src/examples/models/models.scss":
/*!*****************************************!*\
  !*** ./src/examples/models/models.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!../../../node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./models.scss */ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/models/models.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/examples/models/models.tsx":
/*!****************************************!*\
  !*** ./src/examples/models/models.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "./node_modules/.registry.npmjs.org/react/16.6.0/node_modules/react/index.js");

var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/.registry.npmjs.org/react-dom/16.6.0/node_modules/react-dom/index.js");

var StlViewer = __webpack_require__(/*! stl-viewer */ "./node_modules/.registry.npmjs.org/stl-viewer/0.9.0/node_modules/stl-viewer/dist/STLViewer.js");

var base64_1 = __webpack_require__(/*! ../../base64 */ "./src/base64.ts");

__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/dist/vendors~main.js");

__webpack_require__(/*! ./models.scss */ "./src/examples/models/models.scss");

var ModelViewer =
/** @class */
function (_super) {
  __extends(ModelViewer, _super);

  function ModelViewer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ModelViewer.prototype.render = function () {
    return React.createElement(StlViewer, {
      url: this.props.url,
      modelColor: "#808080",
      cameraX: 180
    });
  };

  return ModelViewer;
}(React.Component);

function run(container, noiaClient) {
  return __awaiter(this, void 0, Promise, function () {
    var stream, modelBytes, modelType;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.info("Models example.");
          container.className = "models-example";
          container.innerHTML = "<div class=\"loader\" />";
          return [4
          /*yield*/
          , noiaClient.openStream({
            // 64mb bust model of Gutenberg
            // src: "ipfs:QmZzRF2DwNi2RqFiZRZqfP7UAXyxte4LLfsqbQ1aQ15hh4"
            src: "https://noia.network/samples/model.bin"
          })];

        case 1:
          stream = _a.sent();
          return [4
          /*yield*/
          , stream.getAllBytes()];

        case 2:
          modelBytes = _a.sent();
          console.info("Model downloaded (" + modelBytes.length + " bytes)");
          modelType = "application/sla";
          ReactDOM.render(React.createElement(ModelViewer, {
            url: "data:" + modelType + ";base64," + base64_1.bytesToBase64(modelBytes)
          }), container);
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.run = run;

/***/ }),

/***/ "./src/examples/video/video-react.tsx":
/*!********************************************!*\
  !*** ./src/examples/video/video-react.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "./node_modules/.registry.npmjs.org/react/16.6.0/node_modules/react/index.js");

var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/.registry.npmjs.org/react-dom/16.6.0/node_modules/react-dom/index.js");

var sdk_1 = __webpack_require__(/*! @noia-network/sdk */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/dist/main.js");

var sdk_react_1 = __webpack_require__(/*! @noia-network/sdk-react */ "./node_modules/.registry.npmjs.org/@noia-network/sdk-react/2.0.1-rc/node_modules/@noia-network/sdk-react/dist/index.js");

var PieceWorker = __webpack_require__(/*! worker-loader!@noia-network/sdk/worker */ "./node_modules/.registry.npmjs.org/worker-loader/2.0.0/node_modules/worker-loader/dist/cjs.js!./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/worker.js");

var Sha1Worker = __webpack_require__(/*! worker-loader!rusha/dist/rusha */ "./node_modules/.registry.npmjs.org/worker-loader/2.0.0/node_modules/worker-loader/dist/cjs.js!./node_modules/.registry.npmjs.org/rusha/0.8.13/node_modules/rusha/dist/rusha.js");

__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/dist/vendors~main.js");

__webpack_require__(/*! ./video.scss */ "./src/examples/video/video.scss");

var noiaClient = new sdk_1.NoiaClient({
  logger: undefined,
  pieceWorkerConstructor: function () {
    return new PieceWorker();
  },
  sha1WorkerConstructor: function () {
    return new Sha1Worker();
  }
});
sdk_1.NoiaClientContainer.initialize(noiaClient);

var ExampleView =
/** @class */
function (_super) {
  __extends(ExampleView, _super);

  function ExampleView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ExampleView.prototype.render = function () {
    return React.createElement("div", {
      className: "video-example"
    }, React.createElement(sdk_react_1.Video, {
      controls: true,
      loop: true,
      src: "https://noia.network/samples/video.mp4",
      mimeType: "video/mp4",
      loaderComponent: React.createElement("div", {
        className: "loader"
      })
    }));
  };

  return ExampleView;
}(React.Component);

exports.ExampleView = ExampleView;

function run(container) {
  return __awaiter(this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      console.info("Video with React example.");
      ReactDOM.render(React.createElement(ExampleView, {
        noiaClient: noiaClient
      }), container);
      return [2
      /*return*/
      ];
    });
  });
}

exports.run = run;

/***/ }),

/***/ "./src/examples/video/video.scss":
/*!***************************************!*\
  !*** ./src/examples/video/video.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src!../../../node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./video.scss */ "./node_modules/.registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js!./node_modules/.registry.npmjs.org/sass-loader/7.1.0/node_modules/sass-loader/lib/loader.js!./src/examples/video/video.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.registry.npmjs.org/style-loader/0.23.1/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/examples/video/video.ts":
/*!*************************************!*\
  !*** ./src/examples/video/video.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var renderMedia = __webpack_require__(/*! render-media */ "./node_modules/.registry.npmjs.org/render-media/3.1.3/node_modules/render-media/index.js");

var from = __webpack_require__(/*! from2 */ "./node_modules/.registry.npmjs.org/from2/2.3.0/node_modules/from2/index.js");

var logger_1 = __webpack_require__(/*! ../../logger */ "./src/logger.ts");

__webpack_require__(/*! ./video.scss */ "./src/examples/video/video.scss");

function run(container, noiaClient) {
  return __awaiter(this, void 0, Promise, function () {
    var noiaStream, file, video;

    var _this = this;

    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.info("Video example.");
          container.className = "video-example";
          container.innerHTML = "<div class=\"loader\" />";
          return [4
          /*yield*/
          , noiaClient.openStream({
            src: "https://noia.network/samples/video.mp4"
          })];

        case 1:
          noiaStream = _a.sent(); // Buffer 1/10th of the video in advance.

          noiaStream.bufferBytes({
            start: 0,
            length: noiaStream.masterData.metadata.bufferLength / 10
          });
          file = {
            name: "video.mp4",
            length: noiaStream.masterData.metadata.bufferLength,
            createReadStream: function (opts) {
              if (opts === void 0) {
                opts = {};
              }

              var start = opts.start || 0;
              var end = opts.end || noiaStream.masterData.metadata.bufferLength - 1;
              var startBytes = start;
              return from(function (size, next) {
                return __awaiter(_this, void 0, void 0, function () {
                  var nextBytesPromise, chunksToBuffer, i, nextBytes;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        nextBytesPromise = noiaStream.getBytes({
                          start: startBytes,
                          length: size
                        });
                        chunksToBuffer = 50; // Buffer a few more chunks, while the current frames are shown.

                        for (i = 0; i < chunksToBuffer; i++) {
                          noiaStream.getBytes({
                            start: startBytes + size * i,
                            length: size
                          });
                        }

                        return [4
                        /*yield*/
                        , nextBytesPromise];

                      case 1:
                        nextBytes = _a.sent();
                        startBytes += size;
                        next(null, nextBytes);

                        if (startBytes > end) {
                          next(null, null);
                        }

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              });
            }
          };
          video = document.createElement("video");
          video.controls = true;
          container.innerHTML = "";
          container.append(video);
          renderMedia.render(file, video, {}, function (err, elem) {
            if (err) {
              return console.error(err.message);
            } // Rendered element with the media in it.


            logger_1.logger.Debug("Rendered element with the media in it.", elem);
          });
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.run = run;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ./assets/reset.scss */ "./src/assets/reset.scss");

__webpack_require__(/*! ./assets/main.scss */ "./src/assets/main.scss");

__webpack_require__(/*! ./assets/loader.scss */ "./src/assets/loader.scss");

__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/dist/vendors~main.js");

var sdk_1 = __webpack_require__(/*! @noia-network/sdk */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/dist/main.js");

var PieceWorker = __webpack_require__(/*! worker-loader!@noia-network/sdk/worker */ "./node_modules/.registry.npmjs.org/worker-loader/2.0.0/node_modules/worker-loader/dist/cjs.js!./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.1-rc/node_modules/@noia-network/sdk/worker.js");

var Sha1Worker = __webpack_require__(/*! worker-loader!rusha/dist/rusha */ "./node_modules/.registry.npmjs.org/worker-loader/2.0.0/node_modules/worker-loader/dist/cjs.js!./node_modules/.registry.npmjs.org/rusha/0.8.13/node_modules/rusha/dist/rusha.js");

var ImageExample = __webpack_require__(/*! ./examples/image/image */ "./src/examples/image/image.ts");

var ImageReactExample = __webpack_require__(/*! ./examples/image/image-react */ "./src/examples/image/image-react.tsx");

var VideoExample = __webpack_require__(/*! ./examples/video/video */ "./src/examples/video/video.ts");

var VideoReactExample = __webpack_require__(/*! ./examples/video/video-react */ "./src/examples/video/video-react.tsx");

var ModelsExample = __webpack_require__(/*! ./examples/models/models */ "./src/examples/models/models.tsx");
/**
 * Just a convenience function to not duplicate this code all over again
 * @param containerId Id for container
 */


function createExampleContainer(containerId, title) {
  var root = document.getElementById("root");
  var div = document.createElement("div");
  div.id = containerId;
  div.className = "example-container";
  div.innerHTML = "<h2>" + title + "</h2>";
  var innerDiv = document.createElement("div");
  div.appendChild(innerDiv);
  root.appendChild(div);
  return innerDiv;
}

exports.createExampleContainer = createExampleContainer;
sdk_1.NoiaClientContainer.initialize(new sdk_1.NoiaClient({
  logger: undefined,
  pieceWorkerConstructor: function () {
    return new PieceWorker();
  },
  sha1WorkerConstructor: function () {
    return new Sha1Worker();
  }
}));
document.addEventListener("DOMContentLoaded", function () {
  ImageExample.run(createExampleContainer("image", "Image example"), sdk_1.NoiaClientContainer.getClient());
  ImageReactExample.run(createExampleContainer("image", "React Image component example"));
  VideoExample.run(createExampleContainer("video", "Video example (stream, 1/10th pre-buffer)"), sdk_1.NoiaClientContainer.getClient());
  VideoReactExample.run(createExampleContainer("video", "React Video component example (full download)"));
  ModelsExample.run(createExampleContainer("models", "Models example"), sdk_1.NoiaClientContainer.getClient());
});

/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var simplr_logger_1 = __webpack_require__(/*! simplr-logger */ "./node_modules/.registry.npmjs.org/simplr-logger/1.0.1/node_modules/simplr-logger/dist/simplr-logger.js");

var handlers_1 = __webpack_require__(/*! simplr-logger/handlers */ "./node_modules/.registry.npmjs.org/simplr-logger/1.0.1/node_modules/simplr-logger/handlers.js");

exports.logger = new simplr_logger_1.LoggerBuilder({
  DefaultLogLevel: {
    LogLevel: simplr_logger_1.LogLevel.Trace,
    LogLevelIsBitMask: false
  },
  WriteMessageHandlers: [{
    Handler: new handlers_1.ConsoleMessageHandler(),
    LogLevel: simplr_logger_1.LogLevel.Critical | simplr_logger_1.LogLevel.Debug | simplr_logger_1.LogLevel.Information | simplr_logger_1.LogLevel.Error | simplr_logger_1.LogLevel.Trace | simplr_logger_1.LogLevel.Warning,
    LogLevelIsBitMask: true
  }]
});

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************!*\
  !*** multi ./node_modules/.registry.npmjs.org/webpack-dev-server/3.1.10/node_modules/webpack-dev-server/client?http://0.0.0.0:8888 ./src/index.ts ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Projects\Noia\full-ecosystem\examples\node_modules\.registry.npmjs.org\webpack-dev-server\3.1.10\node_modules\webpack-dev-server\client\index.js?http://0.0.0.0:8888 */"./node_modules/.registry.npmjs.org/webpack-dev-server/3.1.10/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8888");
module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2FkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2ltYWdlL2ltYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL21vZGVscy9tb2RlbHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvdmlkZW8vdmlkZW8uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2FkZXIuc2Nzcz83NGE1Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbWFpbi5zY3NzPzFkNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9yZXNldC5zY3NzP2ZlYzciLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNlNjQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9leGFtcGxlcy9pbWFnZS9pbWFnZS1yZWFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2ltYWdlL2ltYWdlLnNjc3M/NGMxMCIsIndlYnBhY2s6Ly8vLi4vc3JjL2V4YW1wbGVzL2ltYWdlL2ltYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy9tb2RlbHMvbW9kZWxzLnNjc3M/NzBjYSIsIndlYnBhY2s6Ly8vLi4vc3JjL2V4YW1wbGVzL21vZGVscy9tb2RlbHMudHN4Iiwid2VicGFjazovLy8uLi9zcmMvZXhhbXBsZXMvdmlkZW8vdmlkZW8tcmVhY3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy92aWRlby92aWRlby5zY3NzPzNlM2UiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9leGFtcGxlcy92aWRlby92aWRlby50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi9zcmMvbG9nZ2VyLnRzIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT83N2MxIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT84NWM1Iiwid2VicGFjazovLy9mcyAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT9mYjNhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJB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Ozs7Ozs7Ozs7O0FDSGIsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmxvYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1yZXZlYWwgMS40cyBzdGVwcygxLCBlbmQpIGluZmluaXRlLCBzcGlubmVyLXJvdGF0aW9uIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lci1yZXZlYWwgMS40cyBzdGVwcygxLCBlbmQpIGluZmluaXRlLCBzcGlubmVyLXJvdGF0aW9uIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMCAwIDAgNTAlKTtcXG4gICAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgwIDAgMCA1MCUpOyB9XFxuICAubG9hZGVyLmJpZyB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgd2lkdGg6IDY0cHg7IH1cXG4gIC5sb2FkZXI6OmJlZm9yZSwgLmxvYWRlcjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDAgNTAlIDAgMCk7XFxuICAgICAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgwIDUwJSAwIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1yb3RhdGlvbi1hIDEuNHMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lci1yb3RhdGlvbi1hIDEuNHMgbGluZWFyIGluZmluaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC41cyBlYXNlLW91dDsgfVxcbiAgLmxvYWRlcjo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzcGlubmVyLXJvdGF0aW9uLWI7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW5uZXItcm90YXRpb24tYjsgfVxcblxcbi8qKipcXHJcXG4gICAqIEFuaW1hdGlvbnNcXHJcXG4gICAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLXJvdGF0aW9uIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuQGtleWZyYW1lcyBzcGlubmVyLXJvdGF0aW9uIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYSB7XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYSB7XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1yb3RhdGlvbi1iIHtcXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYiB7XFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDU0MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItcmV2ZWFsIHtcXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApOyB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMCA1MCUgMCAwKTtcXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDAgNTAlIDAgMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgc3Bpbm5lci1yZXZlYWwge1xcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xcbiAgICAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCAwIDAgMCk7IH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwIDUwJSAwIDApO1xcbiAgICAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCA1MCUgMCAwKTsgfSB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cXFwiKTtcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMTkxYzg2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uZXhhbXBsZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgLmV4YW1wbGUtY29udGFpbmVyIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmltYWdlLWV4YW1wbGUge1xcbiAgbWF4LXdpZHRoOiA0MDBweDsgfVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5pbWFnZS1leGFtcGxlIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwMHB4OyB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnZpZGVvLWV4YW1wbGUge1xcbiAgbWF4LXdpZHRoOiA0MDBweDsgfVxcblwiIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvd2VicGFjay80LjIzLjEvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Bvc3Rjc3MtbG9hZGVyLzMuMC4wL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc2Fzcy1sb2FkZXIvNy4xLjAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9sb2FkZXIuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc3R5bGUtbG9hZGVyLzAuMjMuMS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbG9hZGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbG9hZGVyLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcG9zdGNzcy1sb2FkZXIvMy4wLjAvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9zYXNzLWxvYWRlci83LjEuMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc3R5bGUtbG9hZGVyLzAuMjMuMS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcG9zdGNzcy1sb2FkZXIvMy4wLjAvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9zYXNzLWxvYWRlci83LjEuMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc3R5bGUtbG9hZGVyLzAuMjMuMS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Bvc3Rjc3MtbG9hZGVyLzMuMC4wL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc2Fzcy1sb2FkZXIvNy4xLjAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNldC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gQHRzLWlnbm9yZVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb0Jhc2U2NChhcnJheUJ1ZmZlcikge1xyXG4gICAgdmFyIGJhc2U2NCA9IFwiXCI7XHJcbiAgICB2YXIgZW5jb2RpbmdzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XHJcblxyXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xyXG4gICAgdmFyIGJ5dGVMZW5ndGggPSBieXRlcy5ieXRlTGVuZ3RoO1xyXG4gICAgdmFyIGJ5dGVSZW1haW5kZXIgPSBieXRlTGVuZ3RoICUgMztcclxuICAgIHZhciBtYWluTGVuZ3RoID0gYnl0ZUxlbmd0aCAtIGJ5dGVSZW1haW5kZXI7XHJcblxyXG4gICAgdmFyIGEsIGIsIGMsIGQ7XHJcbiAgICB2YXIgY2h1bms7XHJcblxyXG4gICAgLy8gTWFpbiBsb29wIGRlYWxzIHdpdGggYnl0ZXMgaW4gY2h1bmtzIG9mIDNcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFpbkxlbmd0aDsgaSA9IGkgKyAzKSB7XHJcbiAgICAgICAgLy8gQ29tYmluZSB0aGUgdGhyZWUgYnl0ZXMgaW50byBhIHNpbmdsZSBpbnRlZ2VyXHJcbiAgICAgICAgY2h1bmsgPSAoYnl0ZXNbaV0gPDwgMTYpIHwgKGJ5dGVzW2kgKyAxXSA8PCA4KSB8IGJ5dGVzW2kgKyAyXTtcclxuXHJcbiAgICAgICAgLy8gVXNlIGJpdG1hc2tzIHRvIGV4dHJhY3QgNi1iaXQgc2VnbWVudHMgZnJvbSB0aGUgdHJpcGxldFxyXG4gICAgICAgIGEgPSAoY2h1bmsgJiAxNjUxNTA3MikgPj4gMTg7IC8vIDE2NTE1MDcyID0gKDJeNiAtIDEpIDw8IDE4XHJcbiAgICAgICAgYiA9IChjaHVuayAmIDI1ODA0OCkgPj4gMTI7IC8vIDI1ODA0OCAgID0gKDJeNiAtIDEpIDw8IDEyXHJcbiAgICAgICAgYyA9IChjaHVuayAmIDQwMzIpID4+IDY7IC8vIDQwMzIgICAgID0gKDJeNiAtIDEpIDw8IDZcclxuICAgICAgICBkID0gY2h1bmsgJiA2MzsgLy8gNjMgICAgICAgPSAyXjYgLSAxXHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHJhdyBiaW5hcnkgc2VnbWVudHMgdG8gdGhlIGFwcHJvcHJpYXRlIEFTQ0lJIGVuY29kaW5nXHJcbiAgICAgICAgYmFzZTY0ICs9IGVuY29kaW5nc1thXSArIGVuY29kaW5nc1tiXSArIGVuY29kaW5nc1tjXSArIGVuY29kaW5nc1tkXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWFsIHdpdGggdGhlIHJlbWFpbmluZyBieXRlcyBhbmQgcGFkZGluZ1xyXG4gICAgaWYgKGJ5dGVSZW1haW5kZXIgPT0gMSkge1xyXG4gICAgICAgIGNodW5rID0gYnl0ZXNbbWFpbkxlbmd0aF07XHJcblxyXG4gICAgICAgIGEgPSAoY2h1bmsgJiAyNTIpID4+IDI7IC8vIDI1MiA9ICgyXjYgLSAxKSA8PCAyXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgNCBsZWFzdCBzaWduaWZpY2FudCBiaXRzIHRvIHplcm9cclxuICAgICAgICBiID0gKGNodW5rICYgMykgPDwgNDsgLy8gMyAgID0gMl4yIC0gMVxyXG5cclxuICAgICAgICBiYXNlNjQgKz0gZW5jb2RpbmdzW2FdICsgZW5jb2RpbmdzW2JdICsgXCI9PVwiO1xyXG4gICAgfSBlbHNlIGlmIChieXRlUmVtYWluZGVyID09IDIpIHtcclxuICAgICAgICBjaHVuayA9IChieXRlc1ttYWluTGVuZ3RoXSA8PCA4KSB8IGJ5dGVzW21haW5MZW5ndGggKyAxXTtcclxuXHJcbiAgICAgICAgYSA9IChjaHVuayAmIDY0NTEyKSA+PiAxMDsgLy8gNjQ1MTIgPSAoMl42IC0gMSkgPDwgMTBcclxuICAgICAgICBiID0gKGNodW5rICYgMTAwOCkgPj4gNDsgLy8gMTAwOCAgPSAoMl42IC0gMSkgPDwgNFxyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIDIgbGVhc3Qgc2lnbmlmaWNhbnQgYml0cyB0byB6ZXJvXHJcbiAgICAgICAgYyA9IChjaHVuayAmIDE1KSA8PCAyOyAvLyAxNSAgICA9IDJeNCAtIDFcclxuXHJcbiAgICAgICAgYmFzZTY0ICs9IGVuY29kaW5nc1thXSArIGVuY29kaW5nc1tiXSArIGVuY29kaW5nc1tjXSArIFwiPVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlNjQ7XHJcbn1cclxuLy8gdHNsaW50OmVuYWJsZVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBOb2lhQ2xpZW50LCBOb2lhQ2xpZW50Q29udGFpbmVyIH0gZnJvbSBcIkBub2lhLW5ldHdvcmsvc2RrXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBub2lhLW5ldHdvcmsvc2RrLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBQaWVjZVdvcmtlciBmcm9tIFwid29ya2VyLWxvYWRlciFAbm9pYS1uZXR3b3JrL3Nkay93b3JrZXJcIjtcclxuaW1wb3J0ICogYXMgU2hhMVdvcmtlciBmcm9tIFwid29ya2VyLWxvYWRlciFydXNoYS9kaXN0L3J1c2hhXCI7XHJcblxyXG5pbXBvcnQgXCJAbm9pYS1uZXR3b3JrL3Nkay9kaXN0L3ZlbmRvcnN+bWFpblwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbWFnZS5zY3NzXCI7XHJcblxyXG5jb25zdCBub2lhQ2xpZW50ID0gbmV3IE5vaWFDbGllbnQoe1xyXG4gICAgbG9nZ2VyOiB1bmRlZmluZWQsXHJcbiAgICBwaWVjZVdvcmtlckNvbnN0cnVjdG9yOiAoKSA9PiBuZXcgUGllY2VXb3JrZXIoKSxcclxuICAgIHNoYTFXb3JrZXJDb25zdHJ1Y3RvcjogKCkgPT4gbmV3IFNoYTFXb3JrZXIoKVxyXG59KTtcclxuTm9pYUNsaWVudENvbnRhaW5lci5pbml0aWFsaXplKG5vaWFDbGllbnQpO1xyXG5cclxuaW50ZXJmYWNlIEV4YW1wbGVWaWV3UHJvcHMge1xyXG4gICAgbm9pYUNsaWVudDogTm9pYUNsaWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4YW1wbGVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEV4YW1wbGVWaWV3UHJvcHM+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vbm9pYS5uZXR3b3JrL3NhbXBsZXMvaW1hZ2UuanBnXCIgbG9hZGVyQ29tcG9uZW50PXs8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIC8+fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnNvbGUuaW5mbyhcIkltYWdlIHdpdGggUmVhY3QgZXhhbXBsZS5cIik7XHJcblxyXG4gICAgUmVhY3RET00ucmVuZGVyKDxFeGFtcGxlVmlldyBub2lhQ2xpZW50PXtub2lhQ2xpZW50fSAvPiwgY29udGFpbmVyKTtcclxufVxyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcG9zdGNzcy1sb2FkZXIvMy4wLjAvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9zYXNzLWxvYWRlci83LjEuMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ltYWdlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3N0eWxlLWxvYWRlci8wLjIzLjEvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcG9zdGNzcy1sb2FkZXIvMy4wLjAvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9zYXNzLWxvYWRlci83LjEuMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ltYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW1hZ2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIkBub2lhLW5ldHdvcmsvc2RrL2Rpc3QvdmVuZG9yc35tYWluXCI7XHJcbmltcG9ydCB7IE5vaWFDbGllbnQgfSBmcm9tIFwiQG5vaWEtbmV0d29yay9zZGtcIjtcclxuaW1wb3J0IHsgYnl0ZXNUb0Jhc2U2NCB9IGZyb20gXCIuLi8uLi9iYXNlNjRcIjtcclxuaW1wb3J0IFwiLi9pbWFnZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG5vaWFDbGllbnQ6IE5vaWFDbGllbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zb2xlLmluZm8oXCJJbWFnZSBleGFtcGxlLlwiKTtcclxuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJpbWFnZS1leGFtcGxlXCI7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibG9hZGVyXCIgLz5gO1xyXG5cclxuICBjb25zdCBzdHJlYW0gPSBhd2FpdCBub2lhQ2xpZW50Lm9wZW5TdHJlYW0oe1xyXG4gICAgc3JjOiBcImh0dHBzOi8vbm9pYS5uZXR3b3JrL3NhbXBsZXMvaW1hZ2UuanBnXCJcclxuICB9KTtcclxuXHJcbiAgLy8gTG9hZCBpbWFnZSBieXRlc1xyXG4gIGNvbnN0IGltYWdlQnl0ZXMgPSBhd2FpdCBzdHJlYW0uZ2V0QWxsQnl0ZXMoKTtcclxuXHJcbiAgY29uc29sZS5pbmZvKGBJbWFnZSBkb3dubG9hZGVkICgke2ltYWdlQnl0ZXMubGVuZ3RofSBieXRlcylgKTtcclxuXHJcbiAgLy8gUmVuZGVyIGltYWdlIGFzIGJ5dGVzXHJcbiAgY29uc3QgaW1hZ2VUeXBlID0gXCJpbWFnZS9qcGVnXCI7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cImRhdGE6JHtpbWFnZVR5cGV9O2Jhc2U2NCwke2J5dGVzVG9CYXNlNjQoXHJcbiAgICBpbWFnZUJ5dGVzXHJcbiAgKX1cIiAvPmA7XHJcbn1cclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Bvc3Rjc3MtbG9hZGVyLzMuMC4wL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc2Fzcy1sb2FkZXIvNy4xLjAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tb2RlbHMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvc3R5bGUtbG9hZGVyLzAuMjMuMS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbW9kZWxzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbW9kZWxzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgKiBhcyBTdGxWaWV3ZXIgZnJvbSBcInN0bC12aWV3ZXJcIjtcclxuaW1wb3J0IHsgTm9pYUNsaWVudCB9IGZyb20gXCJAbm9pYS1uZXR3b3JrL3Nka1wiO1xyXG5pbXBvcnQgeyBieXRlc1RvQmFzZTY0IH0gZnJvbSBcIi4uLy4uL2Jhc2U2NFwiO1xyXG5pbXBvcnQgXCJAbm9pYS1uZXR3b3JrL3Nkay9kaXN0L3ZlbmRvcnN+bWFpblwiO1xyXG5pbXBvcnQgXCIuL21vZGVscy5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIE1vZGVsVmlld2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gPFN0bFZpZXdlciB1cmw9e3RoaXMucHJvcHMudXJsfSBtb2RlbENvbG9yPVwiIzgwODA4MFwiIGNhbWVyYVg9ezE4MH0gLz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW4oY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbm9pYUNsaWVudDogTm9pYUNsaWVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc29sZS5pbmZvKFwiTW9kZWxzIGV4YW1wbGUuXCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwibW9kZWxzLWV4YW1wbGVcIjtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImxvYWRlclwiIC8+YDtcclxuXHJcbiAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBub2lhQ2xpZW50Lm9wZW5TdHJlYW0oe1xyXG4gICAgICAgIC8vIDY0bWIgYnVzdCBtb2RlbCBvZiBHdXRlbmJlcmdcclxuICAgICAgICAvLyBzcmM6IFwiaXBmczpRbVp6UkYyRHdOaTJScUZpWlJacWZQN1VBWHl4dGU0TExmc3FiUTFhUTE1aGg0XCJcclxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9ub2lhLm5ldHdvcmsvc2FtcGxlcy9tb2RlbC5iaW5cIlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTG9hZCBtb2RlbCBieXRlc1xyXG4gICAgY29uc3QgbW9kZWxCeXRlcyA9IGF3YWl0IHN0cmVhbS5nZXRBbGxCeXRlcygpO1xyXG5cclxuICAgIGNvbnNvbGUuaW5mbyhgTW9kZWwgZG93bmxvYWRlZCAoJHttb2RlbEJ5dGVzLmxlbmd0aH0gYnl0ZXMpYCk7XHJcbiAgICBjb25zdCBtb2RlbFR5cGU6IHN0cmluZyA9IFwiYXBwbGljYXRpb24vc2xhXCI7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPE1vZGVsVmlld2VyIHVybD17YGRhdGE6JHttb2RlbFR5cGV9O2Jhc2U2NCwke2J5dGVzVG9CYXNlNjQobW9kZWxCeXRlcyl9YH0gLz4sIGNvbnRhaW5lcik7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgTm9pYUNsaWVudCwgTm9pYUNsaWVudENvbnRhaW5lciB9IGZyb20gXCJAbm9pYS1uZXR3b3JrL3Nka1wiO1xyXG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gXCJAbm9pYS1uZXR3b3JrL3Nkay1yZWFjdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgUGllY2VXb3JrZXIgZnJvbSBcIndvcmtlci1sb2FkZXIhQG5vaWEtbmV0d29yay9zZGsvd29ya2VyXCI7XHJcbmltcG9ydCAqIGFzIFNoYTFXb3JrZXIgZnJvbSBcIndvcmtlci1sb2FkZXIhcnVzaGEvZGlzdC9ydXNoYVwiO1xyXG5cclxuaW1wb3J0IFwiQG5vaWEtbmV0d29yay9zZGsvZGlzdC92ZW5kb3Jzfm1haW5cIjtcclxuXHJcbmltcG9ydCBcIi4vdmlkZW8uc2Nzc1wiO1xyXG5cclxuY29uc3Qgbm9pYUNsaWVudCA9IG5ldyBOb2lhQ2xpZW50KHtcclxuICAgIGxvZ2dlcjogdW5kZWZpbmVkLFxyXG4gICAgcGllY2VXb3JrZXJDb25zdHJ1Y3RvcjogKCkgPT4gbmV3IFBpZWNlV29ya2VyKCksXHJcbiAgICBzaGExV29ya2VyQ29uc3RydWN0b3I6ICgpID0+IG5ldyBTaGExV29ya2VyKClcclxufSk7XHJcbk5vaWFDbGllbnRDb250YWluZXIuaW5pdGlhbGl6ZShub2lhQ2xpZW50KTtcclxuXHJcbmludGVyZmFjZSBFeGFtcGxlVmlld1Byb3BzIHtcclxuICAgIG5vaWFDbGllbnQ6IE5vaWFDbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeGFtcGxlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFeGFtcGxlVmlld1Byb3BzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgIDxWaWRlb1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ub2lhLm5ldHdvcmsvc2FtcGxlcy92aWRlby5tcDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlPVwidmlkZW8vbXA0XCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXJDb21wb25lbnQ9ezxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIgLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnNvbGUuaW5mbyhcIlZpZGVvIHdpdGggUmVhY3QgZXhhbXBsZS5cIik7XHJcblxyXG4gICAgUmVhY3RET00ucmVuZGVyKDxFeGFtcGxlVmlldyBub2lhQ2xpZW50PXtub2lhQ2xpZW50fSAvPiwgY29udGFpbmVyKTtcclxufVxyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcG9zdGNzcy1sb2FkZXIvMy4wLjAvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9zYXNzLWxvYWRlci83LjEuMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3ZpZGVvLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3N0eWxlLWxvYWRlci8wLjIzLjEvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcG9zdGNzcy1sb2FkZXIvMy4wLjAvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9zYXNzLWxvYWRlci83LjEuMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3ZpZGVvLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wb3N0Y3NzLWxvYWRlci8zLjAuMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Nhc3MtbG9hZGVyLzcuMS4wL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vdmlkZW8uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IE5vaWFDbGllbnQgfSBmcm9tIFwiQG5vaWEtbmV0d29yay9zZGtcIjtcclxuXHJcbmltcG9ydCAqIGFzIHJlbmRlck1lZGlhIGZyb20gXCJyZW5kZXItbWVkaWFcIjtcclxuaW1wb3J0ICogYXMgZnJvbSBmcm9tIFwiZnJvbTJcIjtcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uLy4uL2xvZ2dlclwiO1xyXG5cclxuaW1wb3J0IFwiLi92aWRlby5zY3NzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG5vaWFDbGllbnQ6IE5vaWFDbGllbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnNvbGUuaW5mbyhcIlZpZGVvIGV4YW1wbGUuXCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidmlkZW8tZXhhbXBsZVwiO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibG9hZGVyXCIgLz5gO1xyXG5cclxuICAgIGNvbnN0IG5vaWFTdHJlYW0gPSBhd2FpdCBub2lhQ2xpZW50Lm9wZW5TdHJlYW0oe1xyXG4gICAgICAgIHNyYzogXCJodHRwczovL25vaWEubmV0d29yay9zYW1wbGVzL3ZpZGVvLm1wNFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCdWZmZXIgMS8xMHRoIG9mIHRoZSB2aWRlbyBpbiBhZHZhbmNlLlxyXG4gICAgbm9pYVN0cmVhbS5idWZmZXJCeXRlcyh7XHJcbiAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgbGVuZ3RoOiBub2lhU3RyZWFtLm1hc3RlckRhdGEubWV0YWRhdGEuYnVmZmVyTGVuZ3RoIC8gMTBcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGU6IHJlbmRlck1lZGlhLlJlbmRlckZpbGUgPSB7XHJcbiAgICAgICAgbmFtZTogXCJ2aWRlby5tcDRcIixcclxuICAgICAgICBsZW5ndGg6IG5vaWFTdHJlYW0ubWFzdGVyRGF0YS5tZXRhZGF0YS5idWZmZXJMZW5ndGgsXHJcbiAgICAgICAgY3JlYXRlUmVhZFN0cmVhbTogKG9wdHM6IHJlbmRlck1lZGlhLkNyZWF0ZVJlYWRTdHJlYW1PcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBvcHRzLnN0YXJ0IHx8IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG9wdHMuZW5kIHx8IG5vaWFTdHJlYW0ubWFzdGVyRGF0YS5tZXRhZGF0YS5idWZmZXJMZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXJ0Qnl0ZXM6IG51bWJlciA9IHN0YXJ0O1xyXG4gICAgICAgICAgICByZXR1cm4gZnJvbShhc3luYyAoc2l6ZSwgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEJ5dGVzUHJvbWlzZSA9IG5vaWFTdHJlYW0uZ2V0Qnl0ZXMoeyBzdGFydDogc3RhcnRCeXRlcywgbGVuZ3RoOiBzaXplIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rc1RvQnVmZmVyID0gNTA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQnVmZmVyIGEgZmV3IG1vcmUgY2h1bmtzLCB3aGlsZSB0aGUgY3VycmVudCBmcmFtZXMgYXJlIHNob3duLlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaHVua3NUb0J1ZmZlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9pYVN0cmVhbS5nZXRCeXRlcyh7IHN0YXJ0OiBzdGFydEJ5dGVzICsgc2l6ZSAqIGksIGxlbmd0aDogc2l6ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Qnl0ZXMgPSBhd2FpdCBuZXh0Qnl0ZXNQcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Qnl0ZXMgKz0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIG5leHQobnVsbCwgbmV4dEJ5dGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRCeXRlcyA+IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQobnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XHJcbiAgICB2aWRlby5jb250cm9scyA9IHRydWU7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQodmlkZW8pO1xyXG5cclxuICAgIHJlbmRlck1lZGlhLnJlbmRlcihmaWxlLCB2aWRlbywge30sIChlcnI6IEVycm9yIHwgbnVsbCwgZWxlbTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVuZGVyZWQgZWxlbWVudCB3aXRoIHRoZSBtZWRpYSBpbiBpdC5cclxuICAgICAgICBsb2dnZXIuRGVidWcoXCJSZW5kZXJlZCBlbGVtZW50IHdpdGggdGhlIG1lZGlhIGluIGl0LlwiLCBlbGVtKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBcIi4vYXNzZXRzL3Jlc2V0LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL2xvYWRlci5zY3NzXCI7XHJcblxyXG5pbXBvcnQgXCJAbm9pYS1uZXR3b3JrL3Nkay9kaXN0L3ZlbmRvcnN+bWFpblwiO1xyXG5pbXBvcnQgeyBOb2lhQ2xpZW50LCBOb2lhQ2xpZW50Q29udGFpbmVyIH0gZnJvbSBcIkBub2lhLW5ldHdvcmsvc2RrXCI7XHJcbmltcG9ydCAqIGFzIFBpZWNlV29ya2VyIGZyb20gXCJ3b3JrZXItbG9hZGVyIUBub2lhLW5ldHdvcmsvc2RrL3dvcmtlclwiO1xyXG5pbXBvcnQgKiBhcyBTaGExV29ya2VyIGZyb20gXCJ3b3JrZXItbG9hZGVyIXJ1c2hhL2Rpc3QvcnVzaGFcIjtcclxuXHJcbmltcG9ydCAqIGFzIEltYWdlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlcy9pbWFnZS9pbWFnZVwiO1xyXG5pbXBvcnQgKiBhcyBJbWFnZVJlYWN0RXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlcy9pbWFnZS9pbWFnZS1yZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBWaWRlb0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZXMvdmlkZW8vdmlkZW9cIjtcclxuaW1wb3J0ICogYXMgVmlkZW9SZWFjdEV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZXMvdmlkZW8vdmlkZW8tcmVhY3RcIjtcclxuaW1wb3J0ICogYXMgTW9kZWxzRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlcy9tb2RlbHMvbW9kZWxzXCI7XHJcblxyXG4vKipcclxuICogSnVzdCBhIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIG5vdCBkdXBsaWNhdGUgdGhpcyBjb2RlIGFsbCBvdmVyIGFnYWluXHJcbiAqIEBwYXJhbSBjb250YWluZXJJZCBJZCBmb3IgY29udGFpbmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXhhbXBsZUNvbnRhaW5lcihjb250YWluZXJJZDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSE7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmlkID0gY29udGFpbmVySWQ7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJleGFtcGxlLWNvbnRhaW5lclwiO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGA8aDI+JHt0aXRsZX08L2gyPmA7XHJcbiAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgcmV0dXJuIGlubmVyRGl2O1xyXG59XHJcblxyXG5Ob2lhQ2xpZW50Q29udGFpbmVyLmluaXRpYWxpemUoXHJcbiAgICBuZXcgTm9pYUNsaWVudCh7XHJcbiAgICAgICAgbG9nZ2VyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgcGllY2VXb3JrZXJDb25zdHJ1Y3RvcjogKCkgPT4gbmV3IFBpZWNlV29ya2VyKCksXHJcbiAgICAgICAgc2hhMVdvcmtlckNvbnN0cnVjdG9yOiAoKSA9PiBuZXcgU2hhMVdvcmtlcigpXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiRE9NQ29udGVudExvYWRlZFwiLFxyXG4gICAgKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIEltYWdlRXhhbXBsZS5ydW4oY3JlYXRlRXhhbXBsZUNvbnRhaW5lcihcImltYWdlXCIsIFwiSW1hZ2UgZXhhbXBsZVwiKSwgTm9pYUNsaWVudENvbnRhaW5lci5nZXRDbGllbnQoKSk7XHJcbiAgICAgICAgSW1hZ2VSZWFjdEV4YW1wbGUucnVuKFxyXG4gICAgICAgICAgY3JlYXRlRXhhbXBsZUNvbnRhaW5lcihcImltYWdlXCIsIFwiUmVhY3QgSW1hZ2UgY29tcG9uZW50IGV4YW1wbGVcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIFZpZGVvRXhhbXBsZS5ydW4oY3JlYXRlRXhhbXBsZUNvbnRhaW5lcihcInZpZGVvXCIsIFwiVmlkZW8gZXhhbXBsZSAoc3RyZWFtLCAxLzEwdGggcHJlLWJ1ZmZlcilcIiksIE5vaWFDbGllbnRDb250YWluZXIuZ2V0Q2xpZW50KCkpO1xyXG4gICAgICAgIFZpZGVvUmVhY3RFeGFtcGxlLnJ1bihcclxuICAgICAgICAgIGNyZWF0ZUV4YW1wbGVDb250YWluZXIoXCJ2aWRlb1wiLCBcIlJlYWN0IFZpZGVvIGNvbXBvbmVudCBleGFtcGxlIChmdWxsIGRvd25sb2FkKVwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgTW9kZWxzRXhhbXBsZS5ydW4oXHJcbiAgICAgICAgICBjcmVhdGVFeGFtcGxlQ29udGFpbmVyKFwibW9kZWxzXCIsIFwiTW9kZWxzIGV4YW1wbGVcIiksXHJcbiAgICAgICAgICBOb2lhQ2xpZW50Q29udGFpbmVyLmdldENsaWVudCgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IHsgTG9nZ2VyQnVpbGRlciwgTG9nTGV2ZWwgfSBmcm9tIFwic2ltcGxyLWxvZ2dlclwiO1xyXG5pbXBvcnQgeyBDb25zb2xlTWVzc2FnZUhhbmRsZXIgfSBmcm9tIFwic2ltcGxyLWxvZ2dlci9oYW5kbGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXJCdWlsZGVyKHtcclxuICAgIERlZmF1bHRMb2dMZXZlbDoge1xyXG4gICAgICAgIExvZ0xldmVsOiBMb2dMZXZlbC5UcmFjZSxcclxuICAgICAgICBMb2dMZXZlbElzQml0TWFzazogZmFsc2VcclxuICAgIH0sXHJcbiAgICBXcml0ZU1lc3NhZ2VIYW5kbGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSGFuZGxlcjogbmV3IENvbnNvbGVNZXNzYWdlSGFuZGxlcigpLFxyXG4gICAgICAgICAgICBMb2dMZXZlbDogTG9nTGV2ZWwuQ3JpdGljYWwgfCBMb2dMZXZlbC5EZWJ1ZyB8IExvZ0xldmVsLkluZm9ybWF0aW9uIHwgTG9nTGV2ZWwuRXJyb3IgfCBMb2dMZXZlbC5UcmFjZSB8IExvZ0xldmVsLldhcm5pbmcsXHJcbiAgICAgICAgICAgIExvZ0xldmVsSXNCaXRNYXNrOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59KTtcclxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==