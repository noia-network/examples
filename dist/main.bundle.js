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

module.exports = ".image-example {\n  max-width: 400px; }\n"

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

module.exports = ".video-example {\n  max-width: 400px; }\n"

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

/***/ "./src/examples/image/image-react.tsx":
/*!********************************************!*\
  !*** ./src/examples/image/image-react.tsx ***!
  \********************************************/
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
var sdk_1 = __webpack_require__(/*! @noia-network/sdk */ "./node_modules/@noia-network/sdk/dist/main.js");
var Worker = __webpack_require__(/*! worker-loader!@noia-network/sdk/worker */ "./node_modules/worker-loader/dist/cjs.js!./node_modules/@noia-network/sdk/worker.js");
var sdk_react_1 = __webpack_require__(/*! @noia-network/sdk-react */ "./node_modules/@noia-network/sdk-react/dist/index.js");
__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/@noia-network/sdk/dist/vendors~main.js");
__webpack_require__(/*! ./image.scss */ "./src/examples/image/image.scss");
var noiaClient = new sdk_1.NoiaClient(function () {
    return new Worker();
});
sdk_1.NoiaClientContainer.initialize(noiaClient);
var ExampleView = /** @class */function (_super) {
    __extends(ExampleView, _super);
    function ExampleView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleView.prototype.render = function () {
        return React.createElement("div", { className: "image-example" }, React.createElement(sdk_react_1.Image, { src: "https://noia.network/samples/image.jpg", loaderComponent: React.createElement("div", { className: "loader" }) }));
    };
    return ExampleView;
}(React.Component);
exports.ExampleView = ExampleView;
function run(container) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            console.info("Image with React example.");
            ReactDOM.render(React.createElement(ExampleView, { noiaClient: noiaClient }), container);
            return [2 /*return*/];
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
                        src: "https://noia.network/samples/image.jpg"
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
                        src: "https://noia.network/samples/model.bin"
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

/***/ "./src/examples/video/video-react.tsx":
/*!********************************************!*\
  !*** ./src/examples/video/video-react.tsx ***!
  \********************************************/
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
var sdk_1 = __webpack_require__(/*! @noia-network/sdk */ "./node_modules/@noia-network/sdk/dist/main.js");
var Worker = __webpack_require__(/*! worker-loader!@noia-network/sdk/worker */ "./node_modules/worker-loader/dist/cjs.js!./node_modules/@noia-network/sdk/worker.js");
var sdk_react_1 = __webpack_require__(/*! @noia-network/sdk-react */ "./node_modules/@noia-network/sdk-react/dist/index.js");
__webpack_require__(/*! @noia-network/sdk/dist/vendors~main */ "./node_modules/@noia-network/sdk/dist/vendors~main.js");
__webpack_require__(/*! ./video.scss */ "./src/examples/video/video.scss");
var noiaClient = new sdk_1.NoiaClient(function () {
    return new Worker();
});
sdk_1.NoiaClientContainer.initialize(noiaClient);
var ExampleView = /** @class */function (_super) {
    __extends(ExampleView, _super);
    function ExampleView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleView.prototype.render = function () {
        return React.createElement("div", { className: "video-example" }, React.createElement(sdk_react_1.Video, { controls: true, loop: true, src: "https://noia.network/samples/video.mp4", mimeType: "video/mp4", loaderComponent: React.createElement("div", { className: "loader" }) }));
    };
    return ExampleView;
}(React.Component);
exports.ExampleView = ExampleView;
function run(container) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            console.info("Video with React example.");
            ReactDOM.render(React.createElement(ExampleView, { noiaClient: noiaClient }), container);
            return [2 /*return*/];
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
                        src: "https://noia.network/samples/video.mp4"
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
sdk_1.NoiaClientContainer.initialize(new sdk_1.NoiaClient(function () {
    return new Worker();
}));
document.addEventListener("DOMContentLoaded", function () {
    ImageExample.run(createExampleContainer("image", "Image example"), sdk_1.NoiaClientContainer.getClient());
    ImageReactExample.run(createExampleContainer("image", "React Image component example"));
    VideoExample.run(createExampleContainer("video", "Video example"), sdk_1.NoiaClientContainer.getClient());
    VideoReactExample.run(createExampleContainer("video", "React Video component example"));
    ModelsExample.run(createExampleContainer("models", "Models example"), sdk_1.NoiaClientContainer.getClient());
});

/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8888 ./src/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/danielius/noia/examples/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8888 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8888");
module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2FkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2ltYWdlL2ltYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL21vZGVscy9tb2RlbHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvdmlkZW8vdmlkZW8uc2NzcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdCBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvbG9nJCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvYWRlci5zY3NzP2M4ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWluLnNjc3M/ZGJjYSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Jlc2V0LnNjc3M/YjFjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZTY0LnRzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy9pbWFnZS9pbWFnZS1yZWFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2ltYWdlL2ltYWdlLnNjc3M/YjBmNyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvaW1hZ2UvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL21vZGVscy9tb2RlbHMuc2Nzcz9iYmVlIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy9tb2RlbHMvbW9kZWxzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvdmlkZW8vdmlkZW8tcmVhY3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy92aWRlby92aWRlby5zY3NzPzhmYmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL3ZpZGVvL3ZpZGVvLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImJ5dGVzVG9CYXNlNjQiLCJhcnJheUJ1ZmZlciIsImJhc2U2NCIsImVuY29kaW5ncyIsImJ5dGVzIiwiVWludDhBcnJheSIsImJ5dGVMZW5ndGgiLCJieXRlUmVtYWluZGVyIiwibWFpbkxlbmd0aCIsImEiLCJiIiwiYyIsImQiLCJjaHVuayIsImkiLCJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm4iLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJjYWxsIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwic2RrXzEiLCJXb3JrZXIiLCJzZGtfcmVhY3RfMSIsIm5vaWFDbGllbnQiLCJOb2lhQ2xpZW50IiwiTm9pYUNsaWVudENvbnRhaW5lciIsImluaXRpYWxpemUiLCJFeGFtcGxlVmlldyIsIl9zdXBlciIsImFyZ3VtZW50cyIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImxvYWRlckNvbXBvbmVudCIsIkNvbXBvbmVudCIsInJ1biIsImNvbnRhaW5lciIsIl9hIiwiY29uc29sZSIsImluZm8iLCJiYXNlNjRfMSIsImltYWdlQnl0ZXMiLCJpbWFnZVR5cGUiLCJpbm5lckhUTUwiLCJkb3dubG9hZCIsIlN0bFZpZXdlciIsIk1vZGVsVmlld2VyIiwidXJsIiwicHJvcHMiLCJtb2RlbENvbG9yIiwiY2FtZXJhWCIsIm1vZGVsQnl0ZXMiLCJtb2RlbFR5cGUiLCJWaWRlbyIsImNvbnRyb2xzIiwibG9vcCIsIm1pbWVUeXBlIiwidmlkZW9CeXRlcyIsInZpZGVvVHlwZSIsIkltYWdlRXhhbXBsZSIsIkltYWdlUmVhY3RFeGFtcGxlIiwiVmlkZW9FeGFtcGxlIiwiVmlkZW9SZWFjdEV4YW1wbGUiLCJNb2RlbHNFeGFtcGxlIiwiY3JlYXRlRXhhbXBsZUNvbnRhaW5lciIsImNvbnRhaW5lcklkIiwidGl0bGUiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpdiIsImlkIiwiaW5uZXJEaXYiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRDbGllbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QUFtRTlDLE1BQU1LLG1CQUFOLENBQTBCb0QsU0FBMUIsRUFBbkU7QUFDQWIsc0JBQWtCM0IsR0FBbEIsQ0FBc0I2Qix1QkFBdUIsT0FBdkIsRUFBZ0MsK0JBQWhDLENBQXRCO0FBQ0FELGtCQUFjNUIsR0FBZCxDQUFrQjZCLHVCQUF1QixRQUF2QixFQUFpQyxnQkFBakMsQ0FBbEIsRUFBc0U5QyxNQUFNSyxtQkFBTixDQUEwQm9ELFNBQTFCLEVBQXRFO0FBQ0gsQ0FORCxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmxvYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1yZXZlYWwgMS40cyBzdGVwcygxLCBlbmQpIGluZmluaXRlLCBzcGlubmVyLXJvdGF0aW9uIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lci1yZXZlYWwgMS40cyBzdGVwcygxLCBlbmQpIGluZmluaXRlLCBzcGlubmVyLXJvdGF0aW9uIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMCAwIDAgNTAlKTtcXG4gICAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgwIDAgMCA1MCUpOyB9XFxuICAubG9hZGVyLmJpZyB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgd2lkdGg6IDY0cHg7IH1cXG4gIC5sb2FkZXI6OmJlZm9yZSwgLmxvYWRlcjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDAgNTAlIDAgMCk7XFxuICAgICAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgwIDUwJSAwIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1yb3RhdGlvbi1hIDEuNHMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lci1yb3RhdGlvbi1hIDEuNHMgbGluZWFyIGluZmluaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC41cyBlYXNlLW91dDsgfVxcbiAgLmxvYWRlcjo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzcGlubmVyLXJvdGF0aW9uLWI7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW5uZXItcm90YXRpb24tYjsgfVxcblxcbi8qKipcXHJcXG4gICAqIEFuaW1hdGlvbnNcXHJcXG4gICAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLXJvdGF0aW9uIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuQGtleWZyYW1lcyBzcGlubmVyLXJvdGF0aW9uIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYSB7XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYSB7XFxuICA0MCUsXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1yb3RhdGlvbi1iIHtcXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRpb24tYiB7XFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDU0MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItcmV2ZWFsIHtcXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApOyB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMCA1MCUgMCAwKTtcXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDAgNTAlIDAgMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgc3Bpbm5lci1yZXZlYWwge1xcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xcbiAgICAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCAwIDAgMCk7IH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwIDUwJSAwIDApO1xcbiAgICAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCA1MCUgMCAwKTsgfSB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cXFwiKTtcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMTkxYzg2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uZXhhbXBsZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgLmV4YW1wbGUtY29udGFpbmVyIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmltYWdlLWV4YW1wbGUge1xcbiAgbWF4LXdpZHRoOiA0MDBweDsgfVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5pbWFnZS1leGFtcGxlIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwMHB4OyB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnZpZGVvLWV4YW1wbGUge1xcbiAgbWF4LXdpZHRoOiA0MDBweDsgfVxcblwiIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9sb2FkZXIuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xvYWRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xvYWRlci5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNldC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzZXQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNldC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBAdHMtaWdub3JlXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuZnVuY3Rpb24gYnl0ZXNUb0Jhc2U2NChhcnJheUJ1ZmZlcikge1xuICAgIHZhciBiYXNlNjQgPSBcIlwiO1xuICAgIHZhciBlbmNvZGluZ3MgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgdmFyIGJ5dGVMZW5ndGggPSBieXRlcy5ieXRlTGVuZ3RoO1xuICAgIHZhciBieXRlUmVtYWluZGVyID0gYnl0ZUxlbmd0aCAlIDM7XG4gICAgdmFyIG1haW5MZW5ndGggPSBieXRlTGVuZ3RoIC0gYnl0ZVJlbWFpbmRlcjtcbiAgICB2YXIgYSwgYiwgYywgZDtcbiAgICB2YXIgY2h1bms7XG4gICAgLy8gTWFpbiBsb29wIGRlYWxzIHdpdGggYnl0ZXMgaW4gY2h1bmtzIG9mIDNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1haW5MZW5ndGg7IGkgPSBpICsgMykge1xuICAgICAgICAvLyBDb21iaW5lIHRoZSB0aHJlZSBieXRlcyBpbnRvIGEgc2luZ2xlIGludGVnZXJcbiAgICAgICAgY2h1bmsgPSAoYnl0ZXNbaV0gPDwgMTYpIHwgKGJ5dGVzW2kgKyAxXSA8PCA4KSB8IGJ5dGVzW2kgKyAyXTtcbiAgICAgICAgLy8gVXNlIGJpdG1hc2tzIHRvIGV4dHJhY3QgNi1iaXQgc2VnbWVudHMgZnJvbSB0aGUgdHJpcGxldFxuICAgICAgICBhID0gKGNodW5rICYgMTY1MTUwNzIpID4+IDE4OyAvLyAxNjUxNTA3MiA9ICgyXjYgLSAxKSA8PCAxOFxuICAgICAgICBiID0gKGNodW5rICYgMjU4MDQ4KSA+PiAxMjsgLy8gMjU4MDQ4ICAgPSAoMl42IC0gMSkgPDwgMTJcbiAgICAgICAgYyA9IChjaHVuayAmIDQwMzIpID4+IDY7IC8vIDQwMzIgICAgID0gKDJeNiAtIDEpIDw8IDZcbiAgICAgICAgZCA9IGNodW5rICYgNjM7IC8vIDYzICAgICAgID0gMl42IC0gMVxuICAgICAgICAvLyBDb252ZXJ0IHRoZSByYXcgYmluYXJ5IHNlZ21lbnRzIHRvIHRoZSBhcHByb3ByaWF0ZSBBU0NJSSBlbmNvZGluZ1xuICAgICAgICBiYXNlNjQgKz0gZW5jb2RpbmdzW2FdICsgZW5jb2RpbmdzW2JdICsgZW5jb2RpbmdzW2NdICsgZW5jb2RpbmdzW2RdO1xuICAgIH1cbiAgICAvLyBEZWFsIHdpdGggdGhlIHJlbWFpbmluZyBieXRlcyBhbmQgcGFkZGluZ1xuICAgIGlmIChieXRlUmVtYWluZGVyID09IDEpIHtcbiAgICAgICAgY2h1bmsgPSBieXRlc1ttYWluTGVuZ3RoXTtcbiAgICAgICAgYSA9IChjaHVuayAmIDI1MikgPj4gMjsgLy8gMjUyID0gKDJeNiAtIDEpIDw8IDJcbiAgICAgICAgLy8gU2V0IHRoZSA0IGxlYXN0IHNpZ25pZmljYW50IGJpdHMgdG8gemVyb1xuICAgICAgICBiID0gKGNodW5rICYgMykgPDwgNDsgLy8gMyAgID0gMl4yIC0gMVxuICAgICAgICBiYXNlNjQgKz0gZW5jb2RpbmdzW2FdICsgZW5jb2RpbmdzW2JdICsgXCI9PVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChieXRlUmVtYWluZGVyID09IDIpIHtcbiAgICAgICAgY2h1bmsgPSAoYnl0ZXNbbWFpbkxlbmd0aF0gPDwgOCkgfCBieXRlc1ttYWluTGVuZ3RoICsgMV07XG4gICAgICAgIGEgPSAoY2h1bmsgJiA2NDUxMikgPj4gMTA7IC8vIDY0NTEyID0gKDJeNiAtIDEpIDw8IDEwXG4gICAgICAgIGIgPSAoY2h1bmsgJiAxMDA4KSA+PiA0OyAvLyAxMDA4ICA9ICgyXjYgLSAxKSA8PCA0XG4gICAgICAgIC8vIFNldCB0aGUgMiBsZWFzdCBzaWduaWZpY2FudCBiaXRzIHRvIHplcm9cbiAgICAgICAgYyA9IChjaHVuayAmIDE1KSA8PCAyOyAvLyAxNSAgICA9IDJeNCAtIDFcbiAgICAgICAgYmFzZTY0ICs9IGVuY29kaW5nc1thXSArIGVuY29kaW5nc1tiXSArIGVuY29kaW5nc1tjXSArIFwiPVwiO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTY0O1xufVxuZXhwb3J0cy5ieXRlc1RvQmFzZTY0ID0gYnl0ZXNUb0Jhc2U2NDtcbi8vIHRzbGludDplbmFibGVcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcbnZhciBzZGtfMSA9IHJlcXVpcmUoXCJAbm9pYS1uZXR3b3JrL3Nka1wiKTtcbnZhciBXb3JrZXIgPSByZXF1aXJlKFwid29ya2VyLWxvYWRlciFAbm9pYS1uZXR3b3JrL3Nkay93b3JrZXJcIik7XG52YXIgc2RrX3JlYWN0XzEgPSByZXF1aXJlKFwiQG5vaWEtbmV0d29yay9zZGstcmVhY3RcIik7XG5yZXF1aXJlKFwiQG5vaWEtbmV0d29yay9zZGsvZGlzdC92ZW5kb3Jzfm1haW5cIik7XG5yZXF1aXJlKFwiLi9pbWFnZS5zY3NzXCIpO1xudmFyIG5vaWFDbGllbnQgPSBuZXcgc2RrXzEuTm9pYUNsaWVudChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgV29ya2VyKCk7IH0pO1xuc2RrXzEuTm9pYUNsaWVudENvbnRhaW5lci5pbml0aWFsaXplKG5vaWFDbGllbnQpO1xudmFyIEV4YW1wbGVWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFeGFtcGxlVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFeGFtcGxlVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBFeGFtcGxlVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW1hZ2UtZXhhbXBsZVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KHNka19yZWFjdF8xLkltYWdlLCB7IHNyYzogXCJodHRwczovL25vaWEubmV0d29yay9zYW1wbGVzL2ltYWdlLmpwZ1wiLCBsb2FkZXJDb21wb25lbnQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibG9hZGVyXCIgfSkgfSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBFeGFtcGxlVmlldztcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnRzLkV4YW1wbGVWaWV3ID0gRXhhbXBsZVZpZXc7XG5mdW5jdGlvbiBydW4oY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiSW1hZ2Ugd2l0aCBSZWFjdCBleGFtcGxlLlwiKTtcbiAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEV4YW1wbGVWaWV3LCB7IG5vaWFDbGllbnQ6IG5vaWFDbGllbnQgfSksIGNvbnRhaW5lcik7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5ydW4gPSBydW47XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ltYWdlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbWFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ltYWdlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiQG5vaWEtbmV0d29yay9zZGsvZGlzdC92ZW5kb3Jzfm1haW5cIik7XG5yZXF1aXJlKFwiLi9pbWFnZS5zY3NzXCIpO1xudmFyIGJhc2U2NF8xID0gcmVxdWlyZShcIi4uLy4uL2Jhc2U2NFwiKTtcbmZ1bmN0aW9uIHJ1bihjb250YWluZXIsIG5vaWFDbGllbnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW1hZ2VCeXRlcywgaW1hZ2VUeXBlO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJJbWFnZSBleGFtcGxlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW1hZ2UtZXhhbXBsZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiIC8+XCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5vaWFDbGllbnQuZG93bmxvYWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL25vaWEubmV0d29yay9zYW1wbGVzL2ltYWdlLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpbWFnZUJ5dGVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJJbWFnZSBkb3dubG9hZGVkIChcIiArIGltYWdlQnl0ZXMubGVuZ3RoICsgXCIgYnl0ZXMpXCIpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVR5cGUgPSBcImltYWdlL2pwZWdcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGltZyBzcmM9XFxcImRhdGE6XCIgKyBpbWFnZVR5cGUgKyBcIjtiYXNlNjQsXCIgKyBiYXNlNjRfMS5ieXRlc1RvQmFzZTY0KGltYWdlQnl0ZXMpICsgXCJcXFwiIC8+XCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJ1biA9IHJ1bjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbW9kZWxzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tb2RlbHMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tb2RlbHMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcbnZhciBTdGxWaWV3ZXIgPSByZXF1aXJlKFwic3RsLXZpZXdlclwiKTtcbnZhciBiYXNlNjRfMSA9IHJlcXVpcmUoXCIuLi8uLi9iYXNlNjRcIik7XG5yZXF1aXJlKFwiQG5vaWEtbmV0d29yay9zZGsvZGlzdC92ZW5kb3Jzfm1haW5cIik7XG5yZXF1aXJlKFwiLi9tb2RlbHMuc2Nzc1wiKTtcbnZhciBNb2RlbFZpZXdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTW9kZWxWaWV3ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTW9kZWxWaWV3ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTW9kZWxWaWV3ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RsVmlld2VyLCB7IHVybDogdGhpcy5wcm9wcy51cmwsIG1vZGVsQ29sb3I6IFwiIzgwODA4MFwiLCBjYW1lcmFYOiAxODAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTW9kZWxWaWV3ZXI7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZnVuY3Rpb24gcnVuKGNvbnRhaW5lciwgbm9pYUNsaWVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb2RlbEJ5dGVzLCBtb2RlbFR5cGU7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIk1vZGVscyBleGFtcGxlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwibW9kZWxzLWV4YW1wbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIiAvPlwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBub2lhQ2xpZW50LmRvd25sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA2NG1iIGJ1c3QgbW9kZWwgb2YgR3V0ZW5iZXJnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3JjOiBcImlwZnM6UW1aelJGMkR3TmkyUnFGaVpSWnFmUDdVQVh5eHRlNExMZnNxYlExYVExNWhoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vbm9pYS5uZXR3b3JrL3NhbXBsZXMvbW9kZWwuYmluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsQnl0ZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIk1vZGVsIGRvd25sb2FkZWQgKFwiICsgbW9kZWxCeXRlcy5sZW5ndGggKyBcIiBieXRlcylcIik7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVHlwZSA9IFwiYXBwbGljYXRpb24vc2xhXCI7XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGVsVmlld2VyLCB7IHVybDogXCJkYXRhOlwiICsgbW9kZWxUeXBlICsgXCI7YmFzZTY0LFwiICsgYmFzZTY0XzEuYnl0ZXNUb0Jhc2U2NChtb2RlbEJ5dGVzKSB9KSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucnVuID0gcnVuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xudmFyIHNka18xID0gcmVxdWlyZShcIkBub2lhLW5ldHdvcmsvc2RrXCIpO1xudmFyIFdvcmtlciA9IHJlcXVpcmUoXCJ3b3JrZXItbG9hZGVyIUBub2lhLW5ldHdvcmsvc2RrL3dvcmtlclwiKTtcbnZhciBzZGtfcmVhY3RfMSA9IHJlcXVpcmUoXCJAbm9pYS1uZXR3b3JrL3Nkay1yZWFjdFwiKTtcbnJlcXVpcmUoXCJAbm9pYS1uZXR3b3JrL3Nkay9kaXN0L3ZlbmRvcnN+bWFpblwiKTtcbnJlcXVpcmUoXCIuL3ZpZGVvLnNjc3NcIik7XG52YXIgbm9pYUNsaWVudCA9IG5ldyBzZGtfMS5Ob2lhQ2xpZW50KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBXb3JrZXIoKTsgfSk7XG5zZGtfMS5Ob2lhQ2xpZW50Q29udGFpbmVyLmluaXRpYWxpemUobm9pYUNsaWVudCk7XG52YXIgRXhhbXBsZVZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEV4YW1wbGVWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEV4YW1wbGVWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEV4YW1wbGVWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ2aWRlby1leGFtcGxlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoc2RrX3JlYWN0XzEuVmlkZW8sIHsgY29udHJvbHM6IHRydWUsIGxvb3A6IHRydWUsIHNyYzogXCJodHRwczovL25vaWEubmV0d29yay9zYW1wbGVzL3ZpZGVvLm1wNFwiLCBtaW1lVHlwZTogXCJ2aWRlby9tcDRcIiwgbG9hZGVyQ29tcG9uZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImxvYWRlclwiIH0pIH0pKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRXhhbXBsZVZpZXc7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZXhwb3J0cy5FeGFtcGxlVmlldyA9IEV4YW1wbGVWaWV3O1xuZnVuY3Rpb24gcnVuKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlZpZGVvIHdpdGggUmVhY3QgZXhhbXBsZS5cIik7XG4gICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChFeGFtcGxlVmlldywgeyBub2lhQ2xpZW50OiBub2lhQ2xpZW50IH0pLCBjb250YWluZXIpO1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucnVuID0gcnVuO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi92aWRlby5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vdmlkZW8uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi92aWRlby5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vdmlkZW8uc2Nzc1wiKTtcbnZhciBiYXNlNjRfMSA9IHJlcXVpcmUoXCIuLi8uLi9iYXNlNjRcIik7XG5mdW5jdGlvbiBydW4oY29udGFpbmVyLCBub2lhQ2xpZW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZpZGVvQnl0ZXMsIHZpZGVvVHlwZTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVmlkZW8gZXhhbXBsZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInZpZGVvLWV4YW1wbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIiAvPlwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBub2lhQ2xpZW50LmRvd25sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9ub2lhLm5ldHdvcmsvc2FtcGxlcy92aWRlby5tcDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9CeXRlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVmlkZW8gZG93bmxvYWRlZCAoXCIgKyB2aWRlb0J5dGVzLmxlbmd0aCArIFwiIGJ5dGVzKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9UeXBlID0gXCJ2aWRlby9tcDRcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXFxuPHZpZGVvIGNvbnRyb2xzPlxcbiAgICA8c291cmNlIHR5cGU9XFxcInZpZGVvL21wNFxcXCIgc3JjPVxcXCJkYXRhOlwiICsgdmlkZW9UeXBlICsgXCI7YmFzZTY0LFwiICsgYmFzZTY0XzEuYnl0ZXNUb0Jhc2U2NCh2aWRlb0J5dGVzKSArIFwiXFxcIj5cXG48L3ZpZGVvPlwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5ydW4gPSBydW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL2Fzc2V0cy9yZXNldC5zY3NzXCIpO1xucmVxdWlyZShcIi4vYXNzZXRzL21haW4uc2Nzc1wiKTtcbnJlcXVpcmUoXCIuL2Fzc2V0cy9sb2FkZXIuc2Nzc1wiKTtcbnJlcXVpcmUoXCJAbm9pYS1uZXR3b3JrL3Nkay9kaXN0L3ZlbmRvcnN+bWFpblwiKTtcbnZhciBzZGtfMSA9IHJlcXVpcmUoXCJAbm9pYS1uZXR3b3JrL3Nka1wiKTtcbnZhciBXb3JrZXIgPSByZXF1aXJlKFwid29ya2VyLWxvYWRlciFAbm9pYS1uZXR3b3JrL3Nkay93b3JrZXJcIik7XG52YXIgSW1hZ2VFeGFtcGxlID0gcmVxdWlyZShcIi4vZXhhbXBsZXMvaW1hZ2UvaW1hZ2VcIik7XG52YXIgSW1hZ2VSZWFjdEV4YW1wbGUgPSByZXF1aXJlKFwiLi9leGFtcGxlcy9pbWFnZS9pbWFnZS1yZWFjdFwiKTtcbnZhciBWaWRlb0V4YW1wbGUgPSByZXF1aXJlKFwiLi9leGFtcGxlcy92aWRlby92aWRlb1wiKTtcbnZhciBWaWRlb1JlYWN0RXhhbXBsZSA9IHJlcXVpcmUoXCIuL2V4YW1wbGVzL3ZpZGVvL3ZpZGVvLXJlYWN0XCIpO1xudmFyIE1vZGVsc0V4YW1wbGUgPSByZXF1aXJlKFwiLi9leGFtcGxlcy9tb2RlbHMvbW9kZWxzXCIpO1xuLyoqXG4gKiBKdXN0IGEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gbm90IGR1cGxpY2F0ZSB0aGlzIGNvZGUgYWxsIG92ZXIgYWdhaW5cbiAqIEBwYXJhbSBjb250YWluZXJJZCBJZCBmb3IgY29udGFpbmVyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV4YW1wbGVDb250YWluZXIoY29udGFpbmVySWQsIHRpdGxlKSB7XG4gICAgdmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gY29udGFpbmVySWQ7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwiZXhhbXBsZS1jb250YWluZXJcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gXCI8aDI+XCIgKyB0aXRsZSArIFwiPC9oMj5cIjtcbiAgICB2YXIgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbm5lckRpdik7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJldHVybiBpbm5lckRpdjtcbn1cbmV4cG9ydHMuY3JlYXRlRXhhbXBsZUNvbnRhaW5lciA9IGNyZWF0ZUV4YW1wbGVDb250YWluZXI7XG5zZGtfMS5Ob2lhQ2xpZW50Q29udGFpbmVyLmluaXRpYWxpemUobmV3IHNka18xLk5vaWFDbGllbnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFdvcmtlcigpOyB9KSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgSW1hZ2VFeGFtcGxlLnJ1bihjcmVhdGVFeGFtcGxlQ29udGFpbmVyKFwiaW1hZ2VcIiwgXCJJbWFnZSBleGFtcGxlXCIpLCBzZGtfMS5Ob2lhQ2xpZW50Q29udGFpbmVyLmdldENsaWVudCgpKTtcbiAgICBJbWFnZVJlYWN0RXhhbXBsZS5ydW4oY3JlYXRlRXhhbXBsZUNvbnRhaW5lcihcImltYWdlXCIsIFwiUmVhY3QgSW1hZ2UgY29tcG9uZW50IGV4YW1wbGVcIikpO1xuICAgIFZpZGVvRXhhbXBsZS5ydW4oY3JlYXRlRXhhbXBsZUNvbnRhaW5lcihcInZpZGVvXCIsIFwiVmlkZW8gZXhhbXBsZVwiKSwgc2RrXzEuTm9pYUNsaWVudENvbnRhaW5lci5nZXRDbGllbnQoKSk7XG4gICAgVmlkZW9SZWFjdEV4YW1wbGUucnVuKGNyZWF0ZUV4YW1wbGVDb250YWluZXIoXCJ2aWRlb1wiLCBcIlJlYWN0IFZpZGVvIGNvbXBvbmVudCBleGFtcGxlXCIpKTtcbiAgICBNb2RlbHNFeGFtcGxlLnJ1bihjcmVhdGVFeGFtcGxlQ29udGFpbmVyKFwibW9kZWxzXCIsIFwiTW9kZWxzIGV4YW1wbGVcIiksIHNka18xLk5vaWFDbGllbnRDb250YWluZXIuZ2V0Q2xpZW50KCkpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9