/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/dist/clients/proto.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/dist/clients/proto.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.protoJson = {
    nested: {
        ContentResponseData: {
            fields: {
                contentId: {
                    type: "string",
                    id: 1
                },
                offset: {
                    type: "int32",
                    id: 2
                },
                index: {
                    type: "int32",
                    id: 3
                },
                buffer: {
                    type: "bytes",
                    id: 4
                }
            }
        },
        ContentResponse: {
            fields: {
                status: {
                    type: "int32",
                    id: 1
                },
                error: {
                    type: "string",
                    id: 2
                },
                data: {
                    type: "ContentResponseData",
                    id: 3
                }
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpZW50cy9wcm90by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLE1BQU0sRUFBRTtRQUNKLG1CQUFtQixFQUFFO1lBQ2pCLE1BQU0sRUFBRTtnQkFDSixTQUFTLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsRUFBRSxFQUFFLENBQUM7aUJBQ1I7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLElBQUksRUFBRSxPQUFPO29CQUNiLEVBQUUsRUFBRSxDQUFDO2lCQUNSO2dCQUNELEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsT0FBTztvQkFDYixFQUFFLEVBQUUsQ0FBQztpQkFDUjtnQkFDRCxNQUFNLEVBQUU7b0JBQ0osSUFBSSxFQUFFLE9BQU87b0JBQ2IsRUFBRSxFQUFFLENBQUM7aUJBQ1I7YUFDSjtTQUNKO1FBQ0QsZUFBZSxFQUFFO1lBQ2IsTUFBTSxFQUFFO2dCQUNKLE1BQU0sRUFBRTtvQkFDSixJQUFJLEVBQUUsT0FBTztvQkFDYixFQUFFLEVBQUUsQ0FBQztpQkFDUjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsRUFBRSxFQUFFLENBQUM7aUJBQ1I7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLElBQUksRUFBRSxxQkFBcUI7b0JBQzNCLEVBQUUsRUFBRSxDQUFDO2lCQUNSO2FBQ0o7U0FDSjtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm90b0pzb24gPSB7XHJcbiAgICBuZXN0ZWQ6IHtcclxuICAgICAgICBDb250ZW50UmVzcG9uc2VEYXRhOiB7XHJcbiAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudElkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW50MzJcIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluZGV4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbnQzMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJieXRlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiA0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIENvbnRlbnRSZXNwb25zZToge1xyXG4gICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW50MzJcIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkNvbnRlbnRSZXNwb25zZURhdGFcIixcclxuICAgICAgICAgICAgICAgICAgICBpZDogM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iXX0=

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/dist/workers/pieces-worker.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/dist/workers/pieces-worker.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var proto_1 = __webpack_require__(/*! ../clients/proto */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/dist/clients/proto.js");
var protobuf = __webpack_require__(/*! protobufjs */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/index.js");
// tslint:disable-next-line:no-any
var ctx = self;
var root = protobuf.Root.fromJSON(proto_1.protoJson);
var contentResponseProtobuf = root.lookupType("ContentResponse");
function postMessage(message) {
    ctx.postMessage(message);
}
function decodeData(data) {
    // tslint:disable-next-line:no-any
    return contentResponseProtobuf.decode(new Uint8Array(data));
}
// Respond to message from parent thread
addEventListener("message", function (event) { return __awaiter(_this, void 0, void 0, function () {
    function onLoadEnd(e) {
        return __awaiter(this, void 0, void 0, function () {
            var arrayBuffer, buffer, content, responseData;
            return __generator(this, function (_a) {
                reader.removeEventListener("loadend", onLoadEnd, false);
                if (reader.result == null) {
                    ctx.postMessage({
                        status: 1 /* Error */
                    });
                    return [2 /*return*/];
                }
                if (reader.result instanceof ArrayBuffer) {
                    arrayBuffer = reader.result;
                }
                else if (typeof reader.result !== "string") {
                    buffer = Buffer.from(reader.result);
                    // ArrayBuffer
                    arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
                }
                else {
                    postMessage({
                        status: 1 /* Error */,
                        error: "Unknown data type received."
                    });
                    return [2 /*return*/];
                }
                content = decodeData(arrayBuffer);
                if (content.status !== 200 || content.data == null) {
                    postMessage({
                        status: 1 /* Error */,
                        error: content.error || "Incorrect data received."
                    });
                    return [2 /*return*/];
                }
                responseData = content.data;
                postMessage({
                    status: 0 /* Success */,
                    data: {
                        contentId: responseData.contentId,
                        index: responseData.index,
                        offset: responseData.offset,
                        buffer: responseData.buffer
                    }
                });
                return [2 /*return*/];
            });
        });
    }
    var blob, reader;
    return __generator(this, function (_a) {
        blob = event.data.blob;
        reader = new FileReader();
        reader.addEventListener("loadend", onLoadEnd, false);
        reader.readAsArrayBuffer(blob);
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2VzLXdvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93b3JrZXJzL3BpZWNlcy13b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBcUZBOztBQXBGQSwwQ0FBNkM7QUFFN0MscUNBQXVDO0FBR3ZDLGtDQUFrQztBQUNsQyxJQUFNLEdBQUcsR0FBSSxJQUFzQixDQUFDO0FBQ3BDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsQ0FBQztBQUMvQyxJQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUVuRSxTQUFTLFdBQVcsQ0FBQyxPQUF5QztJQUMxRCxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFpQjtJQUNqQyxrQ0FBa0M7SUFDbEMsT0FBUSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQTRCLENBQUM7QUFDNUYsQ0FBQztBQUVELHdDQUF3QztBQUN4QyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBTSxLQUFLO0lBSW5DLFNBQWUsU0FBUyxDQUFDLENBQWdCOzs7O2dCQUNyQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDdkIsR0FBRyxDQUFDLFdBQVcsQ0FBQzt3QkFDWixNQUFNLGVBQW9CO3FCQUM3QixDQUFDLENBQUM7b0JBQ0gsc0JBQU87aUJBQ1Y7Z0JBR0QsSUFBSSxNQUFNLENBQUMsTUFBTSxZQUFZLFdBQVcsRUFBRTtvQkFDdEMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQy9CO3FCQUFNLElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTtvQkFDcEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMxQyxjQUFjO29CQUNkLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMvRjtxQkFBTTtvQkFDSCxXQUFXLENBQUM7d0JBQ1IsTUFBTSxlQUFvQjt3QkFDMUIsS0FBSyxFQUFFLDZCQUE2QjtxQkFDdkMsQ0FBQyxDQUFDO29CQUNILHNCQUFPO2lCQUNWO2dCQUVLLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7b0JBQ2hELFdBQVcsQ0FBQzt3QkFDUixNQUFNLGVBQW9CO3dCQUMxQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSwwQkFBMEI7cUJBQ3JELENBQUMsQ0FBQztvQkFDSCxzQkFBTztpQkFDVjtnQkFFSyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDbEMsV0FBVyxDQUFDO29CQUNSLE1BQU0saUJBQXNCO29CQUM1QixJQUFJLEVBQUU7d0JBQ0YsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO3dCQUNqQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7d0JBQ3pCLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTTt3QkFDM0IsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO3FCQUM5QjtpQkFDSixDQUFDLENBQUM7Ozs7S0FhTjs7O1FBMURLLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQTJEaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDOzs7S0FDbEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzdWx0U3RhdHVzLCBQaWVjZXNXb3JrZXJNZXNzYWdlIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy93b3JrZXJcIjtcclxuaW1wb3J0IHsgcHJvdG9Kc29uIH0gZnJvbSBcIi4uL2NsaWVudHMvcHJvdG9cIjtcclxuaW1wb3J0IHsgQ29udGVudFJlc3BvbnNlIH0gZnJvbSBcIkBub2lhLW5ldHdvcmsvcHJvdG9jb2xcIjtcclxuaW1wb3J0ICogYXMgcHJvdG9idWYgZnJvbSBcInByb3RvYnVmanNcIjtcclxuaW1wb3J0IHsgUGllY2VSZXN1bHQgfSBmcm9tIFwiLi4vY29udHJhY3RzL25vZGVcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuY29uc3QgY3R4ID0gKHNlbGYgYXMgYW55KSBhcyBXb3JrZXI7XHJcbmNvbnN0IHJvb3QgPSBwcm90b2J1Zi5Sb290LmZyb21KU09OKHByb3RvSnNvbik7XHJcbmNvbnN0IGNvbnRlbnRSZXNwb25zZVByb3RvYnVmID0gcm9vdC5sb29rdXBUeXBlKFwiQ29udGVudFJlc3BvbnNlXCIpO1xyXG5cclxuZnVuY3Rpb24gcG9zdE1lc3NhZ2UobWVzc2FnZTogUGllY2VzV29ya2VyTWVzc2FnZTxQaWVjZVJlc3VsdD4pOiB2b2lkIHtcclxuICAgIGN0eC5wb3N0TWVzc2FnZShtZXNzYWdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb2RlRGF0YShkYXRhOiBBcnJheUJ1ZmZlcik6IENvbnRlbnRSZXNwb25zZSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICByZXR1cm4gKGNvbnRlbnRSZXNwb25zZVByb3RvYnVmLmRlY29kZShuZXcgVWludDhBcnJheShkYXRhKSkgYXMgYW55KSBhcyBDb250ZW50UmVzcG9uc2U7XHJcbn1cclxuXHJcbi8vIFJlc3BvbmQgdG8gbWVzc2FnZSBmcm9tIHBhcmVudCB0aHJlYWRcclxuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgYmxvYiA9IGV2ZW50LmRhdGEuYmxvYjtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Mb2FkRW5kKGU6IFByb2dyZXNzRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZWFkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgb25Mb2FkRW5kLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHJlYWRlci5yZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjdHgucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBSZXN1bHRTdGF0dXMuRXJyb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXI7XHJcbiAgICAgICAgaWYgKHJlYWRlci5yZXN1bHQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBhcnJheUJ1ZmZlciA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhZGVyLnJlc3VsdCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgLy8gQXJyYXlCdWZmZXJcclxuICAgICAgICAgICAgYXJyYXlCdWZmZXIgPSBidWZmZXIuYnVmZmVyLnNsaWNlKGJ1ZmZlci5ieXRlT2Zmc2V0LCBidWZmZXIuYnl0ZU9mZnNldCArIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFJlc3VsdFN0YXR1cy5FcnJvcixcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlVua25vd24gZGF0YSB0eXBlIHJlY2VpdmVkLlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZGVjb2RlRGF0YShhcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQuc3RhdHVzICE9PSAyMDAgfHwgY29udGVudC5kYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBSZXN1bHRTdGF0dXMuRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogY29udGVudC5lcnJvciB8fCBcIkluY29ycmVjdCBkYXRhIHJlY2VpdmVkLlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBjb250ZW50LmRhdGE7XHJcbiAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBzdGF0dXM6IFJlc3VsdFN0YXR1cy5TdWNjZXNzLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SWQ6IHJlc3BvbnNlRGF0YS5jb250ZW50SWQsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogcmVzcG9uc2VEYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiByZXNwb25zZURhdGEub2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyOiByZXNwb25zZURhdGEuYnVmZmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zdCBwaWVjZUluZGV4ID0gYXJyYXlCdWZmZXIucmVhZFVJbnQzMkJFKDApO1xyXG4gICAgICAgIC8vIGNvbnN0IG9mZnNldCA9IGFycmF5QnVmZmVyLnJlYWRVSW50MzJCRSgwICsgNCk7XHJcbiAgICAgICAgLy8gY29uc3QgaW5mb0hhc2ggPSBhcnJheUJ1ZmZlci50b1N0cmluZyhcImhleFwiLCA0ICsgNCwgMjQgKyA0KTtcclxuICAgICAgICAvLyBjb25zdCBkYXRhID0gYXJyYXlCdWZmZXIuc2xpY2UoMjQgKyA0LCBhcnJheUJ1ZmZlci5sZW5ndGgpO1xyXG5cclxuICAgICAgICAvLyBjdHgucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIC8vICAgICBpbmRleDogcGllY2VJbmRleCxcclxuICAgICAgICAvLyAgICAgaW5mb0hhc2g6IGluZm9IYXNoLFxyXG4gICAgICAgIC8vICAgICBvZmZzZXQ6IG9mZnNldCxcclxuICAgICAgICAvLyAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAvLyAgICAgc3RhdHVzOiBSZXN1bHRTdGF0dXMuU3VjY2Vzc1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCBvbkxvYWRFbmQsIGZhbHNlKTtcclxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcclxufSk7XHJcbiJdfQ==
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../buffer/4.9.1/node_modules/buffer/index.js */ "./node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/worker.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/worker.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./dist/workers/pieces-worker */ "./node_modules/.registry.npmjs.org/@noia-network/sdk/2.0.0-beta.4/node_modules/@noia-network/sdk/dist/workers/pieces-worker.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/aspromise/1.1.2/node_modules/@protobufjs/aspromise/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/aspromise/1.1.2/node_modules/@protobufjs/aspromise/index.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/base64/1.1.2/node_modules/@protobufjs/base64/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/base64/1.1.2/node_modules/@protobufjs/base64/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/codegen/2.0.4/node_modules/@protobufjs/codegen/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/codegen/2.0.4/node_modules/@protobufjs/codegen/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = codegen;

/**
 * Begins generating a function.
 * @memberof util
 * @param {string[]} functionParams Function parameter names
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 */
function codegen(functionParams, functionName) {

    /* istanbul ignore if */
    if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = undefined;
    }

    var body = [];

    /**
     * Appends code to the function's body or finishes generation.
     * @typedef Codegen
     * @type {function}
     * @param {string|Object.<string,*>} [formatStringOrScope] Format string or, to finish the function, an object of additional scope variables, if any
     * @param {...*} [formatParams] Format parameters
     * @returns {Codegen|Function} Itself or the generated function if finished
     * @throws {Error} If format parameter counts do not match
     */

    function Codegen(formatStringOrScope) {
        // note that explicit array handling below makes this ~50% faster

        // finish the function
        if (typeof formatStringOrScope !== "string") {
            var source = toString();
            if (codegen.verbose)
                console.log("codegen: " + source); // eslint-disable-line no-console
            source = "return " + source;
            if (formatStringOrScope) {
                var scopeKeys   = Object.keys(formatStringOrScope),
                    scopeParams = new Array(scopeKeys.length + 1),
                    scopeValues = new Array(scopeKeys.length),
                    scopeOffset = 0;
                while (scopeOffset < scopeKeys.length) {
                    scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                    scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
                }
                scopeParams[scopeOffset] = source;
                return Function.apply(null, scopeParams).apply(null, scopeValues); // eslint-disable-line no-new-func
            }
            return Function(source)(); // eslint-disable-line no-new-func
        }

        // otherwise append to body
        var formatParams = new Array(arguments.length - 1),
            formatOffset = 0;
        while (formatOffset < formatParams.length)
            formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
            var value = formatParams[formatOffset++];
            switch ($1) {
                case "d": case "f": return String(Number(value));
                case "i": return String(Math.floor(value));
                case "j": return JSON.stringify(value);
                case "s": return String(value);
            }
            return "%";
        });
        if (formatOffset !== formatParams.length)
            throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
    }

    function toString(functionNameOverride) {
        return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
    }

    Codegen.toString = toString;
    return Codegen;
}

/**
 * Begins generating a function.
 * @memberof util
 * @function codegen
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 * @variation 2
 */

/**
 * When set to `true`, codegen will log generated code to console. Useful for debugging.
 * @name util.codegen.verbose
 * @type {boolean}
 */
codegen.verbose = false;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/eventemitter/1.1.0/node_modules/@protobufjs/eventemitter/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/eventemitter/1.1.0/node_modules/@protobufjs/eventemitter/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/fetch/1.1.0/node_modules/@protobufjs/fetch/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/fetch/1.1.0/node_modules/@protobufjs/fetch/index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = fetch;

var asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "./node_modules/.registry.npmjs.org/@protobufjs/aspromise/1.1.2/node_modules/@protobufjs/aspromise/index.js"),
    inquire   = __webpack_require__(/*! @protobufjs/inquire */ "./node_modules/.registry.npmjs.org/@protobufjs/inquire/1.1.0/node_modules/@protobufjs/inquire/index.js");

var fs = inquire("fs");

/**
 * Node-style callback as used by {@link util.fetch}.
 * @typedef FetchCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {string} [contents] File contents, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Options as used by {@link util.fetch}.
 * @typedef FetchOptions
 * @type {Object}
 * @property {boolean} [binary=false] Whether expecting a binary response
 * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
 */

/**
 * Fetches the contents of a file.
 * @memberof util
 * @param {string} filename File path or url
 * @param {FetchOptions} options Fetch options
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 */
function fetch(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = {};
    } else if (!options)
        options = {};

    if (!callback)
        return asPromise(fetch, this, filename, options); // eslint-disable-line no-invalid-this

    // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.
    if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
            return err && typeof XMLHttpRequest !== "undefined"
                ? fetch.xhr(filename, options, callback)
                : err
                ? callback(err)
                : callback(null, options.binary ? contents : contents.toString("utf8"));
        });

    // use the XHR version otherwise.
    return fetch.xhr(filename, options, callback);
}

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchOptions} [options] Fetch options
 * @returns {Promise<string|Uint8Array>} Promise
 * @variation 3
 */

/**/
fetch.xhr = function fetch_xhr(filename, options, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange /* works everywhere */ = function fetchOnReadyStateChange() {

        if (xhr.readyState !== 4)
            return undefined;

        // local cors security errors return status 0 / empty string, too. afaik this cannot be
        // reliably distinguished from an actually empty file for security reasons. feel free
        // to send a pull request if you are aware of a solution.
        if (xhr.status !== 0 && xhr.status !== 200)
            return callback(Error("status " + xhr.status));

        // if binary data is expected, make sure that some sort of array is returned, even if
        // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.
        if (options.binary) {
            var buffer = xhr.response;
            if (!buffer) {
                buffer = [];
                for (var i = 0; i < xhr.responseText.length; ++i)
                    buffer.push(xhr.responseText.charCodeAt(i) & 255);
            }
            return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
    };

    if (options.binary) {
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
        if ("overrideMimeType" in xhr)
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
    }

    xhr.open("GET", filename);
    xhr.send();
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/float/1.0.2/node_modules/@protobufjs/float/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/float/1.0.2/node_modules/@protobufjs/float/index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/inquire/1.1.0/node_modules/@protobufjs/inquire/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/inquire/1.1.0/node_modules/@protobufjs/inquire/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/path/1.1.2/node_modules/@protobufjs/path/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/path/1.1.2/node_modules/@protobufjs/path/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal path module to resolve Unix, Windows and URL paths alike.
 * @memberof util
 * @namespace
 */
var path = exports;

var isAbsolute =
/**
 * Tests if the specified path is absolute.
 * @param {string} path Path to test
 * @returns {boolean} `true` if path is absolute
 */
path.isAbsolute = function isAbsolute(path) {
    return /^(?:\/|\w+:)/.test(path);
};

var normalize =
/**
 * Normalizes the specified path.
 * @param {string} path Path to normalize
 * @returns {string} Normalized path
 */
path.normalize = function normalize(path) {
    path = path.replace(/\\/g, "/")
               .replace(/\/{2,}/g, "/");
    var parts    = path.split("/"),
        absolute = isAbsolute(path),
        prefix   = "";
    if (absolute)
        prefix = parts.shift() + "/";
    for (var i = 0; i < parts.length;) {
        if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
                parts.splice(--i, 2);
            else if (absolute)
                parts.splice(i, 1);
            else
                ++i;
        } else if (parts[i] === ".")
            parts.splice(i, 1);
        else
            ++i;
    }
    return prefix + parts.join("/");
};

/**
 * Resolves the specified include path against the specified origin path.
 * @param {string} originPath Path to the origin file
 * @param {string} includePath Include path relative to origin path
 * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
 * @returns {string} Path to the include file
 */
path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
    if (!alreadyNormalized)
        includePath = normalize(includePath);
    if (isAbsolute(includePath))
        return includePath;
    if (!alreadyNormalized)
        originPath = normalize(originPath);
    return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/pool/1.1.0/node_modules/@protobufjs/pool/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/pool/1.1.0/node_modules/@protobufjs/pool/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@protobufjs/utf8/1.1.0/node_modules/@protobufjs/utf8/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@protobufjs/utf8/1.1.0/node_modules/@protobufjs/utf8/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/base64-js/1.3.0/node_modules/base64-js/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/base64-js/1.3.0/node_modules/base64-js/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/.registry.npmjs.org/base64-js/1.3.0/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/.registry.npmjs.org/ieee754/1.1.12/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/.registry.npmjs.org/isarray/1.0.0/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/4.23.1/node_modules/webpack/buildin/global.js */ "./node_modules/.registry.npmjs.org/webpack/4.23.1/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/ieee754/1.1.12/node_modules/ieee754/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/ieee754/1.1.12/node_modules/ieee754/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/isarray/1.0.0/node_modules/isarray/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/isarray/1.0.0/node_modules/isarray/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// full library entry point.


module.exports = __webpack_require__(/*! ./src/index */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/common.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/common.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = common;

var commonRe = /\/|\./;

/**
 * Provides common type definitions.
 * Can also be used to provide additional google types or your own custom types.
 * @param {string} name Short name as in `google/protobuf/[name].proto` or full file name
 * @param {Object.<string,*>} json JSON definition within `google.protobuf` if a short name, otherwise the file's root definition
 * @returns {undefined}
 * @property {INamespace} google/protobuf/any.proto Any
 * @property {INamespace} google/protobuf/duration.proto Duration
 * @property {INamespace} google/protobuf/empty.proto Empty
 * @property {INamespace} google/protobuf/field_mask.proto FieldMask
 * @property {INamespace} google/protobuf/struct.proto Struct, Value, NullValue and ListValue
 * @property {INamespace} google/protobuf/timestamp.proto Timestamp
 * @property {INamespace} google/protobuf/wrappers.proto Wrappers
 * @example
 * // manually provides descriptor.proto (assumes google/protobuf/ namespace and .proto extension)
 * protobuf.common("descriptor", descriptorJson);
 *
 * // manually provides a custom definition (uses my.foo namespace)
 * protobuf.common("my/foo/bar.proto", myFooBarJson);
 */
function common(name, json) {
    if (!commonRe.test(name)) {
        name = "google/protobuf/" + name + ".proto";
        json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
    }
    common[name] = json;
}

// Not provided because of limited use (feel free to discuss or to provide yourself):
//
// google/protobuf/descriptor.proto
// google/protobuf/source_context.proto
// google/protobuf/type.proto
//
// Stripped and pre-parsed versions of these non-bundled files are instead available as part of
// the repository or package within the google/protobuf directory.

common("any", {

    /**
     * Properties of a google.protobuf.Any message.
     * @interface IAny
     * @type {Object}
     * @property {string} [typeUrl]
     * @property {Uint8Array} [bytes]
     * @memberof common
     */
    Any: {
        fields: {
            type_url: {
                type: "string",
                id: 1
            },
            value: {
                type: "bytes",
                id: 2
            }
        }
    }
});

var timeType;

common("duration", {

    /**
     * Properties of a google.protobuf.Duration message.
     * @interface IDuration
     * @type {Object}
     * @property {number|Long} [seconds]
     * @property {number} [nanos]
     * @memberof common
     */
    Duration: timeType = {
        fields: {
            seconds: {
                type: "int64",
                id: 1
            },
            nanos: {
                type: "int32",
                id: 2
            }
        }
    }
});

common("timestamp", {

    /**
     * Properties of a google.protobuf.Timestamp message.
     * @interface ITimestamp
     * @type {Object}
     * @property {number|Long} [seconds]
     * @property {number} [nanos]
     * @memberof common
     */
    Timestamp: timeType
});

common("empty", {

    /**
     * Properties of a google.protobuf.Empty message.
     * @interface IEmpty
     * @memberof common
     */
    Empty: {
        fields: {}
    }
});

common("struct", {

    /**
     * Properties of a google.protobuf.Struct message.
     * @interface IStruct
     * @type {Object}
     * @property {Object.<string,IValue>} [fields]
     * @memberof common
     */
    Struct: {
        fields: {
            fields: {
                keyType: "string",
                type: "Value",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.Value message.
     * @interface IValue
     * @type {Object}
     * @property {string} [kind]
     * @property {0} [nullValue]
     * @property {number} [numberValue]
     * @property {string} [stringValue]
     * @property {boolean} [boolValue]
     * @property {IStruct} [structValue]
     * @property {IListValue} [listValue]
     * @memberof common
     */
    Value: {
        oneofs: {
            kind: {
                oneof: [
                    "nullValue",
                    "numberValue",
                    "stringValue",
                    "boolValue",
                    "structValue",
                    "listValue"
                ]
            }
        },
        fields: {
            nullValue: {
                type: "NullValue",
                id: 1
            },
            numberValue: {
                type: "double",
                id: 2
            },
            stringValue: {
                type: "string",
                id: 3
            },
            boolValue: {
                type: "bool",
                id: 4
            },
            structValue: {
                type: "Struct",
                id: 5
            },
            listValue: {
                type: "ListValue",
                id: 6
            }
        }
    },

    NullValue: {
        values: {
            NULL_VALUE: 0
        }
    },

    /**
     * Properties of a google.protobuf.ListValue message.
     * @interface IListValue
     * @type {Object}
     * @property {Array.<IValue>} [values]
     * @memberof common
     */
    ListValue: {
        fields: {
            values: {
                rule: "repeated",
                type: "Value",
                id: 1
            }
        }
    }
});

common("wrappers", {

    /**
     * Properties of a google.protobuf.DoubleValue message.
     * @interface IDoubleValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    DoubleValue: {
        fields: {
            value: {
                type: "double",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.FloatValue message.
     * @interface IFloatValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    FloatValue: {
        fields: {
            value: {
                type: "float",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.Int64Value message.
     * @interface IInt64Value
     * @type {Object}
     * @property {number|Long} [value]
     * @memberof common
     */
    Int64Value: {
        fields: {
            value: {
                type: "int64",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.UInt64Value message.
     * @interface IUInt64Value
     * @type {Object}
     * @property {number|Long} [value]
     * @memberof common
     */
    UInt64Value: {
        fields: {
            value: {
                type: "uint64",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.Int32Value message.
     * @interface IInt32Value
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    Int32Value: {
        fields: {
            value: {
                type: "int32",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.UInt32Value message.
     * @interface IUInt32Value
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    UInt32Value: {
        fields: {
            value: {
                type: "uint32",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.BoolValue message.
     * @interface IBoolValue
     * @type {Object}
     * @property {boolean} [value]
     * @memberof common
     */
    BoolValue: {
        fields: {
            value: {
                type: "bool",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.StringValue message.
     * @interface IStringValue
     * @type {Object}
     * @property {string} [value]
     * @memberof common
     */
    StringValue: {
        fields: {
            value: {
                type: "string",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.BytesValue message.
     * @interface IBytesValue
     * @type {Object}
     * @property {Uint8Array} [value]
     * @memberof common
     */
    BytesValue: {
        fields: {
            value: {
                type: "bytes",
                id: 1
            }
        }
    }
});

common("field_mask", {

    /**
     * Properties of a google.protobuf.FieldMask message.
     * @interface IDoubleValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    FieldMask: {
        fields: {
            paths: {
                rule: "repeated",
                type: "string",
                id: 1
            }
        }
    }
});

/**
 * Gets the root definition of the specified common proto file.
 *
 * Bundled definitions are:
 * - google/protobuf/any.proto
 * - google/protobuf/duration.proto
 * - google/protobuf/empty.proto
 * - google/protobuf/field_mask.proto
 * - google/protobuf/struct.proto
 * - google/protobuf/timestamp.proto
 * - google/protobuf/wrappers.proto
 *
 * @param {string} file Proto file name
 * @returns {INamespace|null} Root definition or `null` if not defined
 */
common.get = function get(file) {
    return common[file] || null;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/converter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/converter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Runtime message from/to plain object converters.
 * @namespace
 */
var converter = exports;

var Enum = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

/**
 * Generates a partial value fromObject conveter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) { gen
            ("switch(d%s){", prop);
            for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
                if (field.repeated && values[keys[i]] === field.typeDefault) gen
                ("default:");
                gen
                ("case%j:", keys[i])
                ("case %i:", values[keys[i]])
                    ("m%s=%j", prop, values[keys[i]])
                    ("break");
            } gen
            ("}");
        } else gen
            ("if(typeof d%s!==\"object\")", prop)
                ("throw TypeError(%j)", field.fullName + ": object expected")
            ("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
    } else {
        var isUnsigned = false;
        switch (field.type) {
            case "double":
            case "float": gen
                ("m%s=Number(d%s)", prop, prop); // also catches "NaN", "Infinity"
                break;
            case "uint32":
            case "fixed32": gen
                ("m%s=d%s>>>0", prop, prop);
                break;
            case "int32":
            case "sint32":
            case "sfixed32": gen
                ("m%s=d%s|0", prop, prop);
                break;
            case "uint64":
                isUnsigned = true;
                // eslint-disable-line no-fallthrough
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
                ("if(util.Long)")
                    ("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)
                ("else if(typeof d%s===\"string\")", prop)
                    ("m%s=parseInt(d%s,10)", prop, prop)
                ("else if(typeof d%s===\"number\")", prop)
                    ("m%s=d%s", prop, prop)
                ("else if(typeof d%s===\"object\")", prop)
                    ("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
                break;
            case "bytes": gen
                ("if(typeof d%s===\"string\")", prop)
                    ("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)
                ("else if(d%s.length)", prop)
                    ("m%s=d%s", prop, prop);
                break;
            case "string": gen
                ("m%s=String(d%s)", prop, prop);
                break;
            case "bool": gen
                ("m%s=Boolean(d%s)", prop, prop);
                break;
            /* default: gen
                ("m%s=d%s", prop, prop);
                break; */
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a plain object to runtime message converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.fromObject = function fromObject(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray;
    var gen = util.codegen(["d"], mtype.name + "$fromObject")
    ("if(d instanceof this.ctor)")
        ("return d");
    if (!fields.length) return gen
    ("return new this.ctor");
    gen
    ("var m=new this.ctor");
    for (var i = 0; i < fields.length; ++i) {
        var field  = fields[i].resolve(),
            prop   = util.safeProp(field.name);

        // Map fields
        if (field.map) { gen
    ("if(d%s){", prop)
        ("if(typeof d%s!==\"object\")", prop)
            ("throw TypeError(%j)", field.fullName + ": object expected")
        ("m%s={}", prop)
        ("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
            genValuePartial_fromObject(gen, field, /* not sorted */ i, prop + "[ks[i]]")
        ("}")
    ("}");

        // Repeated fields
        } else if (field.repeated) { gen
    ("if(d%s){", prop)
        ("if(!Array.isArray(d%s))", prop)
            ("throw TypeError(%j)", field.fullName + ": array expected")
        ("m%s=[]", prop)
        ("for(var i=0;i<d%s.length;++i){", prop);
            genValuePartial_fromObject(gen, field, /* not sorted */ i, prop + "[i]")
        ("}")
    ("}");

        // Non-repeated fields
        } else {
            if (!(field.resolvedType instanceof Enum)) gen // no need to test for null/undefined if an enum (uses switch)
    ("if(d%s!=null){", prop); // !== undefined && !== null
        genValuePartial_fromObject(gen, field, /* not sorted */ i, prop);
            if (!(field.resolvedType instanceof Enum)) gen
    ("}");
        }
    } return gen
    ("return m");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};

/**
 * Generates a partial value toObject converter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genValuePartial_toObject(gen, field, fieldIndex, prop) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) gen
            ("d%s=o.enums===String?types[%i].values[m%s]:m%s", prop, fieldIndex, prop, prop);
        else gen
            ("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
    } else {
        var isUnsigned = false;
        switch (field.type) {
            case "double":
            case "float": gen
            ("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
                break;
            case "uint64":
                isUnsigned = true;
                // eslint-disable-line no-fallthrough
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
            ("if(typeof m%s===\"number\")", prop)
                ("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)
            ("else") // Long-like
                ("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true": "", prop);
                break;
            case "bytes": gen
            ("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
                break;
            default: gen
            ("d%s=m%s", prop, prop);
                break;
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a runtime message to plain object converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.toObject = function toObject(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
    if (!fields.length)
        return util.codegen()("return {}");
    var gen = util.codegen(["m", "o"], mtype.name + "$toObject")
    ("if(!o)")
        ("o={}")
    ("var d={}");

    var repeatedFields = [],
        mapFields = [],
        normalFields = [],
        i = 0;
    for (; i < fields.length; ++i)
        if (!fields[i].partOf)
            ( fields[i].resolve().repeated ? repeatedFields
            : fields[i].map ? mapFields
            : normalFields).push(fields[i]);

    if (repeatedFields.length) { gen
    ("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i) gen
        ("d%s=[]", util.safeProp(repeatedFields[i].name));
        gen
    ("}");
    }

    if (mapFields.length) { gen
    ("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i) gen
        ("d%s={}", util.safeProp(mapFields[i].name));
        gen
    ("}");
    }

    if (normalFields.length) { gen
    ("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
            var field = normalFields[i],
                prop  = util.safeProp(field.name);
            if (field.resolvedType instanceof Enum) gen
        ("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
            else if (field.long) gen
        ("if(util.Long){")
            ("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)
            ("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)
        ("}else")
            ("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
            else if (field.bytes) {
                var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
                gen
        ("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))
        ("else{")
            ("d%s=%s", prop, arrayDefault)
            ("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)
        ("}");
            } else gen
        ("d%s=%j", prop, field.typeDefault); // also messages (=null)
        } gen
    ("}");
    }
    var hasKs2 = false;
    for (i = 0; i < fields.length; ++i) {
        var field = fields[i],
            index = mtype._fieldsArray.indexOf(field),
            prop  = util.safeProp(field.name);
        if (field.map) {
            if (!hasKs2) { hasKs2 = true; gen
    ("var ks2");
            } gen
    ("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)
        ("d%s={}", prop)
        ("for(var j=0;j<ks2.length;++j){");
            genValuePartial_toObject(gen, field, /* sorted */ index, prop + "[ks2[j]]")
        ("}");
        } else if (field.repeated) { gen
    ("if(m%s&&m%s.length){", prop, prop)
        ("d%s=[]", prop)
        ("for(var j=0;j<m%s.length;++j){", prop);
            genValuePartial_toObject(gen, field, /* sorted */ index, prop + "[j]")
        ("}");
        } else { gen
    ("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name); // !== undefined && !== null
        genValuePartial_toObject(gen, field, /* sorted */ index, prop);
        if (field.partOf) gen
        ("if(o.oneofs)")
            ("d%s=%j", util.safeProp(field.partOf.name), field.name);
        }
        gen
    ("}");
    }
    return gen
    ("return d");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/decoder.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/decoder.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = decoder;

var Enum    = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js"),
    types   = __webpack_require__(/*! ./types */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/types.js"),
    util    = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

function missing(field) {
    return "missing required '" + field.name + "'";
}

/**
 * Generates a decoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function decoder(mtype) {
    /* eslint-disable no-unexpected-multiline */
    var gen = util.codegen(["r", "l"], mtype.name + "$decode")
    ("if(!(r instanceof Reader))")
        ("r=Reader.create(r)")
    ("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field) { return field.map; }).length ? ",k" : ""))
    ("while(r.pos<c){")
        ("var t=r.uint32()");
    if (mtype.group) gen
        ("if((t&7)===4)")
            ("break");
    gen
        ("switch(t>>>3){");

    var i = 0;
    for (; i < /* initializes */ mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            type  = field.resolvedType instanceof Enum ? "int32" : field.type,
            ref   = "m" + util.safeProp(field.name); gen
            ("case %i:", field.id);

        // Map fields
        if (field.map) { gen
                ("r.skip().pos++") // assumes id 1 + key wireType
                ("if(%s===util.emptyObject)", ref)
                    ("%s={}", ref)
                ("k=r.%s()", field.keyType)
                ("r.pos++"); // assumes id 2 + value wireType
            if (types.long[field.keyType] !== undefined) {
                if (types.basic[type] === undefined) gen
                ("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())", ref, i); // can't be groups
                else gen
                ("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", ref, type);
            } else {
                if (types.basic[type] === undefined) gen
                ("%s[k]=types[%i].decode(r,r.uint32())", ref, i); // can't be groups
                else gen
                ("%s[k]=r.%s()", ref, type);
            }

        // Repeated fields
        } else if (field.repeated) { gen

                ("if(!(%s&&%s.length))", ref, ref)
                    ("%s=[]", ref);

            // Packable (always check for forward and backward compatiblity)
            if (types.packed[type] !== undefined) gen
                ("if((t&7)===2){")
                    ("var c2=r.uint32()+r.pos")
                    ("while(r.pos<c2)")
                        ("%s.push(r.%s())", ref, type)
                ("}else");

            // Non-packed
            if (types.basic[type] === undefined) gen(field.resolvedType.group
                    ? "%s.push(types[%i].decode(r))"
                    : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
            else gen
                    ("%s.push(r.%s())", ref, type);

        // Non-repeated
        } else if (types.basic[type] === undefined) gen(field.resolvedType.group
                ? "%s=types[%i].decode(r)"
                : "%s=types[%i].decode(r,r.uint32())", ref, i);
        else gen
                ("%s=r.%s()", ref, type);
        gen
                ("break");
    // Unknown fields
    } gen
            ("default:")
                ("r.skipType(t&7)")
                ("break")

        ("}")
    ("}");

    // Field presence
    for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required) gen
    ("if(!m.hasOwnProperty(%j))", rfield.name)
        ("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
    }

    return gen
    ("return m");
    /* eslint-enable no-unexpected-multiline */
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/encoder.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/encoder.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = encoder;

var Enum     = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js"),
    types    = __webpack_require__(/*! ./types */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/types.js"),
    util     = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

/**
 * Generates a partial message type encoder.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genTypePartial(gen, field, fieldIndex, ref) {
    return field.resolvedType.group
        ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0)
        : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
}

/**
 * Generates an encoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function encoder(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var gen = util.codegen(["m", "w"], mtype.name + "$encode")
    ("if(!w)")
        ("w=Writer.create()");

    var i, ref;

    // "when a message is serialized its known fields should be written sequentially by field number"
    var fields = /* initializes */ mtype.fieldsArray.slice().sort(util.compareFieldsById);

    for (var i = 0; i < fields.length; ++i) {
        var field    = fields[i].resolve(),
            index    = mtype._fieldsArray.indexOf(field),
            type     = field.resolvedType instanceof Enum ? "int32" : field.type,
            wireType = types.basic[type];
            ref      = "m" + util.safeProp(field.name);

        // Map fields
        if (field.map) {
            gen
    ("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name) // !== undefined && !== null
        ("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)
            ("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
            if (wireType === undefined) gen
            ("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref); // can't be groups
            else gen
            (".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
            gen
        ("}")
    ("}");

            // Repeated fields
        } else if (field.repeated) { gen
    ("if(%s!=null&&%s.length){", ref, ref); // !== undefined && !== null

            // Packed repeated
            if (field.packed && types.packed[type] !== undefined) { gen

        ("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)
        ("for(var i=0;i<%s.length;++i)", ref)
            ("w.%s(%s[i])", type, ref)
        ("w.ldelim()");

            // Non-packed
            } else { gen

        ("for(var i=0;i<%s.length;++i)", ref);
                if (wireType === undefined)
            genTypePartial(gen, field, index, ref + "[i]");
                else gen
            ("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);

            } gen
    ("}");

        // Non-repeated
        } else {
            if (field.optional) gen
    ("if(%s!=null&&m.hasOwnProperty(%j))", ref, field.name); // !== undefined && !== null

            if (wireType === undefined)
        genTypePartial(gen, field, index, ref);
            else gen
        ("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);

        }
    }

    return gen
    ("return w");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Enum;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/object.js");
((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";

var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/namespace.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

/**
 * Constructs a new enum instance.
 * @classdesc Reflected enum.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {Object.<string,number>} [values] Enum values as an object, by name
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this enum
 * @param {Object.<string,string>} [comments] The value comments for this enum
 */
function Enum(name, values, options, comment, comments) {
    ReflectionObject.call(this, name, options);

    if (values && typeof values !== "object")
        throw TypeError("values must be an object");

    /**
     * Enum values by id.
     * @type {Object.<number,string>}
     */
    this.valuesById = {};

    /**
     * Enum values by name.
     * @type {Object.<string,number>}
     */
    this.values = Object.create(this.valuesById); // toJSON, marker

    /**
     * Enum comment text.
     * @type {string|null}
     */
    this.comment = comment;

    /**
     * Value comment texts, if any.
     * @type {Object.<string,string>}
     */
    this.comments = comments || {};

    /**
     * Reserved ranges, if any.
     * @type {Array.<number[]|string>}
     */
    this.reserved = undefined; // toJSON

    // Note that values inherit valuesById on their prototype which makes them a TypeScript-
    // compatible enum. This is used by pbts to write actual enum definitions that work for
    // static and reflection code alike instead of emitting generic object definitions.

    if (values)
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
            if (typeof values[keys[i]] === "number") // use forward entries only
                this.valuesById[ this.values[keys[i]] = values[keys[i]] ] = keys[i];
}

/**
 * Enum descriptor.
 * @interface IEnum
 * @property {Object.<string,number>} values Enum values
 * @property {Object.<string,*>} [options] Enum options
 */

/**
 * Constructs an enum from an enum descriptor.
 * @param {string} name Enum name
 * @param {IEnum} json Enum descriptor
 * @returns {Enum} Created enum
 * @throws {TypeError} If arguments are invalid
 */
Enum.fromJSON = function fromJSON(name, json) {
    var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
    enm.reserved = json.reserved;
    return enm;
};

/**
 * Converts this enum to an enum descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IEnum} Enum descriptor
 */
Enum.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options"  , this.options,
        "values"   , this.values,
        "reserved" , this.reserved && this.reserved.length ? this.reserved : undefined,
        "comment"  , keepComments ? this.comment : undefined,
        "comments" , keepComments ? this.comments : undefined
    ]);
};

/**
 * Adds a value to this enum.
 * @param {string} name Value name
 * @param {number} id Value id
 * @param {string} [comment] Comment, if any
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a value with this name or id
 */
Enum.prototype.add = function add(name, id, comment) {
    // utilized by the parser but not by .fromJSON

    if (!util.isString(name))
        throw TypeError("name must be a string");

    if (!util.isInteger(id))
        throw TypeError("id must be an integer");

    if (this.values[name] !== undefined)
        throw Error("duplicate name '" + name + "' in " + this);

    if (this.isReservedId(id))
        throw Error("id " + id + " is reserved in " + this);

    if (this.isReservedName(name))
        throw Error("name '" + name + "' is reserved in " + this);

    if (this.valuesById[id] !== undefined) {
        if (!(this.options && this.options.allow_alias))
            throw Error("duplicate id " + id + " in " + this);
        this.values[name] = id;
    } else
        this.valuesById[this.values[name] = id] = name;

    this.comments[name] = comment || null;
    return this;
};

/**
 * Removes a value from this enum
 * @param {string} name Value name
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `name` is not a name of this enum
 */
Enum.prototype.remove = function remove(name) {

    if (!util.isString(name))
        throw TypeError("name must be a string");

    var val = this.values[name];
    if (val == null)
        throw Error("name '" + name + "' does not exist in " + this);

    delete this.valuesById[val];
    delete this.values[name];
    delete this.comments[name];

    return this;
};

/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Enum.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
};

/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Enum.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Field;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/object.js");
((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";

var Enum  = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js"),
    types = __webpack_require__(/*! ./types */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/types.js"),
    util  = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

var Type; // cyclic

var ruleRe = /^required|optional|repeated$/;

/**
 * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
 * @name Field
 * @classdesc Reflected message field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a field from a field descriptor.
 * @param {string} name Field name
 * @param {IField} json Field descriptor
 * @returns {Field} Created field
 * @throws {TypeError} If arguments are invalid
 */
Field.fromJSON = function fromJSON(name, json) {
    return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
};

/**
 * Not an actual constructor. Use {@link Field} instead.
 * @classdesc Base class of all reflected message fields. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports FieldBase
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function Field(name, id, type, rule, extend, options, comment) {

    if (util.isObject(rule)) {
        comment = extend;
        options = rule;
        rule = extend = undefined;
    } else if (util.isObject(extend)) {
        comment = options;
        options = extend;
        extend = undefined;
    }

    ReflectionObject.call(this, name, options);

    if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");

    if (!util.isString(type))
        throw TypeError("type must be a string");

    if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");

    if (extend !== undefined && !util.isString(extend))
        throw TypeError("extend must be a string");

    /**
     * Field rule, if any.
     * @type {string|undefined}
     */
    this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

    /**
     * Field type.
     * @type {string}
     */
    this.type = type; // toJSON

    /**
     * Unique field id.
     * @type {number}
     */
    this.id = id; // toJSON, marker

    /**
     * Extended type if different from parent.
     * @type {string|undefined}
     */
    this.extend = extend || undefined; // toJSON

    /**
     * Whether this field is required.
     * @type {boolean}
     */
    this.required = rule === "required";

    /**
     * Whether this field is optional.
     * @type {boolean}
     */
    this.optional = !this.required;

    /**
     * Whether this field is repeated.
     * @type {boolean}
     */
    this.repeated = rule === "repeated";

    /**
     * Whether this field is a map or not.
     * @type {boolean}
     */
    this.map = false;

    /**
     * Message this field belongs to.
     * @type {Type|null}
     */
    this.message = null;

    /**
     * OneOf this field belongs to, if any,
     * @type {OneOf|null}
     */
    this.partOf = null;

    /**
     * The field type's default value.
     * @type {*}
     */
    this.typeDefault = null;

    /**
     * The field's default value on prototypes.
     * @type {*}
     */
    this.defaultValue = null;

    /**
     * Whether this field's value should be treated as a long.
     * @type {boolean}
     */
    this.long = util.Long ? types.long[type] !== undefined : /* istanbul ignore next */ false;

    /**
     * Whether this field's value is a buffer.
     * @type {boolean}
     */
    this.bytes = type === "bytes";

    /**
     * Resolved type if not a basic type.
     * @type {Type|Enum|null}
     */
    this.resolvedType = null;

    /**
     * Sister-field within the extended type if a declaring extension field.
     * @type {Field|null}
     */
    this.extensionField = null;

    /**
     * Sister-field within the declaring namespace if an extended field.
     * @type {Field|null}
     */
    this.declaringField = null;

    /**
     * Internally remembers whether this field is packed.
     * @type {boolean|null}
     * @private
     */
    this._packed = null;

    /**
     * Comment for this field.
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Determines whether this field is packed. Only relevant when repeated and working with proto2.
 * @name Field#packed
 * @type {boolean}
 * @readonly
 */
Object.defineProperty(Field.prototype, "packed", {
    get: function() {
        // defaults to packed=true if not explicity set to false
        if (this._packed === null)
            this._packed = this.getOption("packed") !== false;
        return this._packed;
    }
});

/**
 * @override
 */
Field.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (name === "packed") // clear cached before setting
        this._packed = null;
    return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
};

/**
 * Field descriptor.
 * @interface IField
 * @property {string} [rule="optional"] Field rule
 * @property {string} type Field type
 * @property {number} id Field id
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Extension field descriptor.
 * @interface IExtensionField
 * @extends IField
 * @property {string} extend Extended type
 */

/**
 * Converts this field to a field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IField} Field descriptor
 */
Field.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "rule"    , this.rule !== "optional" && this.rule || undefined,
        "type"    , this.type,
        "id"      , this.id,
        "extend"  , this.extend,
        "options" , this.options,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Resolves this field's type references.
 * @returns {Field} `this`
 * @throws {Error} If any reference cannot be resolved
 */
Field.prototype.resolve = function resolve() {

    if (this.resolved)
        return this;

    if ((this.typeDefault = types.defaults[this.type]) === undefined) { // if not a basic type, resolve it
        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
            this.typeDefault = null;
        else // instanceof Enum
            this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
    }

    // use explicitly set default value if present
    if (this.options && this.options["default"] != null) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
            this.typeDefault = this.resolvedType.values[this.typeDefault];
    }

    // remove unnecessary options
    if (this.options) {
        if (this.options.packed === true || this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum))
            delete this.options.packed;
        if (!Object.keys(this.options).length)
            this.options = undefined;
    }

    // convert to internal data type if necesssary
    if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");

        /* istanbul ignore else */
        if (Object.freeze)
            Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)

    } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
            util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
            util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
    }

    // take special care of maps and repeated fields
    if (this.map)
        this.defaultValue = util.emptyObject;
    else if (this.repeated)
        this.defaultValue = util.emptyArray;
    else
        this.defaultValue = this.typeDefault;

    // ensure proper value on prototype
    if (this.parent instanceof Type)
        this.parent.ctor.prototype[this.name] = this.defaultValue;

    return ReflectionObject.prototype.resolve.call(this);
};

/**
 * Decorator function as returned by {@link Field.d} and {@link MapField.d} (TypeScript).
 * @typedef FieldDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} fieldName Field name
 * @returns {undefined}
 */

/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"string"|"bool"|"bytes"|Object} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @param {T} [defaultValue] Default value
 * @returns {FieldDecorator} Decorator function
 * @template T extends number | number[] | Long | Long[] | string | string[] | boolean | boolean[] | Uint8Array | Uint8Array[] | Buffer | Buffer[]
 */
Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {

    // submessage: decorate the submessage and use its name as the type
    if (typeof fieldType === "function")
        fieldType = util.decorateType(fieldType).name;

    // enum reference: create a reflected copy of the enum and keep reuseing it
    else if (fieldType && typeof fieldType === "object")
        fieldType = util.decorateEnum(fieldType).name;

    return function fieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor)
            .add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
    };
};

/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {Constructor<T>|string} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @returns {FieldDecorator} Decorator function
 * @template T extends Message<T>
 * @variation 2
 */
// like Field.d but without a default value

// Sets up cyclic dependencies (called in index-light)
Field._configure = function configure(Type_) {
    Type = Type_;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index-light.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index-light.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = module.exports = __webpack_require__(/*! ./index-minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index-minimal.js");

protobuf.build = "light";

/**
 * A node-style callback as used by {@link load} and {@link Root#load}.
 * @typedef LoadCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Root} [root] Root, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} root Root namespace, defaults to create a new one if omitted.
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 */
function load(filename, root, callback) {
    if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
    } else if (!root)
        root = new protobuf.Root();
    return root.load(filename, callback);
}

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and returns a promise.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Promise<Root>} Promise
 * @see {@link Root#load}
 * @variation 3
 */
// function load(filename:string, [root:Root]):Promise<Root>

protobuf.load = load;

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into a common root namespace (node only).
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 * @see {@link Root#loadSync}
 */
function loadSync(filename, root) {
    if (!root)
        root = new protobuf.Root();
    return root.loadSync(filename);
}

protobuf.loadSync = loadSync;

// Serialization
protobuf.encoder          = __webpack_require__(/*! ./encoder */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/encoder.js");
protobuf.decoder          = __webpack_require__(/*! ./decoder */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/decoder.js");
protobuf.verifier         = __webpack_require__(/*! ./verifier */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/verifier.js");
protobuf.converter        = __webpack_require__(/*! ./converter */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/converter.js");

// Reflection
protobuf.ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/object.js");
protobuf.Namespace        = __webpack_require__(/*! ./namespace */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/namespace.js");
protobuf.Root             = __webpack_require__(/*! ./root */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/root.js");
protobuf.Enum             = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js");
protobuf.Type             = __webpack_require__(/*! ./type */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/type.js");
protobuf.Field            = __webpack_require__(/*! ./field */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js");
protobuf.OneOf            = __webpack_require__(/*! ./oneof */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/oneof.js");
protobuf.MapField         = __webpack_require__(/*! ./mapfield */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/mapfield.js");
protobuf.Service          = __webpack_require__(/*! ./service */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/service.js");
protobuf.Method           = __webpack_require__(/*! ./method */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/method.js");

// Runtime
protobuf.Message          = __webpack_require__(/*! ./message */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/message.js");
protobuf.wrappers         = __webpack_require__(/*! ./wrappers */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/wrappers.js");

// Utility
protobuf.types            = __webpack_require__(/*! ./types */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/types.js");
protobuf.util             = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

// Set up possibly cyclic reflection dependencies
protobuf.ReflectionObject._configure(protobuf.Root);
protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
protobuf.Root._configure(protobuf.Type);
protobuf.Field._configure(protobuf.Type);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index-minimal.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index-minimal.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(/*! ./writer */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/writer.js");
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/writer_buffer.js");
protobuf.Reader       = __webpack_require__(/*! ./reader */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/reader.js");
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/reader_buffer.js");

// Utility
protobuf.util         = __webpack_require__(/*! ./util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");
protobuf.rpc          = __webpack_require__(/*! ./rpc */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/rpc.js");
protobuf.roots        = __webpack_require__(/*! ./roots */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/roots.js");
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.Reader._configure(protobuf.BufferReader);
    protobuf.util._configure();
}

// Set up buffer utility according to the environment
protobuf.Writer._configure(protobuf.BufferWriter);
configure();


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = module.exports = __webpack_require__(/*! ./index-light */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/index-light.js");

protobuf.build = "full";

// Parser
protobuf.tokenize         = __webpack_require__(/*! ./tokenize */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/tokenize.js");
protobuf.parse            = __webpack_require__(/*! ./parse */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/parse.js");
protobuf.common           = __webpack_require__(/*! ./common */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/common.js");

// Configure parser
protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/mapfield.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/mapfield.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = MapField;

// extends Field
var Field = __webpack_require__(/*! ./field */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js");
((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";

var types   = __webpack_require__(/*! ./types */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/types.js"),
    util    = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

/**
 * Constructs a new map field instance.
 * @classdesc Reflected map field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} keyType Key type
 * @param {string} type Value type
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function MapField(name, id, keyType, type, options, comment) {
    Field.call(this, name, id, type, undefined, undefined, options, comment);

    /* istanbul ignore if */
    if (!util.isString(keyType))
        throw TypeError("keyType must be a string");

    /**
     * Key type.
     * @type {string}
     */
    this.keyType = keyType; // toJSON, marker

    /**
     * Resolved key type if not a basic type.
     * @type {ReflectionObject|null}
     */
    this.resolvedKeyType = null;

    // Overrides Field#map
    this.map = true;
}

/**
 * Map field descriptor.
 * @interface IMapField
 * @extends {IField}
 * @property {string} keyType Key type
 */

/**
 * Extension map field descriptor.
 * @interface IExtensionMapField
 * @extends IMapField
 * @property {string} extend Extended type
 */

/**
 * Constructs a map field from a map field descriptor.
 * @param {string} name Field name
 * @param {IMapField} json Map field descriptor
 * @returns {MapField} Created map field
 * @throws {TypeError} If arguments are invalid
 */
MapField.fromJSON = function fromJSON(name, json) {
    return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
};

/**
 * Converts this map field to a map field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMapField} Map field descriptor
 */
MapField.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "keyType" , this.keyType,
        "type"    , this.type,
        "id"      , this.id,
        "extend"  , this.extend,
        "options" , this.options,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
MapField.prototype.resolve = function resolve() {
    if (this.resolved)
        return this;

    // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"
    if (types.mapKey[this.keyType] === undefined)
        throw Error("invalid key type: " + this.keyType);

    return Field.prototype.resolve.call(this);
};

/**
 * Map field decorator (TypeScript).
 * @name MapField.d
 * @function
 * @param {number} fieldId Field id
 * @param {"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"} fieldKeyType Field key type
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"|"bytes"|Object|Constructor<{}>} fieldValueType Field value type
 * @returns {FieldDecorator} Decorator function
 * @template T extends { [key: string]: number | Long | string | boolean | Uint8Array | Buffer | number[] | Message<{}> }
 */
MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {

    // submessage value: decorate the submessage and use its name as the type
    if (typeof fieldValueType === "function")
        fieldValueType = util.decorateType(fieldValueType).name;

    // enum reference value: create a reflected copy of the enum and keep reuseing it
    else if (fieldValueType && typeof fieldValueType === "object")
        fieldValueType = util.decorateEnum(fieldValueType).name;

    return function mapFieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor)
            .add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
    };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/message.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/message.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Message;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new message instance.
 * @classdesc Abstract runtime message.
 * @constructor
 * @param {Properties<T>} [properties] Properties to set
 * @template T extends object = object
 */
function Message(properties) {
    // not used internally
    if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            this[keys[i]] = properties[keys[i]];
}

/**
 * Reference to the reflected type.
 * @name Message.$type
 * @type {Type}
 * @readonly
 */

/**
 * Reference to the reflected type.
 * @name Message#$type
 * @type {Type}
 * @readonly
 */

/*eslint-disable valid-jsdoc*/

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<T>} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.create = function create(properties) {
    return this.$type.create(properties);
};

/**
 * Encodes a message of this type.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.encode = function encode(message, writer) {
    return this.$type.encode(message, writer);
};

/**
 * Encodes a message of this type preceeded by its length as a varint.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.encodeDelimited = function encodeDelimited(message, writer) {
    return this.$type.encodeDelimited(message, writer);
};

/**
 * Decodes a message of this type.
 * @name Message.decode
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.decode = function decode(reader) {
    return this.$type.decode(reader);
};

/**
 * Decodes a message of this type preceeded by its length as a varint.
 * @name Message.decodeDelimited
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.decodeDelimited = function decodeDelimited(reader) {
    return this.$type.decodeDelimited(reader);
};

/**
 * Verifies a message of this type.
 * @name Message.verify
 * @function
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {string|null} `null` if valid, otherwise the reason why it is not
 */
Message.verify = function verify(message) {
    return this.$type.verify(message);
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object
 * @returns {T} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.fromObject = function fromObject(object) {
    return this.$type.fromObject(object);
};

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {T} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.toObject = function toObject(message, options) {
    return this.$type.toObject(message, options);
};

/**
 * Converts this message to JSON.
 * @returns {Object.<string,*>} JSON object
 */
Message.prototype.toJSON = function toJSON() {
    return this.$type.toObject(this, util.toJSONOptions);
};

/*eslint-enable valid-jsdoc*/

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/method.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/method.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Method;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/object.js");
((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";

var util = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

/**
 * Constructs a new service method instance.
 * @classdesc Reflected service method.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Method name
 * @param {string|undefined} type Method type, usually `"rpc"`
 * @param {string} requestType Request message type
 * @param {string} responseType Response message type
 * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
 * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this method
 */
function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment) {

    /* istanbul ignore next */
    if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = undefined;
    } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = undefined;
    }

    /* istanbul ignore if */
    if (!(type === undefined || util.isString(type)))
        throw TypeError("type must be a string");

    /* istanbul ignore if */
    if (!util.isString(requestType))
        throw TypeError("requestType must be a string");

    /* istanbul ignore if */
    if (!util.isString(responseType))
        throw TypeError("responseType must be a string");

    ReflectionObject.call(this, name, options);

    /**
     * Method type.
     * @type {string}
     */
    this.type = type || "rpc"; // toJSON

    /**
     * Request type.
     * @type {string}
     */
    this.requestType = requestType; // toJSON, marker

    /**
     * Whether requests are streamed or not.
     * @type {boolean|undefined}
     */
    this.requestStream = requestStream ? true : undefined; // toJSON

    /**
     * Response type.
     * @type {string}
     */
    this.responseType = responseType; // toJSON

    /**
     * Whether responses are streamed or not.
     * @type {boolean|undefined}
     */
    this.responseStream = responseStream ? true : undefined; // toJSON

    /**
     * Resolved request type.
     * @type {Type|null}
     */
    this.resolvedRequestType = null;

    /**
     * Resolved response type.
     * @type {Type|null}
     */
    this.resolvedResponseType = null;

    /**
     * Comment for this method
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Method descriptor.
 * @interface IMethod
 * @property {string} [type="rpc"] Method type
 * @property {string} requestType Request type
 * @property {string} responseType Response type
 * @property {boolean} [requestStream=false] Whether requests are streamed
 * @property {boolean} [responseStream=false] Whether responses are streamed
 * @property {Object.<string,*>} [options] Method options
 */

/**
 * Constructs a method from a method descriptor.
 * @param {string} name Method name
 * @param {IMethod} json Method descriptor
 * @returns {Method} Created method
 * @throws {TypeError} If arguments are invalid
 */
Method.fromJSON = function fromJSON(name, json) {
    return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment);
};

/**
 * Converts this method to a method descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMethod} Method descriptor
 */
Method.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "type"           , this.type !== "rpc" && /* istanbul ignore next */ this.type || undefined,
        "requestType"    , this.requestType,
        "requestStream"  , this.requestStream,
        "responseType"   , this.responseType,
        "responseStream" , this.responseStream,
        "options"        , this.options,
        "comment"        , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
Method.prototype.resolve = function resolve() {

    /* istanbul ignore if */
    if (this.resolved)
        return this;

    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);

    return ReflectionObject.prototype.resolve.call(this);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/namespace.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/namespace.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Namespace;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/object.js");
((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";

var Field    = __webpack_require__(/*! ./field */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js"),
    util     = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

var Type,    // cyclic
    Service,
    Enum;

/**
 * Constructs a new namespace instance.
 * @name Namespace
 * @classdesc Reflected namespace.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a namespace from JSON.
 * @memberof Namespace
 * @function
 * @param {string} name Namespace name
 * @param {Object.<string,*>} json JSON object
 * @returns {Namespace} Created namespace
 * @throws {TypeError} If arguments are invalid
 */
Namespace.fromJSON = function fromJSON(name, json) {
    return new Namespace(name, json.options).addJSON(json.nested);
};

/**
 * Converts an array of reflection objects to JSON.
 * @memberof Namespace
 * @param {ReflectionObject[]} array Object array
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
 */
function arrayToJSON(array, toJSONOptions) {
    if (!(array && array.length))
        return undefined;
    var obj = {};
    for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON(toJSONOptions);
    return obj;
}

Namespace.arrayToJSON = arrayToJSON;

/**
 * Tests if the specified id is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Namespace.isReservedId = function isReservedId(reserved, id) {
    if (reserved)
        for (var i = 0; i < reserved.length; ++i)
            if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] >= id)
                return true;
    return false;
};

/**
 * Tests if the specified name is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Namespace.isReservedName = function isReservedName(reserved, name) {
    if (reserved)
        for (var i = 0; i < reserved.length; ++i)
            if (reserved[i] === name)
                return true;
    return false;
};

/**
 * Not an actual constructor. Use {@link Namespace} instead.
 * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports NamespaceBase
 * @extends ReflectionObject
 * @abstract
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 * @see {@link Namespace}
 */
function Namespace(name, options) {
    ReflectionObject.call(this, name, options);

    /**
     * Nested objects by name.
     * @type {Object.<string,ReflectionObject>|undefined}
     */
    this.nested = undefined; // toJSON

    /**
     * Cached nested objects as an array.
     * @type {ReflectionObject[]|null}
     * @private
     */
    this._nestedArray = null;
}

function clearCache(namespace) {
    namespace._nestedArray = null;
    return namespace;
}

/**
 * Nested objects of this namespace as an array for iteration.
 * @name NamespaceBase#nestedArray
 * @type {ReflectionObject[]}
 * @readonly
 */
Object.defineProperty(Namespace.prototype, "nestedArray", {
    get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
    }
});

/**
 * Namespace descriptor.
 * @interface INamespace
 * @property {Object.<string,*>} [options] Namespace options
 * @property {Object.<string,AnyNestedObject>} [nested] Nested object descriptors
 */

/**
 * Any extension field descriptor.
 * @typedef AnyExtensionField
 * @type {IExtensionField|IExtensionMapField}
 */

/**
 * Any nested object descriptor.
 * @typedef AnyNestedObject
 * @type {IEnum|IType|IService|AnyExtensionField|INamespace}
 */
// ^ BEWARE: VSCode hangs forever when using more than 5 types (that's why AnyExtensionField exists in the first place)

/**
 * Converts this namespace to a namespace descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {INamespace} Namespace descriptor
 */
Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
    return util.toObject([
        "options" , this.options,
        "nested"  , arrayToJSON(this.nestedArray, toJSONOptions)
    ]);
};

/**
 * Adds nested objects to this namespace from nested object descriptors.
 * @param {Object.<string,AnyNestedObject>} nestedJson Any nested object descriptors
 * @returns {Namespace} `this`
 */
Namespace.prototype.addJSON = function addJSON(nestedJson) {
    var ns = this;
    /* istanbul ignore else */
    if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
            nested = nestedJson[names[i]];
            ns.add( // most to least likely
                ( nested.fields !== undefined
                ? Type.fromJSON
                : nested.values !== undefined
                ? Enum.fromJSON
                : nested.methods !== undefined
                ? Service.fromJSON
                : nested.id !== undefined
                ? Field.fromJSON
                : Namespace.fromJSON )(names[i], nested)
            );
        }
    }
    return this;
};

/**
 * Gets the nested object of the specified name.
 * @param {string} name Nested object name
 * @returns {ReflectionObject|null} The reflection object or `null` if it doesn't exist
 */
Namespace.prototype.get = function get(name) {
    return this.nested && this.nested[name]
        || null;
};

/**
 * Gets the values of the nested {@link Enum|enum} of the specified name.
 * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
 * @param {string} name Nested enum name
 * @returns {Object.<string,number>} Enum values
 * @throws {Error} If there is no such enum
 */
Namespace.prototype.getEnum = function getEnum(name) {
    if (this.nested && this.nested[name] instanceof Enum)
        return this.nested[name].values;
    throw Error("no such enum: " + name);
};

/**
 * Adds a nested object to this namespace.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name
 */
Namespace.prototype.add = function add(object) {

    if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace))
        throw TypeError("object must be a valid nested object");

    if (!this.nested)
        this.nested = {};
    else {
        var prev = this.get(object.name);
        if (prev) {
            if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
                // replace plain namespace but keep existing nested elements and options
                var nested = prev.nestedArray;
                for (var i = 0; i < nested.length; ++i)
                    object.add(nested[i]);
                this.remove(prev);
                if (!this.nested)
                    this.nested = {};
                object.setOptions(prev.options, true);

            } else
                throw Error("duplicate name '" + object.name + "' in " + this);
        }
    }
    this.nested[object.name] = object;
    object.onAdd(this);
    return clearCache(this);
};

/**
 * Removes a nested object from this namespace.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this namespace
 */
Namespace.prototype.remove = function remove(object) {

    if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
    if (object.parent !== this)
        throw Error(object + " is not a member of " + this);

    delete this.nested[object.name];
    if (!Object.keys(this.nested).length)
        this.nested = undefined;

    object.onRemove(this);
    return clearCache(this);
};

/**
 * Defines additial namespaces within this one if not yet existing.
 * @param {string|string[]} path Path to create
 * @param {*} [json] Nested types to create from JSON
 * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
 */
Namespace.prototype.define = function define(path, json) {

    if (util.isString(path))
        path = path.split(".");
    else if (!Array.isArray(path))
        throw TypeError("illegal path");
    if (path && path.length && path[0] === "")
        throw Error("path must be relative");

    var ptr = this;
    while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
            ptr = ptr.nested[part];
            if (!(ptr instanceof Namespace))
                throw Error("path conflicts with non-namespace objects");
        } else
            ptr.add(ptr = new Namespace(part));
    }
    if (json)
        ptr.addJSON(json);
    return ptr;
};

/**
 * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
 * @returns {Namespace} `this`
 */
Namespace.prototype.resolveAll = function resolveAll() {
    var nested = this.nestedArray, i = 0;
    while (i < nested.length)
        if (nested[i] instanceof Namespace)
            nested[i++].resolveAll();
        else
            nested[i++].resolve();
    return this.resolve();
};

/**
 * Recursively looks up the reflection object matching the specified path in the scope of this namespace.
 * @param {string|string[]} path Path to look up
 * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
 * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 */
Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {

    /* istanbul ignore next */
    if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = undefined;
    } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [ filterTypes ];

    if (util.isString(path) && path.length) {
        if (path === ".")
            return this.root;
        path = path.split(".");
    } else if (!path.length)
        return this;

    // Start at root if path is absolute
    if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);

    // Test if the first part matches any nested object, and if so, traverse if path contains more
    var found = this.get(path[0]);
    if (found) {
        if (path.length === 1) {
            if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
                return found;
        } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
            return found;

    // Otherwise try each nested namespace
    } else
        for (var i = 0; i < this.nestedArray.length; ++i)
            if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true)))
                return found;

    // If there hasn't been a match, try again at the parent
    if (this.parent === null || parentAlreadyChecked)
        return null;
    return this.parent.lookup(path, filterTypes);
};

/**
 * Looks up the reflection object at the specified path, relative to this namespace.
 * @name NamespaceBase#lookup
 * @function
 * @param {string|string[]} path Path to look up
 * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 * @variation 2
 */
// lookup(path: string, [parentAlreadyChecked: boolean])

/**
 * Looks up the {@link Type|type} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type
 * @throws {Error} If `path` does not point to a type
 */
Namespace.prototype.lookupType = function lookupType(path) {
    var found = this.lookup(path, [ Type ]);
    if (!found)
        throw Error("no such type: " + path);
    return found;
};

/**
 * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Enum} Looked up enum
 * @throws {Error} If `path` does not point to an enum
 */
Namespace.prototype.lookupEnum = function lookupEnum(path) {
    var found = this.lookup(path, [ Enum ]);
    if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
    return found;
};

/**
 * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type or enum
 * @throws {Error} If `path` does not point to a type or enum
 */
Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
    var found = this.lookup(path, [ Type, Enum ]);
    if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
    return found;
};

/**
 * Looks up the {@link Service|service} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Service} Looked up service
 * @throws {Error} If `path` does not point to a service
 */
Namespace.prototype.lookupService = function lookupService(path) {
    var found = this.lookup(path, [ Service ]);
    if (!found)
        throw Error("no such Service '" + path + "' in " + this);
    return found;
};

// Sets up cyclic dependencies (called in index-light)
Namespace._configure = function(Type_, Service_, Enum_) {
    Type    = Type_;
    Service = Service_;
    Enum    = Enum_;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/object.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = ReflectionObject;

ReflectionObject.className = "ReflectionObject";

var util = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

var Root; // cyclic

/**
 * Constructs a new reflection object instance.
 * @classdesc Base class of all reflection objects.
 * @constructor
 * @param {string} name Object name
 * @param {Object.<string,*>} [options] Declared options
 * @abstract
 */
function ReflectionObject(name, options) {

    if (!util.isString(name))
        throw TypeError("name must be a string");

    if (options && !util.isObject(options))
        throw TypeError("options must be an object");

    /**
     * Options.
     * @type {Object.<string,*>|undefined}
     */
    this.options = options; // toJSON

    /**
     * Unique name within its namespace.
     * @type {string}
     */
    this.name = name;

    /**
     * Parent namespace.
     * @type {Namespace|null}
     */
    this.parent = null;

    /**
     * Whether already resolved or not.
     * @type {boolean}
     */
    this.resolved = false;

    /**
     * Comment text, if any.
     * @type {string|null}
     */
    this.comment = null;

    /**
     * Defining file name.
     * @type {string|null}
     */
    this.filename = null;
}

Object.defineProperties(ReflectionObject.prototype, {

    /**
     * Reference to the root namespace.
     * @name ReflectionObject#root
     * @type {Root}
     * @readonly
     */
    root: {
        get: function() {
            var ptr = this;
            while (ptr.parent !== null)
                ptr = ptr.parent;
            return ptr;
        }
    },

    /**
     * Full name including leading dot.
     * @name ReflectionObject#fullName
     * @type {string}
     * @readonly
     */
    fullName: {
        get: function() {
            var path = [ this.name ],
                ptr = this.parent;
            while (ptr) {
                path.unshift(ptr.name);
                ptr = ptr.parent;
            }
            return path.join(".");
        }
    }
});

/**
 * Converts this reflection object to its descriptor representation.
 * @returns {Object.<string,*>} Descriptor
 * @abstract
 */
ReflectionObject.prototype.toJSON = /* istanbul ignore next */ function toJSON() {
    throw Error(); // not implemented, shouldn't happen
};

/**
 * Called when this object is added to a parent.
 * @param {ReflectionObject} parent Parent added to
 * @returns {undefined}
 */
ReflectionObject.prototype.onAdd = function onAdd(parent) {
    if (this.parent && this.parent !== parent)
        this.parent.remove(this);
    this.parent = parent;
    this.resolved = false;
    var root = parent.root;
    if (root instanceof Root)
        root._handleAdd(this);
};

/**
 * Called when this object is removed from a parent.
 * @param {ReflectionObject} parent Parent removed from
 * @returns {undefined}
 */
ReflectionObject.prototype.onRemove = function onRemove(parent) {
    var root = parent.root;
    if (root instanceof Root)
        root._handleRemove(this);
    this.parent = null;
    this.resolved = false;
};

/**
 * Resolves this objects type references.
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.resolve = function resolve() {
    if (this.resolved)
        return this;
    if (this.root instanceof Root)
        this.resolved = true; // only if part of a root
    return this;
};

/**
 * Gets an option value.
 * @param {string} name Option name
 * @returns {*} Option value or `undefined` if not set
 */
ReflectionObject.prototype.getOption = function getOption(name) {
    if (this.options)
        return this.options[name];
    return undefined;
};

/**
 * Sets an option.
 * @param {string} name Option name
 * @param {*} value Option value
 * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (!ifNotSet || !this.options || this.options[name] === undefined)
        (this.options || (this.options = {}))[name] = value;
    return this;
};

/**
 * Sets multiple options.
 * @param {Object.<string,*>} options Options to set
 * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
    if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
            this.setOption(keys[i], options[keys[i]], ifNotSet);
    return this;
};

/**
 * Converts this instance to its string representation.
 * @returns {string} Class name[, space, full name]
 */
ReflectionObject.prototype.toString = function toString() {
    var className = this.constructor.className,
        fullName  = this.fullName;
    if (fullName.length)
        return className + " " + fullName;
    return className;
};

// Sets up cyclic dependencies (called in index-light)
ReflectionObject._configure = function(Root_) {
    Root = Root_;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/oneof.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/oneof.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = OneOf;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/object.js");
((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";

var Field = __webpack_require__(/*! ./field */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js"),
    util  = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

/**
 * Constructs a new oneof instance.
 * @classdesc Reflected oneof.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Oneof name
 * @param {string[]|Object.<string,*>} [fieldNames] Field names
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function OneOf(name, fieldNames, options, comment) {
    if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = undefined;
    }
    ReflectionObject.call(this, name, options);

    /* istanbul ignore if */
    if (!(fieldNames === undefined || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");

    /**
     * Field names that belong to this oneof.
     * @type {string[]}
     */
    this.oneof = fieldNames || []; // toJSON, marker

    /**
     * Fields that belong to this oneof as an array for iteration.
     * @type {Field[]}
     * @readonly
     */
    this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent

    /**
     * Comment for this field.
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Oneof descriptor.
 * @interface IOneOf
 * @property {Array.<string>} oneof Oneof field names
 * @property {Object.<string,*>} [options] Oneof options
 */

/**
 * Constructs a oneof from a oneof descriptor.
 * @param {string} name Oneof name
 * @param {IOneOf} json Oneof descriptor
 * @returns {OneOf} Created oneof
 * @throws {TypeError} If arguments are invalid
 */
OneOf.fromJSON = function fromJSON(name, json) {
    return new OneOf(name, json.oneof, json.options, json.comment);
};

/**
 * Converts this oneof to a oneof descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IOneOf} Oneof descriptor
 */
OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options" , this.options,
        "oneof"   , this.oneof,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Adds the fields of the specified oneof to the parent if not already done so.
 * @param {OneOf} oneof The oneof
 * @returns {undefined}
 * @inner
 * @ignore
 */
function addFieldsToParent(oneof) {
    if (oneof.parent)
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
            if (!oneof.fieldsArray[i].parent)
                oneof.parent.add(oneof.fieldsArray[i]);
}

/**
 * Adds a field to this oneof and removes it from its current parent, if any.
 * @param {Field} field Field to add
 * @returns {OneOf} `this`
 */
OneOf.prototype.add = function add(field) {

    /* istanbul ignore if */
    if (!(field instanceof Field))
        throw TypeError("field must be a Field");

    if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
    this.oneof.push(field.name);
    this.fieldsArray.push(field);
    field.partOf = this; // field.parent remains null
    addFieldsToParent(this);
    return this;
};

/**
 * Removes a field from this oneof and puts it back to the oneof's parent.
 * @param {Field} field Field to remove
 * @returns {OneOf} `this`
 */
OneOf.prototype.remove = function remove(field) {

    /* istanbul ignore if */
    if (!(field instanceof Field))
        throw TypeError("field must be a Field");

    var index = this.fieldsArray.indexOf(field);

    /* istanbul ignore if */
    if (index < 0)
        throw Error(field + " is not a member of " + this);

    this.fieldsArray.splice(index, 1);
    index = this.oneof.indexOf(field.name);

    /* istanbul ignore else */
    if (index > -1) // theoretical
        this.oneof.splice(index, 1);

    field.partOf = null;
    return this;
};

/**
 * @override
 */
OneOf.prototype.onAdd = function onAdd(parent) {
    ReflectionObject.prototype.onAdd.call(this, parent);
    var self = this;
    // Collect present fields
    for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
            field.partOf = self;
            self.fieldsArray.push(field);
        }
    }
    // Add not yet present fields
    addFieldsToParent(this);
};

/**
 * @override
 */
OneOf.prototype.onRemove = function onRemove(parent) {
    for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
            field.parent.remove(field);
    ReflectionObject.prototype.onRemove.call(this, parent);
};

/**
 * Decorator function as returned by {@link OneOf.d} (TypeScript).
 * @typedef OneOfDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} oneofName OneOf name
 * @returns {undefined}
 */

/**
 * OneOf decorator (TypeScript).
 * @function
 * @param {...string} fieldNames Field names
 * @returns {OneOfDecorator} Decorator function
 * @template T extends string
 */
OneOf.d = function decorateOneOf() {
    var fieldNames = new Array(arguments.length),
        index = 0;
    while (index < arguments.length)
        fieldNames[index] = arguments[index++];
    return function oneOfDecorator(prototype, oneofName) {
        util.decorateType(prototype.constructor)
            .add(new OneOf(oneofName, fieldNames));
        Object.defineProperty(prototype, oneofName, {
            get: util.oneOfGetter(fieldNames),
            set: util.oneOfSetter(fieldNames)
        });
    };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/parse.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/parse.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = parse;

parse.filename = null;
parse.defaults = { keepCase: false };

var tokenize  = __webpack_require__(/*! ./tokenize */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/tokenize.js"),
    Root      = __webpack_require__(/*! ./root */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/root.js"),
    Type      = __webpack_require__(/*! ./type */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/type.js"),
    Field     = __webpack_require__(/*! ./field */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js"),
    MapField  = __webpack_require__(/*! ./mapfield */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/mapfield.js"),
    OneOf     = __webpack_require__(/*! ./oneof */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/oneof.js"),
    Enum      = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js"),
    Service   = __webpack_require__(/*! ./service */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/service.js"),
    Method    = __webpack_require__(/*! ./method */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/method.js"),
    types     = __webpack_require__(/*! ./types */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/types.js"),
    util      = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

var base10Re    = /^[1-9][0-9]*$/,
    base10NegRe = /^-?[1-9][0-9]*$/,
    base16Re    = /^0[x][0-9a-fA-F]+$/,
    base16NegRe = /^-?0[x][0-9a-fA-F]+$/,
    base8Re     = /^0[0-7]+$/,
    base8NegRe  = /^-?0[0-7]+$/,
    numberRe    = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
    nameRe      = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
    typeRefRe   = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
    fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;

/**
 * Result object returned from {@link parse}.
 * @interface IParserResult
 * @property {string|undefined} package Package name, if declared
 * @property {string[]|undefined} imports Imports, if any
 * @property {string[]|undefined} weakImports Weak imports, if any
 * @property {string|undefined} syntax Syntax, if specified (either `"proto2"` or `"proto3"`)
 * @property {Root} root Populated root instance
 */

/**
 * Options modifying the behavior of {@link parse}.
 * @interface IParseOptions
 * @property {boolean} [keepCase=false] Keeps field casing instead of converting to camel case
 * @property {boolean} [alternateCommentMode=false] Recognize double-slash comments in addition to doc-block comments.
 */

/**
 * Options modifying the behavior of JSON serialization.
 * @interface IToJSONOptions
 * @property {boolean} [keepComments=false] Serializes comments.
 */

/**
 * Parses the given .proto source and returns an object with the parsed contents.
 * @param {string} source Source contents
 * @param {Root} root Root to populate
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {IParserResult} Parser result
 * @property {string} filename=null Currently processing file name for error reporting, if known
 * @property {IParseOptions} defaults Default {@link IParseOptions}
 */
function parse(source, root, options) {
    /* eslint-disable callback-return */
    if (!(root instanceof Root)) {
        options = root;
        root = new Root();
    }
    if (!options)
        options = parse.defaults;

    var tn = tokenize(source, options.alternateCommentMode || false),
        next = tn.next,
        push = tn.push,
        peek = tn.peek,
        skip = tn.skip,
        cmnt = tn.cmnt;

    var head = true,
        pkg,
        imports,
        weakImports,
        syntax,
        isProto3 = false;

    var ptr = root;

    var applyCase = options.keepCase ? function(name) { return name; } : util.camelCase;

    /* istanbul ignore next */
    function illegal(token, name, insideTryCatch) {
        var filename = parse.filename;
        if (!insideTryCatch)
            parse.filename = null;
        return Error("illegal " + (name || "token") + " '" + token + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
    }

    function readString() {
        var values = [],
            token;
        do {
            /* istanbul ignore if */
            if ((token = next()) !== "\"" && token !== "'")
                throw illegal(token);

            values.push(next());
            skip(token);
            token = peek();
        } while (token === "\"" || token === "'");
        return values.join("");
    }

    function readValue(acceptTypeRef) {
        var token = next();
        switch (token) {
            case "'":
            case "\"":
                push(token);
                return readString();
            case "true": case "TRUE":
                return true;
            case "false": case "FALSE":
                return false;
        }
        try {
            return parseNumber(token, /* insideTryCatch */ true);
        } catch (e) {

            /* istanbul ignore else */
            if (acceptTypeRef && typeRefRe.test(token))
                return token;

            /* istanbul ignore next */
            throw illegal(token, "value");
        }
    }

    function readRanges(target, acceptStrings) {
        var token, start;
        do {
            if (acceptStrings && ((token = peek()) === "\"" || token === "'"))
                target.push(readString());
            else
                target.push([ start = parseId(next()), skip("to", true) ? parseId(next()) : start ]);
        } while (skip(",", true));
        skip(";");
    }

    function parseNumber(token, insideTryCatch) {
        var sign = 1;
        if (token.charAt(0) === "-") {
            sign = -1;
            token = token.substring(1);
        }
        switch (token) {
            case "inf": case "INF": case "Inf":
                return sign * Infinity;
            case "nan": case "NAN": case "Nan": case "NaN":
                return NaN;
            case "0":
                return 0;
        }
        if (base10Re.test(token))
            return sign * parseInt(token, 10);
        if (base16Re.test(token))
            return sign * parseInt(token, 16);
        if (base8Re.test(token))
            return sign * parseInt(token, 8);

        /* istanbul ignore else */
        if (numberRe.test(token))
            return sign * parseFloat(token);

        /* istanbul ignore next */
        throw illegal(token, "number", insideTryCatch);
    }

    function parseId(token, acceptNegative) {
        switch (token) {
            case "max": case "MAX": case "Max":
                return 536870911;
            case "0":
                return 0;
        }

        /* istanbul ignore if */
        if (!acceptNegative && token.charAt(0) === "-")
            throw illegal(token, "id");

        if (base10NegRe.test(token))
            return parseInt(token, 10);
        if (base16NegRe.test(token))
            return parseInt(token, 16);

        /* istanbul ignore else */
        if (base8NegRe.test(token))
            return parseInt(token, 8);

        /* istanbul ignore next */
        throw illegal(token, "id");
    }

    function parsePackage() {

        /* istanbul ignore if */
        if (pkg !== undefined)
            throw illegal("package");

        pkg = next();

        /* istanbul ignore if */
        if (!typeRefRe.test(pkg))
            throw illegal(pkg, "name");

        ptr = ptr.define(pkg);
        skip(";");
    }

    function parseImport() {
        var token = peek();
        var whichImports;
        switch (token) {
            case "weak":
                whichImports = weakImports || (weakImports = []);
                next();
                break;
            case "public":
                next();
                // eslint-disable-line no-fallthrough
            default:
                whichImports = imports || (imports = []);
                break;
        }
        token = readString();
        skip(";");
        whichImports.push(token);
    }

    function parseSyntax() {
        skip("=");
        syntax = readString();
        isProto3 = syntax === "proto3";

        /* istanbul ignore if */
        if (!isProto3 && syntax !== "proto2")
            throw illegal(syntax, "syntax");

        skip(";");
    }

    function parseCommon(parent, token) {
        switch (token) {

            case "option":
                parseOption(parent, token);
                skip(";");
                return true;

            case "message":
                parseType(parent, token);
                return true;

            case "enum":
                parseEnum(parent, token);
                return true;

            case "service":
                parseService(parent, token);
                return true;

            case "extend":
                parseExtension(parent, token);
                return true;
        }
        return false;
    }

    function ifBlock(obj, fnIf, fnElse) {
        var trailingLine = tn.line;
        if (obj) {
            obj.comment = cmnt(); // try block-type comment
            obj.filename = parse.filename;
        }
        if (skip("{", true)) {
            var token;
            while ((token = next()) !== "}")
                fnIf(token);
            skip(";", true);
        } else {
            if (fnElse)
                fnElse();
            skip(";");
            if (obj && typeof obj.comment !== "string")
                obj.comment = cmnt(trailingLine); // try line-type comment if no block
        }
    }

    function parseType(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "type name");

        var type = new Type(token);
        ifBlock(type, function parseType_block(token) {
            if (parseCommon(type, token))
                return;

            switch (token) {

                case "map":
                    parseMapField(type, token);
                    break;

                case "required":
                case "optional":
                case "repeated":
                    parseField(type, token);
                    break;

                case "oneof":
                    parseOneOf(type, token);
                    break;

                case "extensions":
                    readRanges(type.extensions || (type.extensions = []));
                    break;

                case "reserved":
                    readRanges(type.reserved || (type.reserved = []), true);
                    break;

                default:
                    /* istanbul ignore if */
                    if (!isProto3 || !typeRefRe.test(token))
                        throw illegal(token);

                    push(token);
                    parseField(type, "optional");
                    break;
            }
        });
        parent.add(type);
    }

    function parseField(parent, rule, extend) {
        var type = next();
        if (type === "group") {
            parseGroup(parent, rule);
            return;
        }

        /* istanbul ignore if */
        if (!typeRefRe.test(type))
            throw illegal(type, "type");

        var name = next();

        /* istanbul ignore if */
        if (!nameRe.test(name))
            throw illegal(name, "name");

        name = applyCase(name);
        skip("=");

        var field = new Field(name, parseId(next()), type, rule, extend);
        ifBlock(field, function parseField_block(token) {

            /* istanbul ignore else */
            if (token === "option") {
                parseOption(field, token);
                skip(";");
            } else
                throw illegal(token);

        }, function parseField_line() {
            parseInlineOptions(field);
        });
        parent.add(field);

        // JSON defaults to packed=true if not set so we have to set packed=false explicity when
        // parsing proto2 descriptors without the option, where applicable. This must be done for
        // all known packable types and anything that could be an enum (= is not a basic type).
        if (!isProto3 && field.repeated && (types.packed[type] !== undefined || types.basic[type] === undefined))
            field.setOption("packed", false, /* ifNotSet */ true);
    }

    function parseGroup(parent, rule) {
        var name = next();

        /* istanbul ignore if */
        if (!nameRe.test(name))
            throw illegal(name, "name");

        var fieldName = util.lcFirst(name);
        if (name === fieldName)
            name = util.ucFirst(name);
        skip("=");
        var id = parseId(next());
        var type = new Type(name);
        type.group = true;
        var field = new Field(fieldName, id, name, rule);
        field.filename = parse.filename;
        ifBlock(type, function parseGroup_block(token) {
            switch (token) {

                case "option":
                    parseOption(type, token);
                    skip(";");
                    break;

                case "required":
                case "optional":
                case "repeated":
                    parseField(type, token);
                    break;

                /* istanbul ignore next */
                default:
                    throw illegal(token); // there are no groups with proto3 semantics
            }
        });
        parent.add(type)
              .add(field);
    }

    function parseMapField(parent) {
        skip("<");
        var keyType = next();

        /* istanbul ignore if */
        if (types.mapKey[keyType] === undefined)
            throw illegal(keyType, "type");

        skip(",");
        var valueType = next();

        /* istanbul ignore if */
        if (!typeRefRe.test(valueType))
            throw illegal(valueType, "type");

        skip(">");
        var name = next();

        /* istanbul ignore if */
        if (!nameRe.test(name))
            throw illegal(name, "name");

        skip("=");
        var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
        ifBlock(field, function parseMapField_block(token) {

            /* istanbul ignore else */
            if (token === "option") {
                parseOption(field, token);
                skip(";");
            } else
                throw illegal(token);

        }, function parseMapField_line() {
            parseInlineOptions(field);
        });
        parent.add(field);
    }

    function parseOneOf(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "name");

        var oneof = new OneOf(applyCase(token));
        ifBlock(oneof, function parseOneOf_block(token) {
            if (token === "option") {
                parseOption(oneof, token);
                skip(";");
            } else {
                push(token);
                parseField(oneof, "optional");
            }
        });
        parent.add(oneof);
    }

    function parseEnum(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "name");

        var enm = new Enum(token);
        ifBlock(enm, function parseEnum_block(token) {
          switch(token) {
            case "option":
              parseOption(enm, token);
              skip(";");
              break;

            case "reserved":
              readRanges(enm.reserved || (enm.reserved = []), true);
              break;

            default:
              parseEnumValue(enm, token);
          }
        });
        parent.add(enm);
    }

    function parseEnumValue(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token))
            throw illegal(token, "name");

        skip("=");
        var value = parseId(next(), true),
            dummy = {};
        ifBlock(dummy, function parseEnumValue_block(token) {

            /* istanbul ignore else */
            if (token === "option") {
                parseOption(dummy, token); // skip
                skip(";");
            } else
                throw illegal(token);

        }, function parseEnumValue_line() {
            parseInlineOptions(dummy); // skip
        });
        parent.add(token, value, dummy.comment);
    }

    function parseOption(parent, token) {
        var isCustom = skip("(", true);

        /* istanbul ignore if */
        if (!typeRefRe.test(token = next()))
            throw illegal(token, "name");

        var name = token;
        if (isCustom) {
            skip(")");
            name = "(" + name + ")";
            token = peek();
            if (fqTypeRefRe.test(token)) {
                name += token;
                next();
            }
        }
        skip("=");
        parseOptionValue(parent, name);
    }

    function parseOptionValue(parent, name) {
        if (skip("{", true)) { // { a: "foo" b { c: "bar" } }
            do {
                /* istanbul ignore if */
                if (!nameRe.test(token = next()))
                    throw illegal(token, "name");

                if (peek() === "{")
                    parseOptionValue(parent, name + "." + token);
                else {
                    skip(":");
                    if (peek() === "{")
                        parseOptionValue(parent, name + "." + token);
                    else
                        setOption(parent, name + "." + token, readValue(true));
                }
                skip(",", true);
            } while (!skip("}", true));
        } else
            setOption(parent, name, readValue(true));
        // Does not enforce a delimiter to be universal
    }

    function setOption(parent, name, value) {
        if (parent.setOption)
            parent.setOption(name, value);
    }

    function parseInlineOptions(parent) {
        if (skip("[", true)) {
            do {
                parseOption(parent, "option");
            } while (skip(",", true));
            skip("]");
        }
        return parent;
    }

    function parseService(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "service name");

        var service = new Service(token);
        ifBlock(service, function parseService_block(token) {
            if (parseCommon(service, token))
                return;

            /* istanbul ignore else */
            if (token === "rpc")
                parseMethod(service, token);
            else
                throw illegal(token);
        });
        parent.add(service);
    }

    function parseMethod(parent, token) {
        var type = token;

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "name");

        var name = token,
            requestType, requestStream,
            responseType, responseStream;

        skip("(");
        if (skip("stream", true))
            requestStream = true;

        /* istanbul ignore if */
        if (!typeRefRe.test(token = next()))
            throw illegal(token);

        requestType = token;
        skip(")"); skip("returns"); skip("(");
        if (skip("stream", true))
            responseStream = true;

        /* istanbul ignore if */
        if (!typeRefRe.test(token = next()))
            throw illegal(token);

        responseType = token;
        skip(")");

        var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
        ifBlock(method, function parseMethod_block(token) {

            /* istanbul ignore else */
            if (token === "option") {
                parseOption(method, token);
                skip(";");
            } else
                throw illegal(token);

        });
        parent.add(method);
    }

    function parseExtension(parent, token) {

        /* istanbul ignore if */
        if (!typeRefRe.test(token = next()))
            throw illegal(token, "reference");

        var reference = token;
        ifBlock(null, function parseExtension_block(token) {
            switch (token) {

                case "required":
                case "repeated":
                case "optional":
                    parseField(parent, token, reference);
                    break;

                default:
                    /* istanbul ignore if */
                    if (!isProto3 || !typeRefRe.test(token))
                        throw illegal(token);
                    push(token);
                    parseField(parent, "optional", reference);
                    break;
            }
        });
    }

    var token;
    while ((token = next()) !== null) {
        switch (token) {

            case "package":

                /* istanbul ignore if */
                if (!head)
                    throw illegal(token);

                parsePackage();
                break;

            case "import":

                /* istanbul ignore if */
                if (!head)
                    throw illegal(token);

                parseImport();
                break;

            case "syntax":

                /* istanbul ignore if */
                if (!head)
                    throw illegal(token);

                parseSyntax();
                break;

            case "option":

                /* istanbul ignore if */
                if (!head)
                    throw illegal(token);

                parseOption(ptr, token);
                skip(";");
                break;

            default:

                /* istanbul ignore else */
                if (parseCommon(ptr, token)) {
                    head = false;
                    continue;
                }

                /* istanbul ignore next */
                throw illegal(token);
        }
    }

    parse.filename = null;
    return {
        "package"     : pkg,
        "imports"     : imports,
         weakImports  : weakImports,
         syntax       : syntax,
         root         : root
    };
}

/**
 * Parses the given .proto source and returns an object with the parsed contents.
 * @name parse
 * @function
 * @param {string} source Source contents
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {IParserResult} Parser result
 * @property {string} filename=null Currently processing file name for error reporting, if known
 * @property {IParseOptions} defaults Default {@link IParseOptions}
 * @variation 2
 */


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/reader.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/reader.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = util.Buffer
    ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer)
                ? new BufferReader(buffer)
                /* istanbul ignore next */
                : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/reader_buffer.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/reader_buffer.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(/*! ./reader */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/reader.js");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

/* istanbul ignore else */
if (util.Buffer)
    BufferReader.prototype._slice = util.Buffer.prototype.slice;

/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/root.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/root.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Root;

// extends Namespace
var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/namespace.js");
((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";

var Field   = __webpack_require__(/*! ./field */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js"),
    Enum    = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js"),
    OneOf   = __webpack_require__(/*! ./oneof */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/oneof.js"),
    util    = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

var Type,   // cyclic
    parse,  // might be excluded
    common; // "

/**
 * Constructs a new root namespace instance.
 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
 * @extends NamespaceBase
 * @constructor
 * @param {Object.<string,*>} [options] Top level options
 */
function Root(options) {
    Namespace.call(this, "", options);

    /**
     * Deferred extension fields.
     * @type {Field[]}
     */
    this.deferred = [];

    /**
     * Resolved file names of loaded files.
     * @type {string[]}
     */
    this.files = [];
}

/**
 * Loads a namespace descriptor into a root namespace.
 * @param {INamespace} json Nameespace descriptor
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted
 * @returns {Root} Root namespace
 */
Root.fromJSON = function fromJSON(json, root) {
    if (!root)
        root = new Root();
    if (json.options)
        root.setOptions(json.options);
    return root.addJSON(json.nested);
};

/**
 * Resolves the path of an imported file, relative to the importing origin.
 * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
 * @function
 * @param {string} origin The file name of the importing file
 * @param {string} target The file name being imported
 * @returns {string|null} Resolved path to `target` or `null` to skip the file
 */
Root.prototype.resolvePath = util.path.resolve;

// A symbol-like function to safely signal synchronous loading
/* istanbul ignore next */
function SYNC() {} // eslint-disable-line no-empty-function

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} options Parse options
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 */
Root.prototype.load = function load(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = undefined;
    }
    var self = this;
    if (!callback)
        return util.asPromise(load, self, filename, options);

    var sync = callback === SYNC; // undocumented

    // Finishes loading by calling the callback (exactly once)
    function finish(err, root) {
        /* istanbul ignore if */
        if (!callback)
            return;
        var cb = callback;
        callback = null;
        if (sync)
            throw err;
        cb(err, root);
    }

    // Processes a single file
    function process(filename, source) {
        try {
            if (util.isString(source) && source.charAt(0) === "{")
                source = JSON.parse(source);
            if (!util.isString(source))
                self.setOptions(source.options).addJSON(source.nested);
            else {
                parse.filename = filename;
                var parsed = parse(source, self, options),
                    resolved,
                    i = 0;
                if (parsed.imports)
                    for (; i < parsed.imports.length; ++i)
                        if (resolved = self.resolvePath(filename, parsed.imports[i]))
                            fetch(resolved);
                if (parsed.weakImports)
                    for (i = 0; i < parsed.weakImports.length; ++i)
                        if (resolved = self.resolvePath(filename, parsed.weakImports[i]))
                            fetch(resolved, true);
            }
        } catch (err) {
            finish(err);
        }
        if (!sync && !queued)
            finish(null, self); // only once anyway
    }

    // Fetches a single file
    function fetch(filename, weak) {

        // Strip path if this file references a bundled definition
        var idx = filename.lastIndexOf("google/protobuf/");
        if (idx > -1) {
            var altname = filename.substring(idx);
            if (altname in common)
                filename = altname;
        }

        // Skip if already loaded / attempted
        if (self.files.indexOf(filename) > -1)
            return;
        self.files.push(filename);

        // Shortcut bundled definitions
        if (filename in common) {
            if (sync)
                process(filename, common[filename]);
            else {
                ++queued;
                setTimeout(function() {
                    --queued;
                    process(filename, common[filename]);
                });
            }
            return;
        }

        // Otherwise fetch from disk or network
        if (sync) {
            var source;
            try {
                source = util.fs.readFileSync(filename).toString("utf8");
            } catch (err) {
                if (!weak)
                    finish(err);
                return;
            }
            process(filename, source);
        } else {
            ++queued;
            util.fetch(filename, function(err, source) {
                --queued;
                /* istanbul ignore if */
                if (!callback)
                    return; // terminated meanwhile
                if (err) {
                    /* istanbul ignore else */
                    if (!weak)
                        finish(err);
                    else if (!queued) // can't be covered reliably
                        finish(null, self);
                    return;
                }
                process(filename, source);
            });
        }
    }
    var queued = 0;

    // Assembling the root namespace doesn't require working type
    // references anymore, so we can load everything in parallel
    if (util.isString(filename))
        filename = [ filename ];
    for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self.resolvePath("", filename[i]))
            fetch(resolved);

    if (sync)
        return self;
    if (!queued)
        finish(null, self);
    return undefined;
};
// function load(filename:string, options:IParseOptions, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Promise<Root>} Promise
 * @variation 3
 */
// function load(filename:string, [options:IParseOptions]):Promise<Root>

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
 * @function Root#loadSync
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 */
Root.prototype.loadSync = function loadSync(filename, options) {
    if (!util.isNode)
        throw Error("not supported");
    return this.load(filename, options, SYNC);
};

/**
 * @override
 */
Root.prototype.resolveAll = function resolveAll() {
    if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
    return Namespace.prototype.resolveAll.call(this);
};

// only uppercased (and thus conflict-free) children are exposed, see below
var exposeRe = /^[A-Z]/;

/**
 * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
 * @param {Root} root Root instance
 * @param {Field} field Declaring extension field witin the declaring type
 * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
 * @inner
 * @ignore
 */
function tryHandleExtension(root, field) {
    var extendedType = field.parent.lookup(field.extend);
    if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
    }
    return false;
}

/**
 * Called when any object is added to this root or its sub-namespaces.
 * @param {ReflectionObject} object Object added
 * @returns {undefined}
 * @private
 */
Root.prototype._handleAdd = function _handleAdd(object) {
    if (object instanceof Field) {

        if (/* an extension field (implies not part of a oneof) */ object.extend !== undefined && /* not already handled */ !object.extensionField)
            if (!tryHandleExtension(this, object))
                this.deferred.push(object);

    } else if (object instanceof Enum) {

        if (exposeRe.test(object.name))
            object.parent[object.name] = object.values; // expose enum values as property of its parent

    } else if (!(object instanceof OneOf)) /* everything else is a namespace */ {

        if (object instanceof Type) // Try to handle any deferred extensions
            for (var i = 0; i < this.deferred.length;)
                if (tryHandleExtension(this, this.deferred[i]))
                    this.deferred.splice(i, 1);
                else
                    ++i;
        for (var j = 0; j < /* initializes */ object.nestedArray.length; ++j) // recurse into the namespace
            this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
            object.parent[object.name] = object; // expose namespace as property of its parent
    }

    // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
    // properties of namespaces just like static code does. This allows using a .d.ts generated for
    // a static module with reflection-based solutions where the condition is met.
};

/**
 * Called when any object is removed from this root or its sub-namespaces.
 * @param {ReflectionObject} object Object removed
 * @returns {undefined}
 * @private
 */
Root.prototype._handleRemove = function _handleRemove(object) {
    if (object instanceof Field) {

        if (/* an extension field */ object.extend !== undefined) {
            if (/* already handled */ object.extensionField) { // remove its sister field
                object.extensionField.parent.remove(object.extensionField);
                object.extensionField = null;
            } else { // cancel the extension
                var index = this.deferred.indexOf(object);
                /* istanbul ignore else */
                if (index > -1)
                    this.deferred.splice(index, 1);
            }
        }

    } else if (object instanceof Enum) {

        if (exposeRe.test(object.name))
            delete object.parent[object.name]; // unexpose enum values

    } else if (object instanceof Namespace) {

        for (var i = 0; i < /* initializes */ object.nestedArray.length; ++i) // recurse into the namespace
            this._handleRemove(object._nestedArray[i]);

        if (exposeRe.test(object.name))
            delete object.parent[object.name]; // unexpose namespaces

    }
};

// Sets up cyclic dependencies (called in index-light)
Root._configure = function(Type_, parse_, common_) {
    Type   = Type_;
    parse  = parse_;
    common = common_;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/roots.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/roots.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/rpc.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/rpc.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/rpc/service.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/rpc/service.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/rpc/service.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/service.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/service.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

// extends Namespace
var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/namespace.js");
((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";

var Method = __webpack_require__(/*! ./method */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/method.js"),
    util   = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js"),
    rpc    = __webpack_require__(/*! ./rpc */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/rpc.js");

/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */
function Service(name, options) {
    Namespace.call(this, name, options);

    /**
     * Service methods.
     * @type {Object.<string,Method>}
     */
    this.methods = {}; // toJSON, marker

    /**
     * Cached methods as an array.
     * @type {Method[]|null}
     * @private
     */
    this._methodsArray = null;
}

/**
 * Service descriptor.
 * @interface IService
 * @extends INamespace
 * @property {Object.<string,IMethod>} methods Method descriptors
 */

/**
 * Constructs a service from a service descriptor.
 * @param {string} name Service name
 * @param {IService} json Service descriptor
 * @returns {Service} Created service
 * @throws {TypeError} If arguments are invalid
 */
Service.fromJSON = function fromJSON(name, json) {
    var service = new Service(name, json.options);
    /* istanbul ignore else */
    if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
            service.add(Method.fromJSON(names[i], json.methods[names[i]]));
    if (json.nested)
        service.addJSON(json.nested);
    service.comment = json.comment;
    return service;
};

/**
 * Converts this service to a service descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IService} Service descriptor
 */
Service.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options" , inherited && inherited.options || undefined,
        "methods" , Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */ {},
        "nested"  , inherited && inherited.nested || undefined,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Methods of this service as an array for iteration.
 * @name Service#methodsArray
 * @type {Method[]}
 * @readonly
 */
Object.defineProperty(Service.prototype, "methodsArray", {
    get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
    }
});

function clearCache(service) {
    service._methodsArray = null;
    return service;
}

/**
 * @override
 */
Service.prototype.get = function get(name) {
    return this.methods[name]
        || Namespace.prototype.get.call(this, name);
};

/**
 * @override
 */
Service.prototype.resolveAll = function resolveAll() {
    var methods = this.methodsArray;
    for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
    return Namespace.prototype.resolve.call(this);
};

/**
 * @override
 */
Service.prototype.add = function add(object) {

    /* istanbul ignore if */
    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);

    if (object instanceof Method) {
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
};

/**
 * @override
 */
Service.prototype.remove = function remove(object) {
    if (object instanceof Method) {

        /* istanbul ignore if */
        if (this.methods[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
};

/**
 * Creates a runtime service using the specified rpc implementation.
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
 */
Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
    var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
    for (var i = 0, method; i < /* initializes */ this.methodsArray.length; ++i) {
        var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
        rpcService[methodName] = util.codegen(["r","c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
            m: method,
            q: method.resolvedRequestType.ctor,
            s: method.resolvedResponseType.ctor
        });
    }
    return rpcService;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/tokenize.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/tokenize.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = tokenize;

var delimRe        = /[\s{}=;:[\],'"()<>]/g,
    stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
    stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;

var setCommentRe = /^ *[*/]+ */,
    setCommentAltRe = /^\s*\*?\/*/,
    setCommentSplitRe = /\n/g,
    whitespaceRe = /\s/,
    unescapeRe = /\\(.?)/g;

var unescapeMap = {
    "0": "\0",
    "r": "\r",
    "n": "\n",
    "t": "\t"
};

/**
 * Unescapes a string.
 * @param {string} str String to unescape
 * @returns {string} Unescaped string
 * @property {Object.<string,string>} map Special characters map
 * @memberof tokenize
 */
function unescape(str) {
    return str.replace(unescapeRe, function($0, $1) {
        switch ($1) {
            case "\\":
            case "":
                return $1;
            default:
                return unescapeMap[$1] || "";
        }
    });
}

tokenize.unescape = unescape;

/**
 * Gets the next token and advances.
 * @typedef TokenizerHandleNext
 * @type {function}
 * @returns {string|null} Next token or `null` on eof
 */

/**
 * Peeks for the next token.
 * @typedef TokenizerHandlePeek
 * @type {function}
 * @returns {string|null} Next token or `null` on eof
 */

/**
 * Pushes a token back to the stack.
 * @typedef TokenizerHandlePush
 * @type {function}
 * @param {string} token Token
 * @returns {undefined}
 */

/**
 * Skips the next token.
 * @typedef TokenizerHandleSkip
 * @type {function}
 * @param {string} expected Expected token
 * @param {boolean} [optional=false] If optional
 * @returns {boolean} Whether the token matched
 * @throws {Error} If the token didn't match and is not optional
 */

/**
 * Gets the comment on the previous line or, alternatively, the line comment on the specified line.
 * @typedef TokenizerHandleCmnt
 * @type {function}
 * @param {number} [line] Line number
 * @returns {string|null} Comment text or `null` if none
 */

/**
 * Handle object returned from {@link tokenize}.
 * @interface ITokenizerHandle
 * @property {TokenizerHandleNext} next Gets the next token and advances (`null` on eof)
 * @property {TokenizerHandlePeek} peek Peeks for the next token (`null` on eof)
 * @property {TokenizerHandlePush} push Pushes a token back to the stack
 * @property {TokenizerHandleSkip} skip Skips a token, returns its presence and advances or, if non-optional and not present, throws
 * @property {TokenizerHandleCmnt} cmnt Gets the comment on the previous line or the line comment on the specified line, if any
 * @property {number} line Current line number
 */

/**
 * Tokenizes the given .proto source and returns an object with useful utility functions.
 * @param {string} source Source contents
 * @param {boolean} alternateCommentMode Whether we should activate alternate comment parsing mode.
 * @returns {ITokenizerHandle} Tokenizer handle
 */
function tokenize(source, alternateCommentMode) {
    /* eslint-disable callback-return */
    source = source.toString();

    var offset = 0,
        length = source.length,
        line = 1,
        commentType = null,
        commentText = null,
        commentLine = 0,
        commentLineEmpty = false;

    var stack = [];

    var stringDelim = null;

    /* istanbul ignore next */
    /**
     * Creates an error for illegal syntax.
     * @param {string} subject Subject
     * @returns {Error} Error created
     * @inner
     */
    function illegal(subject) {
        return Error("illegal " + subject + " (line " + line + ")");
    }

    /**
     * Reads a string till its end.
     * @returns {string} String read
     * @inner
     */
    function readString() {
        var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
        re.lastIndex = offset - 1;
        var match = re.exec(source);
        if (!match)
            throw illegal("string");
        offset = re.lastIndex;
        push(stringDelim);
        stringDelim = null;
        return unescape(match[1]);
    }

    /**
     * Gets the character at `pos` within the source.
     * @param {number} pos Position
     * @returns {string} Character
     * @inner
     */
    function charAt(pos) {
        return source.charAt(pos);
    }

    /**
     * Sets the current comment text.
     * @param {number} start Start offset
     * @param {number} end End offset
     * @returns {undefined}
     * @inner
     */
    function setComment(start, end) {
        commentType = source.charAt(start++);
        commentLine = line;
        commentLineEmpty = false;
        var lookback;
        if (alternateCommentMode) {
            lookback = 2;  // alternate comment parsing: "//" or "/*"
        } else {
            lookback = 3;  // "///" or "/**"
        }
        var commentOffset = start - lookback,
            c;
        do {
            if (--commentOffset < 0 ||
                    (c = source.charAt(commentOffset)) === "\n") {
                commentLineEmpty = true;
                break;
            }
        } while (c === " " || c === "\t");
        var lines = source
            .substring(start, end)
            .split(setCommentSplitRe);
        for (var i = 0; i < lines.length; ++i)
            lines[i] = lines[i]
                .replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "")
                .trim();
        commentText = lines
            .join("\n")
            .trim();
    }

    function isDoubleSlashCommentLine(startOffset) {
        var endOffset = findEndOfLine(startOffset);

        // see if remaining line matches comment pattern
        var lineText = source.substring(startOffset, endOffset);
        // look for 1 or 2 slashes since startOffset would already point past
        // the first slash that started the comment.
        var isComment = /^\s*\/{1,2}/.test(lineText);
        return isComment;
    }

    function findEndOfLine(cursor) {
        // find end of cursor's line
        var endOffset = cursor;
        while (endOffset < length && charAt(endOffset) !== "\n") {
            endOffset++;
        }
        return endOffset;
    }

    /**
     * Obtains the next token.
     * @returns {string|null} Next token or `null` on eof
     * @inner
     */
    function next() {
        if (stack.length > 0)
            return stack.shift();
        if (stringDelim)
            return readString();
        var repeat,
            prev,
            curr,
            start,
            isDoc;
        do {
            if (offset === length)
                return null;
            repeat = false;
            while (whitespaceRe.test(curr = charAt(offset))) {
                if (curr === "\n")
                    ++line;
                if (++offset === length)
                    return null;
            }

            if (charAt(offset) === "/") {
                if (++offset === length) {
                    throw illegal("comment");
                }
                if (charAt(offset) === "/") { // Line
                    if (!alternateCommentMode) {
                        // check for triple-slash comment
                        isDoc = charAt(start = offset + 1) === "/";

                        while (charAt(++offset) !== "\n") {
                            if (offset === length) {
                                return null;
                            }
                        }
                        ++offset;
                        if (isDoc) {
                            setComment(start, offset - 1);
                        }
                        ++line;
                        repeat = true;
                    } else {
                        // check for double-slash comments, consolidating consecutive lines
                        start = offset;
                        isDoc = false;
                        if (isDoubleSlashCommentLine(offset)) {
                            isDoc = true;
                            do {
                                offset = findEndOfLine(offset);
                                if (offset === length) {
                                    break;
                                }
                                offset++;
                            } while (isDoubleSlashCommentLine(offset));
                        } else {
                            offset = Math.min(length, findEndOfLine(offset) + 1);
                        }
                        if (isDoc) {
                            setComment(start, offset);
                        }
                        line++;
                        repeat = true;
                    }
                } else if ((curr = charAt(offset)) === "*") { /* Block */
                    // check for /** (regular comment mode) or /* (alternate comment mode)
                    start = offset + 1;
                    isDoc = alternateCommentMode || charAt(start) === "*";
                    do {
                        if (curr === "\n") {
                            ++line;
                        }
                        if (++offset === length) {
                            throw illegal("comment");
                        }
                        prev = curr;
                        curr = charAt(offset);
                    } while (prev !== "*" || curr !== "/");
                    ++offset;
                    if (isDoc) {
                        setComment(start, offset - 2);
                    }
                    repeat = true;
                } else {
                    return "/";
                }
            }
        } while (repeat);

        // offset !== length if we got here

        var end = offset;
        delimRe.lastIndex = 0;
        var delim = delimRe.test(charAt(end++));
        if (!delim)
            while (end < length && !delimRe.test(charAt(end)))
                ++end;
        var token = source.substring(offset, offset = end);
        if (token === "\"" || token === "'")
            stringDelim = token;
        return token;
    }

    /**
     * Pushes a token back to the stack.
     * @param {string} token Token
     * @returns {undefined}
     * @inner
     */
    function push(token) {
        stack.push(token);
    }

    /**
     * Peeks for the next token.
     * @returns {string|null} Token or `null` on eof
     * @inner
     */
    function peek() {
        if (!stack.length) {
            var token = next();
            if (token === null)
                return null;
            push(token);
        }
        return stack[0];
    }

    /**
     * Skips a token.
     * @param {string} expected Expected token
     * @param {boolean} [optional=false] Whether the token is optional
     * @returns {boolean} `true` when skipped, `false` if not
     * @throws {Error} When a required token is not present
     * @inner
     */
    function skip(expected, optional) {
        var actual = peek(),
            equals = actual === expected;
        if (equals) {
            next();
            return true;
        }
        if (!optional)
            throw illegal("token '" + actual + "', '" + expected + "' expected");
        return false;
    }

    /**
     * Gets a comment.
     * @param {number} [trailingLine] Line number if looking for a trailing comment
     * @returns {string|null} Comment text
     * @inner
     */
    function cmnt(trailingLine) {
        var ret = null;
        if (trailingLine === undefined) {
            if (commentLine === line - 1 && (alternateCommentMode || commentType === "*" || commentLineEmpty)) {
                ret = commentText;
            }
        } else {
            /* istanbul ignore else */
            if (commentLine < trailingLine) {
                peek();
            }
            if (commentLine === trailingLine && !commentLineEmpty && (alternateCommentMode || commentType === "/")) {
                ret = commentText;
            }
        }
        return ret;
    }

    return Object.defineProperty({
        next: next,
        peek: peek,
        push: push,
        skip: skip,
        cmnt: cmnt
    }, "line", {
        get: function() { return line; }
    });
    /* eslint-enable callback-return */
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/type.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/type.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Type;

// extends Namespace
var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/namespace.js");
((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";

var Enum      = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js"),
    OneOf     = __webpack_require__(/*! ./oneof */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/oneof.js"),
    Field     = __webpack_require__(/*! ./field */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/field.js"),
    MapField  = __webpack_require__(/*! ./mapfield */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/mapfield.js"),
    Service   = __webpack_require__(/*! ./service */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/service.js"),
    Message   = __webpack_require__(/*! ./message */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/message.js"),
    Reader    = __webpack_require__(/*! ./reader */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/reader.js"),
    Writer    = __webpack_require__(/*! ./writer */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/writer.js"),
    util      = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js"),
    encoder   = __webpack_require__(/*! ./encoder */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/encoder.js"),
    decoder   = __webpack_require__(/*! ./decoder */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/decoder.js"),
    verifier  = __webpack_require__(/*! ./verifier */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/verifier.js"),
    converter = __webpack_require__(/*! ./converter */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/converter.js"),
    wrappers  = __webpack_require__(/*! ./wrappers */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/wrappers.js");

/**
 * Constructs a new reflected message type instance.
 * @classdesc Reflected message type.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Message name
 * @param {Object.<string,*>} [options] Declared options
 */
function Type(name, options) {
    Namespace.call(this, name, options);

    /**
     * Message fields.
     * @type {Object.<string,Field>}
     */
    this.fields = {};  // toJSON, marker

    /**
     * Oneofs declared within this namespace, if any.
     * @type {Object.<string,OneOf>}
     */
    this.oneofs = undefined; // toJSON

    /**
     * Extension ranges, if any.
     * @type {number[][]}
     */
    this.extensions = undefined; // toJSON

    /**
     * Reserved ranges, if any.
     * @type {Array.<number[]|string>}
     */
    this.reserved = undefined; // toJSON

    /*?
     * Whether this type is a legacy group.
     * @type {boolean|undefined}
     */
    this.group = undefined; // toJSON

    /**
     * Cached fields by id.
     * @type {Object.<number,Field>|null}
     * @private
     */
    this._fieldsById = null;

    /**
     * Cached fields as an array.
     * @type {Field[]|null}
     * @private
     */
    this._fieldsArray = null;

    /**
     * Cached oneofs as an array.
     * @type {OneOf[]|null}
     * @private
     */
    this._oneofsArray = null;

    /**
     * Cached constructor.
     * @type {Constructor<{}>}
     * @private
     */
    this._ctor = null;
}

Object.defineProperties(Type.prototype, {

    /**
     * Message fields by id.
     * @name Type#fieldsById
     * @type {Object.<number,Field>}
     * @readonly
     */
    fieldsById: {
        get: function() {

            /* istanbul ignore if */
            if (this._fieldsById)
                return this._fieldsById;

            this._fieldsById = {};
            for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
                var field = this.fields[names[i]],
                    id = field.id;

                /* istanbul ignore if */
                if (this._fieldsById[id])
                    throw Error("duplicate id " + id + " in " + this);

                this._fieldsById[id] = field;
            }
            return this._fieldsById;
        }
    },

    /**
     * Fields of this message as an array for iteration.
     * @name Type#fieldsArray
     * @type {Field[]}
     * @readonly
     */
    fieldsArray: {
        get: function() {
            return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
    },

    /**
     * Oneofs of this message as an array for iteration.
     * @name Type#oneofsArray
     * @type {OneOf[]}
     * @readonly
     */
    oneofsArray: {
        get: function() {
            return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
    },

    /**
     * The registered constructor, if any registered, otherwise a generic constructor.
     * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
     * @name Type#ctor
     * @type {Constructor<{}>}
     */
    ctor: {
        get: function() {
            return this._ctor || (this.ctor = Type.generateConstructor(this)());
        },
        set: function(ctor) {

            // Ensure proper prototype
            var prototype = ctor.prototype;
            if (!(prototype instanceof Message)) {
                (ctor.prototype = new Message()).constructor = ctor;
                util.merge(ctor.prototype, prototype);
            }

            // Classes and messages reference their reflected type
            ctor.$type = ctor.prototype.$type = this;

            // Mix in static methods
            util.merge(ctor, Message, true);

            this._ctor = ctor;

            // Messages have non-enumerable default values on their prototype
            var i = 0;
            for (; i < /* initializes */ this.fieldsArray.length; ++i)
                this._fieldsArray[i].resolve(); // ensures a proper value

            // Messages have non-enumerable getters and setters for each virtual oneof field
            var ctorProperties = {};
            for (i = 0; i < /* initializes */ this.oneofsArray.length; ++i)
                ctorProperties[this._oneofsArray[i].resolve().name] = {
                    get: util.oneOfGetter(this._oneofsArray[i].oneof),
                    set: util.oneOfSetter(this._oneofsArray[i].oneof)
                };
            if (i)
                Object.defineProperties(ctor.prototype, ctorProperties);
        }
    }
});

/**
 * Generates a constructor function for the specified type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
Type.generateConstructor = function generateConstructor(mtype) {
    /* eslint-disable no-unexpected-multiline */
    var gen = util.codegen(["p"], mtype.name);
    // explicitly initialize mutable object/array fields so that these aren't just inherited from the prototype
    for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
        if ((field = mtype._fieldsArray[i]).map) gen
            ("this%s={}", util.safeProp(field.name));
        else if (field.repeated) gen
            ("this%s=[]", util.safeProp(field.name));
    return gen
    ("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)") // omit undefined or null
        ("this[ks[i]]=p[ks[i]]");
    /* eslint-enable no-unexpected-multiline */
};

function clearCache(type) {
    type._fieldsById = type._fieldsArray = type._oneofsArray = null;
    delete type.encode;
    delete type.decode;
    delete type.verify;
    return type;
}

/**
 * Message type descriptor.
 * @interface IType
 * @extends INamespace
 * @property {Object.<string,IOneOf>} [oneofs] Oneof descriptors
 * @property {Object.<string,IField>} fields Field descriptors
 * @property {number[][]} [extensions] Extension ranges
 * @property {number[][]} [reserved] Reserved ranges
 * @property {boolean} [group=false] Whether a legacy group or not
 */

/**
 * Creates a message type from a message type descriptor.
 * @param {string} name Message name
 * @param {IType} json Message type descriptor
 * @returns {Type} Created message type
 */
Type.fromJSON = function fromJSON(name, json) {
    var type = new Type(name, json.options);
    type.extensions = json.extensions;
    type.reserved = json.reserved;
    var names = Object.keys(json.fields),
        i = 0;
    for (; i < names.length; ++i)
        type.add(
            ( typeof json.fields[names[i]].keyType !== "undefined"
            ? MapField.fromJSON
            : Field.fromJSON )(names[i], json.fields[names[i]])
        );
    if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
            type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
    if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
            var nested = json.nested[names[i]];
            type.add( // most to least likely
                ( nested.id !== undefined
                ? Field.fromJSON
                : nested.fields !== undefined
                ? Type.fromJSON
                : nested.values !== undefined
                ? Enum.fromJSON
                : nested.methods !== undefined
                ? Service.fromJSON
                : Namespace.fromJSON )(names[i], nested)
            );
        }
    if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
    if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
    if (json.group)
        type.group = true;
    if (json.comment)
        type.comment = json.comment;
    return type;
};

/**
 * Converts this message type to a message type descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IType} Message type descriptor
 */
Type.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options"    , inherited && inherited.options || undefined,
        "oneofs"     , Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
        "fields"     , Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) { return !obj.declaringField; }), toJSONOptions) || {},
        "extensions" , this.extensions && this.extensions.length ? this.extensions : undefined,
        "reserved"   , this.reserved && this.reserved.length ? this.reserved : undefined,
        "group"      , this.group || undefined,
        "nested"     , inherited && inherited.nested || undefined,
        "comment"    , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
Type.prototype.resolveAll = function resolveAll() {
    var fields = this.fieldsArray, i = 0;
    while (i < fields.length)
        fields[i++].resolve();
    var oneofs = this.oneofsArray; i = 0;
    while (i < oneofs.length)
        oneofs[i++].resolve();
    return Namespace.prototype.resolveAll.call(this);
};

/**
 * @override
 */
Type.prototype.get = function get(name) {
    return this.fields[name]
        || this.oneofs && this.oneofs[name]
        || this.nested && this.nested[name]
        || null;
};

/**
 * Adds a nested object to this type.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
 */
Type.prototype.add = function add(object) {

    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);

    if (object instanceof Field && object.extend === undefined) {
        // NOTE: Extension fields aren't actual fields on the declaring type, but nested objects.
        // The root object takes care of adding distinct sister-fields to the respective extended
        // type instead.

        // avoids calling the getter if not absolutely necessary because it's called quite frequently
        if (this._fieldsById ? /* istanbul ignore next */ this._fieldsById[object.id] : this.fieldsById[object.id])
            throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
            throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name))
            throw Error("name '" + object.name + "' is reserved in " + this);

        if (object.parent)
            object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
    }
    if (object instanceof OneOf) {
        if (!this.oneofs)
            this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
};

/**
 * Removes a nested object from this type.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this type
 */
Type.prototype.remove = function remove(object) {
    if (object instanceof Field && object.extend === undefined) {
        // See Type#add for the reason why extension fields are excluded here.

        /* istanbul ignore if */
        if (!this.fields || this.fields[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
    }
    if (object instanceof OneOf) {

        /* istanbul ignore if */
        if (!this.oneofs || this.oneofs[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
};

/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Type.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
};

/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Type.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
};

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<{}>} Message instance
 */
Type.prototype.create = function create(properties) {
    return new this.ctor(properties);
};

/**
 * Sets up {@link Type#encode|encode}, {@link Type#decode|decode} and {@link Type#verify|verify}.
 * @returns {Type} `this`
 */
Type.prototype.setup = function setup() {
    // Sets up everything at once so that the prototype chain does not have to be re-evaluated
    // multiple times (V8, soft-deopt prototype-check).

    var fullName = this.fullName,
        types    = [];
    for (var i = 0; i < /* initializes */ this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);

    // Replace setup methods with type-specific generated functions
    this.encode = encoder(this)({
        Writer : Writer,
        types  : types,
        util   : util
    });
    this.decode = decoder(this)({
        Reader : Reader,
        types  : types,
        util   : util
    });
    this.verify = verifier(this)({
        types : types,
        util  : util
    });
    this.fromObject = converter.fromObject(this)({
        types : types,
        util  : util
    });
    this.toObject = converter.toObject(this)({
        types : types,
        util  : util
    });

    // Inject custom wrappers for common types
    var wrapper = wrappers[fullName];
    if (wrapper) {
        var originalThis = Object.create(this);
        // if (wrapper.fromObject) {
            originalThis.fromObject = this.fromObject;
            this.fromObject = wrapper.fromObject.bind(originalThis);
        // }
        // if (wrapper.toObject) {
            originalThis.toObject = this.toObject;
            this.toObject = wrapper.toObject.bind(originalThis);
        // }
    }

    return this;
};

/**
 * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */
Type.prototype.encode = function encode_setup(message, writer) {
    return this.setup().encode(message, writer); // overrides this method
};

/**
 * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */
Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
};

/**
 * Decodes a message of this type.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @param {number} [length] Length of the message, if known beforehand
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError<{}>} If required fields are missing
 */
Type.prototype.decode = function decode_setup(reader, length) {
    return this.setup().decode(reader, length); // overrides this method
};

/**
 * Decodes a message of this type preceeded by its byte length as a varint.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError} If required fields are missing
 */
Type.prototype.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof Reader))
        reader = Reader.create(reader);
    return this.decode(reader, reader.uint32());
};

/**
 * Verifies that field values are valid and that required fields are present.
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {null|string} `null` if valid, otherwise the reason why it is not
 */
Type.prototype.verify = function verify_setup(message) {
    return this.setup().verify(message); // overrides this method
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object to convert
 * @returns {Message<{}>} Message instance
 */
Type.prototype.fromObject = function fromObject(object) {
    return this.setup().fromObject(object);
};

/**
 * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
 * @interface IConversionOptions
 * @property {Function} [longs] Long conversion type.
 * Valid values are `String` and `Number` (the global types).
 * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
 * @property {Function} [enums] Enum value conversion type.
 * Only valid value is `String` (the global type).
 * Defaults to copy the present value, which is the numeric id.
 * @property {Function} [bytes] Bytes value conversion type.
 * Valid values are `Array` and (a base64 encoded) `String` (the global types).
 * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
 * @property {boolean} [defaults=false] Also sets default values on the resulting object
 * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
 * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
 * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
 * @property {boolean} [json=false] Performs additional JSON compatibility conversions, i.e. NaN and Infinity to strings
 */

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */
Type.prototype.toObject = function toObject(message, options) {
    return this.setup().toObject(message, options);
};

/**
 * Decorator function as returned by {@link Type.d} (TypeScript).
 * @typedef TypeDecorator
 * @type {function}
 * @param {Constructor<T>} target Target constructor
 * @returns {undefined}
 * @template T extends Message<T>
 */

/**
 * Type decorator (TypeScript).
 * @param {string} [typeName] Type name, defaults to the constructor's name
 * @returns {TypeDecorator<T>} Decorator function
 * @template T extends Message<T>
 */
Type.d = function decorateType(typeName) {
    return function typeDecorator(target) {
        util.decorateType(target, typeName);
    };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/types.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/types.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Common type constants.
 * @namespace
 */
var types = exports;

var util = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

var s = [
    "double",   // 0
    "float",    // 1
    "int32",    // 2
    "uint32",   // 3
    "sint32",   // 4
    "fixed32",  // 5
    "sfixed32", // 6
    "int64",    // 7
    "uint64",   // 8
    "sint64",   // 9
    "fixed64",  // 10
    "sfixed64", // 11
    "bool",     // 12
    "string",   // 13
    "bytes"     // 14
];

function bake(values, offset) {
    var i = 0, o = {};
    offset |= 0;
    while (i < values.length) o[s[i + offset]] = values[i++];
    return o;
}

/**
 * Basic type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 * @property {number} bytes=2 Ldelim wire type
 */
types.basic = bake([
    /* double   */ 1,
    /* float    */ 5,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0,
    /* string   */ 2,
    /* bytes    */ 2
]);

/**
 * Basic type defaults.
 * @type {Object.<string,*>}
 * @const
 * @property {number} double=0 Double default
 * @property {number} float=0 Float default
 * @property {number} int32=0 Int32 default
 * @property {number} uint32=0 Uint32 default
 * @property {number} sint32=0 Sint32 default
 * @property {number} fixed32=0 Fixed32 default
 * @property {number} sfixed32=0 Sfixed32 default
 * @property {number} int64=0 Int64 default
 * @property {number} uint64=0 Uint64 default
 * @property {number} sint64=0 Sint32 default
 * @property {number} fixed64=0 Fixed64 default
 * @property {number} sfixed64=0 Sfixed64 default
 * @property {boolean} bool=false Bool default
 * @property {string} string="" String default
 * @property {Array.<number>} bytes=Array(0) Bytes default
 * @property {null} message=null Message default
 */
types.defaults = bake([
    /* double   */ 0,
    /* float    */ 0,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 0,
    /* sfixed32 */ 0,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 0,
    /* sfixed64 */ 0,
    /* bool     */ false,
    /* string   */ "",
    /* bytes    */ util.emptyArray,
    /* message  */ null
]);

/**
 * Basic long type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 */
types.long = bake([
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1
], 7);

/**
 * Allowed types for map keys with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 */
types.mapKey = bake([
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0,
    /* string   */ 2
], 2);

/**
 * Allowed types for packed repeated fields with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 */
types.packed = bake([
    /* double   */ 1,
    /* float    */ 5,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0
]);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Various utility functions.
 * @namespace
 */
var util = module.exports = __webpack_require__(/*! ./util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");

var roots = __webpack_require__(/*! ./roots */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/roots.js");

var Type, // cyclic
    Enum;

util.codegen = __webpack_require__(/*! @protobufjs/codegen */ "./node_modules/.registry.npmjs.org/@protobufjs/codegen/2.0.4/node_modules/@protobufjs/codegen/index.js");
util.fetch   = __webpack_require__(/*! @protobufjs/fetch */ "./node_modules/.registry.npmjs.org/@protobufjs/fetch/1.1.0/node_modules/@protobufjs/fetch/index.js");
util.path    = __webpack_require__(/*! @protobufjs/path */ "./node_modules/.registry.npmjs.org/@protobufjs/path/1.1.2/node_modules/@protobufjs/path/index.js");

/**
 * Node's fs module if available.
 * @type {Object.<string,*>}
 */
util.fs = util.inquire("fs");

/**
 * Converts an object's values to an array.
 * @param {Object.<string,*>} object Object to convert
 * @returns {Array.<*>} Converted array
 */
util.toArray = function toArray(object) {
    if (object) {
        var keys  = Object.keys(object),
            array = new Array(keys.length),
            index = 0;
        while (index < keys.length)
            array[index] = object[keys[index++]];
        return array;
    }
    return [];
};

/**
 * Converts an array of keys immediately followed by their respective value to an object, omitting undefined values.
 * @param {Array.<*>} array Array to convert
 * @returns {Object.<string,*>} Converted object
 */
util.toObject = function toObject(array) {
    var object = {},
        index  = 0;
    while (index < array.length) {
        var key = array[index++],
            val = array[index++];
        if (val !== undefined)
            object[key] = val;
    }
    return object;
};

var safePropBackslashRe = /\\/g,
    safePropQuoteRe     = /"/g;

/**
 * Tests whether the specified name is a reserved word in JS.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
util.isReserved = function isReserved(name) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
};

/**
 * Returns a safe property accessor for the specified property name.
 * @param {string} prop Property name
 * @returns {string} Safe accessor
 */
util.safeProp = function safeProp(prop) {
    if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
        return "[\"" + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + "\"]";
    return "." + prop;
};

/**
 * Converts the first character of a string to upper case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.ucFirst = function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
};

var camelCaseRe = /_([a-z])/g;

/**
 * Converts a string to camel case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.camelCase = function camelCase(str) {
    return str.substring(0, 1)
         + str.substring(1)
               .replace(camelCaseRe, function($0, $1) { return $1.toUpperCase(); });
};

/**
 * Compares reflected fields by id.
 * @param {Field} a First field
 * @param {Field} b Second field
 * @returns {number} Comparison value
 */
util.compareFieldsById = function compareFieldsById(a, b) {
    return a.id - b.id;
};

/**
 * Decorator helper for types (TypeScript).
 * @param {Constructor<T>} ctor Constructor function
 * @param {string} [typeName] Type name, defaults to the constructor's name
 * @returns {Type} Reflected type
 * @template T extends Message<T>
 * @property {Root} root Decorators root
 */
util.decorateType = function decorateType(ctor, typeName) {

    /* istanbul ignore if */
    if (ctor.$type) {
        if (typeName && ctor.$type.name !== typeName) {
            util.decorateRoot.remove(ctor.$type);
            ctor.$type.name = typeName;
            util.decorateRoot.add(ctor.$type);
        }
        return ctor.$type;
    }

    /* istanbul ignore next */
    if (!Type)
        Type = __webpack_require__(/*! ./type */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/type.js");

    var type = new Type(typeName || ctor.name);
    util.decorateRoot.add(type);
    type.ctor = ctor; // sets up .encode, .decode etc.
    Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
    Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
    return type;
};

var decorateEnumIndex = 0;

/**
 * Decorator helper for enums (TypeScript).
 * @param {Object} object Enum object
 * @returns {Enum} Reflected enum
 */
util.decorateEnum = function decorateEnum(object) {

    /* istanbul ignore if */
    if (object.$type)
        return object.$type;

    /* istanbul ignore next */
    if (!Enum)
        Enum = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js");

    var enm = new Enum("Enum" + decorateEnumIndex++, object);
    util.decorateRoot.add(enm);
    Object.defineProperty(object, "$type", { value: enm, enumerable: false });
    return enm;
};

/**
 * Decorator root (TypeScript).
 * @name util.decorateRoot
 * @type {Root}
 * @readonly
 */
Object.defineProperty(util, "decorateRoot", {
    get: function() {
        return roots["decorated"] || (roots["decorated"] = new (__webpack_require__(/*! ./root */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/root.js"))());
    }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/longbits.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/longbits.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "./node_modules/.registry.npmjs.org/@protobufjs/aspromise/1.1.2/node_modules/@protobufjs/aspromise/index.js");

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(/*! @protobufjs/base64 */ "./node_modules/.registry.npmjs.org/@protobufjs/base64/1.1.2/node_modules/@protobufjs/base64/index.js");

// base class of rpc.Service
util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ "./node_modules/.registry.npmjs.org/@protobufjs/eventemitter/1.1.0/node_modules/@protobufjs/eventemitter/index.js");

// float handling accross browsers
util.float = __webpack_require__(/*! @protobufjs/float */ "./node_modules/.registry.npmjs.org/@protobufjs/float/1.0.2/node_modules/@protobufjs/float/index.js");

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(/*! @protobufjs/inquire */ "./node_modules/.registry.npmjs.org/@protobufjs/inquire/1.1.0/node_modules/@protobufjs/inquire/index.js");

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ "./node_modules/.registry.npmjs.org/@protobufjs/utf8/1.1.0/node_modules/@protobufjs/utf8/index.js");

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(/*! @protobufjs/pool */ "./node_modules/.registry.npmjs.org/@protobufjs/pool/1.1.0/node_modules/@protobufjs/pool/index.js");

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(/*! ./longbits */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/longbits.js");

// global object reference
util.global = typeof window !== "undefined" && window
           || typeof global !== "undefined" && global
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: (new Error()).stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/4.23.1/node_modules/webpack/buildin/global.js */ "./node_modules/.registry.npmjs.org/webpack/4.23.1/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/verifier.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/verifier.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = verifier;

var Enum      = __webpack_require__(/*! ./enum */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/enum.js"),
    util      = __webpack_require__(/*! ./util */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util.js");

function invalid(field, expected) {
    return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:"+field.keyType+"}" : "") + " expected";
}

/**
 * Generates a partial value verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genVerifyValue(gen, field, fieldIndex, ref) {
    /* eslint-disable no-unexpected-multiline */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) { gen
            ("switch(%s){", ref)
                ("default:")
                    ("return%j", invalid(field, "enum value"));
            for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen
                ("case %i:", field.resolvedType.values[keys[j]]);
            gen
                    ("break")
            ("}");
        } else {
            gen
            ("{")
                ("var e=types[%i].verify(%s);", fieldIndex, ref)
                ("if(e)")
                    ("return%j+e", field.name + ".")
            ("}");
        }
    } else {
        switch (field.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32": gen
                ("if(!util.isInteger(%s))", ref)
                    ("return%j", invalid(field, "integer"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
                ("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)
                    ("return%j", invalid(field, "integer|Long"));
                break;
            case "float":
            case "double": gen
                ("if(typeof %s!==\"number\")", ref)
                    ("return%j", invalid(field, "number"));
                break;
            case "bool": gen
                ("if(typeof %s!==\"boolean\")", ref)
                    ("return%j", invalid(field, "boolean"));
                break;
            case "string": gen
                ("if(!util.isString(%s))", ref)
                    ("return%j", invalid(field, "string"));
                break;
            case "bytes": gen
                ("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", ref, ref, ref)
                    ("return%j", invalid(field, "buffer"));
                break;
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline */
}

/**
 * Generates a partial key verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genVerifyKey(gen, field, ref) {
    /* eslint-disable no-unexpected-multiline */
    switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32": gen
            ("if(!util.key32Re.test(%s))", ref)
                ("return%j", invalid(field, "integer key"));
            break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64": gen
            ("if(!util.key64Re.test(%s))", ref) // see comment above: x is ok, d is not
                ("return%j", invalid(field, "integer|Long key"));
            break;
        case "bool": gen
            ("if(!util.key2Re.test(%s))", ref)
                ("return%j", invalid(field, "boolean key"));
            break;
    }
    return gen;
    /* eslint-enable no-unexpected-multiline */
}

/**
 * Generates a verifier specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function verifier(mtype) {
    /* eslint-disable no-unexpected-multiline */

    var gen = util.codegen(["m"], mtype.name + "$verify")
    ("if(typeof m!==\"object\"||m===null)")
        ("return%j", "object expected");
    var oneofs = mtype.oneofsArray,
        seenFirstField = {};
    if (oneofs.length) gen
    ("var p={}");

    for (var i = 0; i < /* initializes */ mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            ref   = "m" + util.safeProp(field.name);

        if (field.optional) gen
        ("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name); // !== undefined && !== null

        // map fields
        if (field.map) { gen
            ("if(!util.isObject(%s))", ref)
                ("return%j", invalid(field, "object"))
            ("var k=Object.keys(%s)", ref)
            ("for(var i=0;i<k.length;++i){");
                genVerifyKey(gen, field, "k[i]");
                genVerifyValue(gen, field, i, ref + "[k[i]]")
            ("}");

        // repeated fields
        } else if (field.repeated) { gen
            ("if(!Array.isArray(%s))", ref)
                ("return%j", invalid(field, "array"))
            ("for(var i=0;i<%s.length;++i){", ref);
                genVerifyValue(gen, field, i, ref + "[i]")
            ("}");

        // required or present fields
        } else {
            if (field.partOf) {
                var oneofProp = util.safeProp(field.partOf.name);
                if (seenFirstField[field.partOf.name] === 1) gen
            ("if(p%s===1)", oneofProp)
                ("return%j", field.partOf.name + ": multiple values");
                seenFirstField[field.partOf.name] = 1;
                gen
            ("p%s=1", oneofProp);
            }
            genVerifyValue(gen, field, i, ref);
        }
        if (field.optional) gen
        ("}");
    }
    return gen
    ("return null");
    /* eslint-enable no-unexpected-multiline */
}

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/wrappers.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/wrappers.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Wrappers for common types.
 * @type {Object.<string,IWrapper>}
 * @const
 */
var wrappers = exports;

var Message = __webpack_require__(/*! ./message */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/message.js");

/**
 * From object converter part of an {@link IWrapper}.
 * @typedef WrapperFromObjectConverter
 * @type {function}
 * @param {Object.<string,*>} object Plain object
 * @returns {Message<{}>} Message instance
 * @this Type
 */

/**
 * To object converter part of an {@link IWrapper}.
 * @typedef WrapperToObjectConverter
 * @type {function}
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @this Type
 */

/**
 * Common type wrapper part of {@link wrappers}.
 * @interface IWrapper
 * @property {WrapperFromObjectConverter} [fromObject] From object converter
 * @property {WrapperToObjectConverter} [toObject] To object converter
 */

// Custom wrapper for Any
wrappers[".google.protobuf.Any"] = {

    fromObject: function(object) {

        // unwrap value type if mapped
        if (object && object["@type"]) {
            var type = this.lookup(object["@type"]);
            /* istanbul ignore else */
            if (type) {
                // type_url does not accept leading "."
                var type_url = object["@type"].charAt(0) === "." ?
                    object["@type"].substr(1) : object["@type"];
                // type_url prefix is optional, but path seperator is required
                return this.create({
                    type_url: "/" + type_url,
                    value: type.encode(type.fromObject(object)).finish()
                });
            }
        }

        return this.fromObject(object);
    },

    toObject: function(message, options) {

        // decode value if requested and unmapped
        if (options && options.json && message.type_url && message.value) {
            // Only use fully qualified type name after the last '/'
            var name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
            var type = this.lookup(name);
            /* istanbul ignore else */
            if (type)
                message = type.decode(message.value);
        }

        // wrap value if unmapped
        if (!(message instanceof this.ctor) && message instanceof Message) {
            var object = message.$type.toObject(message, options);
            object["@type"] = message.$type.fullName;
            return object;
        }

        return this.toObject(message, options);
    }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/writer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/writer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = util.Buffer
    ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/writer_buffer.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/writer_buffer.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(/*! ./writer */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/writer.js");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/.registry.npmjs.org/protobufjs/6.8.8/node_modules/protobufjs/src/util/minimal.js");

var Buffer = util.Buffer;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Buffer} Buffer
 */
BufferWriter.alloc = function alloc_buffer(size) {
    return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
};

var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
    ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
                           // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
    };

/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else
        buf.utf8Write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/webpack/4.23.1/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQG5vaWEtbmV0d29yay9zZGsvMi4wLjAtYmV0YS40L25vZGVfbW9kdWxlcy9Abm9pYS1uZXR3b3JrL3Nkay9kaXN0L2NsaWVudHMvcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQG5vaWEtbmV0d29yay9zZGsvMi4wLjAtYmV0YS40L25vZGVfbW9kdWxlcy9Abm9pYS1uZXR3b3JrL3Nkay9kaXN0L3dvcmtlcnMvcGllY2VzLXdvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9Abm9pYS1uZXR3b3JrL3Nkay8yLjAuMC1iZXRhLjQvbm9kZV9tb2R1bGVzL0Bub2lhLW5ldHdvcmsvc2RrL3dvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AcHJvdG9idWZqcy9hc3Byb21pc2UvMS4xLjIvbm9kZV9tb2R1bGVzL0Bwcm90b2J1ZmpzL2FzcHJvbWlzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AcHJvdG9idWZqcy9iYXNlNjQvMS4xLjIvbm9kZV9tb2R1bGVzL0Bwcm90b2J1ZmpzL2Jhc2U2NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AcHJvdG9idWZqcy9jb2RlZ2VuLzIuMC40L25vZGVfbW9kdWxlcy9AcHJvdG9idWZqcy9jb2RlZ2VuL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0Bwcm90b2J1ZmpzL2V2ZW50ZW1pdHRlci8xLjEuMC9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvZXZlbnRlbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0Bwcm90b2J1ZmpzL2ZldGNoLzEuMS4wL25vZGVfbW9kdWxlcy9AcHJvdG9idWZqcy9mZXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AcHJvdG9idWZqcy9mbG9hdC8xLjAuMi9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvZmxvYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQHByb3RvYnVmanMvaW5xdWlyZS8xLjEuMC9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvaW5xdWlyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AcHJvdG9idWZqcy9wYXRoLzEuMS4yL25vZGVfbW9kdWxlcy9AcHJvdG9idWZqcy9wYXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0Bwcm90b2J1ZmpzL3Bvb2wvMS4xLjAvbm9kZV9tb2R1bGVzL0Bwcm90b2J1ZmpzL3Bvb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQHByb3RvYnVmanMvdXRmOC8xLjEuMC9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvdXRmOC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9iYXNlNjQtanMvMS4zLjAvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9idWZmZXIvNC45LjEvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9pZWVlNzU0LzEuMS4xMi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9pc2FycmF5LzEuMC4wL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL2NvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy9kZWNvZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL2VuY29kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvZW51bS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy9pbmRleC1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy9pbmRleC1taW5pbWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL21hcGZpZWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL25hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvb25lb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvcmVhZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL3JlYWRlcl9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy9yb290cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy9ycGMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvcnBjL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvdXRpbC9sb25nYml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9wcm90b2J1ZmpzLzYuOC44L25vZGVfbW9kdWxlcy9wcm90b2J1ZmpzL3NyYy91dGlsL21pbmltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvdmVyaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvd3JhcHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcHJvdG9idWZqcy82LjguOC9ub2RlX21vZHVsZXMvcHJvdG9idWZqcy9zcmMvd3JpdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3Byb3RvYnVmanMvNi44Ljgvbm9kZV9tb2R1bGVzL3Byb3RvYnVmanMvc3JjL3dyaXRlcl9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7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QUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsV0FBVztBQUN0QixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsV0FBVztBQUN0QixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUFJOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUFJOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLDBDQUEwQztBQUN2RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Q0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7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QkFBa0IsT0FBTztBQUN6QixrQkFBa0IsT0FBTztBQUN6QixrQkFBa0IsUUFBUTtBQUMxQixrQkFBa0IsUUFBUTtBQUMxQixrQkFBa0IsV0FBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMWNhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhLG1CQUFPLENBQUMsMkdBQVU7QUFDL0I7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLHVIQUFnQjs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCOzs7Ozs7Ozs7Ozs7QUNoRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImI4NmNjYTg0ZDgzYjEwNjEyOGU0Lndvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQG5vaWEtbmV0d29yay9zZGsvMi4wLjAtYmV0YS40L25vZGVfbW9kdWxlcy9Abm9pYS1uZXR3b3JrL3Nkay93b3JrZXIuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnByb3RvSnNvbiA9IHtcclxuICAgIG5lc3RlZDoge1xyXG4gICAgICAgIENvbnRlbnRSZXNwb25zZURhdGE6IHtcclxuICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbnQzMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImludDMyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidWZmZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ5dGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ29udGVudFJlc3BvbnNlOiB7XHJcbiAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbnQzMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ29udGVudFJlc3BvbnNlRGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZkRzh1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZZMnhwWlc1MGN5OXdjbTkwYnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZoTEZGQlFVRXNVMEZCVXl4SFFVRkhPMGxCUTNKQ0xFMUJRVTBzUlVGQlJUdFJRVU5LTEcxQ1FVRnRRaXhGUVVGRk8xbEJRMnBDTEUxQlFVMHNSVUZCUlR0blFrRkRTaXhUUVVGVExFVkJRVVU3YjBKQlExQXNTVUZCU1N4RlFVRkZMRkZCUVZFN2IwSkJRMlFzUlVGQlJTeEZRVUZGTEVOQlFVTTdhVUpCUTFJN1owSkJRMFFzVFVGQlRTeEZRVUZGTzI5Q1FVTktMRWxCUVVrc1JVRkJSU3hQUVVGUE8yOUNRVU5pTEVWQlFVVXNSVUZCUlN4RFFVRkRPMmxDUVVOU08yZENRVU5FTEV0QlFVc3NSVUZCUlR0dlFrRkRTQ3hKUVVGSkxFVkJRVVVzVDBGQlR6dHZRa0ZEWWl4RlFVRkZMRVZCUVVVc1EwRkJRenRwUWtGRFVqdG5Ra0ZEUkN4TlFVRk5MRVZCUVVVN2IwSkJRMG9zU1VGQlNTeEZRVUZGTEU5QlFVODdiMEpCUTJJc1JVRkJSU3hGUVVGRkxFTkJRVU03YVVKQlExSTdZVUZEU2p0VFFVTktPMUZCUTBRc1pVRkJaU3hGUVVGRk8xbEJRMklzVFVGQlRTeEZRVUZGTzJkQ1FVTktMRTFCUVUwc1JVRkJSVHR2UWtGRFNpeEpRVUZKTEVWQlFVVXNUMEZCVHp0dlFrRkRZaXhGUVVGRkxFVkJRVVVzUTBGQlF6dHBRa0ZEVWp0blFrRkRSQ3hMUVVGTExFVkJRVVU3YjBKQlEwZ3NTVUZCU1N4RlFVRkZMRkZCUVZFN2IwSkJRMlFzUlVGQlJTeEZRVUZGTEVOQlFVTTdhVUpCUTFJN1owSkJRMFFzU1VGQlNTeEZRVUZGTzI5Q1FVTkdMRWxCUVVrc1JVRkJSU3h4UWtGQmNVSTdiMEpCUXpOQ0xFVkJRVVVzUlVGQlJTeERRVUZETzJsQ1FVTlNPMkZCUTBvN1UwRkRTanRMUVVOS08wTkJRMG9zUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmpiMjV6ZENCd2NtOTBiMHB6YjI0Z1BTQjdYSEpjYmlBZ0lDQnVaWE4wWldRNklIdGNjbHh1SUNBZ0lDQWdJQ0JEYjI1MFpXNTBVbVZ6Y0c5dWMyVkVZWFJoT2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdacFpXeGtjem9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR1Z1ZEVsa09pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVG9nWENKemRISnBibWRjSWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWkRvZ01WeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5bVpuTmxkRG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVNklGd2lhVzUwTXpKY0lpeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFpEb2dNbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVaR1Y0T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhsd1pUb2dYQ0pwYm5Rek1sd2lMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbGtPaUF6WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblZtWm1WeU9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVG9nWENKaWVYUmxjMXdpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xrT2lBMFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lFTnZiblJsYm5SU1pYTndiMjV6WlRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWFXVnNaSE02SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBZWFIxY3pvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSNWNHVTZJRndpYVc1ME16SmNJaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaRG9nTVZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Z5Y205eU9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVG9nWENKemRISnBibWRjSWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWkRvZ01seHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsT2lCY0lrTnZiblJsYm5SU1pYTndiMjV6WlVSaGRHRmNJaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaRG9nTTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzRpWFgwPSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfdGhpcyA9IHRoaXM7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHByb3RvXzEgPSByZXF1aXJlKFwiLi4vY2xpZW50cy9wcm90b1wiKTtcclxudmFyIHByb3RvYnVmID0gcmVxdWlyZShcInByb3RvYnVmanNcIik7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxudmFyIGN0eCA9IHNlbGY7XHJcbnZhciByb290ID0gcHJvdG9idWYuUm9vdC5mcm9tSlNPTihwcm90b18xLnByb3RvSnNvbik7XHJcbnZhciBjb250ZW50UmVzcG9uc2VQcm90b2J1ZiA9IHJvb3QubG9va3VwVHlwZShcIkNvbnRlbnRSZXNwb25zZVwiKTtcclxuZnVuY3Rpb24gcG9zdE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgY3R4LnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIGRlY29kZURhdGEoZGF0YSkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgcmV0dXJuIGNvbnRlbnRSZXNwb25zZVByb3RvYnVmLmRlY29kZShuZXcgVWludDhBcnJheShkYXRhKSk7XHJcbn1cclxuLy8gUmVzcG9uZCB0byBtZXNzYWdlIGZyb20gcGFyZW50IHRocmVhZFxyXG5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIG9uTG9hZEVuZChlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJyYXlCdWZmZXIsIGJ1ZmZlciwgY29udGVudCwgcmVzcG9uc2VEYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgb25Mb2FkRW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVhZGVyLnJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAxIC8qIEVycm9yICovXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlYWRlci5yZXN1bHQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5QnVmZmVyID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZWFkZXIucmVzdWx0ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gQnVmZmVyLmZyb20ocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXlCdWZmZXJcclxuICAgICAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlciA9IGJ1ZmZlci5idWZmZXIuc2xpY2UoYnVmZmVyLmJ5dGVPZmZzZXQsIGJ1ZmZlci5ieXRlT2Zmc2V0ICsgYnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDEgLyogRXJyb3IgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIlVua25vd24gZGF0YSB0eXBlIHJlY2VpdmVkLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IGRlY29kZURhdGEoYXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuc3RhdHVzICE9PSAyMDAgfHwgY29udGVudC5kYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogMSAvKiBFcnJvciAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGNvbnRlbnQuZXJyb3IgfHwgXCJJbmNvcnJlY3QgZGF0YSByZWNlaXZlZC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IGNvbnRlbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAgLyogU3VjY2VzcyAqLyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJZDogcmVzcG9uc2VEYXRhLmNvbnRlbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHJlc3BvbnNlRGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiByZXNwb25zZURhdGEub2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHJlc3BvbnNlRGF0YS5idWZmZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYmxvYiwgcmVhZGVyO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIGJsb2IgPSBldmVudC5kYXRhLmJsb2I7XHJcbiAgICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgb25Mb2FkRW5kLCBmYWxzZSk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xyXG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHbGxZMlZ6TFhkdmNtdGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OTNiM0pyWlhKekwzQnBaV05sY3kxM2IzSnJaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRXNhVUpCY1VaQk96dEJRWEJHUVN3d1EwRkJOa003UVVGRk4wTXNjVU5CUVhWRE8wRkJSM1pETEd0RFFVRnJRenRCUVVOc1F5eEpRVUZOTEVkQlFVY3NSMEZCU1N4SlFVRnpRaXhEUVVGRE8wRkJRM0JETEVsQlFVMHNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdsQ1FVRlRMRU5CUVVNc1EwRkJRenRCUVVNdlF5eEpRVUZOTEhWQ1FVRjFRaXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dEJRVVZ1UlN4VFFVRlRMRmRCUVZjc1EwRkJReXhQUVVGNVF6dEpRVU14UkN4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBGQlF6ZENMRU5CUVVNN1FVRkZSQ3hUUVVGVExGVkJRVlVzUTBGQlF5eEpRVUZwUWp0SlFVTnFReXhyUTBGQmEwTTdTVUZEYkVNc1QwRkJVU3gxUWtGQmRVSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFUUkNMRU5CUVVNN1FVRkROVVlzUTBGQlF6dEJRVVZFTEhkRFFVRjNRenRCUVVONFF5eG5Ra0ZCWjBJc1EwRkJReXhUUVVGVExFVkJRVVVzVlVGQlRTeExRVUZMTzBsQlNXNURMRk5CUVdVc1UwRkJVeXhEUVVGRExFTkJRV2RDT3pzN08yZENRVU55UXl4TlFVRk5MRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVRc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NSVUZCUlR0dlFrRkRka0lzUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXp0M1FrRkRXaXhOUVVGTkxHVkJRVzlDTzNGQ1FVTTNRaXhEUVVGRExFTkJRVU03YjBKQlEwZ3NjMEpCUVU4N2FVSkJRMVk3WjBKQlIwUXNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3haUVVGWkxGZEJRVmNzUlVGQlJUdHZRa0ZEZEVNc1YwRkJWeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTTdhVUpCUXk5Q08zRkNRVUZOTEVsQlFVa3NUMEZCVHl4TlFVRk5MRU5CUVVNc1RVRkJUU3hMUVVGTExGRkJRVkVzUlVGQlJUdHZRa0ZEY0VNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yOUNRVU14UXl4alFVRmpPMjlDUVVOa0xGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTEUxQlFVMHNRMEZCUXl4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzJsQ1FVTXZSanR4UWtGQlRUdHZRa0ZEU0N4WFFVRlhMRU5CUVVNN2QwSkJRMUlzVFVGQlRTeGxRVUZ2UWp0M1FrRkRNVUlzUzBGQlN5eEZRVUZGTERaQ1FVRTJRanR4UWtGRGRrTXNRMEZCUXl4RFFVRkRPMjlDUVVOSUxITkNRVUZQTzJsQ1FVTldPMmRDUVVWTExFOUJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJRM2hETEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRVZCUVVVN2IwSkJRMmhFTEZkQlFWY3NRMEZCUXp0M1FrRkRVaXhOUVVGTkxHVkJRVzlDTzNkQ1FVTXhRaXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEV0QlFVc3NTVUZCU1N3d1FrRkJNRUk3Y1VKQlEzSkVMRU5CUVVNc1EwRkJRenR2UWtGRFNDeHpRa0ZCVHp0cFFrRkRWanRuUWtGRlN5eFpRVUZaTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRGJFTXNWMEZCVnl4RFFVRkRPMjlDUVVOU0xFMUJRVTBzYVVKQlFYTkNPMjlDUVVNMVFpeEpRVUZKTEVWQlFVVTdkMEpCUTBZc1UwRkJVeXhGUVVGRkxGbEJRVmtzUTBGQlF5eFRRVUZUTzNkQ1FVTnFReXhMUVVGTExFVkJRVVVzV1VGQldTeERRVUZETEV0QlFVczdkMEpCUTNwQ0xFMUJRVTBzUlVGQlJTeFpRVUZaTEVOQlFVTXNUVUZCVFR0M1FrRkRNMElzVFVGQlRTeEZRVUZGTEZsQlFWa3NRMEZCUXl4TlFVRk5PM0ZDUVVNNVFqdHBRa0ZEU2l4RFFVRkRMRU5CUVVNN096czdTMEZoVGpzN08xRkJNVVJMTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dFJRVU4yUWl4TlFVRk5MRWRCUVVjc1NVRkJTU3hWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVEpFYUVNc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEY2tRc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE96czdTMEZEYkVNc1EwRkJReXhEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dVbVZ6ZFd4MFUzUmhkSFZ6TENCUWFXVmpaWE5YYjNKclpYSk5aWE56WVdkbElIMGdabkp2YlNCY0lpNHVMMk52Ym5SeVlXTjBjeTkzYjNKclpYSmNJanRjY2x4dWFXMXdiM0owSUhzZ2NISnZkRzlLYzI5dUlIMGdabkp2YlNCY0lpNHVMMk5zYVdWdWRITXZjSEp2ZEc5Y0lqdGNjbHh1YVcxd2IzSjBJSHNnUTI5dWRHVnVkRkpsYzNCdmJuTmxJSDBnWm5KdmJTQmNJa0J1YjJsaExXNWxkSGR2Y21zdmNISnZkRzlqYjJ4Y0lqdGNjbHh1YVcxd2IzSjBJQ29nWVhNZ2NISnZkRzlpZFdZZ1puSnZiU0JjSW5CeWIzUnZZblZtYW5OY0lqdGNjbHh1YVcxd2IzSjBJSHNnVUdsbFkyVlNaWE4xYkhRZ2ZTQm1jbTl0SUZ3aUxpNHZZMjl1ZEhKaFkzUnpMMjV2WkdWY0lqdGNjbHh1WEhKY2JpOHZJSFJ6YkdsdWREcGthWE5oWW14bExXNWxlSFF0YkdsdVpUcHVieTFoYm5sY2NseHVZMjl1YzNRZ1kzUjRJRDBnS0hObGJHWWdZWE1nWVc1NUtTQmhjeUJYYjNKclpYSTdYSEpjYm1OdmJuTjBJSEp2YjNRZ1BTQndjbTkwYjJKMVppNVNiMjkwTG1aeWIyMUtVMDlPS0hCeWIzUnZTbk52YmlrN1hISmNibU52Ym5OMElHTnZiblJsYm5SU1pYTndiMjV6WlZCeWIzUnZZblZtSUQwZ2NtOXZkQzVzYjI5cmRYQlVlWEJsS0Z3aVEyOXVkR1Z1ZEZKbGMzQnZibk5sWENJcE8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2NHOXpkRTFsYzNOaFoyVW9iV1Z6YzJGblpUb2dVR2xsWTJWelYyOXlhMlZ5VFdWemMyRm5aVHhRYVdWalpWSmxjM1ZzZEQ0cE9pQjJiMmxrSUh0Y2NseHVJQ0FnSUdOMGVDNXdiM04wVFdWemMyRm5aU2h0WlhOellXZGxLVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1pHVmpiMlJsUkdGMFlTaGtZWFJoT2lCQmNuSmhlVUoxWm1abGNpazZJRU52Ym5SbGJuUlNaWE53YjI1elpTQjdYSEpjYmlBZ0lDQXZMeUIwYzJ4cGJuUTZaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVTZibTh0WVc1NVhISmNiaUFnSUNCeVpYUjFjbTRnS0dOdmJuUmxiblJTWlhOd2IyNXpaVkJ5YjNSdlluVm1MbVJsWTI5a1pTaHVaWGNnVldsdWREaEJjbkpoZVNoa1lYUmhLU2tnWVhNZ1lXNTVLU0JoY3lCRGIyNTBaVzUwVW1WemNHOXVjMlU3WEhKY2JuMWNjbHh1WEhKY2JpOHZJRkpsYzNCdmJtUWdkRzhnYldWemMyRm5aU0JtY205dElIQmhjbVZ1ZENCMGFISmxZV1JjY2x4dVlXUmtSWFpsYm5STWFYTjBaVzVsY2loY0ltMWxjM05oWjJWY0lpd2dZWE41Ym1NZ1pYWmxiblFnUFQ0Z2UxeHlYRzRnSUNBZ1kyOXVjM1FnWW14dllpQTlJR1YyWlc1MExtUmhkR0V1WW14dllqdGNjbHh1SUNBZ0lHTnZibk4wSUhKbFlXUmxjaUE5SUc1bGR5QkdhV3hsVW1WaFpHVnlLQ2s3WEhKY2JseHlYRzRnSUNBZ1lYTjVibU1nWm5WdVkzUnBiMjRnYjI1TWIyRmtSVzVrS0dVNklGQnliMmR5WlhOelJYWmxiblFwT2lCUWNtOXRhWE5sUEhadmFXUStJSHRjY2x4dUlDQWdJQ0FnSUNCeVpXRmtaWEl1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2loY0lteHZZV1JsYm1SY0lpd2diMjVNYjJGa1JXNWtMQ0JtWVd4elpTazdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tISmxZV1JsY2k1eVpYTjFiSFFnUFQwZ2JuVnNiQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWNHOXpkRTFsYzNOaFoyVW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSaGRIVnpPaUJTWlhOMWJIUlRkR0YwZFhNdVJYSnliM0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJR3hsZENCaGNuSmhlVUoxWm1abGNqb2dRWEp5WVhsQ2RXWm1aWEk3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSEpsWVdSbGNpNXlaWE4xYkhRZ2FXNXpkR0Z1WTJWdlppQkJjbkpoZVVKMVptWmxjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JoY25KaGVVSjFabVpsY2lBOUlISmxZV1JsY2k1eVpYTjFiSFE3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2NtVmhaR1Z5TG5KbGMzVnNkQ0FoUFQwZ1hDSnpkSEpwYm1kY0lpa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCaWRXWm1aWElnUFNCQ2RXWm1aWEl1Wm5KdmJTaHlaV0ZrWlhJdWNtVnpkV3gwS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYSnlZWGxDZFdabVpYSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSnlZWGxDZFdabVpYSWdQU0JpZFdabVpYSXVZblZtWm1WeUxuTnNhV05sS0dKMVptWmxjaTVpZVhSbFQyWm1jMlYwTENCaWRXWm1aWEl1WW5sMFpVOW1abk5sZENBcklHSjFabVpsY2k1aWVYUmxUR1Z1WjNSb0tUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQndiM04wVFdWemMyRm5aU2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRHRjBkWE02SUZKbGMzVnNkRk4wWVhSMWN5NUZjbkp2Y2l4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnljbTl5T2lCY0lsVnVhMjV2ZDI0Z1pHRjBZU0IwZVhCbElISmxZMlZwZG1Wa0xsd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCamIyNTBaVzUwSUQwZ1pHVmpiMlJsUkdGMFlTaGhjbkpoZVVKMVptWmxjaWs3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLR052Ym5SbGJuUXVjM1JoZEhWeklDRTlQU0F5TURBZ2ZId2dZMjl1ZEdWdWRDNWtZWFJoSUQwOUlHNTFiR3dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY0c5emRFMWxjM05oWjJVb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1JoZEhWek9pQlNaWE4xYkhSVGRHRjBkWE11UlhKeWIzSXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsY25KdmNqb2dZMjl1ZEdWdWRDNWxjbkp2Y2lCOGZDQmNJa2x1WTI5eWNtVmpkQ0JrWVhSaElISmxZMlZwZG1Wa0xsd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCeVpYTndiMjV6WlVSaGRHRWdQU0JqYjI1MFpXNTBMbVJoZEdFN1hISmNiaUFnSUNBZ0lDQWdjRzl6ZEUxbGMzTmhaMlVvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdGMGRYTTZJRkpsYzNWc2RGTjBZWFIxY3k1VGRXTmpaWE56TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaE9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpXNTBTV1E2SUhKbGMzQnZibk5sUkdGMFlTNWpiMjUwWlc1MFNXUXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm1SbGVEb2djbVZ6Y0c5dWMyVkVZWFJoTG1sdVpHVjRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJabWMyVjBPaUJ5WlhOd2IyNXpaVVJoZEdFdWIyWm1jMlYwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luVm1abVZ5T2lCeVpYTndiMjV6WlVSaGRHRXVZblZtWm1WeVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnSUNBdkx5QmpiMjV6ZENCd2FXVmpaVWx1WkdWNElEMGdZWEp5WVhsQ2RXWm1aWEl1Y21WaFpGVkpiblF6TWtKRktEQXBPMXh5WEc0Z0lDQWdJQ0FnSUM4dklHTnZibk4wSUc5bVpuTmxkQ0E5SUdGeWNtRjVRblZtWm1WeUxuSmxZV1JWU1c1ME16SkNSU2d3SUNzZ05DazdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z1kyOXVjM1FnYVc1bWIwaGhjMmdnUFNCaGNuSmhlVUoxWm1abGNpNTBiMU4wY21sdVp5aGNJbWhsZUZ3aUxDQTBJQ3NnTkN3Z01qUWdLeUEwS1R0Y2NseHVJQ0FnSUNBZ0lDQXZMeUJqYjI1emRDQmtZWFJoSUQwZ1lYSnlZWGxDZFdabVpYSXVjMnhwWTJVb01qUWdLeUEwTENCaGNuSmhlVUoxWm1abGNpNXNaVzVuZEdncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBdkx5QmpkSGd1Y0c5emRFMWxjM05oWjJVb2UxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQnBibVJsZURvZ2NHbGxZMlZKYm1SbGVDeGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdhVzVtYjBoaGMyZzZJR2x1Wm05SVlYTm9MRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0J2Wm1aelpYUTZJRzltWm5ObGRDeGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdaR0YwWVRvZ1pHRjBZU3hjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnYzNSaGRIVnpPaUJTWlhOMWJIUlRkR0YwZFhNdVUzVmpZMlZ6YzF4eVhHNGdJQ0FnSUNBZ0lDOHZJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxZV1JsY2k1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aWJHOWhaR1Z1WkZ3aUxDQnZia3h2WVdSRmJtUXNJR1poYkhObEtUdGNjbHh1SUNBZ0lISmxZV1JsY2k1eVpXRmtRWE5CY25KaGVVSjFabVpsY2loaWJHOWlLVHRjY2x4dWZTazdYSEpjYmlKZGZRPT0iLCJyZXF1aXJlKFwiLi9kaXN0L3dvcmtlcnMvcGllY2VzLXdvcmtlclwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gYXNQcm9taXNlO1xyXG5cclxuLyoqXHJcbiAqIENhbGxiYWNrIGFzIHVzZWQgYnkge0BsaW5rIHV0aWwuYXNQcm9taXNlfS5cclxuICogQHR5cGVkZWYgYXNQcm9taXNlQ2FsbGJhY2tcclxuICogQHR5cGUge2Z1bmN0aW9ufVxyXG4gKiBAcGFyYW0ge0Vycm9yfG51bGx9IGVycm9yIEVycm9yLCBpZiBhbnlcclxuICogQHBhcmFtIHsuLi4qfSBwYXJhbXMgQWRkaXRpb25hbCBhcmd1bWVudHNcclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICovXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHByb21pc2UgZnJvbSBhIG5vZGUtc3R5bGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBwYXJhbSB7YXNQcm9taXNlQ2FsbGJhY2t9IGZuIEZ1bmN0aW9uIHRvIGNhbGxcclxuICogQHBhcmFtIHsqfSBjdHggRnVuY3Rpb24gY29udGV4dFxyXG4gKiBAcGFyYW0gey4uLip9IHBhcmFtcyBGdW5jdGlvbiBhcmd1bWVudHNcclxuICogQHJldHVybnMge1Byb21pc2U8Kj59IFByb21pc2lmaWVkIGZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBhc1Byb21pc2UoZm4sIGN0eC8qLCB2YXJhcmdzICovKSB7XHJcbiAgICB2YXIgcGFyYW1zICA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSksXHJcbiAgICAgICAgb2Zmc2V0ICA9IDAsXHJcbiAgICAgICAgaW5kZXggICA9IDIsXHJcbiAgICAgICAgcGVuZGluZyA9IHRydWU7XHJcbiAgICB3aGlsZSAoaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoKVxyXG4gICAgICAgIHBhcmFtc1tvZmZzZXQrK10gPSBhcmd1bWVudHNbaW5kZXgrK107XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcGFyYW1zW29mZnNldF0gPSBmdW5jdGlvbiBjYWxsYmFjayhlcnIvKiwgdmFyYXJncyAqLykge1xyXG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycilcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPCBwYXJhbXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbb2Zmc2V0KytdID0gYXJndW1lbnRzW29mZnNldF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZS5hcHBseShudWxsLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmbi5hcHBseShjdHggfHwgbnVsbCwgcGFyYW1zKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKipcclxuICogQSBtaW5pbWFsIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBmb3IgbnVtYmVyIGFycmF5cy5cclxuICogQG1lbWJlcm9mIHV0aWxcclxuICogQG5hbWVzcGFjZVxyXG4gKi9cclxudmFyIGJhc2U2NCA9IGV4cG9ydHM7XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgYnl0ZSBsZW5ndGggb2YgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQmFzZTY0IGVuY29kZWQgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEJ5dGUgbGVuZ3RoXHJcbiAqL1xyXG5iYXNlNjQubGVuZ3RoID0gZnVuY3Rpb24gbGVuZ3RoKHN0cmluZykge1xyXG4gICAgdmFyIHAgPSBzdHJpbmcubGVuZ3RoO1xyXG4gICAgaWYgKCFwKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgdmFyIG4gPSAwO1xyXG4gICAgd2hpbGUgKC0tcCAlIDQgPiAxICYmIHN0cmluZy5jaGFyQXQocCkgPT09IFwiPVwiKVxyXG4gICAgICAgICsrbjtcclxuICAgIHJldHVybiBNYXRoLmNlaWwoc3RyaW5nLmxlbmd0aCAqIDMpIC8gNCAtIG47XHJcbn07XHJcblxyXG4vLyBCYXNlNjQgZW5jb2RpbmcgdGFibGVcclxudmFyIGI2NCA9IG5ldyBBcnJheSg2NCk7XHJcblxyXG4vLyBCYXNlNjQgZGVjb2RpbmcgdGFibGVcclxudmFyIHM2NCA9IG5ldyBBcnJheSgxMjMpO1xyXG5cclxuLy8gNjUuLjkwLCA5Ny4uMTIyLCA0OC4uNTcsIDQzLCA0N1xyXG5mb3IgKHZhciBpID0gMDsgaSA8IDY0OylcclxuICAgIHM2NFtiNjRbaV0gPSBpIDwgMjYgPyBpICsgNjUgOiBpIDwgNTIgPyBpICsgNzEgOiBpIDwgNjIgPyBpIC0gNCA6IGkgLSA1OSB8IDQzXSA9IGkrKztcclxuXHJcbi8qKlxyXG4gKiBFbmNvZGVzIGEgYnVmZmVyIHRvIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciBTb3VyY2UgYnVmZmVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTb3VyY2Ugc3RhcnRcclxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBTb3VyY2UgZW5kXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEJhc2U2NCBlbmNvZGVkIHN0cmluZ1xyXG4gKi9cclxuYmFzZTY0LmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShidWZmZXIsIHN0YXJ0LCBlbmQpIHtcclxuICAgIHZhciBwYXJ0cyA9IG51bGwsXHJcbiAgICAgICAgY2h1bmsgPSBbXTtcclxuICAgIHZhciBpID0gMCwgLy8gb3V0cHV0IGluZGV4XHJcbiAgICAgICAgaiA9IDAsIC8vIGdvdG8gaW5kZXhcclxuICAgICAgICB0OyAgICAgLy8gdGVtcG9yYXJ5XHJcbiAgICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcclxuICAgICAgICB2YXIgYiA9IGJ1ZmZlcltzdGFydCsrXTtcclxuICAgICAgICBzd2l0Y2ggKGopIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2h1bmtbaSsrXSA9IGI2NFtiID4+IDJdO1xyXG4gICAgICAgICAgICAgICAgdCA9IChiICYgMykgPDwgNDtcclxuICAgICAgICAgICAgICAgIGogPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNodW5rW2krK10gPSBiNjRbdCB8IGIgPj4gNF07XHJcbiAgICAgICAgICAgICAgICB0ID0gKGIgJiAxNSkgPDwgMjtcclxuICAgICAgICAgICAgICAgIGogPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNodW5rW2krK10gPSBiNjRbdCB8IGIgPj4gNl07XHJcbiAgICAgICAgICAgICAgICBjaHVua1tpKytdID0gYjY0W2IgJiA2M107XHJcbiAgICAgICAgICAgICAgICBqID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA+IDgxOTEpIHtcclxuICAgICAgICAgICAgKHBhcnRzIHx8IChwYXJ0cyA9IFtdKSkucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY2h1bmspKTtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGopIHtcclxuICAgICAgICBjaHVua1tpKytdID0gYjY0W3RdO1xyXG4gICAgICAgIGNodW5rW2krK10gPSA2MTtcclxuICAgICAgICBpZiAoaiA9PT0gMSlcclxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9IDYxO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcnRzKSB7XHJcbiAgICAgICAgaWYgKGkpXHJcbiAgICAgICAgICAgIHBhcnRzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNodW5rLnNsaWNlKDAsIGkpKSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNodW5rLnNsaWNlKDAsIGkpKTtcclxufTtcclxuXHJcbnZhciBpbnZhbGlkRW5jb2RpbmcgPSBcImludmFsaWQgZW5jb2RpbmdcIjtcclxuXHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHRvIGEgYnVmZmVyLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFNvdXJjZSBzdHJpbmdcclxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIgRGVzdGluYXRpb24gYnVmZmVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgRGVzdGluYXRpb24gb2Zmc2V0XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IE51bWJlciBvZiBieXRlcyB3cml0dGVuXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiBlbmNvZGluZyBpcyBpbnZhbGlkXHJcbiAqL1xyXG5iYXNlNjQuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHN0cmluZywgYnVmZmVyLCBvZmZzZXQpIHtcclxuICAgIHZhciBzdGFydCA9IG9mZnNldDtcclxuICAgIHZhciBqID0gMCwgLy8gZ290byBpbmRleFxyXG4gICAgICAgIHQ7ICAgICAvLyB0ZW1wb3JhcnlcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDspIHtcclxuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkrKyk7XHJcbiAgICAgICAgaWYgKGMgPT09IDYxICYmIGogPiAxKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBpZiAoKGMgPSBzNjRbY10pID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGludmFsaWRFbmNvZGluZyk7XHJcbiAgICAgICAgc3dpdGNoIChqKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHQgPSBjO1xyXG4gICAgICAgICAgICAgICAgaiA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9IHQgPDwgMiB8IChjICYgNDgpID4+IDQ7XHJcbiAgICAgICAgICAgICAgICB0ID0gYztcclxuICAgICAgICAgICAgICAgIGogPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQrK10gPSAodCAmIDE1KSA8PCA0IHwgKGMgJiA2MCkgPj4gMjtcclxuICAgICAgICAgICAgICAgIHQgPSBjO1xyXG4gICAgICAgICAgICAgICAgaiA9IDM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9ICh0ICYgMykgPDwgNiB8IGM7XHJcbiAgICAgICAgICAgICAgICBqID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChqID09PSAxKVxyXG4gICAgICAgIHRocm93IEVycm9yKGludmFsaWRFbmNvZGluZyk7XHJcbiAgICByZXR1cm4gb2Zmc2V0IC0gc3RhcnQ7XHJcbn07XHJcblxyXG4vKipcclxuICogVGVzdHMgaWYgdGhlIHNwZWNpZmllZCBzdHJpbmcgYXBwZWFycyB0byBiZSBiYXNlNjQgZW5jb2RlZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBTdHJpbmcgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHByb2JhYmx5IGJhc2U2NCBlbmNvZGVkLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmJhc2U2NC50ZXN0ID0gZnVuY3Rpb24gdGVzdChzdHJpbmcpIHtcclxuICAgIHJldHVybiAvXig/OltBLVphLXowLTkrL117NH0pKig/OltBLVphLXowLTkrL117Mn09PXxbQS1aYS16MC05Ky9dezN9PSk/JC8udGVzdChzdHJpbmcpO1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBjb2RlZ2VuO1xyXG5cclxuLyoqXHJcbiAqIEJlZ2lucyBnZW5lcmF0aW5nIGEgZnVuY3Rpb24uXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IGZ1bmN0aW9uUGFyYW1zIEZ1bmN0aW9uIHBhcmFtZXRlciBuYW1lc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2Z1bmN0aW9uTmFtZV0gRnVuY3Rpb24gbmFtZSBpZiBub3QgYW5vbnltb3VzXHJcbiAqIEByZXR1cm5zIHtDb2RlZ2VufSBBcHBlbmRlciB0aGF0IGFwcGVuZHMgY29kZSB0byB0aGUgZnVuY3Rpb24ncyBib2R5XHJcbiAqL1xyXG5mdW5jdGlvbiBjb2RlZ2VuKGZ1bmN0aW9uUGFyYW1zLCBmdW5jdGlvbk5hbWUpIHtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmICh0eXBlb2YgZnVuY3Rpb25QYXJhbXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBmdW5jdGlvbk5hbWUgPSBmdW5jdGlvblBhcmFtcztcclxuICAgICAgICBmdW5jdGlvblBhcmFtcyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm9keSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kcyBjb2RlIHRvIHRoZSBmdW5jdGlvbidzIGJvZHkgb3IgZmluaXNoZXMgZ2VuZXJhdGlvbi5cclxuICAgICAqIEB0eXBlZGVmIENvZGVnZW5cclxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdC48c3RyaW5nLCo+fSBbZm9ybWF0U3RyaW5nT3JTY29wZV0gRm9ybWF0IHN0cmluZyBvciwgdG8gZmluaXNoIHRoZSBmdW5jdGlvbiwgYW4gb2JqZWN0IG9mIGFkZGl0aW9uYWwgc2NvcGUgdmFyaWFibGVzLCBpZiBhbnlcclxuICAgICAqIEBwYXJhbSB7Li4uKn0gW2Zvcm1hdFBhcmFtc10gRm9ybWF0IHBhcmFtZXRlcnNcclxuICAgICAqIEByZXR1cm5zIHtDb2RlZ2VufEZ1bmN0aW9ufSBJdHNlbGYgb3IgdGhlIGdlbmVyYXRlZCBmdW5jdGlvbiBpZiBmaW5pc2hlZFxyXG4gICAgICogQHRocm93cyB7RXJyb3J9IElmIGZvcm1hdCBwYXJhbWV0ZXIgY291bnRzIGRvIG5vdCBtYXRjaFxyXG4gICAgICovXHJcblxyXG4gICAgZnVuY3Rpb24gQ29kZWdlbihmb3JtYXRTdHJpbmdPclNjb3BlKSB7XHJcbiAgICAgICAgLy8gbm90ZSB0aGF0IGV4cGxpY2l0IGFycmF5IGhhbmRsaW5nIGJlbG93IG1ha2VzIHRoaXMgfjUwJSBmYXN0ZXJcclxuXHJcbiAgICAgICAgLy8gZmluaXNoIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIGlmICh0eXBlb2YgZm9ybWF0U3RyaW5nT3JTY29wZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB2YXIgc291cmNlID0gdG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKGNvZGVnZW4udmVyYm9zZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29kZWdlbjogXCIgKyBzb3VyY2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgc291cmNlID0gXCJyZXR1cm4gXCIgKyBzb3VyY2U7XHJcbiAgICAgICAgICAgIGlmIChmb3JtYXRTdHJpbmdPclNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NvcGVLZXlzICAgPSBPYmplY3Qua2V5cyhmb3JtYXRTdHJpbmdPclNjb3BlKSxcclxuICAgICAgICAgICAgICAgICAgICBzY29wZVBhcmFtcyA9IG5ldyBBcnJheShzY29wZUtleXMubGVuZ3RoICsgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVWYWx1ZXMgPSBuZXcgQXJyYXkoc2NvcGVLZXlzLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHNjb3BlT2Zmc2V0IDwgc2NvcGVLZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlUGFyYW1zW3Njb3BlT2Zmc2V0XSA9IHNjb3BlS2V5c1tzY29wZU9mZnNldF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVWYWx1ZXNbc2NvcGVPZmZzZXRdID0gZm9ybWF0U3RyaW5nT3JTY29wZVtzY29wZUtleXNbc2NvcGVPZmZzZXQrK11dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2NvcGVQYXJhbXNbc2NvcGVPZmZzZXRdID0gc291cmNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLmFwcGx5KG51bGwsIHNjb3BlUGFyYW1zKS5hcHBseShudWxsLCBzY29wZVZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LWZ1bmNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gRnVuY3Rpb24oc291cmNlKSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2UgYXBwZW5kIHRvIGJvZHlcclxuICAgICAgICB2YXIgZm9ybWF0UGFyYW1zID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKSxcclxuICAgICAgICAgICAgZm9ybWF0T2Zmc2V0ID0gMDtcclxuICAgICAgICB3aGlsZSAoZm9ybWF0T2Zmc2V0IDwgZm9ybWF0UGFyYW1zLmxlbmd0aClcclxuICAgICAgICAgICAgZm9ybWF0UGFyYW1zW2Zvcm1hdE9mZnNldF0gPSBhcmd1bWVudHNbKytmb3JtYXRPZmZzZXRdO1xyXG4gICAgICAgIGZvcm1hdE9mZnNldCA9IDA7XHJcbiAgICAgICAgZm9ybWF0U3RyaW5nT3JTY29wZSA9IGZvcm1hdFN0cmluZ09yU2NvcGUucmVwbGFjZSgvJShbJWRmaWpzXSkvZywgZnVuY3Rpb24gcmVwbGFjZSgkMCwgJDEpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZm9ybWF0UGFyYW1zW2Zvcm1hdE9mZnNldCsrXTtcclxuICAgICAgICAgICAgc3dpdGNoICgkMSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRcIjogY2FzZSBcImZcIjogcmV0dXJuIFN0cmluZyhOdW1iZXIodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJpXCI6IHJldHVybiBTdHJpbmcoTWF0aC5mbG9vcih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImpcIjogcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6IHJldHVybiBTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIiVcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZm9ybWF0T2Zmc2V0ICE9PSBmb3JtYXRQYXJhbXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcInBhcmFtZXRlciBjb3VudCBtaXNtYXRjaFwiKTtcclxuICAgICAgICBib2R5LnB1c2goZm9ybWF0U3RyaW5nT3JTY29wZSk7XHJcbiAgICAgICAgcmV0dXJuIENvZGVnZW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoZnVuY3Rpb25OYW1lT3ZlcnJpZGUpIHtcclxuICAgICAgICByZXR1cm4gXCJmdW5jdGlvbiBcIiArIChmdW5jdGlvbk5hbWVPdmVycmlkZSB8fCBmdW5jdGlvbk5hbWUgfHwgXCJcIikgKyBcIihcIiArIChmdW5jdGlvblBhcmFtcyAmJiBmdW5jdGlvblBhcmFtcy5qb2luKFwiLFwiKSB8fCBcIlwiKSArIFwiKXtcXG4gIFwiICsgYm9keS5qb2luKFwiXFxuICBcIikgKyBcIlxcbn1cIjtcclxuICAgIH1cclxuXHJcbiAgICBDb2RlZ2VuLnRvU3RyaW5nID0gdG9TdHJpbmc7XHJcbiAgICByZXR1cm4gQ29kZWdlbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJlZ2lucyBnZW5lcmF0aW5nIGEgZnVuY3Rpb24uXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBmdW5jdGlvbiBjb2RlZ2VuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZnVuY3Rpb25OYW1lXSBGdW5jdGlvbiBuYW1lIGlmIG5vdCBhbm9ueW1vdXNcclxuICogQHJldHVybnMge0NvZGVnZW59IEFwcGVuZGVyIHRoYXQgYXBwZW5kcyBjb2RlIHRvIHRoZSBmdW5jdGlvbidzIGJvZHlcclxuICogQHZhcmlhdGlvbiAyXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gc2V0IHRvIGB0cnVlYCwgY29kZWdlbiB3aWxsIGxvZyBnZW5lcmF0ZWQgY29kZSB0byBjb25zb2xlLiBVc2VmdWwgZm9yIGRlYnVnZ2luZy5cclxuICogQG5hbWUgdXRpbC5jb2RlZ2VuLnZlcmJvc2VcclxuICogQHR5cGUge2Jvb2xlYW59XHJcbiAqL1xyXG5jb2RlZ2VuLnZlcmJvc2UgPSBmYWxzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBuZXcgZXZlbnQgZW1pdHRlciBpbnN0YW5jZS5cclxuICogQGNsYXNzZGVzYyBBIG1pbmltYWwgZXZlbnQgZW1pdHRlci5cclxuICogQG1lbWJlcm9mIHV0aWxcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcmVkIGxpc3RlbmVycy5cclxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywqPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xyXG59XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZ0IEV2ZW50IG5hbWVcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gTGlzdGVuZXJcclxuICogQHBhcmFtIHsqfSBbY3R4XSBMaXN0ZW5lciBjb250ZXh0XHJcbiAqIEByZXR1cm5zIHt1dGlsLkV2ZW50RW1pdHRlcn0gYHRoaXNgXHJcbiAqL1xyXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZ0LCBmbiwgY3R4KSB7XHJcbiAgICAodGhpcy5fbGlzdGVuZXJzW2V2dF0gfHwgKHRoaXMuX2xpc3RlbmVyc1tldnRdID0gW10pKS5wdXNoKHtcclxuICAgICAgICBmbiAgOiBmbixcclxuICAgICAgICBjdHggOiBjdHggfHwgdGhpc1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIG9yIGFueSBtYXRjaGluZyBsaXN0ZW5lcnMgaWYgYXJndW1lbnRzIGFyZSBvbWl0dGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2V2dF0gRXZlbnQgbmFtZS4gUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIGlmIG9taXR0ZWQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl0gTGlzdGVuZXIgdG8gcmVtb3ZlLiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgb2YgYGV2dGAgaWYgb21pdHRlZC5cclxuICogQHJldHVybnMge3V0aWwuRXZlbnRFbWl0dGVyfSBgdGhpc2BcclxuICovXHJcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmKGV2dCwgZm4pIHtcclxuICAgIGlmIChldnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChmbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IFtdO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDspXHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLmZuID09PSBmbilcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICsraTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0cyBhbiBldmVudCBieSBjYWxsaW5nIGl0cyBsaXN0ZW5lcnMgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cy5cclxuICogQHBhcmFtIHtzdHJpbmd9IGV2dCBFdmVudCBuYW1lXHJcbiAqIEBwYXJhbSB7Li4uKn0gYXJncyBBcmd1bWVudHNcclxuICogQHJldHVybnMge3V0aWwuRXZlbnRFbWl0dGVyfSBgdGhpc2BcclxuICovXHJcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZ0KSB7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XHJcbiAgICBpZiAobGlzdGVuZXJzKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSxcclxuICAgICAgICAgICAgaSA9IDE7XHJcbiAgICAgICAgZm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOylcclxuICAgICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDspXHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaSsrXS5jdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZldGNoO1xyXG5cclxudmFyIGFzUHJvbWlzZSA9IHJlcXVpcmUoXCJAcHJvdG9idWZqcy9hc3Byb21pc2VcIiksXHJcbiAgICBpbnF1aXJlICAgPSByZXF1aXJlKFwiQHByb3RvYnVmanMvaW5xdWlyZVwiKTtcclxuXHJcbnZhciBmcyA9IGlucXVpcmUoXCJmc1wiKTtcclxuXHJcbi8qKlxyXG4gKiBOb2RlLXN0eWxlIGNhbGxiYWNrIGFzIHVzZWQgYnkge0BsaW5rIHV0aWwuZmV0Y2h9LlxyXG4gKiBAdHlwZWRlZiBGZXRjaENhbGxiYWNrXHJcbiAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICogQHBhcmFtIHs/RXJyb3J9IGVycm9yIEVycm9yLCBpZiBhbnksIG90aGVyd2lzZSBgbnVsbGBcclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50c10gRmlsZSBjb250ZW50cywgaWYgdGhlcmUgaGFzbid0IGJlZW4gYW4gZXJyb3JcclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICovXHJcblxyXG4vKipcclxuICogT3B0aW9ucyBhcyB1c2VkIGJ5IHtAbGluayB1dGlsLmZldGNofS5cclxuICogQHR5cGVkZWYgRmV0Y2hPcHRpb25zXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2JpbmFyeT1mYWxzZV0gV2hldGhlciBleHBlY3RpbmcgYSBiaW5hcnkgcmVzcG9uc2VcclxuICogQHByb3BlcnR5IHtib29sZWFufSBbeGhyPWZhbHNlXSBJZiBgdHJ1ZWAsIGZvcmNlcyB0aGUgdXNlIG9mIFhNTEh0dHBSZXF1ZXN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEZldGNoZXMgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS5cclxuICogQG1lbWJlcm9mIHV0aWxcclxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIEZpbGUgcGF0aCBvciB1cmxcclxuICogQHBhcmFtIHtGZXRjaE9wdGlvbnN9IG9wdGlvbnMgRmV0Y2ggb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0ZldGNoQ2FsbGJhY2t9IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAqL1xyXG5mdW5jdGlvbiBmZXRjaChmaWxlbmFtZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgIGlmICghY2FsbGJhY2spXHJcbiAgICAgICAgcmV0dXJuIGFzUHJvbWlzZShmZXRjaCwgdGhpcywgZmlsZW5hbWUsIG9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWludmFsaWQtdGhpc1xyXG5cclxuICAgIC8vIGlmIGEgbm9kZS1saWtlIGZpbGVzeXN0ZW0gaXMgcHJlc2VudCwgdHJ5IGl0IGZpcnN0IGJ1dCBmYWxsIGJhY2sgdG8gWEhSIGlmIG5vdGhpbmcgaXMgZm91bmQuXHJcbiAgICBpZiAoIW9wdGlvbnMueGhyICYmIGZzICYmIGZzLnJlYWRGaWxlKVxyXG4gICAgICAgIHJldHVybiBmcy5yZWFkRmlsZShmaWxlbmFtZSwgZnVuY3Rpb24gZmV0Y2hSZWFkRmlsZUNhbGxiYWNrKGVyciwgY29udGVudHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVyciAmJiB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgID8gZmV0Y2gueGhyKGZpbGVuYW1lLCBvcHRpb25zLCBjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgIDogZXJyXHJcbiAgICAgICAgICAgICAgICA/IGNhbGxiYWNrKGVycilcclxuICAgICAgICAgICAgICAgIDogY2FsbGJhY2sobnVsbCwgb3B0aW9ucy5iaW5hcnkgPyBjb250ZW50cyA6IGNvbnRlbnRzLnRvU3RyaW5nKFwidXRmOFwiKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gdXNlIHRoZSBYSFIgdmVyc2lvbiBvdGhlcndpc2UuXHJcbiAgICByZXR1cm4gZmV0Y2gueGhyKGZpbGVuYW1lLCBvcHRpb25zLCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGZXRjaGVzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuXHJcbiAqIEBuYW1lIHV0aWwuZmV0Y2hcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEZpbGUgcGF0aCBvciB1cmxcclxuICogQHBhcmFtIHtGZXRjaENhbGxiYWNrfSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKiBAdmFyaWF0aW9uIDJcclxuICovXHJcblxyXG4vKipcclxuICogRmV0Y2hlcyB0aGUgY29udGVudHMgb2YgYSBmaWxlLlxyXG4gKiBAbmFtZSB1dGlsLmZldGNoXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBGaWxlIHBhdGggb3IgdXJsXHJcbiAqIEBwYXJhbSB7RmV0Y2hPcHRpb25zfSBbb3B0aW9uc10gRmV0Y2ggb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmd8VWludDhBcnJheT59IFByb21pc2VcclxuICogQHZhcmlhdGlvbiAzXHJcbiAqL1xyXG5cclxuLyoqL1xyXG5mZXRjaC54aHIgPSBmdW5jdGlvbiBmZXRjaF94aHIoZmlsZW5hbWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlIC8qIHdvcmtzIGV2ZXJ5d2hlcmUgKi8gPSBmdW5jdGlvbiBmZXRjaE9uUmVhZHlTdGF0ZUNoYW5nZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvLyBsb2NhbCBjb3JzIHNlY3VyaXR5IGVycm9ycyByZXR1cm4gc3RhdHVzIDAgLyBlbXB0eSBzdHJpbmcsIHRvby4gYWZhaWsgdGhpcyBjYW5ub3QgYmVcclxuICAgICAgICAvLyByZWxpYWJseSBkaXN0aW5ndWlzaGVkIGZyb20gYW4gYWN0dWFsbHkgZW1wdHkgZmlsZSBmb3Igc2VjdXJpdHkgcmVhc29ucy4gZmVlbCBmcmVlXHJcbiAgICAgICAgLy8gdG8gc2VuZCBhIHB1bGwgcmVxdWVzdCBpZiB5b3UgYXJlIGF3YXJlIG9mIGEgc29sdXRpb24uXHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDAgJiYgeGhyLnN0YXR1cyAhPT0gMjAwKVxyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soRXJyb3IoXCJzdGF0dXMgXCIgKyB4aHIuc3RhdHVzKSk7XHJcblxyXG4gICAgICAgIC8vIGlmIGJpbmFyeSBkYXRhIGlzIGV4cGVjdGVkLCBtYWtlIHN1cmUgdGhhdCBzb21lIHNvcnQgb2YgYXJyYXkgaXMgcmV0dXJuZWQsIGV2ZW4gaWZcclxuICAgICAgICAvLyBBcnJheUJ1ZmZlcnMgYXJlIG5vdCBzdXBwb3J0ZWQuIHRoZSBiaW5hcnkgc3RyaW5nIGZhbGxiYWNrLCBob3dldmVyLCBpcyB1bnNhZmUuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYmluYXJ5KSB7XHJcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmICghYnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeGhyLnJlc3BvbnNlVGV4dC5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIucHVzaCh4aHIucmVzcG9uc2VUZXh0LmNoYXJDb2RlQXQoaSkgJiAyNTUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB0eXBlb2YgVWludDhBcnJheSAhPT0gXCJ1bmRlZmluZWRcIiA/IG5ldyBVaW50OEFycmF5KGJ1ZmZlcikgOiBidWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zLmJpbmFyeSkge1xyXG4gICAgICAgIC8vIHJlZjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L1NlbmRpbmdfYW5kX1JlY2VpdmluZ19CaW5hcnlfRGF0YSNSZWNlaXZpbmdfYmluYXJ5X2RhdGFfaW5fb2xkZXJfYnJvd3NlcnNcclxuICAgICAgICBpZiAoXCJvdmVycmlkZU1pbWVUeXBlXCIgaW4geGhyKVxyXG4gICAgICAgICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcInRleHQvcGxhaW47IGNoYXJzZXQ9eC11c2VyLWRlZmluZWRcIik7XHJcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBmaWxlbmFtZSk7XHJcbiAgICB4aHIuc2VuZCgpO1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShmYWN0b3J5KTtcclxuXHJcbi8qKlxyXG4gKiBSZWFkcyAvIHdyaXRlcyBmbG9hdHMgLyBkb3VibGVzIGZyb20gLyB0byBidWZmZXJzLlxyXG4gKiBAbmFtZSB1dGlsLmZsb2F0XHJcbiAqIEBuYW1lc3BhY2VcclxuICovXHJcblxyXG4vKipcclxuICogV3JpdGVzIGEgMzIgYml0IGZsb2F0IHRvIGEgYnVmZmVyIHVzaW5nIGxpdHRsZSBlbmRpYW4gYnl0ZSBvcmRlci5cclxuICogQG5hbWUgdXRpbC5mbG9hdC53cml0ZUZsb2F0TEVcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWwgVmFsdWUgdG8gd3JpdGVcclxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWYgVGFyZ2V0IGJ1ZmZlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIFRhcmdldCBidWZmZXIgb2Zmc2V0XHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIDMyIGJpdCBmbG9hdCB0byBhIGJ1ZmZlciB1c2luZyBiaWcgZW5kaWFuIGJ5dGUgb3JkZXIuXHJcbiAqIEBuYW1lIHV0aWwuZmxvYXQud3JpdGVGbG9hdEJFXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmIFRhcmdldCBidWZmZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvcyBUYXJnZXQgYnVmZmVyIG9mZnNldFxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBhIDMyIGJpdCBmbG9hdCBmcm9tIGEgYnVmZmVyIHVzaW5nIGxpdHRsZSBlbmRpYW4gYnl0ZSBvcmRlci5cclxuICogQG5hbWUgdXRpbC5mbG9hdC5yZWFkRmxvYXRMRVxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWYgU291cmNlIGJ1ZmZlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIFNvdXJjZSBidWZmZXIgb2Zmc2V0XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIHJlYWRcclxuICovXHJcblxyXG4vKipcclxuICogUmVhZHMgYSAzMiBiaXQgZmxvYXQgZnJvbSBhIGJ1ZmZlciB1c2luZyBiaWcgZW5kaWFuIGJ5dGUgb3JkZXIuXHJcbiAqIEBuYW1lIHV0aWwuZmxvYXQucmVhZEZsb2F0QkVcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmIFNvdXJjZSBidWZmZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvcyBTb3VyY2UgYnVmZmVyIG9mZnNldFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIDY0IGJpdCBkb3VibGUgdG8gYSBidWZmZXIgdXNpbmcgbGl0dGxlIGVuZGlhbiBieXRlIG9yZGVyLlxyXG4gKiBAbmFtZSB1dGlsLmZsb2F0LndyaXRlRG91YmxlTEVcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWwgVmFsdWUgdG8gd3JpdGVcclxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWYgVGFyZ2V0IGJ1ZmZlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIFRhcmdldCBidWZmZXIgb2Zmc2V0XHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIDY0IGJpdCBkb3VibGUgdG8gYSBidWZmZXIgdXNpbmcgYmlnIGVuZGlhbiBieXRlIG9yZGVyLlxyXG4gKiBAbmFtZSB1dGlsLmZsb2F0LndyaXRlRG91YmxlQkVcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWwgVmFsdWUgdG8gd3JpdGVcclxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWYgVGFyZ2V0IGJ1ZmZlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIFRhcmdldCBidWZmZXIgb2Zmc2V0XHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFJlYWRzIGEgNjQgYml0IGRvdWJsZSBmcm9tIGEgYnVmZmVyIHVzaW5nIGxpdHRsZSBlbmRpYW4gYnl0ZSBvcmRlci5cclxuICogQG5hbWUgdXRpbC5mbG9hdC5yZWFkRG91YmxlTEVcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmIFNvdXJjZSBidWZmZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvcyBTb3VyY2UgYnVmZmVyIG9mZnNldFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFJlYWRzIGEgNjQgYml0IGRvdWJsZSBmcm9tIGEgYnVmZmVyIHVzaW5nIGJpZyBlbmRpYW4gYnl0ZSBvcmRlci5cclxuICogQG5hbWUgdXRpbC5mbG9hdC5yZWFkRG91YmxlQkVcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmIFNvdXJjZSBidWZmZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvcyBTb3VyY2UgYnVmZmVyIG9mZnNldFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXHJcbiAqL1xyXG5cclxuLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgdGhlIHB1cnBvc2Ugb2Ygbm9kZS1iYXNlZCB0ZXN0aW5nIGluIG1vZGlmaWVkIGdsb2JhbCBlbnZpcm9ubWVudHNcclxuZnVuY3Rpb24gZmFjdG9yeShleHBvcnRzKSB7XHJcblxyXG4gICAgLy8gZmxvYXQ6IHR5cGVkIGFycmF5XHJcbiAgICBpZiAodHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gXCJ1bmRlZmluZWRcIikgKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgZjMyID0gbmV3IEZsb2F0MzJBcnJheShbIC0wIF0pLFxyXG4gICAgICAgICAgICBmOGIgPSBuZXcgVWludDhBcnJheShmMzIuYnVmZmVyKSxcclxuICAgICAgICAgICAgbGUgID0gZjhiWzNdID09PSAxMjg7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHdyaXRlRmxvYXRfZjMyX2NweSh2YWwsIGJ1ZiwgcG9zKSB7XHJcbiAgICAgICAgICAgIGYzMlswXSA9IHZhbDtcclxuICAgICAgICAgICAgYnVmW3BvcyAgICBdID0gZjhiWzBdO1xyXG4gICAgICAgICAgICBidWZbcG9zICsgMV0gPSBmOGJbMV07XHJcbiAgICAgICAgICAgIGJ1Zltwb3MgKyAyXSA9IGY4YlsyXTtcclxuICAgICAgICAgICAgYnVmW3BvcyArIDNdID0gZjhiWzNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gd3JpdGVGbG9hdF9mMzJfcmV2KHZhbCwgYnVmLCBwb3MpIHtcclxuICAgICAgICAgICAgZjMyWzBdID0gdmFsO1xyXG4gICAgICAgICAgICBidWZbcG9zICAgIF0gPSBmOGJbM107XHJcbiAgICAgICAgICAgIGJ1Zltwb3MgKyAxXSA9IGY4YlsyXTtcclxuICAgICAgICAgICAgYnVmW3BvcyArIDJdID0gZjhiWzFdO1xyXG4gICAgICAgICAgICBidWZbcG9zICsgM10gPSBmOGJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgIGV4cG9ydHMud3JpdGVGbG9hdExFID0gbGUgPyB3cml0ZUZsb2F0X2YzMl9jcHkgOiB3cml0ZUZsb2F0X2YzMl9yZXY7XHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICBleHBvcnRzLndyaXRlRmxvYXRCRSA9IGxlID8gd3JpdGVGbG9hdF9mMzJfcmV2IDogd3JpdGVGbG9hdF9mMzJfY3B5O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWFkRmxvYXRfZjMyX2NweShidWYsIHBvcykge1xyXG4gICAgICAgICAgICBmOGJbMF0gPSBidWZbcG9zICAgIF07XHJcbiAgICAgICAgICAgIGY4YlsxXSA9IGJ1Zltwb3MgKyAxXTtcclxuICAgICAgICAgICAgZjhiWzJdID0gYnVmW3BvcyArIDJdO1xyXG4gICAgICAgICAgICBmOGJbM10gPSBidWZbcG9zICsgM107XHJcbiAgICAgICAgICAgIHJldHVybiBmMzJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWFkRmxvYXRfZjMyX3JldihidWYsIHBvcykge1xyXG4gICAgICAgICAgICBmOGJbM10gPSBidWZbcG9zICAgIF07XHJcbiAgICAgICAgICAgIGY4YlsyXSA9IGJ1Zltwb3MgKyAxXTtcclxuICAgICAgICAgICAgZjhiWzFdID0gYnVmW3BvcyArIDJdO1xyXG4gICAgICAgICAgICBmOGJbMF0gPSBidWZbcG9zICsgM107XHJcbiAgICAgICAgICAgIHJldHVybiBmMzJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgIGV4cG9ydHMucmVhZEZsb2F0TEUgPSBsZSA/IHJlYWRGbG9hdF9mMzJfY3B5IDogcmVhZEZsb2F0X2YzMl9yZXY7XHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICBleHBvcnRzLnJlYWRGbG9hdEJFID0gbGUgPyByZWFkRmxvYXRfZjMyX3JldiA6IHJlYWRGbG9hdF9mMzJfY3B5O1xyXG5cclxuICAgIC8vIGZsb2F0OiBpZWVlNzU0XHJcbiAgICB9KSgpOyBlbHNlIChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gd3JpdGVGbG9hdF9pZWVlNzU0KHdyaXRlVWludCwgdmFsLCBidWYsIHBvcykge1xyXG4gICAgICAgICAgICB2YXIgc2lnbiA9IHZhbCA8IDAgPyAxIDogMDtcclxuICAgICAgICAgICAgaWYgKHNpZ24pXHJcbiAgICAgICAgICAgICAgICB2YWwgPSAtdmFsO1xyXG4gICAgICAgICAgICBpZiAodmFsID09PSAwKVxyXG4gICAgICAgICAgICAgICAgd3JpdGVVaW50KDEgLyB2YWwgPiAwID8gLyogcG9zaXRpdmUgKi8gMCA6IC8qIG5lZ2F0aXZlIDAgKi8gMjE0NzQ4MzY0OCwgYnVmLCBwb3MpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChpc05hTih2YWwpKVxyXG4gICAgICAgICAgICAgICAgd3JpdGVVaW50KDIxNDMyODkzNDQsIGJ1ZiwgcG9zKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsID4gMy40MDI4MjM0NjYzODUyODg2ZSszOCkgLy8gKy1JbmZpbml0eVxyXG4gICAgICAgICAgICAgICAgd3JpdGVVaW50KChzaWduIDw8IDMxIHwgMjEzOTA5NTA0MCkgPj4+IDAsIGJ1ZiwgcG9zKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsIDwgMS4xNzU0OTQzNTA4MjIyODc1ZS0zOCkgLy8gZGVub3JtYWxcclxuICAgICAgICAgICAgICAgIHdyaXRlVWludCgoc2lnbiA8PCAzMSB8IE1hdGgucm91bmQodmFsIC8gMS40MDEyOTg0NjQzMjQ4MTdlLTQ1KSkgPj4+IDAsIGJ1ZiwgcG9zKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXhwb25lbnQgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbCkgLyBNYXRoLkxOMiksXHJcbiAgICAgICAgICAgICAgICAgICAgbWFudGlzc2EgPSBNYXRoLnJvdW5kKHZhbCAqIE1hdGgucG93KDIsIC1leHBvbmVudCkgKiA4Mzg4NjA4KSAmIDgzODg2MDc7XHJcbiAgICAgICAgICAgICAgICB3cml0ZVVpbnQoKHNpZ24gPDwgMzEgfCBleHBvbmVudCArIDEyNyA8PCAyMyB8IG1hbnRpc3NhKSA+Pj4gMCwgYnVmLCBwb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHBvcnRzLndyaXRlRmxvYXRMRSA9IHdyaXRlRmxvYXRfaWVlZTc1NC5iaW5kKG51bGwsIHdyaXRlVWludExFKTtcclxuICAgICAgICBleHBvcnRzLndyaXRlRmxvYXRCRSA9IHdyaXRlRmxvYXRfaWVlZTc1NC5iaW5kKG51bGwsIHdyaXRlVWludEJFKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVhZEZsb2F0X2llZWU3NTQocmVhZFVpbnQsIGJ1ZiwgcG9zKSB7XHJcbiAgICAgICAgICAgIHZhciB1aW50ID0gcmVhZFVpbnQoYnVmLCBwb3MpLFxyXG4gICAgICAgICAgICAgICAgc2lnbiA9ICh1aW50ID4+IDMxKSAqIDIgKyAxLFxyXG4gICAgICAgICAgICAgICAgZXhwb25lbnQgPSB1aW50ID4+PiAyMyAmIDI1NSxcclxuICAgICAgICAgICAgICAgIG1hbnRpc3NhID0gdWludCAmIDgzODg2MDc7XHJcbiAgICAgICAgICAgIHJldHVybiBleHBvbmVudCA9PT0gMjU1XHJcbiAgICAgICAgICAgICAgICA/IG1hbnRpc3NhXHJcbiAgICAgICAgICAgICAgICA/IE5hTlxyXG4gICAgICAgICAgICAgICAgOiBzaWduICogSW5maW5pdHlcclxuICAgICAgICAgICAgICAgIDogZXhwb25lbnQgPT09IDAgLy8gZGVub3JtYWxcclxuICAgICAgICAgICAgICAgID8gc2lnbiAqIDEuNDAxMjk4NDY0MzI0ODE3ZS00NSAqIG1hbnRpc3NhXHJcbiAgICAgICAgICAgICAgICA6IHNpZ24gKiBNYXRoLnBvdygyLCBleHBvbmVudCAtIDE1MCkgKiAobWFudGlzc2EgKyA4Mzg4NjA4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydHMucmVhZEZsb2F0TEUgPSByZWFkRmxvYXRfaWVlZTc1NC5iaW5kKG51bGwsIHJlYWRVaW50TEUpO1xyXG4gICAgICAgIGV4cG9ydHMucmVhZEZsb2F0QkUgPSByZWFkRmxvYXRfaWVlZTc1NC5iaW5kKG51bGwsIHJlYWRVaW50QkUpO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gZG91YmxlOiB0eXBlZCBhcnJheVxyXG4gICAgaWYgKHR5cGVvZiBGbG9hdDY0QXJyYXkgIT09IFwidW5kZWZpbmVkXCIpIChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGY2NCA9IG5ldyBGbG9hdDY0QXJyYXkoWy0wXSksXHJcbiAgICAgICAgICAgIGY4YiA9IG5ldyBVaW50OEFycmF5KGY2NC5idWZmZXIpLFxyXG4gICAgICAgICAgICBsZSAgPSBmOGJbN10gPT09IDEyODtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gd3JpdGVEb3VibGVfZjY0X2NweSh2YWwsIGJ1ZiwgcG9zKSB7XHJcbiAgICAgICAgICAgIGY2NFswXSA9IHZhbDtcclxuICAgICAgICAgICAgYnVmW3BvcyAgICBdID0gZjhiWzBdO1xyXG4gICAgICAgICAgICBidWZbcG9zICsgMV0gPSBmOGJbMV07XHJcbiAgICAgICAgICAgIGJ1Zltwb3MgKyAyXSA9IGY4YlsyXTtcclxuICAgICAgICAgICAgYnVmW3BvcyArIDNdID0gZjhiWzNdO1xyXG4gICAgICAgICAgICBidWZbcG9zICsgNF0gPSBmOGJbNF07XHJcbiAgICAgICAgICAgIGJ1Zltwb3MgKyA1XSA9IGY4Yls1XTtcclxuICAgICAgICAgICAgYnVmW3BvcyArIDZdID0gZjhiWzZdO1xyXG4gICAgICAgICAgICBidWZbcG9zICsgN10gPSBmOGJbN107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB3cml0ZURvdWJsZV9mNjRfcmV2KHZhbCwgYnVmLCBwb3MpIHtcclxuICAgICAgICAgICAgZjY0WzBdID0gdmFsO1xyXG4gICAgICAgICAgICBidWZbcG9zICAgIF0gPSBmOGJbN107XHJcbiAgICAgICAgICAgIGJ1Zltwb3MgKyAxXSA9IGY4Yls2XTtcclxuICAgICAgICAgICAgYnVmW3BvcyArIDJdID0gZjhiWzVdO1xyXG4gICAgICAgICAgICBidWZbcG9zICsgM10gPSBmOGJbNF07XHJcbiAgICAgICAgICAgIGJ1Zltwb3MgKyA0XSA9IGY4YlszXTtcclxuICAgICAgICAgICAgYnVmW3BvcyArIDVdID0gZjhiWzJdO1xyXG4gICAgICAgICAgICBidWZbcG9zICsgNl0gPSBmOGJbMV07XHJcbiAgICAgICAgICAgIGJ1Zltwb3MgKyA3XSA9IGY4YlswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgZXhwb3J0cy53cml0ZURvdWJsZUxFID0gbGUgPyB3cml0ZURvdWJsZV9mNjRfY3B5IDogd3JpdGVEb3VibGVfZjY0X3JldjtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgIGV4cG9ydHMud3JpdGVEb3VibGVCRSA9IGxlID8gd3JpdGVEb3VibGVfZjY0X3JldiA6IHdyaXRlRG91YmxlX2Y2NF9jcHk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlYWREb3VibGVfZjY0X2NweShidWYsIHBvcykge1xyXG4gICAgICAgICAgICBmOGJbMF0gPSBidWZbcG9zICAgIF07XHJcbiAgICAgICAgICAgIGY4YlsxXSA9IGJ1Zltwb3MgKyAxXTtcclxuICAgICAgICAgICAgZjhiWzJdID0gYnVmW3BvcyArIDJdO1xyXG4gICAgICAgICAgICBmOGJbM10gPSBidWZbcG9zICsgM107XHJcbiAgICAgICAgICAgIGY4Yls0XSA9IGJ1Zltwb3MgKyA0XTtcclxuICAgICAgICAgICAgZjhiWzVdID0gYnVmW3BvcyArIDVdO1xyXG4gICAgICAgICAgICBmOGJbNl0gPSBidWZbcG9zICsgNl07XHJcbiAgICAgICAgICAgIGY4Yls3XSA9IGJ1Zltwb3MgKyA3XTtcclxuICAgICAgICAgICAgcmV0dXJuIGY2NFswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlYWREb3VibGVfZjY0X3JldihidWYsIHBvcykge1xyXG4gICAgICAgICAgICBmOGJbN10gPSBidWZbcG9zICAgIF07XHJcbiAgICAgICAgICAgIGY4Yls2XSA9IGJ1Zltwb3MgKyAxXTtcclxuICAgICAgICAgICAgZjhiWzVdID0gYnVmW3BvcyArIDJdO1xyXG4gICAgICAgICAgICBmOGJbNF0gPSBidWZbcG9zICsgM107XHJcbiAgICAgICAgICAgIGY4YlszXSA9IGJ1Zltwb3MgKyA0XTtcclxuICAgICAgICAgICAgZjhiWzJdID0gYnVmW3BvcyArIDVdO1xyXG4gICAgICAgICAgICBmOGJbMV0gPSBidWZbcG9zICsgNl07XHJcbiAgICAgICAgICAgIGY4YlswXSA9IGJ1Zltwb3MgKyA3XTtcclxuICAgICAgICAgICAgcmV0dXJuIGY2NFswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgZXhwb3J0cy5yZWFkRG91YmxlTEUgPSBsZSA/IHJlYWREb3VibGVfZjY0X2NweSA6IHJlYWREb3VibGVfZjY0X3JldjtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgIGV4cG9ydHMucmVhZERvdWJsZUJFID0gbGUgPyByZWFkRG91YmxlX2Y2NF9yZXYgOiByZWFkRG91YmxlX2Y2NF9jcHk7XHJcblxyXG4gICAgLy8gZG91YmxlOiBpZWVlNzU0XHJcbiAgICB9KSgpOyBlbHNlIChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gd3JpdGVEb3VibGVfaWVlZTc1NCh3cml0ZVVpbnQsIG9mZjAsIG9mZjEsIHZhbCwgYnVmLCBwb3MpIHtcclxuICAgICAgICAgICAgdmFyIHNpZ24gPSB2YWwgPCAwID8gMSA6IDA7XHJcbiAgICAgICAgICAgIGlmIChzaWduKVxyXG4gICAgICAgICAgICAgICAgdmFsID0gLXZhbDtcclxuICAgICAgICAgICAgaWYgKHZhbCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVVaW50KDAsIGJ1ZiwgcG9zICsgb2ZmMCk7XHJcbiAgICAgICAgICAgICAgICB3cml0ZVVpbnQoMSAvIHZhbCA+IDAgPyAvKiBwb3NpdGl2ZSAqLyAwIDogLyogbmVnYXRpdmUgMCAqLyAyMTQ3NDgzNjQ4LCBidWYsIHBvcyArIG9mZjEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTmFOKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHdyaXRlVWludCgwLCBidWYsIHBvcyArIG9mZjApO1xyXG4gICAgICAgICAgICAgICAgd3JpdGVVaW50KDIxNDY5NTkzNjAsIGJ1ZiwgcG9zICsgb2ZmMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsID4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDgpIHsgLy8gKy1JbmZpbml0eVxyXG4gICAgICAgICAgICAgICAgd3JpdGVVaW50KDAsIGJ1ZiwgcG9zICsgb2ZmMCk7XHJcbiAgICAgICAgICAgICAgICB3cml0ZVVpbnQoKHNpZ24gPDwgMzEgfCAyMTQ2NDM1MDcyKSA+Pj4gMCwgYnVmLCBwb3MgKyBvZmYxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYW50aXNzYTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgPCAyLjIyNTA3Mzg1ODUwNzIwMTRlLTMwOCkgeyAvLyBkZW5vcm1hbFxyXG4gICAgICAgICAgICAgICAgICAgIG1hbnRpc3NhID0gdmFsIC8gNWUtMzI0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlVWludChtYW50aXNzYSA+Pj4gMCwgYnVmLCBwb3MgKyBvZmYwKTtcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZVVpbnQoKHNpZ24gPDwgMzEgfCBtYW50aXNzYSAvIDQyOTQ5NjcyOTYpID4+PiAwLCBidWYsIHBvcyArIG9mZjEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwb25lbnQgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbCkgLyBNYXRoLkxOMik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cG9uZW50ID09PSAxMDI0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvbmVudCA9IDEwMjM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFudGlzc2EgPSB2YWwgKiBNYXRoLnBvdygyLCAtZXhwb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlVWludChtYW50aXNzYSAqIDQ1MDM1OTk2MjczNzA0OTYgPj4+IDAsIGJ1ZiwgcG9zICsgb2ZmMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVVaW50KChzaWduIDw8IDMxIHwgZXhwb25lbnQgKyAxMDIzIDw8IDIwIHwgbWFudGlzc2EgKiAxMDQ4NTc2ICYgMTA0ODU3NSkgPj4+IDAsIGJ1ZiwgcG9zICsgb2ZmMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydHMud3JpdGVEb3VibGVMRSA9IHdyaXRlRG91YmxlX2llZWU3NTQuYmluZChudWxsLCB3cml0ZVVpbnRMRSwgMCwgNCk7XHJcbiAgICAgICAgZXhwb3J0cy53cml0ZURvdWJsZUJFID0gd3JpdGVEb3VibGVfaWVlZTc1NC5iaW5kKG51bGwsIHdyaXRlVWludEJFLCA0LCAwKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVhZERvdWJsZV9pZWVlNzU0KHJlYWRVaW50LCBvZmYwLCBvZmYxLCBidWYsIHBvcykge1xyXG4gICAgICAgICAgICB2YXIgbG8gPSByZWFkVWludChidWYsIHBvcyArIG9mZjApLFxyXG4gICAgICAgICAgICAgICAgaGkgPSByZWFkVWludChidWYsIHBvcyArIG9mZjEpO1xyXG4gICAgICAgICAgICB2YXIgc2lnbiA9IChoaSA+PiAzMSkgKiAyICsgMSxcclxuICAgICAgICAgICAgICAgIGV4cG9uZW50ID0gaGkgPj4+IDIwICYgMjA0NyxcclxuICAgICAgICAgICAgICAgIG1hbnRpc3NhID0gNDI5NDk2NzI5NiAqIChoaSAmIDEwNDg1NzUpICsgbG87XHJcbiAgICAgICAgICAgIHJldHVybiBleHBvbmVudCA9PT0gMjA0N1xyXG4gICAgICAgICAgICAgICAgPyBtYW50aXNzYVxyXG4gICAgICAgICAgICAgICAgPyBOYU5cclxuICAgICAgICAgICAgICAgIDogc2lnbiAqIEluZmluaXR5XHJcbiAgICAgICAgICAgICAgICA6IGV4cG9uZW50ID09PSAwIC8vIGRlbm9ybWFsXHJcbiAgICAgICAgICAgICAgICA/IHNpZ24gKiA1ZS0zMjQgKiBtYW50aXNzYVxyXG4gICAgICAgICAgICAgICAgOiBzaWduICogTWF0aC5wb3coMiwgZXhwb25lbnQgLSAxMDc1KSAqIChtYW50aXNzYSArIDQ1MDM1OTk2MjczNzA0OTYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwb3J0cy5yZWFkRG91YmxlTEUgPSByZWFkRG91YmxlX2llZWU3NTQuYmluZChudWxsLCByZWFkVWludExFLCAwLCA0KTtcclxuICAgICAgICBleHBvcnRzLnJlYWREb3VibGVCRSA9IHJlYWREb3VibGVfaWVlZTc1NC5iaW5kKG51bGwsIHJlYWRVaW50QkUsIDQsIDApO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgcmV0dXJuIGV4cG9ydHM7XHJcbn1cclxuXHJcbi8vIHVpbnQgaGVscGVyc1xyXG5cclxuZnVuY3Rpb24gd3JpdGVVaW50TEUodmFsLCBidWYsIHBvcykge1xyXG4gICAgYnVmW3BvcyAgICBdID0gIHZhbCAgICAgICAgJiAyNTU7XHJcbiAgICBidWZbcG9zICsgMV0gPSAgdmFsID4+PiA4ICAmIDI1NTtcclxuICAgIGJ1Zltwb3MgKyAyXSA9ICB2YWwgPj4+IDE2ICYgMjU1O1xyXG4gICAgYnVmW3BvcyArIDNdID0gIHZhbCA+Pj4gMjQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlVWludEJFKHZhbCwgYnVmLCBwb3MpIHtcclxuICAgIGJ1Zltwb3MgICAgXSA9ICB2YWwgPj4+IDI0O1xyXG4gICAgYnVmW3BvcyArIDFdID0gIHZhbCA+Pj4gMTYgJiAyNTU7XHJcbiAgICBidWZbcG9zICsgMl0gPSAgdmFsID4+PiA4ICAmIDI1NTtcclxuICAgIGJ1Zltwb3MgKyAzXSA9ICB2YWwgICAgICAgICYgMjU1O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkVWludExFKGJ1ZiwgcG9zKSB7XHJcbiAgICByZXR1cm4gKGJ1Zltwb3MgICAgXVxyXG4gICAgICAgICAgfCBidWZbcG9zICsgMV0gPDwgOFxyXG4gICAgICAgICAgfCBidWZbcG9zICsgMl0gPDwgMTZcclxuICAgICAgICAgIHwgYnVmW3BvcyArIDNdIDw8IDI0KSA+Pj4gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZFVpbnRCRShidWYsIHBvcykge1xyXG4gICAgcmV0dXJuIChidWZbcG9zICAgIF0gPDwgMjRcclxuICAgICAgICAgIHwgYnVmW3BvcyArIDFdIDw8IDE2XHJcbiAgICAgICAgICB8IGJ1Zltwb3MgKyAyXSA8PCA4XHJcbiAgICAgICAgICB8IGJ1Zltwb3MgKyAzXSkgPj4+IDA7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gaW5xdWlyZTtcclxuXHJcbi8qKlxyXG4gKiBSZXF1aXJlcyBhIG1vZHVsZSBvbmx5IGlmIGF2YWlsYWJsZS5cclxuICogQG1lbWJlcm9mIHV0aWxcclxuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZU5hbWUgTW9kdWxlIHRvIHJlcXVpcmVcclxuICogQHJldHVybnMgez9PYmplY3R9IFJlcXVpcmVkIG1vZHVsZSBpZiBhdmFpbGFibGUgYW5kIG5vdCBlbXB0eSwgb3RoZXJ3aXNlIGBudWxsYFxyXG4gKi9cclxuZnVuY3Rpb24gaW5xdWlyZShtb2R1bGVOYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBtb2QgPSBldmFsKFwicXVpcmVcIi5yZXBsYWNlKC9eLyxcInJlXCIpKShtb2R1bGVOYW1lKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXHJcbiAgICAgICAgaWYgKG1vZCAmJiAobW9kLmxlbmd0aCB8fCBPYmplY3Qua2V5cyhtb2QpLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIHJldHVybiBtb2Q7XHJcbiAgICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBBIG1pbmltYWwgcGF0aCBtb2R1bGUgdG8gcmVzb2x2ZSBVbml4LCBXaW5kb3dzIGFuZCBVUkwgcGF0aHMgYWxpa2UuXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBuYW1lc3BhY2VcclxuICovXHJcbnZhciBwYXRoID0gZXhwb3J0cztcclxuXHJcbnZhciBpc0Fic29sdXRlID1cclxuLyoqXHJcbiAqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgcGF0aCBpcyBhYnNvbHV0ZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgcGF0aCBpcyBhYnNvbHV0ZVxyXG4gKi9cclxucGF0aC5pc0Fic29sdXRlID0gZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRoKSB7XHJcbiAgICByZXR1cm4gL14oPzpcXC98XFx3KzopLy50ZXN0KHBhdGgpO1xyXG59O1xyXG5cclxudmFyIG5vcm1hbGl6ZSA9XHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIHRoZSBzcGVjaWZpZWQgcGF0aC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3N0cmluZ30gTm9ybWFsaXplZCBwYXRoXHJcbiAqL1xyXG5wYXRoLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZShwYXRoKSB7XHJcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIik7XHJcbiAgICB2YXIgcGFydHMgICAgPSBwYXRoLnNwbGl0KFwiL1wiKSxcclxuICAgICAgICBhYnNvbHV0ZSA9IGlzQWJzb2x1dGUocGF0aCksXHJcbiAgICAgICAgcHJlZml4ICAgPSBcIlwiO1xyXG4gICAgaWYgKGFic29sdXRlKVxyXG4gICAgICAgIHByZWZpeCA9IHBhcnRzLnNoaWZ0KCkgKyBcIi9cIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOykge1xyXG4gICAgICAgIGlmIChwYXJ0c1tpXSA9PT0gXCIuLlwiKSB7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCAmJiBwYXJ0c1tpIC0gMV0gIT09IFwiLi5cIilcclxuICAgICAgICAgICAgICAgIHBhcnRzLnNwbGljZSgtLWksIDIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChhYnNvbHV0ZSlcclxuICAgICAgICAgICAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFydHNbaV0gPT09IFwiLlwiKVxyXG4gICAgICAgICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICArK2k7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlZml4ICsgcGFydHMuam9pbihcIi9cIik7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVzb2x2ZXMgdGhlIHNwZWNpZmllZCBpbmNsdWRlIHBhdGggYWdhaW5zdCB0aGUgc3BlY2lmaWVkIG9yaWdpbiBwYXRoLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luUGF0aCBQYXRoIHRvIHRoZSBvcmlnaW4gZmlsZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5jbHVkZVBhdGggSW5jbHVkZSBwYXRoIHJlbGF0aXZlIHRvIG9yaWdpbiBwYXRoXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FscmVhZHlOb3JtYWxpemVkPWZhbHNlXSBgdHJ1ZWAgaWYgYm90aCBwYXRocyBhcmUgYWxyZWFkeSBrbm93biB0byBiZSBub3JtYWxpemVkXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFBhdGggdG8gdGhlIGluY2x1ZGUgZmlsZVxyXG4gKi9cclxucGF0aC5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZShvcmlnaW5QYXRoLCBpbmNsdWRlUGF0aCwgYWxyZWFkeU5vcm1hbGl6ZWQpIHtcclxuICAgIGlmICghYWxyZWFkeU5vcm1hbGl6ZWQpXHJcbiAgICAgICAgaW5jbHVkZVBhdGggPSBub3JtYWxpemUoaW5jbHVkZVBhdGgpO1xyXG4gICAgaWYgKGlzQWJzb2x1dGUoaW5jbHVkZVBhdGgpKVxyXG4gICAgICAgIHJldHVybiBpbmNsdWRlUGF0aDtcclxuICAgIGlmICghYWxyZWFkeU5vcm1hbGl6ZWQpXHJcbiAgICAgICAgb3JpZ2luUGF0aCA9IG5vcm1hbGl6ZShvcmlnaW5QYXRoKTtcclxuICAgIHJldHVybiAob3JpZ2luUGF0aCA9IG9yaWdpblBhdGgucmVwbGFjZSgvKD86XFwvfF4pW14vXSskLywgXCJcIikpLmxlbmd0aCA/IG5vcm1hbGl6ZShvcmlnaW5QYXRoICsgXCIvXCIgKyBpbmNsdWRlUGF0aCkgOiBpbmNsdWRlUGF0aDtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gcG9vbDtcclxuXHJcbi8qKlxyXG4gKiBBbiBhbGxvY2F0b3IgYXMgdXNlZCBieSB7QGxpbmsgdXRpbC5wb29sfS5cclxuICogQHR5cGVkZWYgUG9vbEFsbG9jYXRvclxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIEJ1ZmZlciBzaXplXHJcbiAqIEByZXR1cm5zIHtVaW50OEFycmF5fSBCdWZmZXJcclxuICovXHJcblxyXG4vKipcclxuICogQSBzbGljZXIgYXMgdXNlZCBieSB7QGxpbmsgdXRpbC5wb29sfS5cclxuICogQHR5cGVkZWYgUG9vbFNsaWNlclxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTdGFydCBvZmZzZXRcclxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQgb2Zmc2V0XHJcbiAqIEByZXR1cm5zIHtVaW50OEFycmF5fSBCdWZmZXIgc2xpY2VcclxuICogQHRoaXMge1VpbnQ4QXJyYXl9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEEgZ2VuZXJhbCBwdXJwb3NlIGJ1ZmZlciBwb29sLlxyXG4gKiBAbWVtYmVyb2YgdXRpbFxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtQb29sQWxsb2NhdG9yfSBhbGxvYyBBbGxvY2F0b3JcclxuICogQHBhcmFtIHtQb29sU2xpY2VyfSBzbGljZSBTbGljZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTgxOTJdIFNsYWIgc2l6ZVxyXG4gKiBAcmV0dXJucyB7UG9vbEFsbG9jYXRvcn0gUG9vbGVkIGFsbG9jYXRvclxyXG4gKi9cclxuZnVuY3Rpb24gcG9vbChhbGxvYywgc2xpY2UsIHNpemUpIHtcclxuICAgIHZhciBTSVpFICAgPSBzaXplIHx8IDgxOTI7XHJcbiAgICB2YXIgTUFYICAgID0gU0laRSA+Pj4gMTtcclxuICAgIHZhciBzbGFiICAgPSBudWxsO1xyXG4gICAgdmFyIG9mZnNldCA9IFNJWkU7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gcG9vbF9hbGxvYyhzaXplKSB7XHJcbiAgICAgICAgaWYgKHNpemUgPCAxIHx8IHNpemUgPiBNQVgpXHJcbiAgICAgICAgICAgIHJldHVybiBhbGxvYyhzaXplKTtcclxuICAgICAgICBpZiAob2Zmc2V0ICsgc2l6ZSA+IFNJWkUpIHtcclxuICAgICAgICAgICAgc2xhYiA9IGFsbG9jKFNJWkUpO1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYnVmID0gc2xpY2UuY2FsbChzbGFiLCBvZmZzZXQsIG9mZnNldCArPSBzaXplKTtcclxuICAgICAgICBpZiAob2Zmc2V0ICYgNykgLy8gYWxpZ24gdG8gMzIgYml0XHJcbiAgICAgICAgICAgIG9mZnNldCA9IChvZmZzZXQgfCA3KSArIDE7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgIH07XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKipcclxuICogQSBtaW5pbWFsIFVURjggaW1wbGVtZW50YXRpb24gZm9yIG51bWJlciBhcnJheXMuXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBuYW1lc3BhY2VcclxuICovXHJcbnZhciB1dGY4ID0gZXhwb3J0cztcclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBVVEY4IGJ5dGUgbGVuZ3RoIG9mIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFN0cmluZ1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBCeXRlIGxlbmd0aFxyXG4gKi9cclxudXRmOC5sZW5ndGggPSBmdW5jdGlvbiB1dGY4X2xlbmd0aChzdHJpbmcpIHtcclxuICAgIHZhciBsZW4gPSAwLFxyXG4gICAgICAgIGMgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaWYgKGMgPCAxMjgpXHJcbiAgICAgICAgICAgIGxlbiArPSAxO1xyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KVxyXG4gICAgICAgICAgICBsZW4gKz0gMjtcclxuICAgICAgICBlbHNlIGlmICgoYyAmIDB4RkMwMCkgPT09IDB4RDgwMCAmJiAoc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpICYgMHhGQzAwKSA9PT0gMHhEQzAwKSB7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgbGVuICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGxlbiArPSAzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlbjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBVVEY4IGJ5dGVzIGFzIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciBTb3VyY2UgYnVmZmVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTb3VyY2Ugc3RhcnRcclxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBTb3VyY2UgZW5kXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFN0cmluZyByZWFkXHJcbiAqL1xyXG51dGY4LnJlYWQgPSBmdW5jdGlvbiB1dGY4X3JlYWQoYnVmZmVyLCBzdGFydCwgZW5kKSB7XHJcbiAgICB2YXIgbGVuID0gZW5kIC0gc3RhcnQ7XHJcbiAgICBpZiAobGVuIDwgMSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIHZhciBwYXJ0cyA9IG51bGwsXHJcbiAgICAgICAgY2h1bmsgPSBbXSxcclxuICAgICAgICBpID0gMCwgLy8gY2hhciBvZmZzZXRcclxuICAgICAgICB0OyAgICAgLy8gdGVtcG9yYXJ5XHJcbiAgICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcclxuICAgICAgICB0ID0gYnVmZmVyW3N0YXJ0KytdO1xyXG4gICAgICAgIGlmICh0IDwgMTI4KVxyXG4gICAgICAgICAgICBjaHVua1tpKytdID0gdDtcclxuICAgICAgICBlbHNlIGlmICh0ID4gMTkxICYmIHQgPCAyMjQpXHJcbiAgICAgICAgICAgIGNodW5rW2krK10gPSAodCAmIDMxKSA8PCA2IHwgYnVmZmVyW3N0YXJ0KytdICYgNjM7XHJcbiAgICAgICAgZWxzZSBpZiAodCA+IDIzOSAmJiB0IDwgMzY1KSB7XHJcbiAgICAgICAgICAgIHQgPSAoKHQgJiA3KSA8PCAxOCB8IChidWZmZXJbc3RhcnQrK10gJiA2MykgPDwgMTIgfCAoYnVmZmVyW3N0YXJ0KytdICYgNjMpIDw8IDYgfCBidWZmZXJbc3RhcnQrK10gJiA2MykgLSAweDEwMDAwO1xyXG4gICAgICAgICAgICBjaHVua1tpKytdID0gMHhEODAwICsgKHQgPj4gMTApO1xyXG4gICAgICAgICAgICBjaHVua1tpKytdID0gMHhEQzAwICsgKHQgJiAxMDIzKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9ICh0ICYgMTUpIDw8IDEyIHwgKGJ1ZmZlcltzdGFydCsrXSAmIDYzKSA8PCA2IHwgYnVmZmVyW3N0YXJ0KytdICYgNjM7XHJcbiAgICAgICAgaWYgKGkgPiA4MTkxKSB7XHJcbiAgICAgICAgICAgIChwYXJ0cyB8fCAocGFydHMgPSBbXSkpLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNodW5rKSk7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYXJ0cykge1xyXG4gICAgICAgIGlmIChpKVxyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuay5zbGljZSgwLCBpKSkpO1xyXG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuay5zbGljZSgwLCBpKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogV3JpdGVzIGEgc3RyaW5nIGFzIFVURjggYnl0ZXMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgU291cmNlIHN0cmluZ1xyXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciBEZXN0aW5hdGlvbiBidWZmZXJcclxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBEZXN0aW5hdGlvbiBvZmZzZXRcclxuICogQHJldHVybnMge251bWJlcn0gQnl0ZXMgd3JpdHRlblxyXG4gKi9cclxudXRmOC53cml0ZSA9IGZ1bmN0aW9uIHV0Zjhfd3JpdGUoc3RyaW5nLCBidWZmZXIsIG9mZnNldCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gb2Zmc2V0LFxyXG4gICAgICAgIGMxLCAvLyBjaGFyYWN0ZXIgMVxyXG4gICAgICAgIGMyOyAvLyBjaGFyYWN0ZXIgMlxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBjMSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjMSA8IDEyOCkge1xyXG4gICAgICAgICAgICBidWZmZXJbb2Zmc2V0KytdID0gYzE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjMSA8IDIwNDgpIHtcclxuICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9IGMxID4+IDYgICAgICAgfCAxOTI7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQrK10gPSBjMSAgICAgICAmIDYzIHwgMTI4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGQzAwKSA9PT0gMHhEODAwICYmICgoYzIgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSkpICYgMHhGQzAwKSA9PT0gMHhEQzAwKSB7XHJcbiAgICAgICAgICAgIGMxID0gMHgxMDAwMCArICgoYzEgJiAweDAzRkYpIDw8IDEwKSArIChjMiAmIDB4MDNGRik7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9IGMxID4+IDE4ICAgICAgfCAyNDA7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQrK10gPSBjMSA+PiAxMiAmIDYzIHwgMTI4O1xyXG4gICAgICAgICAgICBidWZmZXJbb2Zmc2V0KytdID0gYzEgPj4gNiAgJiA2MyB8IDEyODtcclxuICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9IGMxICAgICAgICYgNjMgfCAxMjg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9IGMxID4+IDEyICAgICAgfCAyMjQ7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQrK10gPSBjMSA+PiA2ICAmIDYzIHwgMTI4O1xyXG4gICAgICAgICAgICBidWZmZXJbb2Zmc2V0KytdID0gYzEgICAgICAgJiA2MyB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2Zmc2V0IC0gc3RhcnQ7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBmdWxsIGxpYnJhcnkgZW50cnkgcG9pbnQuXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9zcmMvaW5kZXhcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbW1vbjtcclxuXHJcbnZhciBjb21tb25SZSA9IC9cXC98XFwuLztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBjb21tb24gdHlwZSBkZWZpbml0aW9ucy5cclxuICogQ2FuIGFsc28gYmUgdXNlZCB0byBwcm92aWRlIGFkZGl0aW9uYWwgZ29vZ2xlIHR5cGVzIG9yIHlvdXIgb3duIGN1c3RvbSB0eXBlcy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgU2hvcnQgbmFtZSBhcyBpbiBgZ29vZ2xlL3Byb3RvYnVmL1tuYW1lXS5wcm90b2Agb3IgZnVsbCBmaWxlIG5hbWVcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0ganNvbiBKU09OIGRlZmluaXRpb24gd2l0aGluIGBnb29nbGUucHJvdG9idWZgIGlmIGEgc2hvcnQgbmFtZSwgb3RoZXJ3aXNlIHRoZSBmaWxlJ3Mgcm9vdCBkZWZpbml0aW9uXHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAqIEBwcm9wZXJ0eSB7SU5hbWVzcGFjZX0gZ29vZ2xlL3Byb3RvYnVmL2FueS5wcm90byBBbnlcclxuICogQHByb3BlcnR5IHtJTmFtZXNwYWNlfSBnb29nbGUvcHJvdG9idWYvZHVyYXRpb24ucHJvdG8gRHVyYXRpb25cclxuICogQHByb3BlcnR5IHtJTmFtZXNwYWNlfSBnb29nbGUvcHJvdG9idWYvZW1wdHkucHJvdG8gRW1wdHlcclxuICogQHByb3BlcnR5IHtJTmFtZXNwYWNlfSBnb29nbGUvcHJvdG9idWYvZmllbGRfbWFzay5wcm90byBGaWVsZE1hc2tcclxuICogQHByb3BlcnR5IHtJTmFtZXNwYWNlfSBnb29nbGUvcHJvdG9idWYvc3RydWN0LnByb3RvIFN0cnVjdCwgVmFsdWUsIE51bGxWYWx1ZSBhbmQgTGlzdFZhbHVlXHJcbiAqIEBwcm9wZXJ0eSB7SU5hbWVzcGFjZX0gZ29vZ2xlL3Byb3RvYnVmL3RpbWVzdGFtcC5wcm90byBUaW1lc3RhbXBcclxuICogQHByb3BlcnR5IHtJTmFtZXNwYWNlfSBnb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8gV3JhcHBlcnNcclxuICogQGV4YW1wbGVcclxuICogLy8gbWFudWFsbHkgcHJvdmlkZXMgZGVzY3JpcHRvci5wcm90byAoYXNzdW1lcyBnb29nbGUvcHJvdG9idWYvIG5hbWVzcGFjZSBhbmQgLnByb3RvIGV4dGVuc2lvbilcclxuICogcHJvdG9idWYuY29tbW9uKFwiZGVzY3JpcHRvclwiLCBkZXNjcmlwdG9ySnNvbik7XHJcbiAqXHJcbiAqIC8vIG1hbnVhbGx5IHByb3ZpZGVzIGEgY3VzdG9tIGRlZmluaXRpb24gKHVzZXMgbXkuZm9vIG5hbWVzcGFjZSlcclxuICogcHJvdG9idWYuY29tbW9uKFwibXkvZm9vL2Jhci5wcm90b1wiLCBteUZvb0Jhckpzb24pO1xyXG4gKi9cclxuZnVuY3Rpb24gY29tbW9uKG5hbWUsIGpzb24pIHtcclxuICAgIGlmICghY29tbW9uUmUudGVzdChuYW1lKSkge1xyXG4gICAgICAgIG5hbWUgPSBcImdvb2dsZS9wcm90b2J1Zi9cIiArIG5hbWUgKyBcIi5wcm90b1wiO1xyXG4gICAgICAgIGpzb24gPSB7IG5lc3RlZDogeyBnb29nbGU6IHsgbmVzdGVkOiB7IHByb3RvYnVmOiB7IG5lc3RlZDoganNvbiB9IH0gfSB9IH07XHJcbiAgICB9XHJcbiAgICBjb21tb25bbmFtZV0gPSBqc29uO1xyXG59XHJcblxyXG4vLyBOb3QgcHJvdmlkZWQgYmVjYXVzZSBvZiBsaW1pdGVkIHVzZSAoZmVlbCBmcmVlIHRvIGRpc2N1c3Mgb3IgdG8gcHJvdmlkZSB5b3Vyc2VsZik6XHJcbi8vXHJcbi8vIGdvb2dsZS9wcm90b2J1Zi9kZXNjcmlwdG9yLnByb3RvXHJcbi8vIGdvb2dsZS9wcm90b2J1Zi9zb3VyY2VfY29udGV4dC5wcm90b1xyXG4vLyBnb29nbGUvcHJvdG9idWYvdHlwZS5wcm90b1xyXG4vL1xyXG4vLyBTdHJpcHBlZCBhbmQgcHJlLXBhcnNlZCB2ZXJzaW9ucyBvZiB0aGVzZSBub24tYnVuZGxlZCBmaWxlcyBhcmUgaW5zdGVhZCBhdmFpbGFibGUgYXMgcGFydCBvZlxyXG4vLyB0aGUgcmVwb3NpdG9yeSBvciBwYWNrYWdlIHdpdGhpbiB0aGUgZ29vZ2xlL3Byb3RvYnVmIGRpcmVjdG9yeS5cclxuXHJcbmNvbW1vbihcImFueVwiLCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgZ29vZ2xlLnByb3RvYnVmLkFueSBtZXNzYWdlLlxyXG4gICAgICogQGludGVyZmFjZSBJQW55XHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IFt0eXBlVXJsXVxyXG4gICAgICogQHByb3BlcnR5IHtVaW50OEFycmF5fSBbYnl0ZXNdXHJcbiAgICAgKiBAbWVtYmVyb2YgY29tbW9uXHJcbiAgICAgKi9cclxuICAgIEFueToge1xyXG4gICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICB0eXBlX3VybDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJ5dGVzXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciB0aW1lVHlwZTtcclxuXHJcbmNvbW1vbihcImR1cmF0aW9uXCIsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuRHVyYXRpb24gbWVzc2FnZS5cclxuICAgICAqIEBpbnRlcmZhY2UgSUR1cmF0aW9uXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ8TG9uZ30gW3NlY29uZHNdXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gW25hbm9zXVxyXG4gICAgICogQG1lbWJlcm9mIGNvbW1vblxyXG4gICAgICovXHJcbiAgICBEdXJhdGlvbjogdGltZVR5cGUgPSB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHNlY29uZHM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW50NjRcIixcclxuICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hbm9zOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImludDMyXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbW1vbihcInRpbWVzdGFtcFwiLCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBtZXNzYWdlLlxyXG4gICAgICogQGludGVyZmFjZSBJVGltZXN0YW1wXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ8TG9uZ30gW3NlY29uZHNdXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gW25hbm9zXVxyXG4gICAgICogQG1lbWJlcm9mIGNvbW1vblxyXG4gICAgICovXHJcbiAgICBUaW1lc3RhbXA6IHRpbWVUeXBlXHJcbn0pO1xyXG5cclxuY29tbW9uKFwiZW1wdHlcIiwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvcGVydGllcyBvZiBhIGdvb2dsZS5wcm90b2J1Zi5FbXB0eSBtZXNzYWdlLlxyXG4gICAgICogQGludGVyZmFjZSBJRW1wdHlcclxuICAgICAqIEBtZW1iZXJvZiBjb21tb25cclxuICAgICAqL1xyXG4gICAgRW1wdHk6IHtcclxuICAgICAgICBmaWVsZHM6IHt9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29tbW9uKFwic3RydWN0XCIsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuU3RydWN0IG1lc3NhZ2UuXHJcbiAgICAgKiBAaW50ZXJmYWNlIElTdHJ1Y3RcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLElWYWx1ZT59IFtmaWVsZHNdXHJcbiAgICAgKiBAbWVtYmVyb2YgY29tbW9uXHJcbiAgICAgKi9cclxuICAgIFN0cnVjdDoge1xyXG4gICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIGtleVR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuVmFsdWUgbWVzc2FnZS5cclxuICAgICAqIEBpbnRlcmZhY2UgSVZhbHVlXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtraW5kXVxyXG4gICAgICogQHByb3BlcnR5IHswfSBbbnVsbFZhbHVlXVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtudW1iZXJWYWx1ZV1cclxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc3RyaW5nVmFsdWVdXHJcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtib29sVmFsdWVdXHJcbiAgICAgKiBAcHJvcGVydHkge0lTdHJ1Y3R9IFtzdHJ1Y3RWYWx1ZV1cclxuICAgICAqIEBwcm9wZXJ0eSB7SUxpc3RWYWx1ZX0gW2xpc3RWYWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBjb21tb25cclxuICAgICAqL1xyXG4gICAgVmFsdWU6IHtcclxuICAgICAgICBvbmVvZnM6IHtcclxuICAgICAgICAgICAga2luZDoge1xyXG4gICAgICAgICAgICAgICAgb25lb2Y6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIm51bGxWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibnVtYmVyVmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1ZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJib29sVmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0cnVjdFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaXN0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgbnVsbFZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk51bGxWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnVtYmVyVmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJpbmdWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGlkOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvb2xWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJib29sXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJ1Y3RWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTdHJ1Y3RcIixcclxuICAgICAgICAgICAgICAgIGlkOiA1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpc3RWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJMaXN0VmFsdWVcIixcclxuICAgICAgICAgICAgICAgIGlkOiA2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIE51bGxWYWx1ZToge1xyXG4gICAgICAgIHZhbHVlczoge1xyXG4gICAgICAgICAgICBOVUxMX1ZBTFVFOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuTGlzdFZhbHVlIG1lc3NhZ2UuXHJcbiAgICAgKiBAaW50ZXJmYWNlIElMaXN0VmFsdWVcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKiBAcHJvcGVydHkge0FycmF5LjxJVmFsdWU+fSBbdmFsdWVzXVxyXG4gICAgICogQG1lbWJlcm9mIGNvbW1vblxyXG4gICAgICovXHJcbiAgICBMaXN0VmFsdWU6IHtcclxuICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgICAgICAgICBydWxlOiBcInJlcGVhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbW1vbihcIndyYXBwZXJzXCIsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUgbWVzc2FnZS5cclxuICAgICAqIEBpbnRlcmZhY2UgSURvdWJsZVZhbHVlXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBjb21tb25cclxuICAgICAqL1xyXG4gICAgRG91YmxlVmFsdWU6IHtcclxuICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuRmxvYXRWYWx1ZSBtZXNzYWdlLlxyXG4gICAgICogQGludGVyZmFjZSBJRmxvYXRWYWx1ZVxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgY29tbW9uXHJcbiAgICAgKi9cclxuICAgIEZsb2F0VmFsdWU6IHtcclxuICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmxvYXRcIixcclxuICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvcGVydGllcyBvZiBhIGdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlIG1lc3NhZ2UuXHJcbiAgICAgKiBAaW50ZXJmYWNlIElJbnQ2NFZhbHVlXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ8TG9uZ30gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIGNvbW1vblxyXG4gICAgICovXHJcbiAgICBJbnQ2NFZhbHVlOiB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImludDY0XCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuVUludDY0VmFsdWUgbWVzc2FnZS5cclxuICAgICAqIEBpbnRlcmZhY2UgSVVJbnQ2NFZhbHVlXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ8TG9uZ30gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIGNvbW1vblxyXG4gICAgICovXHJcbiAgICBVSW50NjRWYWx1ZToge1xyXG4gICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1aW50NjRcIixcclxuICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvcGVydGllcyBvZiBhIGdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlIG1lc3NhZ2UuXHJcbiAgICAgKiBAaW50ZXJmYWNlIElJbnQzMlZhbHVlXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBjb21tb25cclxuICAgICAqL1xyXG4gICAgSW50MzJWYWx1ZToge1xyXG4gICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbnQzMlwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlIG1lc3NhZ2UuXHJcbiAgICAgKiBAaW50ZXJmYWNlIElVSW50MzJWYWx1ZVxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgY29tbW9uXHJcbiAgICAgKi9cclxuICAgIFVJbnQzMlZhbHVlOiB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVpbnQzMlwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZSBtZXNzYWdlLlxyXG4gICAgICogQGludGVyZmFjZSBJQm9vbFZhbHVlXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBbdmFsdWVdXHJcbiAgICAgKiBAbWVtYmVyb2YgY29tbW9uXHJcbiAgICAgKi9cclxuICAgIEJvb2xWYWx1ZToge1xyXG4gICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJib29sXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUgbWVzc2FnZS5cclxuICAgICAqIEBpbnRlcmZhY2UgSVN0cmluZ1ZhbHVlXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBjb21tb25cclxuICAgICAqL1xyXG4gICAgU3RyaW5nVmFsdWU6IHtcclxuICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3BlcnRpZXMgb2YgYSBnb29nbGUucHJvdG9idWYuQnl0ZXNWYWx1ZSBtZXNzYWdlLlxyXG4gICAgICogQGludGVyZmFjZSBJQnl0ZXNWYWx1ZVxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqIEBwcm9wZXJ0eSB7VWludDhBcnJheX0gW3ZhbHVlXVxyXG4gICAgICogQG1lbWJlcm9mIGNvbW1vblxyXG4gICAgICovXHJcbiAgICBCeXRlc1ZhbHVlOiB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJ5dGVzXCIsXHJcbiAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbW1vbihcImZpZWxkX21hc2tcIiwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvcGVydGllcyBvZiBhIGdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sgbWVzc2FnZS5cclxuICAgICAqIEBpbnRlcmZhY2UgSURvdWJsZVZhbHVlXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt2YWx1ZV1cclxuICAgICAqIEBtZW1iZXJvZiBjb21tb25cclxuICAgICAqL1xyXG4gICAgRmllbGRNYXNrOiB7XHJcbiAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHBhdGhzOiB7XHJcbiAgICAgICAgICAgICAgICBydWxlOiBcInJlcGVhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgcm9vdCBkZWZpbml0aW9uIG9mIHRoZSBzcGVjaWZpZWQgY29tbW9uIHByb3RvIGZpbGUuXHJcbiAqXHJcbiAqIEJ1bmRsZWQgZGVmaW5pdGlvbnMgYXJlOlxyXG4gKiAtIGdvb2dsZS9wcm90b2J1Zi9hbnkucHJvdG9cclxuICogLSBnb29nbGUvcHJvdG9idWYvZHVyYXRpb24ucHJvdG9cclxuICogLSBnb29nbGUvcHJvdG9idWYvZW1wdHkucHJvdG9cclxuICogLSBnb29nbGUvcHJvdG9idWYvZmllbGRfbWFzay5wcm90b1xyXG4gKiAtIGdvb2dsZS9wcm90b2J1Zi9zdHJ1Y3QucHJvdG9cclxuICogLSBnb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvXHJcbiAqIC0gZ29vZ2xlL3Byb3RvYnVmL3dyYXBwZXJzLnByb3RvXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFByb3RvIGZpbGUgbmFtZVxyXG4gKiBAcmV0dXJucyB7SU5hbWVzcGFjZXxudWxsfSBSb290IGRlZmluaXRpb24gb3IgYG51bGxgIGlmIG5vdCBkZWZpbmVkXHJcbiAqL1xyXG5jb21tb24uZ2V0ID0gZnVuY3Rpb24gZ2V0KGZpbGUpIHtcclxuICAgIHJldHVybiBjb21tb25bZmlsZV0gfHwgbnVsbDtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBSdW50aW1lIG1lc3NhZ2UgZnJvbS90byBwbGFpbiBvYmplY3QgY29udmVydGVycy5cclxuICogQG5hbWVzcGFjZVxyXG4gKi9cclxudmFyIGNvbnZlcnRlciA9IGV4cG9ydHM7XHJcblxyXG52YXIgRW51bSA9IHJlcXVpcmUoXCIuL2VudW1cIiksXHJcbiAgICB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwYXJ0aWFsIHZhbHVlIGZyb21PYmplY3QgY29udmV0ZXIuXHJcbiAqIEBwYXJhbSB7Q29kZWdlbn0gZ2VuIENvZGVnZW4gaW5zdGFuY2VcclxuICogQHBhcmFtIHtGaWVsZH0gZmllbGQgUmVmbGVjdGVkIGZpZWxkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZEluZGV4IEZpZWxkIGluZGV4XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIFByb3BlcnR5IHJlZmVyZW5jZVxyXG4gKiBAcmV0dXJucyB7Q29kZWdlbn0gQ29kZWdlbiBpbnN0YW5jZVxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5WYWx1ZVBhcnRpYWxfZnJvbU9iamVjdChnZW4sIGZpZWxkLCBmaWVsZEluZGV4LCBwcm9wKSB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSwgYmxvY2stc2NvcGVkLXZhciwgbm8tcmVkZWNsYXJlICovXHJcbiAgICBpZiAoZmllbGQucmVzb2x2ZWRUeXBlKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkLnJlc29sdmVkVHlwZSBpbnN0YW5jZW9mIEVudW0pIHsgZ2VuXHJcbiAgICAgICAgICAgIChcInN3aXRjaChkJXMpe1wiLCBwcm9wKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgdmFsdWVzID0gZmllbGQucmVzb2x2ZWRUeXBlLnZhbHVlcywga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlcyksIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlcGVhdGVkICYmIHZhbHVlc1trZXlzW2ldXSA9PT0gZmllbGQudHlwZURlZmF1bHQpIGdlblxyXG4gICAgICAgICAgICAgICAgKFwiZGVmYXVsdDpcIik7XHJcbiAgICAgICAgICAgICAgICBnZW5cclxuICAgICAgICAgICAgICAgIChcImNhc2UlajpcIiwga2V5c1tpXSlcclxuICAgICAgICAgICAgICAgIChcImNhc2UgJWk6XCIsIHZhbHVlc1trZXlzW2ldXSlcclxuICAgICAgICAgICAgICAgICAgICAoXCJtJXM9JWpcIiwgcHJvcCwgdmFsdWVzW2tleXNbaV1dKVxyXG4gICAgICAgICAgICAgICAgICAgIChcImJyZWFrXCIpO1xyXG4gICAgICAgICAgICB9IGdlblxyXG4gICAgICAgICAgICAoXCJ9XCIpO1xyXG4gICAgICAgIH0gZWxzZSBnZW5cclxuICAgICAgICAgICAgKFwiaWYodHlwZW9mIGQlcyE9PVxcXCJvYmplY3RcXFwiKVwiLCBwcm9wKVxyXG4gICAgICAgICAgICAgICAgKFwidGhyb3cgVHlwZUVycm9yKCVqKVwiLCBmaWVsZC5mdWxsTmFtZSArIFwiOiBvYmplY3QgZXhwZWN0ZWRcIilcclxuICAgICAgICAgICAgKFwibSVzPXR5cGVzWyVpXS5mcm9tT2JqZWN0KGQlcylcIiwgcHJvcCwgZmllbGRJbmRleCwgcHJvcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBpc1Vuc2lnbmVkID0gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3VibGVcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZsb2F0XCI6IGdlblxyXG4gICAgICAgICAgICAgICAgKFwibSVzPU51bWJlcihkJXMpXCIsIHByb3AsIHByb3ApOyAvLyBhbHNvIGNhdGNoZXMgXCJOYU5cIiwgXCJJbmZpbml0eVwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVpbnQzMlwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZml4ZWQzMlwiOiBnZW5cclxuICAgICAgICAgICAgICAgIChcIm0lcz1kJXM+Pj4wXCIsIHByb3AsIHByb3ApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnQzMlwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2ludDMyXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZml4ZWQzMlwiOiBnZW5cclxuICAgICAgICAgICAgICAgIChcIm0lcz1kJXN8MFwiLCBwcm9wLCBwcm9wKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidWludDY0XCI6XHJcbiAgICAgICAgICAgICAgICBpc1Vuc2lnbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZmFsbHRocm91Z2hcclxuICAgICAgICAgICAgY2FzZSBcImludDY0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaW50NjRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZpeGVkNjRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInNmaXhlZDY0XCI6IGdlblxyXG4gICAgICAgICAgICAgICAgKFwiaWYodXRpbC5Mb25nKVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIChcIihtJXM9dXRpbC5Mb25nLmZyb21WYWx1ZShkJXMpKS51bnNpZ25lZD0lalwiLCBwcm9wLCBwcm9wLCBpc1Vuc2lnbmVkKVxyXG4gICAgICAgICAgICAgICAgKFwiZWxzZSBpZih0eXBlb2YgZCVzPT09XFxcInN0cmluZ1xcXCIpXCIsIHByb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgKFwibSVzPXBhcnNlSW50KGQlcywxMClcIiwgcHJvcCwgcHJvcClcclxuICAgICAgICAgICAgICAgIChcImVsc2UgaWYodHlwZW9mIGQlcz09PVxcXCJudW1iZXJcXFwiKVwiLCBwcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgIChcIm0lcz1kJXNcIiwgcHJvcCwgcHJvcClcclxuICAgICAgICAgICAgICAgIChcImVsc2UgaWYodHlwZW9mIGQlcz09PVxcXCJvYmplY3RcXFwiKVwiLCBwcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgIChcIm0lcz1uZXcgdXRpbC5Mb25nQml0cyhkJXMubG93Pj4+MCxkJXMuaGlnaD4+PjApLnRvTnVtYmVyKCVzKVwiLCBwcm9wLCBwcm9wLCBwcm9wLCBpc1Vuc2lnbmVkID8gXCJ0cnVlXCIgOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnl0ZXNcIjogZ2VuXHJcbiAgICAgICAgICAgICAgICAoXCJpZih0eXBlb2YgZCVzPT09XFxcInN0cmluZ1xcXCIpXCIsIHByb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgKFwidXRpbC5iYXNlNjQuZGVjb2RlKGQlcyxtJXM9dXRpbC5uZXdCdWZmZXIodXRpbC5iYXNlNjQubGVuZ3RoKGQlcykpLDApXCIsIHByb3AsIHByb3AsIHByb3ApXHJcbiAgICAgICAgICAgICAgICAoXCJlbHNlIGlmKGQlcy5sZW5ndGgpXCIsIHByb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgKFwibSVzPWQlc1wiLCBwcm9wLCBwcm9wKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IGdlblxyXG4gICAgICAgICAgICAgICAgKFwibSVzPVN0cmluZyhkJXMpXCIsIHByb3AsIHByb3ApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJib29sXCI6IGdlblxyXG4gICAgICAgICAgICAgICAgKFwibSVzPUJvb2xlYW4oZCVzKVwiLCBwcm9wLCBwcm9wKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvKiBkZWZhdWx0OiBnZW5cclxuICAgICAgICAgICAgICAgIChcIm0lcz1kJXNcIiwgcHJvcCwgcHJvcCk7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2VuO1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSwgYmxvY2stc2NvcGVkLXZhciwgbm8tcmVkZWNsYXJlICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwbGFpbiBvYmplY3QgdG8gcnVudGltZSBtZXNzYWdlIGNvbnZlcnRlciBzcGVjaWZpYyB0byB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UgdHlwZS5cclxuICogQHBhcmFtIHtUeXBlfSBtdHlwZSBNZXNzYWdlIHR5cGVcclxuICogQHJldHVybnMge0NvZGVnZW59IENvZGVnZW4gaW5zdGFuY2VcclxuICovXHJcbmNvbnZlcnRlci5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChtdHlwZSkge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUsIGJsb2NrLXNjb3BlZC12YXIsIG5vLXJlZGVjbGFyZSAqL1xyXG4gICAgdmFyIGZpZWxkcyA9IG10eXBlLmZpZWxkc0FycmF5O1xyXG4gICAgdmFyIGdlbiA9IHV0aWwuY29kZWdlbihbXCJkXCJdLCBtdHlwZS5uYW1lICsgXCIkZnJvbU9iamVjdFwiKVxyXG4gICAgKFwiaWYoZCBpbnN0YW5jZW9mIHRoaXMuY3RvcilcIilcclxuICAgICAgICAoXCJyZXR1cm4gZFwiKTtcclxuICAgIGlmICghZmllbGRzLmxlbmd0aCkgcmV0dXJuIGdlblxyXG4gICAgKFwicmV0dXJuIG5ldyB0aGlzLmN0b3JcIik7XHJcbiAgICBnZW5cclxuICAgIChcInZhciBtPW5ldyB0aGlzLmN0b3JcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBmaWVsZCAgPSBmaWVsZHNbaV0ucmVzb2x2ZSgpLFxyXG4gICAgICAgICAgICBwcm9wICAgPSB1dGlsLnNhZmVQcm9wKGZpZWxkLm5hbWUpO1xyXG5cclxuICAgICAgICAvLyBNYXAgZmllbGRzXHJcbiAgICAgICAgaWYgKGZpZWxkLm1hcCkgeyBnZW5cclxuICAgIChcImlmKGQlcyl7XCIsIHByb3ApXHJcbiAgICAgICAgKFwiaWYodHlwZW9mIGQlcyE9PVxcXCJvYmplY3RcXFwiKVwiLCBwcm9wKVxyXG4gICAgICAgICAgICAoXCJ0aHJvdyBUeXBlRXJyb3IoJWopXCIsIGZpZWxkLmZ1bGxOYW1lICsgXCI6IG9iamVjdCBleHBlY3RlZFwiKVxyXG4gICAgICAgIChcIm0lcz17fVwiLCBwcm9wKVxyXG4gICAgICAgIChcImZvcih2YXIga3M9T2JqZWN0LmtleXMoZCVzKSxpPTA7aTxrcy5sZW5ndGg7KytpKXtcIiwgcHJvcCk7XHJcbiAgICAgICAgICAgIGdlblZhbHVlUGFydGlhbF9mcm9tT2JqZWN0KGdlbiwgZmllbGQsIC8qIG5vdCBzb3J0ZWQgKi8gaSwgcHJvcCArIFwiW2tzW2ldXVwiKVxyXG4gICAgICAgIChcIn1cIilcclxuICAgIChcIn1cIik7XHJcblxyXG4gICAgICAgIC8vIFJlcGVhdGVkIGZpZWxkc1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQucmVwZWF0ZWQpIHsgZ2VuXHJcbiAgICAoXCJpZihkJXMpe1wiLCBwcm9wKVxyXG4gICAgICAgIChcImlmKCFBcnJheS5pc0FycmF5KGQlcykpXCIsIHByb3ApXHJcbiAgICAgICAgICAgIChcInRocm93IFR5cGVFcnJvciglailcIiwgZmllbGQuZnVsbE5hbWUgKyBcIjogYXJyYXkgZXhwZWN0ZWRcIilcclxuICAgICAgICAoXCJtJXM9W11cIiwgcHJvcClcclxuICAgICAgICAoXCJmb3IodmFyIGk9MDtpPGQlcy5sZW5ndGg7KytpKXtcIiwgcHJvcCk7XHJcbiAgICAgICAgICAgIGdlblZhbHVlUGFydGlhbF9mcm9tT2JqZWN0KGdlbiwgZmllbGQsIC8qIG5vdCBzb3J0ZWQgKi8gaSwgcHJvcCArIFwiW2ldXCIpXHJcbiAgICAgICAgKFwifVwiKVxyXG4gICAgKFwifVwiKTtcclxuXHJcbiAgICAgICAgLy8gTm9uLXJlcGVhdGVkIGZpZWxkc1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghKGZpZWxkLnJlc29sdmVkVHlwZSBpbnN0YW5jZW9mIEVudW0pKSBnZW4gLy8gbm8gbmVlZCB0byB0ZXN0IGZvciBudWxsL3VuZGVmaW5lZCBpZiBhbiBlbnVtICh1c2VzIHN3aXRjaClcclxuICAgIChcImlmKGQlcyE9bnVsbCl7XCIsIHByb3ApOyAvLyAhPT0gdW5kZWZpbmVkICYmICE9PSBudWxsXHJcbiAgICAgICAgZ2VuVmFsdWVQYXJ0aWFsX2Zyb21PYmplY3QoZ2VuLCBmaWVsZCwgLyogbm90IHNvcnRlZCAqLyBpLCBwcm9wKTtcclxuICAgICAgICAgICAgaWYgKCEoZmllbGQucmVzb2x2ZWRUeXBlIGluc3RhbmNlb2YgRW51bSkpIGdlblxyXG4gICAgKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IHJldHVybiBnZW5cclxuICAgIChcInJldHVybiBtXCIpO1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSwgYmxvY2stc2NvcGVkLXZhciwgbm8tcmVkZWNsYXJlICovXHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgcGFydGlhbCB2YWx1ZSB0b09iamVjdCBjb252ZXJ0ZXIuXHJcbiAqIEBwYXJhbSB7Q29kZWdlbn0gZ2VuIENvZGVnZW4gaW5zdGFuY2VcclxuICogQHBhcmFtIHtGaWVsZH0gZmllbGQgUmVmbGVjdGVkIGZpZWxkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZEluZGV4IEZpZWxkIGluZGV4XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIFByb3BlcnR5IHJlZmVyZW5jZVxyXG4gKiBAcmV0dXJucyB7Q29kZWdlbn0gQ29kZWdlbiBpbnN0YW5jZVxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5WYWx1ZVBhcnRpYWxfdG9PYmplY3QoZ2VuLCBmaWVsZCwgZmllbGRJbmRleCwgcHJvcCkge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUsIGJsb2NrLXNjb3BlZC12YXIsIG5vLXJlZGVjbGFyZSAqL1xyXG4gICAgaWYgKGZpZWxkLnJlc29sdmVkVHlwZSkge1xyXG4gICAgICAgIGlmIChmaWVsZC5yZXNvbHZlZFR5cGUgaW5zdGFuY2VvZiBFbnVtKSBnZW5cclxuICAgICAgICAgICAgKFwiZCVzPW8uZW51bXM9PT1TdHJpbmc/dHlwZXNbJWldLnZhbHVlc1ttJXNdOm0lc1wiLCBwcm9wLCBmaWVsZEluZGV4LCBwcm9wLCBwcm9wKTtcclxuICAgICAgICBlbHNlIGdlblxyXG4gICAgICAgICAgICAoXCJkJXM9dHlwZXNbJWldLnRvT2JqZWN0KG0lcyxvKVwiLCBwcm9wLCBmaWVsZEluZGV4LCBwcm9wKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGlzVW5zaWduZWQgPSBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImRvdWJsZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZmxvYXRcIjogZ2VuXHJcbiAgICAgICAgICAgIChcImQlcz1vLmpzb24mJiFpc0Zpbml0ZShtJXMpP1N0cmluZyhtJXMpOm0lc1wiLCBwcm9wLCBwcm9wLCBwcm9wLCBwcm9wKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidWludDY0XCI6XHJcbiAgICAgICAgICAgICAgICBpc1Vuc2lnbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZmFsbHRocm91Z2hcclxuICAgICAgICAgICAgY2FzZSBcImludDY0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaW50NjRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZpeGVkNjRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInNmaXhlZDY0XCI6IGdlblxyXG4gICAgICAgICAgICAoXCJpZih0eXBlb2YgbSVzPT09XFxcIm51bWJlclxcXCIpXCIsIHByb3ApXHJcbiAgICAgICAgICAgICAgICAoXCJkJXM9by5sb25ncz09PVN0cmluZz9TdHJpbmcobSVzKTptJXNcIiwgcHJvcCwgcHJvcCwgcHJvcClcclxuICAgICAgICAgICAgKFwiZWxzZVwiKSAvLyBMb25nLWxpa2VcclxuICAgICAgICAgICAgICAgIChcImQlcz1vLmxvbmdzPT09U3RyaW5nP3V0aWwuTG9uZy5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtJXMpOm8ubG9uZ3M9PT1OdW1iZXI/bmV3IHV0aWwuTG9uZ0JpdHMobSVzLmxvdz4+PjAsbSVzLmhpZ2g+Pj4wKS50b051bWJlciglcyk6bSVzXCIsIHByb3AsIHByb3AsIHByb3AsIHByb3AsIGlzVW5zaWduZWQgPyBcInRydWVcIjogXCJcIiwgcHJvcCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ5dGVzXCI6IGdlblxyXG4gICAgICAgICAgICAoXCJkJXM9by5ieXRlcz09PVN0cmluZz91dGlsLmJhc2U2NC5lbmNvZGUobSVzLDAsbSVzLmxlbmd0aCk6by5ieXRlcz09PUFycmF5P0FycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG0lcyk6bSVzXCIsIHByb3AsIHByb3AsIHByb3AsIHByb3AsIHByb3ApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGdlblxyXG4gICAgICAgICAgICAoXCJkJXM9bSVzXCIsIHByb3AsIHByb3ApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdlbjtcclxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUsIGJsb2NrLXNjb3BlZC12YXIsIG5vLXJlZGVjbGFyZSAqL1xyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgcnVudGltZSBtZXNzYWdlIHRvIHBsYWluIG9iamVjdCBjb252ZXJ0ZXIgc3BlY2lmaWMgdG8gdGhlIHNwZWNpZmllZCBtZXNzYWdlIHR5cGUuXHJcbiAqIEBwYXJhbSB7VHlwZX0gbXR5cGUgTWVzc2FnZSB0eXBlXHJcbiAqIEByZXR1cm5zIHtDb2RlZ2VufSBDb2RlZ2VuIGluc3RhbmNlXHJcbiAqL1xyXG5jb252ZXJ0ZXIudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChtdHlwZSkge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUsIGJsb2NrLXNjb3BlZC12YXIsIG5vLXJlZGVjbGFyZSAqL1xyXG4gICAgdmFyIGZpZWxkcyA9IG10eXBlLmZpZWxkc0FycmF5LnNsaWNlKCkuc29ydCh1dGlsLmNvbXBhcmVGaWVsZHNCeUlkKTtcclxuICAgIGlmICghZmllbGRzLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gdXRpbC5jb2RlZ2VuKCkoXCJyZXR1cm4ge31cIik7XHJcbiAgICB2YXIgZ2VuID0gdXRpbC5jb2RlZ2VuKFtcIm1cIiwgXCJvXCJdLCBtdHlwZS5uYW1lICsgXCIkdG9PYmplY3RcIilcclxuICAgIChcImlmKCFvKVwiKVxyXG4gICAgICAgIChcIm89e31cIilcclxuICAgIChcInZhciBkPXt9XCIpO1xyXG5cclxuICAgIHZhciByZXBlYXRlZEZpZWxkcyA9IFtdLFxyXG4gICAgICAgIG1hcEZpZWxkcyA9IFtdLFxyXG4gICAgICAgIG5vcm1hbEZpZWxkcyA9IFtdLFxyXG4gICAgICAgIGkgPSAwO1xyXG4gICAgZm9yICg7IGkgPCBmaWVsZHMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgaWYgKCFmaWVsZHNbaV0ucGFydE9mKVxyXG4gICAgICAgICAgICAoIGZpZWxkc1tpXS5yZXNvbHZlKCkucmVwZWF0ZWQgPyByZXBlYXRlZEZpZWxkc1xyXG4gICAgICAgICAgICA6IGZpZWxkc1tpXS5tYXAgPyBtYXBGaWVsZHNcclxuICAgICAgICAgICAgOiBub3JtYWxGaWVsZHMpLnB1c2goZmllbGRzW2ldKTtcclxuXHJcbiAgICBpZiAocmVwZWF0ZWRGaWVsZHMubGVuZ3RoKSB7IGdlblxyXG4gICAgKFwiaWYoby5hcnJheXN8fG8uZGVmYXVsdHMpe1wiKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVwZWF0ZWRGaWVsZHMubGVuZ3RoOyArK2kpIGdlblxyXG4gICAgICAgIChcImQlcz1bXVwiLCB1dGlsLnNhZmVQcm9wKHJlcGVhdGVkRmllbGRzW2ldLm5hbWUpKTtcclxuICAgICAgICBnZW5cclxuICAgIChcIn1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1hcEZpZWxkcy5sZW5ndGgpIHsgZ2VuXHJcbiAgICAoXCJpZihvLm9iamVjdHN8fG8uZGVmYXVsdHMpe1wiKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWFwRmllbGRzLmxlbmd0aDsgKytpKSBnZW5cclxuICAgICAgICAoXCJkJXM9e31cIiwgdXRpbC5zYWZlUHJvcChtYXBGaWVsZHNbaV0ubmFtZSkpO1xyXG4gICAgICAgIGdlblxyXG4gICAgKFwifVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9ybWFsRmllbGRzLmxlbmd0aCkgeyBnZW5cclxuICAgIChcImlmKG8uZGVmYXVsdHMpe1wiKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbm9ybWFsRmllbGRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IG5vcm1hbEZpZWxkc1tpXSxcclxuICAgICAgICAgICAgICAgIHByb3AgID0gdXRpbC5zYWZlUHJvcChmaWVsZC5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLnJlc29sdmVkVHlwZSBpbnN0YW5jZW9mIEVudW0pIGdlblxyXG4gICAgICAgIChcImQlcz1vLmVudW1zPT09U3RyaW5nPyVqOiVqXCIsIHByb3AsIGZpZWxkLnJlc29sdmVkVHlwZS52YWx1ZXNCeUlkW2ZpZWxkLnR5cGVEZWZhdWx0XSwgZmllbGQudHlwZURlZmF1bHQpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChmaWVsZC5sb25nKSBnZW5cclxuICAgICAgICAoXCJpZih1dGlsLkxvbmcpe1wiKVxyXG4gICAgICAgICAgICAoXCJ2YXIgbj1uZXcgdXRpbC5Mb25nKCVpLCVpLCVqKVwiLCBmaWVsZC50eXBlRGVmYXVsdC5sb3csIGZpZWxkLnR5cGVEZWZhdWx0LmhpZ2gsIGZpZWxkLnR5cGVEZWZhdWx0LnVuc2lnbmVkKVxyXG4gICAgICAgICAgICAoXCJkJXM9by5sb25ncz09PVN0cmluZz9uLnRvU3RyaW5nKCk6by5sb25ncz09PU51bWJlcj9uLnRvTnVtYmVyKCk6blwiLCBwcm9wKVxyXG4gICAgICAgIChcIn1lbHNlXCIpXHJcbiAgICAgICAgICAgIChcImQlcz1vLmxvbmdzPT09U3RyaW5nPyVqOiVpXCIsIHByb3AsIGZpZWxkLnR5cGVEZWZhdWx0LnRvU3RyaW5nKCksIGZpZWxkLnR5cGVEZWZhdWx0LnRvTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChmaWVsZC5ieXRlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFycmF5RGVmYXVsdCA9IFwiW1wiICsgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZmllbGQudHlwZURlZmF1bHQpLmpvaW4oXCIsXCIpICsgXCJdXCI7XHJcbiAgICAgICAgICAgICAgICBnZW5cclxuICAgICAgICAoXCJpZihvLmJ5dGVzPT09U3RyaW5nKWQlcz0lalwiLCBwcm9wLCBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgZmllbGQudHlwZURlZmF1bHQpKVxyXG4gICAgICAgIChcImVsc2V7XCIpXHJcbiAgICAgICAgICAgIChcImQlcz0lc1wiLCBwcm9wLCBhcnJheURlZmF1bHQpXHJcbiAgICAgICAgICAgIChcImlmKG8uYnl0ZXMhPT1BcnJheSlkJXM9dXRpbC5uZXdCdWZmZXIoZCVzKVwiLCBwcm9wLCBwcm9wKVxyXG4gICAgICAgIChcIn1cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBnZW5cclxuICAgICAgICAoXCJkJXM9JWpcIiwgcHJvcCwgZmllbGQudHlwZURlZmF1bHQpOyAvLyBhbHNvIG1lc3NhZ2VzICg9bnVsbClcclxuICAgICAgICB9IGdlblxyXG4gICAgKFwifVwiKTtcclxuICAgIH1cclxuICAgIHZhciBoYXNLczIgPSBmYWxzZTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgZmllbGQgPSBmaWVsZHNbaV0sXHJcbiAgICAgICAgICAgIGluZGV4ID0gbXR5cGUuX2ZpZWxkc0FycmF5LmluZGV4T2YoZmllbGQpLFxyXG4gICAgICAgICAgICBwcm9wICA9IHV0aWwuc2FmZVByb3AoZmllbGQubmFtZSk7XHJcbiAgICAgICAgaWYgKGZpZWxkLm1hcCkge1xyXG4gICAgICAgICAgICBpZiAoIWhhc0tzMikgeyBoYXNLczIgPSB0cnVlOyBnZW5cclxuICAgIChcInZhciBrczJcIik7XHJcbiAgICAgICAgICAgIH0gZ2VuXHJcbiAgICAoXCJpZihtJXMmJihrczI9T2JqZWN0LmtleXMobSVzKSkubGVuZ3RoKXtcIiwgcHJvcCwgcHJvcClcclxuICAgICAgICAoXCJkJXM9e31cIiwgcHJvcClcclxuICAgICAgICAoXCJmb3IodmFyIGo9MDtqPGtzMi5sZW5ndGg7KytqKXtcIik7XHJcbiAgICAgICAgICAgIGdlblZhbHVlUGFydGlhbF90b09iamVjdChnZW4sIGZpZWxkLCAvKiBzb3J0ZWQgKi8gaW5kZXgsIHByb3AgKyBcIltrczJbal1dXCIpXHJcbiAgICAgICAgKFwifVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnJlcGVhdGVkKSB7IGdlblxyXG4gICAgKFwiaWYobSVzJiZtJXMubGVuZ3RoKXtcIiwgcHJvcCwgcHJvcClcclxuICAgICAgICAoXCJkJXM9W11cIiwgcHJvcClcclxuICAgICAgICAoXCJmb3IodmFyIGo9MDtqPG0lcy5sZW5ndGg7KytqKXtcIiwgcHJvcCk7XHJcbiAgICAgICAgICAgIGdlblZhbHVlUGFydGlhbF90b09iamVjdChnZW4sIGZpZWxkLCAvKiBzb3J0ZWQgKi8gaW5kZXgsIHByb3AgKyBcIltqXVwiKVxyXG4gICAgICAgIChcIn1cIik7XHJcbiAgICAgICAgfSBlbHNlIHsgZ2VuXHJcbiAgICAoXCJpZihtJXMhPW51bGwmJm0uaGFzT3duUHJvcGVydHkoJWopKXtcIiwgcHJvcCwgZmllbGQubmFtZSk7IC8vICE9PSB1bmRlZmluZWQgJiYgIT09IG51bGxcclxuICAgICAgICBnZW5WYWx1ZVBhcnRpYWxfdG9PYmplY3QoZ2VuLCBmaWVsZCwgLyogc29ydGVkICovIGluZGV4LCBwcm9wKTtcclxuICAgICAgICBpZiAoZmllbGQucGFydE9mKSBnZW5cclxuICAgICAgICAoXCJpZihvLm9uZW9mcylcIilcclxuICAgICAgICAgICAgKFwiZCVzPSVqXCIsIHV0aWwuc2FmZVByb3AoZmllbGQucGFydE9mLm5hbWUpLCBmaWVsZC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2VuXHJcbiAgICAoXCJ9XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdlblxyXG4gICAgKFwicmV0dXJuIGRcIik7XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lLCBibG9jay1zY29wZWQtdmFyLCBuby1yZWRlY2xhcmUgKi9cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlcjtcclxuXHJcbnZhciBFbnVtICAgID0gcmVxdWlyZShcIi4vZW51bVwiKSxcclxuICAgIHR5cGVzICAgPSByZXF1aXJlKFwiLi90eXBlc1wiKSxcclxuICAgIHV0aWwgICAgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xyXG5cclxuZnVuY3Rpb24gbWlzc2luZyhmaWVsZCkge1xyXG4gICAgcmV0dXJuIFwibWlzc2luZyByZXF1aXJlZCAnXCIgKyBmaWVsZC5uYW1lICsgXCInXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBkZWNvZGVyIHNwZWNpZmljIHRvIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSB0eXBlLlxyXG4gKiBAcGFyYW0ge1R5cGV9IG10eXBlIE1lc3NhZ2UgdHlwZVxyXG4gKiBAcmV0dXJucyB7Q29kZWdlbn0gQ29kZWdlbiBpbnN0YW5jZVxyXG4gKi9cclxuZnVuY3Rpb24gZGVjb2RlcihtdHlwZSkge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUgKi9cclxuICAgIHZhciBnZW4gPSB1dGlsLmNvZGVnZW4oW1wiclwiLCBcImxcIl0sIG10eXBlLm5hbWUgKyBcIiRkZWNvZGVcIilcclxuICAgIChcImlmKCEociBpbnN0YW5jZW9mIFJlYWRlcikpXCIpXHJcbiAgICAgICAgKFwicj1SZWFkZXIuY3JlYXRlKHIpXCIpXHJcbiAgICAoXCJ2YXIgYz1sPT09dW5kZWZpbmVkP3IubGVuOnIucG9zK2wsbT1uZXcgdGhpcy5jdG9yXCIgKyAobXR5cGUuZmllbGRzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7IHJldHVybiBmaWVsZC5tYXA7IH0pLmxlbmd0aCA/IFwiLGtcIiA6IFwiXCIpKVxyXG4gICAgKFwid2hpbGUoci5wb3M8Yyl7XCIpXHJcbiAgICAgICAgKFwidmFyIHQ9ci51aW50MzIoKVwiKTtcclxuICAgIGlmIChtdHlwZS5ncm91cCkgZ2VuXHJcbiAgICAgICAgKFwiaWYoKHQmNyk9PT00KVwiKVxyXG4gICAgICAgICAgICAoXCJicmVha1wiKTtcclxuICAgIGdlblxyXG4gICAgICAgIChcInN3aXRjaCh0Pj4+Myl7XCIpO1xyXG5cclxuICAgIHZhciBpID0gMDtcclxuICAgIGZvciAoOyBpIDwgLyogaW5pdGlhbGl6ZXMgKi8gbXR5cGUuZmllbGRzQXJyYXkubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgZmllbGQgPSBtdHlwZS5fZmllbGRzQXJyYXlbaV0ucmVzb2x2ZSgpLFxyXG4gICAgICAgICAgICB0eXBlICA9IGZpZWxkLnJlc29sdmVkVHlwZSBpbnN0YW5jZW9mIEVudW0gPyBcImludDMyXCIgOiBmaWVsZC50eXBlLFxyXG4gICAgICAgICAgICByZWYgICA9IFwibVwiICsgdXRpbC5zYWZlUHJvcChmaWVsZC5uYW1lKTsgZ2VuXHJcbiAgICAgICAgICAgIChcImNhc2UgJWk6XCIsIGZpZWxkLmlkKTtcclxuXHJcbiAgICAgICAgLy8gTWFwIGZpZWxkc1xyXG4gICAgICAgIGlmIChmaWVsZC5tYXApIHsgZ2VuXHJcbiAgICAgICAgICAgICAgICAoXCJyLnNraXAoKS5wb3MrK1wiKSAvLyBhc3N1bWVzIGlkIDEgKyBrZXkgd2lyZVR5cGVcclxuICAgICAgICAgICAgICAgIChcImlmKCVzPT09dXRpbC5lbXB0eU9iamVjdClcIiwgcmVmKVxyXG4gICAgICAgICAgICAgICAgICAgIChcIiVzPXt9XCIsIHJlZilcclxuICAgICAgICAgICAgICAgIChcIms9ci4lcygpXCIsIGZpZWxkLmtleVR5cGUpXHJcbiAgICAgICAgICAgICAgICAoXCJyLnBvcysrXCIpOyAvLyBhc3N1bWVzIGlkIDIgKyB2YWx1ZSB3aXJlVHlwZVxyXG4gICAgICAgICAgICBpZiAodHlwZXMubG9uZ1tmaWVsZC5rZXlUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZXMuYmFzaWNbdHlwZV0gPT09IHVuZGVmaW5lZCkgZ2VuXHJcbiAgICAgICAgICAgICAgICAoXCIlc1t0eXBlb2Ygaz09PVxcXCJvYmplY3RcXFwiP3V0aWwubG9uZ1RvSGFzaChrKTprXT10eXBlc1slaV0uZGVjb2RlKHIsci51aW50MzIoKSlcIiwgcmVmLCBpKTsgLy8gY2FuJ3QgYmUgZ3JvdXBzXHJcbiAgICAgICAgICAgICAgICBlbHNlIGdlblxyXG4gICAgICAgICAgICAgICAgKFwiJXNbdHlwZW9mIGs9PT1cXFwib2JqZWN0XFxcIj91dGlsLmxvbmdUb0hhc2goayk6a109ci4lcygpXCIsIHJlZiwgdHlwZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZXMuYmFzaWNbdHlwZV0gPT09IHVuZGVmaW5lZCkgZ2VuXHJcbiAgICAgICAgICAgICAgICAoXCIlc1trXT10eXBlc1slaV0uZGVjb2RlKHIsci51aW50MzIoKSlcIiwgcmVmLCBpKTsgLy8gY2FuJ3QgYmUgZ3JvdXBzXHJcbiAgICAgICAgICAgICAgICBlbHNlIGdlblxyXG4gICAgICAgICAgICAgICAgKFwiJXNba109ci4lcygpXCIsIHJlZiwgdHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVwZWF0ZWQgZmllbGRzXHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5yZXBlYXRlZCkgeyBnZW5cclxuXHJcbiAgICAgICAgICAgICAgICAoXCJpZighKCVzJiYlcy5sZW5ndGgpKVwiLCByZWYsIHJlZilcclxuICAgICAgICAgICAgICAgICAgICAoXCIlcz1bXVwiLCByZWYpO1xyXG5cclxuICAgICAgICAgICAgLy8gUGFja2FibGUgKGFsd2F5cyBjaGVjayBmb3IgZm9yd2FyZCBhbmQgYmFja3dhcmQgY29tcGF0aWJsaXR5KVxyXG4gICAgICAgICAgICBpZiAodHlwZXMucGFja2VkW3R5cGVdICE9PSB1bmRlZmluZWQpIGdlblxyXG4gICAgICAgICAgICAgICAgKFwiaWYoKHQmNyk9PT0yKXtcIilcclxuICAgICAgICAgICAgICAgICAgICAoXCJ2YXIgYzI9ci51aW50MzIoKStyLnBvc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIChcIndoaWxlKHIucG9zPGMyKVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXCIlcy5wdXNoKHIuJXMoKSlcIiwgcmVmLCB0eXBlKVxyXG4gICAgICAgICAgICAgICAgKFwifWVsc2VcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBOb24tcGFja2VkXHJcbiAgICAgICAgICAgIGlmICh0eXBlcy5iYXNpY1t0eXBlXSA9PT0gdW5kZWZpbmVkKSBnZW4oZmllbGQucmVzb2x2ZWRUeXBlLmdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiVzLnB1c2godHlwZXNbJWldLmRlY29kZShyKSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIlcy5wdXNoKHR5cGVzWyVpXS5kZWNvZGUocixyLnVpbnQzMigpKSlcIiwgcmVmLCBpKTtcclxuICAgICAgICAgICAgZWxzZSBnZW5cclxuICAgICAgICAgICAgICAgICAgICAoXCIlcy5wdXNoKHIuJXMoKSlcIiwgcmVmLCB0eXBlKTtcclxuXHJcbiAgICAgICAgLy8gTm9uLXJlcGVhdGVkXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlcy5iYXNpY1t0eXBlXSA9PT0gdW5kZWZpbmVkKSBnZW4oZmllbGQucmVzb2x2ZWRUeXBlLmdyb3VwXHJcbiAgICAgICAgICAgICAgICA/IFwiJXM9dHlwZXNbJWldLmRlY29kZShyKVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiJXM9dHlwZXNbJWldLmRlY29kZShyLHIudWludDMyKCkpXCIsIHJlZiwgaSk7XHJcbiAgICAgICAgZWxzZSBnZW5cclxuICAgICAgICAgICAgICAgIChcIiVzPXIuJXMoKVwiLCByZWYsIHR5cGUpO1xyXG4gICAgICAgIGdlblxyXG4gICAgICAgICAgICAgICAgKFwiYnJlYWtcIik7XHJcbiAgICAvLyBVbmtub3duIGZpZWxkc1xyXG4gICAgfSBnZW5cclxuICAgICAgICAgICAgKFwiZGVmYXVsdDpcIilcclxuICAgICAgICAgICAgICAgIChcInIuc2tpcFR5cGUodCY3KVwiKVxyXG4gICAgICAgICAgICAgICAgKFwiYnJlYWtcIilcclxuXHJcbiAgICAgICAgKFwifVwiKVxyXG4gICAgKFwifVwiKTtcclxuXHJcbiAgICAvLyBGaWVsZCBwcmVzZW5jZVxyXG4gICAgZm9yIChpID0gMDsgaSA8IG10eXBlLl9maWVsZHNBcnJheS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciByZmllbGQgPSBtdHlwZS5fZmllbGRzQXJyYXlbaV07XHJcbiAgICAgICAgaWYgKHJmaWVsZC5yZXF1aXJlZCkgZ2VuXHJcbiAgICAoXCJpZighbS5oYXNPd25Qcm9wZXJ0eSglaikpXCIsIHJmaWVsZC5uYW1lKVxyXG4gICAgICAgIChcInRocm93IHV0aWwuUHJvdG9jb2xFcnJvciglaix7aW5zdGFuY2U6bX0pXCIsIG1pc3NpbmcocmZpZWxkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdlblxyXG4gICAgKFwicmV0dXJuIG1cIik7XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlcjtcclxuXHJcbnZhciBFbnVtICAgICA9IHJlcXVpcmUoXCIuL2VudW1cIiksXHJcbiAgICB0eXBlcyAgICA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpLFxyXG4gICAgdXRpbCAgICAgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHBhcnRpYWwgbWVzc2FnZSB0eXBlIGVuY29kZXIuXHJcbiAqIEBwYXJhbSB7Q29kZWdlbn0gZ2VuIENvZGVnZW4gaW5zdGFuY2VcclxuICogQHBhcmFtIHtGaWVsZH0gZmllbGQgUmVmbGVjdGVkIGZpZWxkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZEluZGV4IEZpZWxkIGluZGV4XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWYgVmFyaWFibGUgcmVmZXJlbmNlXHJcbiAqIEByZXR1cm5zIHtDb2RlZ2VufSBDb2RlZ2VuIGluc3RhbmNlXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmZ1bmN0aW9uIGdlblR5cGVQYXJ0aWFsKGdlbiwgZmllbGQsIGZpZWxkSW5kZXgsIHJlZikge1xyXG4gICAgcmV0dXJuIGZpZWxkLnJlc29sdmVkVHlwZS5ncm91cFxyXG4gICAgICAgID8gZ2VuKFwidHlwZXNbJWldLmVuY29kZSglcyx3LnVpbnQzMiglaSkpLnVpbnQzMiglaSlcIiwgZmllbGRJbmRleCwgcmVmLCAoZmllbGQuaWQgPDwgMyB8IDMpID4+PiAwLCAoZmllbGQuaWQgPDwgMyB8IDQpID4+PiAwKVxyXG4gICAgICAgIDogZ2VuKFwidHlwZXNbJWldLmVuY29kZSglcyx3LnVpbnQzMiglaSkuZm9yaygpKS5sZGVsaW0oKVwiLCBmaWVsZEluZGV4LCByZWYsIChmaWVsZC5pZCA8PCAzIHwgMikgPj4+IDApO1xyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGFuIGVuY29kZXIgc3BlY2lmaWMgdG8gdGhlIHNwZWNpZmllZCBtZXNzYWdlIHR5cGUuXHJcbiAqIEBwYXJhbSB7VHlwZX0gbXR5cGUgTWVzc2FnZSB0eXBlXHJcbiAqIEByZXR1cm5zIHtDb2RlZ2VufSBDb2RlZ2VuIGluc3RhbmNlXHJcbiAqL1xyXG5mdW5jdGlvbiBlbmNvZGVyKG10eXBlKSB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSwgYmxvY2stc2NvcGVkLXZhciwgbm8tcmVkZWNsYXJlICovXHJcbiAgICB2YXIgZ2VuID0gdXRpbC5jb2RlZ2VuKFtcIm1cIiwgXCJ3XCJdLCBtdHlwZS5uYW1lICsgXCIkZW5jb2RlXCIpXHJcbiAgICAoXCJpZighdylcIilcclxuICAgICAgICAoXCJ3PVdyaXRlci5jcmVhdGUoKVwiKTtcclxuXHJcbiAgICB2YXIgaSwgcmVmO1xyXG5cclxuICAgIC8vIFwid2hlbiBhIG1lc3NhZ2UgaXMgc2VyaWFsaXplZCBpdHMga25vd24gZmllbGRzIHNob3VsZCBiZSB3cml0dGVuIHNlcXVlbnRpYWxseSBieSBmaWVsZCBudW1iZXJcIlxyXG4gICAgdmFyIGZpZWxkcyA9IC8qIGluaXRpYWxpemVzICovIG10eXBlLmZpZWxkc0FycmF5LnNsaWNlKCkuc29ydCh1dGlsLmNvbXBhcmVGaWVsZHNCeUlkKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBmaWVsZCAgICA9IGZpZWxkc1tpXS5yZXNvbHZlKCksXHJcbiAgICAgICAgICAgIGluZGV4ICAgID0gbXR5cGUuX2ZpZWxkc0FycmF5LmluZGV4T2YoZmllbGQpLFxyXG4gICAgICAgICAgICB0eXBlICAgICA9IGZpZWxkLnJlc29sdmVkVHlwZSBpbnN0YW5jZW9mIEVudW0gPyBcImludDMyXCIgOiBmaWVsZC50eXBlLFxyXG4gICAgICAgICAgICB3aXJlVHlwZSA9IHR5cGVzLmJhc2ljW3R5cGVdO1xyXG4gICAgICAgICAgICByZWYgICAgICA9IFwibVwiICsgdXRpbC5zYWZlUHJvcChmaWVsZC5uYW1lKTtcclxuXHJcbiAgICAgICAgLy8gTWFwIGZpZWxkc1xyXG4gICAgICAgIGlmIChmaWVsZC5tYXApIHtcclxuICAgICAgICAgICAgZ2VuXHJcbiAgICAoXCJpZiglcyE9bnVsbCYmbS5oYXNPd25Qcm9wZXJ0eSglaikpe1wiLCByZWYsIGZpZWxkLm5hbWUpIC8vICE9PSB1bmRlZmluZWQgJiYgIT09IG51bGxcclxuICAgICAgICAoXCJmb3IodmFyIGtzPU9iamVjdC5rZXlzKCVzKSxpPTA7aTxrcy5sZW5ndGg7KytpKXtcIiwgcmVmKVxyXG4gICAgICAgICAgICAoXCJ3LnVpbnQzMiglaSkuZm9yaygpLnVpbnQzMiglaSkuJXMoa3NbaV0pXCIsIChmaWVsZC5pZCA8PCAzIHwgMikgPj4+IDAsIDggfCB0eXBlcy5tYXBLZXlbZmllbGQua2V5VHlwZV0sIGZpZWxkLmtleVR5cGUpO1xyXG4gICAgICAgICAgICBpZiAod2lyZVR5cGUgPT09IHVuZGVmaW5lZCkgZ2VuXHJcbiAgICAgICAgICAgIChcInR5cGVzWyVpXS5lbmNvZGUoJXNba3NbaV1dLHcudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpLmxkZWxpbSgpXCIsIGluZGV4LCByZWYpOyAvLyBjYW4ndCBiZSBncm91cHNcclxuICAgICAgICAgICAgZWxzZSBnZW5cclxuICAgICAgICAgICAgKFwiLnVpbnQzMiglaSkuJXMoJXNba3NbaV1dKS5sZGVsaW0oKVwiLCAxNiB8IHdpcmVUeXBlLCB0eXBlLCByZWYpO1xyXG4gICAgICAgICAgICBnZW5cclxuICAgICAgICAoXCJ9XCIpXHJcbiAgICAoXCJ9XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVwZWF0ZWQgZmllbGRzXHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5yZXBlYXRlZCkgeyBnZW5cclxuICAgIChcImlmKCVzIT1udWxsJiYlcy5sZW5ndGgpe1wiLCByZWYsIHJlZik7IC8vICE9PSB1bmRlZmluZWQgJiYgIT09IG51bGxcclxuXHJcbiAgICAgICAgICAgIC8vIFBhY2tlZCByZXBlYXRlZFxyXG4gICAgICAgICAgICBpZiAoZmllbGQucGFja2VkICYmIHR5cGVzLnBhY2tlZFt0eXBlXSAhPT0gdW5kZWZpbmVkKSB7IGdlblxyXG5cclxuICAgICAgICAoXCJ3LnVpbnQzMiglaSkuZm9yaygpXCIsIChmaWVsZC5pZCA8PCAzIHwgMikgPj4+IDApXHJcbiAgICAgICAgKFwiZm9yKHZhciBpPTA7aTwlcy5sZW5ndGg7KytpKVwiLCByZWYpXHJcbiAgICAgICAgICAgIChcIncuJXMoJXNbaV0pXCIsIHR5cGUsIHJlZilcclxuICAgICAgICAoXCJ3LmxkZWxpbSgpXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gTm9uLXBhY2tlZFxyXG4gICAgICAgICAgICB9IGVsc2UgeyBnZW5cclxuXHJcbiAgICAgICAgKFwiZm9yKHZhciBpPTA7aTwlcy5sZW5ndGg7KytpKVwiLCByZWYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpcmVUeXBlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGdlblR5cGVQYXJ0aWFsKGdlbiwgZmllbGQsIGluZGV4LCByZWYgKyBcIltpXVwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgZ2VuXHJcbiAgICAgICAgICAgIChcIncudWludDMyKCVpKS4lcyglc1tpXSlcIiwgKGZpZWxkLmlkIDw8IDMgfCB3aXJlVHlwZSkgPj4+IDAsIHR5cGUsIHJlZik7XHJcblxyXG4gICAgICAgICAgICB9IGdlblxyXG4gICAgKFwifVwiKTtcclxuXHJcbiAgICAgICAgLy8gTm9uLXJlcGVhdGVkXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLm9wdGlvbmFsKSBnZW5cclxuICAgIChcImlmKCVzIT1udWxsJiZtLmhhc093blByb3BlcnR5KCVqKSlcIiwgcmVmLCBmaWVsZC5uYW1lKTsgLy8gIT09IHVuZGVmaW5lZCAmJiAhPT0gbnVsbFxyXG5cclxuICAgICAgICAgICAgaWYgKHdpcmVUeXBlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZ2VuVHlwZVBhcnRpYWwoZ2VuLCBmaWVsZCwgaW5kZXgsIHJlZik7XHJcbiAgICAgICAgICAgIGVsc2UgZ2VuXHJcbiAgICAgICAgKFwidy51aW50MzIoJWkpLiVzKCVzKVwiLCAoZmllbGQuaWQgPDwgMyB8IHdpcmVUeXBlKSA+Pj4gMCwgdHlwZSwgcmVmKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBnZW5cclxuICAgIChcInJldHVybiB3XCIpO1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSwgYmxvY2stc2NvcGVkLXZhciwgbm8tcmVkZWNsYXJlICovXHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBFbnVtO1xyXG5cclxuLy8gZXh0ZW5kcyBSZWZsZWN0aW9uT2JqZWN0XHJcbnZhciBSZWZsZWN0aW9uT2JqZWN0ID0gcmVxdWlyZShcIi4vb2JqZWN0XCIpO1xyXG4oKEVudW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZWZsZWN0aW9uT2JqZWN0LnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yID0gRW51bSkuY2xhc3NOYW1lID0gXCJFbnVtXCI7XHJcblxyXG52YXIgTmFtZXNwYWNlID0gcmVxdWlyZShcIi4vbmFtZXNwYWNlXCIpLFxyXG4gICAgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIG5ldyBlbnVtIGluc3RhbmNlLlxyXG4gKiBAY2xhc3NkZXNjIFJlZmxlY3RlZCBlbnVtLlxyXG4gKiBAZXh0ZW5kcyBSZWZsZWN0aW9uT2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBVbmlxdWUgbmFtZSB3aXRoaW4gaXRzIG5hbWVzcGFjZVxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLG51bWJlcj59IFt2YWx1ZXNdIEVudW0gdmFsdWVzIGFzIGFuIG9iamVjdCwgYnkgbmFtZVxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBbb3B0aW9uc10gRGVjbGFyZWQgb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbW1lbnRdIFRoZSBjb21tZW50IGZvciB0aGlzIGVudW1cclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZyxzdHJpbmc+fSBbY29tbWVudHNdIFRoZSB2YWx1ZSBjb21tZW50cyBmb3IgdGhpcyBlbnVtXHJcbiAqL1xyXG5mdW5jdGlvbiBFbnVtKG5hbWUsIHZhbHVlcywgb3B0aW9ucywgY29tbWVudCwgY29tbWVudHMpIHtcclxuICAgIFJlZmxlY3Rpb25PYmplY3QuY2FsbCh0aGlzLCBuYW1lLCBvcHRpb25zKTtcclxuXHJcbiAgICBpZiAodmFsdWVzICYmIHR5cGVvZiB2YWx1ZXMgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwidmFsdWVzIG11c3QgYmUgYW4gb2JqZWN0XCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW51bSB2YWx1ZXMgYnkgaWQuXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxudW1iZXIsc3RyaW5nPn1cclxuICAgICAqL1xyXG4gICAgdGhpcy52YWx1ZXNCeUlkID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnVtIHZhbHVlcyBieSBuYW1lLlxyXG4gICAgICogQHR5cGUge09iamVjdC48c3RyaW5nLG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIHRoaXMudmFsdWVzID0gT2JqZWN0LmNyZWF0ZSh0aGlzLnZhbHVlc0J5SWQpOyAvLyB0b0pTT04sIG1hcmtlclxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW51bSBjb21tZW50IHRleHQuXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY29tbWVudCA9IGNvbW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSBjb21tZW50IHRleHRzLCBpZiBhbnkuXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsc3RyaW5nPn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzIHx8IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXJ2ZWQgcmFuZ2VzLCBpZiBhbnkuXHJcbiAgICAgKiBAdHlwZSB7QXJyYXkuPG51bWJlcltdfHN0cmluZz59XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzZXJ2ZWQgPSB1bmRlZmluZWQ7IC8vIHRvSlNPTlxyXG5cclxuICAgIC8vIE5vdGUgdGhhdCB2YWx1ZXMgaW5oZXJpdCB2YWx1ZXNCeUlkIG9uIHRoZWlyIHByb3RvdHlwZSB3aGljaCBtYWtlcyB0aGVtIGEgVHlwZVNjcmlwdC1cclxuICAgIC8vIGNvbXBhdGlibGUgZW51bS4gVGhpcyBpcyB1c2VkIGJ5IHBidHMgdG8gd3JpdGUgYWN0dWFsIGVudW0gZGVmaW5pdGlvbnMgdGhhdCB3b3JrIGZvclxyXG4gICAgLy8gc3RhdGljIGFuZCByZWZsZWN0aW9uIGNvZGUgYWxpa2UgaW5zdGVhZCBvZiBlbWl0dGluZyBnZW5lcmljIG9iamVjdCBkZWZpbml0aW9ucy5cclxuXHJcbiAgICBpZiAodmFsdWVzKVxyXG4gICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVzW2tleXNbaV1dID09PSBcIm51bWJlclwiKSAvLyB1c2UgZm9yd2FyZCBlbnRyaWVzIG9ubHlcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzQnlJZFsgdGhpcy52YWx1ZXNba2V5c1tpXV0gPSB2YWx1ZXNba2V5c1tpXV0gXSA9IGtleXNbaV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnVtIGRlc2NyaXB0b3IuXHJcbiAqIEBpbnRlcmZhY2UgSUVudW1cclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZyxudW1iZXI+fSB2YWx1ZXMgRW51bSB2YWx1ZXNcclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIEVudW0gb3B0aW9uc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGFuIGVudW0gZnJvbSBhbiBlbnVtIGRlc2NyaXB0b3IuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIEVudW0gbmFtZVxyXG4gKiBAcGFyYW0ge0lFbnVtfSBqc29uIEVudW0gZGVzY3JpcHRvclxyXG4gKiBAcmV0dXJucyB7RW51bX0gQ3JlYXRlZCBlbnVtXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYXJndW1lbnRzIGFyZSBpbnZhbGlkXHJcbiAqL1xyXG5FbnVtLmZyb21KU09OID0gZnVuY3Rpb24gZnJvbUpTT04obmFtZSwganNvbikge1xyXG4gICAgdmFyIGVubSA9IG5ldyBFbnVtKG5hbWUsIGpzb24udmFsdWVzLCBqc29uLm9wdGlvbnMsIGpzb24uY29tbWVudCwganNvbi5jb21tZW50cyk7XHJcbiAgICBlbm0ucmVzZXJ2ZWQgPSBqc29uLnJlc2VydmVkO1xyXG4gICAgcmV0dXJuIGVubTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGlzIGVudW0gdG8gYW4gZW51bSBkZXNjcmlwdG9yLlxyXG4gKiBAcGFyYW0ge0lUb0pTT05PcHRpb25zfSBbdG9KU09OT3B0aW9uc10gSlNPTiBjb252ZXJzaW9uIG9wdGlvbnNcclxuICogQHJldHVybnMge0lFbnVtfSBFbnVtIGRlc2NyaXB0b3JcclxuICovXHJcbkVudW0ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTih0b0pTT05PcHRpb25zKSB7XHJcbiAgICB2YXIga2VlcENvbW1lbnRzID0gdG9KU09OT3B0aW9ucyA/IEJvb2xlYW4odG9KU09OT3B0aW9ucy5rZWVwQ29tbWVudHMpIDogZmFsc2U7XHJcbiAgICByZXR1cm4gdXRpbC50b09iamVjdChbXHJcbiAgICAgICAgXCJvcHRpb25zXCIgICwgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgIFwidmFsdWVzXCIgICAsIHRoaXMudmFsdWVzLFxyXG4gICAgICAgIFwicmVzZXJ2ZWRcIiAsIHRoaXMucmVzZXJ2ZWQgJiYgdGhpcy5yZXNlcnZlZC5sZW5ndGggPyB0aGlzLnJlc2VydmVkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIFwiY29tbWVudFwiICAsIGtlZXBDb21tZW50cyA/IHRoaXMuY29tbWVudCA6IHVuZGVmaW5lZCxcclxuICAgICAgICBcImNvbW1lbnRzXCIgLCBrZWVwQ29tbWVudHMgPyB0aGlzLmNvbW1lbnRzIDogdW5kZWZpbmVkXHJcbiAgICBdKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgdmFsdWUgdG8gdGhpcyBlbnVtLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBWYWx1ZSBuYW1lXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBWYWx1ZSBpZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbW1lbnRdIENvbW1lbnQsIGlmIGFueVxyXG4gKiBAcmV0dXJucyB7RW51bX0gYHRoaXNgXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYXJndW1lbnRzIGFyZSBpbnZhbGlkXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgdmFsdWUgd2l0aCB0aGlzIG5hbWUgb3IgaWRcclxuICovXHJcbkVudW0ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChuYW1lLCBpZCwgY29tbWVudCkge1xyXG4gICAgLy8gdXRpbGl6ZWQgYnkgdGhlIHBhcnNlciBidXQgbm90IGJ5IC5mcm9tSlNPTlxyXG5cclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhuYW1lKSlcclxuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJuYW1lIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcblxyXG4gICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpZCkpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiaWQgbXVzdCBiZSBhbiBpbnRlZ2VyXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLnZhbHVlc1tuYW1lXSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHRocm93IEVycm9yKFwiZHVwbGljYXRlIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBpbiBcIiArIHRoaXMpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmVzZXJ2ZWRJZChpZCkpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpZCBcIiArIGlkICsgXCIgaXMgcmVzZXJ2ZWQgaW4gXCIgKyB0aGlzKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1Jlc2VydmVkTmFtZShuYW1lKSlcclxuICAgICAgICB0aHJvdyBFcnJvcihcIm5hbWUgJ1wiICsgbmFtZSArIFwiJyBpcyByZXNlcnZlZCBpbiBcIiArIHRoaXMpO1xyXG5cclxuICAgIGlmICh0aGlzLnZhbHVlc0J5SWRbaWRdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoISh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFsbG93X2FsaWFzKSlcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJkdXBsaWNhdGUgaWQgXCIgKyBpZCArIFwiIGluIFwiICsgdGhpcyk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbbmFtZV0gPSBpZDtcclxuICAgIH0gZWxzZVxyXG4gICAgICAgIHRoaXMudmFsdWVzQnlJZFt0aGlzLnZhbHVlc1tuYW1lXSA9IGlkXSA9IG5hbWU7XHJcblxyXG4gICAgdGhpcy5jb21tZW50c1tuYW1lXSA9IGNvbW1lbnQgfHwgbnVsbDtcclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYSB2YWx1ZSBmcm9tIHRoaXMgZW51bVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBWYWx1ZSBuYW1lXHJcbiAqIEByZXR1cm5zIHtFbnVtfSBgdGhpc2BcclxuICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBhcmd1bWVudHMgYXJlIGludmFsaWRcclxuICogQHRocm93cyB7RXJyb3J9IElmIGBuYW1lYCBpcyBub3QgYSBuYW1lIG9mIHRoaXMgZW51bVxyXG4gKi9cclxuRW51bS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcclxuXHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcobmFtZSkpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwibmFtZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG5cclxuICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlc1tuYW1lXTtcclxuICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBFcnJvcihcIm5hbWUgJ1wiICsgbmFtZSArIFwiJyBkb2VzIG5vdCBleGlzdCBpbiBcIiArIHRoaXMpO1xyXG5cclxuICAgIGRlbGV0ZSB0aGlzLnZhbHVlc0J5SWRbdmFsXTtcclxuICAgIGRlbGV0ZSB0aGlzLnZhbHVlc1tuYW1lXTtcclxuICAgIGRlbGV0ZSB0aGlzLmNvbW1lbnRzW25hbWVdO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgaWQgaXMgcmVzZXJ2ZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBJZCB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgcmVzZXJ2ZWQsIG90aGVyd2lzZSBgZmFsc2VgXHJcbiAqL1xyXG5FbnVtLnByb3RvdHlwZS5pc1Jlc2VydmVkSWQgPSBmdW5jdGlvbiBpc1Jlc2VydmVkSWQoaWQpIHtcclxuICAgIHJldHVybiBOYW1lc3BhY2UuaXNSZXNlcnZlZElkKHRoaXMucmVzZXJ2ZWQsIGlkKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIG5hbWUgaXMgcmVzZXJ2ZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHJlc2VydmVkLCBvdGhlcndpc2UgYGZhbHNlYFxyXG4gKi9cclxuRW51bS5wcm90b3R5cGUuaXNSZXNlcnZlZE5hbWUgPSBmdW5jdGlvbiBpc1Jlc2VydmVkTmFtZShuYW1lKSB7XHJcbiAgICByZXR1cm4gTmFtZXNwYWNlLmlzUmVzZXJ2ZWROYW1lKHRoaXMucmVzZXJ2ZWQsIG5hbWUpO1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBGaWVsZDtcclxuXHJcbi8vIGV4dGVuZHMgUmVmbGVjdGlvbk9iamVjdFxyXG52YXIgUmVmbGVjdGlvbk9iamVjdCA9IHJlcXVpcmUoXCIuL29iamVjdFwiKTtcclxuKChGaWVsZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlZmxlY3Rpb25PYmplY3QucHJvdG90eXBlKSkuY29uc3RydWN0b3IgPSBGaWVsZCkuY2xhc3NOYW1lID0gXCJGaWVsZFwiO1xyXG5cclxudmFyIEVudW0gID0gcmVxdWlyZShcIi4vZW51bVwiKSxcclxuICAgIHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIiksXHJcbiAgICB1dGlsICA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcblxyXG52YXIgVHlwZTsgLy8gY3ljbGljXHJcblxyXG52YXIgcnVsZVJlID0gL15yZXF1aXJlZHxvcHRpb25hbHxyZXBlYXRlZCQvO1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBuZXcgbWVzc2FnZSBmaWVsZCBpbnN0YW5jZS4gTm90ZSB0aGF0IHtAbGluayBNYXBGaWVsZHxtYXAgZmllbGRzfSBoYXZlIHRoZWlyIG93biBjbGFzcy5cclxuICogQG5hbWUgRmllbGRcclxuICogQGNsYXNzZGVzYyBSZWZsZWN0ZWQgbWVzc2FnZSBmaWVsZC5cclxuICogQGV4dGVuZHMgRmllbGRCYXNlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBVbmlxdWUgbmFtZSB3aXRoaW4gaXRzIG5hbWVzcGFjZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgVW5pcXVlIGlkIHdpdGhpbiBpdHMgbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFZhbHVlIHR5cGVcclxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0LjxzdHJpbmcsKj59IFtydWxlPVwib3B0aW9uYWxcIl0gRmllbGQgcnVsZVxyXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3QuPHN0cmluZywqPn0gW2V4dGVuZF0gRXh0ZW5kZWQgdHlwZSBpZiBkaWZmZXJlbnQgZnJvbSBwYXJlbnRcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIERlY2xhcmVkIG9wdGlvbnNcclxuICovXHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIGZpZWxkIGZyb20gYSBmaWVsZCBkZXNjcmlwdG9yLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBGaWVsZCBuYW1lXHJcbiAqIEBwYXJhbSB7SUZpZWxkfSBqc29uIEZpZWxkIGRlc2NyaXB0b3JcclxuICogQHJldHVybnMge0ZpZWxkfSBDcmVhdGVkIGZpZWxkXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYXJndW1lbnRzIGFyZSBpbnZhbGlkXHJcbiAqL1xyXG5GaWVsZC5mcm9tSlNPTiA9IGZ1bmN0aW9uIGZyb21KU09OKG5hbWUsIGpzb24pIHtcclxuICAgIHJldHVybiBuZXcgRmllbGQobmFtZSwganNvbi5pZCwganNvbi50eXBlLCBqc29uLnJ1bGUsIGpzb24uZXh0ZW5kLCBqc29uLm9wdGlvbnMsIGpzb24uY29tbWVudCk7XHJcbn07XHJcblxyXG4vKipcclxuICogTm90IGFuIGFjdHVhbCBjb25zdHJ1Y3Rvci4gVXNlIHtAbGluayBGaWVsZH0gaW5zdGVhZC5cclxuICogQGNsYXNzZGVzYyBCYXNlIGNsYXNzIG9mIGFsbCByZWZsZWN0ZWQgbWVzc2FnZSBmaWVsZHMuIFRoaXMgaXMgbm90IGFuIGFjdHVhbCBjbGFzcyBidXQgaGVyZSBmb3IgdGhlIHNha2Ugb2YgaGF2aW5nIGNvbnNpc3RlbnQgdHlwZSBkZWZpbml0aW9ucy5cclxuICogQGV4cG9ydHMgRmllbGRCYXNlXHJcbiAqIEBleHRlbmRzIFJlZmxlY3Rpb25PYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFVuaXF1ZSBuYW1lIHdpdGhpbiBpdHMgbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBVbmlxdWUgaWQgd2l0aGluIGl0cyBuYW1lc3BhY2VcclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVmFsdWUgdHlwZVxyXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3QuPHN0cmluZywqPn0gW3J1bGU9XCJvcHRpb25hbFwiXSBGaWVsZCBydWxlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdC48c3RyaW5nLCo+fSBbZXh0ZW5kXSBFeHRlbmRlZCB0eXBlIGlmIGRpZmZlcmVudCBmcm9tIHBhcmVudFxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBbb3B0aW9uc10gRGVjbGFyZWQgb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbW1lbnRdIENvbW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZmllbGRcclxuICovXHJcbmZ1bmN0aW9uIEZpZWxkKG5hbWUsIGlkLCB0eXBlLCBydWxlLCBleHRlbmQsIG9wdGlvbnMsIGNvbW1lbnQpIHtcclxuXHJcbiAgICBpZiAodXRpbC5pc09iamVjdChydWxlKSkge1xyXG4gICAgICAgIGNvbW1lbnQgPSBleHRlbmQ7XHJcbiAgICAgICAgb3B0aW9ucyA9IHJ1bGU7XHJcbiAgICAgICAgcnVsZSA9IGV4dGVuZCA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSBpZiAodXRpbC5pc09iamVjdChleHRlbmQpKSB7XHJcbiAgICAgICAgY29tbWVudCA9IG9wdGlvbnM7XHJcbiAgICAgICAgb3B0aW9ucyA9IGV4dGVuZDtcclxuICAgICAgICBleHRlbmQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgUmVmbGVjdGlvbk9iamVjdC5jYWxsKHRoaXMsIG5hbWUsIG9wdGlvbnMpO1xyXG5cclxuICAgIGlmICghdXRpbC5pc0ludGVnZXIoaWQpIHx8IGlkIDwgMClcclxuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJpZCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXJcIik7XHJcblxyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHR5cGUpKVxyXG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcInR5cGUgbXVzdCBiZSBhIHN0cmluZ1wiKTtcclxuXHJcbiAgICBpZiAocnVsZSAhPT0gdW5kZWZpbmVkICYmICFydWxlUmUudGVzdChydWxlID0gcnVsZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpKVxyXG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcInJ1bGUgbXVzdCBiZSBhIHN0cmluZyBydWxlXCIpO1xyXG5cclxuICAgIGlmIChleHRlbmQgIT09IHVuZGVmaW5lZCAmJiAhdXRpbC5pc1N0cmluZyhleHRlbmQpKVxyXG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcImV4dGVuZCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmllbGQgcnVsZSwgaWYgYW55LlxyXG4gICAgICogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMucnVsZSA9IHJ1bGUgJiYgcnVsZSAhPT0gXCJvcHRpb25hbFwiID8gcnVsZSA6IHVuZGVmaW5lZDsgLy8gdG9KU09OXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWVsZCB0eXBlLlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTsgLy8gdG9KU09OXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbmlxdWUgZmllbGQgaWQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmlkID0gaWQ7IC8vIHRvSlNPTiwgbWFya2VyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlbmRlZCB0eXBlIGlmIGRpZmZlcmVudCBmcm9tIHBhcmVudC5cclxuICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmV4dGVuZCA9IGV4dGVuZCB8fCB1bmRlZmluZWQ7IC8vIHRvSlNPTlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGZpZWxkIGlzIHJlcXVpcmVkLlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVxdWlyZWQgPSBydWxlID09PSBcInJlcXVpcmVkXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgZmllbGQgaXMgb3B0aW9uYWwuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5vcHRpb25hbCA9ICF0aGlzLnJlcXVpcmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGZpZWxkIGlzIHJlcGVhdGVkLlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVwZWF0ZWQgPSBydWxlID09PSBcInJlcGVhdGVkXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgZmllbGQgaXMgYSBtYXAgb3Igbm90LlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWFwID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXNzYWdlIHRoaXMgZmllbGQgYmVsb25ncyB0by5cclxuICAgICAqIEB0eXBlIHtUeXBlfG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbmVPZiB0aGlzIGZpZWxkIGJlbG9uZ3MgdG8sIGlmIGFueSxcclxuICAgICAqIEB0eXBlIHtPbmVPZnxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnBhcnRPZiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZmllbGQgdHlwZSdzIGRlZmF1bHQgdmFsdWUuXHJcbiAgICAgKiBAdHlwZSB7Kn1cclxuICAgICAqL1xyXG4gICAgdGhpcy50eXBlRGVmYXVsdCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZmllbGQncyBkZWZhdWx0IHZhbHVlIG9uIHByb3RvdHlwZXMuXHJcbiAgICAgKiBAdHlwZSB7Kn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGZpZWxkJ3MgdmFsdWUgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgYSBsb25nLlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMubG9uZyA9IHV0aWwuTG9uZyA/IHR5cGVzLmxvbmdbdHlwZV0gIT09IHVuZGVmaW5lZCA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGZpZWxkJ3MgdmFsdWUgaXMgYSBidWZmZXIuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5ieXRlcyA9IHR5cGUgPT09IFwiYnl0ZXNcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc29sdmVkIHR5cGUgaWYgbm90IGEgYmFzaWMgdHlwZS5cclxuICAgICAqIEB0eXBlIHtUeXBlfEVudW18bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNvbHZlZFR5cGUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2lzdGVyLWZpZWxkIHdpdGhpbiB0aGUgZXh0ZW5kZWQgdHlwZSBpZiBhIGRlY2xhcmluZyBleHRlbnNpb24gZmllbGQuXHJcbiAgICAgKiBAdHlwZSB7RmllbGR8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5leHRlbnNpb25GaWVsZCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaXN0ZXItZmllbGQgd2l0aGluIHRoZSBkZWNsYXJpbmcgbmFtZXNwYWNlIGlmIGFuIGV4dGVuZGVkIGZpZWxkLlxyXG4gICAgICogQHR5cGUge0ZpZWxkfG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGVjbGFyaW5nRmllbGQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWxseSByZW1lbWJlcnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHBhY2tlZC5cclxuICAgICAqIEB0eXBlIHtib29sZWFufG51bGx9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9wYWNrZWQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tbWVudCBmb3IgdGhpcyBmaWVsZC5cclxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jb21tZW50ID0gY29tbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHBhY2tlZC4gT25seSByZWxldmFudCB3aGVuIHJlcGVhdGVkIGFuZCB3b3JraW5nIHdpdGggcHJvdG8yLlxyXG4gKiBAbmFtZSBGaWVsZCNwYWNrZWRcclxuICogQHR5cGUge2Jvb2xlYW59XHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJwYWNrZWRcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBkZWZhdWx0cyB0byBwYWNrZWQ9dHJ1ZSBpZiBub3QgZXhwbGljaXR5IHNldCB0byBmYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLl9wYWNrZWQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuX3BhY2tlZCA9IHRoaXMuZ2V0T3B0aW9uKFwicGFja2VkXCIpICE9PSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFja2VkO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAb3ZlcnJpZGVcclxuICovXHJcbkZpZWxkLnByb3RvdHlwZS5zZXRPcHRpb24gPSBmdW5jdGlvbiBzZXRPcHRpb24obmFtZSwgdmFsdWUsIGlmTm90U2V0KSB7XHJcbiAgICBpZiAobmFtZSA9PT0gXCJwYWNrZWRcIikgLy8gY2xlYXIgY2FjaGVkIGJlZm9yZSBzZXR0aW5nXHJcbiAgICAgICAgdGhpcy5fcGFja2VkID0gbnVsbDtcclxuICAgIHJldHVybiBSZWZsZWN0aW9uT2JqZWN0LnByb3RvdHlwZS5zZXRPcHRpb24uY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSwgaWZOb3RTZXQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpZWxkIGRlc2NyaXB0b3IuXHJcbiAqIEBpbnRlcmZhY2UgSUZpZWxkXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcnVsZT1cIm9wdGlvbmFsXCJdIEZpZWxkIHJ1bGVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgRmllbGQgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gaWQgRmllbGQgaWRcclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIEZpZWxkIG9wdGlvbnNcclxuICovXHJcblxyXG4vKipcclxuICogRXh0ZW5zaW9uIGZpZWxkIGRlc2NyaXB0b3IuXHJcbiAqIEBpbnRlcmZhY2UgSUV4dGVuc2lvbkZpZWxkXHJcbiAqIEBleHRlbmRzIElGaWVsZFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZXh0ZW5kIEV4dGVuZGVkIHR5cGVcclxuICovXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhpcyBmaWVsZCB0byBhIGZpZWxkIGRlc2NyaXB0b3IuXHJcbiAqIEBwYXJhbSB7SVRvSlNPTk9wdGlvbnN9IFt0b0pTT05PcHRpb25zXSBKU09OIGNvbnZlcnNpb24gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7SUZpZWxkfSBGaWVsZCBkZXNjcmlwdG9yXHJcbiAqL1xyXG5GaWVsZC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKHRvSlNPTk9wdGlvbnMpIHtcclxuICAgIHZhciBrZWVwQ29tbWVudHMgPSB0b0pTT05PcHRpb25zID8gQm9vbGVhbih0b0pTT05PcHRpb25zLmtlZXBDb21tZW50cykgOiBmYWxzZTtcclxuICAgIHJldHVybiB1dGlsLnRvT2JqZWN0KFtcclxuICAgICAgICBcInJ1bGVcIiAgICAsIHRoaXMucnVsZSAhPT0gXCJvcHRpb25hbFwiICYmIHRoaXMucnVsZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgXCJ0eXBlXCIgICAgLCB0aGlzLnR5cGUsXHJcbiAgICAgICAgXCJpZFwiICAgICAgLCB0aGlzLmlkLFxyXG4gICAgICAgIFwiZXh0ZW5kXCIgICwgdGhpcy5leHRlbmQsXHJcbiAgICAgICAgXCJvcHRpb25zXCIgLCB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgXCJjb21tZW50XCIgLCBrZWVwQ29tbWVudHMgPyB0aGlzLmNvbW1lbnQgOiB1bmRlZmluZWRcclxuICAgIF0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlc29sdmVzIHRoaXMgZmllbGQncyB0eXBlIHJlZmVyZW5jZXMuXHJcbiAqIEByZXR1cm5zIHtGaWVsZH0gYHRoaXNgXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhbnkgcmVmZXJlbmNlIGNhbm5vdCBiZSByZXNvbHZlZFxyXG4gKi9cclxuRmllbGQucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKCkge1xyXG5cclxuICAgIGlmICh0aGlzLnJlc29sdmVkKVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGlmICgodGhpcy50eXBlRGVmYXVsdCA9IHR5cGVzLmRlZmF1bHRzW3RoaXMudHlwZV0pID09PSB1bmRlZmluZWQpIHsgLy8gaWYgbm90IGEgYmFzaWMgdHlwZSwgcmVzb2x2ZSBpdFxyXG4gICAgICAgIHRoaXMucmVzb2x2ZWRUeXBlID0gKHRoaXMuZGVjbGFyaW5nRmllbGQgPyB0aGlzLmRlY2xhcmluZ0ZpZWxkLnBhcmVudCA6IHRoaXMucGFyZW50KS5sb29rdXBUeXBlT3JFbnVtKHRoaXMudHlwZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzb2x2ZWRUeXBlIGluc3RhbmNlb2YgVHlwZSlcclxuICAgICAgICAgICAgdGhpcy50eXBlRGVmYXVsdCA9IG51bGw7XHJcbiAgICAgICAgZWxzZSAvLyBpbnN0YW5jZW9mIEVudW1cclxuICAgICAgICAgICAgdGhpcy50eXBlRGVmYXVsdCA9IHRoaXMucmVzb2x2ZWRUeXBlLnZhbHVlc1tPYmplY3Qua2V5cyh0aGlzLnJlc29sdmVkVHlwZS52YWx1ZXMpWzBdXTsgLy8gZmlyc3QgZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZSBleHBsaWNpdGx5IHNldCBkZWZhdWx0IHZhbHVlIGlmIHByZXNlbnRcclxuICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zW1wiZGVmYXVsdFwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy50eXBlRGVmYXVsdCA9IHRoaXMub3B0aW9uc1tcImRlZmF1bHRcIl07XHJcbiAgICAgICAgaWYgKHRoaXMucmVzb2x2ZWRUeXBlIGluc3RhbmNlb2YgRW51bSAmJiB0eXBlb2YgdGhpcy50eXBlRGVmYXVsdCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgdGhpcy50eXBlRGVmYXVsdCA9IHRoaXMucmVzb2x2ZWRUeXBlLnZhbHVlc1t0aGlzLnR5cGVEZWZhdWx0XTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgdW5uZWNlc3Nhcnkgb3B0aW9uc1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFja2VkID09PSB0cnVlIHx8IHRoaXMub3B0aW9ucy5wYWNrZWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlc29sdmVkVHlwZSAmJiAhKHRoaXMucmVzb2x2ZWRUeXBlIGluc3RhbmNlb2YgRW51bSkpXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMucGFja2VkO1xyXG4gICAgICAgIGlmICghT2JqZWN0LmtleXModGhpcy5vcHRpb25zKS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb252ZXJ0IHRvIGludGVybmFsIGRhdGEgdHlwZSBpZiBuZWNlc3NzYXJ5XHJcbiAgICBpZiAodGhpcy5sb25nKSB7XHJcbiAgICAgICAgdGhpcy50eXBlRGVmYXVsdCA9IHV0aWwuTG9uZy5mcm9tTnVtYmVyKHRoaXMudHlwZURlZmF1bHQsIHRoaXMudHlwZS5jaGFyQXQoMCkgPT09IFwidVwiKTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSlcclxuICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLnR5cGVEZWZhdWx0KTsgLy8gbG9uZyBpbnN0YW5jZXMgYXJlIG1lYW50IHRvIGJlIGltbXV0YWJsZSBhbnl3YXkgKGkuZS4gdXNlIHNtYWxsIGludCBjYWNoZSB0aGF0IGV2ZW4gcmVxdWlyZXMgaXQpXHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJ5dGVzICYmIHR5cGVvZiB0aGlzLnR5cGVEZWZhdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdmFyIGJ1ZjtcclxuICAgICAgICBpZiAodXRpbC5iYXNlNjQudGVzdCh0aGlzLnR5cGVEZWZhdWx0KSlcclxuICAgICAgICAgICAgdXRpbC5iYXNlNjQuZGVjb2RlKHRoaXMudHlwZURlZmF1bHQsIGJ1ZiA9IHV0aWwubmV3QnVmZmVyKHV0aWwuYmFzZTY0Lmxlbmd0aCh0aGlzLnR5cGVEZWZhdWx0KSksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdXRpbC51dGY4LndyaXRlKHRoaXMudHlwZURlZmF1bHQsIGJ1ZiA9IHV0aWwubmV3QnVmZmVyKHV0aWwudXRmOC5sZW5ndGgodGhpcy50eXBlRGVmYXVsdCkpLCAwKTtcclxuICAgICAgICB0aGlzLnR5cGVEZWZhdWx0ID0gYnVmO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRha2Ugc3BlY2lhbCBjYXJlIG9mIG1hcHMgYW5kIHJlcGVhdGVkIGZpZWxkc1xyXG4gICAgaWYgKHRoaXMubWFwKVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdXRpbC5lbXB0eU9iamVjdDtcclxuICAgIGVsc2UgaWYgKHRoaXMucmVwZWF0ZWQpXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB1dGlsLmVtcHR5QXJyYXk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnR5cGVEZWZhdWx0O1xyXG5cclxuICAgIC8vIGVuc3VyZSBwcm9wZXIgdmFsdWUgb24gcHJvdG90eXBlXHJcbiAgICBpZiAodGhpcy5wYXJlbnQgaW5zdGFuY2VvZiBUeXBlKVxyXG4gICAgICAgIHRoaXMucGFyZW50LmN0b3IucHJvdG90eXBlW3RoaXMubmFtZV0gPSB0aGlzLmRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICByZXR1cm4gUmVmbGVjdGlvbk9iamVjdC5wcm90b3R5cGUucmVzb2x2ZS5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBhcyByZXR1cm5lZCBieSB7QGxpbmsgRmllbGQuZH0gYW5kIHtAbGluayBNYXBGaWVsZC5kfSAoVHlwZVNjcmlwdCkuXHJcbiAqIEB0eXBlZGVmIEZpZWxkRGVjb3JhdG9yXHJcbiAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSBUYXJnZXQgcHJvdG90eXBlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgRmllbGQgbmFtZVxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBGaWVsZCBkZWNvcmF0b3IgKFR5cGVTY3JpcHQpLlxyXG4gKiBAbmFtZSBGaWVsZC5kXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmllbGRJZCBGaWVsZCBpZFxyXG4gKiBAcGFyYW0ge1wiZG91YmxlXCJ8XCJmbG9hdFwifFwiaW50MzJcInxcInVpbnQzMlwifFwic2ludDMyXCJ8XCJmaXhlZDMyXCJ8XCJzZml4ZWQzMlwifFwiaW50NjRcInxcInVpbnQ2NFwifFwic2ludDY0XCJ8XCJmaXhlZDY0XCJ8XCJzZml4ZWQ2NFwifFwic3RyaW5nXCJ8XCJib29sXCJ8XCJieXRlc1wifE9iamVjdH0gZmllbGRUeXBlIEZpZWxkIHR5cGVcclxuICogQHBhcmFtIHtcIm9wdGlvbmFsXCJ8XCJyZXF1aXJlZFwifFwicmVwZWF0ZWRcIn0gW2ZpZWxkUnVsZT1cIm9wdGlvbmFsXCJdIEZpZWxkIHJ1bGVcclxuICogQHBhcmFtIHtUfSBbZGVmYXVsdFZhbHVlXSBEZWZhdWx0IHZhbHVlXHJcbiAqIEByZXR1cm5zIHtGaWVsZERlY29yYXRvcn0gRGVjb3JhdG9yIGZ1bmN0aW9uXHJcbiAqIEB0ZW1wbGF0ZSBUIGV4dGVuZHMgbnVtYmVyIHwgbnVtYmVyW10gfCBMb25nIHwgTG9uZ1tdIHwgc3RyaW5nIHwgc3RyaW5nW10gfCBib29sZWFuIHwgYm9vbGVhbltdIHwgVWludDhBcnJheSB8IFVpbnQ4QXJyYXlbXSB8IEJ1ZmZlciB8IEJ1ZmZlcltdXHJcbiAqL1xyXG5GaWVsZC5kID0gZnVuY3Rpb24gZGVjb3JhdGVGaWVsZChmaWVsZElkLCBmaWVsZFR5cGUsIGZpZWxkUnVsZSwgZGVmYXVsdFZhbHVlKSB7XHJcblxyXG4gICAgLy8gc3VibWVzc2FnZTogZGVjb3JhdGUgdGhlIHN1Ym1lc3NhZ2UgYW5kIHVzZSBpdHMgbmFtZSBhcyB0aGUgdHlwZVxyXG4gICAgaWYgKHR5cGVvZiBmaWVsZFR5cGUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmaWVsZFR5cGUgPSB1dGlsLmRlY29yYXRlVHlwZShmaWVsZFR5cGUpLm5hbWU7XHJcblxyXG4gICAgLy8gZW51bSByZWZlcmVuY2U6IGNyZWF0ZSBhIHJlZmxlY3RlZCBjb3B5IG9mIHRoZSBlbnVtIGFuZCBrZWVwIHJldXNlaW5nIGl0XHJcbiAgICBlbHNlIGlmIChmaWVsZFR5cGUgJiYgdHlwZW9mIGZpZWxkVHlwZSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICBmaWVsZFR5cGUgPSB1dGlsLmRlY29yYXRlRW51bShmaWVsZFR5cGUpLm5hbWU7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZpZWxkRGVjb3JhdG9yKHByb3RvdHlwZSwgZmllbGROYW1lKSB7XHJcbiAgICAgICAgdXRpbC5kZWNvcmF0ZVR5cGUocHJvdG90eXBlLmNvbnN0cnVjdG9yKVxyXG4gICAgICAgICAgICAuYWRkKG5ldyBGaWVsZChmaWVsZE5hbWUsIGZpZWxkSWQsIGZpZWxkVHlwZSwgZmllbGRSdWxlLCB7IFwiZGVmYXVsdFwiOiBkZWZhdWx0VmFsdWUgfSkpO1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaWVsZCBkZWNvcmF0b3IgKFR5cGVTY3JpcHQpLlxyXG4gKiBAbmFtZSBGaWVsZC5kXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmllbGRJZCBGaWVsZCBpZFxyXG4gKiBAcGFyYW0ge0NvbnN0cnVjdG9yPFQ+fHN0cmluZ30gZmllbGRUeXBlIEZpZWxkIHR5cGVcclxuICogQHBhcmFtIHtcIm9wdGlvbmFsXCJ8XCJyZXF1aXJlZFwifFwicmVwZWF0ZWRcIn0gW2ZpZWxkUnVsZT1cIm9wdGlvbmFsXCJdIEZpZWxkIHJ1bGVcclxuICogQHJldHVybnMge0ZpZWxkRGVjb3JhdG9yfSBEZWNvcmF0b3IgZnVuY3Rpb25cclxuICogQHRlbXBsYXRlIFQgZXh0ZW5kcyBNZXNzYWdlPFQ+XHJcbiAqIEB2YXJpYXRpb24gMlxyXG4gKi9cclxuLy8gbGlrZSBGaWVsZC5kIGJ1dCB3aXRob3V0IGEgZGVmYXVsdCB2YWx1ZVxyXG5cclxuLy8gU2V0cyB1cCBjeWNsaWMgZGVwZW5kZW5jaWVzIChjYWxsZWQgaW4gaW5kZXgtbGlnaHQpXHJcbkZpZWxkLl9jb25maWd1cmUgPSBmdW5jdGlvbiBjb25maWd1cmUoVHlwZV8pIHtcclxuICAgIFR5cGUgPSBUeXBlXztcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBwcm90b2J1ZiA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaW5kZXgtbWluaW1hbFwiKTtcclxuXHJcbnByb3RvYnVmLmJ1aWxkID0gXCJsaWdodFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgbm9kZS1zdHlsZSBjYWxsYmFjayBhcyB1c2VkIGJ5IHtAbGluayBsb2FkfSBhbmQge0BsaW5rIFJvb3QjbG9hZH0uXHJcbiAqIEB0eXBlZGVmIExvYWRDYWxsYmFja1xyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7RXJyb3J8bnVsbH0gZXJyb3IgRXJyb3IsIGlmIGFueSwgb3RoZXJ3aXNlIGBudWxsYFxyXG4gKiBAcGFyYW0ge1Jvb3R9IFtyb290XSBSb290LCBpZiB0aGVyZSBoYXNuJ3QgYmVlbiBhbiBlcnJvclxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBvbmUgb3IgbXVsdGlwbGUgLnByb3RvIG9yIHByZXByb2Nlc3NlZCAuanNvbiBmaWxlcyBpbnRvIGEgY29tbW9uIHJvb3QgbmFtZXNwYWNlIGFuZCBjYWxscyB0aGUgY2FsbGJhY2suXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlbmFtZSBPbmUgb3IgbXVsdGlwbGUgZmlsZXMgdG8gbG9hZFxyXG4gKiBAcGFyYW0ge1Jvb3R9IHJvb3QgUm9vdCBuYW1lc3BhY2UsIGRlZmF1bHRzIHRvIGNyZWF0ZSBhIG5ldyBvbmUgaWYgb21pdHRlZC5cclxuICogQHBhcmFtIHtMb2FkQ2FsbGJhY2t9IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAqIEBzZWUge0BsaW5rIFJvb3QjbG9hZH1cclxuICovXHJcbmZ1bmN0aW9uIGxvYWQoZmlsZW5hbWUsIHJvb3QsIGNhbGxiYWNrKSB7XHJcbiAgICBpZiAodHlwZW9mIHJvb3QgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGNhbGxiYWNrID0gcm9vdDtcclxuICAgICAgICByb290ID0gbmV3IHByb3RvYnVmLlJvb3QoKTtcclxuICAgIH0gZWxzZSBpZiAoIXJvb3QpXHJcbiAgICAgICAgcm9vdCA9IG5ldyBwcm90b2J1Zi5Sb290KCk7XHJcbiAgICByZXR1cm4gcm9vdC5sb2FkKGZpbGVuYW1lLCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBvbmUgb3IgbXVsdGlwbGUgLnByb3RvIG9yIHByZXByb2Nlc3NlZCAuanNvbiBmaWxlcyBpbnRvIGEgY29tbW9uIHJvb3QgbmFtZXNwYWNlIGFuZCBjYWxscyB0aGUgY2FsbGJhY2suXHJcbiAqIEBuYW1lIGxvYWRcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlbmFtZSBPbmUgb3IgbXVsdGlwbGUgZmlsZXMgdG8gbG9hZFxyXG4gKiBAcGFyYW0ge0xvYWRDYWxsYmFja30gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb25cclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICogQHNlZSB7QGxpbmsgUm9vdCNsb2FkfVxyXG4gKiBAdmFyaWF0aW9uIDJcclxuICovXHJcbi8vIGZ1bmN0aW9uIGxvYWQoZmlsZW5hbWU6c3RyaW5nLCBjYWxsYmFjazpMb2FkQ2FsbGJhY2spOnVuZGVmaW5lZFxyXG5cclxuLyoqXHJcbiAqIExvYWRzIG9uZSBvciBtdWx0aXBsZSAucHJvdG8gb3IgcHJlcHJvY2Vzc2VkIC5qc29uIGZpbGVzIGludG8gYSBjb21tb24gcm9vdCBuYW1lc3BhY2UgYW5kIHJldHVybnMgYSBwcm9taXNlLlxyXG4gKiBAbmFtZSBsb2FkXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gZmlsZW5hbWUgT25lIG9yIG11bHRpcGxlIGZpbGVzIHRvIGxvYWRcclxuICogQHBhcmFtIHtSb290fSBbcm9vdF0gUm9vdCBuYW1lc3BhY2UsIGRlZmF1bHRzIHRvIGNyZWF0ZSBhIG5ldyBvbmUgaWYgb21pdHRlZC5cclxuICogQHJldHVybnMge1Byb21pc2U8Um9vdD59IFByb21pc2VcclxuICogQHNlZSB7QGxpbmsgUm9vdCNsb2FkfVxyXG4gKiBAdmFyaWF0aW9uIDNcclxuICovXHJcbi8vIGZ1bmN0aW9uIGxvYWQoZmlsZW5hbWU6c3RyaW5nLCBbcm9vdDpSb290XSk6UHJvbWlzZTxSb290PlxyXG5cclxucHJvdG9idWYubG9hZCA9IGxvYWQ7XHJcblxyXG4vKipcclxuICogU3luY2hyb25vdXNseSBsb2FkcyBvbmUgb3IgbXVsdGlwbGUgLnByb3RvIG9yIHByZXByb2Nlc3NlZCAuanNvbiBmaWxlcyBpbnRvIGEgY29tbW9uIHJvb3QgbmFtZXNwYWNlIChub2RlIG9ubHkpLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gZmlsZW5hbWUgT25lIG9yIG11bHRpcGxlIGZpbGVzIHRvIGxvYWRcclxuICogQHBhcmFtIHtSb290fSBbcm9vdF0gUm9vdCBuYW1lc3BhY2UsIGRlZmF1bHRzIHRvIGNyZWF0ZSBhIG5ldyBvbmUgaWYgb21pdHRlZC5cclxuICogQHJldHVybnMge1Jvb3R9IFJvb3QgbmFtZXNwYWNlXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiBzeW5jaHJvbm91cyBmZXRjaGluZyBpcyBub3Qgc3VwcG9ydGVkIChpLmUuIGluIGJyb3dzZXJzKSBvciBpZiBhIGZpbGUncyBzeW50YXggaXMgaW52YWxpZFxyXG4gKiBAc2VlIHtAbGluayBSb290I2xvYWRTeW5jfVxyXG4gKi9cclxuZnVuY3Rpb24gbG9hZFN5bmMoZmlsZW5hbWUsIHJvb3QpIHtcclxuICAgIGlmICghcm9vdClcclxuICAgICAgICByb290ID0gbmV3IHByb3RvYnVmLlJvb3QoKTtcclxuICAgIHJldHVybiByb290LmxvYWRTeW5jKGZpbGVuYW1lKTtcclxufVxyXG5cclxucHJvdG9idWYubG9hZFN5bmMgPSBsb2FkU3luYztcclxuXHJcbi8vIFNlcmlhbGl6YXRpb25cclxucHJvdG9idWYuZW5jb2RlciAgICAgICAgICA9IHJlcXVpcmUoXCIuL2VuY29kZXJcIik7XHJcbnByb3RvYnVmLmRlY29kZXIgICAgICAgICAgPSByZXF1aXJlKFwiLi9kZWNvZGVyXCIpO1xyXG5wcm90b2J1Zi52ZXJpZmllciAgICAgICAgID0gcmVxdWlyZShcIi4vdmVyaWZpZXJcIik7XHJcbnByb3RvYnVmLmNvbnZlcnRlciAgICAgICAgPSByZXF1aXJlKFwiLi9jb252ZXJ0ZXJcIik7XHJcblxyXG4vLyBSZWZsZWN0aW9uXHJcbnByb3RvYnVmLlJlZmxlY3Rpb25PYmplY3QgPSByZXF1aXJlKFwiLi9vYmplY3RcIik7XHJcbnByb3RvYnVmLk5hbWVzcGFjZSAgICAgICAgPSByZXF1aXJlKFwiLi9uYW1lc3BhY2VcIik7XHJcbnByb3RvYnVmLlJvb3QgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9yb290XCIpO1xyXG5wcm90b2J1Zi5FbnVtICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vZW51bVwiKTtcclxucHJvdG9idWYuVHlwZSAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL3R5cGVcIik7XHJcbnByb3RvYnVmLkZpZWxkICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9maWVsZFwiKTtcclxucHJvdG9idWYuT25lT2YgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL29uZW9mXCIpO1xyXG5wcm90b2J1Zi5NYXBGaWVsZCAgICAgICAgID0gcmVxdWlyZShcIi4vbWFwZmllbGRcIik7XHJcbnByb3RvYnVmLlNlcnZpY2UgICAgICAgICAgPSByZXF1aXJlKFwiLi9zZXJ2aWNlXCIpO1xyXG5wcm90b2J1Zi5NZXRob2QgICAgICAgICAgID0gcmVxdWlyZShcIi4vbWV0aG9kXCIpO1xyXG5cclxuLy8gUnVudGltZVxyXG5wcm90b2J1Zi5NZXNzYWdlICAgICAgICAgID0gcmVxdWlyZShcIi4vbWVzc2FnZVwiKTtcclxucHJvdG9idWYud3JhcHBlcnMgICAgICAgICA9IHJlcXVpcmUoXCIuL3dyYXBwZXJzXCIpO1xyXG5cclxuLy8gVXRpbGl0eVxyXG5wcm90b2J1Zi50eXBlcyAgICAgICAgICAgID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnByb3RvYnVmLnV0aWwgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xyXG5cclxuLy8gU2V0IHVwIHBvc3NpYmx5IGN5Y2xpYyByZWZsZWN0aW9uIGRlcGVuZGVuY2llc1xyXG5wcm90b2J1Zi5SZWZsZWN0aW9uT2JqZWN0Ll9jb25maWd1cmUocHJvdG9idWYuUm9vdCk7XHJcbnByb3RvYnVmLk5hbWVzcGFjZS5fY29uZmlndXJlKHByb3RvYnVmLlR5cGUsIHByb3RvYnVmLlNlcnZpY2UsIHByb3RvYnVmLkVudW0pO1xyXG5wcm90b2J1Zi5Sb290Ll9jb25maWd1cmUocHJvdG9idWYuVHlwZSk7XHJcbnByb3RvYnVmLkZpZWxkLl9jb25maWd1cmUocHJvdG9idWYuVHlwZSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgcHJvdG9idWYgPSBleHBvcnRzO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIHR5cGUsIG9uZSBvZiBgXCJmdWxsXCJgLCBgXCJsaWdodFwiYCBvciBgXCJtaW5pbWFsXCJgLlxyXG4gKiBAbmFtZSBidWlsZFxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAY29uc3RcclxuICovXHJcbnByb3RvYnVmLmJ1aWxkID0gXCJtaW5pbWFsXCI7XHJcblxyXG4vLyBTZXJpYWxpemF0aW9uXHJcbnByb3RvYnVmLldyaXRlciAgICAgICA9IHJlcXVpcmUoXCIuL3dyaXRlclwiKTtcclxucHJvdG9idWYuQnVmZmVyV3JpdGVyID0gcmVxdWlyZShcIi4vd3JpdGVyX2J1ZmZlclwiKTtcclxucHJvdG9idWYuUmVhZGVyICAgICAgID0gcmVxdWlyZShcIi4vcmVhZGVyXCIpO1xyXG5wcm90b2J1Zi5CdWZmZXJSZWFkZXIgPSByZXF1aXJlKFwiLi9yZWFkZXJfYnVmZmVyXCIpO1xyXG5cclxuLy8gVXRpbGl0eVxyXG5wcm90b2J1Zi51dGlsICAgICAgICAgPSByZXF1aXJlKFwiLi91dGlsL21pbmltYWxcIik7XHJcbnByb3RvYnVmLnJwYyAgICAgICAgICA9IHJlcXVpcmUoXCIuL3JwY1wiKTtcclxucHJvdG9idWYucm9vdHMgICAgICAgID0gcmVxdWlyZShcIi4vcm9vdHNcIik7XHJcbnByb3RvYnVmLmNvbmZpZ3VyZSAgICA9IGNvbmZpZ3VyZTtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbi8qKlxyXG4gKiBSZWNvbmZpZ3VyZXMgdGhlIGxpYnJhcnkgYWNjb3JkaW5nIHRvIHRoZSBlbnZpcm9ubWVudC5cclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICovXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZSgpIHtcclxuICAgIHByb3RvYnVmLlJlYWRlci5fY29uZmlndXJlKHByb3RvYnVmLkJ1ZmZlclJlYWRlcik7XHJcbiAgICBwcm90b2J1Zi51dGlsLl9jb25maWd1cmUoKTtcclxufVxyXG5cclxuLy8gU2V0IHVwIGJ1ZmZlciB1dGlsaXR5IGFjY29yZGluZyB0byB0aGUgZW52aXJvbm1lbnRcclxucHJvdG9idWYuV3JpdGVyLl9jb25maWd1cmUocHJvdG9idWYuQnVmZmVyV3JpdGVyKTtcclxuY29uZmlndXJlKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgcHJvdG9idWYgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2luZGV4LWxpZ2h0XCIpO1xyXG5cclxucHJvdG9idWYuYnVpbGQgPSBcImZ1bGxcIjtcclxuXHJcbi8vIFBhcnNlclxyXG5wcm90b2J1Zi50b2tlbml6ZSAgICAgICAgID0gcmVxdWlyZShcIi4vdG9rZW5pemVcIik7XHJcbnByb3RvYnVmLnBhcnNlICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9wYXJzZVwiKTtcclxucHJvdG9idWYuY29tbW9uICAgICAgICAgICA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcclxuXHJcbi8vIENvbmZpZ3VyZSBwYXJzZXJcclxucHJvdG9idWYuUm9vdC5fY29uZmlndXJlKHByb3RvYnVmLlR5cGUsIHByb3RvYnVmLnBhcnNlLCBwcm90b2J1Zi5jb21tb24pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBNYXBGaWVsZDtcclxuXHJcbi8vIGV4dGVuZHMgRmllbGRcclxudmFyIEZpZWxkID0gcmVxdWlyZShcIi4vZmllbGRcIik7XHJcbigoTWFwRmllbGQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGaWVsZC5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IE1hcEZpZWxkKS5jbGFzc05hbWUgPSBcIk1hcEZpZWxkXCI7XHJcblxyXG52YXIgdHlwZXMgICA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpLFxyXG4gICAgdXRpbCAgICA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIG5ldyBtYXAgZmllbGQgaW5zdGFuY2UuXHJcbiAqIEBjbGFzc2Rlc2MgUmVmbGVjdGVkIG1hcCBmaWVsZC5cclxuICogQGV4dGVuZHMgRmllbGRCYXNlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBVbmlxdWUgbmFtZSB3aXRoaW4gaXRzIG5hbWVzcGFjZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgVW5pcXVlIGlkIHdpdGhpbiBpdHMgbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlUeXBlIEtleSB0eXBlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFZhbHVlIHR5cGVcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIERlY2xhcmVkIG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21tZW50XSBDb21tZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZpZWxkXHJcbiAqL1xyXG5mdW5jdGlvbiBNYXBGaWVsZChuYW1lLCBpZCwga2V5VHlwZSwgdHlwZSwgb3B0aW9ucywgY29tbWVudCkge1xyXG4gICAgRmllbGQuY2FsbCh0aGlzLCBuYW1lLCBpZCwgdHlwZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG9wdGlvbnMsIGNvbW1lbnQpO1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGtleVR5cGUpKVxyXG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcImtleVR5cGUgbXVzdCBiZSBhIHN0cmluZ1wiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEtleSB0eXBlLlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5rZXlUeXBlID0ga2V5VHlwZTsgLy8gdG9KU09OLCBtYXJrZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc29sdmVkIGtleSB0eXBlIGlmIG5vdCBhIGJhc2ljIHR5cGUuXHJcbiAgICAgKiBAdHlwZSB7UmVmbGVjdGlvbk9iamVjdHxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc29sdmVkS2V5VHlwZSA9IG51bGw7XHJcblxyXG4gICAgLy8gT3ZlcnJpZGVzIEZpZWxkI21hcFxyXG4gICAgdGhpcy5tYXAgPSB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogTWFwIGZpZWxkIGRlc2NyaXB0b3IuXHJcbiAqIEBpbnRlcmZhY2UgSU1hcEZpZWxkXHJcbiAqIEBleHRlbmRzIHtJRmllbGR9XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBrZXlUeXBlIEtleSB0eXBlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEV4dGVuc2lvbiBtYXAgZmllbGQgZGVzY3JpcHRvci5cclxuICogQGludGVyZmFjZSBJRXh0ZW5zaW9uTWFwRmllbGRcclxuICogQGV4dGVuZHMgSU1hcEZpZWxkXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBleHRlbmQgRXh0ZW5kZWQgdHlwZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbWFwIGZpZWxkIGZyb20gYSBtYXAgZmllbGQgZGVzY3JpcHRvci5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgRmllbGQgbmFtZVxyXG4gKiBAcGFyYW0ge0lNYXBGaWVsZH0ganNvbiBNYXAgZmllbGQgZGVzY3JpcHRvclxyXG4gKiBAcmV0dXJucyB7TWFwRmllbGR9IENyZWF0ZWQgbWFwIGZpZWxkXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYXJndW1lbnRzIGFyZSBpbnZhbGlkXHJcbiAqL1xyXG5NYXBGaWVsZC5mcm9tSlNPTiA9IGZ1bmN0aW9uIGZyb21KU09OKG5hbWUsIGpzb24pIHtcclxuICAgIHJldHVybiBuZXcgTWFwRmllbGQobmFtZSwganNvbi5pZCwganNvbi5rZXlUeXBlLCBqc29uLnR5cGUsIGpzb24ub3B0aW9ucywganNvbi5jb21tZW50KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGlzIG1hcCBmaWVsZCB0byBhIG1hcCBmaWVsZCBkZXNjcmlwdG9yLlxyXG4gKiBAcGFyYW0ge0lUb0pTT05PcHRpb25zfSBbdG9KU09OT3B0aW9uc10gSlNPTiBjb252ZXJzaW9uIG9wdGlvbnNcclxuICogQHJldHVybnMge0lNYXBGaWVsZH0gTWFwIGZpZWxkIGRlc2NyaXB0b3JcclxuICovXHJcbk1hcEZpZWxkLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04odG9KU09OT3B0aW9ucykge1xyXG4gICAgdmFyIGtlZXBDb21tZW50cyA9IHRvSlNPTk9wdGlvbnMgPyBCb29sZWFuKHRvSlNPTk9wdGlvbnMua2VlcENvbW1lbnRzKSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHV0aWwudG9PYmplY3QoW1xyXG4gICAgICAgIFwia2V5VHlwZVwiICwgdGhpcy5rZXlUeXBlLFxyXG4gICAgICAgIFwidHlwZVwiICAgICwgdGhpcy50eXBlLFxyXG4gICAgICAgIFwiaWRcIiAgICAgICwgdGhpcy5pZCxcclxuICAgICAgICBcImV4dGVuZFwiICAsIHRoaXMuZXh0ZW5kLFxyXG4gICAgICAgIFwib3B0aW9uc1wiICwgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgIFwiY29tbWVudFwiICwga2VlcENvbW1lbnRzID8gdGhpcy5jb21tZW50IDogdW5kZWZpbmVkXHJcbiAgICBdKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAb3ZlcnJpZGVcclxuICovXHJcbk1hcEZpZWxkLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSgpIHtcclxuICAgIGlmICh0aGlzLnJlc29sdmVkKVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgIC8vIEJlc2lkZXMgYSB2YWx1ZSB0eXBlLCBtYXAgZmllbGRzIGhhdmUgYSBrZXkgdHlwZSB0aGF0IG1heSBiZSBcImFueSBzY2FsYXIgdHlwZSBleGNlcHQgZm9yIGZsb2F0aW5nIHBvaW50IHR5cGVzIGFuZCBieXRlc1wiXHJcbiAgICBpZiAodHlwZXMubWFwS2V5W3RoaXMua2V5VHlwZV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICB0aHJvdyBFcnJvcihcImludmFsaWQga2V5IHR5cGU6IFwiICsgdGhpcy5rZXlUeXBlKTtcclxuXHJcbiAgICByZXR1cm4gRmllbGQucHJvdG90eXBlLnJlc29sdmUuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNYXAgZmllbGQgZGVjb3JhdG9yIChUeXBlU2NyaXB0KS5cclxuICogQG5hbWUgTWFwRmllbGQuZFxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtudW1iZXJ9IGZpZWxkSWQgRmllbGQgaWRcclxuICogQHBhcmFtIHtcImludDMyXCJ8XCJ1aW50MzJcInxcInNpbnQzMlwifFwiZml4ZWQzMlwifFwic2ZpeGVkMzJcInxcImludDY0XCJ8XCJ1aW50NjRcInxcInNpbnQ2NFwifFwiZml4ZWQ2NFwifFwic2ZpeGVkNjRcInxcImJvb2xcInxcInN0cmluZ1wifSBmaWVsZEtleVR5cGUgRmllbGQga2V5IHR5cGVcclxuICogQHBhcmFtIHtcImRvdWJsZVwifFwiZmxvYXRcInxcImludDMyXCJ8XCJ1aW50MzJcInxcInNpbnQzMlwifFwiZml4ZWQzMlwifFwic2ZpeGVkMzJcInxcImludDY0XCJ8XCJ1aW50NjRcInxcInNpbnQ2NFwifFwiZml4ZWQ2NFwifFwic2ZpeGVkNjRcInxcImJvb2xcInxcInN0cmluZ1wifFwiYnl0ZXNcInxPYmplY3R8Q29uc3RydWN0b3I8e30+fSBmaWVsZFZhbHVlVHlwZSBGaWVsZCB2YWx1ZSB0eXBlXHJcbiAqIEByZXR1cm5zIHtGaWVsZERlY29yYXRvcn0gRGVjb3JhdG9yIGZ1bmN0aW9uXHJcbiAqIEB0ZW1wbGF0ZSBUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBMb25nIHwgc3RyaW5nIHwgYm9vbGVhbiB8IFVpbnQ4QXJyYXkgfCBCdWZmZXIgfCBudW1iZXJbXSB8IE1lc3NhZ2U8e30+IH1cclxuICovXHJcbk1hcEZpZWxkLmQgPSBmdW5jdGlvbiBkZWNvcmF0ZU1hcEZpZWxkKGZpZWxkSWQsIGZpZWxkS2V5VHlwZSwgZmllbGRWYWx1ZVR5cGUpIHtcclxuXHJcbiAgICAvLyBzdWJtZXNzYWdlIHZhbHVlOiBkZWNvcmF0ZSB0aGUgc3VibWVzc2FnZSBhbmQgdXNlIGl0cyBuYW1lIGFzIHRoZSB0eXBlXHJcbiAgICBpZiAodHlwZW9mIGZpZWxkVmFsdWVUeXBlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZmllbGRWYWx1ZVR5cGUgPSB1dGlsLmRlY29yYXRlVHlwZShmaWVsZFZhbHVlVHlwZSkubmFtZTtcclxuXHJcbiAgICAvLyBlbnVtIHJlZmVyZW5jZSB2YWx1ZTogY3JlYXRlIGEgcmVmbGVjdGVkIGNvcHkgb2YgdGhlIGVudW0gYW5kIGtlZXAgcmV1c2VpbmcgaXRcclxuICAgIGVsc2UgaWYgKGZpZWxkVmFsdWVUeXBlICYmIHR5cGVvZiBmaWVsZFZhbHVlVHlwZSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICBmaWVsZFZhbHVlVHlwZSA9IHV0aWwuZGVjb3JhdGVFbnVtKGZpZWxkVmFsdWVUeXBlKS5uYW1lO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBtYXBGaWVsZERlY29yYXRvcihwcm90b3R5cGUsIGZpZWxkTmFtZSkge1xyXG4gICAgICAgIHV0aWwuZGVjb3JhdGVUeXBlKHByb3RvdHlwZS5jb25zdHJ1Y3RvcilcclxuICAgICAgICAgICAgLmFkZChuZXcgTWFwRmllbGQoZmllbGROYW1lLCBmaWVsZElkLCBmaWVsZEtleVR5cGUsIGZpZWxkVmFsdWVUeXBlKSk7XHJcbiAgICB9O1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsL21pbmltYWxcIik7XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIG5ldyBtZXNzYWdlIGluc3RhbmNlLlxyXG4gKiBAY2xhc3NkZXNjIEFic3RyYWN0IHJ1bnRpbWUgbWVzc2FnZS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7UHJvcGVydGllczxUPn0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAqIEB0ZW1wbGF0ZSBUIGV4dGVuZHMgb2JqZWN0ID0gb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBNZXNzYWdlKHByb3BlcnRpZXMpIHtcclxuICAgIC8vIG5vdCB1c2VkIGludGVybmFsbHlcclxuICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICB0aGlzW2tleXNbaV1dID0gcHJvcGVydGllc1trZXlzW2ldXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSB0byB0aGUgcmVmbGVjdGVkIHR5cGUuXHJcbiAqIEBuYW1lIE1lc3NhZ2UuJHR5cGVcclxuICogQHR5cGUge1R5cGV9XHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZWZlcmVuY2UgdG8gdGhlIHJlZmxlY3RlZCB0eXBlLlxyXG4gKiBAbmFtZSBNZXNzYWdlIyR0eXBlXHJcbiAqIEB0eXBlIHtUeXBlfVxyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcblxyXG4vKmVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IG1lc3NhZ2Ugb2YgdGhpcyB0eXBlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XHJcbiAqIEByZXR1cm5zIHtNZXNzYWdlPFQ+fSBNZXNzYWdlIGluc3RhbmNlXHJcbiAqIEB0ZW1wbGF0ZSBUIGV4dGVuZHMgTWVzc2FnZTxUPlxyXG4gKiBAdGhpcyBDb25zdHJ1Y3RvcjxUPlxyXG4gKi9cclxuTWVzc2FnZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHR5cGUuY3JlYXRlKHByb3BlcnRpZXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVuY29kZXMgYSBtZXNzYWdlIG9mIHRoaXMgdHlwZS5cclxuICogQHBhcmFtIHtUfE9iamVjdC48c3RyaW5nLCo+fSBtZXNzYWdlIE1lc3NhZ2UgdG8gZW5jb2RlXHJcbiAqIEBwYXJhbSB7V3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gdXNlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IFdyaXRlclxyXG4gKiBAdGVtcGxhdGUgVCBleHRlbmRzIE1lc3NhZ2U8VD5cclxuICogQHRoaXMgQ29uc3RydWN0b3I8VD5cclxuICovXHJcbk1lc3NhZ2UuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuJHR5cGUuZW5jb2RlKG1lc3NhZ2UsIHdyaXRlcik7XHJcbn07XHJcblxyXG4vKipcclxuICogRW5jb2RlcyBhIG1lc3NhZ2Ugb2YgdGhpcyB0eXBlIHByZWNlZWRlZCBieSBpdHMgbGVuZ3RoIGFzIGEgdmFyaW50LlxyXG4gKiBAcGFyYW0ge1R8T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgTWVzc2FnZSB0byBlbmNvZGVcclxuICogQHBhcmFtIHtXcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byB1c2VcclxuICogQHJldHVybnMge1dyaXRlcn0gV3JpdGVyXHJcbiAqIEB0ZW1wbGF0ZSBUIGV4dGVuZHMgTWVzc2FnZTxUPlxyXG4gKiBAdGhpcyBDb25zdHJ1Y3RvcjxUPlxyXG4gKi9cclxuTWVzc2FnZS5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kdHlwZS5lbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgbWVzc2FnZSBvZiB0aGlzIHR5cGUuXHJcbiAqIEBuYW1lIE1lc3NhZ2UuZGVjb2RlXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge1JlYWRlcnxVaW50OEFycmF5fSByZWFkZXIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGVcclxuICogQHJldHVybnMge1R9IERlY29kZWQgbWVzc2FnZVxyXG4gKiBAdGVtcGxhdGUgVCBleHRlbmRzIE1lc3NhZ2U8VD5cclxuICogQHRoaXMgQ29uc3RydWN0b3I8VD5cclxuICovXHJcbk1lc3NhZ2UuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHJlYWRlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuJHR5cGUuZGVjb2RlKHJlYWRlcik7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVjb2RlcyBhIG1lc3NhZ2Ugb2YgdGhpcyB0eXBlIHByZWNlZWRlZCBieSBpdHMgbGVuZ3RoIGFzIGEgdmFyaW50LlxyXG4gKiBAbmFtZSBNZXNzYWdlLmRlY29kZURlbGltaXRlZFxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtSZWFkZXJ8VWludDhBcnJheX0gcmVhZGVyIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlXHJcbiAqIEByZXR1cm5zIHtUfSBEZWNvZGVkIG1lc3NhZ2VcclxuICogQHRlbXBsYXRlIFQgZXh0ZW5kcyBNZXNzYWdlPFQ+XHJcbiAqIEB0aGlzIENvbnN0cnVjdG9yPFQ+XHJcbiAqL1xyXG5NZXNzYWdlLmRlY29kZURlbGltaXRlZCA9IGZ1bmN0aW9uIGRlY29kZURlbGltaXRlZChyZWFkZXIpIHtcclxuICAgIHJldHVybiB0aGlzLiR0eXBlLmRlY29kZURlbGltaXRlZChyZWFkZXIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFZlcmlmaWVzIGEgbWVzc2FnZSBvZiB0aGlzIHR5cGUuXHJcbiAqIEBuYW1lIE1lc3NhZ2UudmVyaWZ5XHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBtZXNzYWdlIFBsYWluIG9iamVjdCB0byB2ZXJpZnlcclxuICogQHJldHVybnMge3N0cmluZ3xudWxsfSBgbnVsbGAgaWYgdmFsaWQsIG90aGVyd2lzZSB0aGUgcmVhc29uIHdoeSBpdCBpcyBub3RcclxuICovXHJcbk1lc3NhZ2UudmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiB0aGlzLiR0eXBlLnZlcmlmeShtZXNzYWdlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IG1lc3NhZ2Ugb2YgdGhpcyB0eXBlIGZyb20gYSBwbGFpbiBvYmplY3QuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgaW50ZXJuYWwgdHlwZXMuXHJcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IG9iamVjdCBQbGFpbiBvYmplY3RcclxuICogQHJldHVybnMge1R9IE1lc3NhZ2UgaW5zdGFuY2VcclxuICogQHRlbXBsYXRlIFQgZXh0ZW5kcyBNZXNzYWdlPFQ+XHJcbiAqIEB0aGlzIENvbnN0cnVjdG9yPFQ+XHJcbiAqL1xyXG5NZXNzYWdlLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMuJHR5cGUuZnJvbU9iamVjdChvYmplY3QpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwbGFpbiBvYmplY3QgZnJvbSBhIG1lc3NhZ2Ugb2YgdGhpcyB0eXBlLiBBbHNvIGNvbnZlcnRzIHZhbHVlcyB0byBvdGhlciB0eXBlcyBpZiBzcGVjaWZpZWQuXHJcbiAqIEBwYXJhbSB7VH0gbWVzc2FnZSBNZXNzYWdlIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB7SUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XHJcbiAqIEB0ZW1wbGF0ZSBUIGV4dGVuZHMgTWVzc2FnZTxUPlxyXG4gKiBAdGhpcyBDb25zdHJ1Y3RvcjxUPlxyXG4gKi9cclxuTWVzc2FnZS50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLiR0eXBlLnRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoaXMgbWVzc2FnZSB0byBKU09OLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IEpTT04gb2JqZWN0XHJcbiAqL1xyXG5NZXNzYWdlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kdHlwZS50b09iamVjdCh0aGlzLCB1dGlsLnRvSlNPTk9wdGlvbnMpO1xyXG59O1xyXG5cclxuLyplc2xpbnQtZW5hYmxlIHZhbGlkLWpzZG9jKi8iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBNZXRob2Q7XHJcblxyXG4vLyBleHRlbmRzIFJlZmxlY3Rpb25PYmplY3RcclxudmFyIFJlZmxlY3Rpb25PYmplY3QgPSByZXF1aXJlKFwiLi9vYmplY3RcIik7XHJcbigoTWV0aG9kLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVmbGVjdGlvbk9iamVjdC5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IE1ldGhvZCkuY2xhc3NOYW1lID0gXCJNZXRob2RcIjtcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbmV3IHNlcnZpY2UgbWV0aG9kIGluc3RhbmNlLlxyXG4gKiBAY2xhc3NkZXNjIFJlZmxlY3RlZCBzZXJ2aWNlIG1ldGhvZC5cclxuICogQGV4dGVuZHMgUmVmbGVjdGlvbk9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTWV0aG9kIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSB0eXBlIE1ldGhvZCB0eXBlLCB1c3VhbGx5IGBcInJwY1wiYFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGUgUmVxdWVzdCBtZXNzYWdlIHR5cGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlVHlwZSBSZXNwb25zZSBtZXNzYWdlIHR5cGVcclxuICogQHBhcmFtIHtib29sZWFufE9iamVjdC48c3RyaW5nLCo+fSBbcmVxdWVzdFN0cmVhbV0gV2hldGhlciB0aGUgcmVxdWVzdCBpcyBzdHJlYW1lZFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW58T2JqZWN0LjxzdHJpbmcsKj59IFtyZXNwb25zZVN0cmVhbV0gV2hldGhlciB0aGUgcmVzcG9uc2UgaXMgc3RyZWFtZWRcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIERlY2xhcmVkIG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21tZW50XSBUaGUgY29tbWVudCBmb3IgdGhpcyBtZXRob2RcclxuICovXHJcbmZ1bmN0aW9uIE1ldGhvZChuYW1lLCB0eXBlLCByZXF1ZXN0VHlwZSwgcmVzcG9uc2VUeXBlLCByZXF1ZXN0U3RyZWFtLCByZXNwb25zZVN0cmVhbSwgb3B0aW9ucywgY29tbWVudCkge1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICBpZiAodXRpbC5pc09iamVjdChyZXF1ZXN0U3RyZWFtKSkge1xyXG4gICAgICAgIG9wdGlvbnMgPSByZXF1ZXN0U3RyZWFtO1xyXG4gICAgICAgIHJlcXVlc3RTdHJlYW0gPSByZXNwb25zZVN0cmVhbSA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSBpZiAodXRpbC5pc09iamVjdChyZXNwb25zZVN0cmVhbSkpIHtcclxuICAgICAgICBvcHRpb25zID0gcmVzcG9uc2VTdHJlYW07XHJcbiAgICAgICAgcmVzcG9uc2VTdHJlYW0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAoISh0eXBlID09PSB1bmRlZmluZWQgfHwgdXRpbC5pc1N0cmluZyh0eXBlKSkpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwidHlwZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHJlcXVlc3RUeXBlKSlcclxuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJyZXF1ZXN0VHlwZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHJlc3BvbnNlVHlwZSkpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwicmVzcG9uc2VUeXBlIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcblxyXG4gICAgUmVmbGVjdGlvbk9iamVjdC5jYWxsKHRoaXMsIG5hbWUsIG9wdGlvbnMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHR5cGUuXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8IFwicnBjXCI7IC8vIHRvSlNPTlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCB0eXBlLlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXF1ZXN0VHlwZSA9IHJlcXVlc3RUeXBlOyAvLyB0b0pTT04sIG1hcmtlclxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciByZXF1ZXN0cyBhcmUgc3RyZWFtZWQgb3Igbm90LlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlcXVlc3RTdHJlYW0gPSByZXF1ZXN0U3RyZWFtID8gdHJ1ZSA6IHVuZGVmaW5lZDsgLy8gdG9KU09OXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNwb25zZSB0eXBlLlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7IC8vIHRvSlNPTlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciByZXNwb25zZXMgYXJlIHN0cmVhbWVkIG9yIG5vdC5cclxuICAgICAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNwb25zZVN0cmVhbSA9IHJlc3BvbnNlU3RyZWFtID8gdHJ1ZSA6IHVuZGVmaW5lZDsgLy8gdG9KU09OXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNvbHZlZCByZXF1ZXN0IHR5cGUuXHJcbiAgICAgKiBAdHlwZSB7VHlwZXxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc29sdmVkUmVxdWVzdFR5cGUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzb2x2ZWQgcmVzcG9uc2UgdHlwZS5cclxuICAgICAqIEB0eXBlIHtUeXBlfG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzb2x2ZWRSZXNwb25zZVR5cGUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tbWVudCBmb3IgdGhpcyBtZXRob2RcclxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jb21tZW50ID0gY29tbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ldGhvZCBkZXNjcmlwdG9yLlxyXG4gKiBAaW50ZXJmYWNlIElNZXRob2RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt0eXBlPVwicnBjXCJdIE1ldGhvZCB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZXF1ZXN0VHlwZSBSZXF1ZXN0IHR5cGVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlc3BvbnNlVHlwZSBSZXNwb25zZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3JlcXVlc3RTdHJlYW09ZmFsc2VdIFdoZXRoZXIgcmVxdWVzdHMgYXJlIHN0cmVhbWVkXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3Jlc3BvbnNlU3RyZWFtPWZhbHNlXSBXaGV0aGVyIHJlc3BvbnNlcyBhcmUgc3RyZWFtZWRcclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIE1ldGhvZCBvcHRpb25zXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBtZXRob2QgZnJvbSBhIG1ldGhvZCBkZXNjcmlwdG9yLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBNZXRob2QgbmFtZVxyXG4gKiBAcGFyYW0ge0lNZXRob2R9IGpzb24gTWV0aG9kIGRlc2NyaXB0b3JcclxuICogQHJldHVybnMge01ldGhvZH0gQ3JlYXRlZCBtZXRob2RcclxuICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBhcmd1bWVudHMgYXJlIGludmFsaWRcclxuICovXHJcbk1ldGhvZC5mcm9tSlNPTiA9IGZ1bmN0aW9uIGZyb21KU09OKG5hbWUsIGpzb24pIHtcclxuICAgIHJldHVybiBuZXcgTWV0aG9kKG5hbWUsIGpzb24udHlwZSwganNvbi5yZXF1ZXN0VHlwZSwganNvbi5yZXNwb25zZVR5cGUsIGpzb24ucmVxdWVzdFN0cmVhbSwganNvbi5yZXNwb25zZVN0cmVhbSwganNvbi5vcHRpb25zLCBqc29uLmNvbW1lbnQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoaXMgbWV0aG9kIHRvIGEgbWV0aG9kIGRlc2NyaXB0b3IuXHJcbiAqIEBwYXJhbSB7SVRvSlNPTk9wdGlvbnN9IFt0b0pTT05PcHRpb25zXSBKU09OIGNvbnZlcnNpb24gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7SU1ldGhvZH0gTWV0aG9kIGRlc2NyaXB0b3JcclxuICovXHJcbk1ldGhvZC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKHRvSlNPTk9wdGlvbnMpIHtcclxuICAgIHZhciBrZWVwQ29tbWVudHMgPSB0b0pTT05PcHRpb25zID8gQm9vbGVhbih0b0pTT05PcHRpb25zLmtlZXBDb21tZW50cykgOiBmYWxzZTtcclxuICAgIHJldHVybiB1dGlsLnRvT2JqZWN0KFtcclxuICAgICAgICBcInR5cGVcIiAgICAgICAgICAgLCB0aGlzLnR5cGUgIT09IFwicnBjXCIgJiYgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gdGhpcy50eXBlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBcInJlcXVlc3RUeXBlXCIgICAgLCB0aGlzLnJlcXVlc3RUeXBlLFxyXG4gICAgICAgIFwicmVxdWVzdFN0cmVhbVwiICAsIHRoaXMucmVxdWVzdFN0cmVhbSxcclxuICAgICAgICBcInJlc3BvbnNlVHlwZVwiICAgLCB0aGlzLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICBcInJlc3BvbnNlU3RyZWFtXCIgLCB0aGlzLnJlc3BvbnNlU3RyZWFtLFxyXG4gICAgICAgIFwib3B0aW9uc1wiICAgICAgICAsIHRoaXMub3B0aW9ucyxcclxuICAgICAgICBcImNvbW1lbnRcIiAgICAgICAgLCBrZWVwQ29tbWVudHMgPyB0aGlzLmNvbW1lbnQgOiB1bmRlZmluZWRcclxuICAgIF0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBvdmVycmlkZVxyXG4gKi9cclxuTWV0aG9kLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSgpIHtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmICh0aGlzLnJlc29sdmVkKVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgIHRoaXMucmVzb2x2ZWRSZXF1ZXN0VHlwZSA9IHRoaXMucGFyZW50Lmxvb2t1cFR5cGUodGhpcy5yZXF1ZXN0VHlwZSk7XHJcbiAgICB0aGlzLnJlc29sdmVkUmVzcG9uc2VUeXBlID0gdGhpcy5wYXJlbnQubG9va3VwVHlwZSh0aGlzLnJlc3BvbnNlVHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIFJlZmxlY3Rpb25PYmplY3QucHJvdG90eXBlLnJlc29sdmUuY2FsbCh0aGlzKTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gTmFtZXNwYWNlO1xyXG5cclxuLy8gZXh0ZW5kcyBSZWZsZWN0aW9uT2JqZWN0XHJcbnZhciBSZWZsZWN0aW9uT2JqZWN0ID0gcmVxdWlyZShcIi4vb2JqZWN0XCIpO1xyXG4oKE5hbWVzcGFjZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlZmxlY3Rpb25PYmplY3QucHJvdG90eXBlKSkuY29uc3RydWN0b3IgPSBOYW1lc3BhY2UpLmNsYXNzTmFtZSA9IFwiTmFtZXNwYWNlXCI7XHJcblxyXG52YXIgRmllbGQgICAgPSByZXF1aXJlKFwiLi9maWVsZFwiKSxcclxuICAgIHV0aWwgICAgID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxuXHJcbnZhciBUeXBlLCAgICAvLyBjeWNsaWNcclxuICAgIFNlcnZpY2UsXHJcbiAgICBFbnVtO1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBuZXcgbmFtZXNwYWNlIGluc3RhbmNlLlxyXG4gKiBAbmFtZSBOYW1lc3BhY2VcclxuICogQGNsYXNzZGVzYyBSZWZsZWN0ZWQgbmFtZXNwYWNlLlxyXG4gKiBAZXh0ZW5kcyBOYW1lc3BhY2VCYXNlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lc3BhY2UgbmFtZVxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBbb3B0aW9uc10gRGVjbGFyZWQgb3B0aW9uc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbmFtZXNwYWNlIGZyb20gSlNPTi5cclxuICogQG1lbWJlcm9mIE5hbWVzcGFjZVxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZXNwYWNlIG5hbWVcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0ganNvbiBKU09OIG9iamVjdFxyXG4gKiBAcmV0dXJucyB7TmFtZXNwYWNlfSBDcmVhdGVkIG5hbWVzcGFjZVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGFyZ3VtZW50cyBhcmUgaW52YWxpZFxyXG4gKi9cclxuTmFtZXNwYWNlLmZyb21KU09OID0gZnVuY3Rpb24gZnJvbUpTT04obmFtZSwganNvbikge1xyXG4gICAgcmV0dXJuIG5ldyBOYW1lc3BhY2UobmFtZSwganNvbi5vcHRpb25zKS5hZGRKU09OKGpzb24ubmVzdGVkKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBvZiByZWZsZWN0aW9uIG9iamVjdHMgdG8gSlNPTi5cclxuICogQG1lbWJlcm9mIE5hbWVzcGFjZVxyXG4gKiBAcGFyYW0ge1JlZmxlY3Rpb25PYmplY3RbXX0gYXJyYXkgT2JqZWN0IGFycmF5XHJcbiAqIEBwYXJhbSB7SVRvSlNPTk9wdGlvbnN9IFt0b0pTT05PcHRpb25zXSBKU09OIGNvbnZlcnNpb24gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj58dW5kZWZpbmVkfSBKU09OIG9iamVjdCBvciBgdW5kZWZpbmVkYCB3aGVuIGFycmF5IGlzIGVtcHR5XHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheVRvSlNPTihhcnJheSwgdG9KU09OT3B0aW9ucykge1xyXG4gICAgaWYgKCEoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSlcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7ICsraSlcclxuICAgICAgICBvYmpbYXJyYXlbaV0ubmFtZV0gPSBhcnJheVtpXS50b0pTT04odG9KU09OT3B0aW9ucyk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5OYW1lc3BhY2UuYXJyYXlUb0pTT04gPSBhcnJheVRvSlNPTjtcclxuXHJcbi8qKlxyXG4gKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIGlkIGlzIHJlc2VydmVkLlxyXG4gKiBAcGFyYW0ge0FycmF5LjxudW1iZXJbXXxzdHJpbmc+fHVuZGVmaW5lZH0gcmVzZXJ2ZWQgQXJyYXkgb2YgcmVzZXJ2ZWQgcmFuZ2VzIGFuZCBuYW1lc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgSWQgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHJlc2VydmVkLCBvdGhlcndpc2UgYGZhbHNlYFxyXG4gKi9cclxuTmFtZXNwYWNlLmlzUmVzZXJ2ZWRJZCA9IGZ1bmN0aW9uIGlzUmVzZXJ2ZWRJZChyZXNlcnZlZCwgaWQpIHtcclxuICAgIGlmIChyZXNlcnZlZClcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc2VydmVkLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc2VydmVkW2ldICE9PSBcInN0cmluZ1wiICYmIHJlc2VydmVkW2ldWzBdIDw9IGlkICYmIHJlc2VydmVkW2ldWzFdID49IGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG4vKipcclxuICogVGVzdHMgaWYgdGhlIHNwZWNpZmllZCBuYW1lIGlzIHJlc2VydmVkLlxyXG4gKiBAcGFyYW0ge0FycmF5LjxudW1iZXJbXXxzdHJpbmc+fHVuZGVmaW5lZH0gcmVzZXJ2ZWQgQXJyYXkgb2YgcmVzZXJ2ZWQgcmFuZ2VzIGFuZCBuYW1lc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiByZXNlcnZlZCwgb3RoZXJ3aXNlIGBmYWxzZWBcclxuICovXHJcbk5hbWVzcGFjZS5pc1Jlc2VydmVkTmFtZSA9IGZ1bmN0aW9uIGlzUmVzZXJ2ZWROYW1lKHJlc2VydmVkLCBuYW1lKSB7XHJcbiAgICBpZiAocmVzZXJ2ZWQpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNlcnZlZC5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgaWYgKHJlc2VydmVkW2ldID09PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG4vKipcclxuICogTm90IGFuIGFjdHVhbCBjb25zdHJ1Y3Rvci4gVXNlIHtAbGluayBOYW1lc3BhY2V9IGluc3RlYWQuXHJcbiAqIEBjbGFzc2Rlc2MgQmFzZSBjbGFzcyBvZiBhbGwgcmVmbGVjdGlvbiBvYmplY3RzIGNvbnRhaW5pbmcgbmVzdGVkIG9iamVjdHMuIFRoaXMgaXMgbm90IGFuIGFjdHVhbCBjbGFzcyBidXQgaGVyZSBmb3IgdGhlIHNha2Ugb2YgaGF2aW5nIGNvbnNpc3RlbnQgdHlwZSBkZWZpbml0aW9ucy5cclxuICogQGV4cG9ydHMgTmFtZXNwYWNlQmFzZVxyXG4gKiBAZXh0ZW5kcyBSZWZsZWN0aW9uT2JqZWN0XHJcbiAqIEBhYnN0cmFjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZXNwYWNlIG5hbWVcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIERlY2xhcmVkIG9wdGlvbnNcclxuICogQHNlZSB7QGxpbmsgTmFtZXNwYWNlfVxyXG4gKi9cclxuZnVuY3Rpb24gTmFtZXNwYWNlKG5hbWUsIG9wdGlvbnMpIHtcclxuICAgIFJlZmxlY3Rpb25PYmplY3QuY2FsbCh0aGlzLCBuYW1lLCBvcHRpb25zKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5lc3RlZCBvYmplY3RzIGJ5IG5hbWUuXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsUmVmbGVjdGlvbk9iamVjdD58dW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm5lc3RlZCA9IHVuZGVmaW5lZDsgLy8gdG9KU09OXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgbmVzdGVkIG9iamVjdHMgYXMgYW4gYXJyYXkuXHJcbiAgICAgKiBAdHlwZSB7UmVmbGVjdGlvbk9iamVjdFtdfG51bGx9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9uZXN0ZWRBcnJheSA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ2FjaGUobmFtZXNwYWNlKSB7XHJcbiAgICBuYW1lc3BhY2UuX25lc3RlZEFycmF5ID0gbnVsbDtcclxuICAgIHJldHVybiBuYW1lc3BhY2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOZXN0ZWQgb2JqZWN0cyBvZiB0aGlzIG5hbWVzcGFjZSBhcyBhbiBhcnJheSBmb3IgaXRlcmF0aW9uLlxyXG4gKiBAbmFtZSBOYW1lc3BhY2VCYXNlI25lc3RlZEFycmF5XHJcbiAqIEB0eXBlIHtSZWZsZWN0aW9uT2JqZWN0W119XHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE5hbWVzcGFjZS5wcm90b3R5cGUsIFwibmVzdGVkQXJyYXlcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmVzdGVkQXJyYXkgfHwgKHRoaXMuX25lc3RlZEFycmF5ID0gdXRpbC50b0FycmF5KHRoaXMubmVzdGVkKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZXNjcmlwdG9yLlxyXG4gKiBAaW50ZXJmYWNlIElOYW1lc3BhY2VcclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIE5hbWVzcGFjZSBvcHRpb25zXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsQW55TmVzdGVkT2JqZWN0Pn0gW25lc3RlZF0gTmVzdGVkIG9iamVjdCBkZXNjcmlwdG9yc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBbnkgZXh0ZW5zaW9uIGZpZWxkIGRlc2NyaXB0b3IuXHJcbiAqIEB0eXBlZGVmIEFueUV4dGVuc2lvbkZpZWxkXHJcbiAqIEB0eXBlIHtJRXh0ZW5zaW9uRmllbGR8SUV4dGVuc2lvbk1hcEZpZWxkfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBbnkgbmVzdGVkIG9iamVjdCBkZXNjcmlwdG9yLlxyXG4gKiBAdHlwZWRlZiBBbnlOZXN0ZWRPYmplY3RcclxuICogQHR5cGUge0lFbnVtfElUeXBlfElTZXJ2aWNlfEFueUV4dGVuc2lvbkZpZWxkfElOYW1lc3BhY2V9XHJcbiAqL1xyXG4vLyBeIEJFV0FSRTogVlNDb2RlIGhhbmdzIGZvcmV2ZXIgd2hlbiB1c2luZyBtb3JlIHRoYW4gNSB0eXBlcyAodGhhdCdzIHdoeSBBbnlFeHRlbnNpb25GaWVsZCBleGlzdHMgaW4gdGhlIGZpcnN0IHBsYWNlKVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoaXMgbmFtZXNwYWNlIHRvIGEgbmFtZXNwYWNlIGRlc2NyaXB0b3IuXHJcbiAqIEBwYXJhbSB7SVRvSlNPTk9wdGlvbnN9IFt0b0pTT05PcHRpb25zXSBKU09OIGNvbnZlcnNpb24gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7SU5hbWVzcGFjZX0gTmFtZXNwYWNlIGRlc2NyaXB0b3JcclxuICovXHJcbk5hbWVzcGFjZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKHRvSlNPTk9wdGlvbnMpIHtcclxuICAgIHJldHVybiB1dGlsLnRvT2JqZWN0KFtcclxuICAgICAgICBcIm9wdGlvbnNcIiAsIHRoaXMub3B0aW9ucyxcclxuICAgICAgICBcIm5lc3RlZFwiICAsIGFycmF5VG9KU09OKHRoaXMubmVzdGVkQXJyYXksIHRvSlNPTk9wdGlvbnMpXHJcbiAgICBdKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIG5lc3RlZCBvYmplY3RzIHRvIHRoaXMgbmFtZXNwYWNlIGZyb20gbmVzdGVkIG9iamVjdCBkZXNjcmlwdG9ycy5cclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZyxBbnlOZXN0ZWRPYmplY3Q+fSBuZXN0ZWRKc29uIEFueSBuZXN0ZWQgb2JqZWN0IGRlc2NyaXB0b3JzXHJcbiAqIEByZXR1cm5zIHtOYW1lc3BhY2V9IGB0aGlzYFxyXG4gKi9cclxuTmFtZXNwYWNlLnByb3RvdHlwZS5hZGRKU09OID0gZnVuY3Rpb24gYWRkSlNPTihuZXN0ZWRKc29uKSB7XHJcbiAgICB2YXIgbnMgPSB0aGlzO1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmIChuZXN0ZWRKc29uKSB7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZXMgPSBPYmplY3Qua2V5cyhuZXN0ZWRKc29uKSwgaSA9IDAsIG5lc3RlZDsgaSA8IG5hbWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIG5lc3RlZCA9IG5lc3RlZEpzb25bbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICBucy5hZGQoIC8vIG1vc3QgdG8gbGVhc3QgbGlrZWx5XHJcbiAgICAgICAgICAgICAgICAoIG5lc3RlZC5maWVsZHMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBUeXBlLmZyb21KU09OXHJcbiAgICAgICAgICAgICAgICA6IG5lc3RlZC52YWx1ZXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBFbnVtLmZyb21KU09OXHJcbiAgICAgICAgICAgICAgICA6IG5lc3RlZC5tZXRob2RzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gU2VydmljZS5mcm9tSlNPTlxyXG4gICAgICAgICAgICAgICAgOiBuZXN0ZWQuaWQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBGaWVsZC5mcm9tSlNPTlxyXG4gICAgICAgICAgICAgICAgOiBOYW1lc3BhY2UuZnJvbUpTT04gKShuYW1lc1tpXSwgbmVzdGVkKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIG5lc3RlZCBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCBuYW1lLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOZXN0ZWQgb2JqZWN0IG5hbWVcclxuICogQHJldHVybnMge1JlZmxlY3Rpb25PYmplY3R8bnVsbH0gVGhlIHJlZmxlY3Rpb24gb2JqZWN0IG9yIGBudWxsYCBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAqL1xyXG5OYW1lc3BhY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZXN0ZWQgJiYgdGhpcy5uZXN0ZWRbbmFtZV1cclxuICAgICAgICB8fCBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIHZhbHVlcyBvZiB0aGUgbmVzdGVkIHtAbGluayBFbnVtfGVudW19IG9mIHRoZSBzcGVjaWZpZWQgbmFtZS5cclxuICogVGhpcyBtZXRob2RzIGRpZmZlcnMgZnJvbSB7QGxpbmsgTmFtZXNwYWNlI2dldHxnZXR9IGluIHRoYXQgaXQgcmV0dXJucyBhbiBlbnVtJ3MgdmFsdWVzIGRpcmVjdGx5IGFuZCB0aHJvd3MgaW5zdGVhZCBvZiByZXR1cm5pbmcgYG51bGxgLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOZXN0ZWQgZW51bSBuYW1lXHJcbiAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZyxudW1iZXI+fSBFbnVtIHZhbHVlc1xyXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlcmUgaXMgbm8gc3VjaCBlbnVtXHJcbiAqL1xyXG5OYW1lc3BhY2UucHJvdG90eXBlLmdldEVudW0gPSBmdW5jdGlvbiBnZXRFbnVtKG5hbWUpIHtcclxuICAgIGlmICh0aGlzLm5lc3RlZCAmJiB0aGlzLm5lc3RlZFtuYW1lXSBpbnN0YW5jZW9mIEVudW0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmVzdGVkW25hbWVdLnZhbHVlcztcclxuICAgIHRocm93IEVycm9yKFwibm8gc3VjaCBlbnVtOiBcIiArIG5hbWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBuZXN0ZWQgb2JqZWN0IHRvIHRoaXMgbmFtZXNwYWNlLlxyXG4gKiBAcGFyYW0ge1JlZmxlY3Rpb25PYmplY3R9IG9iamVjdCBOZXN0ZWQgb2JqZWN0IHRvIGFkZFxyXG4gKiBAcmV0dXJucyB7TmFtZXNwYWNlfSBgdGhpc2BcclxuICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBhcmd1bWVudHMgYXJlIGludmFsaWRcclxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZXJlIGlzIGFscmVhZHkgYSBuZXN0ZWQgb2JqZWN0IHdpdGggdGhpcyBuYW1lXHJcbiAqL1xyXG5OYW1lc3BhY2UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChvYmplY3QpIHtcclxuXHJcbiAgICBpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBGaWVsZCAmJiBvYmplY3QuZXh0ZW5kICE9PSB1bmRlZmluZWQgfHwgb2JqZWN0IGluc3RhbmNlb2YgVHlwZSB8fCBvYmplY3QgaW5zdGFuY2VvZiBFbnVtIHx8IG9iamVjdCBpbnN0YW5jZW9mIFNlcnZpY2UgfHwgb2JqZWN0IGluc3RhbmNlb2YgTmFtZXNwYWNlKSlcclxuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJvYmplY3QgbXVzdCBiZSBhIHZhbGlkIG5lc3RlZCBvYmplY3RcIik7XHJcblxyXG4gICAgaWYgKCF0aGlzLm5lc3RlZClcclxuICAgICAgICB0aGlzLm5lc3RlZCA9IHt9O1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHByZXYgPSB0aGlzLmdldChvYmplY3QubmFtZSk7XHJcbiAgICAgICAgaWYgKHByZXYpIHtcclxuICAgICAgICAgICAgaWYgKHByZXYgaW5zdGFuY2VvZiBOYW1lc3BhY2UgJiYgb2JqZWN0IGluc3RhbmNlb2YgTmFtZXNwYWNlICYmICEocHJldiBpbnN0YW5jZW9mIFR5cGUgfHwgcHJldiBpbnN0YW5jZW9mIFNlcnZpY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXBsYWNlIHBsYWluIG5hbWVzcGFjZSBidXQga2VlcCBleGlzdGluZyBuZXN0ZWQgZWxlbWVudHMgYW5kIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIHZhciBuZXN0ZWQgPSBwcmV2Lm5lc3RlZEFycmF5O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXN0ZWQubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFkZChuZXN0ZWRbaV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUocHJldik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubmVzdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVzdGVkID0ge307XHJcbiAgICAgICAgICAgICAgICBvYmplY3Quc2V0T3B0aW9ucyhwcmV2Lm9wdGlvbnMsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImR1cGxpY2F0ZSBuYW1lICdcIiArIG9iamVjdC5uYW1lICsgXCInIGluIFwiICsgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uZXN0ZWRbb2JqZWN0Lm5hbWVdID0gb2JqZWN0O1xyXG4gICAgb2JqZWN0Lm9uQWRkKHRoaXMpO1xyXG4gICAgcmV0dXJuIGNsZWFyQ2FjaGUodGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhIG5lc3RlZCBvYmplY3QgZnJvbSB0aGlzIG5hbWVzcGFjZS5cclxuICogQHBhcmFtIHtSZWZsZWN0aW9uT2JqZWN0fSBvYmplY3QgTmVzdGVkIG9iamVjdCB0byByZW1vdmVcclxuICogQHJldHVybnMge05hbWVzcGFjZX0gYHRoaXNgXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYXJndW1lbnRzIGFyZSBpbnZhbGlkXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiBgb2JqZWN0YCBpcyBub3QgYSBtZW1iZXIgb2YgdGhpcyBuYW1lc3BhY2VcclxuICovXHJcbk5hbWVzcGFjZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKG9iamVjdCkge1xyXG5cclxuICAgIGlmICghKG9iamVjdCBpbnN0YW5jZW9mIFJlZmxlY3Rpb25PYmplY3QpKVxyXG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcIm9iamVjdCBtdXN0IGJlIGEgUmVmbGVjdGlvbk9iamVjdFwiKTtcclxuICAgIGlmIChvYmplY3QucGFyZW50ICE9PSB0aGlzKVxyXG4gICAgICAgIHRocm93IEVycm9yKG9iamVjdCArIFwiIGlzIG5vdCBhIG1lbWJlciBvZiBcIiArIHRoaXMpO1xyXG5cclxuICAgIGRlbGV0ZSB0aGlzLm5lc3RlZFtvYmplY3QubmFtZV07XHJcbiAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMubmVzdGVkKS5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy5uZXN0ZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgb2JqZWN0Lm9uUmVtb3ZlKHRoaXMpO1xyXG4gICAgcmV0dXJuIGNsZWFyQ2FjaGUodGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhZGRpdGlhbCBuYW1lc3BhY2VzIHdpdGhpbiB0aGlzIG9uZSBpZiBub3QgeWV0IGV4aXN0aW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcGF0aCBQYXRoIHRvIGNyZWF0ZVxyXG4gKiBAcGFyYW0geyp9IFtqc29uXSBOZXN0ZWQgdHlwZXMgdG8gY3JlYXRlIGZyb20gSlNPTlxyXG4gKiBAcmV0dXJucyB7TmFtZXNwYWNlfSBQb2ludGVyIHRvIHRoZSBsYXN0IG5hbWVzcGFjZSBjcmVhdGVkIG9yIGB0aGlzYCBpZiBwYXRoIGlzIGVtcHR5XHJcbiAqL1xyXG5OYW1lc3BhY2UucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZShwYXRoLCBqc29uKSB7XHJcblxyXG4gICAgaWYgKHV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoXCIuXCIpO1xyXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkocGF0aCkpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiaWxsZWdhbCBwYXRoXCIpO1xyXG4gICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGggJiYgcGF0aFswXSA9PT0gXCJcIilcclxuICAgICAgICB0aHJvdyBFcnJvcihcInBhdGggbXVzdCBiZSByZWxhdGl2ZVwiKTtcclxuXHJcbiAgICB2YXIgcHRyID0gdGhpcztcclxuICAgIHdoaWxlIChwYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgcGFydCA9IHBhdGguc2hpZnQoKTtcclxuICAgICAgICBpZiAocHRyLm5lc3RlZCAmJiBwdHIubmVzdGVkW3BhcnRdKSB7XHJcbiAgICAgICAgICAgIHB0ciA9IHB0ci5uZXN0ZWRbcGFydF07XHJcbiAgICAgICAgICAgIGlmICghKHB0ciBpbnN0YW5jZW9mIE5hbWVzcGFjZSkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcInBhdGggY29uZmxpY3RzIHdpdGggbm9uLW5hbWVzcGFjZSBvYmplY3RzXCIpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBwdHIuYWRkKHB0ciA9IG5ldyBOYW1lc3BhY2UocGFydCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGpzb24pXHJcbiAgICAgICAgcHRyLmFkZEpTT04oanNvbik7XHJcbiAgICByZXR1cm4gcHRyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlc29sdmVzIHRoaXMgbmFtZXNwYWNlJ3MgYW5kIGFsbCBpdHMgbmVzdGVkIG9iamVjdHMnIHR5cGUgcmVmZXJlbmNlcy4gVXNlZnVsIHRvIHZhbGlkYXRlIGEgcmVmbGVjdGlvbiB0cmVlLCBidXQgY29tZXMgYXQgYSBjb3N0LlxyXG4gKiBAcmV0dXJucyB7TmFtZXNwYWNlfSBgdGhpc2BcclxuICovXHJcbk5hbWVzcGFjZS5wcm90b3R5cGUucmVzb2x2ZUFsbCA9IGZ1bmN0aW9uIHJlc29sdmVBbGwoKSB7XHJcbiAgICB2YXIgbmVzdGVkID0gdGhpcy5uZXN0ZWRBcnJheSwgaSA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IG5lc3RlZC5sZW5ndGgpXHJcbiAgICAgICAgaWYgKG5lc3RlZFtpXSBpbnN0YW5jZW9mIE5hbWVzcGFjZSlcclxuICAgICAgICAgICAgbmVzdGVkW2krK10ucmVzb2x2ZUFsbCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgbmVzdGVkW2krK10ucmVzb2x2ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZSgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlY3Vyc2l2ZWx5IGxvb2tzIHVwIHRoZSByZWZsZWN0aW9uIG9iamVjdCBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHBhdGggaW4gdGhlIHNjb3BlIG9mIHRoaXMgbmFtZXNwYWNlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcGF0aCBQYXRoIHRvIGxvb2sgdXBcclxuICogQHBhcmFtIHsqfEFycmF5LjwqPn0gZmlsdGVyVHlwZXMgRmlsdGVyIHR5cGVzLCBhbnkgY29tYmluYXRpb24gb2YgdGhlIGNvbnN0cnVjdG9ycyBvZiBgcHJvdG9idWYuVHlwZWAsIGBwcm90b2J1Zi5FbnVtYCwgYHByb3RvYnVmLlNlcnZpY2VgIGV0Yy5cclxuICogQHBhcmFtIHtib29sZWFufSBbcGFyZW50QWxyZWFkeUNoZWNrZWQ9ZmFsc2VdIElmIGtub3duLCB3aGV0aGVyIHRoZSBwYXJlbnQgaGFzIGFscmVhZHkgYmVlbiBjaGVja2VkXHJcbiAqIEByZXR1cm5zIHtSZWZsZWN0aW9uT2JqZWN0fG51bGx9IExvb2tlZCB1cCBvYmplY3Qgb3IgYG51bGxgIGlmIG5vbmUgY291bGQgYmUgZm91bmRcclxuICovXHJcbk5hbWVzcGFjZS5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gbG9va3VwKHBhdGgsIGZpbHRlclR5cGVzLCBwYXJlbnRBbHJlYWR5Q2hlY2tlZCkge1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICBpZiAodHlwZW9mIGZpbHRlclR5cGVzID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIHBhcmVudEFscmVhZHlDaGVja2VkID0gZmlsdGVyVHlwZXM7XHJcbiAgICAgICAgZmlsdGVyVHlwZXMgPSB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2UgaWYgKGZpbHRlclR5cGVzICYmICFBcnJheS5pc0FycmF5KGZpbHRlclR5cGVzKSlcclxuICAgICAgICBmaWx0ZXJUeXBlcyA9IFsgZmlsdGVyVHlwZXMgXTtcclxuXHJcbiAgICBpZiAodXRpbC5pc1N0cmluZyhwYXRoKSAmJiBwYXRoLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChwYXRoID09PSBcIi5cIilcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdChcIi5cIik7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAvLyBTdGFydCBhdCByb290IGlmIHBhdGggaXMgYWJzb2x1dGVcclxuICAgIGlmIChwYXRoWzBdID09PSBcIlwiKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QubG9va3VwKHBhdGguc2xpY2UoMSksIGZpbHRlclR5cGVzKTtcclxuXHJcbiAgICAvLyBUZXN0IGlmIHRoZSBmaXJzdCBwYXJ0IG1hdGNoZXMgYW55IG5lc3RlZCBvYmplY3QsIGFuZCBpZiBzbywgdHJhdmVyc2UgaWYgcGF0aCBjb250YWlucyBtb3JlXHJcbiAgICB2YXIgZm91bmQgPSB0aGlzLmdldChwYXRoWzBdKTtcclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBpZiAoIWZpbHRlclR5cGVzIHx8IGZpbHRlclR5cGVzLmluZGV4T2YoZm91bmQuY29uc3RydWN0b3IpID4gLTEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3VuZCBpbnN0YW5jZW9mIE5hbWVzcGFjZSAmJiAoZm91bmQgPSBmb3VuZC5sb29rdXAocGF0aC5zbGljZSgxKSwgZmlsdGVyVHlwZXMsIHRydWUpKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG5cclxuICAgIC8vIE90aGVyd2lzZSB0cnkgZWFjaCBuZXN0ZWQgbmFtZXNwYWNlXHJcbiAgICB9IGVsc2VcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubmVzdGVkQXJyYXkubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXN0ZWRBcnJheVtpXSBpbnN0YW5jZW9mIE5hbWVzcGFjZSAmJiAoZm91bmQgPSB0aGlzLl9uZXN0ZWRBcnJheVtpXS5sb29rdXAocGF0aCwgZmlsdGVyVHlwZXMsIHRydWUpKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuXHJcbiAgICAvLyBJZiB0aGVyZSBoYXNuJ3QgYmVlbiBhIG1hdGNoLCB0cnkgYWdhaW4gYXQgdGhlIHBhcmVudFxyXG4gICAgaWYgKHRoaXMucGFyZW50ID09PSBudWxsIHx8IHBhcmVudEFscmVhZHlDaGVja2VkKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmxvb2t1cChwYXRoLCBmaWx0ZXJUeXBlcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9va3MgdXAgdGhlIHJlZmxlY3Rpb24gb2JqZWN0IGF0IHRoZSBzcGVjaWZpZWQgcGF0aCwgcmVsYXRpdmUgdG8gdGhpcyBuYW1lc3BhY2UuXHJcbiAqIEBuYW1lIE5hbWVzcGFjZUJhc2UjbG9va3VwXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcGF0aCBQYXRoIHRvIGxvb2sgdXBcclxuICogQHBhcmFtIHtib29sZWFufSBbcGFyZW50QWxyZWFkeUNoZWNrZWQ9ZmFsc2VdIFdoZXRoZXIgdGhlIHBhcmVudCBoYXMgYWxyZWFkeSBiZWVuIGNoZWNrZWRcclxuICogQHJldHVybnMge1JlZmxlY3Rpb25PYmplY3R8bnVsbH0gTG9va2VkIHVwIG9iamVjdCBvciBgbnVsbGAgaWYgbm9uZSBjb3VsZCBiZSBmb3VuZFxyXG4gKiBAdmFyaWF0aW9uIDJcclxuICovXHJcbi8vIGxvb2t1cChwYXRoOiBzdHJpbmcsIFtwYXJlbnRBbHJlYWR5Q2hlY2tlZDogYm9vbGVhbl0pXHJcblxyXG4vKipcclxuICogTG9va3MgdXAgdGhlIHtAbGluayBUeXBlfHR5cGV9IGF0IHRoZSBzcGVjaWZpZWQgcGF0aCwgcmVsYXRpdmUgdG8gdGhpcyBuYW1lc3BhY2UuXHJcbiAqIEJlc2lkZXMgaXRzIHNpZ25hdHVyZSwgdGhpcyBtZXRob2RzIGRpZmZlcnMgZnJvbSB7QGxpbmsgTmFtZXNwYWNlI2xvb2t1cHxsb29rdXB9IGluIHRoYXQgaXQgdGhyb3dzIGluc3RlYWQgb2YgcmV0dXJuaW5nIGBudWxsYC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHBhdGggUGF0aCB0byBsb29rIHVwXHJcbiAqIEByZXR1cm5zIHtUeXBlfSBMb29rZWQgdXAgdHlwZVxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgYHBhdGhgIGRvZXMgbm90IHBvaW50IHRvIGEgdHlwZVxyXG4gKi9cclxuTmFtZXNwYWNlLnByb3RvdHlwZS5sb29rdXBUeXBlID0gZnVuY3Rpb24gbG9va3VwVHlwZShwYXRoKSB7XHJcbiAgICB2YXIgZm91bmQgPSB0aGlzLmxvb2t1cChwYXRoLCBbIFR5cGUgXSk7XHJcbiAgICBpZiAoIWZvdW5kKVxyXG4gICAgICAgIHRocm93IEVycm9yKFwibm8gc3VjaCB0eXBlOiBcIiArIHBhdGgpO1xyXG4gICAgcmV0dXJuIGZvdW5kO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvb2tzIHVwIHRoZSB2YWx1ZXMgb2YgdGhlIHtAbGluayBFbnVtfGVudW19IGF0IHRoZSBzcGVjaWZpZWQgcGF0aCwgcmVsYXRpdmUgdG8gdGhpcyBuYW1lc3BhY2UuXHJcbiAqIEJlc2lkZXMgaXRzIHNpZ25hdHVyZSwgdGhpcyBtZXRob2RzIGRpZmZlcnMgZnJvbSB7QGxpbmsgTmFtZXNwYWNlI2xvb2t1cHxsb29rdXB9IGluIHRoYXQgaXQgdGhyb3dzIGluc3RlYWQgb2YgcmV0dXJuaW5nIGBudWxsYC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHBhdGggUGF0aCB0byBsb29rIHVwXHJcbiAqIEByZXR1cm5zIHtFbnVtfSBMb29rZWQgdXAgZW51bVxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgYHBhdGhgIGRvZXMgbm90IHBvaW50IHRvIGFuIGVudW1cclxuICovXHJcbk5hbWVzcGFjZS5wcm90b3R5cGUubG9va3VwRW51bSA9IGZ1bmN0aW9uIGxvb2t1cEVudW0ocGF0aCkge1xyXG4gICAgdmFyIGZvdW5kID0gdGhpcy5sb29rdXAocGF0aCwgWyBFbnVtIF0pO1xyXG4gICAgaWYgKCFmb3VuZClcclxuICAgICAgICB0aHJvdyBFcnJvcihcIm5vIHN1Y2ggRW51bSAnXCIgKyBwYXRoICsgXCInIGluIFwiICsgdGhpcyk7XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9va3MgdXAgdGhlIHtAbGluayBUeXBlfHR5cGV9IG9yIHtAbGluayBFbnVtfGVudW19IGF0IHRoZSBzcGVjaWZpZWQgcGF0aCwgcmVsYXRpdmUgdG8gdGhpcyBuYW1lc3BhY2UuXHJcbiAqIEJlc2lkZXMgaXRzIHNpZ25hdHVyZSwgdGhpcyBtZXRob2RzIGRpZmZlcnMgZnJvbSB7QGxpbmsgTmFtZXNwYWNlI2xvb2t1cHxsb29rdXB9IGluIHRoYXQgaXQgdGhyb3dzIGluc3RlYWQgb2YgcmV0dXJuaW5nIGBudWxsYC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHBhdGggUGF0aCB0byBsb29rIHVwXHJcbiAqIEByZXR1cm5zIHtUeXBlfSBMb29rZWQgdXAgdHlwZSBvciBlbnVtXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiBgcGF0aGAgZG9lcyBub3QgcG9pbnQgdG8gYSB0eXBlIG9yIGVudW1cclxuICovXHJcbk5hbWVzcGFjZS5wcm90b3R5cGUubG9va3VwVHlwZU9yRW51bSA9IGZ1bmN0aW9uIGxvb2t1cFR5cGVPckVudW0ocGF0aCkge1xyXG4gICAgdmFyIGZvdW5kID0gdGhpcy5sb29rdXAocGF0aCwgWyBUeXBlLCBFbnVtIF0pO1xyXG4gICAgaWYgKCFmb3VuZClcclxuICAgICAgICB0aHJvdyBFcnJvcihcIm5vIHN1Y2ggVHlwZSBvciBFbnVtICdcIiArIHBhdGggKyBcIicgaW4gXCIgKyB0aGlzKTtcclxuICAgIHJldHVybiBmb3VuZDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMb29rcyB1cCB0aGUge0BsaW5rIFNlcnZpY2V8c2VydmljZX0gYXQgdGhlIHNwZWNpZmllZCBwYXRoLCByZWxhdGl2ZSB0byB0aGlzIG5hbWVzcGFjZS5cclxuICogQmVzaWRlcyBpdHMgc2lnbmF0dXJlLCB0aGlzIG1ldGhvZHMgZGlmZmVycyBmcm9tIHtAbGluayBOYW1lc3BhY2UjbG9va3VwfGxvb2t1cH0gaW4gdGhhdCBpdCB0aHJvd3MgaW5zdGVhZCBvZiByZXR1cm5pbmcgYG51bGxgLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcGF0aCBQYXRoIHRvIGxvb2sgdXBcclxuICogQHJldHVybnMge1NlcnZpY2V9IExvb2tlZCB1cCBzZXJ2aWNlXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiBgcGF0aGAgZG9lcyBub3QgcG9pbnQgdG8gYSBzZXJ2aWNlXHJcbiAqL1xyXG5OYW1lc3BhY2UucHJvdG90eXBlLmxvb2t1cFNlcnZpY2UgPSBmdW5jdGlvbiBsb29rdXBTZXJ2aWNlKHBhdGgpIHtcclxuICAgIHZhciBmb3VuZCA9IHRoaXMubG9va3VwKHBhdGgsIFsgU2VydmljZSBdKTtcclxuICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJubyBzdWNoIFNlcnZpY2UgJ1wiICsgcGF0aCArIFwiJyBpbiBcIiArIHRoaXMpO1xyXG4gICAgcmV0dXJuIGZvdW5kO1xyXG59O1xyXG5cclxuLy8gU2V0cyB1cCBjeWNsaWMgZGVwZW5kZW5jaWVzIChjYWxsZWQgaW4gaW5kZXgtbGlnaHQpXHJcbk5hbWVzcGFjZS5fY29uZmlndXJlID0gZnVuY3Rpb24oVHlwZV8sIFNlcnZpY2VfLCBFbnVtXykge1xyXG4gICAgVHlwZSAgICA9IFR5cGVfO1xyXG4gICAgU2VydmljZSA9IFNlcnZpY2VfO1xyXG4gICAgRW51bSAgICA9IEVudW1fO1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0aW9uT2JqZWN0O1xyXG5cclxuUmVmbGVjdGlvbk9iamVjdC5jbGFzc05hbWUgPSBcIlJlZmxlY3Rpb25PYmplY3RcIjtcclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxuXHJcbnZhciBSb290OyAvLyBjeWNsaWNcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbmV3IHJlZmxlY3Rpb24gb2JqZWN0IGluc3RhbmNlLlxyXG4gKiBAY2xhc3NkZXNjIEJhc2UgY2xhc3Mgb2YgYWxsIHJlZmxlY3Rpb24gb2JqZWN0cy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE9iamVjdCBuYW1lXHJcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IFtvcHRpb25zXSBEZWNsYXJlZCBvcHRpb25zXHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuZnVuY3Rpb24gUmVmbGVjdGlvbk9iamVjdChuYW1lLCBvcHRpb25zKSB7XHJcblxyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKG5hbWUpKVxyXG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcIm5hbWUgbXVzdCBiZSBhIHN0cmluZ1wiKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucyAmJiAhdXRpbC5pc09iamVjdChvcHRpb25zKSlcclxuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0XCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9ucy5cclxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywqPnx1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7IC8vIHRvSlNPTlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5pcXVlIG5hbWUgd2l0aGluIGl0cyBuYW1lc3BhY2UuXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyZW50IG5hbWVzcGFjZS5cclxuICAgICAqIEB0eXBlIHtOYW1lc3BhY2V8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBhbHJlYWR5IHJlc29sdmVkIG9yIG5vdC5cclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc29sdmVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21tZW50IHRleHQsIGlmIGFueS5cclxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluaW5nIGZpbGUgbmFtZS5cclxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbn1cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlZmxlY3Rpb25PYmplY3QucHJvdG90eXBlLCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIHJvb3QgbmFtZXNwYWNlLlxyXG4gICAgICogQG5hbWUgUmVmbGVjdGlvbk9iamVjdCNyb290XHJcbiAgICAgKiBAdHlwZSB7Um9vdH1cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICovXHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHB0ciA9IHRoaXM7XHJcbiAgICAgICAgICAgIHdoaWxlIChwdHIucGFyZW50ICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcHRyID0gcHRyLnBhcmVudDtcclxuICAgICAgICAgICAgcmV0dXJuIHB0cjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVsbCBuYW1lIGluY2x1ZGluZyBsZWFkaW5nIGRvdC5cclxuICAgICAqIEBuYW1lIFJlZmxlY3Rpb25PYmplY3QjZnVsbE5hbWVcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqL1xyXG4gICAgZnVsbE5hbWU6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IFsgdGhpcy5uYW1lIF0sXHJcbiAgICAgICAgICAgICAgICBwdHIgPSB0aGlzLnBhcmVudDtcclxuICAgICAgICAgICAgd2hpbGUgKHB0cikge1xyXG4gICAgICAgICAgICAgICAgcGF0aC51bnNoaWZ0KHB0ci5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHB0ciA9IHB0ci5wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhdGguam9pbihcIi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGlzIHJlZmxlY3Rpb24gb2JqZWN0IHRvIGl0cyBkZXNjcmlwdG9yIHJlcHJlc2VudGF0aW9uLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsKj59IERlc2NyaXB0b3JcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5SZWZsZWN0aW9uT2JqZWN0LnByb3RvdHlwZS50b0pTT04gPSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBmdW5jdGlvbiB0b0pTT04oKSB7XHJcbiAgICB0aHJvdyBFcnJvcigpOyAvLyBub3QgaW1wbGVtZW50ZWQsIHNob3VsZG4ndCBoYXBwZW5cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgd2hlbiB0aGlzIG9iamVjdCBpcyBhZGRlZCB0byBhIHBhcmVudC5cclxuICogQHBhcmFtIHtSZWZsZWN0aW9uT2JqZWN0fSBwYXJlbnQgUGFyZW50IGFkZGVkIHRvXHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAqL1xyXG5SZWZsZWN0aW9uT2JqZWN0LnByb3RvdHlwZS5vbkFkZCA9IGZ1bmN0aW9uIG9uQWRkKHBhcmVudCkge1xyXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50ICE9PSBwYXJlbnQpXHJcbiAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKHRoaXMpO1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB0aGlzLnJlc29sdmVkID0gZmFsc2U7XHJcbiAgICB2YXIgcm9vdCA9IHBhcmVudC5yb290O1xyXG4gICAgaWYgKHJvb3QgaW5zdGFuY2VvZiBSb290KVxyXG4gICAgICAgIHJvb3QuX2hhbmRsZUFkZCh0aGlzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgd2hlbiB0aGlzIG9iamVjdCBpcyByZW1vdmVkIGZyb20gYSBwYXJlbnQuXHJcbiAqIEBwYXJhbSB7UmVmbGVjdGlvbk9iamVjdH0gcGFyZW50IFBhcmVudCByZW1vdmVkIGZyb21cclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICovXHJcblJlZmxlY3Rpb25PYmplY3QucHJvdG90eXBlLm9uUmVtb3ZlID0gZnVuY3Rpb24gb25SZW1vdmUocGFyZW50KSB7XHJcbiAgICB2YXIgcm9vdCA9IHBhcmVudC5yb290O1xyXG4gICAgaWYgKHJvb3QgaW5zdGFuY2VvZiBSb290KVxyXG4gICAgICAgIHJvb3QuX2hhbmRsZVJlbW92ZSh0aGlzKTtcclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIHRoaXMucmVzb2x2ZWQgPSBmYWxzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXNvbHZlcyB0aGlzIG9iamVjdHMgdHlwZSByZWZlcmVuY2VzLlxyXG4gKiBAcmV0dXJucyB7UmVmbGVjdGlvbk9iamVjdH0gYHRoaXNgXHJcbiAqL1xyXG5SZWZsZWN0aW9uT2JqZWN0LnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSgpIHtcclxuICAgIGlmICh0aGlzLnJlc29sdmVkKVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgaWYgKHRoaXMucm9vdCBpbnN0YW5jZW9mIFJvb3QpXHJcbiAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7IC8vIG9ubHkgaWYgcGFydCBvZiBhIHJvb3RcclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgYW4gb3B0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBPcHRpb24gbmFtZVxyXG4gKiBAcmV0dXJucyB7Kn0gT3B0aW9uIHZhbHVlIG9yIGB1bmRlZmluZWRgIGlmIG5vdCBzZXRcclxuICovXHJcblJlZmxlY3Rpb25PYmplY3QucHJvdG90eXBlLmdldE9wdGlvbiA9IGZ1bmN0aW9uIGdldE9wdGlvbihuYW1lKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zKVxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbbmFtZV07XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldHMgYW4gb3B0aW9uLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBPcHRpb24gbmFtZVxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9wdGlvbiB2YWx1ZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpZk5vdFNldF0gU2V0cyB0aGUgb3B0aW9uIG9ubHkgaWYgaXQgaXNuJ3QgY3VycmVudGx5IHNldFxyXG4gKiBAcmV0dXJucyB7UmVmbGVjdGlvbk9iamVjdH0gYHRoaXNgXHJcbiAqL1xyXG5SZWZsZWN0aW9uT2JqZWN0LnByb3RvdHlwZS5zZXRPcHRpb24gPSBmdW5jdGlvbiBzZXRPcHRpb24obmFtZSwgdmFsdWUsIGlmTm90U2V0KSB7XHJcbiAgICBpZiAoIWlmTm90U2V0IHx8ICF0aGlzLm9wdGlvbnMgfHwgdGhpcy5vcHRpb25zW25hbWVdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgKHRoaXMub3B0aW9ucyB8fCAodGhpcy5vcHRpb25zID0ge30pKVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyBtdWx0aXBsZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvcHRpb25zIE9wdGlvbnMgdG8gc2V0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lmTm90U2V0XSBTZXRzIGFuIG9wdGlvbiBvbmx5IGlmIGl0IGlzbid0IGN1cnJlbnRseSBzZXRcclxuICogQHJldHVybnMge1JlZmxlY3Rpb25PYmplY3R9IGB0aGlzYFxyXG4gKi9cclxuUmVmbGVjdGlvbk9iamVjdC5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucywgaWZOb3RTZXQpIHtcclxuICAgIGlmIChvcHRpb25zKVxyXG4gICAgICAgIGZvciAodmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbihrZXlzW2ldLCBvcHRpb25zW2tleXNbaV1dLCBpZk5vdFNldCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGlzIGluc3RhbmNlIHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IENsYXNzIG5hbWVbLCBzcGFjZSwgZnVsbCBuYW1lXVxyXG4gKi9cclxuUmVmbGVjdGlvbk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLmNsYXNzTmFtZSxcclxuICAgICAgICBmdWxsTmFtZSAgPSB0aGlzLmZ1bGxOYW1lO1xyXG4gICAgaWYgKGZ1bGxOYW1lLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lICsgXCIgXCIgKyBmdWxsTmFtZTtcclxuICAgIHJldHVybiBjbGFzc05hbWU7XHJcbn07XHJcblxyXG4vLyBTZXRzIHVwIGN5Y2xpYyBkZXBlbmRlbmNpZXMgKGNhbGxlZCBpbiBpbmRleC1saWdodClcclxuUmVmbGVjdGlvbk9iamVjdC5fY29uZmlndXJlID0gZnVuY3Rpb24oUm9vdF8pIHtcclxuICAgIFJvb3QgPSBSb290XztcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gT25lT2Y7XHJcblxyXG4vLyBleHRlbmRzIFJlZmxlY3Rpb25PYmplY3RcclxudmFyIFJlZmxlY3Rpb25PYmplY3QgPSByZXF1aXJlKFwiLi9vYmplY3RcIik7XHJcbigoT25lT2YucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZWZsZWN0aW9uT2JqZWN0LnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yID0gT25lT2YpLmNsYXNzTmFtZSA9IFwiT25lT2ZcIjtcclxuXHJcbnZhciBGaWVsZCA9IHJlcXVpcmUoXCIuL2ZpZWxkXCIpLFxyXG4gICAgdXRpbCAgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBuZXcgb25lb2YgaW5zdGFuY2UuXHJcbiAqIEBjbGFzc2Rlc2MgUmVmbGVjdGVkIG9uZW9mLlxyXG4gKiBAZXh0ZW5kcyBSZWZsZWN0aW9uT2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBPbmVvZiBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nW118T2JqZWN0LjxzdHJpbmcsKj59IFtmaWVsZE5hbWVzXSBGaWVsZCBuYW1lc1xyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBbb3B0aW9uc10gRGVjbGFyZWQgb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbW1lbnRdIENvbW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZmllbGRcclxuICovXHJcbmZ1bmN0aW9uIE9uZU9mKG5hbWUsIGZpZWxkTmFtZXMsIG9wdGlvbnMsIGNvbW1lbnQpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShmaWVsZE5hbWVzKSkge1xyXG4gICAgICAgIG9wdGlvbnMgPSBmaWVsZE5hbWVzO1xyXG4gICAgICAgIGZpZWxkTmFtZXMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0aW9uT2JqZWN0LmNhbGwodGhpcywgbmFtZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAoIShmaWVsZE5hbWVzID09PSB1bmRlZmluZWQgfHwgQXJyYXkuaXNBcnJheShmaWVsZE5hbWVzKSkpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiZmllbGROYW1lcyBtdXN0IGJlIGFuIEFycmF5XCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmllbGQgbmFtZXMgdGhhdCBiZWxvbmcgdG8gdGhpcyBvbmVvZi5cclxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5vbmVvZiA9IGZpZWxkTmFtZXMgfHwgW107IC8vIHRvSlNPTiwgbWFya2VyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWVsZHMgdGhhdCBiZWxvbmcgdG8gdGhpcyBvbmVvZiBhcyBhbiBhcnJheSBmb3IgaXRlcmF0aW9uLlxyXG4gICAgICogQHR5cGUge0ZpZWxkW119XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqL1xyXG4gICAgdGhpcy5maWVsZHNBcnJheSA9IFtdOyAvLyBkZWNsYXJlZCByZWFkb25seSBmb3IgY29uZm9ybWFuY2UsIHBvc3NpYmx5IG5vdCB5ZXQgYWRkZWQgdG8gcGFyZW50XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21tZW50IGZvciB0aGlzIGZpZWxkLlxyXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmNvbW1lbnQgPSBjb21tZW50O1xyXG59XHJcblxyXG4vKipcclxuICogT25lb2YgZGVzY3JpcHRvci5cclxuICogQGludGVyZmFjZSBJT25lT2ZcclxuICogQHByb3BlcnR5IHtBcnJheS48c3RyaW5nPn0gb25lb2YgT25lb2YgZmllbGQgbmFtZXNcclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIE9uZW9mIG9wdGlvbnNcclxuICovXHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIG9uZW9mIGZyb20gYSBvbmVvZiBkZXNjcmlwdG9yLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBPbmVvZiBuYW1lXHJcbiAqIEBwYXJhbSB7SU9uZU9mfSBqc29uIE9uZW9mIGRlc2NyaXB0b3JcclxuICogQHJldHVybnMge09uZU9mfSBDcmVhdGVkIG9uZW9mXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYXJndW1lbnRzIGFyZSBpbnZhbGlkXHJcbiAqL1xyXG5PbmVPZi5mcm9tSlNPTiA9IGZ1bmN0aW9uIGZyb21KU09OKG5hbWUsIGpzb24pIHtcclxuICAgIHJldHVybiBuZXcgT25lT2YobmFtZSwganNvbi5vbmVvZiwganNvbi5vcHRpb25zLCBqc29uLmNvbW1lbnQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoaXMgb25lb2YgdG8gYSBvbmVvZiBkZXNjcmlwdG9yLlxyXG4gKiBAcGFyYW0ge0lUb0pTT05PcHRpb25zfSBbdG9KU09OT3B0aW9uc10gSlNPTiBjb252ZXJzaW9uIG9wdGlvbnNcclxuICogQHJldHVybnMge0lPbmVPZn0gT25lb2YgZGVzY3JpcHRvclxyXG4gKi9cclxuT25lT2YucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTih0b0pTT05PcHRpb25zKSB7XHJcbiAgICB2YXIga2VlcENvbW1lbnRzID0gdG9KU09OT3B0aW9ucyA/IEJvb2xlYW4odG9KU09OT3B0aW9ucy5rZWVwQ29tbWVudHMpIDogZmFsc2U7XHJcbiAgICByZXR1cm4gdXRpbC50b09iamVjdChbXHJcbiAgICAgICAgXCJvcHRpb25zXCIgLCB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgXCJvbmVvZlwiICAgLCB0aGlzLm9uZW9mLFxyXG4gICAgICAgIFwiY29tbWVudFwiICwga2VlcENvbW1lbnRzID8gdGhpcy5jb21tZW50IDogdW5kZWZpbmVkXHJcbiAgICBdKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIHRoZSBmaWVsZHMgb2YgdGhlIHNwZWNpZmllZCBvbmVvZiB0byB0aGUgcGFyZW50IGlmIG5vdCBhbHJlYWR5IGRvbmUgc28uXHJcbiAqIEBwYXJhbSB7T25lT2Z9IG9uZW9mIFRoZSBvbmVvZlxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKiBAaW5uZXJcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkRmllbGRzVG9QYXJlbnQob25lb2YpIHtcclxuICAgIGlmIChvbmVvZi5wYXJlbnQpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbmVvZi5maWVsZHNBcnJheS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgaWYgKCFvbmVvZi5maWVsZHNBcnJheVtpXS5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICBvbmVvZi5wYXJlbnQuYWRkKG9uZW9mLmZpZWxkc0FycmF5W2ldKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBmaWVsZCB0byB0aGlzIG9uZW9mIGFuZCByZW1vdmVzIGl0IGZyb20gaXRzIGN1cnJlbnQgcGFyZW50LCBpZiBhbnkuXHJcbiAqIEBwYXJhbSB7RmllbGR9IGZpZWxkIEZpZWxkIHRvIGFkZFxyXG4gKiBAcmV0dXJucyB7T25lT2Z9IGB0aGlzYFxyXG4gKi9cclxuT25lT2YucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChmaWVsZCkge1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCEoZmllbGQgaW5zdGFuY2VvZiBGaWVsZCkpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiZmllbGQgbXVzdCBiZSBhIEZpZWxkXCIpO1xyXG5cclxuICAgIGlmIChmaWVsZC5wYXJlbnQgJiYgZmllbGQucGFyZW50ICE9PSB0aGlzLnBhcmVudClcclxuICAgICAgICBmaWVsZC5wYXJlbnQucmVtb3ZlKGZpZWxkKTtcclxuICAgIHRoaXMub25lb2YucHVzaChmaWVsZC5uYW1lKTtcclxuICAgIHRoaXMuZmllbGRzQXJyYXkucHVzaChmaWVsZCk7XHJcbiAgICBmaWVsZC5wYXJ0T2YgPSB0aGlzOyAvLyBmaWVsZC5wYXJlbnQgcmVtYWlucyBudWxsXHJcbiAgICBhZGRGaWVsZHNUb1BhcmVudCh0aGlzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYSBmaWVsZCBmcm9tIHRoaXMgb25lb2YgYW5kIHB1dHMgaXQgYmFjayB0byB0aGUgb25lb2YncyBwYXJlbnQuXHJcbiAqIEBwYXJhbSB7RmllbGR9IGZpZWxkIEZpZWxkIHRvIHJlbW92ZVxyXG4gKiBAcmV0dXJucyB7T25lT2Z9IGB0aGlzYFxyXG4gKi9cclxuT25lT2YucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShmaWVsZCkge1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKCEoZmllbGQgaW5zdGFuY2VvZiBGaWVsZCkpXHJcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiZmllbGQgbXVzdCBiZSBhIEZpZWxkXCIpO1xyXG5cclxuICAgIHZhciBpbmRleCA9IHRoaXMuZmllbGRzQXJyYXkuaW5kZXhPZihmaWVsZCk7XHJcblxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAoaW5kZXggPCAwKVxyXG4gICAgICAgIHRocm93IEVycm9yKGZpZWxkICsgXCIgaXMgbm90IGEgbWVtYmVyIG9mIFwiICsgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5maWVsZHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgaW5kZXggPSB0aGlzLm9uZW9mLmluZGV4T2YoZmllbGQubmFtZSk7XHJcblxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmIChpbmRleCA+IC0xKSAvLyB0aGVvcmV0aWNhbFxyXG4gICAgICAgIHRoaXMub25lb2Yuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICBmaWVsZC5wYXJ0T2YgPSBudWxsO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQG92ZXJyaWRlXHJcbiAqL1xyXG5PbmVPZi5wcm90b3R5cGUub25BZGQgPSBmdW5jdGlvbiBvbkFkZChwYXJlbnQpIHtcclxuICAgIFJlZmxlY3Rpb25PYmplY3QucHJvdG90eXBlLm9uQWRkLmNhbGwodGhpcywgcGFyZW50KTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vIENvbGxlY3QgcHJlc2VudCBmaWVsZHNcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vbmVvZi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBmaWVsZCA9IHBhcmVudC5nZXQodGhpcy5vbmVvZltpXSk7XHJcbiAgICAgICAgaWYgKGZpZWxkICYmICFmaWVsZC5wYXJ0T2YpIHtcclxuICAgICAgICAgICAgZmllbGQucGFydE9mID0gc2VsZjtcclxuICAgICAgICAgICAgc2VsZi5maWVsZHNBcnJheS5wdXNoKGZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgbm90IHlldCBwcmVzZW50IGZpZWxkc1xyXG4gICAgYWRkRmllbGRzVG9QYXJlbnQodGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogQG92ZXJyaWRlXHJcbiAqL1xyXG5PbmVPZi5wcm90b3R5cGUub25SZW1vdmUgPSBmdW5jdGlvbiBvblJlbW92ZShwYXJlbnQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBmaWVsZDsgaSA8IHRoaXMuZmllbGRzQXJyYXkubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgaWYgKChmaWVsZCA9IHRoaXMuZmllbGRzQXJyYXlbaV0pLnBhcmVudClcclxuICAgICAgICAgICAgZmllbGQucGFyZW50LnJlbW92ZShmaWVsZCk7XHJcbiAgICBSZWZsZWN0aW9uT2JqZWN0LnByb3RvdHlwZS5vblJlbW92ZS5jYWxsKHRoaXMsIHBhcmVudCk7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZ1bmN0aW9uIGFzIHJldHVybmVkIGJ5IHtAbGluayBPbmVPZi5kfSAoVHlwZVNjcmlwdCkuXHJcbiAqIEB0eXBlZGVmIE9uZU9mRGVjb3JhdG9yXHJcbiAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSBUYXJnZXQgcHJvdG90eXBlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvbmVvZk5hbWUgT25lT2YgbmFtZVxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBPbmVPZiBkZWNvcmF0b3IgKFR5cGVTY3JpcHQpLlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IGZpZWxkTmFtZXMgRmllbGQgbmFtZXNcclxuICogQHJldHVybnMge09uZU9mRGVjb3JhdG9yfSBEZWNvcmF0b3IgZnVuY3Rpb25cclxuICogQHRlbXBsYXRlIFQgZXh0ZW5kcyBzdHJpbmdcclxuICovXHJcbk9uZU9mLmQgPSBmdW5jdGlvbiBkZWNvcmF0ZU9uZU9mKCkge1xyXG4gICAgdmFyIGZpZWxkTmFtZXMgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksXHJcbiAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aClcclxuICAgICAgICBmaWVsZE5hbWVzW2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcclxuICAgIHJldHVybiBmdW5jdGlvbiBvbmVPZkRlY29yYXRvcihwcm90b3R5cGUsIG9uZW9mTmFtZSkge1xyXG4gICAgICAgIHV0aWwuZGVjb3JhdGVUeXBlKHByb3RvdHlwZS5jb25zdHJ1Y3RvcilcclxuICAgICAgICAgICAgLmFkZChuZXcgT25lT2Yob25lb2ZOYW1lLCBmaWVsZE5hbWVzKSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgb25lb2ZOYW1lLCB7XHJcbiAgICAgICAgICAgIGdldDogdXRpbC5vbmVPZkdldHRlcihmaWVsZE5hbWVzKSxcclxuICAgICAgICAgICAgc2V0OiB1dGlsLm9uZU9mU2V0dGVyKGZpZWxkTmFtZXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcclxuXHJcbnBhcnNlLmZpbGVuYW1lID0gbnVsbDtcclxucGFyc2UuZGVmYXVsdHMgPSB7IGtlZXBDYXNlOiBmYWxzZSB9O1xyXG5cclxudmFyIHRva2VuaXplICA9IHJlcXVpcmUoXCIuL3Rva2VuaXplXCIpLFxyXG4gICAgUm9vdCAgICAgID0gcmVxdWlyZShcIi4vcm9vdFwiKSxcclxuICAgIFR5cGUgICAgICA9IHJlcXVpcmUoXCIuL3R5cGVcIiksXHJcbiAgICBGaWVsZCAgICAgPSByZXF1aXJlKFwiLi9maWVsZFwiKSxcclxuICAgIE1hcEZpZWxkICA9IHJlcXVpcmUoXCIuL21hcGZpZWxkXCIpLFxyXG4gICAgT25lT2YgICAgID0gcmVxdWlyZShcIi4vb25lb2ZcIiksXHJcbiAgICBFbnVtICAgICAgPSByZXF1aXJlKFwiLi9lbnVtXCIpLFxyXG4gICAgU2VydmljZSAgID0gcmVxdWlyZShcIi4vc2VydmljZVwiKSxcclxuICAgIE1ldGhvZCAgICA9IHJlcXVpcmUoXCIuL21ldGhvZFwiKSxcclxuICAgIHR5cGVzICAgICA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpLFxyXG4gICAgdXRpbCAgICAgID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxuXHJcbnZhciBiYXNlMTBSZSAgICA9IC9eWzEtOV1bMC05XSokLyxcclxuICAgIGJhc2UxME5lZ1JlID0gL14tP1sxLTldWzAtOV0qJC8sXHJcbiAgICBiYXNlMTZSZSAgICA9IC9eMFt4XVswLTlhLWZBLUZdKyQvLFxyXG4gICAgYmFzZTE2TmVnUmUgPSAvXi0/MFt4XVswLTlhLWZBLUZdKyQvLFxyXG4gICAgYmFzZThSZSAgICAgPSAvXjBbMC03XSskLyxcclxuICAgIGJhc2U4TmVnUmUgID0gL14tPzBbMC03XSskLyxcclxuICAgIG51bWJlclJlICAgID0gL14oPyFbZUVdKVswLTldKig/OlxcLlswLTldKik/KD86W2VFXVsrLV0/WzAtOV0rKT8kLyxcclxuICAgIG5hbWVSZSAgICAgID0gL15bYS16QS1aX11bYS16QS1aXzAtOV0qJC8sXHJcbiAgICB0eXBlUmVmUmUgICA9IC9eKD86XFwuP1thLXpBLVpfXVthLXpBLVpfMC05XSopKD86XFwuW2EtekEtWl9dW2EtekEtWl8wLTldKikqJC8sXHJcbiAgICBmcVR5cGVSZWZSZSA9IC9eKD86XFwuW2EtekEtWl9dW2EtekEtWl8wLTldKikrJC87XHJcblxyXG4vKipcclxuICogUmVzdWx0IG9iamVjdCByZXR1cm5lZCBmcm9tIHtAbGluayBwYXJzZX0uXHJcbiAqIEBpbnRlcmZhY2UgSVBhcnNlclJlc3VsdFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ3x1bmRlZmluZWR9IHBhY2thZ2UgUGFja2FnZSBuYW1lLCBpZiBkZWNsYXJlZFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfHVuZGVmaW5lZH0gaW1wb3J0cyBJbXBvcnRzLCBpZiBhbnlcclxuICogQHByb3BlcnR5IHtzdHJpbmdbXXx1bmRlZmluZWR9IHdlYWtJbXBvcnRzIFdlYWsgaW1wb3J0cywgaWYgYW55XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfHVuZGVmaW5lZH0gc3ludGF4IFN5bnRheCwgaWYgc3BlY2lmaWVkIChlaXRoZXIgYFwicHJvdG8yXCJgIG9yIGBcInByb3RvM1wiYClcclxuICogQHByb3BlcnR5IHtSb290fSByb290IFBvcHVsYXRlZCByb290IGluc3RhbmNlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgbW9kaWZ5aW5nIHRoZSBiZWhhdmlvciBvZiB7QGxpbmsgcGFyc2V9LlxyXG4gKiBAaW50ZXJmYWNlIElQYXJzZU9wdGlvbnNcclxuICogQHByb3BlcnR5IHtib29sZWFufSBba2VlcENhc2U9ZmFsc2VdIEtlZXBzIGZpZWxkIGNhc2luZyBpbnN0ZWFkIG9mIGNvbnZlcnRpbmcgdG8gY2FtZWwgY2FzZVxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFthbHRlcm5hdGVDb21tZW50TW9kZT1mYWxzZV0gUmVjb2duaXplIGRvdWJsZS1zbGFzaCBjb21tZW50cyBpbiBhZGRpdGlvbiB0byBkb2MtYmxvY2sgY29tbWVudHMuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgbW9kaWZ5aW5nIHRoZSBiZWhhdmlvciBvZiBKU09OIHNlcmlhbGl6YXRpb24uXHJcbiAqIEBpbnRlcmZhY2UgSVRvSlNPTk9wdGlvbnNcclxuICogQHByb3BlcnR5IHtib29sZWFufSBba2VlcENvbW1lbnRzPWZhbHNlXSBTZXJpYWxpemVzIGNvbW1lbnRzLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgdGhlIGdpdmVuIC5wcm90byBzb3VyY2UgYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHBhcnNlZCBjb250ZW50cy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBTb3VyY2UgY29udGVudHNcclxuICogQHBhcmFtIHtSb290fSByb290IFJvb3QgdG8gcG9wdWxhdGVcclxuICogQHBhcmFtIHtJUGFyc2VPcHRpb25zfSBbb3B0aW9uc10gUGFyc2Ugb3B0aW9ucy4gRGVmYXVsdHMgdG8ge0BsaW5rIHBhcnNlLmRlZmF1bHRzfSB3aGVuIG9taXR0ZWQuXHJcbiAqIEByZXR1cm5zIHtJUGFyc2VyUmVzdWx0fSBQYXJzZXIgcmVzdWx0XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmaWxlbmFtZT1udWxsIEN1cnJlbnRseSBwcm9jZXNzaW5nIGZpbGUgbmFtZSBmb3IgZXJyb3IgcmVwb3J0aW5nLCBpZiBrbm93blxyXG4gKiBAcHJvcGVydHkge0lQYXJzZU9wdGlvbnN9IGRlZmF1bHRzIERlZmF1bHQge0BsaW5rIElQYXJzZU9wdGlvbnN9XHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZShzb3VyY2UsIHJvb3QsIG9wdGlvbnMpIHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbGxiYWNrLXJldHVybiAqL1xyXG4gICAgaWYgKCEocm9vdCBpbnN0YW5jZW9mIFJvb3QpKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHJvb3Q7XHJcbiAgICAgICAgcm9vdCA9IG5ldyBSb290KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgb3B0aW9ucyA9IHBhcnNlLmRlZmF1bHRzO1xyXG5cclxuICAgIHZhciB0biA9IHRva2VuaXplKHNvdXJjZSwgb3B0aW9ucy5hbHRlcm5hdGVDb21tZW50TW9kZSB8fCBmYWxzZSksXHJcbiAgICAgICAgbmV4dCA9IHRuLm5leHQsXHJcbiAgICAgICAgcHVzaCA9IHRuLnB1c2gsXHJcbiAgICAgICAgcGVlayA9IHRuLnBlZWssXHJcbiAgICAgICAgc2tpcCA9IHRuLnNraXAsXHJcbiAgICAgICAgY21udCA9IHRuLmNtbnQ7XHJcblxyXG4gICAgdmFyIGhlYWQgPSB0cnVlLFxyXG4gICAgICAgIHBrZyxcclxuICAgICAgICBpbXBvcnRzLFxyXG4gICAgICAgIHdlYWtJbXBvcnRzLFxyXG4gICAgICAgIHN5bnRheCxcclxuICAgICAgICBpc1Byb3RvMyA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBwdHIgPSByb290O1xyXG5cclxuICAgIHZhciBhcHBseUNhc2UgPSBvcHRpb25zLmtlZXBDYXNlID8gZnVuY3Rpb24obmFtZSkgeyByZXR1cm4gbmFtZTsgfSA6IHV0aWwuY2FtZWxDYXNlO1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICBmdW5jdGlvbiBpbGxlZ2FsKHRva2VuLCBuYW1lLCBpbnNpZGVUcnlDYXRjaCkge1xyXG4gICAgICAgIHZhciBmaWxlbmFtZSA9IHBhcnNlLmZpbGVuYW1lO1xyXG4gICAgICAgIGlmICghaW5zaWRlVHJ5Q2F0Y2gpXHJcbiAgICAgICAgICAgIHBhcnNlLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gRXJyb3IoXCJpbGxlZ2FsIFwiICsgKG5hbWUgfHwgXCJ0b2tlblwiKSArIFwiICdcIiArIHRva2VuICsgXCInIChcIiArIChmaWxlbmFtZSA/IGZpbGVuYW1lICsgXCIsIFwiIDogXCJcIikgKyBcImxpbmUgXCIgKyB0bi5saW5lICsgXCIpXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWRTdHJpbmcoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdLFxyXG4gICAgICAgICAgICB0b2tlbjtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgICAgICBpZiAoKHRva2VuID0gbmV4dCgpKSAhPT0gXCJcXFwiXCIgJiYgdG9rZW4gIT09IFwiJ1wiKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgaWxsZWdhbCh0b2tlbik7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChuZXh0KCkpO1xyXG4gICAgICAgICAgICBza2lwKHRva2VuKTtcclxuICAgICAgICAgICAgdG9rZW4gPSBwZWVrKCk7XHJcbiAgICAgICAgfSB3aGlsZSAodG9rZW4gPT09IFwiXFxcIlwiIHx8IHRva2VuID09PSBcIidcIik7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWRWYWx1ZShhY2NlcHRUeXBlUmVmKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gbmV4dCgpO1xyXG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgICAgICAgY2FzZSBcIidcIjpcclxuICAgICAgICAgICAgY2FzZSBcIlxcXCJcIjpcclxuICAgICAgICAgICAgICAgIHB1c2godG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRTdHJpbmcoKTtcclxuICAgICAgICAgICAgY2FzZSBcInRydWVcIjogY2FzZSBcIlRSVUVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmFsc2VcIjogY2FzZSBcIkZBTFNFXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU51bWJlcih0b2tlbiwgLyogaW5zaWRlVHJ5Q2F0Y2ggKi8gdHJ1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG5cclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICAgICAgaWYgKGFjY2VwdFR5cGVSZWYgJiYgdHlwZVJlZlJlLnRlc3QodG9rZW4pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG5cclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICAgICAgdGhyb3cgaWxsZWdhbCh0b2tlbiwgXCJ2YWx1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZFJhbmdlcyh0YXJnZXQsIGFjY2VwdFN0cmluZ3MpIHtcclxuICAgICAgICB2YXIgdG9rZW4sIHN0YXJ0O1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKGFjY2VwdFN0cmluZ3MgJiYgKCh0b2tlbiA9IHBlZWsoKSkgPT09IFwiXFxcIlwiIHx8IHRva2VuID09PSBcIidcIikpXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChyZWFkU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChbIHN0YXJ0ID0gcGFyc2VJZChuZXh0KCkpLCBza2lwKFwidG9cIiwgdHJ1ZSkgPyBwYXJzZUlkKG5leHQoKSkgOiBzdGFydCBdKTtcclxuICAgICAgICB9IHdoaWxlIChza2lwKFwiLFwiLCB0cnVlKSk7XHJcbiAgICAgICAgc2tpcChcIjtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VOdW1iZXIodG9rZW4sIGluc2lkZVRyeUNhdGNoKSB7XHJcbiAgICAgICAgdmFyIHNpZ24gPSAxO1xyXG4gICAgICAgIGlmICh0b2tlbi5jaGFyQXQoMCkgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgIHNpZ24gPSAtMTtcclxuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbi5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgICAgICAgY2FzZSBcImluZlwiOiBjYXNlIFwiSU5GXCI6IGNhc2UgXCJJbmZcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzaWduICogSW5maW5pdHk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW5cIjogY2FzZSBcIk5BTlwiOiBjYXNlIFwiTmFuXCI6IGNhc2UgXCJOYU5cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYU47XHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UxMFJlLnRlc3QodG9rZW4pKVxyXG4gICAgICAgICAgICByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHRva2VuLCAxMCk7XHJcbiAgICAgICAgaWYgKGJhc2UxNlJlLnRlc3QodG9rZW4pKVxyXG4gICAgICAgICAgICByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHRva2VuLCAxNik7XHJcbiAgICAgICAgaWYgKGJhc2U4UmUudGVzdCh0b2tlbikpXHJcbiAgICAgICAgICAgIHJldHVybiBzaWduICogcGFyc2VJbnQodG9rZW4sIDgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICAgIGlmIChudW1iZXJSZS50ZXN0KHRva2VuKSlcclxuICAgICAgICAgICAgcmV0dXJuIHNpZ24gKiBwYXJzZUZsb2F0KHRva2VuKTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuLCBcIm51bWJlclwiLCBpbnNpZGVUcnlDYXRjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VJZCh0b2tlbiwgYWNjZXB0TmVnYXRpdmUpIHtcclxuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYXhcIjogY2FzZSBcIk1BWFwiOiBjYXNlIFwiTWF4XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNTM2ODcwOTExO1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIWFjY2VwdE5lZ2F0aXZlICYmIHRva2VuLmNoYXJBdCgwKSA9PT0gXCItXCIpXHJcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWwodG9rZW4sIFwiaWRcIik7XHJcblxyXG4gICAgICAgIGlmIChiYXNlMTBOZWdSZS50ZXN0KHRva2VuKSlcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRva2VuLCAxMCk7XHJcbiAgICAgICAgaWYgKGJhc2UxNk5lZ1JlLnRlc3QodG9rZW4pKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodG9rZW4sIDE2KTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICBpZiAoYmFzZThOZWdSZS50ZXN0KHRva2VuKSlcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRva2VuLCA4KTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuLCBcImlkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlUGFja2FnZSgpIHtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHBrZyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKFwicGFja2FnZVwiKTtcclxuXHJcbiAgICAgICAgcGtnID0gbmV4dCgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIXR5cGVSZWZSZS50ZXN0KHBrZykpXHJcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWwocGtnLCBcIm5hbWVcIik7XHJcblxyXG4gICAgICAgIHB0ciA9IHB0ci5kZWZpbmUocGtnKTtcclxuICAgICAgICBza2lwKFwiO1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUltcG9ydCgpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBwZWVrKCk7XHJcbiAgICAgICAgdmFyIHdoaWNoSW1wb3J0cztcclxuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3ZWFrXCI6XHJcbiAgICAgICAgICAgICAgICB3aGljaEltcG9ydHMgPSB3ZWFrSW1wb3J0cyB8fCAod2Vha0ltcG9ydHMgPSBbXSk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInB1YmxpY1wiOlxyXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1mYWxsdGhyb3VnaFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgd2hpY2hJbXBvcnRzID0gaW1wb3J0cyB8fCAoaW1wb3J0cyA9IFtdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2tlbiA9IHJlYWRTdHJpbmcoKTtcclxuICAgICAgICBza2lwKFwiO1wiKTtcclxuICAgICAgICB3aGljaEltcG9ydHMucHVzaCh0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VTeW50YXgoKSB7XHJcbiAgICAgICAgc2tpcChcIj1cIik7XHJcbiAgICAgICAgc3ludGF4ID0gcmVhZFN0cmluZygpO1xyXG4gICAgICAgIGlzUHJvdG8zID0gc3ludGF4ID09PSBcInByb3RvM1wiO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIWlzUHJvdG8zICYmIHN5bnRheCAhPT0gXCJwcm90bzJcIilcclxuICAgICAgICAgICAgdGhyb3cgaWxsZWdhbChzeW50YXgsIFwic3ludGF4XCIpO1xyXG5cclxuICAgICAgICBza2lwKFwiO1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUNvbW1vbihwYXJlbnQsIHRva2VuKSB7XHJcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm9wdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb24ocGFyZW50LCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBza2lwKFwiO1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm1lc3NhZ2VcIjpcclxuICAgICAgICAgICAgICAgIHBhcnNlVHlwZShwYXJlbnQsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImVudW1cIjpcclxuICAgICAgICAgICAgICAgIHBhcnNlRW51bShwYXJlbnQsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNlcnZpY2VcIjpcclxuICAgICAgICAgICAgICAgIHBhcnNlU2VydmljZShwYXJlbnQsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImV4dGVuZFwiOlxyXG4gICAgICAgICAgICAgICAgcGFyc2VFeHRlbnNpb24ocGFyZW50LCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlmQmxvY2sob2JqLCBmbklmLCBmbkVsc2UpIHtcclxuICAgICAgICB2YXIgdHJhaWxpbmdMaW5lID0gdG4ubGluZTtcclxuICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgIG9iai5jb21tZW50ID0gY21udCgpOyAvLyB0cnkgYmxvY2stdHlwZSBjb21tZW50XHJcbiAgICAgICAgICAgIG9iai5maWxlbmFtZSA9IHBhcnNlLmZpbGVuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2tpcChcIntcIiwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgICAgICB3aGlsZSAoKHRva2VuID0gbmV4dCgpKSAhPT0gXCJ9XCIpXHJcbiAgICAgICAgICAgICAgICBmbklmKHRva2VuKTtcclxuICAgICAgICAgICAgc2tpcChcIjtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZuRWxzZSlcclxuICAgICAgICAgICAgICAgIGZuRWxzZSgpO1xyXG4gICAgICAgICAgICBza2lwKFwiO1wiKTtcclxuICAgICAgICAgICAgaWYgKG9iaiAmJiB0eXBlb2Ygb2JqLmNvbW1lbnQgIT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICBvYmouY29tbWVudCA9IGNtbnQodHJhaWxpbmdMaW5lKTsgLy8gdHJ5IGxpbmUtdHlwZSBjb21tZW50IGlmIG5vIGJsb2NrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlVHlwZShwYXJlbnQsIHRva2VuKSB7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghbmFtZVJlLnRlc3QodG9rZW4gPSBuZXh0KCkpKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuLCBcInR5cGUgbmFtZVwiKTtcclxuXHJcbiAgICAgICAgdmFyIHR5cGUgPSBuZXcgVHlwZSh0b2tlbik7XHJcbiAgICAgICAgaWZCbG9jayh0eXBlLCBmdW5jdGlvbiBwYXJzZVR5cGVfYmxvY2sodG9rZW4pIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlQ29tbW9uKHR5cGUsIHRva2VuKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibWFwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VNYXBGaWVsZCh0eXBlLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlcXVpcmVkXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3B0aW9uYWxcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXBlYXRlZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmllbGQodHlwZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbmVvZlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlT25lT2YodHlwZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJleHRlbnNpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZFJhbmdlcyh0eXBlLmV4dGVuc2lvbnMgfHwgKHR5cGUuZXh0ZW5zaW9ucyA9IFtdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlc2VydmVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZFJhbmdlcyh0eXBlLnJlc2VydmVkIHx8ICh0eXBlLnJlc2VydmVkID0gW10pLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQcm90bzMgfHwgIXR5cGVSZWZSZS50ZXN0KHRva2VuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgaWxsZWdhbCh0b2tlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHB1c2godG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmllbGQodHlwZSwgXCJvcHRpb25hbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhcmVudC5hZGQodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VGaWVsZChwYXJlbnQsIHJ1bGUsIGV4dGVuZCkge1xyXG4gICAgICAgIHZhciB0eXBlID0gbmV4dCgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcImdyb3VwXCIpIHtcclxuICAgICAgICAgICAgcGFyc2VHcm91cChwYXJlbnQsIHJ1bGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIXR5cGVSZWZSZS50ZXN0KHR5cGUpKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHR5cGUsIFwidHlwZVwiKTtcclxuXHJcbiAgICAgICAgdmFyIG5hbWUgPSBuZXh0KCk7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghbmFtZVJlLnRlc3QobmFtZSkpXHJcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWwobmFtZSwgXCJuYW1lXCIpO1xyXG5cclxuICAgICAgICBuYW1lID0gYXBwbHlDYXNlKG5hbWUpO1xyXG4gICAgICAgIHNraXAoXCI9XCIpO1xyXG5cclxuICAgICAgICB2YXIgZmllbGQgPSBuZXcgRmllbGQobmFtZSwgcGFyc2VJZChuZXh0KCkpLCB0eXBlLCBydWxlLCBleHRlbmQpO1xyXG4gICAgICAgIGlmQmxvY2soZmllbGQsIGZ1bmN0aW9uIHBhcnNlRmllbGRfYmxvY2sodG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gXCJvcHRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb24oZmllbGQsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHNraXAoXCI7XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHRocm93IGlsbGVnYWwodG9rZW4pO1xyXG5cclxuICAgICAgICB9LCBmdW5jdGlvbiBwYXJzZUZpZWxkX2xpbmUoKSB7XHJcbiAgICAgICAgICAgIHBhcnNlSW5saW5lT3B0aW9ucyhmaWVsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyZW50LmFkZChmaWVsZCk7XHJcblxyXG4gICAgICAgIC8vIEpTT04gZGVmYXVsdHMgdG8gcGFja2VkPXRydWUgaWYgbm90IHNldCBzbyB3ZSBoYXZlIHRvIHNldCBwYWNrZWQ9ZmFsc2UgZXhwbGljaXR5IHdoZW5cclxuICAgICAgICAvLyBwYXJzaW5nIHByb3RvMiBkZXNjcmlwdG9ycyB3aXRob3V0IHRoZSBvcHRpb24sIHdoZXJlIGFwcGxpY2FibGUuIFRoaXMgbXVzdCBiZSBkb25lIGZvclxyXG4gICAgICAgIC8vIGFsbCBrbm93biBwYWNrYWJsZSB0eXBlcyBhbmQgYW55dGhpbmcgdGhhdCBjb3VsZCBiZSBhbiBlbnVtICg9IGlzIG5vdCBhIGJhc2ljIHR5cGUpLlxyXG4gICAgICAgIGlmICghaXNQcm90bzMgJiYgZmllbGQucmVwZWF0ZWQgJiYgKHR5cGVzLnBhY2tlZFt0eXBlXSAhPT0gdW5kZWZpbmVkIHx8IHR5cGVzLmJhc2ljW3R5cGVdID09PSB1bmRlZmluZWQpKVxyXG4gICAgICAgICAgICBmaWVsZC5zZXRPcHRpb24oXCJwYWNrZWRcIiwgZmFsc2UsIC8qIGlmTm90U2V0ICovIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlR3JvdXAocGFyZW50LCBydWxlKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBuZXh0KCk7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghbmFtZVJlLnRlc3QobmFtZSkpXHJcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWwobmFtZSwgXCJuYW1lXCIpO1xyXG5cclxuICAgICAgICB2YXIgZmllbGROYW1lID0gdXRpbC5sY0ZpcnN0KG5hbWUpO1xyXG4gICAgICAgIGlmIChuYW1lID09PSBmaWVsZE5hbWUpXHJcbiAgICAgICAgICAgIG5hbWUgPSB1dGlsLnVjRmlyc3QobmFtZSk7XHJcbiAgICAgICAgc2tpcChcIj1cIik7XHJcbiAgICAgICAgdmFyIGlkID0gcGFyc2VJZChuZXh0KCkpO1xyXG4gICAgICAgIHZhciB0eXBlID0gbmV3IFR5cGUobmFtZSk7XHJcbiAgICAgICAgdHlwZS5ncm91cCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGZpZWxkID0gbmV3IEZpZWxkKGZpZWxkTmFtZSwgaWQsIG5hbWUsIHJ1bGUpO1xyXG4gICAgICAgIGZpZWxkLmZpbGVuYW1lID0gcGFyc2UuZmlsZW5hbWU7XHJcbiAgICAgICAgaWZCbG9jayh0eXBlLCBmdW5jdGlvbiBwYXJzZUdyb3VwX2Jsb2NrKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3B0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VPcHRpb24odHlwZSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNraXAoXCI7XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXF1aXJlZFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9wdGlvbmFsXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVwZWF0ZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZpZWxkKHR5cGUsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuKTsgLy8gdGhlcmUgYXJlIG5vIGdyb3VwcyB3aXRoIHByb3RvMyBzZW1hbnRpY3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhcmVudC5hZGQodHlwZSlcclxuICAgICAgICAgICAgICAuYWRkKGZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZU1hcEZpZWxkKHBhcmVudCkge1xyXG4gICAgICAgIHNraXAoXCI8XCIpO1xyXG4gICAgICAgIHZhciBrZXlUeXBlID0gbmV4dCgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAodHlwZXMubWFwS2V5W2tleVR5cGVdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWwoa2V5VHlwZSwgXCJ0eXBlXCIpO1xyXG5cclxuICAgICAgICBza2lwKFwiLFwiKTtcclxuICAgICAgICB2YXIgdmFsdWVUeXBlID0gbmV4dCgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIXR5cGVSZWZSZS50ZXN0KHZhbHVlVHlwZSkpXHJcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWwodmFsdWVUeXBlLCBcInR5cGVcIik7XHJcblxyXG4gICAgICAgIHNraXAoXCI+XCIpO1xyXG4gICAgICAgIHZhciBuYW1lID0gbmV4dCgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIW5hbWVSZS50ZXN0KG5hbWUpKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKG5hbWUsIFwibmFtZVwiKTtcclxuXHJcbiAgICAgICAgc2tpcChcIj1cIik7XHJcbiAgICAgICAgdmFyIGZpZWxkID0gbmV3IE1hcEZpZWxkKGFwcGx5Q2FzZShuYW1lKSwgcGFyc2VJZChuZXh0KCkpLCBrZXlUeXBlLCB2YWx1ZVR5cGUpO1xyXG4gICAgICAgIGlmQmxvY2soZmllbGQsIGZ1bmN0aW9uIHBhcnNlTWFwRmllbGRfYmxvY2sodG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gXCJvcHRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb24oZmllbGQsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHNraXAoXCI7XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHRocm93IGlsbGVnYWwodG9rZW4pO1xyXG5cclxuICAgICAgICB9LCBmdW5jdGlvbiBwYXJzZU1hcEZpZWxkX2xpbmUoKSB7XHJcbiAgICAgICAgICAgIHBhcnNlSW5saW5lT3B0aW9ucyhmaWVsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyZW50LmFkZChmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VPbmVPZihwYXJlbnQsIHRva2VuKSB7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghbmFtZVJlLnRlc3QodG9rZW4gPSBuZXh0KCkpKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuLCBcIm5hbWVcIik7XHJcblxyXG4gICAgICAgIHZhciBvbmVvZiA9IG5ldyBPbmVPZihhcHBseUNhc2UodG9rZW4pKTtcclxuICAgICAgICBpZkJsb2NrKG9uZW9mLCBmdW5jdGlvbiBwYXJzZU9uZU9mX2Jsb2NrKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gXCJvcHRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb24ob25lb2YsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHNraXAoXCI7XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBwYXJzZUZpZWxkKG9uZW9mLCBcIm9wdGlvbmFsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyZW50LmFkZChvbmVvZik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VFbnVtKHBhcmVudCwgdG9rZW4pIHtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKCFuYW1lUmUudGVzdCh0b2tlbiA9IG5leHQoKSkpXHJcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWwodG9rZW4sIFwibmFtZVwiKTtcclxuXHJcbiAgICAgICAgdmFyIGVubSA9IG5ldyBFbnVtKHRva2VuKTtcclxuICAgICAgICBpZkJsb2NrKGVubSwgZnVuY3Rpb24gcGFyc2VFbnVtX2Jsb2NrKHRva2VuKSB7XHJcbiAgICAgICAgICBzd2l0Y2godG9rZW4pIHtcclxuICAgICAgICAgICAgY2FzZSBcIm9wdGlvblwiOlxyXG4gICAgICAgICAgICAgIHBhcnNlT3B0aW9uKGVubSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgIHNraXAoXCI7XCIpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInJlc2VydmVkXCI6XHJcbiAgICAgICAgICAgICAgcmVhZFJhbmdlcyhlbm0ucmVzZXJ2ZWQgfHwgKGVubS5yZXNlcnZlZCA9IFtdKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHBhcnNlRW51bVZhbHVlKGVubSwgdG9rZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhcmVudC5hZGQoZW5tKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUVudW1WYWx1ZShwYXJlbnQsIHRva2VuKSB7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghbmFtZVJlLnRlc3QodG9rZW4pKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuLCBcIm5hbWVcIik7XHJcblxyXG4gICAgICAgIHNraXAoXCI9XCIpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlSWQobmV4dCgpLCB0cnVlKSxcclxuICAgICAgICAgICAgZHVtbXkgPSB7fTtcclxuICAgICAgICBpZkJsb2NrKGR1bW15LCBmdW5jdGlvbiBwYXJzZUVudW1WYWx1ZV9ibG9jayh0b2tlbikge1xyXG5cclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICAgICAgaWYgKHRva2VuID09PSBcIm9wdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZU9wdGlvbihkdW1teSwgdG9rZW4pOyAvLyBza2lwXHJcbiAgICAgICAgICAgICAgICBza2lwKFwiO1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuKTtcclxuXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gcGFyc2VFbnVtVmFsdWVfbGluZSgpIHtcclxuICAgICAgICAgICAgcGFyc2VJbmxpbmVPcHRpb25zKGR1bW15KTsgLy8gc2tpcFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhcmVudC5hZGQodG9rZW4sIHZhbHVlLCBkdW1teS5jb21tZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZU9wdGlvbihwYXJlbnQsIHRva2VuKSB7XHJcbiAgICAgICAgdmFyIGlzQ3VzdG9tID0gc2tpcChcIihcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghdHlwZVJlZlJlLnRlc3QodG9rZW4gPSBuZXh0KCkpKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuLCBcIm5hbWVcIik7XHJcblxyXG4gICAgICAgIHZhciBuYW1lID0gdG9rZW47XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tKSB7XHJcbiAgICAgICAgICAgIHNraXAoXCIpXCIpO1xyXG4gICAgICAgICAgICBuYW1lID0gXCIoXCIgKyBuYW1lICsgXCIpXCI7XHJcbiAgICAgICAgICAgIHRva2VuID0gcGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoZnFUeXBlUmVmUmUudGVzdCh0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgKz0gdG9rZW47XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2tpcChcIj1cIik7XHJcbiAgICAgICAgcGFyc2VPcHRpb25WYWx1ZShwYXJlbnQsIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlT3B0aW9uVmFsdWUocGFyZW50LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKHNraXAoXCJ7XCIsIHRydWUpKSB7IC8vIHsgYTogXCJmb29cIiBiIHsgYzogXCJiYXJcIiB9IH1cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWVSZS50ZXN0KHRva2VuID0gbmV4dCgpKSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuLCBcIm5hbWVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBlZWsoKSA9PT0gXCJ7XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VPcHRpb25WYWx1ZShwYXJlbnQsIG5hbWUgKyBcIi5cIiArIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNraXAoXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwZWVrKCkgPT09IFwie1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZU9wdGlvblZhbHVlKHBhcmVudCwgbmFtZSArIFwiLlwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uKHBhcmVudCwgbmFtZSArIFwiLlwiICsgdG9rZW4sIHJlYWRWYWx1ZSh0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBza2lwKFwiLFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoIXNraXAoXCJ9XCIsIHRydWUpKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgc2V0T3B0aW9uKHBhcmVudCwgbmFtZSwgcmVhZFZhbHVlKHRydWUpKTtcclxuICAgICAgICAvLyBEb2VzIG5vdCBlbmZvcmNlIGEgZGVsaW1pdGVyIHRvIGJlIHVuaXZlcnNhbFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldE9wdGlvbihwYXJlbnQsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHBhcmVudC5zZXRPcHRpb24pXHJcbiAgICAgICAgICAgIHBhcmVudC5zZXRPcHRpb24obmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlSW5saW5lT3B0aW9ucyhwYXJlbnQpIHtcclxuICAgICAgICBpZiAoc2tpcChcIltcIiwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb24ocGFyZW50LCBcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoc2tpcChcIixcIiwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICBza2lwKFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVNlcnZpY2UocGFyZW50LCB0b2tlbikge1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIW5hbWVSZS50ZXN0KHRva2VuID0gbmV4dCgpKSlcclxuICAgICAgICAgICAgdGhyb3cgaWxsZWdhbCh0b2tlbiwgXCJzZXJ2aWNlIG5hbWVcIik7XHJcblxyXG4gICAgICAgIHZhciBzZXJ2aWNlID0gbmV3IFNlcnZpY2UodG9rZW4pO1xyXG4gICAgICAgIGlmQmxvY2soc2VydmljZSwgZnVuY3Rpb24gcGFyc2VTZXJ2aWNlX2Jsb2NrKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUNvbW1vbihzZXJ2aWNlLCB0b2tlbikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICAgICAgICBpZiAodG9rZW4gPT09IFwicnBjXCIpXHJcbiAgICAgICAgICAgICAgICBwYXJzZU1ldGhvZChzZXJ2aWNlLCB0b2tlbik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRocm93IGlsbGVnYWwodG9rZW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhcmVudC5hZGQoc2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VNZXRob2QocGFyZW50LCB0b2tlbikge1xyXG4gICAgICAgIHZhciB0eXBlID0gdG9rZW47XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghbmFtZVJlLnRlc3QodG9rZW4gPSBuZXh0KCkpKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuLCBcIm5hbWVcIik7XHJcblxyXG4gICAgICAgIHZhciBuYW1lID0gdG9rZW4sXHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlLCByZXF1ZXN0U3RyZWFtLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUsIHJlc3BvbnNlU3RyZWFtO1xyXG5cclxuICAgICAgICBza2lwKFwiKFwiKTtcclxuICAgICAgICBpZiAoc2tpcChcInN0cmVhbVwiLCB0cnVlKSlcclxuICAgICAgICAgICAgcmVxdWVzdFN0cmVhbSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghdHlwZVJlZlJlLnRlc3QodG9rZW4gPSBuZXh0KCkpKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdFR5cGUgPSB0b2tlbjtcclxuICAgICAgICBza2lwKFwiKVwiKTsgc2tpcChcInJldHVybnNcIik7IHNraXAoXCIoXCIpO1xyXG4gICAgICAgIGlmIChza2lwKFwic3RyZWFtXCIsIHRydWUpKVxyXG4gICAgICAgICAgICByZXNwb25zZVN0cmVhbSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghdHlwZVJlZlJlLnRlc3QodG9rZW4gPSBuZXh0KCkpKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuKTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlID0gdG9rZW47XHJcbiAgICAgICAgc2tpcChcIilcIik7XHJcblxyXG4gICAgICAgIHZhciBtZXRob2QgPSBuZXcgTWV0aG9kKG5hbWUsIHR5cGUsIHJlcXVlc3RUeXBlLCByZXNwb25zZVR5cGUsIHJlcXVlc3RTdHJlYW0sIHJlc3BvbnNlU3RyZWFtKTtcclxuICAgICAgICBpZkJsb2NrKG1ldGhvZCwgZnVuY3Rpb24gcGFyc2VNZXRob2RfYmxvY2sodG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gXCJvcHRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb24obWV0aG9kLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBza2lwKFwiO1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyZW50LmFkZChtZXRob2QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlRXh0ZW5zaW9uKHBhcmVudCwgdG9rZW4pIHtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKCF0eXBlUmVmUmUudGVzdCh0b2tlbiA9IG5leHQoKSkpXHJcbiAgICAgICAgICAgIHRocm93IGlsbGVnYWwodG9rZW4sIFwicmVmZXJlbmNlXCIpO1xyXG5cclxuICAgICAgICB2YXIgcmVmZXJlbmNlID0gdG9rZW47XHJcbiAgICAgICAgaWZCbG9jayhudWxsLCBmdW5jdGlvbiBwYXJzZUV4dGVuc2lvbl9ibG9jayh0b2tlbikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlcXVpcmVkXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVwZWF0ZWRcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvcHRpb25hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmllbGQocGFyZW50LCB0b2tlbiwgcmVmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQcm90bzMgfHwgIXR5cGVSZWZSZS50ZXN0KHRva2VuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgaWxsZWdhbCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGaWVsZChwYXJlbnQsIFwib3B0aW9uYWxcIiwgcmVmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSBuZXh0KCkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInBhY2thZ2VcIjpcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgICAgIGlmICghaGVhZClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJzZVBhY2thZ2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImltcG9ydFwiOlxyXG5cclxuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoZWFkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGlsbGVnYWwodG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcnNlSW1wb3J0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzeW50YXhcIjpcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgICAgIGlmICghaGVhZClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJzZVN5bnRheCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwib3B0aW9uXCI6XHJcblxyXG4gICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhlYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgaWxsZWdhbCh0b2tlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb24ocHRyLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBza2lwKFwiO1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlQ29tbW9uKHB0ciwgdG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2UuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBcInBhY2thZ2VcIiAgICAgOiBwa2csXHJcbiAgICAgICAgXCJpbXBvcnRzXCIgICAgIDogaW1wb3J0cyxcclxuICAgICAgICAgd2Vha0ltcG9ydHMgIDogd2Vha0ltcG9ydHMsXHJcbiAgICAgICAgIHN5bnRheCAgICAgICA6IHN5bnRheCxcclxuICAgICAgICAgcm9vdCAgICAgICAgIDogcm9vdFxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyB0aGUgZ2l2ZW4gLnByb3RvIHNvdXJjZSBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgcGFyc2VkIGNvbnRlbnRzLlxyXG4gKiBAbmFtZSBwYXJzZVxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBTb3VyY2UgY29udGVudHNcclxuICogQHBhcmFtIHtJUGFyc2VPcHRpb25zfSBbb3B0aW9uc10gUGFyc2Ugb3B0aW9ucy4gRGVmYXVsdHMgdG8ge0BsaW5rIHBhcnNlLmRlZmF1bHRzfSB3aGVuIG9taXR0ZWQuXHJcbiAqIEByZXR1cm5zIHtJUGFyc2VyUmVzdWx0fSBQYXJzZXIgcmVzdWx0XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmaWxlbmFtZT1udWxsIEN1cnJlbnRseSBwcm9jZXNzaW5nIGZpbGUgbmFtZSBmb3IgZXJyb3IgcmVwb3J0aW5nLCBpZiBrbm93blxyXG4gKiBAcHJvcGVydHkge0lQYXJzZU9wdGlvbnN9IGRlZmF1bHRzIERlZmF1bHQge0BsaW5rIElQYXJzZU9wdGlvbnN9XHJcbiAqIEB2YXJpYXRpb24gMlxyXG4gKi9cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gUmVhZGVyO1xyXG5cclxudmFyIHV0aWwgICAgICA9IHJlcXVpcmUoXCIuL3V0aWwvbWluaW1hbFwiKTtcclxuXHJcbnZhciBCdWZmZXJSZWFkZXI7IC8vIGN5Y2xpY1xyXG5cclxudmFyIExvbmdCaXRzICA9IHV0aWwuTG9uZ0JpdHMsXHJcbiAgICB1dGY4ICAgICAgPSB1dGlsLnV0Zjg7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5mdW5jdGlvbiBpbmRleE91dE9mUmFuZ2UocmVhZGVyLCB3cml0ZUxlbmd0aCkge1xyXG4gICAgcmV0dXJuIFJhbmdlRXJyb3IoXCJpbmRleCBvdXQgb2YgcmFuZ2U6IFwiICsgcmVhZGVyLnBvcyArIFwiICsgXCIgKyAod3JpdGVMZW5ndGggfHwgMSkgKyBcIiA+IFwiICsgcmVhZGVyLmxlbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbmV3IHJlYWRlciBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIGJ1ZmZlci5cclxuICogQGNsYXNzZGVzYyBXaXJlIGZvcm1hdCByZWFkZXIgdXNpbmcgYFVpbnQ4QXJyYXlgIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGBBcnJheWAuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciBCdWZmZXIgdG8gcmVhZCBmcm9tXHJcbiAqL1xyXG5mdW5jdGlvbiBSZWFkZXIoYnVmZmVyKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIGJ1ZmZlci5cclxuICAgICAqIEB0eXBlIHtVaW50OEFycmF5fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmJ1ZiA9IGJ1ZmZlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgYnVmZmVyIHBvc2l0aW9uLlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5wb3MgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBidWZmZXIgbGVuZ3RoLlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5sZW4gPSBidWZmZXIubGVuZ3RoO1xyXG59XHJcblxyXG52YXIgY3JlYXRlX2FycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09IFwidW5kZWZpbmVkXCJcclxuICAgID8gZnVuY3Rpb24gY3JlYXRlX3R5cGVkX2FycmF5KGJ1ZmZlcikge1xyXG4gICAgICAgIGlmIChidWZmZXIgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IEFycmF5LmlzQXJyYXkoYnVmZmVyKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWFkZXIoYnVmZmVyKTtcclxuICAgICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgYnVmZmVyXCIpO1xyXG4gICAgfVxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIDogZnVuY3Rpb24gY3JlYXRlX2FycmF5KGJ1ZmZlcikge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGJ1ZmZlcikpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVhZGVyKGJ1ZmZlcik7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIGJ1ZmZlclwiKTtcclxuICAgIH07XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyByZWFkZXIgdXNpbmcgdGhlIHNwZWNpZmllZCBidWZmZXIuXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl8QnVmZmVyfSBidWZmZXIgQnVmZmVyIHRvIHJlYWQgZnJvbVxyXG4gKiBAcmV0dXJucyB7UmVhZGVyfEJ1ZmZlclJlYWRlcn0gQSB7QGxpbmsgQnVmZmVyUmVhZGVyfSBpZiBgYnVmZmVyYCBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGEge0BsaW5rIFJlYWRlcn1cclxuICogQHRocm93cyB7RXJyb3J9IElmIGBidWZmZXJgIGlzIG5vdCBhIHZhbGlkIGJ1ZmZlclxyXG4gKi9cclxuUmVhZGVyLmNyZWF0ZSA9IHV0aWwuQnVmZmVyXHJcbiAgICA/IGZ1bmN0aW9uIGNyZWF0ZV9idWZmZXJfc2V0dXAoYnVmZmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChSZWFkZXIuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlX2J1ZmZlcihidWZmZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWwuQnVmZmVyLmlzQnVmZmVyKGJ1ZmZlcilcclxuICAgICAgICAgICAgICAgID8gbmV3IEJ1ZmZlclJlYWRlcihidWZmZXIpXHJcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgICAgICAgICAgOiBjcmVhdGVfYXJyYXkoYnVmZmVyKTtcclxuICAgICAgICB9KShidWZmZXIpO1xyXG4gICAgfVxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIDogY3JlYXRlX2FycmF5O1xyXG5cclxuUmVhZGVyLnByb3RvdHlwZS5fc2xpY2UgPSB1dGlsLkFycmF5LnByb3RvdHlwZS5zdWJhcnJheSB8fCAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB1dGlsLkFycmF5LnByb3RvdHlwZS5zbGljZTtcclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBhIHZhcmludCBhcyBhbiB1bnNpZ25lZCAzMiBiaXQgdmFsdWUuXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXHJcbiAqL1xyXG5SZWFkZXIucHJvdG90eXBlLnVpbnQzMiA9IChmdW5jdGlvbiByZWFkX3VpbnQzMl9zZXR1cCgpIHtcclxuICAgIHZhciB2YWx1ZSA9IDQyOTQ5NjcyOTU7IC8vIG9wdGltaXplciB0eXBlLWhpbnQsIHRlbmRzIHRvIGRlb3B0IG90aGVyd2lzZSAoPyEpXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVhZF91aW50MzIoKSB7XHJcbiAgICAgICAgdmFsdWUgPSAoICAgICAgICAgdGhpcy5idWZbdGhpcy5wb3NdICYgMTI3ICAgICAgICkgPj4+IDA7IGlmICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSA8IDEyOCkgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIHZhbHVlID0gKHZhbHVlIHwgKHRoaXMuYnVmW3RoaXMucG9zXSAmIDEyNykgPDwgIDcpID4+PiAwOyBpZiAodGhpcy5idWZbdGhpcy5wb3MrK10gPCAxMjgpIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSB8ICh0aGlzLmJ1Zlt0aGlzLnBvc10gJiAxMjcpIDw8IDE0KSA+Pj4gMDsgaWYgKHRoaXMuYnVmW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgfCAodGhpcy5idWZbdGhpcy5wb3NdICYgMTI3KSA8PCAyMSkgPj4+IDA7IGlmICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSA8IDEyOCkgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIHZhbHVlID0gKHZhbHVlIHwgKHRoaXMuYnVmW3RoaXMucG9zXSAmICAxNSkgPDwgMjgpID4+PiAwOyBpZiAodGhpcy5idWZbdGhpcy5wb3MrK10gPCAxMjgpIHJldHVybiB2YWx1ZTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKCh0aGlzLnBvcyArPSA1KSA+IHRoaXMubGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gdGhpcy5sZW47XHJcbiAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG4vKipcclxuICogUmVhZHMgYSB2YXJpbnQgYXMgYSBzaWduZWQgMzIgYml0IHZhbHVlLlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXHJcbiAqL1xyXG5SZWFkZXIucHJvdG90eXBlLmludDMyID0gZnVuY3Rpb24gcmVhZF9pbnQzMigpIHtcclxuICAgIHJldHVybiB0aGlzLnVpbnQzMigpIHwgMDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBhIHppZy16YWcgZW5jb2RlZCB2YXJpbnQgYXMgYSBzaWduZWQgMzIgYml0IHZhbHVlLlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXHJcbiAqL1xyXG5SZWFkZXIucHJvdG90eXBlLnNpbnQzMiA9IGZ1bmN0aW9uIHJlYWRfc2ludDMyKCkge1xyXG4gICAgdmFyIHZhbHVlID0gdGhpcy51aW50MzIoKTtcclxuICAgIHJldHVybiB2YWx1ZSA+Pj4gMSBeIC0odmFsdWUgJiAxKSB8IDA7XHJcbn07XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cclxuXHJcbmZ1bmN0aW9uIHJlYWRMb25nVmFyaW50KCkge1xyXG4gICAgLy8gdGVuZHMgdG8gZGVvcHQgd2l0aCBsb2NhbCB2YXJzIGZvciBvY3RldCBldGMuXHJcbiAgICB2YXIgYml0cyA9IG5ldyBMb25nQml0cygwLCAwKTtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGlmICh0aGlzLmxlbiAtIHRoaXMucG9zID4gNCkgeyAvLyBmYXN0IHJvdXRlIChsbylcclxuICAgICAgICBmb3IgKDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgICAgICAvLyAxc3QuLjR0aFxyXG4gICAgICAgICAgICBiaXRzLmxvID0gKGJpdHMubG8gfCAodGhpcy5idWZbdGhpcy5wb3NdICYgMTI3KSA8PCBpICogNykgPj4+IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSA8IDEyOClcclxuICAgICAgICAgICAgICAgIHJldHVybiBiaXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyA1dGhcclxuICAgICAgICBiaXRzLmxvID0gKGJpdHMubG8gfCAodGhpcy5idWZbdGhpcy5wb3NdICYgMTI3KSA8PCAyOCkgPj4+IDA7XHJcbiAgICAgICAgYml0cy5oaSA9IChiaXRzLmhpIHwgKHRoaXMuYnVmW3RoaXMucG9zXSAmIDEyNykgPj4gIDQpID4+PiAwO1xyXG4gICAgICAgIGlmICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSA8IDEyOClcclxuICAgICAgICAgICAgcmV0dXJuIGJpdHM7XHJcbiAgICAgICAgaSA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoOyBpIDwgMzsgKytpKSB7XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPj0gdGhpcy5sZW4pXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIDFzdC4uM3RoXHJcbiAgICAgICAgICAgIGJpdHMubG8gPSAoYml0cy5sbyB8ICh0aGlzLmJ1Zlt0aGlzLnBvc10gJiAxMjcpIDw8IGkgKiA3KSA+Pj4gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVmW3RoaXMucG9zKytdIDwgMTI4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIDR0aFxyXG4gICAgICAgIGJpdHMubG8gPSAoYml0cy5sbyB8ICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSAmIDEyNykgPDwgaSAqIDcpID4+PiAwO1xyXG4gICAgICAgIHJldHVybiBiaXRzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGVuIC0gdGhpcy5wb3MgPiA0KSB7IC8vIGZhc3Qgcm91dGUgKGhpKVxyXG4gICAgICAgIGZvciAoOyBpIDwgNTsgKytpKSB7XHJcbiAgICAgICAgICAgIC8vIDZ0aC4uMTB0aFxyXG4gICAgICAgICAgICBiaXRzLmhpID0gKGJpdHMuaGkgfCAodGhpcy5idWZbdGhpcy5wb3NdICYgMTI3KSA8PCBpICogNyArIDMpID4+PiAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWZbdGhpcy5wb3MrK10gPCAxMjgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYml0cztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoOyBpIDwgNTsgKytpKSB7XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPj0gdGhpcy5sZW4pXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIDZ0aC4uMTB0aFxyXG4gICAgICAgICAgICBiaXRzLmhpID0gKGJpdHMuaGkgfCAodGhpcy5idWZbdGhpcy5wb3NdICYgMTI3KSA8PCBpICogNyArIDMpID4+PiAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWZbdGhpcy5wb3MrK10gPCAxMjgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYml0cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgdGhyb3cgRXJyb3IoXCJpbnZhbGlkIHZhcmludCBlbmNvZGluZ1wiKTtcclxufVxyXG5cclxuLyogZXNsaW50LWVuYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBhIHZhcmludCBhcyBhIHNpZ25lZCA2NCBiaXQgdmFsdWUuXHJcbiAqIEBuYW1lIFJlYWRlciNpbnQ2NFxyXG4gKiBAZnVuY3Rpb25cclxuICogQHJldHVybnMge0xvbmd9IFZhbHVlIHJlYWRcclxuICovXHJcblxyXG4vKipcclxuICogUmVhZHMgYSB2YXJpbnQgYXMgYW4gdW5zaWduZWQgNjQgYml0IHZhbHVlLlxyXG4gKiBAbmFtZSBSZWFkZXIjdWludDY0XHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7TG9uZ30gVmFsdWUgcmVhZFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBhIHppZy16YWcgZW5jb2RlZCB2YXJpbnQgYXMgYSBzaWduZWQgNjQgYml0IHZhbHVlLlxyXG4gKiBAbmFtZSBSZWFkZXIjc2ludDY0XHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7TG9uZ30gVmFsdWUgcmVhZFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBhIHZhcmludCBhcyBhIGJvb2xlYW4uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBWYWx1ZSByZWFkXHJcbiAqL1xyXG5SZWFkZXIucHJvdG90eXBlLmJvb2wgPSBmdW5jdGlvbiByZWFkX2Jvb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy51aW50MzIoKSAhPT0gMDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlYWRGaXhlZDMyX2VuZChidWYsIGVuZCkgeyAvLyBub3RlIHRoYXQgdGhpcyB1c2VzIGBlbmRgLCBub3QgYHBvc2BcclxuICAgIHJldHVybiAoYnVmW2VuZCAtIDRdXHJcbiAgICAgICAgICB8IGJ1ZltlbmQgLSAzXSA8PCA4XHJcbiAgICAgICAgICB8IGJ1ZltlbmQgLSAyXSA8PCAxNlxyXG4gICAgICAgICAgfCBidWZbZW5kIC0gMV0gPDwgMjQpID4+PiAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmVhZHMgZml4ZWQgMzIgYml0cyBhcyBhbiB1bnNpZ25lZCAzMiBiaXQgaW50ZWdlci5cclxuICogQHJldHVybnMge251bWJlcn0gVmFsdWUgcmVhZFxyXG4gKi9cclxuUmVhZGVyLnByb3RvdHlwZS5maXhlZDMyID0gZnVuY3Rpb24gcmVhZF9maXhlZDMyKCkge1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKHRoaXMucG9zICsgNCA+IHRoaXMubGVuKVxyXG4gICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzLCA0KTtcclxuXHJcbiAgICByZXR1cm4gcmVhZEZpeGVkMzJfZW5kKHRoaXMuYnVmLCB0aGlzLnBvcyArPSA0KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBmaXhlZCAzMiBiaXRzIGFzIGEgc2lnbmVkIDMyIGJpdCBpbnRlZ2VyLlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSByZWFkXHJcbiAqL1xyXG5SZWFkZXIucHJvdG90eXBlLnNmaXhlZDMyID0gZnVuY3Rpb24gcmVhZF9zZml4ZWQzMigpIHtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmICh0aGlzLnBvcyArIDQgPiB0aGlzLmxlbilcclxuICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgNCk7XHJcblxyXG4gICAgcmV0dXJuIHJlYWRGaXhlZDMyX2VuZCh0aGlzLmJ1ZiwgdGhpcy5wb3MgKz0gNCkgfCAwO1xyXG59O1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8taW52YWxpZC10aGlzICovXHJcblxyXG5mdW5jdGlvbiByZWFkRml4ZWQ2NCgvKiB0aGlzOiBSZWFkZXIgKi8pIHtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmICh0aGlzLnBvcyArIDggPiB0aGlzLmxlbilcclxuICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgOCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBMb25nQml0cyhyZWFkRml4ZWQzMl9lbmQodGhpcy5idWYsIHRoaXMucG9zICs9IDQpLCByZWFkRml4ZWQzMl9lbmQodGhpcy5idWYsIHRoaXMucG9zICs9IDQpKTtcclxufVxyXG5cclxuLyogZXNsaW50LWVuYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cclxuXHJcbi8qKlxyXG4gKiBSZWFkcyBmaXhlZCA2NCBiaXRzLlxyXG4gKiBAbmFtZSBSZWFkZXIjZml4ZWQ2NFxyXG4gKiBAZnVuY3Rpb25cclxuICogQHJldHVybnMge0xvbmd9IFZhbHVlIHJlYWRcclxuICovXHJcblxyXG4vKipcclxuICogUmVhZHMgemlnLXphZyBlbmNvZGVkIGZpeGVkIDY0IGJpdHMuXHJcbiAqIEBuYW1lIFJlYWRlciNzZml4ZWQ2NFxyXG4gKiBAZnVuY3Rpb25cclxuICogQHJldHVybnMge0xvbmd9IFZhbHVlIHJlYWRcclxuICovXHJcblxyXG4vKipcclxuICogUmVhZHMgYSBmbG9hdCAoMzIgYml0KSBhcyBhIG51bWJlci5cclxuICogQGZ1bmN0aW9uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIHJlYWRcclxuICovXHJcblJlYWRlci5wcm90b3R5cGUuZmxvYXQgPSBmdW5jdGlvbiByZWFkX2Zsb2F0KCkge1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgaWYgKHRoaXMucG9zICsgNCA+IHRoaXMubGVuKVxyXG4gICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzLCA0KTtcclxuXHJcbiAgICB2YXIgdmFsdWUgPSB1dGlsLmZsb2F0LnJlYWRGbG9hdExFKHRoaXMuYnVmLCB0aGlzLnBvcyk7XHJcbiAgICB0aGlzLnBvcyArPSA0O1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlYWRzIGEgZG91YmxlICg2NCBiaXQgZmxvYXQpIGFzIGEgbnVtYmVyLlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHJldHVybnMge251bWJlcn0gVmFsdWUgcmVhZFxyXG4gKi9cclxuUmVhZGVyLnByb3RvdHlwZS5kb3VibGUgPSBmdW5jdGlvbiByZWFkX2RvdWJsZSgpIHtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmICh0aGlzLnBvcyArIDggPiB0aGlzLmxlbilcclxuICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgNCk7XHJcblxyXG4gICAgdmFyIHZhbHVlID0gdXRpbC5mbG9hdC5yZWFkRG91YmxlTEUodGhpcy5idWYsIHRoaXMucG9zKTtcclxuICAgIHRoaXMucG9zICs9IDg7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVhZHMgYSBzZXF1ZW5jZSBvZiBieXRlcyBwcmVjZWVkZWQgYnkgaXRzIGxlbmd0aCBhcyBhIHZhcmludC5cclxuICogQHJldHVybnMge1VpbnQ4QXJyYXl9IFZhbHVlIHJlYWRcclxuICovXHJcblJlYWRlci5wcm90b3R5cGUuYnl0ZXMgPSBmdW5jdGlvbiByZWFkX2J5dGVzKCkge1xyXG4gICAgdmFyIGxlbmd0aCA9IHRoaXMudWludDMyKCksXHJcbiAgICAgICAgc3RhcnQgID0gdGhpcy5wb3MsXHJcbiAgICAgICAgZW5kICAgID0gdGhpcy5wb3MgKyBsZW5ndGg7XHJcblxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAoZW5kID4gdGhpcy5sZW4pXHJcbiAgICAgICAgdGhyb3cgaW5kZXhPdXRPZlJhbmdlKHRoaXMsIGxlbmd0aCk7XHJcblxyXG4gICAgdGhpcy5wb3MgKz0gbGVuZ3RoO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5idWYpKSAvLyBwbGFpbiBhcnJheVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1Zi5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIHJldHVybiBzdGFydCA9PT0gZW5kIC8vIGZpeCBmb3IgSUUgMTAvV2luOCBhbmQgb3RoZXJzJyBzdWJhcnJheSByZXR1cm5pbmcgYXJyYXkgb2Ygc2l6ZSAxXHJcbiAgICAgICAgPyBuZXcgdGhpcy5idWYuY29uc3RydWN0b3IoMClcclxuICAgICAgICA6IHRoaXMuX3NsaWNlLmNhbGwodGhpcy5idWYsIHN0YXJ0LCBlbmQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlYWRzIGEgc3RyaW5nIHByZWNlZWRlZCBieSBpdHMgYnl0ZSBsZW5ndGggYXMgYSB2YXJpbnQuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFZhbHVlIHJlYWRcclxuICovXHJcblJlYWRlci5wcm90b3R5cGUuc3RyaW5nID0gZnVuY3Rpb24gcmVhZF9zdHJpbmcoKSB7XHJcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLmJ5dGVzKCk7XHJcbiAgICByZXR1cm4gdXRmOC5yZWFkKGJ5dGVzLCAwLCBieXRlcy5sZW5ndGgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNraXBzIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGJ5dGVzIGlmIHNwZWNpZmllZCwgb3RoZXJ3aXNlIHNraXBzIGEgdmFyaW50LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTGVuZ3RoIGlmIGtub3duLCBvdGhlcndpc2UgYSB2YXJpbnQgaXMgYXNzdW1lZFxyXG4gKiBAcmV0dXJucyB7UmVhZGVyfSBgdGhpc2BcclxuICovXHJcblJlYWRlci5wcm90b3R5cGUuc2tpcCA9IGZ1bmN0aW9uIHNraXAobGVuZ3RoKSB7XHJcbiAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICh0aGlzLnBvcyArIGxlbmd0aCA+IHRoaXMubGVuKVxyXG4gICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgbGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnBvcyArPSBsZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyA+PSB0aGlzLmxlbilcclxuICAgICAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSAmIDEyOCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTa2lwcyB0aGUgbmV4dCBlbGVtZW50IG9mIHRoZSBzcGVjaWZpZWQgd2lyZSB0eXBlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lyZVR5cGUgV2lyZSB0eXBlIHJlY2VpdmVkXHJcbiAqIEByZXR1cm5zIHtSZWFkZXJ9IGB0aGlzYFxyXG4gKi9cclxuUmVhZGVyLnByb3RvdHlwZS5za2lwVHlwZSA9IGZ1bmN0aW9uKHdpcmVUeXBlKSB7XHJcbiAgICBzd2l0Y2ggKHdpcmVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICB0aGlzLnNraXAoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICB0aGlzLnNraXAoOCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgdGhpcy5za2lwKHRoaXMudWludDMyKCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIHdoaWxlICgod2lyZVR5cGUgPSB0aGlzLnVpbnQzMigpICYgNykgIT09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcFR5cGUod2lyZVR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgdGhpcy5za2lwKDQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcImludmFsaWQgd2lyZSB0eXBlIFwiICsgd2lyZVR5cGUgKyBcIiBhdCBvZmZzZXQgXCIgKyB0aGlzLnBvcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcblJlYWRlci5fY29uZmlndXJlID0gZnVuY3Rpb24oQnVmZmVyUmVhZGVyXykge1xyXG4gICAgQnVmZmVyUmVhZGVyID0gQnVmZmVyUmVhZGVyXztcclxuXHJcbiAgICB2YXIgZm4gPSB1dGlsLkxvbmcgPyBcInRvTG9uZ1wiIDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gXCJ0b051bWJlclwiO1xyXG4gICAgdXRpbC5tZXJnZShSZWFkZXIucHJvdG90eXBlLCB7XHJcblxyXG4gICAgICAgIGludDY0OiBmdW5jdGlvbiByZWFkX2ludDY0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhZExvbmdWYXJpbnQuY2FsbCh0aGlzKVtmbl0oZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVpbnQ2NDogZnVuY3Rpb24gcmVhZF91aW50NjQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFkTG9uZ1ZhcmludC5jYWxsKHRoaXMpW2ZuXSh0cnVlKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaW50NjQ6IGZ1bmN0aW9uIHJlYWRfc2ludDY0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhZExvbmdWYXJpbnQuY2FsbCh0aGlzKS56ekRlY29kZSgpW2ZuXShmYWxzZSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZml4ZWQ2NDogZnVuY3Rpb24gcmVhZF9maXhlZDY0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhZEZpeGVkNjQuY2FsbCh0aGlzKVtmbl0odHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2ZpeGVkNjQ6IGZ1bmN0aW9uIHJlYWRfc2ZpeGVkNjQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFkRml4ZWQ2NC5jYWxsKHRoaXMpW2ZuXShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBCdWZmZXJSZWFkZXI7XHJcblxyXG4vLyBleHRlbmRzIFJlYWRlclxyXG52YXIgUmVhZGVyID0gcmVxdWlyZShcIi4vcmVhZGVyXCIpO1xyXG4oQnVmZmVyUmVhZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVhZGVyLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yID0gQnVmZmVyUmVhZGVyO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsL21pbmltYWxcIik7XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIG5ldyBidWZmZXIgcmVhZGVyIGluc3RhbmNlLlxyXG4gKiBAY2xhc3NkZXNjIFdpcmUgZm9ybWF0IHJlYWRlciB1c2luZyBub2RlIGJ1ZmZlcnMuXHJcbiAqIEBleHRlbmRzIFJlYWRlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBCdWZmZXIgdG8gcmVhZCBmcm9tXHJcbiAqL1xyXG5mdW5jdGlvbiBCdWZmZXJSZWFkZXIoYnVmZmVyKSB7XHJcbiAgICBSZWFkZXIuY2FsbCh0aGlzLCBidWZmZXIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBidWZmZXIuXHJcbiAgICAgKiBAbmFtZSBCdWZmZXJSZWFkZXIjYnVmXHJcbiAgICAgKiBAdHlwZSB7QnVmZmVyfVxyXG4gICAgICovXHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbmlmICh1dGlsLkJ1ZmZlcilcclxuICAgIEJ1ZmZlclJlYWRlci5wcm90b3R5cGUuX3NsaWNlID0gdXRpbC5CdWZmZXIucHJvdG90eXBlLnNsaWNlO1xyXG5cclxuLyoqXHJcbiAqIEBvdmVycmlkZVxyXG4gKi9cclxuQnVmZmVyUmVhZGVyLnByb3RvdHlwZS5zdHJpbmcgPSBmdW5jdGlvbiByZWFkX3N0cmluZ19idWZmZXIoKSB7XHJcbiAgICB2YXIgbGVuID0gdGhpcy51aW50MzIoKTsgLy8gbW9kaWZpZXMgcG9zXHJcbiAgICByZXR1cm4gdGhpcy5idWYudXRmOFNsaWNlKHRoaXMucG9zLCB0aGlzLnBvcyA9IE1hdGgubWluKHRoaXMucG9zICsgbGVuLCB0aGlzLmxlbikpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlYWRzIGEgc2VxdWVuY2Ugb2YgYnl0ZXMgcHJlY2VlZGVkIGJ5IGl0cyBsZW5ndGggYXMgYSB2YXJpbnQuXHJcbiAqIEBuYW1lIEJ1ZmZlclJlYWRlciNieXRlc1xyXG4gKiBAZnVuY3Rpb25cclxuICogQHJldHVybnMge0J1ZmZlcn0gVmFsdWUgcmVhZFxyXG4gKi9cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gUm9vdDtcclxuXHJcbi8vIGV4dGVuZHMgTmFtZXNwYWNlXHJcbnZhciBOYW1lc3BhY2UgPSByZXF1aXJlKFwiLi9uYW1lc3BhY2VcIik7XHJcbigoUm9vdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE5hbWVzcGFjZS5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IFJvb3QpLmNsYXNzTmFtZSA9IFwiUm9vdFwiO1xyXG5cclxudmFyIEZpZWxkICAgPSByZXF1aXJlKFwiLi9maWVsZFwiKSxcclxuICAgIEVudW0gICAgPSByZXF1aXJlKFwiLi9lbnVtXCIpLFxyXG4gICAgT25lT2YgICA9IHJlcXVpcmUoXCIuL29uZW9mXCIpLFxyXG4gICAgdXRpbCAgICA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcblxyXG52YXIgVHlwZSwgICAvLyBjeWNsaWNcclxuICAgIHBhcnNlLCAgLy8gbWlnaHQgYmUgZXhjbHVkZWRcclxuICAgIGNvbW1vbjsgLy8gXCJcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbmV3IHJvb3QgbmFtZXNwYWNlIGluc3RhbmNlLlxyXG4gKiBAY2xhc3NkZXNjIFJvb3QgbmFtZXNwYWNlIHdyYXBwaW5nIGFsbCB0eXBlcywgZW51bXMsIHNlcnZpY2VzLCBzdWItbmFtZXNwYWNlcyBldGMuIHRoYXQgYmVsb25nIHRvZ2V0aGVyLlxyXG4gKiBAZXh0ZW5kcyBOYW1lc3BhY2VCYXNlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBbb3B0aW9uc10gVG9wIGxldmVsIG9wdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIFJvb3Qob3B0aW9ucykge1xyXG4gICAgTmFtZXNwYWNlLmNhbGwodGhpcywgXCJcIiwgb3B0aW9ucyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZlcnJlZCBleHRlbnNpb24gZmllbGRzLlxyXG4gICAgICogQHR5cGUge0ZpZWxkW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGVmZXJyZWQgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc29sdmVkIGZpbGUgbmFtZXMgb2YgbG9hZGVkIGZpbGVzLlxyXG4gICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmZpbGVzID0gW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhIG5hbWVzcGFjZSBkZXNjcmlwdG9yIGludG8gYSByb290IG5hbWVzcGFjZS5cclxuICogQHBhcmFtIHtJTmFtZXNwYWNlfSBqc29uIE5hbWVlc3BhY2UgZGVzY3JpcHRvclxyXG4gKiBAcGFyYW0ge1Jvb3R9IFtyb290XSBSb290IG5hbWVzcGFjZSwgZGVmYXVsdHMgdG8gY3JlYXRlIGEgbmV3IG9uZSBpZiBvbWl0dGVkXHJcbiAqIEByZXR1cm5zIHtSb290fSBSb290IG5hbWVzcGFjZVxyXG4gKi9cclxuUm9vdC5mcm9tSlNPTiA9IGZ1bmN0aW9uIGZyb21KU09OKGpzb24sIHJvb3QpIHtcclxuICAgIGlmICghcm9vdClcclxuICAgICAgICByb290ID0gbmV3IFJvb3QoKTtcclxuICAgIGlmIChqc29uLm9wdGlvbnMpXHJcbiAgICAgICAgcm9vdC5zZXRPcHRpb25zKGpzb24ub3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcm9vdC5hZGRKU09OKGpzb24ubmVzdGVkKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXNvbHZlcyB0aGUgcGF0aCBvZiBhbiBpbXBvcnRlZCBmaWxlLCByZWxhdGl2ZSB0byB0aGUgaW1wb3J0aW5nIG9yaWdpbi5cclxuICogVGhpcyBtZXRob2QgZXhpc3RzIHNvIHlvdSBjYW4gb3ZlcnJpZGUgaXQgd2l0aCB5b3VyIG93biBsb2dpYyBpbiBjYXNlIHlvdXIgaW1wb3J0cyBhcmUgc2NhdHRlcmVkIG92ZXIgbXVsdGlwbGUgZGlyZWN0b3JpZXMuXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luIFRoZSBmaWxlIG5hbWUgb2YgdGhlIGltcG9ydGluZyBmaWxlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXQgVGhlIGZpbGUgbmFtZSBiZWluZyBpbXBvcnRlZFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IFJlc29sdmVkIHBhdGggdG8gYHRhcmdldGAgb3IgYG51bGxgIHRvIHNraXAgdGhlIGZpbGVcclxuICovXHJcblJvb3QucHJvdG90eXBlLnJlc29sdmVQYXRoID0gdXRpbC5wYXRoLnJlc29sdmU7XHJcblxyXG4vLyBBIHN5bWJvbC1saWtlIGZ1bmN0aW9uIHRvIHNhZmVseSBzaWduYWwgc3luY2hyb25vdXMgbG9hZGluZ1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5mdW5jdGlvbiBTWU5DKCkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eS1mdW5jdGlvblxyXG5cclxuLyoqXHJcbiAqIExvYWRzIG9uZSBvciBtdWx0aXBsZSAucHJvdG8gb3IgcHJlcHJvY2Vzc2VkIC5qc29uIGZpbGVzIGludG8gdGhpcyByb290IG5hbWVzcGFjZSBhbmQgY2FsbHMgdGhlIGNhbGxiYWNrLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gZmlsZW5hbWUgTmFtZXMgb2Ygb25lIG9yIG11bHRpcGxlIGZpbGVzIHRvIGxvYWRcclxuICogQHBhcmFtIHtJUGFyc2VPcHRpb25zfSBvcHRpb25zIFBhcnNlIG9wdGlvbnNcclxuICogQHBhcmFtIHtMb2FkQ2FsbGJhY2t9IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAqL1xyXG5Sb290LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gbG9hZChmaWxlbmFtZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xyXG4gICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIWNhbGxiYWNrKVxyXG4gICAgICAgIHJldHVybiB1dGlsLmFzUHJvbWlzZShsb2FkLCBzZWxmLCBmaWxlbmFtZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHN5bmMgPSBjYWxsYmFjayA9PT0gU1lOQzsgLy8gdW5kb2N1bWVudGVkXHJcblxyXG4gICAgLy8gRmluaXNoZXMgbG9hZGluZyBieSBjYWxsaW5nIHRoZSBjYWxsYmFjayAoZXhhY3RseSBvbmNlKVxyXG4gICAgZnVuY3Rpb24gZmluaXNoKGVyciwgcm9vdCkge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghY2FsbGJhY2spXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgY2IgPSBjYWxsYmFjaztcclxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN5bmMpXHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICBjYihlcnIsIHJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2Nlc3NlcyBhIHNpbmdsZSBmaWxlXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzKGZpbGVuYW1lLCBzb3VyY2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodXRpbC5pc1N0cmluZyhzb3VyY2UpICYmIHNvdXJjZS5jaGFyQXQoMCkgPT09IFwie1wiKVxyXG4gICAgICAgICAgICAgICAgc291cmNlID0gSlNPTi5wYXJzZShzb3VyY2UpO1xyXG4gICAgICAgICAgICBpZiAoIXV0aWwuaXNTdHJpbmcoc291cmNlKSlcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0T3B0aW9ucyhzb3VyY2Uub3B0aW9ucykuYWRkSlNPTihzb3VyY2UubmVzdGVkKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZS5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlKHNvdXJjZSwgc2VsZiwgb3B0aW9ucyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLmltcG9ydHMpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBwYXJzZWQuaW1wb3J0cy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkID0gc2VsZi5yZXNvbHZlUGF0aChmaWxlbmFtZSwgcGFyc2VkLmltcG9ydHNbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2gocmVzb2x2ZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC53ZWFrSW1wb3J0cylcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFyc2VkLndlYWtJbXBvcnRzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWQgPSBzZWxmLnJlc29sdmVQYXRoKGZpbGVuYW1lLCBwYXJzZWQud2Vha0ltcG9ydHNbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2gocmVzb2x2ZWQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGZpbmlzaChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN5bmMgJiYgIXF1ZXVlZClcclxuICAgICAgICAgICAgZmluaXNoKG51bGwsIHNlbGYpOyAvLyBvbmx5IG9uY2UgYW55d2F5XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2hlcyBhIHNpbmdsZSBmaWxlXHJcbiAgICBmdW5jdGlvbiBmZXRjaChmaWxlbmFtZSwgd2Vhaykge1xyXG5cclxuICAgICAgICAvLyBTdHJpcCBwYXRoIGlmIHRoaXMgZmlsZSByZWZlcmVuY2VzIGEgYnVuZGxlZCBkZWZpbml0aW9uXHJcbiAgICAgICAgdmFyIGlkeCA9IGZpbGVuYW1lLmxhc3RJbmRleE9mKFwiZ29vZ2xlL3Byb3RvYnVmL1wiKTtcclxuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGFsdG5hbWUgPSBmaWxlbmFtZS5zdWJzdHJpbmcoaWR4KTtcclxuICAgICAgICAgICAgaWYgKGFsdG5hbWUgaW4gY29tbW9uKVxyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBhbHRuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2tpcCBpZiBhbHJlYWR5IGxvYWRlZCAvIGF0dGVtcHRlZFxyXG4gICAgICAgIGlmIChzZWxmLmZpbGVzLmluZGV4T2YoZmlsZW5hbWUpID4gLTEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZWxmLmZpbGVzLnB1c2goZmlsZW5hbWUpO1xyXG5cclxuICAgICAgICAvLyBTaG9ydGN1dCBidW5kbGVkIGRlZmluaXRpb25zXHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIGNvbW1vbikge1xyXG4gICAgICAgICAgICBpZiAoc3luYylcclxuICAgICAgICAgICAgICAgIHByb2Nlc3MoZmlsZW5hbWUsIGNvbW1vbltmaWxlbmFtZV0pO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICsrcXVldWVkO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAtLXF1ZXVlZDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzKGZpbGVuYW1lLCBjb21tb25bZmlsZW5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE90aGVyd2lzZSBmZXRjaCBmcm9tIGRpc2sgb3IgbmV0d29ya1xyXG4gICAgICAgIGlmIChzeW5jKSB7XHJcbiAgICAgICAgICAgIHZhciBzb3VyY2U7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSB1dGlsLmZzLnJlYWRGaWxlU3luYyhmaWxlbmFtZSkudG9TdHJpbmcoXCJ1dGY4XCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd2VhaylcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2goZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9jZXNzKGZpbGVuYW1lLCBzb3VyY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICsrcXVldWVkO1xyXG4gICAgICAgICAgICB1dGlsLmZldGNoKGZpbGVuYW1lLCBmdW5jdGlvbihlcnIsIHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgLS1xdWV1ZWQ7XHJcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgICAgIGlmICghY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyB0ZXJtaW5hdGVkIG1lYW53aGlsZVxyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3ZWFrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2goZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghcXVldWVkKSAvLyBjYW4ndCBiZSBjb3ZlcmVkIHJlbGlhYmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaChudWxsLCBzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzKGZpbGVuYW1lLCBzb3VyY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcXVldWVkID0gMDtcclxuXHJcbiAgICAvLyBBc3NlbWJsaW5nIHRoZSByb290IG5hbWVzcGFjZSBkb2Vzbid0IHJlcXVpcmUgd29ya2luZyB0eXBlXHJcbiAgICAvLyByZWZlcmVuY2VzIGFueW1vcmUsIHNvIHdlIGNhbiBsb2FkIGV2ZXJ5dGhpbmcgaW4gcGFyYWxsZWxcclxuICAgIGlmICh1dGlsLmlzU3RyaW5nKGZpbGVuYW1lKSlcclxuICAgICAgICBmaWxlbmFtZSA9IFsgZmlsZW5hbWUgXTtcclxuICAgIGZvciAodmFyIGkgPSAwLCByZXNvbHZlZDsgaSA8IGZpbGVuYW1lLmxlbmd0aDsgKytpKVxyXG4gICAgICAgIGlmIChyZXNvbHZlZCA9IHNlbGYucmVzb2x2ZVBhdGgoXCJcIiwgZmlsZW5hbWVbaV0pKVxyXG4gICAgICAgICAgICBmZXRjaChyZXNvbHZlZCk7XHJcblxyXG4gICAgaWYgKHN5bmMpXHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICBpZiAoIXF1ZXVlZClcclxuICAgICAgICBmaW5pc2gobnVsbCwgc2VsZik7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG4vLyBmdW5jdGlvbiBsb2FkKGZpbGVuYW1lOnN0cmluZywgb3B0aW9uczpJUGFyc2VPcHRpb25zLCBjYWxsYmFjazpMb2FkQ2FsbGJhY2spOnVuZGVmaW5lZFxyXG5cclxuLyoqXHJcbiAqIExvYWRzIG9uZSBvciBtdWx0aXBsZSAucHJvdG8gb3IgcHJlcHJvY2Vzc2VkIC5qc29uIGZpbGVzIGludG8gdGhpcyByb290IG5hbWVzcGFjZSBhbmQgY2FsbHMgdGhlIGNhbGxiYWNrLlxyXG4gKiBAZnVuY3Rpb24gUm9vdCNsb2FkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlbmFtZSBOYW1lcyBvZiBvbmUgb3IgbXVsdGlwbGUgZmlsZXMgdG8gbG9hZFxyXG4gKiBAcGFyYW0ge0xvYWRDYWxsYmFja30gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb25cclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICogQHZhcmlhdGlvbiAyXHJcbiAqL1xyXG4vLyBmdW5jdGlvbiBsb2FkKGZpbGVuYW1lOnN0cmluZywgY2FsbGJhY2s6TG9hZENhbGxiYWNrKTp1bmRlZmluZWRcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBvbmUgb3IgbXVsdGlwbGUgLnByb3RvIG9yIHByZXByb2Nlc3NlZCAuanNvbiBmaWxlcyBpbnRvIHRoaXMgcm9vdCBuYW1lc3BhY2UgYW5kIHJldHVybnMgYSBwcm9taXNlLlxyXG4gKiBAZnVuY3Rpb24gUm9vdCNsb2FkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlbmFtZSBOYW1lcyBvZiBvbmUgb3IgbXVsdGlwbGUgZmlsZXMgdG8gbG9hZFxyXG4gKiBAcGFyYW0ge0lQYXJzZU9wdGlvbnN9IFtvcHRpb25zXSBQYXJzZSBvcHRpb25zLiBEZWZhdWx0cyB0byB7QGxpbmsgcGFyc2UuZGVmYXVsdHN9IHdoZW4gb21pdHRlZC5cclxuICogQHJldHVybnMge1Byb21pc2U8Um9vdD59IFByb21pc2VcclxuICogQHZhcmlhdGlvbiAzXHJcbiAqL1xyXG4vLyBmdW5jdGlvbiBsb2FkKGZpbGVuYW1lOnN0cmluZywgW29wdGlvbnM6SVBhcnNlT3B0aW9uc10pOlByb21pc2U8Um9vdD5cclxuXHJcbi8qKlxyXG4gKiBTeW5jaHJvbm91c2x5IGxvYWRzIG9uZSBvciBtdWx0aXBsZSAucHJvdG8gb3IgcHJlcHJvY2Vzc2VkIC5qc29uIGZpbGVzIGludG8gdGhpcyByb290IG5hbWVzcGFjZSAobm9kZSBvbmx5KS5cclxuICogQGZ1bmN0aW9uIFJvb3QjbG9hZFN5bmNcclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGZpbGVuYW1lIE5hbWVzIG9mIG9uZSBvciBtdWx0aXBsZSBmaWxlcyB0byBsb2FkXHJcbiAqIEBwYXJhbSB7SVBhcnNlT3B0aW9uc30gW29wdGlvbnNdIFBhcnNlIG9wdGlvbnMuIERlZmF1bHRzIHRvIHtAbGluayBwYXJzZS5kZWZhdWx0c30gd2hlbiBvbWl0dGVkLlxyXG4gKiBAcmV0dXJucyB7Um9vdH0gUm9vdCBuYW1lc3BhY2VcclxuICogQHRocm93cyB7RXJyb3J9IElmIHN5bmNocm9ub3VzIGZldGNoaW5nIGlzIG5vdCBzdXBwb3J0ZWQgKGkuZS4gaW4gYnJvd3NlcnMpIG9yIGlmIGEgZmlsZSdzIHN5bnRheCBpcyBpbnZhbGlkXHJcbiAqL1xyXG5Sb290LnByb3RvdHlwZS5sb2FkU3luYyA9IGZ1bmN0aW9uIGxvYWRTeW5jKGZpbGVuYW1lLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoIXV0aWwuaXNOb2RlKVxyXG4gICAgICAgIHRocm93IEVycm9yKFwibm90IHN1cHBvcnRlZFwiKTtcclxuICAgIHJldHVybiB0aGlzLmxvYWQoZmlsZW5hbWUsIG9wdGlvbnMsIFNZTkMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBvdmVycmlkZVxyXG4gKi9cclxuUm9vdC5wcm90b3R5cGUucmVzb2x2ZUFsbCA9IGZ1bmN0aW9uIHJlc29sdmVBbGwoKSB7XHJcbiAgICBpZiAodGhpcy5kZWZlcnJlZC5sZW5ndGgpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJ1bnJlc29sdmFibGUgZXh0ZW5zaW9uczogXCIgKyB0aGlzLmRlZmVycmVkLm1hcChmdW5jdGlvbihmaWVsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCInZXh0ZW5kIFwiICsgZmllbGQuZXh0ZW5kICsgXCInIGluIFwiICsgZmllbGQucGFyZW50LmZ1bGxOYW1lO1xyXG4gICAgICAgIH0pLmpvaW4oXCIsIFwiKSk7XHJcbiAgICByZXR1cm4gTmFtZXNwYWNlLnByb3RvdHlwZS5yZXNvbHZlQWxsLmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG4vLyBvbmx5IHVwcGVyY2FzZWQgKGFuZCB0aHVzIGNvbmZsaWN0LWZyZWUpIGNoaWxkcmVuIGFyZSBleHBvc2VkLCBzZWUgYmVsb3dcclxudmFyIGV4cG9zZVJlID0gL15bQS1aXS87XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBhIGRlZmVycmVkIGRlY2xhcmluZyBleHRlbnNpb24gZmllbGQgYnkgY3JlYXRpbmcgYSBzaXN0ZXIgZmllbGQgdG8gcmVwcmVzZW50IGl0IHdpdGhpbiBpdHMgZXh0ZW5kZWQgdHlwZS5cclxuICogQHBhcmFtIHtSb290fSByb290IFJvb3QgaW5zdGFuY2VcclxuICogQHBhcmFtIHtGaWVsZH0gZmllbGQgRGVjbGFyaW5nIGV4dGVuc2lvbiBmaWVsZCB3aXRpbiB0aGUgZGVjbGFyaW5nIHR5cGVcclxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBzdWNjZXNzZnVsbHkgYWRkZWQgdG8gdGhlIGV4dGVuZGVkIHR5cGUsIGBmYWxzZWAgb3RoZXJ3aXNlXHJcbiAqIEBpbm5lclxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5mdW5jdGlvbiB0cnlIYW5kbGVFeHRlbnNpb24ocm9vdCwgZmllbGQpIHtcclxuICAgIHZhciBleHRlbmRlZFR5cGUgPSBmaWVsZC5wYXJlbnQubG9va3VwKGZpZWxkLmV4dGVuZCk7XHJcbiAgICBpZiAoZXh0ZW5kZWRUeXBlKSB7XHJcbiAgICAgICAgdmFyIHNpc3RlckZpZWxkID0gbmV3IEZpZWxkKGZpZWxkLmZ1bGxOYW1lLCBmaWVsZC5pZCwgZmllbGQudHlwZSwgZmllbGQucnVsZSwgdW5kZWZpbmVkLCBmaWVsZC5vcHRpb25zKTtcclxuICAgICAgICBzaXN0ZXJGaWVsZC5kZWNsYXJpbmdGaWVsZCA9IGZpZWxkO1xyXG4gICAgICAgIGZpZWxkLmV4dGVuc2lvbkZpZWxkID0gc2lzdGVyRmllbGQ7XHJcbiAgICAgICAgZXh0ZW5kZWRUeXBlLmFkZChzaXN0ZXJGaWVsZCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgd2hlbiBhbnkgb2JqZWN0IGlzIGFkZGVkIHRvIHRoaXMgcm9vdCBvciBpdHMgc3ViLW5hbWVzcGFjZXMuXHJcbiAqIEBwYXJhbSB7UmVmbGVjdGlvbk9iamVjdH0gb2JqZWN0IE9iamVjdCBhZGRlZFxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuUm9vdC5wcm90b3R5cGUuX2hhbmRsZUFkZCA9IGZ1bmN0aW9uIF9oYW5kbGVBZGQob2JqZWN0KSB7XHJcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgRmllbGQpIHtcclxuXHJcbiAgICAgICAgaWYgKC8qIGFuIGV4dGVuc2lvbiBmaWVsZCAoaW1wbGllcyBub3QgcGFydCBvZiBhIG9uZW9mKSAqLyBvYmplY3QuZXh0ZW5kICE9PSB1bmRlZmluZWQgJiYgLyogbm90IGFscmVhZHkgaGFuZGxlZCAqLyAhb2JqZWN0LmV4dGVuc2lvbkZpZWxkKVxyXG4gICAgICAgICAgICBpZiAoIXRyeUhhbmRsZUV4dGVuc2lvbih0aGlzLCBvYmplY3QpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZlcnJlZC5wdXNoKG9iamVjdCk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChvYmplY3QgaW5zdGFuY2VvZiBFbnVtKSB7XHJcblxyXG4gICAgICAgIGlmIChleHBvc2VSZS50ZXN0KG9iamVjdC5uYW1lKSlcclxuICAgICAgICAgICAgb2JqZWN0LnBhcmVudFtvYmplY3QubmFtZV0gPSBvYmplY3QudmFsdWVzOyAvLyBleHBvc2UgZW51bSB2YWx1ZXMgYXMgcHJvcGVydHkgb2YgaXRzIHBhcmVudFxyXG5cclxuICAgIH0gZWxzZSBpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBPbmVPZikpIC8qIGV2ZXJ5dGhpbmcgZWxzZSBpcyBhIG5hbWVzcGFjZSAqLyB7XHJcblxyXG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBUeXBlKSAvLyBUcnkgdG8gaGFuZGxlIGFueSBkZWZlcnJlZCBleHRlbnNpb25zXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kZWZlcnJlZC5sZW5ndGg7KVxyXG4gICAgICAgICAgICAgICAgaWYgKHRyeUhhbmRsZUV4dGVuc2lvbih0aGlzLCB0aGlzLmRlZmVycmVkW2ldKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmVycmVkLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAvKiBpbml0aWFsaXplcyAqLyBvYmplY3QubmVzdGVkQXJyYXkubGVuZ3RoOyArK2opIC8vIHJlY3Vyc2UgaW50byB0aGUgbmFtZXNwYWNlXHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUFkZChvYmplY3QuX25lc3RlZEFycmF5W2pdKTtcclxuICAgICAgICBpZiAoZXhwb3NlUmUudGVzdChvYmplY3QubmFtZSkpXHJcbiAgICAgICAgICAgIG9iamVjdC5wYXJlbnRbb2JqZWN0Lm5hbWVdID0gb2JqZWN0OyAvLyBleHBvc2UgbmFtZXNwYWNlIGFzIHByb3BlcnR5IG9mIGl0cyBwYXJlbnRcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgYWJvdmUgYWxzbyBhZGRzIHVwcGVyY2FzZWQgKGFuZCB0aHVzIGNvbmZsaWN0LWZyZWUpIG5lc3RlZCB0eXBlcywgc2VydmljZXMgYW5kIGVudW1zIGFzXHJcbiAgICAvLyBwcm9wZXJ0aWVzIG9mIG5hbWVzcGFjZXMganVzdCBsaWtlIHN0YXRpYyBjb2RlIGRvZXMuIFRoaXMgYWxsb3dzIHVzaW5nIGEgLmQudHMgZ2VuZXJhdGVkIGZvclxyXG4gICAgLy8gYSBzdGF0aWMgbW9kdWxlIHdpdGggcmVmbGVjdGlvbi1iYXNlZCBzb2x1dGlvbnMgd2hlcmUgdGhlIGNvbmRpdGlvbiBpcyBtZXQuXHJcbn07XHJcblxyXG4vKipcclxuICogQ2FsbGVkIHdoZW4gYW55IG9iamVjdCBpcyByZW1vdmVkIGZyb20gdGhpcyByb290IG9yIGl0cyBzdWItbmFtZXNwYWNlcy5cclxuICogQHBhcmFtIHtSZWZsZWN0aW9uT2JqZWN0fSBvYmplY3QgT2JqZWN0IHJlbW92ZWRcclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICogQHByaXZhdGVcclxuICovXHJcblJvb3QucHJvdG90eXBlLl9oYW5kbGVSZW1vdmUgPSBmdW5jdGlvbiBfaGFuZGxlUmVtb3ZlKG9iamVjdCkge1xyXG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEZpZWxkKSB7XHJcblxyXG4gICAgICAgIGlmICgvKiBhbiBleHRlbnNpb24gZmllbGQgKi8gb2JqZWN0LmV4dGVuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICgvKiBhbHJlYWR5IGhhbmRsZWQgKi8gb2JqZWN0LmV4dGVuc2lvbkZpZWxkKSB7IC8vIHJlbW92ZSBpdHMgc2lzdGVyIGZpZWxkXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZXh0ZW5zaW9uRmllbGQucGFyZW50LnJlbW92ZShvYmplY3QuZXh0ZW5zaW9uRmllbGQpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmV4dGVuc2lvbkZpZWxkID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gY2FuY2VsIHRoZSBleHRlbnNpb25cclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZGVmZXJyZWQuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmZXJyZWQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEVudW0pIHtcclxuXHJcbiAgICAgICAgaWYgKGV4cG9zZVJlLnRlc3Qob2JqZWN0Lm5hbWUpKVxyXG4gICAgICAgICAgICBkZWxldGUgb2JqZWN0LnBhcmVudFtvYmplY3QubmFtZV07IC8vIHVuZXhwb3NlIGVudW0gdmFsdWVzXHJcblxyXG4gICAgfSBlbHNlIGlmIChvYmplY3QgaW5zdGFuY2VvZiBOYW1lc3BhY2UpIHtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAvKiBpbml0aWFsaXplcyAqLyBvYmplY3QubmVzdGVkQXJyYXkubGVuZ3RoOyArK2kpIC8vIHJlY3Vyc2UgaW50byB0aGUgbmFtZXNwYWNlXHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZVJlbW92ZShvYmplY3QuX25lc3RlZEFycmF5W2ldKTtcclxuXHJcbiAgICAgICAgaWYgKGV4cG9zZVJlLnRlc3Qob2JqZWN0Lm5hbWUpKVxyXG4gICAgICAgICAgICBkZWxldGUgb2JqZWN0LnBhcmVudFtvYmplY3QubmFtZV07IC8vIHVuZXhwb3NlIG5hbWVzcGFjZXNcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBTZXRzIHVwIGN5Y2xpYyBkZXBlbmRlbmNpZXMgKGNhbGxlZCBpbiBpbmRleC1saWdodClcclxuUm9vdC5fY29uZmlndXJlID0gZnVuY3Rpb24oVHlwZV8sIHBhcnNlXywgY29tbW9uXykge1xyXG4gICAgVHlwZSAgID0gVHlwZV87XHJcbiAgICBwYXJzZSAgPSBwYXJzZV87XHJcbiAgICBjb21tb24gPSBjb21tb25fO1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBOYW1lZCByb290cy5cclxuICogVGhpcyBpcyB3aGVyZSBwYmpzIHN0b3JlcyBnZW5lcmF0ZWQgc3RydWN0dXJlcyAodGhlIG9wdGlvbiBgLXIsIC0tcm9vdGAgc3BlY2lmaWVzIGEgbmFtZSkuXHJcbiAqIENhbiBhbHNvIGJlIHVzZWQgbWFudWFsbHkgdG8gbWFrZSByb290cyBhdmFpbGFibGUgYWNjcm9zcyBtb2R1bGVzLlxyXG4gKiBAbmFtZSByb290c1xyXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsUm9vdD59XHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIHBianMgLXIgbXlyb290IC1vIGNvbXBpbGVkLmpzIC4uLlxyXG4gKlxyXG4gKiAvLyBpbiBhbm90aGVyIG1vZHVsZTpcclxuICogcmVxdWlyZShcIi4vY29tcGlsZWQuanNcIik7XHJcbiAqXHJcbiAqIC8vIGluIGFueSBzdWJzZXF1ZW50IG1vZHVsZTpcclxuICogdmFyIHJvb3QgPSBwcm90b2J1Zi5yb290c1tcIm15cm9vdFwiXTtcclxuICovXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyoqXHJcbiAqIFN0cmVhbWluZyBSUEMgaGVscGVycy5cclxuICogQG5hbWVzcGFjZVxyXG4gKi9cclxudmFyIHJwYyA9IGV4cG9ydHM7XHJcblxyXG4vKipcclxuICogUlBDIGltcGxlbWVudGF0aW9uIHBhc3NlZCB0byB7QGxpbmsgU2VydmljZSNjcmVhdGV9IHBlcmZvcm1pbmcgYSBzZXJ2aWNlIHJlcXVlc3Qgb24gbmV0d29yayBsZXZlbCwgaS5lLiBieSB1dGlsaXppbmcgaHR0cCByZXF1ZXN0cyBvciB3ZWJzb2NrZXRzLlxyXG4gKiBAdHlwZWRlZiBSUENJbXBsXHJcbiAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICogQHBhcmFtIHtNZXRob2R8cnBjLlNlcnZpY2VNZXRob2Q8TWVzc2FnZTx7fT4sTWVzc2FnZTx7fT4+fSBtZXRob2QgUmVmbGVjdGVkIG9yIHN0YXRpYyBtZXRob2QgYmVpbmcgY2FsbGVkXHJcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gcmVxdWVzdERhdGEgUmVxdWVzdCBkYXRhXHJcbiAqIEBwYXJhbSB7UlBDSW1wbENhbGxiYWNrfSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBmdW5jdGlvbiBycGNJbXBsKG1ldGhvZCwgcmVxdWVzdERhdGEsIGNhbGxiYWNrKSB7XHJcbiAqICAgICBpZiAocHJvdG9idWYudXRpbC5sY0ZpcnN0KG1ldGhvZC5uYW1lKSAhPT0gXCJteU1ldGhvZFwiKSAvLyBjb21wYXRpYmxlIHdpdGggc3RhdGljIGNvZGVcclxuICogICAgICAgICB0aHJvdyBFcnJvcihcIm5vIHN1Y2ggbWV0aG9kXCIpO1xyXG4gKiAgICAgYXN5bmNocm9ub3VzbHlPYnRhaW5BUmVzcG9uc2UocmVxdWVzdERhdGEsIGZ1bmN0aW9uKGVyciwgcmVzcG9uc2VEYXRhKSB7XHJcbiAqICAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZURhdGEpO1xyXG4gKiAgICAgfSk7XHJcbiAqIH1cclxuICovXHJcblxyXG4vKipcclxuICogTm9kZS1zdHlsZSBjYWxsYmFjayBhcyB1c2VkIGJ5IHtAbGluayBSUENJbXBsfS5cclxuICogQHR5cGVkZWYgUlBDSW1wbENhbGxiYWNrXHJcbiAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICogQHBhcmFtIHtFcnJvcnxudWxsfSBlcnJvciBFcnJvciwgaWYgYW55LCBvdGhlcndpc2UgYG51bGxgXHJcbiAqIEBwYXJhbSB7VWludDhBcnJheXxudWxsfSBbcmVzcG9uc2VdIFJlc3BvbnNlIGRhdGEgb3IgYG51bGxgIHRvIHNpZ25hbCBlbmQgb2Ygc3RyZWFtLCBpZiB0aGVyZSBoYXNuJ3QgYmVlbiBhbiBlcnJvclxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKi9cclxuXHJcbnJwYy5TZXJ2aWNlID0gcmVxdWlyZShcIi4vcnBjL3NlcnZpY2VcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFNlcnZpY2U7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsL21pbmltYWxcIik7XHJcblxyXG4vLyBFeHRlbmRzIEV2ZW50RW1pdHRlclxyXG4oU2VydmljZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHV0aWwuRXZlbnRFbWl0dGVyLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yID0gU2VydmljZTtcclxuXHJcbi8qKlxyXG4gKiBBIHNlcnZpY2UgbWV0aG9kIGNhbGxiYWNrIGFzIHVzZWQgYnkge0BsaW5rIHJwYy5TZXJ2aWNlTWV0aG9kfFNlcnZpY2VNZXRob2R9LlxyXG4gKlxyXG4gKiBEaWZmZXJzIGZyb20ge0BsaW5rIFJQQ0ltcGxDYWxsYmFja30gaW4gdGhhdCBpdCBpcyBhbiBhY3R1YWwgY2FsbGJhY2sgb2YgYSBzZXJ2aWNlIG1ldGhvZCB3aGljaCBtYXkgbm90IHJldHVybiBgcmVzcG9uc2UgPSBudWxsYC5cclxuICogQHR5cGVkZWYgcnBjLlNlcnZpY2VNZXRob2RDYWxsYmFja1xyXG4gKiBAdGVtcGxhdGUgVFJlcyBleHRlbmRzIE1lc3NhZ2U8VFJlcz5cclxuICogQHR5cGUge2Z1bmN0aW9ufVxyXG4gKiBAcGFyYW0ge0Vycm9yfG51bGx9IGVycm9yIEVycm9yLCBpZiBhbnlcclxuICogQHBhcmFtIHtUUmVzfSBbcmVzcG9uc2VdIFJlc3BvbnNlIG1lc3NhZ2VcclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICovXHJcblxyXG4vKipcclxuICogQSBzZXJ2aWNlIG1ldGhvZCBwYXJ0IG9mIGEge0BsaW5rIHJwYy5TZXJ2aWNlfSBhcyBjcmVhdGVkIGJ5IHtAbGluayBTZXJ2aWNlLmNyZWF0ZX0uXHJcbiAqIEB0eXBlZGVmIHJwYy5TZXJ2aWNlTWV0aG9kXHJcbiAqIEB0ZW1wbGF0ZSBUUmVxIGV4dGVuZHMgTWVzc2FnZTxUUmVxPlxyXG4gKiBAdGVtcGxhdGUgVFJlcyBleHRlbmRzIE1lc3NhZ2U8VFJlcz5cclxuICogQHR5cGUge2Z1bmN0aW9ufVxyXG4gKiBAcGFyYW0ge1RSZXF8UHJvcGVydGllczxUUmVxPn0gcmVxdWVzdCBSZXF1ZXN0IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0XHJcbiAqIEBwYXJhbSB7cnBjLlNlcnZpY2VNZXRob2RDYWxsYmFjazxUUmVzPn0gW2NhbGxiYWNrXSBOb2RlLXN0eWxlIGNhbGxiYWNrIGNhbGxlZCB3aXRoIHRoZSBlcnJvciwgaWYgYW55LCBhbmQgdGhlIHJlc3BvbnNlIG1lc3NhZ2VcclxuICogQHJldHVybnMge1Byb21pc2U8TWVzc2FnZTxUUmVzPj59IFByb21pc2UgaWYgYGNhbGxiYWNrYCBoYXMgYmVlbiBvbWl0dGVkLCBvdGhlcndpc2UgYHVuZGVmaW5lZGBcclxuICovXHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIG5ldyBSUEMgc2VydmljZSBpbnN0YW5jZS5cclxuICogQGNsYXNzZGVzYyBBbiBSUEMgc2VydmljZSBhcyByZXR1cm5lZCBieSB7QGxpbmsgU2VydmljZSNjcmVhdGV9LlxyXG4gKiBAZXhwb3J0cyBycGMuU2VydmljZVxyXG4gKiBAZXh0ZW5kcyB1dGlsLkV2ZW50RW1pdHRlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtSUENJbXBsfSBycGNJbXBsIFJQQyBpbXBsZW1lbnRhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXF1ZXN0RGVsaW1pdGVkPWZhbHNlXSBXaGV0aGVyIHJlcXVlc3RzIGFyZSBsZW5ndGgtZGVsaW1pdGVkXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3BvbnNlRGVsaW1pdGVkPWZhbHNlXSBXaGV0aGVyIHJlc3BvbnNlcyBhcmUgbGVuZ3RoLWRlbGltaXRlZFxyXG4gKi9cclxuZnVuY3Rpb24gU2VydmljZShycGNJbXBsLCByZXF1ZXN0RGVsaW1pdGVkLCByZXNwb25zZURlbGltaXRlZCkge1xyXG5cclxuICAgIGlmICh0eXBlb2YgcnBjSW1wbCAhPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcInJwY0ltcGwgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xyXG5cclxuICAgIHV0aWwuRXZlbnRFbWl0dGVyLmNhbGwodGhpcyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSUEMgaW1wbGVtZW50YXRpb24uIEJlY29tZXMgYG51bGxgIG9uY2UgdGhlIHNlcnZpY2UgaXMgZW5kZWQuXHJcbiAgICAgKiBAdHlwZSB7UlBDSW1wbHxudWxsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJwY0ltcGwgPSBycGNJbXBsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciByZXF1ZXN0cyBhcmUgbGVuZ3RoLWRlbGltaXRlZC5cclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlcXVlc3REZWxpbWl0ZWQgPSBCb29sZWFuKHJlcXVlc3REZWxpbWl0ZWQpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciByZXNwb25zZXMgYXJlIGxlbmd0aC1kZWxpbWl0ZWQuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNwb25zZURlbGltaXRlZCA9IEJvb2xlYW4ocmVzcG9uc2VEZWxpbWl0ZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbHMgYSBzZXJ2aWNlIG1ldGhvZCB0aHJvdWdoIHtAbGluayBycGMuU2VydmljZSNycGNJbXBsfHJwY0ltcGx9LlxyXG4gKiBAcGFyYW0ge01ldGhvZHxycGMuU2VydmljZU1ldGhvZDxUUmVxLFRSZXM+fSBtZXRob2QgUmVmbGVjdGVkIG9yIHN0YXRpYyBtZXRob2RcclxuICogQHBhcmFtIHtDb25zdHJ1Y3RvcjxUUmVxPn0gcmVxdWVzdEN0b3IgUmVxdWVzdCBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge0NvbnN0cnVjdG9yPFRSZXM+fSByZXNwb25zZUN0b3IgUmVzcG9uc2UgY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtUUmVxfFByb3BlcnRpZXM8VFJlcT59IHJlcXVlc3QgUmVxdWVzdCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdFxyXG4gKiBAcGFyYW0ge3JwYy5TZXJ2aWNlTWV0aG9kQ2FsbGJhY2s8VFJlcz59IGNhbGxiYWNrIFNlcnZpY2UgY2FsbGJhY2tcclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICogQHRlbXBsYXRlIFRSZXEgZXh0ZW5kcyBNZXNzYWdlPFRSZXE+XHJcbiAqIEB0ZW1wbGF0ZSBUUmVzIGV4dGVuZHMgTWVzc2FnZTxUUmVzPlxyXG4gKi9cclxuU2VydmljZS5wcm90b3R5cGUucnBjQ2FsbCA9IGZ1bmN0aW9uIHJwY0NhbGwobWV0aG9kLCByZXF1ZXN0Q3RvciwgcmVzcG9uc2VDdG9yLCByZXF1ZXN0LCBjYWxsYmFjaykge1xyXG5cclxuICAgIGlmICghcmVxdWVzdClcclxuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJyZXF1ZXN0IG11c3QgYmUgc3BlY2lmaWVkXCIpO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICghY2FsbGJhY2spXHJcbiAgICAgICAgcmV0dXJuIHV0aWwuYXNQcm9taXNlKHJwY0NhbGwsIHNlbGYsIG1ldGhvZCwgcmVxdWVzdEN0b3IsIHJlc3BvbnNlQ3RvciwgcmVxdWVzdCk7XHJcblxyXG4gICAgaWYgKCFzZWxmLnJwY0ltcGwpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhFcnJvcihcImFscmVhZHkgZW5kZWRcIikpOyB9LCAwKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYucnBjSW1wbChcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICByZXF1ZXN0Q3RvcltzZWxmLnJlcXVlc3REZWxpbWl0ZWQgPyBcImVuY29kZURlbGltaXRlZFwiIDogXCJlbmNvZGVcIl0ocmVxdWVzdCkuZmluaXNoKCksXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJwY0NhbGxiYWNrKGVyciwgcmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbWl0KFwiZXJyb3JcIiwgZXJyLCBtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZW5kKC8qIGVuZGVkQnlSUEMgKi8gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZXNwb25zZSBpbnN0YW5jZW9mIHJlc3BvbnNlQ3RvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlQ3RvcltzZWxmLnJlc3BvbnNlRGVsaW1pdGVkID8gXCJkZWNvZGVEZWxpbWl0ZWRcIiA6IFwiZGVjb2RlXCJdKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5lbWl0KFwiZXJyb3JcIiwgZXJyLCBtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5lbWl0KFwiZGF0YVwiLCByZXNwb25zZSwgbWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgc2VsZi5lbWl0KFwiZXJyb3JcIiwgZXJyLCBtZXRob2QpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGVycik7IH0sIDApO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRW5kcyB0aGlzIHNlcnZpY2UgYW5kIGVtaXRzIHRoZSBgZW5kYCBldmVudC5cclxuICogQHBhcmFtIHtib29sZWFufSBbZW5kZWRCeVJQQz1mYWxzZV0gV2hldGhlciB0aGUgc2VydmljZSBoYXMgYmVlbiBlbmRlZCBieSB0aGUgUlBDIGltcGxlbWVudGF0aW9uLlxyXG4gKiBAcmV0dXJucyB7cnBjLlNlcnZpY2V9IGB0aGlzYFxyXG4gKi9cclxuU2VydmljZS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gZW5kKGVuZGVkQnlSUEMpIHtcclxuICAgIGlmICh0aGlzLnJwY0ltcGwpIHtcclxuICAgICAgICBpZiAoIWVuZGVkQnlSUEMpIC8vIHNpZ25hbCBlbmQgdG8gcnBjSW1wbFxyXG4gICAgICAgICAgICB0aGlzLnJwY0ltcGwobnVsbCwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5ycGNJbXBsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVtaXQoXCJlbmRcIikub2ZmKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gU2VydmljZTtcclxuXHJcbi8vIGV4dGVuZHMgTmFtZXNwYWNlXHJcbnZhciBOYW1lc3BhY2UgPSByZXF1aXJlKFwiLi9uYW1lc3BhY2VcIik7XHJcbigoU2VydmljZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE5hbWVzcGFjZS5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IFNlcnZpY2UpLmNsYXNzTmFtZSA9IFwiU2VydmljZVwiO1xyXG5cclxudmFyIE1ldGhvZCA9IHJlcXVpcmUoXCIuL21ldGhvZFwiKSxcclxuICAgIHV0aWwgICA9IHJlcXVpcmUoXCIuL3V0aWxcIiksXHJcbiAgICBycGMgICAgPSByZXF1aXJlKFwiLi9ycGNcIik7XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIG5ldyBzZXJ2aWNlIGluc3RhbmNlLlxyXG4gKiBAY2xhc3NkZXNjIFJlZmxlY3RlZCBzZXJ2aWNlLlxyXG4gKiBAZXh0ZW5kcyBOYW1lc3BhY2VCYXNlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBTZXJ2aWNlIG5hbWVcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gW29wdGlvbnNdIFNlcnZpY2Ugb3B0aW9uc1xyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGFyZ3VtZW50cyBhcmUgaW52YWxpZFxyXG4gKi9cclxuZnVuY3Rpb24gU2VydmljZShuYW1lLCBvcHRpb25zKSB7XHJcbiAgICBOYW1lc3BhY2UuY2FsbCh0aGlzLCBuYW1lLCBvcHRpb25zKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcnZpY2UgbWV0aG9kcy5cclxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZyxNZXRob2Q+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1ldGhvZHMgPSB7fTsgLy8gdG9KU09OLCBtYXJrZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBtZXRob2RzIGFzIGFuIGFycmF5LlxyXG4gICAgICogQHR5cGUge01ldGhvZFtdfG51bGx9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9tZXRob2RzQXJyYXkgPSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogU2VydmljZSBkZXNjcmlwdG9yLlxyXG4gKiBAaW50ZXJmYWNlIElTZXJ2aWNlXHJcbiAqIEBleHRlbmRzIElOYW1lc3BhY2VcclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZyxJTWV0aG9kPn0gbWV0aG9kcyBNZXRob2QgZGVzY3JpcHRvcnNcclxuICovXHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIHNlcnZpY2UgZnJvbSBhIHNlcnZpY2UgZGVzY3JpcHRvci5cclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgU2VydmljZSBuYW1lXHJcbiAqIEBwYXJhbSB7SVNlcnZpY2V9IGpzb24gU2VydmljZSBkZXNjcmlwdG9yXHJcbiAqIEByZXR1cm5zIHtTZXJ2aWNlfSBDcmVhdGVkIHNlcnZpY2VcclxuICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBhcmd1bWVudHMgYXJlIGludmFsaWRcclxuICovXHJcblNlcnZpY2UuZnJvbUpTT04gPSBmdW5jdGlvbiBmcm9tSlNPTihuYW1lLCBqc29uKSB7XHJcbiAgICB2YXIgc2VydmljZSA9IG5ldyBTZXJ2aWNlKG5hbWUsIGpzb24ub3B0aW9ucyk7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKGpzb24ubWV0aG9kcylcclxuICAgICAgICBmb3IgKHZhciBuYW1lcyA9IE9iamVjdC5rZXlzKGpzb24ubWV0aG9kcyksIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHNlcnZpY2UuYWRkKE1ldGhvZC5mcm9tSlNPTihuYW1lc1tpXSwganNvbi5tZXRob2RzW25hbWVzW2ldXSkpO1xyXG4gICAgaWYgKGpzb24ubmVzdGVkKVxyXG4gICAgICAgIHNlcnZpY2UuYWRkSlNPTihqc29uLm5lc3RlZCk7XHJcbiAgICBzZXJ2aWNlLmNvbW1lbnQgPSBqc29uLmNvbW1lbnQ7XHJcbiAgICByZXR1cm4gc2VydmljZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGlzIHNlcnZpY2UgdG8gYSBzZXJ2aWNlIGRlc2NyaXB0b3IuXHJcbiAqIEBwYXJhbSB7SVRvSlNPTk9wdGlvbnN9IFt0b0pTT05PcHRpb25zXSBKU09OIGNvbnZlcnNpb24gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7SVNlcnZpY2V9IFNlcnZpY2UgZGVzY3JpcHRvclxyXG4gKi9cclxuU2VydmljZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKHRvSlNPTk9wdGlvbnMpIHtcclxuICAgIHZhciBpbmhlcml0ZWQgPSBOYW1lc3BhY2UucHJvdG90eXBlLnRvSlNPTi5jYWxsKHRoaXMsIHRvSlNPTk9wdGlvbnMpO1xyXG4gICAgdmFyIGtlZXBDb21tZW50cyA9IHRvSlNPTk9wdGlvbnMgPyBCb29sZWFuKHRvSlNPTk9wdGlvbnMua2VlcENvbW1lbnRzKSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHV0aWwudG9PYmplY3QoW1xyXG4gICAgICAgIFwib3B0aW9uc1wiICwgaW5oZXJpdGVkICYmIGluaGVyaXRlZC5vcHRpb25zIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBcIm1ldGhvZHNcIiAsIE5hbWVzcGFjZS5hcnJheVRvSlNPTih0aGlzLm1ldGhvZHNBcnJheSwgdG9KU09OT3B0aW9ucykgfHwgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge30sXHJcbiAgICAgICAgXCJuZXN0ZWRcIiAgLCBpbmhlcml0ZWQgJiYgaW5oZXJpdGVkLm5lc3RlZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgXCJjb21tZW50XCIgLCBrZWVwQ29tbWVudHMgPyB0aGlzLmNvbW1lbnQgOiB1bmRlZmluZWRcclxuICAgIF0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1ldGhvZHMgb2YgdGhpcyBzZXJ2aWNlIGFzIGFuIGFycmF5IGZvciBpdGVyYXRpb24uXHJcbiAqIEBuYW1lIFNlcnZpY2UjbWV0aG9kc0FycmF5XHJcbiAqIEB0eXBlIHtNZXRob2RbXX1cclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2VydmljZS5wcm90b3R5cGUsIFwibWV0aG9kc0FycmF5XCIsIHtcclxuICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGhvZHNBcnJheSB8fCAodGhpcy5fbWV0aG9kc0FycmF5ID0gdXRpbC50b0FycmF5KHRoaXMubWV0aG9kcykpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ2FjaGUoc2VydmljZSkge1xyXG4gICAgc2VydmljZS5fbWV0aG9kc0FycmF5ID0gbnVsbDtcclxuICAgIHJldHVybiBzZXJ2aWNlO1xyXG59XHJcblxyXG4vKipcclxuICogQG92ZXJyaWRlXHJcbiAqL1xyXG5TZXJ2aWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQobmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0aG9kc1tuYW1lXVxyXG4gICAgICAgIHx8IE5hbWVzcGFjZS5wcm90b3R5cGUuZ2V0LmNhbGwodGhpcywgbmFtZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQG92ZXJyaWRlXHJcbiAqL1xyXG5TZXJ2aWNlLnByb3RvdHlwZS5yZXNvbHZlQWxsID0gZnVuY3Rpb24gcmVzb2x2ZUFsbCgpIHtcclxuICAgIHZhciBtZXRob2RzID0gdGhpcy5tZXRob2RzQXJyYXk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgbWV0aG9kc1tpXS5yZXNvbHZlKCk7XHJcbiAgICByZXR1cm4gTmFtZXNwYWNlLnByb3RvdHlwZS5yZXNvbHZlLmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogQG92ZXJyaWRlXHJcbiAqL1xyXG5TZXJ2aWNlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQob2JqZWN0KSB7XHJcblxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICBpZiAodGhpcy5nZXQob2JqZWN0Lm5hbWUpKVxyXG4gICAgICAgIHRocm93IEVycm9yKFwiZHVwbGljYXRlIG5hbWUgJ1wiICsgb2JqZWN0Lm5hbWUgKyBcIicgaW4gXCIgKyB0aGlzKTtcclxuXHJcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTWV0aG9kKSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2RzW29iamVjdC5uYW1lXSA9IG9iamVjdDtcclxuICAgICAgICBvYmplY3QucGFyZW50ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gY2xlYXJDYWNoZSh0aGlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBOYW1lc3BhY2UucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIG9iamVjdCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQG92ZXJyaWRlXHJcbiAqL1xyXG5TZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUob2JqZWN0KSB7XHJcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTWV0aG9kKSB7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGhvZHNbb2JqZWN0Lm5hbWVdICE9PSBvYmplY3QpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKG9iamVjdCArIFwiIGlzIG5vdCBhIG1lbWJlciBvZiBcIiArIHRoaXMpO1xyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5tZXRob2RzW29iamVjdC5uYW1lXTtcclxuICAgICAgICBvYmplY3QucGFyZW50ID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gY2xlYXJDYWNoZSh0aGlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBOYW1lc3BhY2UucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMsIG9iamVjdCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHJ1bnRpbWUgc2VydmljZSB1c2luZyB0aGUgc3BlY2lmaWVkIHJwYyBpbXBsZW1lbnRhdGlvbi5cclxuICogQHBhcmFtIHtSUENJbXBsfSBycGNJbXBsIFJQQyBpbXBsZW1lbnRhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXF1ZXN0RGVsaW1pdGVkPWZhbHNlXSBXaGV0aGVyIHJlcXVlc3RzIGFyZSBsZW5ndGgtZGVsaW1pdGVkXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3BvbnNlRGVsaW1pdGVkPWZhbHNlXSBXaGV0aGVyIHJlc3BvbnNlcyBhcmUgbGVuZ3RoLWRlbGltaXRlZFxyXG4gKiBAcmV0dXJucyB7cnBjLlNlcnZpY2V9IFJQQyBzZXJ2aWNlLiBVc2VmdWwgd2hlcmUgcmVxdWVzdHMgYW5kL29yIHJlc3BvbnNlcyBhcmUgc3RyZWFtZWQuXHJcbiAqL1xyXG5TZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocnBjSW1wbCwgcmVxdWVzdERlbGltaXRlZCwgcmVzcG9uc2VEZWxpbWl0ZWQpIHtcclxuICAgIHZhciBycGNTZXJ2aWNlID0gbmV3IHJwYy5TZXJ2aWNlKHJwY0ltcGwsIHJlcXVlc3REZWxpbWl0ZWQsIHJlc3BvbnNlRGVsaW1pdGVkKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBtZXRob2Q7IGkgPCAvKiBpbml0aWFsaXplcyAqLyB0aGlzLm1ldGhvZHNBcnJheS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBtZXRob2ROYW1lID0gdXRpbC5sY0ZpcnN0KChtZXRob2QgPSB0aGlzLl9tZXRob2RzQXJyYXlbaV0pLnJlc29sdmUoKS5uYW1lKS5yZXBsYWNlKC9bXiRcXHdfXS9nLCBcIlwiKTtcclxuICAgICAgICBycGNTZXJ2aWNlW21ldGhvZE5hbWVdID0gdXRpbC5jb2RlZ2VuKFtcInJcIixcImNcIl0sIHV0aWwuaXNSZXNlcnZlZChtZXRob2ROYW1lKSA/IG1ldGhvZE5hbWUgKyBcIl9cIiA6IG1ldGhvZE5hbWUpKFwicmV0dXJuIHRoaXMucnBjQ2FsbChtLHEscyxyLGMpXCIpKHtcclxuICAgICAgICAgICAgbTogbWV0aG9kLFxyXG4gICAgICAgICAgICBxOiBtZXRob2QucmVzb2x2ZWRSZXF1ZXN0VHlwZS5jdG9yLFxyXG4gICAgICAgICAgICBzOiBtZXRob2QucmVzb2x2ZWRSZXNwb25zZVR5cGUuY3RvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJwY1NlcnZpY2U7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHRva2VuaXplO1xyXG5cclxudmFyIGRlbGltUmUgICAgICAgID0gL1tcXHN7fT07OltcXF0sJ1wiKCk8Pl0vZyxcclxuICAgIHN0cmluZ0RvdWJsZVJlID0gLyg/OlwiKFteXCJcXFxcXSooPzpcXFxcLlteXCJcXFxcXSopKilcIikvZyxcclxuICAgIHN0cmluZ1NpbmdsZVJlID0gLyg/OicoW14nXFxcXF0qKD86XFxcXC5bXidcXFxcXSopKiknKS9nO1xyXG5cclxudmFyIHNldENvbW1lbnRSZSA9IC9eICpbKi9dKyAqLyxcclxuICAgIHNldENvbW1lbnRBbHRSZSA9IC9eXFxzKlxcKj9cXC8qLyxcclxuICAgIHNldENvbW1lbnRTcGxpdFJlID0gL1xcbi9nLFxyXG4gICAgd2hpdGVzcGFjZVJlID0gL1xccy8sXHJcbiAgICB1bmVzY2FwZVJlID0gL1xcXFwoLj8pL2c7XHJcblxyXG52YXIgdW5lc2NhcGVNYXAgPSB7XHJcbiAgICBcIjBcIjogXCJcXDBcIixcclxuICAgIFwiclwiOiBcIlxcclwiLFxyXG4gICAgXCJuXCI6IFwiXFxuXCIsXHJcbiAgICBcInRcIjogXCJcXHRcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVuZXNjYXBlcyBhIHN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgdG8gdW5lc2NhcGVcclxuICogQHJldHVybnMge3N0cmluZ30gVW5lc2NhcGVkIHN0cmluZ1xyXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLHN0cmluZz59IG1hcCBTcGVjaWFsIGNoYXJhY3RlcnMgbWFwXHJcbiAqIEBtZW1iZXJvZiB0b2tlbml6ZVxyXG4gKi9cclxuZnVuY3Rpb24gdW5lc2NhcGUoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UodW5lc2NhcGVSZSwgZnVuY3Rpb24oJDAsICQxKSB7XHJcbiAgICAgICAgc3dpdGNoICgkMSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiXFxcXFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJDE7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5lc2NhcGVNYXBbJDFdIHx8IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnRva2VuaXplLnVuZXNjYXBlID0gdW5lc2NhcGU7XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgbmV4dCB0b2tlbiBhbmQgYWR2YW5jZXMuXHJcbiAqIEB0eXBlZGVmIFRva2VuaXplckhhbmRsZU5leHRcclxuICogQHR5cGUge2Z1bmN0aW9ufVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IE5leHQgdG9rZW4gb3IgYG51bGxgIG9uIGVvZlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBQZWVrcyBmb3IgdGhlIG5leHQgdG9rZW4uXHJcbiAqIEB0eXBlZGVmIFRva2VuaXplckhhbmRsZVBlZWtcclxuICogQHR5cGUge2Z1bmN0aW9ufVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IE5leHQgdG9rZW4gb3IgYG51bGxgIG9uIGVvZlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBQdXNoZXMgYSB0b2tlbiBiYWNrIHRvIHRoZSBzdGFjay5cclxuICogQHR5cGVkZWYgVG9rZW5pemVySGFuZGxlUHVzaFxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlbiBUb2tlblxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBTa2lwcyB0aGUgbmV4dCB0b2tlbi5cclxuICogQHR5cGVkZWYgVG9rZW5pemVySGFuZGxlU2tpcFxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBleHBlY3RlZCBFeHBlY3RlZCB0b2tlblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25hbD1mYWxzZV0gSWYgb3B0aW9uYWxcclxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHRva2VuIG1hdGNoZWRcclxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSB0b2tlbiBkaWRuJ3QgbWF0Y2ggYW5kIGlzIG5vdCBvcHRpb25hbFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBjb21tZW50IG9uIHRoZSBwcmV2aW91cyBsaW5lIG9yLCBhbHRlcm5hdGl2ZWx5LCB0aGUgbGluZSBjb21tZW50IG9uIHRoZSBzcGVjaWZpZWQgbGluZS5cclxuICogQHR5cGVkZWYgVG9rZW5pemVySGFuZGxlQ21udFxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGluZV0gTGluZSBudW1iZXJcclxuICogQHJldHVybnMge3N0cmluZ3xudWxsfSBDb21tZW50IHRleHQgb3IgYG51bGxgIGlmIG5vbmVcclxuICovXHJcblxyXG4vKipcclxuICogSGFuZGxlIG9iamVjdCByZXR1cm5lZCBmcm9tIHtAbGluayB0b2tlbml6ZX0uXHJcbiAqIEBpbnRlcmZhY2UgSVRva2VuaXplckhhbmRsZVxyXG4gKiBAcHJvcGVydHkge1Rva2VuaXplckhhbmRsZU5leHR9IG5leHQgR2V0cyB0aGUgbmV4dCB0b2tlbiBhbmQgYWR2YW5jZXMgKGBudWxsYCBvbiBlb2YpXHJcbiAqIEBwcm9wZXJ0eSB7VG9rZW5pemVySGFuZGxlUGVla30gcGVlayBQZWVrcyBmb3IgdGhlIG5leHQgdG9rZW4gKGBudWxsYCBvbiBlb2YpXHJcbiAqIEBwcm9wZXJ0eSB7VG9rZW5pemVySGFuZGxlUHVzaH0gcHVzaCBQdXNoZXMgYSB0b2tlbiBiYWNrIHRvIHRoZSBzdGFja1xyXG4gKiBAcHJvcGVydHkge1Rva2VuaXplckhhbmRsZVNraXB9IHNraXAgU2tpcHMgYSB0b2tlbiwgcmV0dXJucyBpdHMgcHJlc2VuY2UgYW5kIGFkdmFuY2VzIG9yLCBpZiBub24tb3B0aW9uYWwgYW5kIG5vdCBwcmVzZW50LCB0aHJvd3NcclxuICogQHByb3BlcnR5IHtUb2tlbml6ZXJIYW5kbGVDbW50fSBjbW50IEdldHMgdGhlIGNvbW1lbnQgb24gdGhlIHByZXZpb3VzIGxpbmUgb3IgdGhlIGxpbmUgY29tbWVudCBvbiB0aGUgc3BlY2lmaWVkIGxpbmUsIGlmIGFueVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZSBDdXJyZW50IGxpbmUgbnVtYmVyXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRva2VuaXplcyB0aGUgZ2l2ZW4gLnByb3RvIHNvdXJjZSBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCB1c2VmdWwgdXRpbGl0eSBmdW5jdGlvbnMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgU291cmNlIGNvbnRlbnRzXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWx0ZXJuYXRlQ29tbWVudE1vZGUgV2hldGhlciB3ZSBzaG91bGQgYWN0aXZhdGUgYWx0ZXJuYXRlIGNvbW1lbnQgcGFyc2luZyBtb2RlLlxyXG4gKiBAcmV0dXJucyB7SVRva2VuaXplckhhbmRsZX0gVG9rZW5pemVyIGhhbmRsZVxyXG4gKi9cclxuZnVuY3Rpb24gdG9rZW5pemUoc291cmNlLCBhbHRlcm5hdGVDb21tZW50TW9kZSkge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FsbGJhY2stcmV0dXJuICovXHJcbiAgICBzb3VyY2UgPSBzb3VyY2UudG9TdHJpbmcoKTtcclxuXHJcbiAgICB2YXIgb2Zmc2V0ID0gMCxcclxuICAgICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoLFxyXG4gICAgICAgIGxpbmUgPSAxLFxyXG4gICAgICAgIGNvbW1lbnRUeXBlID0gbnVsbCxcclxuICAgICAgICBjb21tZW50VGV4dCA9IG51bGwsXHJcbiAgICAgICAgY29tbWVudExpbmUgPSAwLFxyXG4gICAgICAgIGNvbW1lbnRMaW5lRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgc3RhY2sgPSBbXTtcclxuXHJcbiAgICB2YXIgc3RyaW5nRGVsaW0gPSBudWxsO1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgZm9yIGlsbGVnYWwgc3ludGF4LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN1YmplY3QgU3ViamVjdFxyXG4gICAgICogQHJldHVybnMge0Vycm9yfSBFcnJvciBjcmVhdGVkXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaWxsZWdhbChzdWJqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIEVycm9yKFwiaWxsZWdhbCBcIiArIHN1YmplY3QgKyBcIiAobGluZSBcIiArIGxpbmUgKyBcIilcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkcyBhIHN0cmluZyB0aWxsIGl0cyBlbmQuXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBTdHJpbmcgcmVhZFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlYWRTdHJpbmcoKSB7XHJcbiAgICAgICAgdmFyIHJlID0gc3RyaW5nRGVsaW0gPT09IFwiJ1wiID8gc3RyaW5nU2luZ2xlUmUgOiBzdHJpbmdEb3VibGVSZTtcclxuICAgICAgICByZS5sYXN0SW5kZXggPSBvZmZzZXQgLSAxO1xyXG4gICAgICAgIHZhciBtYXRjaCA9IHJlLmV4ZWMoc291cmNlKTtcclxuICAgICAgICBpZiAoIW1hdGNoKVxyXG4gICAgICAgICAgICB0aHJvdyBpbGxlZ2FsKFwic3RyaW5nXCIpO1xyXG4gICAgICAgIG9mZnNldCA9IHJlLmxhc3RJbmRleDtcclxuICAgICAgICBwdXNoKHN0cmluZ0RlbGltKTtcclxuICAgICAgICBzdHJpbmdEZWxpbSA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHVuZXNjYXBlKG1hdGNoWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNoYXJhY3RlciBhdCBgcG9zYCB3aXRoaW4gdGhlIHNvdXJjZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3MgUG9zaXRpb25cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IENoYXJhY3RlclxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNoYXJBdChwb3MpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlLmNoYXJBdChwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBjb21tZW50IHRleHQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU3RhcnQgb2Zmc2V0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZCBvZmZzZXRcclxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2V0Q29tbWVudChzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgY29tbWVudFR5cGUgPSBzb3VyY2UuY2hhckF0KHN0YXJ0KyspO1xyXG4gICAgICAgIGNvbW1lbnRMaW5lID0gbGluZTtcclxuICAgICAgICBjb21tZW50TGluZUVtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGxvb2tiYWNrO1xyXG4gICAgICAgIGlmIChhbHRlcm5hdGVDb21tZW50TW9kZSkge1xyXG4gICAgICAgICAgICBsb29rYmFjayA9IDI7ICAvLyBhbHRlcm5hdGUgY29tbWVudCBwYXJzaW5nOiBcIi8vXCIgb3IgXCIvKlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9va2JhY2sgPSAzOyAgLy8gXCIvLy9cIiBvciBcIi8qKlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21tZW50T2Zmc2V0ID0gc3RhcnQgLSBsb29rYmFjayxcclxuICAgICAgICAgICAgYztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICgtLWNvbW1lbnRPZmZzZXQgPCAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGMgPSBzb3VyY2UuY2hhckF0KGNvbW1lbnRPZmZzZXQpKSA9PT0gXCJcXG5cIikge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudExpbmVFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKGMgPT09IFwiIFwiIHx8IGMgPT09IFwiXFx0XCIpO1xyXG4gICAgICAgIHZhciBsaW5lcyA9IHNvdXJjZVxyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpXHJcbiAgICAgICAgICAgIC5zcGxpdChzZXRDb21tZW50U3BsaXRSZSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgbGluZXNbaV0gPSBsaW5lc1tpXVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYWx0ZXJuYXRlQ29tbWVudE1vZGUgPyBzZXRDb21tZW50QWx0UmUgOiBzZXRDb21tZW50UmUsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAudHJpbSgpO1xyXG4gICAgICAgIGNvbW1lbnRUZXh0ID0gbGluZXNcclxuICAgICAgICAgICAgLmpvaW4oXCJcXG5cIilcclxuICAgICAgICAgICAgLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0RvdWJsZVNsYXNoQ29tbWVudExpbmUoc3RhcnRPZmZzZXQpIHtcclxuICAgICAgICB2YXIgZW5kT2Zmc2V0ID0gZmluZEVuZE9mTGluZShzdGFydE9mZnNldCk7XHJcblxyXG4gICAgICAgIC8vIHNlZSBpZiByZW1haW5pbmcgbGluZSBtYXRjaGVzIGNvbW1lbnQgcGF0dGVyblxyXG4gICAgICAgIHZhciBsaW5lVGV4dCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnRPZmZzZXQsIGVuZE9mZnNldCk7XHJcbiAgICAgICAgLy8gbG9vayBmb3IgMSBvciAyIHNsYXNoZXMgc2luY2Ugc3RhcnRPZmZzZXQgd291bGQgYWxyZWFkeSBwb2ludCBwYXN0XHJcbiAgICAgICAgLy8gdGhlIGZpcnN0IHNsYXNoIHRoYXQgc3RhcnRlZCB0aGUgY29tbWVudC5cclxuICAgICAgICB2YXIgaXNDb21tZW50ID0gL15cXHMqXFwvezEsMn0vLnRlc3QobGluZVRleHQpO1xyXG4gICAgICAgIHJldHVybiBpc0NvbW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEVuZE9mTGluZShjdXJzb3IpIHtcclxuICAgICAgICAvLyBmaW5kIGVuZCBvZiBjdXJzb3IncyBsaW5lXHJcbiAgICAgICAgdmFyIGVuZE9mZnNldCA9IGN1cnNvcjtcclxuICAgICAgICB3aGlsZSAoZW5kT2Zmc2V0IDwgbGVuZ3RoICYmIGNoYXJBdChlbmRPZmZzZXQpICE9PSBcIlxcblwiKSB7XHJcbiAgICAgICAgICAgIGVuZE9mZnNldCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW5kT2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2J0YWlucyB0aGUgbmV4dCB0b2tlbi5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gTmV4dCB0b2tlbiBvciBgbnVsbGAgb24gZW9mXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIHN0YWNrLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKHN0cmluZ0RlbGltKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVhZFN0cmluZygpO1xyXG4gICAgICAgIHZhciByZXBlYXQsXHJcbiAgICAgICAgICAgIHByZXYsXHJcbiAgICAgICAgICAgIGN1cnIsXHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICBpc0RvYztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IGxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgd2hpbGUgKHdoaXRlc3BhY2VSZS50ZXN0KGN1cnIgPSBjaGFyQXQob2Zmc2V0KSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyID09PSBcIlxcblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICsrbGluZTtcclxuICAgICAgICAgICAgICAgIGlmICgrK29mZnNldCA9PT0gbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hhckF0KG9mZnNldCkgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKytvZmZzZXQgPT09IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGlsbGVnYWwoXCJjb21tZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJBdChvZmZzZXQpID09PSBcIi9cIikgeyAvLyBMaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbHRlcm5hdGVDb21tZW50TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgdHJpcGxlLXNsYXNoIGNvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEb2MgPSBjaGFyQXQoc3RhcnQgPSBvZmZzZXQgKyAxKSA9PT0gXCIvXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY2hhckF0KCsrb2Zmc2V0KSAhPT0gXCJcXG5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKytvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RvYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudChzdGFydCwgb2Zmc2V0IC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKytsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkb3VibGUtc2xhc2ggY29tbWVudHMsIGNvbnNvbGlkYXRpbmcgY29uc2VjdXRpdmUgbGluZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRG9jID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RvdWJsZVNsYXNoQ29tbWVudExpbmUob2Zmc2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEb2MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGZpbmRFbmRPZkxpbmUob2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoaXNEb3VibGVTbGFzaENvbW1lbnRMaW5lKG9mZnNldCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gTWF0aC5taW4obGVuZ3RoLCBmaW5kRW5kT2ZMaW5lKG9mZnNldCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnQoc3RhcnQsIG9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGN1cnIgPSBjaGFyQXQob2Zmc2V0KSkgPT09IFwiKlwiKSB7IC8qIEJsb2NrICovXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIC8qKiAocmVndWxhciBjb21tZW50IG1vZGUpIG9yIC8qIChhbHRlcm5hdGUgY29tbWVudCBtb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gb2Zmc2V0ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBpc0RvYyA9IGFsdGVybmF0ZUNvbW1lbnRNb2RlIHx8IGNoYXJBdChzdGFydCkgPT09IFwiKlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnIgPT09IFwiXFxuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrbGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKytvZmZzZXQgPT09IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgaWxsZWdhbChcImNvbW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldiA9IGN1cnI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjaGFyQXQob2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlIChwcmV2ICE9PSBcIipcIiB8fCBjdXJyICE9PSBcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgKytvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnQoc3RhcnQsIG9mZnNldCAtIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIvXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlIChyZXBlYXQpO1xyXG5cclxuICAgICAgICAvLyBvZmZzZXQgIT09IGxlbmd0aCBpZiB3ZSBnb3QgaGVyZVxyXG5cclxuICAgICAgICB2YXIgZW5kID0gb2Zmc2V0O1xyXG4gICAgICAgIGRlbGltUmUubGFzdEluZGV4ID0gMDtcclxuICAgICAgICB2YXIgZGVsaW0gPSBkZWxpbVJlLnRlc3QoY2hhckF0KGVuZCsrKSk7XHJcbiAgICAgICAgaWYgKCFkZWxpbSlcclxuICAgICAgICAgICAgd2hpbGUgKGVuZCA8IGxlbmd0aCAmJiAhZGVsaW1SZS50ZXN0KGNoYXJBdChlbmQpKSlcclxuICAgICAgICAgICAgICAgICsrZW5kO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHNvdXJjZS5zdWJzdHJpbmcob2Zmc2V0LCBvZmZzZXQgPSBlbmQpO1xyXG4gICAgICAgIGlmICh0b2tlbiA9PT0gXCJcXFwiXCIgfHwgdG9rZW4gPT09IFwiJ1wiKVxyXG4gICAgICAgICAgICBzdHJpbmdEZWxpbSA9IHRva2VuO1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1c2hlcyBhIHRva2VuIGJhY2sgdG8gdGhlIHN0YWNrLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIFRva2VuXHJcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHB1c2godG9rZW4pIHtcclxuICAgICAgICBzdGFjay5wdXNoKHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBlZWtzIGZvciB0aGUgbmV4dCB0b2tlbi5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gVG9rZW4gb3IgYG51bGxgIG9uIGVvZlxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHBlZWsoKSB7XHJcbiAgICAgICAgaWYgKCFzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gbmV4dCgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4gPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgcHVzaCh0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFja1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNraXBzIGEgdG9rZW4uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwZWN0ZWQgRXhwZWN0ZWQgdG9rZW5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbmFsPWZhbHNlXSBXaGV0aGVyIHRoZSB0b2tlbiBpcyBvcHRpb25hbFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCB3aGVuIHNraXBwZWQsIGBmYWxzZWAgaWYgbm90XHJcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gV2hlbiBhIHJlcXVpcmVkIHRva2VuIGlzIG5vdCBwcmVzZW50XHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2tpcChleHBlY3RlZCwgb3B0aW9uYWwpIHtcclxuICAgICAgICB2YXIgYWN0dWFsID0gcGVlaygpLFxyXG4gICAgICAgICAgICBlcXVhbHMgPSBhY3R1YWwgPT09IGV4cGVjdGVkO1xyXG4gICAgICAgIGlmIChlcXVhbHMpIHtcclxuICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25hbClcclxuICAgICAgICAgICAgdGhyb3cgaWxsZWdhbChcInRva2VuICdcIiArIGFjdHVhbCArIFwiJywgJ1wiICsgZXhwZWN0ZWQgKyBcIicgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGNvbW1lbnQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3RyYWlsaW5nTGluZV0gTGluZSBudW1iZXIgaWYgbG9va2luZyBmb3IgYSB0cmFpbGluZyBjb21tZW50XHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IENvbW1lbnQgdGV4dFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNtbnQodHJhaWxpbmdMaW5lKSB7XHJcbiAgICAgICAgdmFyIHJldCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRyYWlsaW5nTGluZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50TGluZSA9PT0gbGluZSAtIDEgJiYgKGFsdGVybmF0ZUNvbW1lbnRNb2RlIHx8IGNvbW1lbnRUeXBlID09PSBcIipcIiB8fCBjb21tZW50TGluZUVtcHR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gY29tbWVudFRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudExpbmUgPCB0cmFpbGluZ0xpbmUpIHtcclxuICAgICAgICAgICAgICAgIHBlZWsoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29tbWVudExpbmUgPT09IHRyYWlsaW5nTGluZSAmJiAhY29tbWVudExpbmVFbXB0eSAmJiAoYWx0ZXJuYXRlQ29tbWVudE1vZGUgfHwgY29tbWVudFR5cGUgPT09IFwiL1wiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gY29tbWVudFRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcclxuICAgICAgICBuZXh0OiBuZXh0LFxyXG4gICAgICAgIHBlZWs6IHBlZWssXHJcbiAgICAgICAgcHVzaDogcHVzaCxcclxuICAgICAgICBza2lwOiBza2lwLFxyXG4gICAgICAgIGNtbnQ6IGNtbnRcclxuICAgIH0sIFwibGluZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGxpbmU7IH1cclxuICAgIH0pO1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBjYWxsYmFjay1yZXR1cm4gKi9cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBUeXBlO1xyXG5cclxuLy8gZXh0ZW5kcyBOYW1lc3BhY2VcclxudmFyIE5hbWVzcGFjZSA9IHJlcXVpcmUoXCIuL25hbWVzcGFjZVwiKTtcclxuKChUeXBlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTmFtZXNwYWNlLnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yID0gVHlwZSkuY2xhc3NOYW1lID0gXCJUeXBlXCI7XHJcblxyXG52YXIgRW51bSAgICAgID0gcmVxdWlyZShcIi4vZW51bVwiKSxcclxuICAgIE9uZU9mICAgICA9IHJlcXVpcmUoXCIuL29uZW9mXCIpLFxyXG4gICAgRmllbGQgICAgID0gcmVxdWlyZShcIi4vZmllbGRcIiksXHJcbiAgICBNYXBGaWVsZCAgPSByZXF1aXJlKFwiLi9tYXBmaWVsZFwiKSxcclxuICAgIFNlcnZpY2UgICA9IHJlcXVpcmUoXCIuL3NlcnZpY2VcIiksXHJcbiAgICBNZXNzYWdlICAgPSByZXF1aXJlKFwiLi9tZXNzYWdlXCIpLFxyXG4gICAgUmVhZGVyICAgID0gcmVxdWlyZShcIi4vcmVhZGVyXCIpLFxyXG4gICAgV3JpdGVyICAgID0gcmVxdWlyZShcIi4vd3JpdGVyXCIpLFxyXG4gICAgdXRpbCAgICAgID0gcmVxdWlyZShcIi4vdXRpbFwiKSxcclxuICAgIGVuY29kZXIgICA9IHJlcXVpcmUoXCIuL2VuY29kZXJcIiksXHJcbiAgICBkZWNvZGVyICAgPSByZXF1aXJlKFwiLi9kZWNvZGVyXCIpLFxyXG4gICAgdmVyaWZpZXIgID0gcmVxdWlyZShcIi4vdmVyaWZpZXJcIiksXHJcbiAgICBjb252ZXJ0ZXIgPSByZXF1aXJlKFwiLi9jb252ZXJ0ZXJcIiksXHJcbiAgICB3cmFwcGVycyAgPSByZXF1aXJlKFwiLi93cmFwcGVyc1wiKTtcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbmV3IHJlZmxlY3RlZCBtZXNzYWdlIHR5cGUgaW5zdGFuY2UuXHJcbiAqIEBjbGFzc2Rlc2MgUmVmbGVjdGVkIG1lc3NhZ2UgdHlwZS5cclxuICogQGV4dGVuZHMgTmFtZXNwYWNlQmFzZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTWVzc2FnZSBuYW1lXHJcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IFtvcHRpb25zXSBEZWNsYXJlZCBvcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBUeXBlKG5hbWUsIG9wdGlvbnMpIHtcclxuICAgIE5hbWVzcGFjZS5jYWxsKHRoaXMsIG5hbWUsIG9wdGlvbnMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWVzc2FnZSBmaWVsZHMuXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsRmllbGQ+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmZpZWxkcyA9IHt9OyAgLy8gdG9KU09OLCBtYXJrZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uZW9mcyBkZWNsYXJlZCB3aXRoaW4gdGhpcyBuYW1lc3BhY2UsIGlmIGFueS5cclxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZyxPbmVPZj59XHJcbiAgICAgKi9cclxuICAgIHRoaXMub25lb2ZzID0gdW5kZWZpbmVkOyAvLyB0b0pTT05cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dGVuc2lvbiByYW5nZXMsIGlmIGFueS5cclxuICAgICAqIEB0eXBlIHtudW1iZXJbXVtdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmV4dGVuc2lvbnMgPSB1bmRlZmluZWQ7IC8vIHRvSlNPTlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXJ2ZWQgcmFuZ2VzLCBpZiBhbnkuXHJcbiAgICAgKiBAdHlwZSB7QXJyYXkuPG51bWJlcltdfHN0cmluZz59XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzZXJ2ZWQgPSB1bmRlZmluZWQ7IC8vIHRvSlNPTlxyXG5cclxuICAgIC8qP1xyXG4gICAgICogV2hldGhlciB0aGlzIHR5cGUgaXMgYSBsZWdhY3kgZ3JvdXAuXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ3JvdXAgPSB1bmRlZmluZWQ7IC8vIHRvSlNPTlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGVkIGZpZWxkcyBieSBpZC5cclxuICAgICAqIEB0eXBlIHtPYmplY3QuPG51bWJlcixGaWVsZD58bnVsbH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2ZpZWxkc0J5SWQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGVkIGZpZWxkcyBhcyBhbiBhcnJheS5cclxuICAgICAqIEB0eXBlIHtGaWVsZFtdfG51bGx9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9maWVsZHNBcnJheSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZWQgb25lb2ZzIGFzIGFuIGFycmF5LlxyXG4gICAgICogQHR5cGUge09uZU9mW118bnVsbH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX29uZW9mc0FycmF5ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCBjb25zdHJ1Y3Rvci5cclxuICAgICAqIEB0eXBlIHtDb25zdHJ1Y3Rvcjx7fT59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9jdG9yID0gbnVsbDtcclxufVxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVHlwZS5wcm90b3R5cGUsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1lc3NhZ2UgZmllbGRzIGJ5IGlkLlxyXG4gICAgICogQG5hbWUgVHlwZSNmaWVsZHNCeUlkXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxudW1iZXIsRmllbGQ+fVxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKi9cclxuICAgIGZpZWxkc0J5SWQ6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9maWVsZHNCeUlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkc0J5SWQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9maWVsZHNCeUlkID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5maWVsZHMpLCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1tuYW1lc1tpXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBmaWVsZC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9maWVsZHNCeUlkW2lkXSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImR1cGxpY2F0ZSBpZCBcIiArIGlkICsgXCIgaW4gXCIgKyB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWVsZHNCeUlkW2lkXSA9IGZpZWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maWVsZHNCeUlkO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWVsZHMgb2YgdGhpcyBtZXNzYWdlIGFzIGFuIGFycmF5IGZvciBpdGVyYXRpb24uXHJcbiAgICAgKiBAbmFtZSBUeXBlI2ZpZWxkc0FycmF5XHJcbiAgICAgKiBAdHlwZSB7RmllbGRbXX1cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICovXHJcbiAgICBmaWVsZHNBcnJheToge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maWVsZHNBcnJheSB8fCAodGhpcy5fZmllbGRzQXJyYXkgPSB1dGlsLnRvQXJyYXkodGhpcy5maWVsZHMpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT25lb2ZzIG9mIHRoaXMgbWVzc2FnZSBhcyBhbiBhcnJheSBmb3IgaXRlcmF0aW9uLlxyXG4gICAgICogQG5hbWUgVHlwZSNvbmVvZnNBcnJheVxyXG4gICAgICogQHR5cGUge09uZU9mW119XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqL1xyXG4gICAgb25lb2ZzQXJyYXk6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb25lb2ZzQXJyYXkgfHwgKHRoaXMuX29uZW9mc0FycmF5ID0gdXRpbC50b0FycmF5KHRoaXMub25lb2ZzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZWdpc3RlcmVkIGNvbnN0cnVjdG9yLCBpZiBhbnkgcmVnaXN0ZXJlZCwgb3RoZXJ3aXNlIGEgZ2VuZXJpYyBjb25zdHJ1Y3Rvci5cclxuICAgICAqIEFzc2lnbmluZyBhIGZ1bmN0aW9uIHJlcGxhY2VzIHRoZSBpbnRlcm5hbCBjb25zdHJ1Y3Rvci4gSWYgdGhlIGZ1bmN0aW9uIGRvZXMgbm90IGV4dGVuZCB7QGxpbmsgTWVzc2FnZX0geWV0LCBpdHMgcHJvdG90eXBlIHdpbGwgYmUgc2V0dXAgYWNjb3JkaW5nbHkgYW5kIHN0YXRpYyBtZXRob2RzIHdpbGwgYmUgcG9wdWxhdGVkLiBJZiBpdCBhbHJlYWR5IGV4dGVuZHMge0BsaW5rIE1lc3NhZ2V9LCBpdCB3aWxsIGp1c3QgcmVwbGFjZSB0aGUgaW50ZXJuYWwgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAbmFtZSBUeXBlI2N0b3JcclxuICAgICAqIEB0eXBlIHtDb25zdHJ1Y3Rvcjx7fT59XHJcbiAgICAgKi9cclxuICAgIGN0b3I6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3RvciB8fCAodGhpcy5jdG9yID0gVHlwZS5nZW5lcmF0ZUNvbnN0cnVjdG9yKHRoaXMpKCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbihjdG9yKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBFbnN1cmUgcHJvcGVyIHByb3RvdHlwZVxyXG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gY3Rvci5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgIGlmICghKHByb3RvdHlwZSBpbnN0YW5jZW9mIE1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAoY3Rvci5wcm90b3R5cGUgPSBuZXcgTWVzc2FnZSgpKS5jb25zdHJ1Y3RvciA9IGN0b3I7XHJcbiAgICAgICAgICAgICAgICB1dGlsLm1lcmdlKGN0b3IucHJvdG90eXBlLCBwcm90b3R5cGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDbGFzc2VzIGFuZCBtZXNzYWdlcyByZWZlcmVuY2UgdGhlaXIgcmVmbGVjdGVkIHR5cGVcclxuICAgICAgICAgICAgY3Rvci4kdHlwZSA9IGN0b3IucHJvdG90eXBlLiR0eXBlID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8vIE1peCBpbiBzdGF0aWMgbWV0aG9kc1xyXG4gICAgICAgICAgICB1dGlsLm1lcmdlKGN0b3IsIE1lc3NhZ2UsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3RvciA9IGN0b3I7XHJcblxyXG4gICAgICAgICAgICAvLyBNZXNzYWdlcyBoYXZlIG5vbi1lbnVtZXJhYmxlIGRlZmF1bHQgdmFsdWVzIG9uIHRoZWlyIHByb3RvdHlwZVxyXG4gICAgICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgLyogaW5pdGlhbGl6ZXMgKi8gdGhpcy5maWVsZHNBcnJheS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpZWxkc0FycmF5W2ldLnJlc29sdmUoKTsgLy8gZW5zdXJlcyBhIHByb3BlciB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgLy8gTWVzc2FnZXMgaGF2ZSBub24tZW51bWVyYWJsZSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGZvciBlYWNoIHZpcnR1YWwgb25lb2YgZmllbGRcclxuICAgICAgICAgICAgdmFyIGN0b3JQcm9wZXJ0aWVzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAvKiBpbml0aWFsaXplcyAqLyB0aGlzLm9uZW9mc0FycmF5Lmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAgY3RvclByb3BlcnRpZXNbdGhpcy5fb25lb2ZzQXJyYXlbaV0ucmVzb2x2ZSgpLm5hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldDogdXRpbC5vbmVPZkdldHRlcih0aGlzLl9vbmVvZnNBcnJheVtpXS5vbmVvZiksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0OiB1dGlsLm9uZU9mU2V0dGVyKHRoaXMuX29uZW9mc0FycmF5W2ldLm9uZW9mKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGkpXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjdG9yLnByb3RvdHlwZSwgY3RvclByb3BlcnRpZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gZm9yIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICogQHBhcmFtIHtUeXBlfSBtdHlwZSBNZXNzYWdlIHR5cGVcclxuICogQHJldHVybnMge0NvZGVnZW59IENvZGVnZW4gaW5zdGFuY2VcclxuICovXHJcblR5cGUuZ2VuZXJhdGVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIGdlbmVyYXRlQ29uc3RydWN0b3IobXR5cGUpIHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXHJcbiAgICB2YXIgZ2VuID0gdXRpbC5jb2RlZ2VuKFtcInBcIl0sIG10eXBlLm5hbWUpO1xyXG4gICAgLy8gZXhwbGljaXRseSBpbml0aWFsaXplIG11dGFibGUgb2JqZWN0L2FycmF5IGZpZWxkcyBzbyB0aGF0IHRoZXNlIGFyZW4ndCBqdXN0IGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGVcclxuICAgIGZvciAodmFyIGkgPSAwLCBmaWVsZDsgaSA8IG10eXBlLmZpZWxkc0FycmF5Lmxlbmd0aDsgKytpKVxyXG4gICAgICAgIGlmICgoZmllbGQgPSBtdHlwZS5fZmllbGRzQXJyYXlbaV0pLm1hcCkgZ2VuXHJcbiAgICAgICAgICAgIChcInRoaXMlcz17fVwiLCB1dGlsLnNhZmVQcm9wKGZpZWxkLm5hbWUpKTtcclxuICAgICAgICBlbHNlIGlmIChmaWVsZC5yZXBlYXRlZCkgZ2VuXHJcbiAgICAgICAgICAgIChcInRoaXMlcz1bXVwiLCB1dGlsLnNhZmVQcm9wKGZpZWxkLm5hbWUpKTtcclxuICAgIHJldHVybiBnZW5cclxuICAgIChcImlmKHApZm9yKHZhciBrcz1PYmplY3Qua2V5cyhwKSxpPTA7aTxrcy5sZW5ndGg7KytpKWlmKHBba3NbaV1dIT1udWxsKVwiKSAvLyBvbWl0IHVuZGVmaW5lZCBvciBudWxsXHJcbiAgICAgICAgKFwidGhpc1trc1tpXV09cFtrc1tpXV1cIik7XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGVhckNhY2hlKHR5cGUpIHtcclxuICAgIHR5cGUuX2ZpZWxkc0J5SWQgPSB0eXBlLl9maWVsZHNBcnJheSA9IHR5cGUuX29uZW9mc0FycmF5ID0gbnVsbDtcclxuICAgIGRlbGV0ZSB0eXBlLmVuY29kZTtcclxuICAgIGRlbGV0ZSB0eXBlLmRlY29kZTtcclxuICAgIGRlbGV0ZSB0eXBlLnZlcmlmeTtcclxuICAgIHJldHVybiB0eXBlO1xyXG59XHJcblxyXG4vKipcclxuICogTWVzc2FnZSB0eXBlIGRlc2NyaXB0b3IuXHJcbiAqIEBpbnRlcmZhY2UgSVR5cGVcclxuICogQGV4dGVuZHMgSU5hbWVzcGFjZVxyXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLElPbmVPZj59IFtvbmVvZnNdIE9uZW9mIGRlc2NyaXB0b3JzXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsSUZpZWxkPn0gZmllbGRzIEZpZWxkIGRlc2NyaXB0b3JzXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW11bXX0gW2V4dGVuc2lvbnNdIEV4dGVuc2lvbiByYW5nZXNcclxuICogQHByb3BlcnR5IHtudW1iZXJbXVtdfSBbcmVzZXJ2ZWRdIFJlc2VydmVkIHJhbmdlc1xyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtncm91cD1mYWxzZV0gV2hldGhlciBhIGxlZ2FjeSBncm91cCBvciBub3RcclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG1lc3NhZ2UgdHlwZSBmcm9tIGEgbWVzc2FnZSB0eXBlIGRlc2NyaXB0b3IuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE1lc3NhZ2UgbmFtZVxyXG4gKiBAcGFyYW0ge0lUeXBlfSBqc29uIE1lc3NhZ2UgdHlwZSBkZXNjcmlwdG9yXHJcbiAqIEByZXR1cm5zIHtUeXBlfSBDcmVhdGVkIG1lc3NhZ2UgdHlwZVxyXG4gKi9cclxuVHlwZS5mcm9tSlNPTiA9IGZ1bmN0aW9uIGZyb21KU09OKG5hbWUsIGpzb24pIHtcclxuICAgIHZhciB0eXBlID0gbmV3IFR5cGUobmFtZSwganNvbi5vcHRpb25zKTtcclxuICAgIHR5cGUuZXh0ZW5zaW9ucyA9IGpzb24uZXh0ZW5zaW9ucztcclxuICAgIHR5cGUucmVzZXJ2ZWQgPSBqc29uLnJlc2VydmVkO1xyXG4gICAgdmFyIG5hbWVzID0gT2JqZWN0LmtleXMoanNvbi5maWVsZHMpLFxyXG4gICAgICAgIGkgPSAwO1xyXG4gICAgZm9yICg7IGkgPCBuYW1lcy5sZW5ndGg7ICsraSlcclxuICAgICAgICB0eXBlLmFkZChcclxuICAgICAgICAgICAgKCB0eXBlb2YganNvbi5maWVsZHNbbmFtZXNbaV1dLmtleVR5cGUgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgPyBNYXBGaWVsZC5mcm9tSlNPTlxyXG4gICAgICAgICAgICA6IEZpZWxkLmZyb21KU09OICkobmFtZXNbaV0sIGpzb24uZmllbGRzW25hbWVzW2ldXSlcclxuICAgICAgICApO1xyXG4gICAgaWYgKGpzb24ub25lb2ZzKVxyXG4gICAgICAgIGZvciAobmFtZXMgPSBPYmplY3Qua2V5cyhqc29uLm9uZW9mcyksIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHR5cGUuYWRkKE9uZU9mLmZyb21KU09OKG5hbWVzW2ldLCBqc29uLm9uZW9mc1tuYW1lc1tpXV0pKTtcclxuICAgIGlmIChqc29uLm5lc3RlZClcclxuICAgICAgICBmb3IgKG5hbWVzID0gT2JqZWN0LmtleXMoanNvbi5uZXN0ZWQpLCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXN0ZWQgPSBqc29uLm5lc3RlZFtuYW1lc1tpXV07XHJcbiAgICAgICAgICAgIHR5cGUuYWRkKCAvLyBtb3N0IHRvIGxlYXN0IGxpa2VseVxyXG4gICAgICAgICAgICAgICAgKCBuZXN0ZWQuaWQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBGaWVsZC5mcm9tSlNPTlxyXG4gICAgICAgICAgICAgICAgOiBuZXN0ZWQuZmllbGRzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gVHlwZS5mcm9tSlNPTlxyXG4gICAgICAgICAgICAgICAgOiBuZXN0ZWQudmFsdWVzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gRW51bS5mcm9tSlNPTlxyXG4gICAgICAgICAgICAgICAgOiBuZXN0ZWQubWV0aG9kcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IFNlcnZpY2UuZnJvbUpTT05cclxuICAgICAgICAgICAgICAgIDogTmFtZXNwYWNlLmZyb21KU09OICkobmFtZXNbaV0sIG5lc3RlZClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICBpZiAoanNvbi5leHRlbnNpb25zICYmIGpzb24uZXh0ZW5zaW9ucy5sZW5ndGgpXHJcbiAgICAgICAgdHlwZS5leHRlbnNpb25zID0ganNvbi5leHRlbnNpb25zO1xyXG4gICAgaWYgKGpzb24ucmVzZXJ2ZWQgJiYganNvbi5yZXNlcnZlZC5sZW5ndGgpXHJcbiAgICAgICAgdHlwZS5yZXNlcnZlZCA9IGpzb24ucmVzZXJ2ZWQ7XHJcbiAgICBpZiAoanNvbi5ncm91cClcclxuICAgICAgICB0eXBlLmdyb3VwID0gdHJ1ZTtcclxuICAgIGlmIChqc29uLmNvbW1lbnQpXHJcbiAgICAgICAgdHlwZS5jb21tZW50ID0ganNvbi5jb21tZW50O1xyXG4gICAgcmV0dXJuIHR5cGU7XHJcbn07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhpcyBtZXNzYWdlIHR5cGUgdG8gYSBtZXNzYWdlIHR5cGUgZGVzY3JpcHRvci5cclxuICogQHBhcmFtIHtJVG9KU09OT3B0aW9uc30gW3RvSlNPTk9wdGlvbnNdIEpTT04gY29udmVyc2lvbiBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtJVHlwZX0gTWVzc2FnZSB0eXBlIGRlc2NyaXB0b3JcclxuICovXHJcblR5cGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTih0b0pTT05PcHRpb25zKSB7XHJcbiAgICB2YXIgaW5oZXJpdGVkID0gTmFtZXNwYWNlLnByb3RvdHlwZS50b0pTT04uY2FsbCh0aGlzLCB0b0pTT05PcHRpb25zKTtcclxuICAgIHZhciBrZWVwQ29tbWVudHMgPSB0b0pTT05PcHRpb25zID8gQm9vbGVhbih0b0pTT05PcHRpb25zLmtlZXBDb21tZW50cykgOiBmYWxzZTtcclxuICAgIHJldHVybiB1dGlsLnRvT2JqZWN0KFtcclxuICAgICAgICBcIm9wdGlvbnNcIiAgICAsIGluaGVyaXRlZCAmJiBpbmhlcml0ZWQub3B0aW9ucyB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgXCJvbmVvZnNcIiAgICAgLCBOYW1lc3BhY2UuYXJyYXlUb0pTT04odGhpcy5vbmVvZnNBcnJheSwgdG9KU09OT3B0aW9ucyksXHJcbiAgICAgICAgXCJmaWVsZHNcIiAgICAgLCBOYW1lc3BhY2UuYXJyYXlUb0pTT04odGhpcy5maWVsZHNBcnJheS5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7IHJldHVybiAhb2JqLmRlY2xhcmluZ0ZpZWxkOyB9KSwgdG9KU09OT3B0aW9ucykgfHwge30sXHJcbiAgICAgICAgXCJleHRlbnNpb25zXCIgLCB0aGlzLmV4dGVuc2lvbnMgJiYgdGhpcy5leHRlbnNpb25zLmxlbmd0aCA/IHRoaXMuZXh0ZW5zaW9ucyA6IHVuZGVmaW5lZCxcclxuICAgICAgICBcInJlc2VydmVkXCIgICAsIHRoaXMucmVzZXJ2ZWQgJiYgdGhpcy5yZXNlcnZlZC5sZW5ndGggPyB0aGlzLnJlc2VydmVkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIFwiZ3JvdXBcIiAgICAgICwgdGhpcy5ncm91cCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgXCJuZXN0ZWRcIiAgICAgLCBpbmhlcml0ZWQgJiYgaW5oZXJpdGVkLm5lc3RlZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgXCJjb21tZW50XCIgICAgLCBrZWVwQ29tbWVudHMgPyB0aGlzLmNvbW1lbnQgOiB1bmRlZmluZWRcclxuICAgIF0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBvdmVycmlkZVxyXG4gKi9cclxuVHlwZS5wcm90b3R5cGUucmVzb2x2ZUFsbCA9IGZ1bmN0aW9uIHJlc29sdmVBbGwoKSB7XHJcbiAgICB2YXIgZmllbGRzID0gdGhpcy5maWVsZHNBcnJheSwgaSA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IGZpZWxkcy5sZW5ndGgpXHJcbiAgICAgICAgZmllbGRzW2krK10ucmVzb2x2ZSgpO1xyXG4gICAgdmFyIG9uZW9mcyA9IHRoaXMub25lb2ZzQXJyYXk7IGkgPSAwO1xyXG4gICAgd2hpbGUgKGkgPCBvbmVvZnMubGVuZ3RoKVxyXG4gICAgICAgIG9uZW9mc1tpKytdLnJlc29sdmUoKTtcclxuICAgIHJldHVybiBOYW1lc3BhY2UucHJvdG90eXBlLnJlc29sdmVBbGwuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAb3ZlcnJpZGVcclxuICovXHJcblR5cGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZHNbbmFtZV1cclxuICAgICAgICB8fCB0aGlzLm9uZW9mcyAmJiB0aGlzLm9uZW9mc1tuYW1lXVxyXG4gICAgICAgIHx8IHRoaXMubmVzdGVkICYmIHRoaXMubmVzdGVkW25hbWVdXHJcbiAgICAgICAgfHwgbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgbmVzdGVkIG9iamVjdCB0byB0aGlzIHR5cGUuXHJcbiAqIEBwYXJhbSB7UmVmbGVjdGlvbk9iamVjdH0gb2JqZWN0IE5lc3RlZCBvYmplY3QgdG8gYWRkXHJcbiAqIEByZXR1cm5zIHtUeXBlfSBgdGhpc2BcclxuICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBhcmd1bWVudHMgYXJlIGludmFsaWRcclxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZXJlIGlzIGFscmVhZHkgYSBuZXN0ZWQgb2JqZWN0IHdpdGggdGhpcyBuYW1lIG9yLCBpZiBhIGZpZWxkLCB3aGVuIHRoZXJlIGlzIGFscmVhZHkgYSBmaWVsZCB3aXRoIHRoaXMgaWRcclxuICovXHJcblR5cGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChvYmplY3QpIHtcclxuXHJcbiAgICBpZiAodGhpcy5nZXQob2JqZWN0Lm5hbWUpKVxyXG4gICAgICAgIHRocm93IEVycm9yKFwiZHVwbGljYXRlIG5hbWUgJ1wiICsgb2JqZWN0Lm5hbWUgKyBcIicgaW4gXCIgKyB0aGlzKTtcclxuXHJcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgRmllbGQgJiYgb2JqZWN0LmV4dGVuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gTk9URTogRXh0ZW5zaW9uIGZpZWxkcyBhcmVuJ3QgYWN0dWFsIGZpZWxkcyBvbiB0aGUgZGVjbGFyaW5nIHR5cGUsIGJ1dCBuZXN0ZWQgb2JqZWN0cy5cclxuICAgICAgICAvLyBUaGUgcm9vdCBvYmplY3QgdGFrZXMgY2FyZSBvZiBhZGRpbmcgZGlzdGluY3Qgc2lzdGVyLWZpZWxkcyB0byB0aGUgcmVzcGVjdGl2ZSBleHRlbmRlZFxyXG4gICAgICAgIC8vIHR5cGUgaW5zdGVhZC5cclxuXHJcbiAgICAgICAgLy8gYXZvaWRzIGNhbGxpbmcgdGhlIGdldHRlciBpZiBub3QgYWJzb2x1dGVseSBuZWNlc3NhcnkgYmVjYXVzZSBpdCdzIGNhbGxlZCBxdWl0ZSBmcmVxdWVudGx5XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpZWxkc0J5SWQgPyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB0aGlzLl9maWVsZHNCeUlkW29iamVjdC5pZF0gOiB0aGlzLmZpZWxkc0J5SWRbb2JqZWN0LmlkXSlcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJkdXBsaWNhdGUgaWQgXCIgKyBvYmplY3QuaWQgKyBcIiBpbiBcIiArIHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVzZXJ2ZWRJZChvYmplY3QuaWQpKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcImlkIFwiICsgb2JqZWN0LmlkICsgXCIgaXMgcmVzZXJ2ZWQgaW4gXCIgKyB0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy5pc1Jlc2VydmVkTmFtZShvYmplY3QubmFtZSkpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwibmFtZSAnXCIgKyBvYmplY3QubmFtZSArIFwiJyBpcyByZXNlcnZlZCBpbiBcIiArIHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmVudClcclxuICAgICAgICAgICAgb2JqZWN0LnBhcmVudC5yZW1vdmUob2JqZWN0KTtcclxuICAgICAgICB0aGlzLmZpZWxkc1tvYmplY3QubmFtZV0gPSBvYmplY3Q7XHJcbiAgICAgICAgb2JqZWN0Lm1lc3NhZ2UgPSB0aGlzO1xyXG4gICAgICAgIG9iamVjdC5vbkFkZCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gY2xlYXJDYWNoZSh0aGlzKTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBPbmVPZikge1xyXG4gICAgICAgIGlmICghdGhpcy5vbmVvZnMpXHJcbiAgICAgICAgICAgIHRoaXMub25lb2ZzID0ge307XHJcbiAgICAgICAgdGhpcy5vbmVvZnNbb2JqZWN0Lm5hbWVdID0gb2JqZWN0O1xyXG4gICAgICAgIG9iamVjdC5vbkFkZCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gY2xlYXJDYWNoZSh0aGlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBOYW1lc3BhY2UucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIG9iamVjdCk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhIG5lc3RlZCBvYmplY3QgZnJvbSB0aGlzIHR5cGUuXHJcbiAqIEBwYXJhbSB7UmVmbGVjdGlvbk9iamVjdH0gb2JqZWN0IE5lc3RlZCBvYmplY3QgdG8gcmVtb3ZlXHJcbiAqIEByZXR1cm5zIHtUeXBlfSBgdGhpc2BcclxuICogQHRocm93cyB7VHlwZUVycm9yfSBJZiBhcmd1bWVudHMgYXJlIGludmFsaWRcclxuICogQHRocm93cyB7RXJyb3J9IElmIGBvYmplY3RgIGlzIG5vdCBhIG1lbWJlciBvZiB0aGlzIHR5cGVcclxuICovXHJcblR5cGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShvYmplY3QpIHtcclxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBGaWVsZCAmJiBvYmplY3QuZXh0ZW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBTZWUgVHlwZSNhZGQgZm9yIHRoZSByZWFzb24gd2h5IGV4dGVuc2lvbiBmaWVsZHMgYXJlIGV4Y2x1ZGVkIGhlcmUuXHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmICghdGhpcy5maWVsZHMgfHwgdGhpcy5maWVsZHNbb2JqZWN0Lm5hbWVdICE9PSBvYmplY3QpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKG9iamVjdCArIFwiIGlzIG5vdCBhIG1lbWJlciBvZiBcIiArIHRoaXMpO1xyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5maWVsZHNbb2JqZWN0Lm5hbWVdO1xyXG4gICAgICAgIG9iamVjdC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIG9iamVjdC5vblJlbW92ZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gY2xlYXJDYWNoZSh0aGlzKTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBPbmVPZikge1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIXRoaXMub25lb2ZzIHx8IHRoaXMub25lb2ZzW29iamVjdC5uYW1lXSAhPT0gb2JqZWN0KVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihvYmplY3QgKyBcIiBpcyBub3QgYSBtZW1iZXIgb2YgXCIgKyB0aGlzKTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMub25lb2ZzW29iamVjdC5uYW1lXTtcclxuICAgICAgICBvYmplY3QucGFyZW50ID0gbnVsbDtcclxuICAgICAgICBvYmplY3Qub25SZW1vdmUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIGNsZWFyQ2FjaGUodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTmFtZXNwYWNlLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzLCBvYmplY3QpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgaWQgaXMgcmVzZXJ2ZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBJZCB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgcmVzZXJ2ZWQsIG90aGVyd2lzZSBgZmFsc2VgXHJcbiAqL1xyXG5UeXBlLnByb3RvdHlwZS5pc1Jlc2VydmVkSWQgPSBmdW5jdGlvbiBpc1Jlc2VydmVkSWQoaWQpIHtcclxuICAgIHJldHVybiBOYW1lc3BhY2UuaXNSZXNlcnZlZElkKHRoaXMucmVzZXJ2ZWQsIGlkKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIG5hbWUgaXMgcmVzZXJ2ZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHJlc2VydmVkLCBvdGhlcndpc2UgYGZhbHNlYFxyXG4gKi9cclxuVHlwZS5wcm90b3R5cGUuaXNSZXNlcnZlZE5hbWUgPSBmdW5jdGlvbiBpc1Jlc2VydmVkTmFtZShuYW1lKSB7XHJcbiAgICByZXR1cm4gTmFtZXNwYWNlLmlzUmVzZXJ2ZWROYW1lKHRoaXMucmVzZXJ2ZWQsIG5hbWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgbWVzc2FnZSBvZiB0aGlzIHR5cGUgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcclxuICogQHJldHVybnMge01lc3NhZ2U8e30+fSBNZXNzYWdlIGluc3RhbmNlXHJcbiAqL1xyXG5UeXBlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIG5ldyB0aGlzLmN0b3IocHJvcGVydGllcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyB1cCB7QGxpbmsgVHlwZSNlbmNvZGV8ZW5jb2RlfSwge0BsaW5rIFR5cGUjZGVjb2RlfGRlY29kZX0gYW5kIHtAbGluayBUeXBlI3ZlcmlmeXx2ZXJpZnl9LlxyXG4gKiBAcmV0dXJucyB7VHlwZX0gYHRoaXNgXHJcbiAqL1xyXG5UeXBlLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgLy8gU2V0cyB1cCBldmVyeXRoaW5nIGF0IG9uY2Ugc28gdGhhdCB0aGUgcHJvdG90eXBlIGNoYWluIGRvZXMgbm90IGhhdmUgdG8gYmUgcmUtZXZhbHVhdGVkXHJcbiAgICAvLyBtdWx0aXBsZSB0aW1lcyAoVjgsIHNvZnQtZGVvcHQgcHJvdG90eXBlLWNoZWNrKS5cclxuXHJcbiAgICB2YXIgZnVsbE5hbWUgPSB0aGlzLmZ1bGxOYW1lLFxyXG4gICAgICAgIHR5cGVzICAgID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IC8qIGluaXRpYWxpemVzICovIHRoaXMuZmllbGRzQXJyYXkubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgdHlwZXMucHVzaCh0aGlzLl9maWVsZHNBcnJheVtpXS5yZXNvbHZlKCkucmVzb2x2ZWRUeXBlKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIHNldHVwIG1ldGhvZHMgd2l0aCB0eXBlLXNwZWNpZmljIGdlbmVyYXRlZCBmdW5jdGlvbnNcclxuICAgIHRoaXMuZW5jb2RlID0gZW5jb2Rlcih0aGlzKSh7XHJcbiAgICAgICAgV3JpdGVyIDogV3JpdGVyLFxyXG4gICAgICAgIHR5cGVzICA6IHR5cGVzLFxyXG4gICAgICAgIHV0aWwgICA6IHV0aWxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZWNvZGUgPSBkZWNvZGVyKHRoaXMpKHtcclxuICAgICAgICBSZWFkZXIgOiBSZWFkZXIsXHJcbiAgICAgICAgdHlwZXMgIDogdHlwZXMsXHJcbiAgICAgICAgdXRpbCAgIDogdXRpbFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZlcmlmeSA9IHZlcmlmaWVyKHRoaXMpKHtcclxuICAgICAgICB0eXBlcyA6IHR5cGVzLFxyXG4gICAgICAgIHV0aWwgIDogdXRpbFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZyb21PYmplY3QgPSBjb252ZXJ0ZXIuZnJvbU9iamVjdCh0aGlzKSh7XHJcbiAgICAgICAgdHlwZXMgOiB0eXBlcyxcclxuICAgICAgICB1dGlsICA6IHV0aWxcclxuICAgIH0pO1xyXG4gICAgdGhpcy50b09iamVjdCA9IGNvbnZlcnRlci50b09iamVjdCh0aGlzKSh7XHJcbiAgICAgICAgdHlwZXMgOiB0eXBlcyxcclxuICAgICAgICB1dGlsICA6IHV0aWxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluamVjdCBjdXN0b20gd3JhcHBlcnMgZm9yIGNvbW1vbiB0eXBlc1xyXG4gICAgdmFyIHdyYXBwZXIgPSB3cmFwcGVyc1tmdWxsTmFtZV07XHJcbiAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbFRoaXMgPSBPYmplY3QuY3JlYXRlKHRoaXMpO1xyXG4gICAgICAgIC8vIGlmICh3cmFwcGVyLmZyb21PYmplY3QpIHtcclxuICAgICAgICAgICAgb3JpZ2luYWxUaGlzLmZyb21PYmplY3QgPSB0aGlzLmZyb21PYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvbU9iamVjdCA9IHdyYXBwZXIuZnJvbU9iamVjdC5iaW5kKG9yaWdpbmFsVGhpcyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmICh3cmFwcGVyLnRvT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGhpcy50b09iamVjdCA9IHRoaXMudG9PYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMudG9PYmplY3QgPSB3cmFwcGVyLnRvT2JqZWN0LmJpbmQob3JpZ2luYWxUaGlzKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW5jb2RlcyBhIG1lc3NhZ2Ugb2YgdGhpcyB0eXBlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBUeXBlI3ZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxyXG4gKiBAcGFyYW0ge01lc3NhZ2U8e30+fE9iamVjdC48c3RyaW5nLCo+fSBtZXNzYWdlIE1lc3NhZ2UgaW5zdGFuY2Ugb3IgcGxhaW4gb2JqZWN0XHJcbiAqIEBwYXJhbSB7V3JpdGVyfSBbd3JpdGVyXSBXcml0ZXIgdG8gZW5jb2RlIHRvXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IHdyaXRlclxyXG4gKi9cclxuVHlwZS5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlX3NldHVwKG1lc3NhZ2UsIHdyaXRlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0dXAoKS5lbmNvZGUobWVzc2FnZSwgd3JpdGVyKTsgLy8gb3ZlcnJpZGVzIHRoaXMgbWV0aG9kXHJcbn07XHJcblxyXG4vKipcclxuICogRW5jb2RlcyBhIG1lc3NhZ2Ugb2YgdGhpcyB0eXBlIHByZWNlZWRlZCBieSBpdHMgYnl0ZSBsZW5ndGggYXMgYSB2YXJpbnQuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIFR5cGUjdmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXHJcbiAqIEBwYXJhbSB7TWVzc2FnZTx7fT58T2JqZWN0LjxzdHJpbmcsKj59IG1lc3NhZ2UgTWVzc2FnZSBpbnN0YW5jZSBvciBwbGFpbiBvYmplY3RcclxuICogQHBhcmFtIHtXcml0ZXJ9IFt3cml0ZXJdIFdyaXRlciB0byBlbmNvZGUgdG9cclxuICogQHJldHVybnMge1dyaXRlcn0gd3JpdGVyXHJcbiAqL1xyXG5UeXBlLnByb3RvdHlwZS5lbmNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBlbmNvZGVEZWxpbWl0ZWQobWVzc2FnZSwgd3JpdGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmNvZGUobWVzc2FnZSwgd3JpdGVyICYmIHdyaXRlci5sZW4gPyB3cml0ZXIuZm9yaygpIDogd3JpdGVyKS5sZGVsaW0oKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgbWVzc2FnZSBvZiB0aGlzIHR5cGUuXHJcbiAqIEBwYXJhbSB7UmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBMZW5ndGggb2YgdGhlIG1lc3NhZ2UsIGlmIGtub3duIGJlZm9yZWhhbmRcclxuICogQHJldHVybnMge01lc3NhZ2U8e30+fSBEZWNvZGVkIG1lc3NhZ2VcclxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcclxuICogQHRocm93cyB7dXRpbC5Qcm90b2NvbEVycm9yPHt9Pn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAqL1xyXG5UeXBlLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGVfc2V0dXAocmVhZGVyLCBsZW5ndGgpIHtcclxuICAgIHJldHVybiB0aGlzLnNldHVwKCkuZGVjb2RlKHJlYWRlciwgbGVuZ3RoKTsgLy8gb3ZlcnJpZGVzIHRoaXMgbWV0aG9kXHJcbn07XHJcblxyXG4vKipcclxuICogRGVjb2RlcyBhIG1lc3NhZ2Ugb2YgdGhpcyB0eXBlIHByZWNlZWRlZCBieSBpdHMgYnl0ZSBsZW5ndGggYXMgYSB2YXJpbnQuXHJcbiAqIEBwYXJhbSB7UmVhZGVyfFVpbnQ4QXJyYXl9IHJlYWRlciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXHJcbiAqIEByZXR1cm5zIHtNZXNzYWdlPHt9Pn0gRGVjb2RlZCBtZXNzYWdlXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXHJcbiAqIEB0aHJvd3Mge3V0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXHJcbiAqL1xyXG5UeXBlLnByb3RvdHlwZS5kZWNvZGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiBkZWNvZGVEZWxpbWl0ZWQocmVhZGVyKSB7XHJcbiAgICBpZiAoIShyZWFkZXIgaW5zdGFuY2VvZiBSZWFkZXIpKVxyXG4gICAgICAgIHJlYWRlciA9IFJlYWRlci5jcmVhdGUocmVhZGVyKTtcclxuICAgIHJldHVybiB0aGlzLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogVmVyaWZpZXMgdGhhdCBmaWVsZCB2YWx1ZXMgYXJlIHZhbGlkIGFuZCB0aGF0IHJlcXVpcmVkIGZpZWxkcyBhcmUgcHJlc2VudC5cclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gbWVzc2FnZSBQbGFpbiBvYmplY3QgdG8gdmVyaWZ5XHJcbiAqIEByZXR1cm5zIHtudWxsfHN0cmluZ30gYG51bGxgIGlmIHZhbGlkLCBvdGhlcndpc2UgdGhlIHJlYXNvbiB3aHkgaXQgaXMgbm90XHJcbiAqL1xyXG5UeXBlLnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnlfc2V0dXAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0dXAoKS52ZXJpZnkobWVzc2FnZSk7IC8vIG92ZXJyaWRlcyB0aGlzIG1ldGhvZFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgbWVzc2FnZSBvZiB0aGlzIHR5cGUgZnJvbSBhIHBsYWluIG9iamVjdC4gQWxzbyBjb252ZXJ0cyB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBpbnRlcm5hbCB0eXBlcy5cclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdCB0byBjb252ZXJ0XHJcbiAqIEByZXR1cm5zIHtNZXNzYWdlPHt9Pn0gTWVzc2FnZSBpbnN0YW5jZVxyXG4gKi9cclxuVHlwZS5wcm90b3R5cGUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXR1cCgpLmZyb21PYmplY3Qob2JqZWN0KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJzaW9uIG9wdGlvbnMgYXMgdXNlZCBieSB7QGxpbmsgVHlwZSN0b09iamVjdH0gYW5kIHtAbGluayBNZXNzYWdlLnRvT2JqZWN0fS5cclxuICogQGludGVyZmFjZSBJQ29udmVyc2lvbk9wdGlvbnNcclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gW2xvbmdzXSBMb25nIGNvbnZlcnNpb24gdHlwZS5cclxuICogVmFsaWQgdmFsdWVzIGFyZSBgU3RyaW5nYCBhbmQgYE51bWJlcmAgKHRoZSBnbG9iYWwgdHlwZXMpLlxyXG4gKiBEZWZhdWx0cyB0byBjb3B5IHRoZSBwcmVzZW50IHZhbHVlLCB3aGljaCBpcyBhIHBvc3NpYmx5IHVuc2FmZSBudW1iZXIgd2l0aG91dCBhbmQgYSB7QGxpbmsgTG9uZ30gd2l0aCBhIGxvbmcgbGlicmFyeS5cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gW2VudW1zXSBFbnVtIHZhbHVlIGNvbnZlcnNpb24gdHlwZS5cclxuICogT25seSB2YWxpZCB2YWx1ZSBpcyBgU3RyaW5nYCAodGhlIGdsb2JhbCB0eXBlKS5cclxuICogRGVmYXVsdHMgdG8gY29weSB0aGUgcHJlc2VudCB2YWx1ZSwgd2hpY2ggaXMgdGhlIG51bWVyaWMgaWQuXHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IFtieXRlc10gQnl0ZXMgdmFsdWUgY29udmVyc2lvbiB0eXBlLlxyXG4gKiBWYWxpZCB2YWx1ZXMgYXJlIGBBcnJheWAgYW5kIChhIGJhc2U2NCBlbmNvZGVkKSBgU3RyaW5nYCAodGhlIGdsb2JhbCB0eXBlcykuXHJcbiAqIERlZmF1bHRzIHRvIGNvcHkgdGhlIHByZXNlbnQgdmFsdWUsIHdoaWNoIHVzdWFsbHkgaXMgYSBCdWZmZXIgdW5kZXIgbm9kZSBhbmQgYW4gVWludDhBcnJheSBpbiB0aGUgYnJvd3Nlci5cclxuICogQHByb3BlcnR5IHtib29sZWFufSBbZGVmYXVsdHM9ZmFsc2VdIEFsc28gc2V0cyBkZWZhdWx0IHZhbHVlcyBvbiB0aGUgcmVzdWx0aW5nIG9iamVjdFxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFthcnJheXM9ZmFsc2VdIFNldHMgZW1wdHkgYXJyYXlzIGZvciBtaXNzaW5nIHJlcGVhdGVkIGZpZWxkcyBldmVuIGlmIGBkZWZhdWx0cz1mYWxzZWBcclxuICogQHByb3BlcnR5IHtib29sZWFufSBbb2JqZWN0cz1mYWxzZV0gU2V0cyBlbXB0eSBvYmplY3RzIGZvciBtaXNzaW5nIG1hcCBmaWVsZHMgZXZlbiBpZiBgZGVmYXVsdHM9ZmFsc2VgXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29uZW9mcz1mYWxzZV0gSW5jbHVkZXMgdmlydHVhbCBvbmVvZiBwcm9wZXJ0aWVzIHNldCB0byB0aGUgcHJlc2VudCBmaWVsZCdzIG5hbWUsIGlmIGFueVxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtqc29uPWZhbHNlXSBQZXJmb3JtcyBhZGRpdGlvbmFsIEpTT04gY29tcGF0aWJpbGl0eSBjb252ZXJzaW9ucywgaS5lLiBOYU4gYW5kIEluZmluaXR5IHRvIHN0cmluZ3NcclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBsYWluIG9iamVjdCBmcm9tIGEgbWVzc2FnZSBvZiB0aGlzIHR5cGUuIEFsc28gY29udmVydHMgdmFsdWVzIHRvIG90aGVyIHR5cGVzIGlmIHNwZWNpZmllZC5cclxuICogQHBhcmFtIHtNZXNzYWdlPHt9Pn0gbWVzc2FnZSBNZXNzYWdlIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB7SUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XHJcbiAqL1xyXG5UeXBlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLnNldHVwKCkudG9PYmplY3QobWVzc2FnZSwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZ1bmN0aW9uIGFzIHJldHVybmVkIGJ5IHtAbGluayBUeXBlLmR9IChUeXBlU2NyaXB0KS5cclxuICogQHR5cGVkZWYgVHlwZURlY29yYXRvclxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7Q29uc3RydWN0b3I8VD59IHRhcmdldCBUYXJnZXQgY29uc3RydWN0b3JcclxuICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICogQHRlbXBsYXRlIFQgZXh0ZW5kcyBNZXNzYWdlPFQ+XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZGVjb3JhdG9yIChUeXBlU2NyaXB0KS5cclxuICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlTmFtZV0gVHlwZSBuYW1lLCBkZWZhdWx0cyB0byB0aGUgY29uc3RydWN0b3IncyBuYW1lXHJcbiAqIEByZXR1cm5zIHtUeXBlRGVjb3JhdG9yPFQ+fSBEZWNvcmF0b3IgZnVuY3Rpb25cclxuICogQHRlbXBsYXRlIFQgZXh0ZW5kcyBNZXNzYWdlPFQ+XHJcbiAqL1xyXG5UeXBlLmQgPSBmdW5jdGlvbiBkZWNvcmF0ZVR5cGUodHlwZU5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiB0eXBlRGVjb3JhdG9yKHRhcmdldCkge1xyXG4gICAgICAgIHV0aWwuZGVjb3JhdGVUeXBlKHRhcmdldCwgdHlwZU5hbWUpO1xyXG4gICAgfTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKipcclxuICogQ29tbW9uIHR5cGUgY29uc3RhbnRzLlxyXG4gKiBAbmFtZXNwYWNlXHJcbiAqL1xyXG52YXIgdHlwZXMgPSBleHBvcnRzO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xyXG5cclxudmFyIHMgPSBbXHJcbiAgICBcImRvdWJsZVwiLCAgIC8vIDBcclxuICAgIFwiZmxvYXRcIiwgICAgLy8gMVxyXG4gICAgXCJpbnQzMlwiLCAgICAvLyAyXHJcbiAgICBcInVpbnQzMlwiLCAgIC8vIDNcclxuICAgIFwic2ludDMyXCIsICAgLy8gNFxyXG4gICAgXCJmaXhlZDMyXCIsICAvLyA1XHJcbiAgICBcInNmaXhlZDMyXCIsIC8vIDZcclxuICAgIFwiaW50NjRcIiwgICAgLy8gN1xyXG4gICAgXCJ1aW50NjRcIiwgICAvLyA4XHJcbiAgICBcInNpbnQ2NFwiLCAgIC8vIDlcclxuICAgIFwiZml4ZWQ2NFwiLCAgLy8gMTBcclxuICAgIFwic2ZpeGVkNjRcIiwgLy8gMTFcclxuICAgIFwiYm9vbFwiLCAgICAgLy8gMTJcclxuICAgIFwic3RyaW5nXCIsICAgLy8gMTNcclxuICAgIFwiYnl0ZXNcIiAgICAgLy8gMTRcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGJha2UodmFsdWVzLCBvZmZzZXQpIHtcclxuICAgIHZhciBpID0gMCwgbyA9IHt9O1xyXG4gICAgb2Zmc2V0IHw9IDA7XHJcbiAgICB3aGlsZSAoaSA8IHZhbHVlcy5sZW5ndGgpIG9bc1tpICsgb2Zmc2V0XV0gPSB2YWx1ZXNbaSsrXTtcclxuICAgIHJldHVybiBvO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzaWMgdHlwZSB3aXJlIHR5cGVzLlxyXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsbnVtYmVyPn1cclxuICogQGNvbnN0XHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkb3VibGU9MSBGaXhlZDY0IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZmxvYXQ9NSBGaXhlZDMyIHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gaW50MzI9MCBWYXJpbnQgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1aW50MzI9MCBWYXJpbnQgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaW50MzI9MCBWYXJpbnQgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmaXhlZDMyPTUgRml4ZWQzMiB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNmaXhlZDMyPTUgRml4ZWQzMiB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGludDY0PTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdWludDY0PTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2ludDY0PTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZml4ZWQ2ND0xIEZpeGVkNjQgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzZml4ZWQ2ND0xIEZpeGVkNjQgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBib29sPTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RyaW5nPTIgTGRlbGltIHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gYnl0ZXM9MiBMZGVsaW0gd2lyZSB0eXBlXHJcbiAqL1xyXG50eXBlcy5iYXNpYyA9IGJha2UoW1xyXG4gICAgLyogZG91YmxlICAgKi8gMSxcclxuICAgIC8qIGZsb2F0ICAgICovIDUsXHJcbiAgICAvKiBpbnQzMiAgICAqLyAwLFxyXG4gICAgLyogdWludDMyICAgKi8gMCxcclxuICAgIC8qIHNpbnQzMiAgICovIDAsXHJcbiAgICAvKiBmaXhlZDMyICAqLyA1LFxyXG4gICAgLyogc2ZpeGVkMzIgKi8gNSxcclxuICAgIC8qIGludDY0ICAgICovIDAsXHJcbiAgICAvKiB1aW50NjQgICAqLyAwLFxyXG4gICAgLyogc2ludDY0ICAgKi8gMCxcclxuICAgIC8qIGZpeGVkNjQgICovIDEsXHJcbiAgICAvKiBzZml4ZWQ2NCAqLyAxLFxyXG4gICAgLyogYm9vbCAgICAgKi8gMCxcclxuICAgIC8qIHN0cmluZyAgICovIDIsXHJcbiAgICAvKiBieXRlcyAgICAqLyAyXHJcbl0pO1xyXG5cclxuLyoqXHJcbiAqIEJhc2ljIHR5cGUgZGVmYXVsdHMuXHJcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywqPn1cclxuICogQGNvbnN0XHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkb3VibGU9MCBEb3VibGUgZGVmYXVsdFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZmxvYXQ9MCBGbG9hdCBkZWZhdWx0XHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbnQzMj0wIEludDMyIGRlZmF1bHRcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVpbnQzMj0wIFVpbnQzMiBkZWZhdWx0XHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaW50MzI9MCBTaW50MzIgZGVmYXVsdFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZml4ZWQzMj0wIEZpeGVkMzIgZGVmYXVsdFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2ZpeGVkMzI9MCBTZml4ZWQzMiBkZWZhdWx0XHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbnQ2ND0wIEludDY0IGRlZmF1bHRcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVpbnQ2ND0wIFVpbnQ2NCBkZWZhdWx0XHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaW50NjQ9MCBTaW50MzIgZGVmYXVsdFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZml4ZWQ2ND0wIEZpeGVkNjQgZGVmYXVsdFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2ZpeGVkNjQ9MCBTZml4ZWQ2NCBkZWZhdWx0XHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYm9vbD1mYWxzZSBCb29sIGRlZmF1bHRcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHN0cmluZz1cIlwiIFN0cmluZyBkZWZhdWx0XHJcbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPG51bWJlcj59IGJ5dGVzPUFycmF5KDApIEJ5dGVzIGRlZmF1bHRcclxuICogQHByb3BlcnR5IHtudWxsfSBtZXNzYWdlPW51bGwgTWVzc2FnZSBkZWZhdWx0XHJcbiAqL1xyXG50eXBlcy5kZWZhdWx0cyA9IGJha2UoW1xyXG4gICAgLyogZG91YmxlICAgKi8gMCxcclxuICAgIC8qIGZsb2F0ICAgICovIDAsXHJcbiAgICAvKiBpbnQzMiAgICAqLyAwLFxyXG4gICAgLyogdWludDMyICAgKi8gMCxcclxuICAgIC8qIHNpbnQzMiAgICovIDAsXHJcbiAgICAvKiBmaXhlZDMyICAqLyAwLFxyXG4gICAgLyogc2ZpeGVkMzIgKi8gMCxcclxuICAgIC8qIGludDY0ICAgICovIDAsXHJcbiAgICAvKiB1aW50NjQgICAqLyAwLFxyXG4gICAgLyogc2ludDY0ICAgKi8gMCxcclxuICAgIC8qIGZpeGVkNjQgICovIDAsXHJcbiAgICAvKiBzZml4ZWQ2NCAqLyAwLFxyXG4gICAgLyogYm9vbCAgICAgKi8gZmFsc2UsXHJcbiAgICAvKiBzdHJpbmcgICAqLyBcIlwiLFxyXG4gICAgLyogYnl0ZXMgICAgKi8gdXRpbC5lbXB0eUFycmF5LFxyXG4gICAgLyogbWVzc2FnZSAgKi8gbnVsbFxyXG5dKTtcclxuXHJcbi8qKlxyXG4gKiBCYXNpYyBsb25nIHR5cGUgd2lyZSB0eXBlcy5cclxuICogQHR5cGUge09iamVjdC48c3RyaW5nLG51bWJlcj59XHJcbiAqIEBjb25zdFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gaW50NjQ9MCBWYXJpbnQgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1aW50NjQ9MCBWYXJpbnQgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaW50NjQ9MCBWYXJpbnQgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmaXhlZDY0PTEgRml4ZWQ2NCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNmaXhlZDY0PTEgRml4ZWQ2NCB3aXJlIHR5cGVcclxuICovXHJcbnR5cGVzLmxvbmcgPSBiYWtlKFtcclxuICAgIC8qIGludDY0ICAgICovIDAsXHJcbiAgICAvKiB1aW50NjQgICAqLyAwLFxyXG4gICAgLyogc2ludDY0ICAgKi8gMCxcclxuICAgIC8qIGZpeGVkNjQgICovIDEsXHJcbiAgICAvKiBzZml4ZWQ2NCAqLyAxXHJcbl0sIDcpO1xyXG5cclxuLyoqXHJcbiAqIEFsbG93ZWQgdHlwZXMgZm9yIG1hcCBrZXlzIHdpdGggdGhlaXIgYXNzb2NpYXRlZCB3aXJlIHR5cGUuXHJcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZyxudW1iZXI+fVxyXG4gKiBAY29uc3RcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGludDMyPTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdWludDMyPTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2ludDMyPTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZml4ZWQzMj01IEZpeGVkMzIgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzZml4ZWQzMj01IEZpeGVkMzIgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbnQ2ND0wIFZhcmludCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVpbnQ2ND0wIFZhcmludCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpbnQ2ND0wIFZhcmludCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGZpeGVkNjQ9MSBGaXhlZDY0IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2ZpeGVkNjQ9MSBGaXhlZDY0IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gYm9vbD0wIFZhcmludCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0cmluZz0yIExkZWxpbSB3aXJlIHR5cGVcclxuICovXHJcbnR5cGVzLm1hcEtleSA9IGJha2UoW1xyXG4gICAgLyogaW50MzIgICAgKi8gMCxcclxuICAgIC8qIHVpbnQzMiAgICovIDAsXHJcbiAgICAvKiBzaW50MzIgICAqLyAwLFxyXG4gICAgLyogZml4ZWQzMiAgKi8gNSxcclxuICAgIC8qIHNmaXhlZDMyICovIDUsXHJcbiAgICAvKiBpbnQ2NCAgICAqLyAwLFxyXG4gICAgLyogdWludDY0ICAgKi8gMCxcclxuICAgIC8qIHNpbnQ2NCAgICovIDAsXHJcbiAgICAvKiBmaXhlZDY0ICAqLyAxLFxyXG4gICAgLyogc2ZpeGVkNjQgKi8gMSxcclxuICAgIC8qIGJvb2wgICAgICovIDAsXHJcbiAgICAvKiBzdHJpbmcgICAqLyAyXHJcbl0sIDIpO1xyXG5cclxuLyoqXHJcbiAqIEFsbG93ZWQgdHlwZXMgZm9yIHBhY2tlZCByZXBlYXRlZCBmaWVsZHMgd2l0aCB0aGVpciBhc3NvY2lhdGVkIHdpcmUgdHlwZS5cclxuICogQHR5cGUge09iamVjdC48c3RyaW5nLG51bWJlcj59XHJcbiAqIEBjb25zdFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZG91YmxlPTEgRml4ZWQ2NCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGZsb2F0PTUgRml4ZWQzMiB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGludDMyPTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdWludDMyPTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2ludDMyPTAgVmFyaW50IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZml4ZWQzMj01IEZpeGVkMzIgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzZml4ZWQzMj01IEZpeGVkMzIgd2lyZSB0eXBlXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbnQ2ND0wIFZhcmludCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVpbnQ2ND0wIFZhcmludCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpbnQ2ND0wIFZhcmludCB3aXJlIHR5cGVcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGZpeGVkNjQ9MSBGaXhlZDY0IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2ZpeGVkNjQ9MSBGaXhlZDY0IHdpcmUgdHlwZVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gYm9vbD0wIFZhcmludCB3aXJlIHR5cGVcclxuICovXHJcbnR5cGVzLnBhY2tlZCA9IGJha2UoW1xyXG4gICAgLyogZG91YmxlICAgKi8gMSxcclxuICAgIC8qIGZsb2F0ICAgICovIDUsXHJcbiAgICAvKiBpbnQzMiAgICAqLyAwLFxyXG4gICAgLyogdWludDMyICAgKi8gMCxcclxuICAgIC8qIHNpbnQzMiAgICovIDAsXHJcbiAgICAvKiBmaXhlZDMyICAqLyA1LFxyXG4gICAgLyogc2ZpeGVkMzIgKi8gNSxcclxuICAgIC8qIGludDY0ICAgICovIDAsXHJcbiAgICAvKiB1aW50NjQgICAqLyAwLFxyXG4gICAgLyogc2ludDY0ICAgKi8gMCxcclxuICAgIC8qIGZpeGVkNjQgICovIDEsXHJcbiAgICAvKiBzZml4ZWQ2NCAqLyAxLFxyXG4gICAgLyogYm9vbCAgICAgKi8gMFxyXG5dKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKipcclxuICogVmFyaW91cyB1dGlsaXR5IGZ1bmN0aW9ucy5cclxuICogQG5hbWVzcGFjZVxyXG4gKi9cclxudmFyIHV0aWwgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3V0aWwvbWluaW1hbFwiKTtcclxuXHJcbnZhciByb290cyA9IHJlcXVpcmUoXCIuL3Jvb3RzXCIpO1xyXG5cclxudmFyIFR5cGUsIC8vIGN5Y2xpY1xyXG4gICAgRW51bTtcclxuXHJcbnV0aWwuY29kZWdlbiA9IHJlcXVpcmUoXCJAcHJvdG9idWZqcy9jb2RlZ2VuXCIpO1xyXG51dGlsLmZldGNoICAgPSByZXF1aXJlKFwiQHByb3RvYnVmanMvZmV0Y2hcIik7XHJcbnV0aWwucGF0aCAgICA9IHJlcXVpcmUoXCJAcHJvdG9idWZqcy9wYXRoXCIpO1xyXG5cclxuLyoqXHJcbiAqIE5vZGUncyBmcyBtb2R1bGUgaWYgYXZhaWxhYmxlLlxyXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsKj59XHJcbiAqL1xyXG51dGlsLmZzID0gdXRpbC5pbnF1aXJlKFwiZnNcIik7XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW4gb2JqZWN0J3MgdmFsdWVzIHRvIGFuIGFycmF5LlxyXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCo+fSBvYmplY3QgT2JqZWN0IHRvIGNvbnZlcnRcclxuICogQHJldHVybnMge0FycmF5LjwqPn0gQ29udmVydGVkIGFycmF5XHJcbiAqL1xyXG51dGlsLnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KG9iamVjdCkge1xyXG4gICAgaWYgKG9iamVjdCkge1xyXG4gICAgICAgIHZhciBrZXlzICA9IE9iamVjdC5rZXlzKG9iamVjdCksXHJcbiAgICAgICAgICAgIGFycmF5ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKSxcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGtleXMubGVuZ3RoKVxyXG4gICAgICAgICAgICBhcnJheVtpbmRleF0gPSBvYmplY3Rba2V5c1tpbmRleCsrXV07XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIGFycmF5IG9mIGtleXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgdGhlaXIgcmVzcGVjdGl2ZSB2YWx1ZSB0byBhbiBvYmplY3QsIG9taXR0aW5nIHVuZGVmaW5lZCB2YWx1ZXMuXHJcbiAqIEBwYXJhbSB7QXJyYXkuPCo+fSBhcnJheSBBcnJheSB0byBjb252ZXJ0XHJcbiAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gQ29udmVydGVkIG9iamVjdFxyXG4gKi9cclxudXRpbC50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KGFycmF5KSB7XHJcbiAgICB2YXIgb2JqZWN0ID0ge30sXHJcbiAgICAgICAgaW5kZXggID0gMDtcclxuICAgIHdoaWxlIChpbmRleCA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBhcnJheVtpbmRleCsrXSxcclxuICAgICAgICAgICAgdmFsID0gYXJyYXlbaW5kZXgrK107XHJcbiAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IHZhbDtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn07XHJcblxyXG52YXIgc2FmZVByb3BCYWNrc2xhc2hSZSA9IC9cXFxcL2csXHJcbiAgICBzYWZlUHJvcFF1b3RlUmUgICAgID0gL1wiL2c7XHJcblxyXG4vKipcclxuICogVGVzdHMgd2hldGhlciB0aGUgc3BlY2lmaWVkIG5hbWUgaXMgYSByZXNlcnZlZCB3b3JkIGluIEpTLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiByZXNlcnZlZCwgb3RoZXJ3aXNlIGBmYWxzZWBcclxuICovXHJcbnV0aWwuaXNSZXNlcnZlZCA9IGZ1bmN0aW9uIGlzUmVzZXJ2ZWQobmFtZSkge1xyXG4gICAgcmV0dXJuIC9eKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJC8udGVzdChuYW1lKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc2FmZSBwcm9wZXJ0eSBhY2Nlc3NvciBmb3IgdGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCBQcm9wZXJ0eSBuYW1lXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFNhZmUgYWNjZXNzb3JcclxuICovXHJcbnV0aWwuc2FmZVByb3AgPSBmdW5jdGlvbiBzYWZlUHJvcChwcm9wKSB7XHJcbiAgICBpZiAoIS9eWyRcXHdfXSskLy50ZXN0KHByb3ApIHx8IHV0aWwuaXNSZXNlcnZlZChwcm9wKSlcclxuICAgICAgICByZXR1cm4gXCJbXFxcIlwiICsgcHJvcC5yZXBsYWNlKHNhZmVQcm9wQmFja3NsYXNoUmUsIFwiXFxcXFxcXFxcIikucmVwbGFjZShzYWZlUHJvcFF1b3RlUmUsIFwiXFxcXFxcXCJcIikgKyBcIlxcXCJdXCI7XHJcbiAgICByZXR1cm4gXCIuXCIgKyBwcm9wO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdG8gdXBwZXIgY2FzZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgdG8gY29udmVydFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBDb252ZXJ0ZWQgc3RyaW5nXHJcbiAqL1xyXG51dGlsLnVjRmlyc3QgPSBmdW5jdGlvbiB1Y0ZpcnN0KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHJpbmcoMSk7XHJcbn07XHJcblxyXG52YXIgY2FtZWxDYXNlUmUgPSAvXyhbYS16XSkvZztcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHN0cmluZyB0byBjYW1lbCBjYXNlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0byBjb252ZXJ0XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IENvbnZlcnRlZCBzdHJpbmdcclxuICovXHJcbnV0aWwuY2FtZWxDYXNlID0gZnVuY3Rpb24gY2FtZWxDYXNlKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgMSlcclxuICAgICAgICAgKyBzdHIuc3Vic3RyaW5nKDEpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKGNhbWVsQ2FzZVJlLCBmdW5jdGlvbigkMCwgJDEpIHsgcmV0dXJuICQxLnRvVXBwZXJDYXNlKCk7IH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIHJlZmxlY3RlZCBmaWVsZHMgYnkgaWQuXHJcbiAqIEBwYXJhbSB7RmllbGR9IGEgRmlyc3QgZmllbGRcclxuICogQHBhcmFtIHtGaWVsZH0gYiBTZWNvbmQgZmllbGRcclxuICogQHJldHVybnMge251bWJlcn0gQ29tcGFyaXNvbiB2YWx1ZVxyXG4gKi9cclxudXRpbC5jb21wYXJlRmllbGRzQnlJZCA9IGZ1bmN0aW9uIGNvbXBhcmVGaWVsZHNCeUlkKGEsIGIpIHtcclxuICAgIHJldHVybiBhLmlkIC0gYi5pZDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgaGVscGVyIGZvciB0eXBlcyAoVHlwZVNjcmlwdCkuXHJcbiAqIEBwYXJhbSB7Q29uc3RydWN0b3I8VD59IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlTmFtZV0gVHlwZSBuYW1lLCBkZWZhdWx0cyB0byB0aGUgY29uc3RydWN0b3IncyBuYW1lXHJcbiAqIEByZXR1cm5zIHtUeXBlfSBSZWZsZWN0ZWQgdHlwZVxyXG4gKiBAdGVtcGxhdGUgVCBleHRlbmRzIE1lc3NhZ2U8VD5cclxuICogQHByb3BlcnR5IHtSb290fSByb290IERlY29yYXRvcnMgcm9vdFxyXG4gKi9cclxudXRpbC5kZWNvcmF0ZVR5cGUgPSBmdW5jdGlvbiBkZWNvcmF0ZVR5cGUoY3RvciwgdHlwZU5hbWUpIHtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmIChjdG9yLiR0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVOYW1lICYmIGN0b3IuJHR5cGUubmFtZSAhPT0gdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgdXRpbC5kZWNvcmF0ZVJvb3QucmVtb3ZlKGN0b3IuJHR5cGUpO1xyXG4gICAgICAgICAgICBjdG9yLiR0eXBlLm5hbWUgPSB0eXBlTmFtZTtcclxuICAgICAgICAgICAgdXRpbC5kZWNvcmF0ZVJvb3QuYWRkKGN0b3IuJHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3Rvci4kdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgaWYgKCFUeXBlKVxyXG4gICAgICAgIFR5cGUgPSByZXF1aXJlKFwiLi90eXBlXCIpO1xyXG5cclxuICAgIHZhciB0eXBlID0gbmV3IFR5cGUodHlwZU5hbWUgfHwgY3Rvci5uYW1lKTtcclxuICAgIHV0aWwuZGVjb3JhdGVSb290LmFkZCh0eXBlKTtcclxuICAgIHR5cGUuY3RvciA9IGN0b3I7IC8vIHNldHMgdXAgLmVuY29kZSwgLmRlY29kZSBldGMuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3RvciwgXCIkdHlwZVwiLCB7IHZhbHVlOiB0eXBlLCBlbnVtZXJhYmxlOiBmYWxzZSB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdG9yLnByb3RvdHlwZSwgXCIkdHlwZVwiLCB7IHZhbHVlOiB0eXBlLCBlbnVtZXJhYmxlOiBmYWxzZSB9KTtcclxuICAgIHJldHVybiB0eXBlO1xyXG59O1xyXG5cclxudmFyIGRlY29yYXRlRW51bUluZGV4ID0gMDtcclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgaGVscGVyIGZvciBlbnVtcyAoVHlwZVNjcmlwdCkuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgRW51bSBvYmplY3RcclxuICogQHJldHVybnMge0VudW19IFJlZmxlY3RlZCBlbnVtXHJcbiAqL1xyXG51dGlsLmRlY29yYXRlRW51bSA9IGZ1bmN0aW9uIGRlY29yYXRlRW51bShvYmplY3QpIHtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmIChvYmplY3QuJHR5cGUpXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdC4kdHlwZTtcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgaWYgKCFFbnVtKVxyXG4gICAgICAgIEVudW0gPSByZXF1aXJlKFwiLi9lbnVtXCIpO1xyXG5cclxuICAgIHZhciBlbm0gPSBuZXcgRW51bShcIkVudW1cIiArIGRlY29yYXRlRW51bUluZGV4KyssIG9iamVjdCk7XHJcbiAgICB1dGlsLmRlY29yYXRlUm9vdC5hZGQoZW5tKTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIFwiJHR5cGVcIiwgeyB2YWx1ZTogZW5tLCBlbnVtZXJhYmxlOiBmYWxzZSB9KTtcclxuICAgIHJldHVybiBlbm07XHJcbn07XHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIHJvb3QgKFR5cGVTY3JpcHQpLlxyXG4gKiBAbmFtZSB1dGlsLmRlY29yYXRlUm9vdFxyXG4gKiBAdHlwZSB7Um9vdH1cclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkodXRpbCwgXCJkZWNvcmF0ZVJvb3RcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm9vdHNbXCJkZWNvcmF0ZWRcIl0gfHwgKHJvb3RzW1wiZGVjb3JhdGVkXCJdID0gbmV3IChyZXF1aXJlKFwiLi9yb290XCIpKSgpKTtcclxuICAgIH1cclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5tb2R1bGUuZXhwb3J0cyA9IExvbmdCaXRzO1xyXG5cclxudmFyIHV0aWwgPSByZXF1aXJlKFwiLi4vdXRpbC9taW5pbWFsXCIpO1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgbmV3IGxvbmcgYml0cy5cclxuICogQGNsYXNzZGVzYyBIZWxwZXIgY2xhc3MgZm9yIHdvcmtpbmcgd2l0aCB0aGUgbG93IGFuZCBoaWdoIGJpdHMgb2YgYSA2NCBiaXQgdmFsdWUuXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge251bWJlcn0gbG8gTG93IDMyIGJpdHMsIHVuc2lnbmVkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoaSBIaWdoIDMyIGJpdHMsIHVuc2lnbmVkXHJcbiAqL1xyXG5mdW5jdGlvbiBMb25nQml0cyhsbywgaGkpIHtcclxuXHJcbiAgICAvLyBub3RlIHRoYXQgdGhlIGNhc3RzIGJlbG93IGFyZSB0aGVvcmV0aWNhbGx5IHVubmVjZXNzYXJ5IGFzIG9mIHRvZGF5LCBidXQgb2xkZXIgc3RhdGljYWxseVxyXG4gICAgLy8gZ2VuZXJhdGVkIGNvbnZlcnRlciBjb2RlIG1pZ2h0IHN0aWxsIGNhbGwgdGhlIGN0b3Igd2l0aCBzaWduZWQgMzJiaXRzLiBrZXB0IGZvciBjb21wYXQuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb3cgYml0cy5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubG8gPSBsbyA+Pj4gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZ2ggYml0cy5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaGkgPSBoaSA+Pj4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFplcm8gYml0cy5cclxuICogQG1lbWJlcm9mIHV0aWwuTG9uZ0JpdHNcclxuICogQHR5cGUge3V0aWwuTG9uZ0JpdHN9XHJcbiAqL1xyXG52YXIgemVybyA9IExvbmdCaXRzLnplcm8gPSBuZXcgTG9uZ0JpdHMoMCwgMCk7XHJcblxyXG56ZXJvLnRvTnVtYmVyID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xyXG56ZXJvLnp6RW5jb2RlID0gemVyby56ekRlY29kZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfTtcclxuemVyby5sZW5ndGggPSBmdW5jdGlvbigpIHsgcmV0dXJuIDE7IH07XHJcblxyXG4vKipcclxuICogWmVybyBoYXNoLlxyXG4gKiBAbWVtYmVyb2YgdXRpbC5Mb25nQml0c1xyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cclxudmFyIHplcm9IYXNoID0gTG9uZ0JpdHMuemVyb0hhc2ggPSBcIlxcMFxcMFxcMFxcMFxcMFxcMFxcMFxcMFwiO1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgbmV3IGxvbmcgYml0cyBmcm9tIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWVcclxuICogQHJldHVybnMge3V0aWwuTG9uZ0JpdHN9IEluc3RhbmNlXHJcbiAqL1xyXG5Mb25nQml0cy5mcm9tTnVtYmVyID0gZnVuY3Rpb24gZnJvbU51bWJlcih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSAwKVxyXG4gICAgICAgIHJldHVybiB6ZXJvO1xyXG4gICAgdmFyIHNpZ24gPSB2YWx1ZSA8IDA7XHJcbiAgICBpZiAoc2lnbilcclxuICAgICAgICB2YWx1ZSA9IC12YWx1ZTtcclxuICAgIHZhciBsbyA9IHZhbHVlID4+PiAwLFxyXG4gICAgICAgIGhpID0gKHZhbHVlIC0gbG8pIC8gNDI5NDk2NzI5NiA+Pj4gMDtcclxuICAgIGlmIChzaWduKSB7XHJcbiAgICAgICAgaGkgPSB+aGkgPj4+IDA7XHJcbiAgICAgICAgbG8gPSB+bG8gPj4+IDA7XHJcbiAgICAgICAgaWYgKCsrbG8gPiA0Mjk0OTY3Mjk1KSB7XHJcbiAgICAgICAgICAgIGxvID0gMDtcclxuICAgICAgICAgICAgaWYgKCsraGkgPiA0Mjk0OTY3Mjk1KVxyXG4gICAgICAgICAgICAgICAgaGkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgTG9uZ0JpdHMobG8sIGhpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIG5ldyBsb25nIGJpdHMgZnJvbSBhIG51bWJlciwgbG9uZyBvciBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7TG9uZ3xudW1iZXJ8c3RyaW5nfSB2YWx1ZSBWYWx1ZVxyXG4gKiBAcmV0dXJucyB7dXRpbC5Mb25nQml0c30gSW5zdGFuY2VcclxuICovXHJcbkxvbmdCaXRzLmZyb20gPSBmdW5jdGlvbiBmcm9tKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiBMb25nQml0cy5mcm9tTnVtYmVyKHZhbHVlKTtcclxuICAgIGlmICh1dGlsLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgICAgaWYgKHV0aWwuTG9uZylcclxuICAgICAgICAgICAgdmFsdWUgPSB1dGlsLkxvbmcuZnJvbVN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gTG9uZ0JpdHMuZnJvbU51bWJlcihwYXJzZUludCh2YWx1ZSwgMTApKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZS5sb3cgfHwgdmFsdWUuaGlnaCA/IG5ldyBMb25nQml0cyh2YWx1ZS5sb3cgPj4+IDAsIHZhbHVlLmhpZ2ggPj4+IDApIDogemVybztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGlzIGxvbmcgYml0cyB0byBhIHBvc3NpYmx5IHVuc2FmZSBKYXZhU2NyaXB0IG51bWJlci5cclxuICogQHBhcmFtIHtib29sZWFufSBbdW5zaWduZWQ9ZmFsc2VdIFdoZXRoZXIgdW5zaWduZWQgb3Igbm90XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFBvc3NpYmx5IHVuc2FmZSBudW1iZXJcclxuICovXHJcbkxvbmdCaXRzLnByb3RvdHlwZS50b051bWJlciA9IGZ1bmN0aW9uIHRvTnVtYmVyKHVuc2lnbmVkKSB7XHJcbiAgICBpZiAoIXVuc2lnbmVkICYmIHRoaXMuaGkgPj4+IDMxKSB7XHJcbiAgICAgICAgdmFyIGxvID0gfnRoaXMubG8gKyAxID4+PiAwLFxyXG4gICAgICAgICAgICBoaSA9IH50aGlzLmhpICAgICA+Pj4gMDtcclxuICAgICAgICBpZiAoIWxvKVxyXG4gICAgICAgICAgICBoaSA9IGhpICsgMSA+Pj4gMDtcclxuICAgICAgICByZXR1cm4gLShsbyArIGhpICogNDI5NDk2NzI5Nik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5sbyArIHRoaXMuaGkgKiA0Mjk0OTY3Mjk2O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoaXMgbG9uZyBiaXRzIHRvIGEgbG9uZy5cclxuICogQHBhcmFtIHtib29sZWFufSBbdW5zaWduZWQ9ZmFsc2VdIFdoZXRoZXIgdW5zaWduZWQgb3Igbm90XHJcbiAqIEByZXR1cm5zIHtMb25nfSBMb25nXHJcbiAqL1xyXG5Mb25nQml0cy5wcm90b3R5cGUudG9Mb25nID0gZnVuY3Rpb24gdG9Mb25nKHVuc2lnbmVkKSB7XHJcbiAgICByZXR1cm4gdXRpbC5Mb25nXHJcbiAgICAgICAgPyBuZXcgdXRpbC5Mb25nKHRoaXMubG8gfCAwLCB0aGlzLmhpIHwgMCwgQm9vbGVhbih1bnNpZ25lZCkpXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICA6IHsgbG93OiB0aGlzLmxvIHwgMCwgaGlnaDogdGhpcy5oaSB8IDAsIHVuc2lnbmVkOiBCb29sZWFuKHVuc2lnbmVkKSB9O1xyXG59O1xyXG5cclxudmFyIGNoYXJDb2RlQXQgPSBTdHJpbmcucHJvdG90eXBlLmNoYXJDb2RlQXQ7XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBuZXcgbG9uZyBiaXRzIGZyb20gdGhlIHNwZWNpZmllZCA4IGNoYXJhY3RlcnMgbG9uZyBoYXNoLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaCBIYXNoXHJcbiAqIEByZXR1cm5zIHt1dGlsLkxvbmdCaXRzfSBCaXRzXHJcbiAqL1xyXG5Mb25nQml0cy5mcm9tSGFzaCA9IGZ1bmN0aW9uIGZyb21IYXNoKGhhc2gpIHtcclxuICAgIGlmIChoYXNoID09PSB6ZXJvSGFzaClcclxuICAgICAgICByZXR1cm4gemVybztcclxuICAgIHJldHVybiBuZXcgTG9uZ0JpdHMoXHJcbiAgICAgICAgKCBjaGFyQ29kZUF0LmNhbGwoaGFzaCwgMClcclxuICAgICAgICB8IGNoYXJDb2RlQXQuY2FsbChoYXNoLCAxKSA8PCA4XHJcbiAgICAgICAgfCBjaGFyQ29kZUF0LmNhbGwoaGFzaCwgMikgPDwgMTZcclxuICAgICAgICB8IGNoYXJDb2RlQXQuY2FsbChoYXNoLCAzKSA8PCAyNCkgPj4+IDBcclxuICAgICxcclxuICAgICAgICAoIGNoYXJDb2RlQXQuY2FsbChoYXNoLCA0KVxyXG4gICAgICAgIHwgY2hhckNvZGVBdC5jYWxsKGhhc2gsIDUpIDw8IDhcclxuICAgICAgICB8IGNoYXJDb2RlQXQuY2FsbChoYXNoLCA2KSA8PCAxNlxyXG4gICAgICAgIHwgY2hhckNvZGVBdC5jYWxsKGhhc2gsIDcpIDw8IDI0KSA+Pj4gMFxyXG4gICAgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGlzIGxvbmcgYml0cyB0byBhIDggY2hhcmFjdGVycyBsb25nIGhhc2guXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEhhc2hcclxuICovXHJcbkxvbmdCaXRzLnByb3RvdHlwZS50b0hhc2ggPSBmdW5jdGlvbiB0b0hhc2goKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShcclxuICAgICAgICB0aGlzLmxvICAgICAgICAmIDI1NSxcclxuICAgICAgICB0aGlzLmxvID4+PiA4ICAmIDI1NSxcclxuICAgICAgICB0aGlzLmxvID4+PiAxNiAmIDI1NSxcclxuICAgICAgICB0aGlzLmxvID4+PiAyNCAgICAgICxcclxuICAgICAgICB0aGlzLmhpICAgICAgICAmIDI1NSxcclxuICAgICAgICB0aGlzLmhpID4+PiA4ICAmIDI1NSxcclxuICAgICAgICB0aGlzLmhpID4+PiAxNiAmIDI1NSxcclxuICAgICAgICB0aGlzLmhpID4+PiAyNFxyXG4gICAgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBaaWctemFnIGVuY29kZXMgdGhpcyBsb25nIGJpdHMuXHJcbiAqIEByZXR1cm5zIHt1dGlsLkxvbmdCaXRzfSBgdGhpc2BcclxuICovXHJcbkxvbmdCaXRzLnByb3RvdHlwZS56ekVuY29kZSA9IGZ1bmN0aW9uIHp6RW5jb2RlKCkge1xyXG4gICAgdmFyIG1hc2sgPSAgIHRoaXMuaGkgPj4gMzE7XHJcbiAgICB0aGlzLmhpICA9ICgodGhpcy5oaSA8PCAxIHwgdGhpcy5sbyA+Pj4gMzEpIF4gbWFzaykgPj4+IDA7XHJcbiAgICB0aGlzLmxvICA9ICggdGhpcy5sbyA8PCAxICAgICAgICAgICAgICAgICAgIF4gbWFzaykgPj4+IDA7XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBaaWctemFnIGRlY29kZXMgdGhpcyBsb25nIGJpdHMuXHJcbiAqIEByZXR1cm5zIHt1dGlsLkxvbmdCaXRzfSBgdGhpc2BcclxuICovXHJcbkxvbmdCaXRzLnByb3RvdHlwZS56ekRlY29kZSA9IGZ1bmN0aW9uIHp6RGVjb2RlKCkge1xyXG4gICAgdmFyIG1hc2sgPSAtKHRoaXMubG8gJiAxKTtcclxuICAgIHRoaXMubG8gID0gKCh0aGlzLmxvID4+PiAxIHwgdGhpcy5oaSA8PCAzMSkgXiBtYXNrKSA+Pj4gMDtcclxuICAgIHRoaXMuaGkgID0gKCB0aGlzLmhpID4+PiAxICAgICAgICAgICAgICAgICAgXiBtYXNrKSA+Pj4gMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiB0aGlzIGxvbmdiaXRzIHdoZW4gZW5jb2RlZCBhcyBhIHZhcmludC5cclxuICogQHJldHVybnMge251bWJlcn0gTGVuZ3RoXHJcbiAqL1xyXG5Mb25nQml0cy5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gbGVuZ3RoKCkge1xyXG4gICAgdmFyIHBhcnQwID0gIHRoaXMubG8sXHJcbiAgICAgICAgcGFydDEgPSAodGhpcy5sbyA+Pj4gMjggfCB0aGlzLmhpIDw8IDQpID4+PiAwLFxyXG4gICAgICAgIHBhcnQyID0gIHRoaXMuaGkgPj4+IDI0O1xyXG4gICAgcmV0dXJuIHBhcnQyID09PSAwXHJcbiAgICAgICAgID8gcGFydDEgPT09IDBcclxuICAgICAgICAgICA/IHBhcnQwIDwgMTYzODRcclxuICAgICAgICAgICAgID8gcGFydDAgPCAxMjggPyAxIDogMlxyXG4gICAgICAgICAgICAgOiBwYXJ0MCA8IDIwOTcxNTIgPyAzIDogNFxyXG4gICAgICAgICAgIDogcGFydDEgPCAxNjM4NFxyXG4gICAgICAgICAgICAgPyBwYXJ0MSA8IDEyOCA/IDUgOiA2XHJcbiAgICAgICAgICAgICA6IHBhcnQxIDwgMjA5NzE1MiA/IDcgOiA4XHJcbiAgICAgICAgIDogcGFydDIgPCAxMjggPyA5IDogMTA7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgdXRpbCA9IGV4cG9ydHM7XHJcblxyXG4vLyB1c2VkIHRvIHJldHVybiBhIFByb21pc2Ugd2hlcmUgY2FsbGJhY2sgaXMgb21pdHRlZFxyXG51dGlsLmFzUHJvbWlzZSA9IHJlcXVpcmUoXCJAcHJvdG9idWZqcy9hc3Byb21pc2VcIik7XHJcblxyXG4vLyBjb252ZXJ0cyB0byAvIGZyb20gYmFzZTY0IGVuY29kZWQgc3RyaW5nc1xyXG51dGlsLmJhc2U2NCA9IHJlcXVpcmUoXCJAcHJvdG9idWZqcy9iYXNlNjRcIik7XHJcblxyXG4vLyBiYXNlIGNsYXNzIG9mIHJwYy5TZXJ2aWNlXHJcbnV0aWwuRXZlbnRFbWl0dGVyID0gcmVxdWlyZShcIkBwcm90b2J1ZmpzL2V2ZW50ZW1pdHRlclwiKTtcclxuXHJcbi8vIGZsb2F0IGhhbmRsaW5nIGFjY3Jvc3MgYnJvd3NlcnNcclxudXRpbC5mbG9hdCA9IHJlcXVpcmUoXCJAcHJvdG9idWZqcy9mbG9hdFwiKTtcclxuXHJcbi8vIHJlcXVpcmVzIG1vZHVsZXMgb3B0aW9uYWxseSBhbmQgaGlkZXMgdGhlIGNhbGwgZnJvbSBidW5kbGVyc1xyXG51dGlsLmlucXVpcmUgPSByZXF1aXJlKFwiQHByb3RvYnVmanMvaW5xdWlyZVwiKTtcclxuXHJcbi8vIGNvbnZlcnRzIHRvIC8gZnJvbSB1dGY4IGVuY29kZWQgc3RyaW5nc1xyXG51dGlsLnV0ZjggPSByZXF1aXJlKFwiQHByb3RvYnVmanMvdXRmOFwiKTtcclxuXHJcbi8vIHByb3ZpZGVzIGEgbm9kZS1saWtlIGJ1ZmZlciBwb29sIGluIHRoZSBicm93c2VyXHJcbnV0aWwucG9vbCA9IHJlcXVpcmUoXCJAcHJvdG9idWZqcy9wb29sXCIpO1xyXG5cclxuLy8gdXRpbGl0eSB0byB3b3JrIHdpdGggdGhlIGxvdyBhbmQgaGlnaCBiaXRzIG9mIGEgNjQgYml0IHZhbHVlXHJcbnV0aWwuTG9uZ0JpdHMgPSByZXF1aXJlKFwiLi9sb25nYml0c1wiKTtcclxuXHJcbi8vIGdsb2JhbCBvYmplY3QgcmVmZXJlbmNlXHJcbnV0aWwuZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dcclxuICAgICAgICAgICB8fCB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbFxyXG4gICAgICAgICAgIHx8IHR5cGVvZiBzZWxmICAgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZlxyXG4gICAgICAgICAgIHx8IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW52YWxpZC10aGlzXHJcblxyXG4vKipcclxuICogQW4gaW1tdWFibGUgZW1wdHkgYXJyYXkuXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEB0eXBlIHtBcnJheS48Kj59XHJcbiAqIEBjb25zdFxyXG4gKi9cclxudXRpbC5lbXB0eUFycmF5ID0gT2JqZWN0LmZyZWV6ZSA/IE9iamVjdC5mcmVlemUoW10pIDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gW107IC8vIHVzZWQgb24gcHJvdG90eXBlc1xyXG5cclxuLyoqXHJcbiAqIEFuIGltbXV0YWJsZSBlbXB0eSBvYmplY3QuXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqIEBjb25zdFxyXG4gKi9cclxudXRpbC5lbXB0eU9iamVjdCA9IE9iamVjdC5mcmVlemUgPyBPYmplY3QuZnJlZXplKHt9KSA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHt9OyAvLyB1c2VkIG9uIHByb3RvdHlwZXNcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHJ1bm5pbmcgd2l0aGluIG5vZGUgb3Igbm90LlxyXG4gKiBAbWVtYmVyb2YgdXRpbFxyXG4gKiBAdHlwZSB7Ym9vbGVhbn1cclxuICogQGNvbnN0XHJcbiAqL1xyXG51dGlsLmlzTm9kZSA9IEJvb2xlYW4odXRpbC5nbG9iYWwucHJvY2VzcyAmJiB1dGlsLmdsb2JhbC5wcm9jZXNzLnZlcnNpb25zICYmIHV0aWwuZ2xvYmFsLnByb2Nlc3MudmVyc2lvbnMubm9kZSk7XHJcblxyXG4vKipcclxuICogVGVzdHMgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhbiBpbnRlZ2VyLlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGFuIGludGVnZXJcclxuICovXHJcbnV0aWwuaXNJbnRlZ2VyID0gTnVtYmVyLmlzSW50ZWdlciB8fCAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBzdHJpbmdcclxuICovXHJcbnV0aWwuaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGEgbm9uLW51bGwgb2JqZWN0LlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBub24tbnVsbCBvYmplY3RcclxuICovXHJcbnV0aWwuaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBwcm9wZXJ0eSBvbiBhIG1lc3NhZ2UgaXMgY29uc2lkZXJlZCB0byBiZSBwcmVzZW50LlxyXG4gKiBUaGlzIGlzIGFuIGFsaWFzIG9mIHtAbGluayB1dGlsLmlzU2V0fS5cclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogUGxhaW4gb2JqZWN0IG9yIG1lc3NhZ2UgaW5zdGFuY2VcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgUHJvcGVydHkgbmFtZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGNvbnNpZGVyZWQgdG8gYmUgcHJlc2VudCwgb3RoZXJ3aXNlIGBmYWxzZWBcclxuICovXHJcbnV0aWwuaXNzZXQgPVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIHByb3BlcnR5IG9uIGEgbWVzc2FnZSBpcyBjb25zaWRlcmVkIHRvIGJlIHByZXNlbnQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogUGxhaW4gb2JqZWN0IG9yIG1lc3NhZ2UgaW5zdGFuY2VcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgUHJvcGVydHkgbmFtZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGNvbnNpZGVyZWQgdG8gYmUgcHJlc2VudCwgb3RoZXJ3aXNlIGBmYWxzZWBcclxuICovXHJcbnV0aWwuaXNTZXQgPSBmdW5jdGlvbiBpc1NldChvYmosIHByb3ApIHtcclxuICAgIHZhciB2YWx1ZSA9IG9ialtwcm9wXTtcclxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLXByb3RvdHlwZS1idWlsdGluc1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCkgPiAwO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFueSBjb21wYXRpYmxlIEJ1ZmZlciBpbnN0YW5jZS5cclxuICogVGhpcyBpcyBhIG1pbmltYWwgc3RhbmQtYWxvbmUgZGVmaW5pdGlvbiBvZiBhIEJ1ZmZlciBpbnN0YW5jZS4gVGhlIGFjdHVhbCB0eXBlIGlzIHRoYXQgZXhwb3J0ZWQgYnkgbm9kZSdzIHR5cGluZ3MuXHJcbiAqIEBpbnRlcmZhY2UgQnVmZmVyXHJcbiAqIEBleHRlbmRzIFVpbnQ4QXJyYXlcclxuICovXHJcblxyXG4vKipcclxuICogTm9kZSdzIEJ1ZmZlciBjbGFzcyBpZiBhdmFpbGFibGUuXHJcbiAqIEB0eXBlIHtDb25zdHJ1Y3RvcjxCdWZmZXI+fVxyXG4gKi9cclxudXRpbC5CdWZmZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBCdWZmZXIgPSB1dGlsLmlucXVpcmUoXCJidWZmZXJcIikuQnVmZmVyO1xyXG4gICAgICAgIC8vIHJlZnVzZSB0byB1c2Ugbm9uLW5vZGUgYnVmZmVycyBpZiBub3QgZXhwbGljaXRseSBhc3NpZ25lZCAocGVyZiByZWFzb25zKTpcclxuICAgICAgICByZXR1cm4gQnVmZmVyLnByb3RvdHlwZS51dGY4V3JpdGUgPyBCdWZmZXIgOiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBudWxsO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4vLyBJbnRlcm5hbCBhbGlhcyBvZiBvciBwb2x5ZnVsbCBmb3IgQnVmZmVyLmZyb20uXHJcbnV0aWwuX0J1ZmZlcl9mcm9tID0gbnVsbDtcclxuXHJcbi8vIEludGVybmFsIGFsaWFzIG9mIG9yIHBvbHlmaWxsIGZvciBCdWZmZXIuYWxsb2NVbnNhZmUuXHJcbnV0aWwuX0J1ZmZlcl9hbGxvY1Vuc2FmZSA9IG51bGw7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBidWZmZXIgb2Ygd2hhdGV2ZXIgdHlwZSBzdXBwb3J0ZWQgYnkgdGhlIGVudmlyb25tZW50LlxyXG4gKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW3NpemVPckFycmF5PTBdIEJ1ZmZlciBzaXplIG9yIG51bWJlciBhcnJheVxyXG4gKiBAcmV0dXJucyB7VWludDhBcnJheXxCdWZmZXJ9IEJ1ZmZlclxyXG4gKi9cclxudXRpbC5uZXdCdWZmZXIgPSBmdW5jdGlvbiBuZXdCdWZmZXIoc2l6ZU9yQXJyYXkpIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICByZXR1cm4gdHlwZW9mIHNpemVPckFycmF5ID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyB1dGlsLkJ1ZmZlclxyXG4gICAgICAgICAgICA/IHV0aWwuX0J1ZmZlcl9hbGxvY1Vuc2FmZShzaXplT3JBcnJheSlcclxuICAgICAgICAgICAgOiBuZXcgdXRpbC5BcnJheShzaXplT3JBcnJheSlcclxuICAgICAgICA6IHV0aWwuQnVmZmVyXHJcbiAgICAgICAgICAgID8gdXRpbC5fQnVmZmVyX2Zyb20oc2l6ZU9yQXJyYXkpXHJcbiAgICAgICAgICAgIDogdHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgID8gc2l6ZU9yQXJyYXlcclxuICAgICAgICAgICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoc2l6ZU9yQXJyYXkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFycmF5IGltcGxlbWVudGF0aW9uIHVzZWQgaW4gdGhlIGJyb3dzZXIuIGBVaW50OEFycmF5YCBpZiBzdXBwb3J0ZWQsIG90aGVyd2lzZSBgQXJyYXlgLlxyXG4gKiBAdHlwZSB7Q29uc3RydWN0b3I8VWludDhBcnJheT59XHJcbiAqL1xyXG51dGlsLkFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09IFwidW5kZWZpbmVkXCIgPyBVaW50OEFycmF5IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIDogQXJyYXk7XHJcblxyXG4vKipcclxuICogQW55IGNvbXBhdGlibGUgTG9uZyBpbnN0YW5jZS5cclxuICogVGhpcyBpcyBhIG1pbmltYWwgc3RhbmQtYWxvbmUgZGVmaW5pdGlvbiBvZiBhIExvbmcgaW5zdGFuY2UuIFRoZSBhY3R1YWwgdHlwZSBpcyB0aGF0IGV4cG9ydGVkIGJ5IGxvbmcuanMuXHJcbiAqIEBpbnRlcmZhY2UgTG9uZ1xyXG4gKiBAcHJvcGVydHkge251bWJlcn0gbG93IExvdyBiaXRzXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoaWdoIEhpZ2ggYml0c1xyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHVuc2lnbmVkIFdoZXRoZXIgdW5zaWduZWQgb3Igbm90XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIExvbmcuanMncyBMb25nIGNsYXNzIGlmIGF2YWlsYWJsZS5cclxuICogQHR5cGUge0NvbnN0cnVjdG9yPExvbmc+fVxyXG4gKi9cclxudXRpbC5Mb25nID0gLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gdXRpbC5nbG9iYWwuZGNvZGVJTyAmJiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB1dGlsLmdsb2JhbC5kY29kZUlPLkxvbmdcclxuICAgICAgICAgfHwgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gdXRpbC5nbG9iYWwuTG9uZ1xyXG4gICAgICAgICB8fCB1dGlsLmlucXVpcmUoXCJsb25nXCIpO1xyXG5cclxuLyoqXHJcbiAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIHZlcmlmeSAyIGJpdCAoYGJvb2xgKSBtYXAga2V5cy5cclxuICogQHR5cGUge1JlZ0V4cH1cclxuICogQGNvbnN0XHJcbiAqL1xyXG51dGlsLmtleTJSZSA9IC9edHJ1ZXxmYWxzZXwwfDEkLztcclxuXHJcbi8qKlxyXG4gKiBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byB2ZXJpZnkgMzIgYml0IChgaW50MzJgIGV0Yy4pIG1hcCBrZXlzLlxyXG4gKiBAdHlwZSB7UmVnRXhwfVxyXG4gKiBAY29uc3RcclxuICovXHJcbnV0aWwua2V5MzJSZSA9IC9eLT8oPzowfFsxLTldWzAtOV0qKSQvO1xyXG5cclxuLyoqXHJcbiAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIHZlcmlmeSA2NCBiaXQgKGBpbnQ2NGAgZXRjLikgbWFwIGtleXMuXHJcbiAqIEB0eXBlIHtSZWdFeHB9XHJcbiAqIEBjb25zdFxyXG4gKi9cclxudXRpbC5rZXk2NFJlID0gL14oPzpbXFxcXHgwMC1cXFxceGZmXXs4fXwtPyg/OjB8WzEtOV1bMC05XSopKSQvO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgbnVtYmVyIG9yIGxvbmcgdG8gYW4gOCBjaGFyYWN0ZXJzIGxvbmcgaGFzaCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7TG9uZ3xudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIGNvbnZlcnRcclxuICogQHJldHVybnMge3N0cmluZ30gSGFzaFxyXG4gKi9cclxudXRpbC5sb25nVG9IYXNoID0gZnVuY3Rpb24gbG9uZ1RvSGFzaCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgPyB1dGlsLkxvbmdCaXRzLmZyb20odmFsdWUpLnRvSGFzaCgpXHJcbiAgICAgICAgOiB1dGlsLkxvbmdCaXRzLnplcm9IYXNoO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIDggY2hhcmFjdGVycyBsb25nIGhhc2ggc3RyaW5nIHRvIGEgbG9uZyBvciBudW1iZXIuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIEhhc2hcclxuICogQHBhcmFtIHtib29sZWFufSBbdW5zaWduZWQ9ZmFsc2VdIFdoZXRoZXIgdW5zaWduZWQgb3Igbm90XHJcbiAqIEByZXR1cm5zIHtMb25nfG51bWJlcn0gT3JpZ2luYWwgdmFsdWVcclxuICovXHJcbnV0aWwubG9uZ0Zyb21IYXNoID0gZnVuY3Rpb24gbG9uZ0Zyb21IYXNoKGhhc2gsIHVuc2lnbmVkKSB7XHJcbiAgICB2YXIgYml0cyA9IHV0aWwuTG9uZ0JpdHMuZnJvbUhhc2goaGFzaCk7XHJcbiAgICBpZiAodXRpbC5Mb25nKVxyXG4gICAgICAgIHJldHVybiB1dGlsLkxvbmcuZnJvbUJpdHMoYml0cy5sbywgYml0cy5oaSwgdW5zaWduZWQpO1xyXG4gICAgcmV0dXJuIGJpdHMudG9OdW1iZXIoQm9vbGVhbih1bnNpZ25lZCkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiB0aGUgc291cmNlIG9iamVjdCBpbnRvIHRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsKj59IGRzdCBEZXN0aW5hdGlvbiBvYmplY3RcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gc3JjIFNvdXJjZSBvYmplY3RcclxuICogQHBhcmFtIHtib29sZWFufSBbaWZOb3RTZXQ9ZmFsc2VdIE1lcmdlcyBvbmx5IGlmIHRoZSBrZXkgaXMgbm90IGFscmVhZHkgc2V0XHJcbiAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gRGVzdGluYXRpb24gb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBtZXJnZShkc3QsIHNyYywgaWZOb3RTZXQpIHsgLy8gdXNlZCBieSBjb252ZXJ0ZXJzXHJcbiAgICBmb3IgKHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3JjKSwgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgIGlmIChkc3Rba2V5c1tpXV0gPT09IHVuZGVmaW5lZCB8fCAhaWZOb3RTZXQpXHJcbiAgICAgICAgICAgIGRzdFtrZXlzW2ldXSA9IHNyY1trZXlzW2ldXTtcclxuICAgIHJldHVybiBkc3Q7XHJcbn1cclxuXHJcbnV0aWwubWVyZ2UgPSBtZXJnZTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc3RyaW5nIHRvIGxvd2VyIGNhc2UuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHRvIGNvbnZlcnRcclxuICogQHJldHVybnMge3N0cmluZ30gQ29udmVydGVkIHN0cmluZ1xyXG4gKi9cclxudXRpbC5sY0ZpcnN0ID0gZnVuY3Rpb24gbGNGaXJzdChzdHIpIHtcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHIuc3Vic3RyaW5nKDEpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBjdXN0b20gZXJyb3IgY29uc3RydWN0b3IuXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIEVycm9yIG5hbWVcclxuICogQHJldHVybnMge0NvbnN0cnVjdG9yPEVycm9yPn0gQ3VzdG9tIGVycm9yIGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBuZXdFcnJvcihuYW1lKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gQ3VzdG9tRXJyb3IobWVzc2FnZSwgcHJvcGVydGllcykge1xyXG5cclxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ3VzdG9tRXJyb3IpKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEN1c3RvbUVycm9yKG1lc3NhZ2UsIHByb3BlcnRpZXMpO1xyXG5cclxuICAgICAgICAvLyBFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIF4ganVzdCByZXR1cm5zIGEgbmV3IGVycm9yIGluc3RhbmNlIGJlY2F1c2UgdGhlIGN0b3IgY2FuIGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1lc3NhZ2VcIiwgeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbWVzc2FnZTsgfSB9KTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIC8vIG5vZGVcclxuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ3VzdG9tRXJyb3IpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhY2tcIiwgeyB2YWx1ZTogKG5ldyBFcnJvcigpKS5zdGFjayB8fCBcIlwiIH0pO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgICAgICAgbWVyZ2UodGhpcywgcHJvcGVydGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgKEN1c3RvbUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKSkuY29uc3RydWN0b3IgPSBDdXN0b21FcnJvcjtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ3VzdG9tRXJyb3IucHJvdG90eXBlLCBcIm5hbWVcIiwgeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmFtZTsgfSB9KTtcclxuXHJcbiAgICBDdXN0b21FcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCI6IFwiICsgdGhpcy5tZXNzYWdlO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ3VzdG9tRXJyb3I7XHJcbn1cclxuXHJcbnV0aWwubmV3RXJyb3IgPSBuZXdFcnJvcjtcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbmV3IHByb3RvY29sIGVycm9yLlxyXG4gKiBAY2xhc3NkZXNjIEVycm9yIHN1YmNsYXNzIGluZGljYXRpbmcgYSBwcm90b2NvbCBzcGVjaWZjIGVycm9yLlxyXG4gKiBAbWVtYmVyb2YgdXRpbFxyXG4gKiBAZXh0ZW5kcyBFcnJvclxyXG4gKiBAdGVtcGxhdGUgVCBleHRlbmRzIE1lc3NhZ2U8VD5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEVycm9yIG1lc3NhZ2VcclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gW3Byb3BlcnRpZXNdIEFkZGl0aW9uYWwgcHJvcGVydGllc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB0cnkge1xyXG4gKiAgICAgTXlNZXNzYWdlLmRlY29kZShzb21lQnVmZmVyKTsgLy8gdGhyb3dzIGlmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xyXG4gKiB9IGNhdGNoIChlKSB7XHJcbiAqICAgICBpZiAoZSBpbnN0YW5jZW9mIFByb3RvY29sRXJyb3IgJiYgZS5pbnN0YW5jZSlcclxuICogICAgICAgICBjb25zb2xlLmxvZyhcImRlY29kZWQgc28gZmFyOiBcIiArIEpTT04uc3RyaW5naWZ5KGUuaW5zdGFuY2UpKTtcclxuICogfVxyXG4gKi9cclxudXRpbC5Qcm90b2NvbEVycm9yID0gbmV3RXJyb3IoXCJQcm90b2NvbEVycm9yXCIpO1xyXG5cclxuLyoqXHJcbiAqIFNvIGZhciBkZWNvZGVkIG1lc3NhZ2UgaW5zdGFuY2UuXHJcbiAqIEBuYW1lIHV0aWwuUHJvdG9jb2xFcnJvciNpbnN0YW5jZVxyXG4gKiBAdHlwZSB7TWVzc2FnZTxUPn1cclxuICovXHJcblxyXG4vKipcclxuICogQSBPbmVPZiBnZXR0ZXIgYXMgcmV0dXJuZWQgYnkge0BsaW5rIHV0aWwub25lT2ZHZXR0ZXJ9LlxyXG4gKiBAdHlwZWRlZiBPbmVPZkdldHRlclxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfSBTZXQgZmllbGQgbmFtZSwgaWYgYW55XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyBhIGdldHRlciBmb3IgYSBvbmVvZidzIHByZXNlbnQgZmllbGQgbmFtZS5cclxuICogQHBhcmFtIHtzdHJpbmdbXX0gZmllbGROYW1lcyBGaWVsZCBuYW1lc1xyXG4gKiBAcmV0dXJucyB7T25lT2ZHZXR0ZXJ9IFVuYm91bmQgZ2V0dGVyXHJcbiAqL1xyXG51dGlsLm9uZU9mR2V0dGVyID0gZnVuY3Rpb24gZ2V0T25lT2YoZmllbGROYW1lcykge1xyXG4gICAgdmFyIGZpZWxkTWFwID0ge307XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkTmFtZXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgZmllbGRNYXBbZmllbGROYW1lc1tpXV0gPSAxO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9IFNldCBmaWVsZCBuYW1lLCBpZiBhbnlcclxuICAgICAqIEB0aGlzIE9iamVjdFxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cclxuICAgICAgICBmb3IgKHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcyksIGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPiAtMTsgLS1pKVxyXG4gICAgICAgICAgICBpZiAoZmllbGRNYXBba2V5c1tpXV0gPT09IDEgJiYgdGhpc1trZXlzW2ldXSAhPT0gdW5kZWZpbmVkICYmIHRoaXNba2V5c1tpXV0gIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5c1tpXTtcclxuICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQSBPbmVPZiBzZXR0ZXIgYXMgcmV0dXJuZWQgYnkge0BsaW5rIHV0aWwub25lT2ZTZXR0ZXJ9LlxyXG4gKiBAdHlwZWRlZiBPbmVPZlNldHRlclxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gdmFsdWUgRmllbGQgbmFtZVxyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSBzZXR0ZXIgZm9yIGEgb25lb2YncyBwcmVzZW50IGZpZWxkIG5hbWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IGZpZWxkTmFtZXMgRmllbGQgbmFtZXNcclxuICogQHJldHVybnMge09uZU9mU2V0dGVyfSBVbmJvdW5kIHNldHRlclxyXG4gKi9cclxudXRpbC5vbmVPZlNldHRlciA9IGZ1bmN0aW9uIHNldE9uZU9mKGZpZWxkTmFtZXMpIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIEZpZWxkIG5hbWVcclxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAgICAgKiBAdGhpcyBPYmplY3RcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkTmFtZXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWVzW2ldICE9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbZmllbGROYW1lc1tpXV07XHJcbiAgICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgY29udmVyc2lvbiBvcHRpb25zIHVzZWQgZm9yIHtAbGluayBNZXNzYWdlI3RvSlNPTn0gaW1wbGVtZW50YXRpb25zLlxyXG4gKlxyXG4gKiBUaGVzZSBvcHRpb25zIGFyZSBjbG9zZSB0byBwcm90bzMncyBKU09OIG1hcHBpbmcgd2l0aCB0aGUgZXhjZXB0aW9uIHRoYXQgaW50ZXJuYWwgdHlwZXMgbGlrZSBBbnkgYXJlIGhhbmRsZWQganVzdCBsaWtlIG1lc3NhZ2VzLiBNb3JlIHByZWNpc2VseTpcclxuICpcclxuICogLSBMb25ncyBiZWNvbWUgc3RyaW5nc1xyXG4gKiAtIEVudW1zIGJlY29tZSBzdHJpbmcga2V5c1xyXG4gKiAtIEJ5dGVzIGJlY29tZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXHJcbiAqIC0gKFN1Yi0pTWVzc2FnZXMgYmVjb21lIHBsYWluIG9iamVjdHNcclxuICogLSBNYXBzIGJlY29tZSBwbGFpbiBvYmplY3RzIHdpdGggYWxsIHN0cmluZyBrZXlzXHJcbiAqIC0gUmVwZWF0ZWQgZmllbGRzIGJlY29tZSBhcnJheXNcclxuICogLSBOYU4gYW5kIEluZmluaXR5IGZvciBmbG9hdCBhbmQgZG91YmxlIGZpZWxkcyBiZWNvbWUgc3RyaW5nc1xyXG4gKlxyXG4gKiBAdHlwZSB7SUNvbnZlcnNpb25PcHRpb25zfVxyXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzM/aGw9ZW4janNvblxyXG4gKi9cclxudXRpbC50b0pTT05PcHRpb25zID0ge1xyXG4gICAgbG9uZ3M6IFN0cmluZyxcclxuICAgIGVudW1zOiBTdHJpbmcsXHJcbiAgICBieXRlczogU3RyaW5nLFxyXG4gICAganNvbjogdHJ1ZVxyXG59O1xyXG5cclxuLy8gU2V0cyB1cCBidWZmZXIgdXRpbGl0eSBhY2NvcmRpbmcgdG8gdGhlIGVudmlyb25tZW50IChjYWxsZWQgaW4gaW5kZXgtbWluaW1hbClcclxudXRpbC5fY29uZmlndXJlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgQnVmZmVyID0gdXRpbC5CdWZmZXI7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgIGlmICghQnVmZmVyKSB7XHJcbiAgICAgICAgdXRpbC5fQnVmZmVyX2Zyb20gPSB1dGlsLl9CdWZmZXJfYWxsb2NVbnNhZmUgPSBudWxsO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGJlY2F1c2Ugbm9kZSA0LnggYnVmZmVycyBhcmUgaW5jb21wYXRpYmxlICYgaW1tdXRhYmxlXHJcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kY29kZUlPL3Byb3RvYnVmLmpzL3B1bGwvNjY1XHJcbiAgICB1dGlsLl9CdWZmZXJfZnJvbSA9IEJ1ZmZlci5mcm9tICE9PSBVaW50OEFycmF5LmZyb20gJiYgQnVmZmVyLmZyb20gfHxcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIEJ1ZmZlcl9mcm9tKHZhbHVlLCBlbmNvZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmcpO1xyXG4gICAgICAgIH07XHJcbiAgICB1dGlsLl9CdWZmZXJfYWxsb2NVbnNhZmUgPSBCdWZmZXIuYWxsb2NVbnNhZmUgfHxcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIEJ1ZmZlcl9hbGxvY1Vuc2FmZShzaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnVmZmVyKHNpemUpO1xyXG4gICAgICAgIH07XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHZlcmlmaWVyO1xyXG5cclxudmFyIEVudW0gICAgICA9IHJlcXVpcmUoXCIuL2VudW1cIiksXHJcbiAgICB1dGlsICAgICAgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xyXG5cclxuZnVuY3Rpb24gaW52YWxpZChmaWVsZCwgZXhwZWN0ZWQpIHtcclxuICAgIHJldHVybiBmaWVsZC5uYW1lICsgXCI6IFwiICsgZXhwZWN0ZWQgKyAoZmllbGQucmVwZWF0ZWQgJiYgZXhwZWN0ZWQgIT09IFwiYXJyYXlcIiA/IFwiW11cIiA6IGZpZWxkLm1hcCAmJiBleHBlY3RlZCAhPT0gXCJvYmplY3RcIiA/IFwie2s6XCIrZmllbGQua2V5VHlwZStcIn1cIiA6IFwiXCIpICsgXCIgZXhwZWN0ZWRcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHBhcnRpYWwgdmFsdWUgdmVyaWZpZXIuXHJcbiAqIEBwYXJhbSB7Q29kZWdlbn0gZ2VuIENvZGVnZW4gaW5zdGFuY2VcclxuICogQHBhcmFtIHtGaWVsZH0gZmllbGQgUmVmbGVjdGVkIGZpZWxkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZEluZGV4IEZpZWxkIGluZGV4XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWYgVmFyaWFibGUgcmVmZXJlbmNlXHJcbiAqIEByZXR1cm5zIHtDb2RlZ2VufSBDb2RlZ2VuIGluc3RhbmNlXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmZ1bmN0aW9uIGdlblZlcmlmeVZhbHVlKGdlbiwgZmllbGQsIGZpZWxkSW5kZXgsIHJlZikge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUgKi9cclxuICAgIGlmIChmaWVsZC5yZXNvbHZlZFR5cGUpIHtcclxuICAgICAgICBpZiAoZmllbGQucmVzb2x2ZWRUeXBlIGluc3RhbmNlb2YgRW51bSkgeyBnZW5cclxuICAgICAgICAgICAgKFwic3dpdGNoKCVzKXtcIiwgcmVmKVxyXG4gICAgICAgICAgICAgICAgKFwiZGVmYXVsdDpcIilcclxuICAgICAgICAgICAgICAgICAgICAoXCJyZXR1cm4lalwiLCBpbnZhbGlkKGZpZWxkLCBcImVudW0gdmFsdWVcIikpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXlzID0gT2JqZWN0LmtleXMoZmllbGQucmVzb2x2ZWRUeXBlLnZhbHVlcyksIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7ICsraikgZ2VuXHJcbiAgICAgICAgICAgICAgICAoXCJjYXNlICVpOlwiLCBmaWVsZC5yZXNvbHZlZFR5cGUudmFsdWVzW2tleXNbal1dKTtcclxuICAgICAgICAgICAgZ2VuXHJcbiAgICAgICAgICAgICAgICAgICAgKFwiYnJlYWtcIilcclxuICAgICAgICAgICAgKFwifVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnZW5cclxuICAgICAgICAgICAgKFwie1wiKVxyXG4gICAgICAgICAgICAgICAgKFwidmFyIGU9dHlwZXNbJWldLnZlcmlmeSglcyk7XCIsIGZpZWxkSW5kZXgsIHJlZilcclxuICAgICAgICAgICAgICAgIChcImlmKGUpXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKFwicmV0dXJuJWorZVwiLCBmaWVsZC5uYW1lICsgXCIuXCIpXHJcbiAgICAgICAgICAgIChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImludDMyXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1aW50MzJcIjpcclxuICAgICAgICAgICAgY2FzZSBcInNpbnQzMlwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZml4ZWQzMlwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2ZpeGVkMzJcIjogZ2VuXHJcbiAgICAgICAgICAgICAgICAoXCJpZighdXRpbC5pc0ludGVnZXIoJXMpKVwiLCByZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgKFwicmV0dXJuJWpcIiwgaW52YWxpZChmaWVsZCwgXCJpbnRlZ2VyXCIpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW50NjRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInVpbnQ2NFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2ludDY0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaXhlZDY0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZml4ZWQ2NFwiOiBnZW5cclxuICAgICAgICAgICAgICAgIChcImlmKCF1dGlsLmlzSW50ZWdlciglcykmJiEoJXMmJnV0aWwuaXNJbnRlZ2VyKCVzLmxvdykmJnV0aWwuaXNJbnRlZ2VyKCVzLmhpZ2gpKSlcIiwgcmVmLCByZWYsIHJlZiwgcmVmKVxyXG4gICAgICAgICAgICAgICAgICAgIChcInJldHVybiVqXCIsIGludmFsaWQoZmllbGQsIFwiaW50ZWdlcnxMb25nXCIpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmxvYXRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImRvdWJsZVwiOiBnZW5cclxuICAgICAgICAgICAgICAgIChcImlmKHR5cGVvZiAlcyE9PVxcXCJudW1iZXJcXFwiKVwiLCByZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgKFwicmV0dXJuJWpcIiwgaW52YWxpZChmaWVsZCwgXCJudW1iZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJib29sXCI6IGdlblxyXG4gICAgICAgICAgICAgICAgKFwiaWYodHlwZW9mICVzIT09XFxcImJvb2xlYW5cXFwiKVwiLCByZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgKFwicmV0dXJuJWpcIiwgaW52YWxpZChmaWVsZCwgXCJib29sZWFuXCIpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IGdlblxyXG4gICAgICAgICAgICAgICAgKFwiaWYoIXV0aWwuaXNTdHJpbmcoJXMpKVwiLCByZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgKFwicmV0dXJuJWpcIiwgaW52YWxpZChmaWVsZCwgXCJzdHJpbmdcIikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJieXRlc1wiOiBnZW5cclxuICAgICAgICAgICAgICAgIChcImlmKCEoJXMmJnR5cGVvZiAlcy5sZW5ndGg9PT1cXFwibnVtYmVyXFxcInx8dXRpbC5pc1N0cmluZyglcykpKVwiLCByZWYsIHJlZiwgcmVmKVxyXG4gICAgICAgICAgICAgICAgICAgIChcInJldHVybiVqXCIsIGludmFsaWQoZmllbGQsIFwiYnVmZmVyXCIpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBnZW47XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwYXJ0aWFsIGtleSB2ZXJpZmllci5cclxuICogQHBhcmFtIHtDb2RlZ2VufSBnZW4gQ29kZWdlbiBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge0ZpZWxkfSBmaWVsZCBSZWZsZWN0ZWQgZmllbGRcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlZiBWYXJpYWJsZSByZWZlcmVuY2VcclxuICogQHJldHVybnMge0NvZGVnZW59IENvZGVnZW4gaW5zdGFuY2VcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuVmVyaWZ5S2V5KGdlbiwgZmllbGQsIHJlZikge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUgKi9cclxuICAgIHN3aXRjaCAoZmllbGQua2V5VHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJpbnQzMlwiOlxyXG4gICAgICAgIGNhc2UgXCJ1aW50MzJcIjpcclxuICAgICAgICBjYXNlIFwic2ludDMyXCI6XHJcbiAgICAgICAgY2FzZSBcImZpeGVkMzJcIjpcclxuICAgICAgICBjYXNlIFwic2ZpeGVkMzJcIjogZ2VuXHJcbiAgICAgICAgICAgIChcImlmKCF1dGlsLmtleTMyUmUudGVzdCglcykpXCIsIHJlZilcclxuICAgICAgICAgICAgICAgIChcInJldHVybiVqXCIsIGludmFsaWQoZmllbGQsIFwiaW50ZWdlciBrZXlcIikpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiaW50NjRcIjpcclxuICAgICAgICBjYXNlIFwidWludDY0XCI6XHJcbiAgICAgICAgY2FzZSBcInNpbnQ2NFwiOlxyXG4gICAgICAgIGNhc2UgXCJmaXhlZDY0XCI6XHJcbiAgICAgICAgY2FzZSBcInNmaXhlZDY0XCI6IGdlblxyXG4gICAgICAgICAgICAoXCJpZighdXRpbC5rZXk2NFJlLnRlc3QoJXMpKVwiLCByZWYpIC8vIHNlZSBjb21tZW50IGFib3ZlOiB4IGlzIG9rLCBkIGlzIG5vdFxyXG4gICAgICAgICAgICAgICAgKFwicmV0dXJuJWpcIiwgaW52YWxpZChmaWVsZCwgXCJpbnRlZ2VyfExvbmcga2V5XCIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJvb2xcIjogZ2VuXHJcbiAgICAgICAgICAgIChcImlmKCF1dGlsLmtleTJSZS50ZXN0KCVzKSlcIiwgcmVmKVxyXG4gICAgICAgICAgICAgICAgKFwicmV0dXJuJWpcIiwgaW52YWxpZChmaWVsZCwgXCJib29sZWFuIGtleVwiKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdlbjtcclxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5leHBlY3RlZC1tdWx0aWxpbmUgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHZlcmlmaWVyIHNwZWNpZmljIHRvIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSB0eXBlLlxyXG4gKiBAcGFyYW0ge1R5cGV9IG10eXBlIE1lc3NhZ2UgdHlwZVxyXG4gKiBAcmV0dXJucyB7Q29kZWdlbn0gQ29kZWdlbiBpbnN0YW5jZVxyXG4gKi9cclxuZnVuY3Rpb24gdmVyaWZpZXIobXR5cGUpIHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXHJcblxyXG4gICAgdmFyIGdlbiA9IHV0aWwuY29kZWdlbihbXCJtXCJdLCBtdHlwZS5uYW1lICsgXCIkdmVyaWZ5XCIpXHJcbiAgICAoXCJpZih0eXBlb2YgbSE9PVxcXCJvYmplY3RcXFwifHxtPT09bnVsbClcIilcclxuICAgICAgICAoXCJyZXR1cm4lalwiLCBcIm9iamVjdCBleHBlY3RlZFwiKTtcclxuICAgIHZhciBvbmVvZnMgPSBtdHlwZS5vbmVvZnNBcnJheSxcclxuICAgICAgICBzZWVuRmlyc3RGaWVsZCA9IHt9O1xyXG4gICAgaWYgKG9uZW9mcy5sZW5ndGgpIGdlblxyXG4gICAgKFwidmFyIHA9e31cIik7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAvKiBpbml0aWFsaXplcyAqLyBtdHlwZS5maWVsZHNBcnJheS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBmaWVsZCA9IG10eXBlLl9maWVsZHNBcnJheVtpXS5yZXNvbHZlKCksXHJcbiAgICAgICAgICAgIHJlZiAgID0gXCJtXCIgKyB1dGlsLnNhZmVQcm9wKGZpZWxkLm5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoZmllbGQub3B0aW9uYWwpIGdlblxyXG4gICAgICAgIChcImlmKCVzIT1udWxsJiZtLmhhc093blByb3BlcnR5KCVqKSl7XCIsIHJlZiwgZmllbGQubmFtZSk7IC8vICE9PSB1bmRlZmluZWQgJiYgIT09IG51bGxcclxuXHJcbiAgICAgICAgLy8gbWFwIGZpZWxkc1xyXG4gICAgICAgIGlmIChmaWVsZC5tYXApIHsgZ2VuXHJcbiAgICAgICAgICAgIChcImlmKCF1dGlsLmlzT2JqZWN0KCVzKSlcIiwgcmVmKVxyXG4gICAgICAgICAgICAgICAgKFwicmV0dXJuJWpcIiwgaW52YWxpZChmaWVsZCwgXCJvYmplY3RcIikpXHJcbiAgICAgICAgICAgIChcInZhciBrPU9iamVjdC5rZXlzKCVzKVwiLCByZWYpXHJcbiAgICAgICAgICAgIChcImZvcih2YXIgaT0wO2k8ay5sZW5ndGg7KytpKXtcIik7XHJcbiAgICAgICAgICAgICAgICBnZW5WZXJpZnlLZXkoZ2VuLCBmaWVsZCwgXCJrW2ldXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2VuVmVyaWZ5VmFsdWUoZ2VuLCBmaWVsZCwgaSwgcmVmICsgXCJba1tpXV1cIilcclxuICAgICAgICAgICAgKFwifVwiKTtcclxuXHJcbiAgICAgICAgLy8gcmVwZWF0ZWQgZmllbGRzXHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5yZXBlYXRlZCkgeyBnZW5cclxuICAgICAgICAgICAgKFwiaWYoIUFycmF5LmlzQXJyYXkoJXMpKVwiLCByZWYpXHJcbiAgICAgICAgICAgICAgICAoXCJyZXR1cm4lalwiLCBpbnZhbGlkKGZpZWxkLCBcImFycmF5XCIpKVxyXG4gICAgICAgICAgICAoXCJmb3IodmFyIGk9MDtpPCVzLmxlbmd0aDsrK2kpe1wiLCByZWYpO1xyXG4gICAgICAgICAgICAgICAgZ2VuVmVyaWZ5VmFsdWUoZ2VuLCBmaWVsZCwgaSwgcmVmICsgXCJbaV1cIilcclxuICAgICAgICAgICAgKFwifVwiKTtcclxuXHJcbiAgICAgICAgLy8gcmVxdWlyZWQgb3IgcHJlc2VudCBmaWVsZHNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQucGFydE9mKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb25lb2ZQcm9wID0gdXRpbC5zYWZlUHJvcChmaWVsZC5wYXJ0T2YubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VlbkZpcnN0RmllbGRbZmllbGQucGFydE9mLm5hbWVdID09PSAxKSBnZW5cclxuICAgICAgICAgICAgKFwiaWYocCVzPT09MSlcIiwgb25lb2ZQcm9wKVxyXG4gICAgICAgICAgICAgICAgKFwicmV0dXJuJWpcIiwgZmllbGQucGFydE9mLm5hbWUgKyBcIjogbXVsdGlwbGUgdmFsdWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VlbkZpcnN0RmllbGRbZmllbGQucGFydE9mLm5hbWVdID0gMTtcclxuICAgICAgICAgICAgICAgIGdlblxyXG4gICAgICAgICAgICAoXCJwJXM9MVwiLCBvbmVvZlByb3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdlblZlcmlmeVZhbHVlKGdlbiwgZmllbGQsIGksIHJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWVsZC5vcHRpb25hbCkgZ2VuXHJcbiAgICAgICAgKFwifVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZW5cclxuICAgIChcInJldHVybiBudWxsXCIpO1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSAqL1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKipcclxuICogV3JhcHBlcnMgZm9yIGNvbW1vbiB0eXBlcy5cclxuICogQHR5cGUge09iamVjdC48c3RyaW5nLElXcmFwcGVyPn1cclxuICogQGNvbnN0XHJcbiAqL1xyXG52YXIgd3JhcHBlcnMgPSBleHBvcnRzO1xyXG5cclxudmFyIE1lc3NhZ2UgPSByZXF1aXJlKFwiLi9tZXNzYWdlXCIpO1xyXG5cclxuLyoqXHJcbiAqIEZyb20gb2JqZWN0IGNvbnZlcnRlciBwYXJ0IG9mIGFuIHtAbGluayBJV3JhcHBlcn0uXHJcbiAqIEB0eXBlZGVmIFdyYXBwZXJGcm9tT2JqZWN0Q29udmVydGVyXHJcbiAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywqPn0gb2JqZWN0IFBsYWluIG9iamVjdFxyXG4gKiBAcmV0dXJucyB7TWVzc2FnZTx7fT59IE1lc3NhZ2UgaW5zdGFuY2VcclxuICogQHRoaXMgVHlwZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUbyBvYmplY3QgY29udmVydGVyIHBhcnQgb2YgYW4ge0BsaW5rIElXcmFwcGVyfS5cclxuICogQHR5cGVkZWYgV3JhcHBlclRvT2JqZWN0Q29udmVydGVyXHJcbiAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICogQHBhcmFtIHtNZXNzYWdlPHt9Pn0gbWVzc2FnZSBNZXNzYWdlIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB7SUNvbnZlcnNpb25PcHRpb25zfSBbb3B0aW9uc10gQ29udmVyc2lvbiBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtPYmplY3QuPHN0cmluZywqPn0gUGxhaW4gb2JqZWN0XHJcbiAqIEB0aGlzIFR5cGVcclxuICovXHJcblxyXG4vKipcclxuICogQ29tbW9uIHR5cGUgd3JhcHBlciBwYXJ0IG9mIHtAbGluayB3cmFwcGVyc30uXHJcbiAqIEBpbnRlcmZhY2UgSVdyYXBwZXJcclxuICogQHByb3BlcnR5IHtXcmFwcGVyRnJvbU9iamVjdENvbnZlcnRlcn0gW2Zyb21PYmplY3RdIEZyb20gb2JqZWN0IGNvbnZlcnRlclxyXG4gKiBAcHJvcGVydHkge1dyYXBwZXJUb09iamVjdENvbnZlcnRlcn0gW3RvT2JqZWN0XSBUbyBvYmplY3QgY29udmVydGVyXHJcbiAqL1xyXG5cclxuLy8gQ3VzdG9tIHdyYXBwZXIgZm9yIEFueVxyXG53cmFwcGVyc1tcIi5nb29nbGUucHJvdG9idWYuQW55XCJdID0ge1xyXG5cclxuICAgIGZyb21PYmplY3Q6IGZ1bmN0aW9uKG9iamVjdCkge1xyXG5cclxuICAgICAgICAvLyB1bndyYXAgdmFsdWUgdHlwZSBpZiBtYXBwZWRcclxuICAgICAgICBpZiAob2JqZWN0ICYmIG9iamVjdFtcIkB0eXBlXCJdKSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gdGhpcy5sb29rdXAob2JqZWN0W1wiQHR5cGVcIl0pO1xyXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdHlwZV91cmwgZG9lcyBub3QgYWNjZXB0IGxlYWRpbmcgXCIuXCJcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlX3VybCA9IG9iamVjdFtcIkB0eXBlXCJdLmNoYXJBdCgwKSA9PT0gXCIuXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtcIkB0eXBlXCJdLnN1YnN0cigxKSA6IG9iamVjdFtcIkB0eXBlXCJdO1xyXG4gICAgICAgICAgICAgICAgLy8gdHlwZV91cmwgcHJlZml4IGlzIG9wdGlvbmFsLCBidXQgcGF0aCBzZXBlcmF0b3IgaXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZV91cmw6IFwiL1wiICsgdHlwZV91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUuZW5jb2RlKHR5cGUuZnJvbU9iamVjdChvYmplY3QpKS5maW5pc2goKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZyb21PYmplY3Qob2JqZWN0KTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9PYmplY3Q6IGZ1bmN0aW9uKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgLy8gZGVjb2RlIHZhbHVlIGlmIHJlcXVlc3RlZCBhbmQgdW5tYXBwZWRcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmpzb24gJiYgbWVzc2FnZS50eXBlX3VybCAmJiBtZXNzYWdlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgdXNlIGZ1bGx5IHF1YWxpZmllZCB0eXBlIG5hbWUgYWZ0ZXIgdGhlIGxhc3QgJy8nXHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gbWVzc2FnZS50eXBlX3VybC5zdWJzdHJpbmcobWVzc2FnZS50eXBlX3VybC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmxvb2t1cChuYW1lKTtcclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgICAgICAgaWYgKHR5cGUpXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gdHlwZS5kZWNvZGUobWVzc2FnZS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3cmFwIHZhbHVlIGlmIHVubWFwcGVkXHJcbiAgICAgICAgaWYgKCEobWVzc2FnZSBpbnN0YW5jZW9mIHRoaXMuY3RvcikgJiYgbWVzc2FnZSBpbnN0YW5jZW9mIE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG1lc3NhZ2UuJHR5cGUudG9PYmplY3QobWVzc2FnZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIG9iamVjdFtcIkB0eXBlXCJdID0gbWVzc2FnZS4kdHlwZS5mdWxsTmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KG1lc3NhZ2UsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBXcml0ZXI7XHJcblxyXG52YXIgdXRpbCAgICAgID0gcmVxdWlyZShcIi4vdXRpbC9taW5pbWFsXCIpO1xyXG5cclxudmFyIEJ1ZmZlcldyaXRlcjsgLy8gY3ljbGljXHJcblxyXG52YXIgTG9uZ0JpdHMgID0gdXRpbC5Mb25nQml0cyxcclxuICAgIGJhc2U2NCAgICA9IHV0aWwuYmFzZTY0LFxyXG4gICAgdXRmOCAgICAgID0gdXRpbC51dGY4O1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBuZXcgd3JpdGVyIG9wZXJhdGlvbiBpbnN0YW5jZS5cclxuICogQGNsYXNzZGVzYyBTY2hlZHVsZWQgd3JpdGVyIG9wZXJhdGlvbi5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgVWludDhBcnJheSwgbnVtYmVyKX0gZm4gRnVuY3Rpb24gdG8gY2FsbFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuIFZhbHVlIGJ5dGUgbGVuZ3RoXHJcbiAqIEBwYXJhbSB7Kn0gdmFsIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmZ1bmN0aW9uIE9wKGZuLCBsZW4sIHZhbCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdG8gY2FsbC5cclxuICAgICAqIEB0eXBlIHtmdW5jdGlvbihVaW50OEFycmF5LCBudW1iZXIsICopfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmZuID0gZm47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSBieXRlIGxlbmd0aC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubGVuID0gbGVuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmV4dCBvcGVyYXRpb24uXHJcbiAgICAgKiBAdHlwZSB7V3JpdGVyLk9wfHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsdWUgdG8gd3JpdGUuXHJcbiAgICAgKiBAdHlwZSB7Kn1cclxuICAgICAqL1xyXG4gICAgdGhpcy52YWwgPSB2YWw7IC8vIHR5cGUgdmFyaWVzXHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmZ1bmN0aW9uIG5vb3AoKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5LWZ1bmN0aW9uXHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIG5ldyB3cml0ZXIgc3RhdGUgaW5zdGFuY2UuXHJcbiAqIEBjbGFzc2Rlc2MgQ29waWVkIHdyaXRlciBzdGF0ZS5cclxuICogQG1lbWJlcm9mIFdyaXRlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtXcml0ZXJ9IHdyaXRlciBXcml0ZXIgdG8gY29weSBzdGF0ZSBmcm9tXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmZ1bmN0aW9uIFN0YXRlKHdyaXRlcikge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VycmVudCBoZWFkLlxyXG4gICAgICogQHR5cGUge1dyaXRlci5PcH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5oZWFkID0gd3JpdGVyLmhlYWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXJyZW50IHRhaWwuXHJcbiAgICAgKiBAdHlwZSB7V3JpdGVyLk9wfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnRhaWwgPSB3cml0ZXIudGFpbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1cnJlbnQgYnVmZmVyIGxlbmd0aC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubGVuID0gd3JpdGVyLmxlbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5leHQgc3RhdGUuXHJcbiAgICAgKiBAdHlwZSB7U3RhdGV8bnVsbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5uZXh0ID0gd3JpdGVyLnN0YXRlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBuZXcgd3JpdGVyIGluc3RhbmNlLlxyXG4gKiBAY2xhc3NkZXNjIFdpcmUgZm9ybWF0IHdyaXRlciB1c2luZyBgVWludDhBcnJheWAgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgYEFycmF5YC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBXcml0ZXIoKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXJyZW50IGxlbmd0aC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMubGVuID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZXJhdGlvbnMgaGVhZC5cclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaGVhZCA9IG5ldyBPcChub29wLCAwLCAwKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZXJhdGlvbnMgdGFpbFxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgdGhpcy50YWlsID0gdGhpcy5oZWFkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlua2VkIGZvcmtlZCBzdGF0ZXMuXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhdGVzID0gbnVsbDtcclxuXHJcbiAgICAvLyBXaGVuIGEgdmFsdWUgaXMgd3JpdHRlbiwgdGhlIHdyaXRlciBjYWxjdWxhdGVzIGl0cyBieXRlIGxlbmd0aCBhbmQgcHV0cyBpdCBpbnRvIGEgbGlua2VkXHJcbiAgICAvLyBsaXN0IG9mIG9wZXJhdGlvbnMgdG8gcGVyZm9ybSB3aGVuIGZpbmlzaCgpIGlzIGNhbGxlZC4gVGhpcyBib3RoIGFsbG93cyB1cyB0byBhbGxvY2F0ZVxyXG4gICAgLy8gYnVmZmVycyBvZiB0aGUgZXhhY3QgcmVxdWlyZWQgc2l6ZSBhbmQgcmVkdWNlcyB0aGUgYW1vdW50IG9mIHdvcmsgd2UgaGF2ZSB0byBkbyBjb21wYXJlZFxyXG4gICAgLy8gdG8gZmlyc3QgY2FsY3VsYXRpbmcgb3ZlciBvYmplY3RzIGFuZCB0aGVuIGVuY29kaW5nIG92ZXIgb2JqZWN0cy4gSW4gb3VyIGNhc2UsIHRoZSBlbmNvZGluZ1xyXG4gICAgLy8gcGFydCBpcyBqdXN0IGEgbGlua2VkIGxpc3Qgd2FsayBjYWxsaW5nIG9wZXJhdGlvbnMgd2l0aCBhbHJlYWR5IHByZXBhcmVkIHZhbHVlcy5cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgd3JpdGVyLlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHJldHVybnMge0J1ZmZlcldyaXRlcnxXcml0ZXJ9IEEge0BsaW5rIEJ1ZmZlcldyaXRlcn0gd2hlbiBCdWZmZXJzIGFyZSBzdXBwb3J0ZWQsIG90aGVyd2lzZSBhIHtAbGluayBXcml0ZXJ9XHJcbiAqL1xyXG5Xcml0ZXIuY3JlYXRlID0gdXRpbC5CdWZmZXJcclxuICAgID8gZnVuY3Rpb24gY3JlYXRlX2J1ZmZlcl9zZXR1cCgpIHtcclxuICAgICAgICByZXR1cm4gKFdyaXRlci5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGVfYnVmZmVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1ZmZlcldyaXRlcigpO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgOiBmdW5jdGlvbiBjcmVhdGVfYXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXcml0ZXIoKTtcclxuICAgIH07XHJcblxyXG4vKipcclxuICogQWxsb2NhdGVzIGEgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgc2l6ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgQnVmZmVyIHNpemVcclxuICogQHJldHVybnMge1VpbnQ4QXJyYXl9IEJ1ZmZlclxyXG4gKi9cclxuV3JpdGVyLmFsbG9jID0gZnVuY3Rpb24gYWxsb2Moc2l6ZSkge1xyXG4gICAgcmV0dXJuIG5ldyB1dGlsLkFycmF5KHNpemUpO1xyXG59O1xyXG5cclxuLy8gVXNlIFVpbnQ4QXJyYXkgYnVmZmVyIHBvb2wgaW4gdGhlIGJyb3dzZXIsIGp1c3QgbGlrZSBub2RlIGRvZXMgd2l0aCBidWZmZXJzXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbmlmICh1dGlsLkFycmF5ICE9PSBBcnJheSlcclxuICAgIFdyaXRlci5hbGxvYyA9IHV0aWwucG9vbChXcml0ZXIuYWxsb2MsIHV0aWwuQXJyYXkucHJvdG90eXBlLnN1YmFycmF5KTtcclxuXHJcbi8qKlxyXG4gKiBQdXNoZXMgYSBuZXcgb3BlcmF0aW9uIHRvIHRoZSBxdWV1ZS5cclxuICogQHBhcmFtIHtmdW5jdGlvbihVaW50OEFycmF5LCBudW1iZXIsICopfSBmbiBGdW5jdGlvbiB0byBjYWxsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW4gVmFsdWUgYnl0ZSBsZW5ndGhcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbCBWYWx1ZSB0byB3cml0ZVxyXG4gKiBAcmV0dXJucyB7V3JpdGVyfSBgdGhpc2BcclxuICogQHByaXZhdGVcclxuICovXHJcbldyaXRlci5wcm90b3R5cGUuX3B1c2ggPSBmdW5jdGlvbiBwdXNoKGZuLCBsZW4sIHZhbCkge1xyXG4gICAgdGhpcy50YWlsID0gdGhpcy50YWlsLm5leHQgPSBuZXcgT3AoZm4sIGxlbiwgdmFsKTtcclxuICAgIHRoaXMubGVuICs9IGxlbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gd3JpdGVCeXRlKHZhbCwgYnVmLCBwb3MpIHtcclxuICAgIGJ1Zltwb3NdID0gdmFsICYgMjU1O1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZVZhcmludDMyKHZhbCwgYnVmLCBwb3MpIHtcclxuICAgIHdoaWxlICh2YWwgPiAxMjcpIHtcclxuICAgICAgICBidWZbcG9zKytdID0gdmFsICYgMTI3IHwgMTI4O1xyXG4gICAgICAgIHZhbCA+Pj49IDc7XHJcbiAgICB9XHJcbiAgICBidWZbcG9zXSA9IHZhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBuZXcgdmFyaW50IHdyaXRlciBvcGVyYXRpb24gaW5zdGFuY2UuXHJcbiAqIEBjbGFzc2Rlc2MgU2NoZWR1bGVkIHZhcmludCB3cml0ZXIgb3BlcmF0aW9uLlxyXG4gKiBAZXh0ZW5kcyBPcFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ9IGxlbiBWYWx1ZSBieXRlIGxlbmd0aFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmZ1bmN0aW9uIFZhcmludE9wKGxlbiwgdmFsKSB7XHJcbiAgICB0aGlzLmxlbiA9IGxlbjtcclxuICAgIHRoaXMubmV4dCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudmFsID0gdmFsO1xyXG59XHJcblxyXG5WYXJpbnRPcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9wLnByb3RvdHlwZSk7XHJcblZhcmludE9wLnByb3RvdHlwZS5mbiA9IHdyaXRlVmFyaW50MzI7XHJcblxyXG4vKipcclxuICogV3JpdGVzIGFuIHVuc2lnbmVkIDMyIGJpdCB2YWx1ZSBhcyBhIHZhcmludC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS51aW50MzIgPSBmdW5jdGlvbiB3cml0ZV91aW50MzIodmFsdWUpIHtcclxuICAgIC8vIGhlcmUsIHRoZSBjYWxsIHRvIHRoaXMucHVzaCBoYXMgYmVlbiBpbmxpbmVkIGFuZCBhIHZhcmludCBzcGVjaWZpYyBPcCBzdWJjbGFzcyBpcyB1c2VkLlxyXG4gICAgLy8gdWludDMyIGlzIGJ5IGZhciB0aGUgbW9zdCBmcmVxdWVudGx5IHVzZWQgb3BlcmF0aW9uIGFuZCBiZW5lZml0cyBzaWduaWZpY2FudGx5IGZyb20gdGhpcy5cclxuICAgIHRoaXMubGVuICs9ICh0aGlzLnRhaWwgPSB0aGlzLnRhaWwubmV4dCA9IG5ldyBWYXJpbnRPcChcclxuICAgICAgICAodmFsdWUgPSB2YWx1ZSA+Pj4gMClcclxuICAgICAgICAgICAgICAgIDwgMTI4ICAgICAgID8gMVxyXG4gICAgICAgIDogdmFsdWUgPCAxNjM4NCAgICAgPyAyXHJcbiAgICAgICAgOiB2YWx1ZSA8IDIwOTcxNTIgICA/IDNcclxuICAgICAgICA6IHZhbHVlIDwgMjY4NDM1NDU2ID8gNFxyXG4gICAgICAgIDogICAgICAgICAgICAgICAgICAgICA1LFxyXG4gICAgdmFsdWUpKS5sZW47XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXcml0ZXMgYSBzaWduZWQgMzIgYml0IHZhbHVlIGFzIGEgdmFyaW50LlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5pbnQzMiA9IGZ1bmN0aW9uIHdyaXRlX2ludDMyKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPCAwXHJcbiAgICAgICAgPyB0aGlzLl9wdXNoKHdyaXRlVmFyaW50NjQsIDEwLCBMb25nQml0cy5mcm9tTnVtYmVyKHZhbHVlKSkgLy8gMTAgYnl0ZXMgcGVyIHNwZWNcclxuICAgICAgICA6IHRoaXMudWludDMyKHZhbHVlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXcml0ZXMgYSAzMiBiaXQgdmFsdWUgYXMgYSB2YXJpbnQsIHppZy16YWcgZW5jb2RlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5zaW50MzIgPSBmdW5jdGlvbiB3cml0ZV9zaW50MzIodmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLnVpbnQzMigodmFsdWUgPDwgMSBeIHZhbHVlID4+IDMxKSA+Pj4gMCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB3cml0ZVZhcmludDY0KHZhbCwgYnVmLCBwb3MpIHtcclxuICAgIHdoaWxlICh2YWwuaGkpIHtcclxuICAgICAgICBidWZbcG9zKytdID0gdmFsLmxvICYgMTI3IHwgMTI4O1xyXG4gICAgICAgIHZhbC5sbyA9ICh2YWwubG8gPj4+IDcgfCB2YWwuaGkgPDwgMjUpID4+PiAwO1xyXG4gICAgICAgIHZhbC5oaSA+Pj49IDc7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAodmFsLmxvID4gMTI3KSB7XHJcbiAgICAgICAgYnVmW3BvcysrXSA9IHZhbC5sbyAmIDEyNyB8IDEyODtcclxuICAgICAgICB2YWwubG8gPSB2YWwubG8gPj4+IDc7XHJcbiAgICB9XHJcbiAgICBidWZbcG9zKytdID0gdmFsLmxvO1xyXG59XHJcblxyXG4vKipcclxuICogV3JpdGVzIGFuIHVuc2lnbmVkIDY0IGJpdCB2YWx1ZSBhcyBhIHZhcmludC5cclxuICogQHBhcmFtIHtMb25nfG51bWJlcnxzdHJpbmd9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGB2YWx1ZWAgaXMgYSBzdHJpbmcgYW5kIG5vIGxvbmcgbGlicmFyeSBpcyBwcmVzZW50LlxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS51aW50NjQgPSBmdW5jdGlvbiB3cml0ZV91aW50NjQodmFsdWUpIHtcclxuICAgIHZhciBiaXRzID0gTG9uZ0JpdHMuZnJvbSh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5fcHVzaCh3cml0ZVZhcmludDY0LCBiaXRzLmxlbmd0aCgpLCBiaXRzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXcml0ZXMgYSBzaWduZWQgNjQgYml0IHZhbHVlIGFzIGEgdmFyaW50LlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtMb25nfG51bWJlcnxzdHJpbmd9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGB2YWx1ZWAgaXMgYSBzdHJpbmcgYW5kIG5vIGxvbmcgbGlicmFyeSBpcyBwcmVzZW50LlxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5pbnQ2NCA9IFdyaXRlci5wcm90b3R5cGUudWludDY0O1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIHNpZ25lZCA2NCBiaXQgdmFsdWUgYXMgYSB2YXJpbnQsIHppZy16YWcgZW5jb2RlZC5cclxuICogQHBhcmFtIHtMb25nfG51bWJlcnxzdHJpbmd9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGB2YWx1ZWAgaXMgYSBzdHJpbmcgYW5kIG5vIGxvbmcgbGlicmFyeSBpcyBwcmVzZW50LlxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5zaW50NjQgPSBmdW5jdGlvbiB3cml0ZV9zaW50NjQodmFsdWUpIHtcclxuICAgIHZhciBiaXRzID0gTG9uZ0JpdHMuZnJvbSh2YWx1ZSkuenpFbmNvZGUoKTtcclxuICAgIHJldHVybiB0aGlzLl9wdXNoKHdyaXRlVmFyaW50NjQsIGJpdHMubGVuZ3RoKCksIGJpdHMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIGJvb2xpc2ggdmFsdWUgYXMgYSB2YXJpbnQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgVmFsdWUgdG8gd3JpdGVcclxuICogQHJldHVybnMge1dyaXRlcn0gYHRoaXNgXHJcbiAqL1xyXG5Xcml0ZXIucHJvdG90eXBlLmJvb2wgPSBmdW5jdGlvbiB3cml0ZV9ib29sKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHVzaCh3cml0ZUJ5dGUsIDEsIHZhbHVlID8gMSA6IDApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gd3JpdGVGaXhlZDMyKHZhbCwgYnVmLCBwb3MpIHtcclxuICAgIGJ1Zltwb3MgICAgXSA9ICB2YWwgICAgICAgICAmIDI1NTtcclxuICAgIGJ1Zltwb3MgKyAxXSA9ICB2YWwgPj4+IDggICAmIDI1NTtcclxuICAgIGJ1Zltwb3MgKyAyXSA9ICB2YWwgPj4+IDE2ICAmIDI1NTtcclxuICAgIGJ1Zltwb3MgKyAzXSA9ICB2YWwgPj4+IDI0O1xyXG59XHJcblxyXG4vKipcclxuICogV3JpdGVzIGFuIHVuc2lnbmVkIDMyIGJpdCB2YWx1ZSBhcyBmaXhlZCAzMiBiaXRzLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgdG8gd3JpdGVcclxuICogQHJldHVybnMge1dyaXRlcn0gYHRoaXNgXHJcbiAqL1xyXG5Xcml0ZXIucHJvdG90eXBlLmZpeGVkMzIgPSBmdW5jdGlvbiB3cml0ZV9maXhlZDMyKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHVzaCh3cml0ZUZpeGVkMzIsIDQsIHZhbHVlID4+PiAwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXcml0ZXMgYSBzaWduZWQgMzIgYml0IHZhbHVlIGFzIGZpeGVkIDMyIGJpdHMuXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUgdG8gd3JpdGVcclxuICogQHJldHVybnMge1dyaXRlcn0gYHRoaXNgXHJcbiAqL1xyXG5Xcml0ZXIucHJvdG90eXBlLnNmaXhlZDMyID0gV3JpdGVyLnByb3RvdHlwZS5maXhlZDMyO1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhbiB1bnNpZ25lZCA2NCBiaXQgdmFsdWUgYXMgZml4ZWQgNjQgYml0cy5cclxuICogQHBhcmFtIHtMb25nfG51bWJlcnxzdHJpbmd9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGB2YWx1ZWAgaXMgYSBzdHJpbmcgYW5kIG5vIGxvbmcgbGlicmFyeSBpcyBwcmVzZW50LlxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5maXhlZDY0ID0gZnVuY3Rpb24gd3JpdGVfZml4ZWQ2NCh2YWx1ZSkge1xyXG4gICAgdmFyIGJpdHMgPSBMb25nQml0cy5mcm9tKHZhbHVlKTtcclxuICAgIHJldHVybiB0aGlzLl9wdXNoKHdyaXRlRml4ZWQzMiwgNCwgYml0cy5sbykuX3B1c2god3JpdGVGaXhlZDMyLCA0LCBiaXRzLmhpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXcml0ZXMgYSBzaWduZWQgNjQgYml0IHZhbHVlIGFzIGZpeGVkIDY0IGJpdHMuXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge0xvbmd8bnVtYmVyfHN0cmluZ30gdmFsdWUgVmFsdWUgdG8gd3JpdGVcclxuICogQHJldHVybnMge1dyaXRlcn0gYHRoaXNgXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgYHZhbHVlYCBpcyBhIHN0cmluZyBhbmQgbm8gbG9uZyBsaWJyYXJ5IGlzIHByZXNlbnQuXHJcbiAqL1xyXG5Xcml0ZXIucHJvdG90eXBlLnNmaXhlZDY0ID0gV3JpdGVyLnByb3RvdHlwZS5maXhlZDY0O1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIGZsb2F0ICgzMiBiaXQpLlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5mbG9hdCA9IGZ1bmN0aW9uIHdyaXRlX2Zsb2F0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHVzaCh1dGlsLmZsb2F0LndyaXRlRmxvYXRMRSwgNCwgdmFsdWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIGRvdWJsZSAoNjQgYml0IGZsb2F0KS5cclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byB3cml0ZVxyXG4gKiBAcmV0dXJucyB7V3JpdGVyfSBgdGhpc2BcclxuICovXHJcbldyaXRlci5wcm90b3R5cGUuZG91YmxlID0gZnVuY3Rpb24gd3JpdGVfZG91YmxlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHVzaCh1dGlsLmZsb2F0LndyaXRlRG91YmxlTEUsIDgsIHZhbHVlKTtcclxufTtcclxuXHJcbnZhciB3cml0ZUJ5dGVzID0gdXRpbC5BcnJheS5wcm90b3R5cGUuc2V0XHJcbiAgICA/IGZ1bmN0aW9uIHdyaXRlQnl0ZXNfc2V0KHZhbCwgYnVmLCBwb3MpIHtcclxuICAgICAgICBidWYuc2V0KHZhbCwgcG9zKTsgLy8gYWxzbyB3b3JrcyBmb3IgcGxhaW4gYXJyYXkgdmFsdWVzXHJcbiAgICB9XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgOiBmdW5jdGlvbiB3cml0ZUJ5dGVzX2Zvcih2YWwsIGJ1ZiwgcG9zKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIGJ1Zltwb3MgKyBpXSA9IHZhbFtpXTtcclxuICAgIH07XHJcblxyXG4vKipcclxuICogV3JpdGVzIGEgc2VxdWVuY2Ugb2YgYnl0ZXMuXHJcbiAqIEBwYXJhbSB7VWludDhBcnJheXxzdHJpbmd9IHZhbHVlIEJ1ZmZlciBvciBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdG8gd3JpdGVcclxuICogQHJldHVybnMge1dyaXRlcn0gYHRoaXNgXHJcbiAqL1xyXG5Xcml0ZXIucHJvdG90eXBlLmJ5dGVzID0gZnVuY3Rpb24gd3JpdGVfYnl0ZXModmFsdWUpIHtcclxuICAgIHZhciBsZW4gPSB2YWx1ZS5sZW5ndGggPj4+IDA7XHJcbiAgICBpZiAoIWxlbilcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHVzaCh3cml0ZUJ5dGUsIDEsIDApO1xyXG4gICAgaWYgKHV0aWwuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgdmFyIGJ1ZiA9IFdyaXRlci5hbGxvYyhsZW4gPSBiYXNlNjQubGVuZ3RoKHZhbHVlKSk7XHJcbiAgICAgICAgYmFzZTY0LmRlY29kZSh2YWx1ZSwgYnVmLCAwKTtcclxuICAgICAgICB2YWx1ZSA9IGJ1ZjtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVpbnQzMihsZW4pLl9wdXNoKHdyaXRlQnl0ZXMsIGxlbiwgdmFsdWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIHN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFZhbHVlIHRvIHdyaXRlXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5zdHJpbmcgPSBmdW5jdGlvbiB3cml0ZV9zdHJpbmcodmFsdWUpIHtcclxuICAgIHZhciBsZW4gPSB1dGY4Lmxlbmd0aCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gbGVuXHJcbiAgICAgICAgPyB0aGlzLnVpbnQzMihsZW4pLl9wdXNoKHV0Zjgud3JpdGUsIGxlbiwgdmFsdWUpXHJcbiAgICAgICAgOiB0aGlzLl9wdXNoKHdyaXRlQnl0ZSwgMSwgMCk7XHJcbn07XHJcblxyXG4vKipcclxuICogRm9ya3MgdGhpcyB3cml0ZXIncyBzdGF0ZSBieSBwdXNoaW5nIGl0IHRvIGEgc3RhY2suXHJcbiAqIENhbGxpbmcge0BsaW5rIFdyaXRlciNyZXNldHxyZXNldH0gb3Ige0BsaW5rIFdyaXRlciNsZGVsaW18bGRlbGltfSByZXNldHMgdGhlIHdyaXRlciB0byB0aGUgcHJldmlvdXMgc3RhdGUuXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gZm9yaygpIHtcclxuICAgIHRoaXMuc3RhdGVzID0gbmV3IFN0YXRlKHRoaXMpO1xyXG4gICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbmV3IE9wKG5vb3AsIDAsIDApO1xyXG4gICAgdGhpcy5sZW4gPSAwO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVzZXRzIHRoaXMgaW5zdGFuY2UgdG8gdGhlIGxhc3Qgc3RhdGUuXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGVzKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkICAgPSB0aGlzLnN0YXRlcy5oZWFkO1xyXG4gICAgICAgIHRoaXMudGFpbCAgID0gdGhpcy5zdGF0ZXMudGFpbDtcclxuICAgICAgICB0aGlzLmxlbiAgICA9IHRoaXMuc3RhdGVzLmxlbjtcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHRoaXMuc3RhdGVzLm5leHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG5ldyBPcChub29wLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmxlbiAgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVzZXRzIHRvIHRoZSBsYXN0IHN0YXRlIGFuZCBhcHBlbmRzIHRoZSBmb3JrIHN0YXRlJ3MgY3VycmVudCB3cml0ZSBsZW5ndGggYXMgYSB2YXJpbnQgZm9sbG93ZWQgYnkgaXRzIG9wZXJhdGlvbnMuXHJcbiAqIEByZXR1cm5zIHtXcml0ZXJ9IGB0aGlzYFxyXG4gKi9cclxuV3JpdGVyLnByb3RvdHlwZS5sZGVsaW0gPSBmdW5jdGlvbiBsZGVsaW0oKSB7XHJcbiAgICB2YXIgaGVhZCA9IHRoaXMuaGVhZCxcclxuICAgICAgICB0YWlsID0gdGhpcy50YWlsLFxyXG4gICAgICAgIGxlbiAgPSB0aGlzLmxlbjtcclxuICAgIHRoaXMucmVzZXQoKS51aW50MzIobGVuKTtcclxuICAgIGlmIChsZW4pIHtcclxuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IGhlYWQubmV4dDsgLy8gc2tpcCBub29wXHJcbiAgICAgICAgdGhpcy50YWlsID0gdGFpbDtcclxuICAgICAgICB0aGlzLmxlbiArPSBsZW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaW5pc2hlcyB0aGUgd3JpdGUgb3BlcmF0aW9uLlxyXG4gKiBAcmV0dXJucyB7VWludDhBcnJheX0gRmluaXNoZWQgYnVmZmVyXHJcbiAqL1xyXG5Xcml0ZXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uIGZpbmlzaCgpIHtcclxuICAgIHZhciBoZWFkID0gdGhpcy5oZWFkLm5leHQsIC8vIHNraXAgbm9vcFxyXG4gICAgICAgIGJ1ZiAgPSB0aGlzLmNvbnN0cnVjdG9yLmFsbG9jKHRoaXMubGVuKSxcclxuICAgICAgICBwb3MgID0gMDtcclxuICAgIHdoaWxlIChoZWFkKSB7XHJcbiAgICAgICAgaGVhZC5mbihoZWFkLnZhbCwgYnVmLCBwb3MpO1xyXG4gICAgICAgIHBvcyArPSBoZWFkLmxlbjtcclxuICAgICAgICBoZWFkID0gaGVhZC5uZXh0O1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcclxuICAgIHJldHVybiBidWY7XHJcbn07XHJcblxyXG5Xcml0ZXIuX2NvbmZpZ3VyZSA9IGZ1bmN0aW9uKEJ1ZmZlcldyaXRlcl8pIHtcclxuICAgIEJ1ZmZlcldyaXRlciA9IEJ1ZmZlcldyaXRlcl87XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEJ1ZmZlcldyaXRlcjtcclxuXHJcbi8vIGV4dGVuZHMgV3JpdGVyXHJcbnZhciBXcml0ZXIgPSByZXF1aXJlKFwiLi93cml0ZXJcIik7XHJcbihCdWZmZXJXcml0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShXcml0ZXIucHJvdG90eXBlKSkuY29uc3RydWN0b3IgPSBCdWZmZXJXcml0ZXI7XHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwvbWluaW1hbFwiKTtcclxuXHJcbnZhciBCdWZmZXIgPSB1dGlsLkJ1ZmZlcjtcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgbmV3IGJ1ZmZlciB3cml0ZXIgaW5zdGFuY2UuXHJcbiAqIEBjbGFzc2Rlc2MgV2lyZSBmb3JtYXQgd3JpdGVyIHVzaW5nIG5vZGUgYnVmZmVycy5cclxuICogQGV4dGVuZHMgV3JpdGVyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gQnVmZmVyV3JpdGVyKCkge1xyXG4gICAgV3JpdGVyLmNhbGwodGhpcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvY2F0ZXMgYSBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBzaXplLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBCdWZmZXIgc2l6ZVxyXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBCdWZmZXJcclxuICovXHJcbkJ1ZmZlcldyaXRlci5hbGxvYyA9IGZ1bmN0aW9uIGFsbG9jX2J1ZmZlcihzaXplKSB7XHJcbiAgICByZXR1cm4gKEJ1ZmZlcldyaXRlci5hbGxvYyA9IHV0aWwuX0J1ZmZlcl9hbGxvY1Vuc2FmZSkoc2l6ZSk7XHJcbn07XHJcblxyXG52YXIgd3JpdGVCeXRlc0J1ZmZlciA9IEJ1ZmZlciAmJiBCdWZmZXIucHJvdG90eXBlIGluc3RhbmNlb2YgVWludDhBcnJheSAmJiBCdWZmZXIucHJvdG90eXBlLnNldC5uYW1lID09PSBcInNldFwiXHJcbiAgICA/IGZ1bmN0aW9uIHdyaXRlQnl0ZXNCdWZmZXJfc2V0KHZhbCwgYnVmLCBwb3MpIHtcclxuICAgICAgICBidWYuc2V0KHZhbCwgcG9zKTsgLy8gZmFzdGVyIHRoYW4gY29weSAocmVxdWlyZXMgbm9kZSA+PSA0IHdoZXJlIEJ1ZmZlcnMgZXh0ZW5kIFVpbnQ4QXJyYXkgYW5kIHNldCBpcyBwcm9wZXJseSBpbmhlcml0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsc28gd29ya3MgZm9yIHBsYWluIGFycmF5IHZhbHVlc1xyXG4gICAgfVxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIDogZnVuY3Rpb24gd3JpdGVCeXRlc0J1ZmZlcl9jb3B5KHZhbCwgYnVmLCBwb3MpIHtcclxuICAgICAgICBpZiAodmFsLmNvcHkpIC8vIEJ1ZmZlciB2YWx1ZXNcclxuICAgICAgICAgICAgdmFsLmNvcHkoYnVmLCBwb3MsIDAsIHZhbC5sZW5ndGgpO1xyXG4gICAgICAgIGVsc2UgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOykgLy8gcGxhaW4gYXJyYXkgdmFsdWVzXHJcbiAgICAgICAgICAgIGJ1Zltwb3MrK10gPSB2YWxbaSsrXTtcclxuICAgIH07XHJcblxyXG4vKipcclxuICogQG92ZXJyaWRlXHJcbiAqL1xyXG5CdWZmZXJXcml0ZXIucHJvdG90eXBlLmJ5dGVzID0gZnVuY3Rpb24gd3JpdGVfYnl0ZXNfYnVmZmVyKHZhbHVlKSB7XHJcbiAgICBpZiAodXRpbC5pc1N0cmluZyh2YWx1ZSkpXHJcbiAgICAgICAgdmFsdWUgPSB1dGlsLl9CdWZmZXJfZnJvbSh2YWx1ZSwgXCJiYXNlNjRcIik7XHJcbiAgICB2YXIgbGVuID0gdmFsdWUubGVuZ3RoID4+PiAwO1xyXG4gICAgdGhpcy51aW50MzIobGVuKTtcclxuICAgIGlmIChsZW4pXHJcbiAgICAgICAgdGhpcy5fcHVzaCh3cml0ZUJ5dGVzQnVmZmVyLCBsZW4sIHZhbHVlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gd3JpdGVTdHJpbmdCdWZmZXIodmFsLCBidWYsIHBvcykge1xyXG4gICAgaWYgKHZhbC5sZW5ndGggPCA0MCkgLy8gcGxhaW4ganMgaXMgZmFzdGVyIGZvciBzaG9ydCBzdHJpbmdzIChwcm9iYWJseSBkdWUgdG8gcmVkdW5kYW50IGFzc2VydGlvbnMpXHJcbiAgICAgICAgdXRpbC51dGY4LndyaXRlKHZhbCwgYnVmLCBwb3MpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGJ1Zi51dGY4V3JpdGUodmFsLCBwb3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQG92ZXJyaWRlXHJcbiAqL1xyXG5CdWZmZXJXcml0ZXIucHJvdG90eXBlLnN0cmluZyA9IGZ1bmN0aW9uIHdyaXRlX3N0cmluZ19idWZmZXIodmFsdWUpIHtcclxuICAgIHZhciBsZW4gPSBCdWZmZXIuYnl0ZUxlbmd0aCh2YWx1ZSk7XHJcbiAgICB0aGlzLnVpbnQzMihsZW4pO1xyXG4gICAgaWYgKGxlbilcclxuICAgICAgICB0aGlzLl9wdXNoKHdyaXRlU3RyaW5nQnVmZmVyLCBsZW4sIHZhbHVlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBGaW5pc2hlcyB0aGUgd3JpdGUgb3BlcmF0aW9uLlxyXG4gKiBAbmFtZSBCdWZmZXJXcml0ZXIjZmluaXNoXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBGaW5pc2hlZCBidWZmZXJcclxuICovXHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9