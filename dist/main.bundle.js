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

/***/ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/assets/loader.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/assets/loader.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  -webkit-animation: spinner-reveal 1.4s steps(1, end) infinite, spinner-rotation 1.4s ease-in-out infinite;\n          animation: spinner-reveal 1.4s steps(1, end) infinite, spinner-rotation 1.4s ease-in-out infinite;\n  -webkit-clip-path: inset(0 0 0 50%);\n          clip-path: inset(0 0 0 50%); }\n  .loader.big {\n    height: 64px;\n    width: 64px; }\n  .loader::before, .loader::after {\n    box-sizing: border-box;\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    border: 2px solid #ffffff;\n    border-radius: 50%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-clip-path: inset(0 50% 0 0);\n            clip-path: inset(0 50% 0 0);\n    -webkit-animation: spinner-rotation-a 1.4s linear infinite;\n            animation: spinner-rotation-a 1.4s linear infinite;\n    transition: border-color 0.5s ease-out; }\n  .loader::after {\n    -webkit-animation-name: spinner-rotation-b;\n            animation-name: spinner-rotation-b; }\n\n/***\r\n   * Animations\r\n   */\n@-webkit-keyframes spinner-rotation {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spinner-rotation {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes spinner-rotation-a {\n  40%,\n  60% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); } }\n\n@keyframes spinner-rotation-a {\n  40%,\n  60% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); } }\n\n@-webkit-keyframes spinner-rotation-b {\n  40% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  80% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); } }\n\n@keyframes spinner-rotation-b {\n  40% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  80% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); } }\n\n@-webkit-keyframes spinner-reveal {\n  40% {\n    -webkit-clip-path: inset(0 0 0 0);\n            clip-path: inset(0 0 0 0); }\n  80% {\n    -webkit-clip-path: inset(0 50% 0 0);\n            clip-path: inset(0 50% 0 0); } }\n\n@keyframes spinner-reveal {\n  40% {\n    -webkit-clip-path: inset(0 0 0 0);\n            clip-path: inset(0 0 0 0); }\n  80% {\n    -webkit-clip-path: inset(0 50% 0 0);\n            clip-path: inset(0 50% 0 0); } }\n"

/***/ }),

/***/ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/assets/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/assets/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\nhtml {\n  height: 100%; }\n\nhtml,\nbody {\n  min-height: 100%; }\n\nbody {\n  background: #191c86;\n  display: flex;\n  flex-direction: column; }\n\n.example-container {\n  padding: 20px;\n  color: white;\n  font-family: \"Roboto\", sans-serif; }\n  .example-container h2 {\n    padding-bottom: 20px; }\n"

/***/ }),

/***/ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/assets/reset.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/assets/reset.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n* {\n  box-sizing: border-box; }\n"

/***/ }),

/***/ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/examples/image/image.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/examples/image/image.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-example img {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/examples/models/models.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/examples/models/models.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-example img {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/examples/video/video.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/examples/video/video.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-example video {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
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


var content = __webpack_require__(/*! !../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./loader.scss */ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/assets/loader.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/main.scss":
/*!******************************!*\
  !*** ./src/assets/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/assets/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/reset.scss":
/*!*******************************!*\
  !*** ./src/assets/reset.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./reset.scss */ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/assets/reset.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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


Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
// tslint:disable
function bytesToBase64(arrayBuffer) {
    var base64 = "";
    var encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;
    var a, b, c, d;
    var chunk;
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
        d = chunk & 63; // 63       = 2^6 - 1
        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
    // Deal with the remaining bytes and padding
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
exports.bytesToBase64 = bytesToBase64;
// tslint:enable

/***/ }),

/***/ "./src/examples/image/image.scss":
/*!***************************************!*\
  !*** ./src/examples/image/image.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/postcss-loader/lib!../../../node_modules/sass-loader/lib/loader.js!./image.scss */ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/examples/image/image.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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
    var _ = { label: 0, sent: function () {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
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
                case 0:case 1:
                    t = op;break;
                case 4:
                    _.label++;return { value: op[1], done: false };
                case 5:
                    _.label++;y = op[1];op = [0];continue;
                case 7:
                    op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];t = op;break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];_.ops.push(op);break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/@noia-network/sdk/dist/vendors~main.js");
__webpack_require__(/*! ./image.scss */ "./src/examples/image/image.scss");
var base64_1 = __webpack_require__(/*! ../../base64 */ "./src/base64.ts");
function run(container, noiaClient) {
    return __awaiter(this, void 0, Promise, function () {
        var imageBytes, imageType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.info("Image example.");
                    container.className = "image-example";
                    container.innerHTML = "<div class=\"loader\" />";
                    return [4 /*yield*/, noiaClient.download({
                        src: "ipfs:QmeMHGKY3WWTt41EK5sntQVuPY8Wcq7R47KEE4jm4nNQTu"
                    })];
                case 1:
                    imageBytes = _a.sent();
                    console.info("Image downloaded (" + imageBytes.length + " bytes)");
                    imageType = "image/jpeg";
                    container.innerHTML = "<img src=\"data:" + imageType + ";base64," + base64_1.bytesToBase64(imageBytes) + "\" />";
                    return [2 /*return*/];
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


var content = __webpack_require__(/*! !../../../node_modules/postcss-loader/lib!../../../node_modules/sass-loader/lib/loader.js!./models.scss */ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/examples/models/models.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
    var _ = { label: 0, sent: function () {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
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
                case 0:case 1:
                    t = op;break;
                case 4:
                    _.label++;return { value: op[1], done: false };
                case 5:
                    _.label++;y = op[1];op = [0];continue;
                case 7:
                    op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];t = op;break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];_.ops.push(op);break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var StlViewer = __webpack_require__(/*! stl-viewer */ "./node_modules/stl-viewer/dist/STLViewer.js");
var base64_1 = __webpack_require__(/*! ../../base64 */ "./src/base64.ts");
__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/@noia-network/sdk/dist/vendors~main.js");
__webpack_require__(/*! ./models.scss */ "./src/examples/models/models.scss");
var ModelViewer = /** @class */function (_super) {
    __extends(ModelViewer, _super);
    function ModelViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelViewer.prototype.render = function () {
        return React.createElement(StlViewer, { url: this.props.url, modelColor: "#808080", cameraX: 180 });
    };
    return ModelViewer;
}(React.Component);
function run(container, noiaClient) {
    return __awaiter(this, void 0, Promise, function () {
        var modelBytes, modelType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.info("Models example.");
                    container.className = "models-example";
                    container.innerHTML = "<div class=\"loader\" />";
                    return [4 /*yield*/, noiaClient.download({
                        // 64mb bust model of Gutenberg
                        // src: "ipfs:QmZzRF2DwNi2RqFiZRZqfP7UAXyxte4LLfsqbQ1aQ15hh4"
                        src: "ipfs:QmdHFsNXhMtWzBEH8SeEHhdLYWw4UZjUWPqdmDsccG4LbG"
                    })];
                case 1:
                    modelBytes = _a.sent();
                    console.info("Model downloaded (" + modelBytes.length + " bytes)");
                    modelType = "application/sla";
                    ReactDOM.render(React.createElement(ModelViewer, { url: "data:" + modelType + ";base64," + base64_1.bytesToBase64(modelBytes) }), container);
                    return [2 /*return*/];
            }
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


var content = __webpack_require__(/*! !../../../node_modules/postcss-loader/lib!../../../node_modules/sass-loader/lib/loader.js!./video.scss */ "./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/examples/video/video.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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
    var _ = { label: 0, sent: function () {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
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
                case 0:case 1:
                    t = op;break;
                case 4:
                    _.label++;return { value: op[1], done: false };
                case 5:
                    _.label++;y = op[1];op = [0];continue;
                case 7:
                    op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];t = op;break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];_.ops.push(op);break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./video.scss */ "./src/examples/video/video.scss");
var base64_1 = __webpack_require__(/*! ../../base64 */ "./src/base64.ts");
function run(container, noiaClient) {
    return __awaiter(this, void 0, Promise, function () {
        var videoBytes, videoType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.info("Video example.");
                    container.className = "video-example";
                    container.innerHTML = "<div class=\"loader\" />";
                    return [4 /*yield*/, noiaClient.download({
                        src: "ipfs:QmeynYjeMnWVXs4APAfr1GNRqUteAz3ABxYfBYGdstNvVB"
                    })];
                case 1:
                    videoBytes = _a.sent();
                    console.info("Video downloaded (" + videoBytes.length + " bytes)");
                    videoType = "video/mp4";
                    container.innerHTML = "\n<video controls>\n    <source type=\"video/mp4\" src=\"data:" + videoType + ";base64," + base64_1.bytesToBase64(videoBytes) + "\">\n</video>";
                    return [2 /*return*/];
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


Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./assets/reset.scss */ "./src/assets/reset.scss");
__webpack_require__(/*! ./assets/main.scss */ "./src/assets/main.scss");
__webpack_require__(/*! ./assets/loader.scss */ "./src/assets/loader.scss");
__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/@noia-network/sdk/dist/vendors~main.js");
var sdk_1 = __webpack_require__(/*! @noia-network/sdk */ "./node_modules/@noia-network/sdk/dist/main.js");
var Worker = __webpack_require__(/*! worker-loader!@noia-network/sdk/worker */ "./node_modules/worker-loader/dist/cjs.js!./node_modules/@noia-network/sdk/worker.js");
var ImageExample = __webpack_require__(/*! ./examples/image/image */ "./src/examples/image/image.ts");
var VideoExample = __webpack_require__(/*! ./examples/video/video */ "./src/examples/video/video.ts");
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
var noiaClient = new sdk_1.NoiaClient(function () {
    return new Worker();
});
document.addEventListener("DOMContentLoaded", function () {
    ImageExample.run(createExampleContainer("image", "Image example"), noiaClient);
    VideoExample.run(createExampleContainer("video", "Video example"), noiaClient);
    ModelsExample.run(createExampleContainer("models", "Models example"), noiaClient);
});

/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8888 ./src/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Projects\noia\examples\node_modules\webpack-dev-server\client\index.js?http://0.0.0.0:8888 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8888");
module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2FkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2ltYWdlL2ltYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL21vZGVscy9tb2RlbHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvdmlkZW8vdmlkZW8uc2NzcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdCBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvbG9nJCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvYWRlci5zY3NzP2M4ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWluLnNjc3M/ZGJjYSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Jlc2V0LnNjc3M/YjFjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZTY0LnRzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy9pbWFnZS9pbWFnZS5zY3NzP2IwZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2ltYWdlL2ltYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy9tb2RlbHMvbW9kZWxzLnNjc3M/YmJlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvbW9kZWxzL21vZGVscy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL3ZpZGVvL3ZpZGVvLnNjc3M/OGZiYiIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvdmlkZW8vdmlkZW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYnl0ZXNUb0Jhc2U2NCIsImFycmF5QnVmZmVyIiwiYmFzZTY0IiwiZW5jb2RpbmdzIiwiYnl0ZXMiLCJVaW50OEFycmF5IiwiYnl0ZUxlbmd0aCIsImJ5dGVSZW1haW5kZXIiLCJtYWluTGVuZ3RoIiwiYSIsImIiLCJjIiwiZCIsImNodW5rIiwiaSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwicmVxdWlyZSIsImJhc2U2NF8xIiwicnVuIiwiY29udGFpbmVyIiwibm9pYUNsaWVudCIsImltYWdlQnl0ZXMiLCJpbWFnZVR5cGUiLCJfYSIsImNvbnNvbGUiLCJpbmZvIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiZG93bmxvYWQiLCJzcmMiLCJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJSZWFjdCIsIlJlYWN0RE9NIiwiU3RsVmlld2VyIiwiTW9kZWxWaWV3ZXIiLCJfc3VwZXIiLCJhcmd1bWVudHMiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwidXJsIiwicHJvcHMiLCJtb2RlbENvbG9yIiwiY2FtZXJhWCIsIkNvbXBvbmVudCIsIm1vZGVsQnl0ZXMiLCJtb2RlbFR5cGUiLCJ2aWRlb0J5dGVzIiwidmlkZW9UeXBlIiwic2RrXzEiLCJXb3JrZXIiLCJJbWFnZUV4YW1wbGUiLCJWaWRlb0V4YW1wbGUiLCJNb2RlbHNFeGFtcGxlIiwiY3JlYXRlRXhhbXBsZUNvbnRhaW5lciIsImNvbnRhaW5lcklkIiwidGl0bGUiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpdiIsImlkIiwiaW5uZXJEaXYiLCJhcHBlbmRDaGlsZCIsIk5vaWFDbGllbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJC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a0JBQTFCLEVBQThDLFlBQVk7QUFDdERkLGlCQUFhMUMsR0FBYixDQUFpQjZDLHVCQUF1QixPQUF2QixFQUFnQyxlQUFoQyxDQUFqQixFQUFtRTNDLFVBQW5FO0FBQ0F5QyxpQkFBYTNDLEdBQWIsQ0FBaUI2Qyx1QkFBdUIsT0FBdkIsRUFBZ0MsZUFBaEMsQ0FBakIsRUFBbUUzQyxVQUFuRTtBQUNBMEMsa0JBQWM1QyxHQUFkLENBQWtCNkMsdUJBQXVCLFFBQXZCLEVBQWlDLGdCQUFqQyxDQUFsQixFQUFzRTNDLFVBQXRFO0FBQ0gsQ0FKRCxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmxvYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1yZXZlYWwgMS40cyBzdGVwcygxLCBlbmQpIGluZmluaXRlLCBzcGlubmVyLXJvdGF0aW9uIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lci1yZXZlYWwgMS40cyBzdGVwcygxLCBlbmQpIGluZmluaXRlLCBzcGlubmVyLXJvdGF0aW9uIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMCAwIDAgNTAlKTtcXG4gICAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgwIDAgMCA1MCUpOyB9XFxuICAubG9hZGVyLmJpZyB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgd2lkdGg6IDY0cHg7IH1cXG4gIC5sb2FkZXI6OmJlZm9yZSwgLmxvYWRlcjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDAgNTAlIDAgMCk7XFxuICAgICAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgwIDUwJSAwIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1yb3RhdGlvbi1hIDEuNHMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lci1yb3RhdGlvbi1hIDEuNHMgbGluZWFyIGluZmluaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC41cyBlYXNlLW91dDsgfVxcbiAgLmxvYWRlcjo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzcGlubmVyLXJvdGF0aW9uLWI7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW5uZXItcm90YXRpb24tYjsgfVxcblxcbi8qKipcXHJcXG4gICAqIEFuaW1hdGlvbnNcXHJcXG4gICAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLXJvdGF0aW9uIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuQGtleWZyYW1lcyBzcGlubmVyLXJvdGF0aW9uIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYSB7XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYSB7XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1yb3RhdGlvbi1iIHtcXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYiB7XFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDU0MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItcmV2ZWFsIHtcXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApOyB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMCA1MCUgMCAwKTtcXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDAgNTAlIDAgMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgc3Bpbm5lci1yZXZlYWwge1xcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xcbiAgICAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCAwIDAgMCk7IH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwIDUwJSAwIDApO1xcbiAgICAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCA1MCUgMCAwKTsgfSB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cXFwiKTtcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMTkxYzg2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uZXhhbXBsZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgLmV4YW1wbGUtY29udGFpbmVyIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmltYWdlLWV4YW1wbGUgaW1nIHtcXG4gIG1heC13aWR0aDogNDAwcHg7IH1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaW1hZ2UtZXhhbXBsZSBpbWcge1xcbiAgbWF4LXdpZHRoOiA0MDBweDsgfVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi52aWRlby1leGFtcGxlIHZpZGVvIHtcXG4gIG1heC13aWR0aDogNDAwcHg7IH1cXG5cIiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbG9hZGVyLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9sb2FkZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9sb2FkZXIuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Jlc2V0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIEB0cy1pZ25vcmVcclxuLy8gdHNsaW50OmRpc2FibGVcclxuZnVuY3Rpb24gYnl0ZXNUb0Jhc2U2NChhcnJheUJ1ZmZlcikge1xyXG4gICAgdmFyIGJhc2U2NCA9IFwiXCI7XHJcbiAgICB2YXIgZW5jb2RpbmdzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XHJcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XHJcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IGJ5dGVzLmJ5dGVMZW5ndGg7XHJcbiAgICB2YXIgYnl0ZVJlbWFpbmRlciA9IGJ5dGVMZW5ndGggJSAzO1xyXG4gICAgdmFyIG1haW5MZW5ndGggPSBieXRlTGVuZ3RoIC0gYnl0ZVJlbWFpbmRlcjtcclxuICAgIHZhciBhLCBiLCBjLCBkO1xyXG4gICAgdmFyIGNodW5rO1xyXG4gICAgLy8gTWFpbiBsb29wIGRlYWxzIHdpdGggYnl0ZXMgaW4gY2h1bmtzIG9mIDNcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFpbkxlbmd0aDsgaSA9IGkgKyAzKSB7XHJcbiAgICAgICAgLy8gQ29tYmluZSB0aGUgdGhyZWUgYnl0ZXMgaW50byBhIHNpbmdsZSBpbnRlZ2VyXHJcbiAgICAgICAgY2h1bmsgPSAoYnl0ZXNbaV0gPDwgMTYpIHwgKGJ5dGVzW2kgKyAxXSA8PCA4KSB8IGJ5dGVzW2kgKyAyXTtcclxuICAgICAgICAvLyBVc2UgYml0bWFza3MgdG8gZXh0cmFjdCA2LWJpdCBzZWdtZW50cyBmcm9tIHRoZSB0cmlwbGV0XHJcbiAgICAgICAgYSA9IChjaHVuayAmIDE2NTE1MDcyKSA+PiAxODsgLy8gMTY1MTUwNzIgPSAoMl42IC0gMSkgPDwgMThcclxuICAgICAgICBiID0gKGNodW5rICYgMjU4MDQ4KSA+PiAxMjsgLy8gMjU4MDQ4ICAgPSAoMl42IC0gMSkgPDwgMTJcclxuICAgICAgICBjID0gKGNodW5rICYgNDAzMikgPj4gNjsgLy8gNDAzMiAgICAgPSAoMl42IC0gMSkgPDwgNlxyXG4gICAgICAgIGQgPSBjaHVuayAmIDYzOyAvLyA2MyAgICAgICA9IDJeNiAtIDFcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSByYXcgYmluYXJ5IHNlZ21lbnRzIHRvIHRoZSBhcHByb3ByaWF0ZSBBU0NJSSBlbmNvZGluZ1xyXG4gICAgICAgIGJhc2U2NCArPSBlbmNvZGluZ3NbYV0gKyBlbmNvZGluZ3NbYl0gKyBlbmNvZGluZ3NbY10gKyBlbmNvZGluZ3NbZF07XHJcbiAgICB9XHJcbiAgICAvLyBEZWFsIHdpdGggdGhlIHJlbWFpbmluZyBieXRlcyBhbmQgcGFkZGluZ1xyXG4gICAgaWYgKGJ5dGVSZW1haW5kZXIgPT0gMSkge1xyXG4gICAgICAgIGNodW5rID0gYnl0ZXNbbWFpbkxlbmd0aF07XHJcbiAgICAgICAgYSA9IChjaHVuayAmIDI1MikgPj4gMjsgLy8gMjUyID0gKDJeNiAtIDEpIDw8IDJcclxuICAgICAgICAvLyBTZXQgdGhlIDQgbGVhc3Qgc2lnbmlmaWNhbnQgYml0cyB0byB6ZXJvXHJcbiAgICAgICAgYiA9IChjaHVuayAmIDMpIDw8IDQ7IC8vIDMgICA9IDJeMiAtIDFcclxuICAgICAgICBiYXNlNjQgKz0gZW5jb2RpbmdzW2FdICsgZW5jb2RpbmdzW2JdICsgXCI9PVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYnl0ZVJlbWFpbmRlciA9PSAyKSB7XHJcbiAgICAgICAgY2h1bmsgPSAoYnl0ZXNbbWFpbkxlbmd0aF0gPDwgOCkgfCBieXRlc1ttYWluTGVuZ3RoICsgMV07XHJcbiAgICAgICAgYSA9IChjaHVuayAmIDY0NTEyKSA+PiAxMDsgLy8gNjQ1MTIgPSAoMl42IC0gMSkgPDwgMTBcclxuICAgICAgICBiID0gKGNodW5rICYgMTAwOCkgPj4gNDsgLy8gMTAwOCAgPSAoMl42IC0gMSkgPDwgNFxyXG4gICAgICAgIC8vIFNldCB0aGUgMiBsZWFzdCBzaWduaWZpY2FudCBiaXRzIHRvIHplcm9cclxuICAgICAgICBjID0gKGNodW5rICYgMTUpIDw8IDI7IC8vIDE1ICAgID0gMl40IC0gMVxyXG4gICAgICAgIGJhc2U2NCArPSBlbmNvZGluZ3NbYV0gKyBlbmNvZGluZ3NbYl0gKyBlbmNvZGluZ3NbY10gKyBcIj1cIjtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlNjQ7XHJcbn1cclxuZXhwb3J0cy5ieXRlc1RvQmFzZTY0ID0gYnl0ZXNUb0Jhc2U2NDtcclxuLy8gdHNsaW50OmVuYWJsZVxyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ltYWdlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbWFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ltYWdlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCJAbm9pYS1uZXR3b3JrL3Nkay9kaXN0L3ZlbmRvcnN+bWFpblwiKTtcclxucmVxdWlyZShcIi4vaW1hZ2Uuc2Nzc1wiKTtcclxudmFyIGJhc2U2NF8xID0gcmVxdWlyZShcIi4uLy4uL2Jhc2U2NFwiKTtcclxuZnVuY3Rpb24gcnVuKGNvbnRhaW5lciwgbm9pYUNsaWVudCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW1hZ2VCeXRlcywgaW1hZ2VUeXBlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIkltYWdlIGV4YW1wbGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImltYWdlLWV4YW1wbGVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiIC8+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbm9pYUNsaWVudC5kb3dubG9hZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaXBmczpRbWVNSEdLWTNXV1R0NDFFSzVzbnRRVnVQWThXY3E3UjQ3S0VFNGptNG5OUVR1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlQnl0ZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiSW1hZ2UgZG93bmxvYWRlZCAoXCIgKyBpbWFnZUJ5dGVzLmxlbmd0aCArIFwiIGJ5dGVzKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVR5cGUgPSBcImltYWdlL2pwZWdcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz1cXFwiZGF0YTpcIiArIGltYWdlVHlwZSArIFwiO2Jhc2U2NCxcIiArIGJhc2U2NF8xLmJ5dGVzVG9CYXNlNjQoaW1hZ2VCeXRlcykgKyBcIlxcXCIgLz5cIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucnVuID0gcnVuO1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21vZGVscy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbW9kZWxzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbW9kZWxzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XHJcbnZhciBTdGxWaWV3ZXIgPSByZXF1aXJlKFwic3RsLXZpZXdlclwiKTtcclxudmFyIGJhc2U2NF8xID0gcmVxdWlyZShcIi4uLy4uL2Jhc2U2NFwiKTtcclxucmVxdWlyZShcIkBub2lhLW5ldHdvcmsvc2RrL2Rpc3QvdmVuZG9yc35tYWluXCIpO1xyXG5yZXF1aXJlKFwiLi9tb2RlbHMuc2Nzc1wiKTtcclxudmFyIE1vZGVsVmlld2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1vZGVsVmlld2VyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTW9kZWxWaWV3ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgTW9kZWxWaWV3ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdGxWaWV3ZXIsIHsgdXJsOiB0aGlzLnByb3BzLnVybCwgbW9kZWxDb2xvcjogXCIjODA4MDgwXCIsIGNhbWVyYVg6IDE4MCB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTW9kZWxWaWV3ZXI7XHJcbn0oUmVhY3QuQ29tcG9uZW50KSk7XHJcbmZ1bmN0aW9uIHJ1bihjb250YWluZXIsIG5vaWFDbGllbnQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsQnl0ZXMsIG1vZGVsVHlwZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJNb2RlbHMgZXhhbXBsZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwibW9kZWxzLWV4YW1wbGVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiIC8+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbm9pYUNsaWVudC5kb3dubG9hZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA2NG1iIGJ1c3QgbW9kZWwgb2YgR3V0ZW5iZXJnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzcmM6IFwiaXBmczpRbVp6UkYyRHdOaTJScUZpWlJacWZQN1VBWHl4dGU0TExmc3FiUTFhUTE1aGg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJpcGZzOlFtZEhGc05YaE10V3pCRUg4U2VFSGhkTFlXdzRVWmpVV1BxZG1Ec2NjRzRMYkdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxCeXRlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJNb2RlbCBkb3dubG9hZGVkIChcIiArIG1vZGVsQnl0ZXMubGVuZ3RoICsgXCIgYnl0ZXMpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVHlwZSA9IFwiYXBwbGljYXRpb24vc2xhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kZWxWaWV3ZXIsIHsgdXJsOiBcImRhdGE6XCIgKyBtb2RlbFR5cGUgKyBcIjtiYXNlNjQsXCIgKyBiYXNlNjRfMS5ieXRlc1RvQmFzZTY0KG1vZGVsQnl0ZXMpIH0pLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5ydW4gPSBydW47XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vdmlkZW8uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3ZpZGVvLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vdmlkZW8uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vdmlkZW8uc2Nzc1wiKTtcclxudmFyIGJhc2U2NF8xID0gcmVxdWlyZShcIi4uLy4uL2Jhc2U2NFwiKTtcclxuZnVuY3Rpb24gcnVuKGNvbnRhaW5lciwgbm9pYUNsaWVudCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmlkZW9CeXRlcywgdmlkZW9UeXBlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlZpZGVvIGV4YW1wbGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInZpZGVvLWV4YW1wbGVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiIC8+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbm9pYUNsaWVudC5kb3dubG9hZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaXBmczpRbWV5bllqZU1uV1ZYczRBUEFmcjFHTlJxVXRlQXozQUJ4WWZCWUdkc3ROdlZCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQnl0ZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVmlkZW8gZG93bmxvYWRlZCAoXCIgKyB2aWRlb0J5dGVzLmxlbmd0aCArIFwiIGJ5dGVzKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb1R5cGUgPSBcInZpZGVvL21wNFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlxcbjx2aWRlbyBjb250cm9scz5cXG4gICAgPHNvdXJjZSB0eXBlPVxcXCJ2aWRlby9tcDRcXFwiIHNyYz1cXFwiZGF0YTpcIiArIHZpZGVvVHlwZSArIFwiO2Jhc2U2NCxcIiArIGJhc2U2NF8xLmJ5dGVzVG9CYXNlNjQodmlkZW9CeXRlcykgKyBcIlxcXCI+XFxuPC92aWRlbz5cIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucnVuID0gcnVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9hc3NldHMvcmVzZXQuc2Nzc1wiKTtcclxucmVxdWlyZShcIi4vYXNzZXRzL21haW4uc2Nzc1wiKTtcclxucmVxdWlyZShcIi4vYXNzZXRzL2xvYWRlci5zY3NzXCIpO1xyXG5yZXF1aXJlKFwiQG5vaWEtbmV0d29yay9zZGsvZGlzdC92ZW5kb3Jzfm1haW5cIik7XHJcbnZhciBzZGtfMSA9IHJlcXVpcmUoXCJAbm9pYS1uZXR3b3JrL3Nka1wiKTtcclxudmFyIFdvcmtlciA9IHJlcXVpcmUoXCJ3b3JrZXItbG9hZGVyIUBub2lhLW5ldHdvcmsvc2RrL3dvcmtlclwiKTtcclxudmFyIEltYWdlRXhhbXBsZSA9IHJlcXVpcmUoXCIuL2V4YW1wbGVzL2ltYWdlL2ltYWdlXCIpO1xyXG52YXIgVmlkZW9FeGFtcGxlID0gcmVxdWlyZShcIi4vZXhhbXBsZXMvdmlkZW8vdmlkZW9cIik7XHJcbnZhciBNb2RlbHNFeGFtcGxlID0gcmVxdWlyZShcIi4vZXhhbXBsZXMvbW9kZWxzL21vZGVsc1wiKTtcclxuLyoqXHJcbiAqIEp1c3QgYSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byBub3QgZHVwbGljYXRlIHRoaXMgY29kZSBhbGwgb3ZlciBhZ2FpblxyXG4gKiBAcGFyYW0gY29udGFpbmVySWQgSWQgZm9yIGNvbnRhaW5lclxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRXhhbXBsZUNvbnRhaW5lcihjb250YWluZXJJZCwgdGl0bGUpIHtcclxuICAgIHZhciByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuaWQgPSBjb250YWluZXJJZDtcclxuICAgIGRpdi5jbGFzc05hbWUgPSBcImV4YW1wbGUtY29udGFpbmVyXCI7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gXCI8aDI+XCIgKyB0aXRsZSArIFwiPC9oMj5cIjtcclxuICAgIHZhciBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgcmV0dXJuIGlubmVyRGl2O1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlRXhhbXBsZUNvbnRhaW5lciA9IGNyZWF0ZUV4YW1wbGVDb250YWluZXI7XHJcbnZhciBub2lhQ2xpZW50ID0gbmV3IHNka18xLk5vaWFDbGllbnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFdvcmtlcigpOyB9KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgSW1hZ2VFeGFtcGxlLnJ1bihjcmVhdGVFeGFtcGxlQ29udGFpbmVyKFwiaW1hZ2VcIiwgXCJJbWFnZSBleGFtcGxlXCIpLCBub2lhQ2xpZW50KTtcclxuICAgIFZpZGVvRXhhbXBsZS5ydW4oY3JlYXRlRXhhbXBsZUNvbnRhaW5lcihcInZpZGVvXCIsIFwiVmlkZW8gZXhhbXBsZVwiKSwgbm9pYUNsaWVudCk7XHJcbiAgICBNb2RlbHNFeGFtcGxlLnJ1bihjcmVhdGVFeGFtcGxlQ29udGFpbmVyKFwibW9kZWxzXCIsIFwiTW9kZWxzIGV4YW1wbGVcIiksIG5vaWFDbGllbnQpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==