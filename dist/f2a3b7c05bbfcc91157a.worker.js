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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/.registry.npmjs.org/rusha/0.8.13/node_modules/rusha/dist/rusha.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.registry.npmjs.org/rusha/0.8.13/node_modules/rusha/dist/rusha.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/rusha/0.8.13/node_modules/rusha/dist/rusha.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-env commonjs, browser */

var RushaCore = __webpack_require__(5);

var _require = __webpack_require__(1),
    toHex = _require.toHex,
    ceilHeapSize = _require.ceilHeapSize;

var conv = __webpack_require__(6);

// Calculate the length of buffer that the sha1 routine uses
// including the padding.
var padlen = function (len) {
  for (len += 9; len % 64 > 0; len += 1) {}
  return len;
};

var padZeroes = function (bin, len) {
  var h8 = new Uint8Array(bin.buffer);
  var om = len % 4,
      align = len - om;
  switch (om) {
    case 0:
      h8[align + 3] = 0;
    case 1:
      h8[align + 2] = 0;
    case 2:
      h8[align + 1] = 0;
    case 3:
      h8[align + 0] = 0;
  }
  for (var i = (len >> 2) + 1; i < bin.length; i++) {
    bin[i] = 0;
  }
};

var padData = function (bin, chunkLen, msgLen) {
  bin[chunkLen >> 2] |= 0x80 << 24 - (chunkLen % 4 << 3);
  // To support msgLen >= 2 GiB, use a float division when computing the
  // high 32-bits of the big-endian message length in bits.
  bin[((chunkLen >> 2) + 2 & ~0x0f) + 14] = msgLen / (1 << 29) | 0;
  bin[((chunkLen >> 2) + 2 & ~0x0f) + 15] = msgLen << 3;
};

var getRawDigest = function (heap, padMaxChunkLen) {
  var io = new Int32Array(heap, padMaxChunkLen + 320, 5);
  var out = new Int32Array(5);
  var arr = new DataView(out.buffer);
  arr.setInt32(0, io[0], false);
  arr.setInt32(4, io[1], false);
  arr.setInt32(8, io[2], false);
  arr.setInt32(12, io[3], false);
  arr.setInt32(16, io[4], false);
  return out;
};

var Rusha = function () {
  function Rusha(chunkSize) {
    _classCallCheck(this, Rusha);

    chunkSize = chunkSize || 64 * 1024;
    if (chunkSize % 64 > 0) {
      throw new Error('Chunk size must be a multiple of 128 bit');
    }
    this._offset = 0;
    this._maxChunkLen = chunkSize;
    this._padMaxChunkLen = padlen(chunkSize);
    // The size of the heap is the sum of:
    // 1. The padded input message size
    // 2. The extended space the algorithm needs (320 byte)
    // 3. The 160 bit state the algoritm uses
    this._heap = new ArrayBuffer(ceilHeapSize(this._padMaxChunkLen + 320 + 20));
    this._h32 = new Int32Array(this._heap);
    this._h8 = new Int8Array(this._heap);
    this._core = new RushaCore({ Int32Array: Int32Array }, {}, this._heap);
  }

  Rusha.prototype._initState = function _initState(heap, padMsgLen) {
    this._offset = 0;
    var io = new Int32Array(heap, padMsgLen + 320, 5);
    io[0] = 1732584193;
    io[1] = -271733879;
    io[2] = -1732584194;
    io[3] = 271733878;
    io[4] = -1009589776;
  };

  Rusha.prototype._padChunk = function _padChunk(chunkLen, msgLen) {
    var padChunkLen = padlen(chunkLen);
    var view = new Int32Array(this._heap, 0, padChunkLen >> 2);
    padZeroes(view, chunkLen);
    padData(view, chunkLen, msgLen);
    return padChunkLen;
  };

  Rusha.prototype._write = function _write(data, chunkOffset, chunkLen, off) {
    conv(data, this._h8, this._h32, chunkOffset, chunkLen, off || 0);
  };

  Rusha.prototype._coreCall = function _coreCall(data, chunkOffset, chunkLen, msgLen, finalize) {
    var padChunkLen = chunkLen;
    this._write(data, chunkOffset, chunkLen);
    if (finalize) {
      padChunkLen = this._padChunk(chunkLen, msgLen);
    }
    this._core.hash(padChunkLen, this._padMaxChunkLen);
  };

  Rusha.prototype.rawDigest = function rawDigest(str) {
    var msgLen = str.byteLength || str.length || str.size || 0;
    this._initState(this._heap, this._padMaxChunkLen);
    var chunkOffset = 0,
        chunkLen = this._maxChunkLen;
    for (chunkOffset = 0; msgLen > chunkOffset + chunkLen; chunkOffset += chunkLen) {
      this._coreCall(str, chunkOffset, chunkLen, msgLen, false);
    }
    this._coreCall(str, chunkOffset, msgLen - chunkOffset, msgLen, true);
    return getRawDigest(this._heap, this._padMaxChunkLen);
  };

  Rusha.prototype.digest = function digest(str) {
    return toHex(this.rawDigest(str).buffer);
  };

  Rusha.prototype.digestFromString = function digestFromString(str) {
    return this.digest(str);
  };

  Rusha.prototype.digestFromBuffer = function digestFromBuffer(str) {
    return this.digest(str);
  };

  Rusha.prototype.digestFromArrayBuffer = function digestFromArrayBuffer(str) {
    return this.digest(str);
  };

  Rusha.prototype.resetState = function resetState() {
    this._initState(this._heap, this._padMaxChunkLen);
    return this;
  };

  Rusha.prototype.append = function append(chunk) {
    var chunkOffset = 0;
    var chunkLen = chunk.byteLength || chunk.length || chunk.size || 0;
    var turnOffset = this._offset % this._maxChunkLen;
    var inputLen = void 0;

    this._offset += chunkLen;
    while (chunkOffset < chunkLen) {
      inputLen = Math.min(chunkLen - chunkOffset, this._maxChunkLen - turnOffset);
      this._write(chunk, chunkOffset, inputLen, turnOffset);
      turnOffset += inputLen;
      chunkOffset += inputLen;
      if (turnOffset === this._maxChunkLen) {
        this._core.hash(this._maxChunkLen, this._padMaxChunkLen);
        turnOffset = 0;
      }
    }
    return this;
  };

  Rusha.prototype.getState = function getState() {
    var turnOffset = this._offset % this._maxChunkLen;
    var heap = void 0;
    if (!turnOffset) {
      var io = new Int32Array(this._heap, this._padMaxChunkLen + 320, 5);
      heap = io.buffer.slice(io.byteOffset, io.byteOffset + io.byteLength);
    } else {
      heap = this._heap.slice(0);
    }
    return {
      offset: this._offset,
      heap: heap
    };
  };

  Rusha.prototype.setState = function setState(state) {
    this._offset = state.offset;
    if (state.heap.byteLength === 20) {
      var io = new Int32Array(this._heap, this._padMaxChunkLen + 320, 5);
      io.set(new Int32Array(state.heap));
    } else {
      this._h32.set(new Int32Array(state.heap));
    }
    return this;
  };

  Rusha.prototype.rawEnd = function rawEnd() {
    var msgLen = this._offset;
    var chunkLen = msgLen % this._maxChunkLen;
    var padChunkLen = this._padChunk(chunkLen, msgLen);
    this._core.hash(padChunkLen, this._padMaxChunkLen);
    var result = getRawDigest(this._heap, this._padMaxChunkLen);
    this._initState(this._heap, this._padMaxChunkLen);
    return result;
  };

  Rusha.prototype.end = function end() {
    return toHex(this.rawEnd().buffer);
  };

  return Rusha;
}();

module.exports = Rusha;
module.exports._core = RushaCore;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* eslint-env commonjs, browser */

//
// toHex
//

var precomputedHex = new Array(256);
for (var i = 0; i < 256; i++) {
  precomputedHex[i] = (i < 0x10 ? '0' : '') + i.toString(16);
}

module.exports.toHex = function (arrayBuffer) {
  var binarray = new Uint8Array(arrayBuffer);
  var res = new Array(arrayBuffer.byteLength);
  for (var _i = 0; _i < res.length; _i++) {
    res[_i] = precomputedHex[binarray[_i]];
  }
  return res.join('');
};

//
// ceilHeapSize
//

module.exports.ceilHeapSize = function (v) {
  // The asm.js spec says:
  // The heap object's byteLength must be either
  // 2^n for n in [12, 24) or 2^24 * n for n ≥ 1.
  // Also, byteLengths smaller than 2^16 are deprecated.
  var p = 0;
  // If v is smaller than 2^16, the smallest possible solution
  // is 2^16.
  if (v <= 65536) return 65536;
  // If v < 2^24, we round up to 2^n,
  // otherwise we round up to 2^24 * n.
  if (v < 16777216) {
    for (p = 1; p < v; p = p << 1) {}
  } else {
    for (p = 16777216; p < v; p += 16777216) {}
  }
  return p;
};

//
// isDedicatedWorkerScope
//

module.exports.isDedicatedWorkerScope = function (self) {
  var isRunningInWorker = 'WorkerGlobalScope' in self && self instanceof self.WorkerGlobalScope;
  var isRunningInSharedWorker = 'SharedWorkerGlobalScope' in self && self instanceof self.SharedWorkerGlobalScope;
  var isRunningInServiceWorker = 'ServiceWorkerGlobalScope' in self && self instanceof self.ServiceWorkerGlobalScope;

  // Detects whether we run inside a dedicated worker or not.
  //
  // We can't just check for `DedicatedWorkerGlobalScope`, since IE11
  // has a bug where it only supports `WorkerGlobalScope`.
  //
  // Therefore, we consider us as running inside a dedicated worker
  // when we are running inside a worker, but not in a shared or service worker.
  //
  // When new types of workers are introduced, we will need to adjust this code.
  return isRunningInWorker && !isRunningInSharedWorker && !isRunningInServiceWorker;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env commonjs, worker */

module.exports = function () {
  var Rusha = __webpack_require__(0);

  var hashData = function (hasher, data, cb) {
    try {
      return cb(null, hasher.digest(data));
    } catch (e) {
      return cb(e);
    }
  };

  var hashFile = function (hasher, readTotal, blockSize, file, cb) {
    var reader = new self.FileReader();
    reader.onloadend = function onloadend() {
      if (reader.error) {
        return cb(reader.error);
      }
      var buffer = reader.result;
      readTotal += reader.result.byteLength;
      try {
        hasher.append(buffer);
      } catch (e) {
        cb(e);
        return;
      }
      if (readTotal < file.size) {
        hashFile(hasher, readTotal, blockSize, file, cb);
      } else {
        cb(null, hasher.end());
      }
    };
    reader.readAsArrayBuffer(file.slice(readTotal, readTotal + blockSize));
  };

  var workerBehaviourEnabled = true;

  self.onmessage = function (event) {
    if (!workerBehaviourEnabled) {
      return;
    }

    var data = event.data.data,
        file = event.data.file,
        id = event.data.id;
    if (typeof id === 'undefined') return;
    if (!file && !data) return;
    var blockSize = event.data.blockSize || 4 * 1024 * 1024;
    var hasher = new Rusha(blockSize);
    hasher.resetState();
    var done = function (err, hash) {
      if (!err) {
        self.postMessage({ id: id, hash: hash });
      } else {
        self.postMessage({ id: id, error: err.name });
      }
    };
    if (data) hashData(hasher, data, done);
    if (file) hashFile(hasher, 0, blockSize, file, done);
  };

  return function () {
    workerBehaviourEnabled = false;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env commonjs, browser */

var work = __webpack_require__(4);
var Rusha = __webpack_require__(0);
var createHash = __webpack_require__(7);
var runWorker = __webpack_require__(2);

var _require = __webpack_require__(1),
    isDedicatedWorkerScope = _require.isDedicatedWorkerScope;

var isRunningInDedicatedWorker = typeof self !== 'undefined' && isDedicatedWorkerScope(self);

Rusha.disableWorkerBehaviour = isRunningInDedicatedWorker ? runWorker() : function () {};

Rusha.createWorker = function () {
  var worker = work(/*require.resolve*/(2));
  var terminate = worker.terminate;
  worker.terminate = function () {
    URL.revokeObjectURL(worker.objectURL);
    terminate.call(worker);
  };
  return worker;
};

Rusha.createHash = createHash;

module.exports = Rusha;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function webpackBootstrapFunc (modules) {
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.l = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }

/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };

/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };

/******/  // define __esModule on exports
/******/  __webpack_require__.r = function(exports) {
/******/    Object.defineProperty(exports, '__esModule', { value: true });
/******/  };

/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };

/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "/";

/******/  // on error function for async loading
/******/  __webpack_require__.oe = function(err) { console.error(err); throw err; };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE)
  return f.default || f // try to call default if defined to also support babel esmodule exports
}

var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+'
var dependencyRegExp = '\\((\/\\*.*?\\*\/)?\s?.*?(' + moduleNameReqExp + ').*?\\)' // additional chars when output.pathinfo is true

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp (str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

function getModuleDependencies (sources, module, queueName) {
  var retval = {}
  retval[queueName] = []

  var fnString = module.toString()
  var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/)
  if (!wrapperSignature) return retval
  var webpackRequireName = wrapperSignature[1]

  // main bundle deps
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g')
  var match
  while ((match = re.exec(fnString))) {
    if (match[3] === 'dll-reference') continue
    retval[queueName].push(match[3])
  }

  // dll deps
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g')
  while ((match = re.exec(fnString))) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1])
      sources[match[2]] = __webpack_require__(match[1]).m
    }
    retval[match[2]] = retval[match[2]] || []
    retval[match[2]].push(match[4])
  }

  return retval
}

function hasValuesInQueues (queues) {
  var keys = Object.keys(queues)
  return keys.reduce(function (hasValues, key) {
    return hasValues || queues[key].length > 0
  }, false)
}

function getRequiredModules (sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  }
  var requiredModules = {
    main: []
  }
  var seenModules = {
    main: {}
  }

  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue)
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i]
      var queue = modulesQueue[queueName]
      var moduleToCheck = queue.pop()
      seenModules[queueName] = seenModules[queueName] || {}
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue
      seenModules[queueName][moduleToCheck] = true
      requiredModules[queueName] = requiredModules[queueName] || []
      requiredModules[queueName].push(moduleToCheck)
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName)
      var newModulesKeys = Object.keys(newModules)
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || []
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]])
      }
    }
  }

  return requiredModules
}

module.exports = function (moduleId, options) {
  options = options || {}
  var sources = {
    main: __webpack_require__.m
  }

  var requiredModules = options.all ? { main: Object.keys(sources) } : getRequiredModules(sources, moduleId)

  var src = ''

  Object.keys(requiredModules).filter(function (m) { return m !== 'main' }).forEach(function (module) {
    var entryModule = 0
    while (requiredModules[module][entryModule]) {
      entryModule++
    }
    requiredModules[module].push(entryModule)
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'
    src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) { return '' + JSON.stringify(id) + ': ' + sources[module][id].toString() }).join(',') + '});\n'
  })

  src = src + '(' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) { return '' + JSON.stringify(id) + ': ' + sources.main[id].toString() }).join(',') + '})(self);'

  var blob = new window.Blob([src], { type: 'text/javascript' })
  if (options.bare) { return blob }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL

  var workerUrl = URL.createObjectURL(blob)
  var worker = new window.Worker(workerUrl)
  worker.objectURL = workerUrl

  return worker
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// The low-level RushCore module provides the heart of Rusha,
// a high-speed sha1 implementation working on an Int32Array heap.
// At first glance, the implementation seems complicated, however
// with the SHA1 spec at hand, it is obvious this almost a textbook
// implementation that has a few functions hand-inlined and a few loops
// hand-unrolled.
module.exports = function RushaCore(stdlib$846, foreign$847, heap$848) {
    'use asm';
    var H$849 = new stdlib$846.Int32Array(heap$848);
    function hash$850(k$851, x$852) {
        // k in bytes
        k$851 = k$851 | 0;
        x$852 = x$852 | 0;
        var i$853 = 0, j$854 = 0, y0$855 = 0, z0$856 = 0, y1$857 = 0, z1$858 = 0, y2$859 = 0, z2$860 = 0, y3$861 = 0, z3$862 = 0, y4$863 = 0, z4$864 = 0, t0$865 = 0, t1$866 = 0;
        y0$855 = H$849[x$852 + 320 >> 2] | 0;
        y1$857 = H$849[x$852 + 324 >> 2] | 0;
        y2$859 = H$849[x$852 + 328 >> 2] | 0;
        y3$861 = H$849[x$852 + 332 >> 2] | 0;
        y4$863 = H$849[x$852 + 336 >> 2] | 0;
        for (i$853 = 0; (i$853 | 0) < (k$851 | 0); i$853 = i$853 + 64 | 0) {
            z0$856 = y0$855;
            z1$858 = y1$857;
            z2$860 = y2$859;
            z3$862 = y3$861;
            z4$864 = y4$863;
            for (j$854 = 0; (j$854 | 0) < 64; j$854 = j$854 + 4 | 0) {
                t1$866 = H$849[i$853 + j$854 >> 2] | 0;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 & y2$859 | ~y1$857 & y3$861) | 0) + ((t1$866 + y4$863 | 0) + 1518500249 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[k$851 + j$854 >> 2] = t1$866;
            }
            for (j$854 = k$851 + 64 | 0; (j$854 | 0) < (k$851 + 80 | 0); j$854 = j$854 + 4 | 0) {
                t1$866 = (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) << 1 | (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) >>> 31;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 & y2$859 | ~y1$857 & y3$861) | 0) + ((t1$866 + y4$863 | 0) + 1518500249 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[j$854 >> 2] = t1$866;
            }
            for (j$854 = k$851 + 80 | 0; (j$854 | 0) < (k$851 + 160 | 0); j$854 = j$854 + 4 | 0) {
                t1$866 = (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) << 1 | (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) >>> 31;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 ^ y2$859 ^ y3$861) | 0) + ((t1$866 + y4$863 | 0) + 1859775393 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[j$854 >> 2] = t1$866;
            }
            for (j$854 = k$851 + 160 | 0; (j$854 | 0) < (k$851 + 240 | 0); j$854 = j$854 + 4 | 0) {
                t1$866 = (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) << 1 | (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) >>> 31;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 & y2$859 | y1$857 & y3$861 | y2$859 & y3$861) | 0) + ((t1$866 + y4$863 | 0) - 1894007588 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[j$854 >> 2] = t1$866;
            }
            for (j$854 = k$851 + 240 | 0; (j$854 | 0) < (k$851 + 320 | 0); j$854 = j$854 + 4 | 0) {
                t1$866 = (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) << 1 | (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) >>> 31;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 ^ y2$859 ^ y3$861) | 0) + ((t1$866 + y4$863 | 0) - 899497514 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[j$854 >> 2] = t1$866;
            }
            y0$855 = y0$855 + z0$856 | 0;
            y1$857 = y1$857 + z1$858 | 0;
            y2$859 = y2$859 + z2$860 | 0;
            y3$861 = y3$861 + z3$862 | 0;
            y4$863 = y4$863 + z4$864 | 0;
        }
        H$849[x$852 + 320 >> 2] = y0$855;
        H$849[x$852 + 324 >> 2] = y1$857;
        H$849[x$852 + 328 >> 2] = y2$859;
        H$849[x$852 + 332 >> 2] = y3$861;
        H$849[x$852 + 336 >> 2] = y4$863;
    }
    return { hash: hash$850 };
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var _this = this;

/* eslint-env commonjs, browser */

var reader = void 0;
if (typeof self !== 'undefined' && typeof self.FileReaderSync !== 'undefined') {
  reader = new self.FileReaderSync();
}

// Convert a binary string and write it to the heap.
// A binary string is expected to only contain char codes < 256.
var convStr = function (str, H8, H32, start, len, off) {
  var i = void 0,
      om = off % 4,
      lm = (len + om) % 4,
      j = len - lm;
  switch (om) {
    case 0:
      H8[off] = str.charCodeAt(start + 3);
    case 1:
      H8[off + 1 - (om << 1) | 0] = str.charCodeAt(start + 2);
    case 2:
      H8[off + 2 - (om << 1) | 0] = str.charCodeAt(start + 1);
    case 3:
      H8[off + 3 - (om << 1) | 0] = str.charCodeAt(start);
  }
  if (len < lm + (4 - om)) {
    return;
  }
  for (i = 4 - om; i < j; i = i + 4 | 0) {
    H32[off + i >> 2] = str.charCodeAt(start + i) << 24 | str.charCodeAt(start + i + 1) << 16 | str.charCodeAt(start + i + 2) << 8 | str.charCodeAt(start + i + 3);
  }
  switch (lm) {
    case 3:
      H8[off + j + 1 | 0] = str.charCodeAt(start + j + 2);
    case 2:
      H8[off + j + 2 | 0] = str.charCodeAt(start + j + 1);
    case 1:
      H8[off + j + 3 | 0] = str.charCodeAt(start + j);
  }
};

// Convert a buffer or array and write it to the heap.
// The buffer or array is expected to only contain elements < 256.
var convBuf = function (buf, H8, H32, start, len, off) {
  var i = void 0,
      om = off % 4,
      lm = (len + om) % 4,
      j = len - lm;
  switch (om) {
    case 0:
      H8[off] = buf[start + 3];
    case 1:
      H8[off + 1 - (om << 1) | 0] = buf[start + 2];
    case 2:
      H8[off + 2 - (om << 1) | 0] = buf[start + 1];
    case 3:
      H8[off + 3 - (om << 1) | 0] = buf[start];
  }
  if (len < lm + (4 - om)) {
    return;
  }
  for (i = 4 - om; i < j; i = i + 4 | 0) {
    H32[off + i >> 2 | 0] = buf[start + i] << 24 | buf[start + i + 1] << 16 | buf[start + i + 2] << 8 | buf[start + i + 3];
  }
  switch (lm) {
    case 3:
      H8[off + j + 1 | 0] = buf[start + j + 2];
    case 2:
      H8[off + j + 2 | 0] = buf[start + j + 1];
    case 1:
      H8[off + j + 3 | 0] = buf[start + j];
  }
};

var convBlob = function (blob, H8, H32, start, len, off) {
  var i = void 0,
      om = off % 4,
      lm = (len + om) % 4,
      j = len - lm;
  var buf = new Uint8Array(reader.readAsArrayBuffer(blob.slice(start, start + len)));
  switch (om) {
    case 0:
      H8[off] = buf[3];
    case 1:
      H8[off + 1 - (om << 1) | 0] = buf[2];
    case 2:
      H8[off + 2 - (om << 1) | 0] = buf[1];
    case 3:
      H8[off + 3 - (om << 1) | 0] = buf[0];
  }
  if (len < lm + (4 - om)) {
    return;
  }
  for (i = 4 - om; i < j; i = i + 4 | 0) {
    H32[off + i >> 2 | 0] = buf[i] << 24 | buf[i + 1] << 16 | buf[i + 2] << 8 | buf[i + 3];
  }
  switch (lm) {
    case 3:
      H8[off + j + 1 | 0] = buf[j + 2];
    case 2:
      H8[off + j + 2 | 0] = buf[j + 1];
    case 1:
      H8[off + j + 3 | 0] = buf[j];
  }
};

module.exports = function (data, H8, H32, start, len, off) {
  if (typeof data === 'string') {
    return convStr(data, H8, H32, start, len, off);
  }
  if (data instanceof Array) {
    return convBuf(data, H8, H32, start, len, off);
  }
  // Safely doing a Buffer check using "this" to avoid Buffer polyfill to be included in the dist
  if (_this && _this.Buffer && _this.Buffer.isBuffer(data)) {
    return convBuf(data, H8, H32, start, len, off);
  }
  if (data instanceof ArrayBuffer) {
    return convBuf(new Uint8Array(data), H8, H32, start, len, off);
  }
  if (data.buffer instanceof ArrayBuffer) {
    return convBuf(new Uint8Array(data.buffer, data.byteOffset, data.byteLength), H8, H32, start, len, off);
  }
  if (data instanceof Blob) {
    return convBlob(data, H8, H32, start, len, off);
  }
  throw new Error('Unsupported data type.');
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-env commonjs, browser */

var Rusha = __webpack_require__(0);

var _require = __webpack_require__(1),
    toHex = _require.toHex;

var Hash = function () {
  function Hash() {
    _classCallCheck(this, Hash);

    this._rusha = new Rusha();
    this._rusha.resetState();
  }

  Hash.prototype.update = function update(data) {
    this._rusha.append(data);
    return this;
  };

  Hash.prototype.digest = function digest(encoding) {
    var digest = this._rusha.rawEnd().buffer;
    if (!encoding) {
      return digest;
    }
    if (encoding === 'hex') {
      return toHex(digest);
    }
    throw new Error('unsupported digest encoding');
  };

  return Hash;
}();

module.exports = function () {
  return new Hash();
};

/***/ })
/******/ ]);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcnVzaGEvMC44LjEzL25vZGVfbW9kdWxlcy9ydXNoYS9kaXN0L3J1c2hhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3NCO0FBQzVCLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBLENBQUMsRSIsImZpbGUiOiJmMmEzYjdjMDViYmZjYzkxMTU3YS53b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3J1c2hhLzAuOC4xMy9ub2RlX21vZHVsZXMvcnVzaGEvZGlzdC9ydXNoYS5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJ1c2hhXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJ1c2hhXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyogZXNsaW50LWVudiBjb21tb25qcywgYnJvd3NlciAqL1xuXG52YXIgUnVzaGFDb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKSxcbiAgICB0b0hleCA9IF9yZXF1aXJlLnRvSGV4LFxuICAgIGNlaWxIZWFwU2l6ZSA9IF9yZXF1aXJlLmNlaWxIZWFwU2l6ZTtcblxudmFyIGNvbnYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG4vLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiBidWZmZXIgdGhhdCB0aGUgc2hhMSByb3V0aW5lIHVzZXNcbi8vIGluY2x1ZGluZyB0aGUgcGFkZGluZy5cbnZhciBwYWRsZW4gPSBmdW5jdGlvbiAobGVuKSB7XG4gIGZvciAobGVuICs9IDk7IGxlbiAlIDY0ID4gMDsgbGVuICs9IDEpIHt9XG4gIHJldHVybiBsZW47XG59O1xuXG52YXIgcGFkWmVyb2VzID0gZnVuY3Rpb24gKGJpbiwgbGVuKSB7XG4gIHZhciBoOCA9IG5ldyBVaW50OEFycmF5KGJpbi5idWZmZXIpO1xuICB2YXIgb20gPSBsZW4gJSA0LFxuICAgICAgYWxpZ24gPSBsZW4gLSBvbTtcbiAgc3dpdGNoIChvbSkge1xuICAgIGNhc2UgMDpcbiAgICAgIGg4W2FsaWduICsgM10gPSAwO1xuICAgIGNhc2UgMTpcbiAgICAgIGg4W2FsaWduICsgMl0gPSAwO1xuICAgIGNhc2UgMjpcbiAgICAgIGg4W2FsaWduICsgMV0gPSAwO1xuICAgIGNhc2UgMzpcbiAgICAgIGg4W2FsaWduICsgMF0gPSAwO1xuICB9XG4gIGZvciAodmFyIGkgPSAobGVuID4+IDIpICsgMTsgaSA8IGJpbi5sZW5ndGg7IGkrKykge1xuICAgIGJpbltpXSA9IDA7XG4gIH1cbn07XG5cbnZhciBwYWREYXRhID0gZnVuY3Rpb24gKGJpbiwgY2h1bmtMZW4sIG1zZ0xlbikge1xuICBiaW5bY2h1bmtMZW4gPj4gMl0gfD0gMHg4MCA8PCAyNCAtIChjaHVua0xlbiAlIDQgPDwgMyk7XG4gIC8vIFRvIHN1cHBvcnQgbXNnTGVuID49IDIgR2lCLCB1c2UgYSBmbG9hdCBkaXZpc2lvbiB3aGVuIGNvbXB1dGluZyB0aGVcbiAgLy8gaGlnaCAzMi1iaXRzIG9mIHRoZSBiaWctZW5kaWFuIG1lc3NhZ2UgbGVuZ3RoIGluIGJpdHMuXG4gIGJpblsoKGNodW5rTGVuID4+IDIpICsgMiAmIH4weDBmKSArIDE0XSA9IG1zZ0xlbiAvICgxIDw8IDI5KSB8IDA7XG4gIGJpblsoKGNodW5rTGVuID4+IDIpICsgMiAmIH4weDBmKSArIDE1XSA9IG1zZ0xlbiA8PCAzO1xufTtcblxudmFyIGdldFJhd0RpZ2VzdCA9IGZ1bmN0aW9uIChoZWFwLCBwYWRNYXhDaHVua0xlbikge1xuICB2YXIgaW8gPSBuZXcgSW50MzJBcnJheShoZWFwLCBwYWRNYXhDaHVua0xlbiArIDMyMCwgNSk7XG4gIHZhciBvdXQgPSBuZXcgSW50MzJBcnJheSg1KTtcbiAgdmFyIGFyciA9IG5ldyBEYXRhVmlldyhvdXQuYnVmZmVyKTtcbiAgYXJyLnNldEludDMyKDAsIGlvWzBdLCBmYWxzZSk7XG4gIGFyci5zZXRJbnQzMig0LCBpb1sxXSwgZmFsc2UpO1xuICBhcnIuc2V0SW50MzIoOCwgaW9bMl0sIGZhbHNlKTtcbiAgYXJyLnNldEludDMyKDEyLCBpb1szXSwgZmFsc2UpO1xuICBhcnIuc2V0SW50MzIoMTYsIGlvWzRdLCBmYWxzZSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG52YXIgUnVzaGEgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJ1c2hhKGNodW5rU2l6ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSdXNoYSk7XG5cbiAgICBjaHVua1NpemUgPSBjaHVua1NpemUgfHwgNjQgKiAxMDI0O1xuICAgIGlmIChjaHVua1NpemUgJSA2NCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2h1bmsgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTI4IGJpdCcpO1xuICAgIH1cbiAgICB0aGlzLl9vZmZzZXQgPSAwO1xuICAgIHRoaXMuX21heENodW5rTGVuID0gY2h1bmtTaXplO1xuICAgIHRoaXMuX3BhZE1heENodW5rTGVuID0gcGFkbGVuKGNodW5rU2l6ZSk7XG4gICAgLy8gVGhlIHNpemUgb2YgdGhlIGhlYXAgaXMgdGhlIHN1bSBvZjpcbiAgICAvLyAxLiBUaGUgcGFkZGVkIGlucHV0IG1lc3NhZ2Ugc2l6ZVxuICAgIC8vIDIuIFRoZSBleHRlbmRlZCBzcGFjZSB0aGUgYWxnb3JpdGhtIG5lZWRzICgzMjAgYnl0ZSlcbiAgICAvLyAzLiBUaGUgMTYwIGJpdCBzdGF0ZSB0aGUgYWxnb3JpdG0gdXNlc1xuICAgIHRoaXMuX2hlYXAgPSBuZXcgQXJyYXlCdWZmZXIoY2VpbEhlYXBTaXplKHRoaXMuX3BhZE1heENodW5rTGVuICsgMzIwICsgMjApKTtcbiAgICB0aGlzLl9oMzIgPSBuZXcgSW50MzJBcnJheSh0aGlzLl9oZWFwKTtcbiAgICB0aGlzLl9oOCA9IG5ldyBJbnQ4QXJyYXkodGhpcy5faGVhcCk7XG4gICAgdGhpcy5fY29yZSA9IG5ldyBSdXNoYUNvcmUoeyBJbnQzMkFycmF5OiBJbnQzMkFycmF5IH0sIHt9LCB0aGlzLl9oZWFwKTtcbiAgfVxuXG4gIFJ1c2hhLnByb3RvdHlwZS5faW5pdFN0YXRlID0gZnVuY3Rpb24gX2luaXRTdGF0ZShoZWFwLCBwYWRNc2dMZW4pIHtcbiAgICB0aGlzLl9vZmZzZXQgPSAwO1xuICAgIHZhciBpbyA9IG5ldyBJbnQzMkFycmF5KGhlYXAsIHBhZE1zZ0xlbiArIDMyMCwgNSk7XG4gICAgaW9bMF0gPSAxNzMyNTg0MTkzO1xuICAgIGlvWzFdID0gLTI3MTczMzg3OTtcbiAgICBpb1syXSA9IC0xNzMyNTg0MTk0O1xuICAgIGlvWzNdID0gMjcxNzMzODc4O1xuICAgIGlvWzRdID0gLTEwMDk1ODk3NzY7XG4gIH07XG5cbiAgUnVzaGEucHJvdG90eXBlLl9wYWRDaHVuayA9IGZ1bmN0aW9uIF9wYWRDaHVuayhjaHVua0xlbiwgbXNnTGVuKSB7XG4gICAgdmFyIHBhZENodW5rTGVuID0gcGFkbGVuKGNodW5rTGVuKTtcbiAgICB2YXIgdmlldyA9IG5ldyBJbnQzMkFycmF5KHRoaXMuX2hlYXAsIDAsIHBhZENodW5rTGVuID4+IDIpO1xuICAgIHBhZFplcm9lcyh2aWV3LCBjaHVua0xlbik7XG4gICAgcGFkRGF0YSh2aWV3LCBjaHVua0xlbiwgbXNnTGVuKTtcbiAgICByZXR1cm4gcGFkQ2h1bmtMZW47XG4gIH07XG5cbiAgUnVzaGEucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIF93cml0ZShkYXRhLCBjaHVua09mZnNldCwgY2h1bmtMZW4sIG9mZikge1xuICAgIGNvbnYoZGF0YSwgdGhpcy5faDgsIHRoaXMuX2gzMiwgY2h1bmtPZmZzZXQsIGNodW5rTGVuLCBvZmYgfHwgMCk7XG4gIH07XG5cbiAgUnVzaGEucHJvdG90eXBlLl9jb3JlQ2FsbCA9IGZ1bmN0aW9uIF9jb3JlQ2FsbChkYXRhLCBjaHVua09mZnNldCwgY2h1bmtMZW4sIG1zZ0xlbiwgZmluYWxpemUpIHtcbiAgICB2YXIgcGFkQ2h1bmtMZW4gPSBjaHVua0xlbjtcbiAgICB0aGlzLl93cml0ZShkYXRhLCBjaHVua09mZnNldCwgY2h1bmtMZW4pO1xuICAgIGlmIChmaW5hbGl6ZSkge1xuICAgICAgcGFkQ2h1bmtMZW4gPSB0aGlzLl9wYWRDaHVuayhjaHVua0xlbiwgbXNnTGVuKTtcbiAgICB9XG4gICAgdGhpcy5fY29yZS5oYXNoKHBhZENodW5rTGVuLCB0aGlzLl9wYWRNYXhDaHVua0xlbik7XG4gIH07XG5cbiAgUnVzaGEucHJvdG90eXBlLnJhd0RpZ2VzdCA9IGZ1bmN0aW9uIHJhd0RpZ2VzdChzdHIpIHtcbiAgICB2YXIgbXNnTGVuID0gc3RyLmJ5dGVMZW5ndGggfHwgc3RyLmxlbmd0aCB8fCBzdHIuc2l6ZSB8fCAwO1xuICAgIHRoaXMuX2luaXRTdGF0ZSh0aGlzLl9oZWFwLCB0aGlzLl9wYWRNYXhDaHVua0xlbik7XG4gICAgdmFyIGNodW5rT2Zmc2V0ID0gMCxcbiAgICAgICAgY2h1bmtMZW4gPSB0aGlzLl9tYXhDaHVua0xlbjtcbiAgICBmb3IgKGNodW5rT2Zmc2V0ID0gMDsgbXNnTGVuID4gY2h1bmtPZmZzZXQgKyBjaHVua0xlbjsgY2h1bmtPZmZzZXQgKz0gY2h1bmtMZW4pIHtcbiAgICAgIHRoaXMuX2NvcmVDYWxsKHN0ciwgY2h1bmtPZmZzZXQsIGNodW5rTGVuLCBtc2dMZW4sIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5fY29yZUNhbGwoc3RyLCBjaHVua09mZnNldCwgbXNnTGVuIC0gY2h1bmtPZmZzZXQsIG1zZ0xlbiwgdHJ1ZSk7XG4gICAgcmV0dXJuIGdldFJhd0RpZ2VzdCh0aGlzLl9oZWFwLCB0aGlzLl9wYWRNYXhDaHVua0xlbik7XG4gIH07XG5cbiAgUnVzaGEucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uIGRpZ2VzdChzdHIpIHtcbiAgICByZXR1cm4gdG9IZXgodGhpcy5yYXdEaWdlc3Qoc3RyKS5idWZmZXIpO1xuICB9O1xuXG4gIFJ1c2hhLnByb3RvdHlwZS5kaWdlc3RGcm9tU3RyaW5nID0gZnVuY3Rpb24gZGlnZXN0RnJvbVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5kaWdlc3Qoc3RyKTtcbiAgfTtcblxuICBSdXNoYS5wcm90b3R5cGUuZGlnZXN0RnJvbUJ1ZmZlciA9IGZ1bmN0aW9uIGRpZ2VzdEZyb21CdWZmZXIoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlnZXN0KHN0cik7XG4gIH07XG5cbiAgUnVzaGEucHJvdG90eXBlLmRpZ2VzdEZyb21BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIGRpZ2VzdEZyb21BcnJheUJ1ZmZlcihzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5kaWdlc3Qoc3RyKTtcbiAgfTtcblxuICBSdXNoYS5wcm90b3R5cGUucmVzZXRTdGF0ZSA9IGZ1bmN0aW9uIHJlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5faW5pdFN0YXRlKHRoaXMuX2hlYXAsIHRoaXMuX3BhZE1heENodW5rTGVuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBSdXNoYS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKGNodW5rKSB7XG4gICAgdmFyIGNodW5rT2Zmc2V0ID0gMDtcbiAgICB2YXIgY2h1bmtMZW4gPSBjaHVuay5ieXRlTGVuZ3RoIHx8IGNodW5rLmxlbmd0aCB8fCBjaHVuay5zaXplIHx8IDA7XG4gICAgdmFyIHR1cm5PZmZzZXQgPSB0aGlzLl9vZmZzZXQgJSB0aGlzLl9tYXhDaHVua0xlbjtcbiAgICB2YXIgaW5wdXRMZW4gPSB2b2lkIDA7XG5cbiAgICB0aGlzLl9vZmZzZXQgKz0gY2h1bmtMZW47XG4gICAgd2hpbGUgKGNodW5rT2Zmc2V0IDwgY2h1bmtMZW4pIHtcbiAgICAgIGlucHV0TGVuID0gTWF0aC5taW4oY2h1bmtMZW4gLSBjaHVua09mZnNldCwgdGhpcy5fbWF4Q2h1bmtMZW4gLSB0dXJuT2Zmc2V0KTtcbiAgICAgIHRoaXMuX3dyaXRlKGNodW5rLCBjaHVua09mZnNldCwgaW5wdXRMZW4sIHR1cm5PZmZzZXQpO1xuICAgICAgdHVybk9mZnNldCArPSBpbnB1dExlbjtcbiAgICAgIGNodW5rT2Zmc2V0ICs9IGlucHV0TGVuO1xuICAgICAgaWYgKHR1cm5PZmZzZXQgPT09IHRoaXMuX21heENodW5rTGVuKSB7XG4gICAgICAgIHRoaXMuX2NvcmUuaGFzaCh0aGlzLl9tYXhDaHVua0xlbiwgdGhpcy5fcGFkTWF4Q2h1bmtMZW4pO1xuICAgICAgICB0dXJuT2Zmc2V0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgUnVzaGEucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgdmFyIHR1cm5PZmZzZXQgPSB0aGlzLl9vZmZzZXQgJSB0aGlzLl9tYXhDaHVua0xlbjtcbiAgICB2YXIgaGVhcCA9IHZvaWQgMDtcbiAgICBpZiAoIXR1cm5PZmZzZXQpIHtcbiAgICAgIHZhciBpbyA9IG5ldyBJbnQzMkFycmF5KHRoaXMuX2hlYXAsIHRoaXMuX3BhZE1heENodW5rTGVuICsgMzIwLCA1KTtcbiAgICAgIGhlYXAgPSBpby5idWZmZXIuc2xpY2UoaW8uYnl0ZU9mZnNldCwgaW8uYnl0ZU9mZnNldCArIGlvLmJ5dGVMZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFwID0gdGhpcy5faGVhcC5zbGljZSgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG9mZnNldDogdGhpcy5fb2Zmc2V0LFxuICAgICAgaGVhcDogaGVhcFxuICAgIH07XG4gIH07XG5cbiAgUnVzaGEucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLl9vZmZzZXQgPSBzdGF0ZS5vZmZzZXQ7XG4gICAgaWYgKHN0YXRlLmhlYXAuYnl0ZUxlbmd0aCA9PT0gMjApIHtcbiAgICAgIHZhciBpbyA9IG5ldyBJbnQzMkFycmF5KHRoaXMuX2hlYXAsIHRoaXMuX3BhZE1heENodW5rTGVuICsgMzIwLCA1KTtcbiAgICAgIGlvLnNldChuZXcgSW50MzJBcnJheShzdGF0ZS5oZWFwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2gzMi5zZXQobmV3IEludDMyQXJyYXkoc3RhdGUuaGVhcCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBSdXNoYS5wcm90b3R5cGUucmF3RW5kID0gZnVuY3Rpb24gcmF3RW5kKCkge1xuICAgIHZhciBtc2dMZW4gPSB0aGlzLl9vZmZzZXQ7XG4gICAgdmFyIGNodW5rTGVuID0gbXNnTGVuICUgdGhpcy5fbWF4Q2h1bmtMZW47XG4gICAgdmFyIHBhZENodW5rTGVuID0gdGhpcy5fcGFkQ2h1bmsoY2h1bmtMZW4sIG1zZ0xlbik7XG4gICAgdGhpcy5fY29yZS5oYXNoKHBhZENodW5rTGVuLCB0aGlzLl9wYWRNYXhDaHVua0xlbik7XG4gICAgdmFyIHJlc3VsdCA9IGdldFJhd0RpZ2VzdCh0aGlzLl9oZWFwLCB0aGlzLl9wYWRNYXhDaHVua0xlbik7XG4gICAgdGhpcy5faW5pdFN0YXRlKHRoaXMuX2hlYXAsIHRoaXMuX3BhZE1heENodW5rTGVuKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIFJ1c2hhLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiBlbmQoKSB7XG4gICAgcmV0dXJuIHRvSGV4KHRoaXMucmF3RW5kKCkuYnVmZmVyKTtcbiAgfTtcblxuICByZXR1cm4gUnVzaGE7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUnVzaGE7XG5tb2R1bGUuZXhwb3J0cy5fY29yZSA9IFJ1c2hhQ29yZTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qIGVzbGludC1lbnYgY29tbW9uanMsIGJyb3dzZXIgKi9cblxuLy9cbi8vIHRvSGV4XG4vL1xuXG52YXIgcHJlY29tcHV0ZWRIZXggPSBuZXcgQXJyYXkoMjU2KTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgcHJlY29tcHV0ZWRIZXhbaV0gPSAoaSA8IDB4MTAgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KTtcbn1cblxubW9kdWxlLmV4cG9ydHMudG9IZXggPSBmdW5jdGlvbiAoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIGJpbmFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICB2YXIgcmVzID0gbmV3IEFycmF5KGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgcmVzLmxlbmd0aDsgX2krKykge1xuICAgIHJlc1tfaV0gPSBwcmVjb21wdXRlZEhleFtiaW5hcnJheVtfaV1dO1xuICB9XG4gIHJldHVybiByZXMuam9pbignJyk7XG59O1xuXG4vL1xuLy8gY2VpbEhlYXBTaXplXG4vL1xuXG5tb2R1bGUuZXhwb3J0cy5jZWlsSGVhcFNpemUgPSBmdW5jdGlvbiAodikge1xuICAvLyBUaGUgYXNtLmpzIHNwZWMgc2F5czpcbiAgLy8gVGhlIGhlYXAgb2JqZWN0J3MgYnl0ZUxlbmd0aCBtdXN0IGJlIGVpdGhlclxuICAvLyAyXm4gZm9yIG4gaW4gWzEyLCAyNCkgb3IgMl4yNCAqIG4gZm9yIG4g4omlIDEuXG4gIC8vIEFsc28sIGJ5dGVMZW5ndGhzIHNtYWxsZXIgdGhhbiAyXjE2IGFyZSBkZXByZWNhdGVkLlxuICB2YXIgcCA9IDA7XG4gIC8vIElmIHYgaXMgc21hbGxlciB0aGFuIDJeMTYsIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBzb2x1dGlvblxuICAvLyBpcyAyXjE2LlxuICBpZiAodiA8PSA2NTUzNikgcmV0dXJuIDY1NTM2O1xuICAvLyBJZiB2IDwgMl4yNCwgd2Ugcm91bmQgdXAgdG8gMl5uLFxuICAvLyBvdGhlcndpc2Ugd2Ugcm91bmQgdXAgdG8gMl4yNCAqIG4uXG4gIGlmICh2IDwgMTY3NzcyMTYpIHtcbiAgICBmb3IgKHAgPSAxOyBwIDwgdjsgcCA9IHAgPDwgMSkge31cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHAgPSAxNjc3NzIxNjsgcCA8IHY7IHAgKz0gMTY3NzcyMTYpIHt9XG4gIH1cbiAgcmV0dXJuIHA7XG59O1xuXG4vL1xuLy8gaXNEZWRpY2F0ZWRXb3JrZXJTY29wZVxuLy9cblxubW9kdWxlLmV4cG9ydHMuaXNEZWRpY2F0ZWRXb3JrZXJTY29wZSA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHZhciBpc1J1bm5pbmdJbldvcmtlciA9ICdXb3JrZXJHbG9iYWxTY29wZScgaW4gc2VsZiAmJiBzZWxmIGluc3RhbmNlb2Ygc2VsZi5Xb3JrZXJHbG9iYWxTY29wZTtcbiAgdmFyIGlzUnVubmluZ0luU2hhcmVkV29ya2VyID0gJ1NoYXJlZFdvcmtlckdsb2JhbFNjb3BlJyBpbiBzZWxmICYmIHNlbGYgaW5zdGFuY2VvZiBzZWxmLlNoYXJlZFdvcmtlckdsb2JhbFNjb3BlO1xuICB2YXIgaXNSdW5uaW5nSW5TZXJ2aWNlV29ya2VyID0gJ1NlcnZpY2VXb3JrZXJHbG9iYWxTY29wZScgaW4gc2VsZiAmJiBzZWxmIGluc3RhbmNlb2Ygc2VsZi5TZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU7XG5cbiAgLy8gRGV0ZWN0cyB3aGV0aGVyIHdlIHJ1biBpbnNpZGUgYSBkZWRpY2F0ZWQgd29ya2VyIG9yIG5vdC5cbiAgLy9cbiAgLy8gV2UgY2FuJ3QganVzdCBjaGVjayBmb3IgYERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlYCwgc2luY2UgSUUxMVxuICAvLyBoYXMgYSBidWcgd2hlcmUgaXQgb25seSBzdXBwb3J0cyBgV29ya2VyR2xvYmFsU2NvcGVgLlxuICAvL1xuICAvLyBUaGVyZWZvcmUsIHdlIGNvbnNpZGVyIHVzIGFzIHJ1bm5pbmcgaW5zaWRlIGEgZGVkaWNhdGVkIHdvcmtlclxuICAvLyB3aGVuIHdlIGFyZSBydW5uaW5nIGluc2lkZSBhIHdvcmtlciwgYnV0IG5vdCBpbiBhIHNoYXJlZCBvciBzZXJ2aWNlIHdvcmtlci5cbiAgLy9cbiAgLy8gV2hlbiBuZXcgdHlwZXMgb2Ygd29ya2VycyBhcmUgaW50cm9kdWNlZCwgd2Ugd2lsbCBuZWVkIHRvIGFkanVzdCB0aGlzIGNvZGUuXG4gIHJldHVybiBpc1J1bm5pbmdJbldvcmtlciAmJiAhaXNSdW5uaW5nSW5TaGFyZWRXb3JrZXIgJiYgIWlzUnVubmluZ0luU2VydmljZVdvcmtlcjtcbn07XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBlc2xpbnQtZW52IGNvbW1vbmpzLCB3b3JrZXIgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBSdXNoYSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbiAgdmFyIGhhc2hEYXRhID0gZnVuY3Rpb24gKGhhc2hlciwgZGF0YSwgY2IpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNiKG51bGwsIGhhc2hlci5kaWdlc3QoZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBjYihlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhc2hGaWxlID0gZnVuY3Rpb24gKGhhc2hlciwgcmVhZFRvdGFsLCBibG9ja1NpemUsIGZpbGUsIGNiKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBzZWxmLkZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gb25sb2FkZW5kKCkge1xuICAgICAgaWYgKHJlYWRlci5lcnJvcikge1xuICAgICAgICByZXR1cm4gY2IocmVhZGVyLmVycm9yKTtcbiAgICAgIH1cbiAgICAgIHZhciBidWZmZXIgPSByZWFkZXIucmVzdWx0O1xuICAgICAgcmVhZFRvdGFsICs9IHJlYWRlci5yZXN1bHQuYnl0ZUxlbmd0aDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGhhc2hlci5hcHBlbmQoYnVmZmVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2IoZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChyZWFkVG90YWwgPCBmaWxlLnNpemUpIHtcbiAgICAgICAgaGFzaEZpbGUoaGFzaGVyLCByZWFkVG90YWwsIGJsb2NrU2l6ZSwgZmlsZSwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IobnVsbCwgaGFzaGVyLmVuZCgpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlLnNsaWNlKHJlYWRUb3RhbCwgcmVhZFRvdGFsICsgYmxvY2tTaXplKSk7XG4gIH07XG5cbiAgdmFyIHdvcmtlckJlaGF2aW91ckVuYWJsZWQgPSB0cnVlO1xuXG4gIHNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCF3b3JrZXJCZWhhdmlvdXJFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBldmVudC5kYXRhLmRhdGEsXG4gICAgICAgIGZpbGUgPSBldmVudC5kYXRhLmZpbGUsXG4gICAgICAgIGlkID0gZXZlbnQuZGF0YS5pZDtcbiAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGlmICghZmlsZSAmJiAhZGF0YSkgcmV0dXJuO1xuICAgIHZhciBibG9ja1NpemUgPSBldmVudC5kYXRhLmJsb2NrU2l6ZSB8fCA0ICogMTAyNCAqIDEwMjQ7XG4gICAgdmFyIGhhc2hlciA9IG5ldyBSdXNoYShibG9ja1NpemUpO1xuICAgIGhhc2hlci5yZXNldFN0YXRlKCk7XG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbiAoZXJyLCBoYXNoKSB7XG4gICAgICBpZiAoIWVycikge1xuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgaWQ6IGlkLCBoYXNoOiBoYXNoIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGlkOiBpZCwgZXJyb3I6IGVyci5uYW1lIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGRhdGEpIGhhc2hEYXRhKGhhc2hlciwgZGF0YSwgZG9uZSk7XG4gICAgaWYgKGZpbGUpIGhhc2hGaWxlKGhhc2hlciwgMCwgYmxvY2tTaXplLCBmaWxlLCBkb25lKTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHdvcmtlckJlaGF2aW91ckVuYWJsZWQgPSBmYWxzZTtcbiAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBlc2xpbnQtZW52IGNvbW1vbmpzLCBicm93c2VyICovXG5cbnZhciB3b3JrID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBSdXNoYSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgY3JlYXRlSGFzaCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgcnVuV29ya2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKSxcbiAgICBpc0RlZGljYXRlZFdvcmtlclNjb3BlID0gX3JlcXVpcmUuaXNEZWRpY2F0ZWRXb3JrZXJTY29wZTtcblxudmFyIGlzUnVubmluZ0luRGVkaWNhdGVkV29ya2VyID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIGlzRGVkaWNhdGVkV29ya2VyU2NvcGUoc2VsZik7XG5cblJ1c2hhLmRpc2FibGVXb3JrZXJCZWhhdmlvdXIgPSBpc1J1bm5pbmdJbkRlZGljYXRlZFdvcmtlciA/IHJ1bldvcmtlcigpIDogZnVuY3Rpb24gKCkge307XG5cblJ1c2hhLmNyZWF0ZVdvcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdvcmtlciA9IHdvcmsoLypyZXF1aXJlLnJlc29sdmUqLygyKSk7XG4gIHZhciB0ZXJtaW5hdGUgPSB3b3JrZXIudGVybWluYXRlO1xuICB3b3JrZXIudGVybWluYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwod29ya2VyLm9iamVjdFVSTCk7XG4gICAgdGVybWluYXRlLmNhbGwod29ya2VyKTtcbiAgfTtcbiAgcmV0dXJuIHdvcmtlcjtcbn07XG5cblJ1c2hhLmNyZWF0ZUhhc2ggPSBjcmVhdGVIYXNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1c2hhO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZnVuY3Rpb24gd2VicGFja0Jvb3RzdHJhcEZ1bmMgKG1vZHVsZXMpIHtcbi8qKioqKiovICAvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgdmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gIC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyAgICAvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovICAgIGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gICAgICByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gICAgLy8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovICAgICAgaTogbW9kdWxlSWQsXG4vKioqKioqLyAgICAgIGw6IGZhbHNlLFxuLyoqKioqKi8gICAgICBleHBvcnRzOiB7fVxuLyoqKioqKi8gICAgfTtcblxuLyoqKioqKi8gICAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyAgICBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gICAgLy8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gICAgbW9kdWxlLmwgPSB0cnVlO1xuXG4vKioqKioqLyAgICAvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gIH1cblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbi8qKioqKiovICAvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovICAgIGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyAgICAgICAgZ2V0OiBnZXR0ZXJcbi8qKioqKiovICAgICAgfSk7XG4vKioqKioqLyAgICB9XG4vKioqKioqLyAgfTtcblxuLyoqKioqKi8gIC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gIH07XG5cbi8qKioqKiovICAvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyAgICByZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gIH07XG5cbi8qKioqKiovICAvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbi8qKioqKiovICAvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4vKioqKioqLyAgLy8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gIHZhciBmID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBFTlRSWV9NT0RVTEUpXG4gIHJldHVybiBmLmRlZmF1bHQgfHwgZiAvLyB0cnkgdG8gY2FsbCBkZWZhdWx0IGlmIGRlZmluZWQgdG8gYWxzbyBzdXBwb3J0IGJhYmVsIGVzbW9kdWxlIGV4cG9ydHNcbn1cblxudmFyIG1vZHVsZU5hbWVSZXFFeHAgPSAnW1xcXFwufFxcXFwtfFxcXFwrfFxcXFx3fFxcL3xAXSsnXG52YXIgZGVwZW5kZW5jeVJlZ0V4cCA9ICdcXFxcKChcXC9cXFxcKi4qP1xcXFwqXFwvKT9cXHM/Lio/KCcgKyBtb2R1bGVOYW1lUmVxRXhwICsgJykuKj9cXFxcKScgLy8gYWRkaXRpb25hbCBjaGFycyB3aGVuIG91dHB1dC5wYXRoaW5mbyBpcyB0cnVlXG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI1OTM2NjEvMTMwNDQyXG5mdW5jdGlvbiBxdW90ZVJlZ0V4cCAoc3RyKSB7XG4gIHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIGdldE1vZHVsZURlcGVuZGVuY2llcyAoc291cmNlcywgbW9kdWxlLCBxdWV1ZU5hbWUpIHtcbiAgdmFyIHJldHZhbCA9IHt9XG4gIHJldHZhbFtxdWV1ZU5hbWVdID0gW11cblxuICB2YXIgZm5TdHJpbmcgPSBtb2R1bGUudG9TdHJpbmcoKVxuICB2YXIgd3JhcHBlclNpZ25hdHVyZSA9IGZuU3RyaW5nLm1hdGNoKC9eZnVuY3Rpb25cXHM/XFwoXFx3KyxcXHMqXFx3KyxcXHMqKFxcdyspXFwpLylcbiAgaWYgKCF3cmFwcGVyU2lnbmF0dXJlKSByZXR1cm4gcmV0dmFsXG4gIHZhciB3ZWJwYWNrUmVxdWlyZU5hbWUgPSB3cmFwcGVyU2lnbmF0dXJlWzFdXG5cbiAgLy8gbWFpbiBidW5kbGUgZGVwc1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcoXFxcXFxcXFxufFxcXFxXKScgKyBxdW90ZVJlZ0V4cCh3ZWJwYWNrUmVxdWlyZU5hbWUpICsgZGVwZW5kZW5jeVJlZ0V4cCwgJ2cnKVxuICB2YXIgbWF0Y2hcbiAgd2hpbGUgKChtYXRjaCA9IHJlLmV4ZWMoZm5TdHJpbmcpKSkge1xuICAgIGlmIChtYXRjaFszXSA9PT0gJ2RsbC1yZWZlcmVuY2UnKSBjb250aW51ZVxuICAgIHJldHZhbFtxdWV1ZU5hbWVdLnB1c2gobWF0Y2hbM10pXG4gIH1cblxuICAvLyBkbGwgZGVwc1xuICByZSA9IG5ldyBSZWdFeHAoJ1xcXFwoJyArIHF1b3RlUmVnRXhwKHdlYnBhY2tSZXF1aXJlTmFtZSkgKyAnXFxcXChcIihkbGwtcmVmZXJlbmNlXFxcXHMoJyArIG1vZHVsZU5hbWVSZXFFeHAgKyAnKSlcIlxcXFwpXFxcXCknICsgZGVwZW5kZW5jeVJlZ0V4cCwgJ2cnKVxuICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhmblN0cmluZykpKSB7XG4gICAgaWYgKCFzb3VyY2VzW21hdGNoWzJdXSkge1xuICAgICAgcmV0dmFsW3F1ZXVlTmFtZV0ucHVzaChtYXRjaFsxXSlcbiAgICAgIHNvdXJjZXNbbWF0Y2hbMl1dID0gX193ZWJwYWNrX3JlcXVpcmVfXyhtYXRjaFsxXSkubVxuICAgIH1cbiAgICByZXR2YWxbbWF0Y2hbMl1dID0gcmV0dmFsW21hdGNoWzJdXSB8fCBbXVxuICAgIHJldHZhbFttYXRjaFsyXV0ucHVzaChtYXRjaFs0XSlcbiAgfVxuXG4gIHJldHVybiByZXR2YWxcbn1cblxuZnVuY3Rpb24gaGFzVmFsdWVzSW5RdWV1ZXMgKHF1ZXVlcykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHF1ZXVlcylcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNWYWx1ZXMsIGtleSkge1xuICAgIHJldHVybiBoYXNWYWx1ZXMgfHwgcXVldWVzW2tleV0ubGVuZ3RoID4gMFxuICB9LCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWlyZWRNb2R1bGVzIChzb3VyY2VzLCBtb2R1bGVJZCkge1xuICB2YXIgbW9kdWxlc1F1ZXVlID0ge1xuICAgIG1haW46IFttb2R1bGVJZF1cbiAgfVxuICB2YXIgcmVxdWlyZWRNb2R1bGVzID0ge1xuICAgIG1haW46IFtdXG4gIH1cbiAgdmFyIHNlZW5Nb2R1bGVzID0ge1xuICAgIG1haW46IHt9XG4gIH1cblxuICB3aGlsZSAoaGFzVmFsdWVzSW5RdWV1ZXMobW9kdWxlc1F1ZXVlKSkge1xuICAgIHZhciBxdWV1ZXMgPSBPYmplY3Qua2V5cyhtb2R1bGVzUXVldWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBxdWV1ZU5hbWUgPSBxdWV1ZXNbaV1cbiAgICAgIHZhciBxdWV1ZSA9IG1vZHVsZXNRdWV1ZVtxdWV1ZU5hbWVdXG4gICAgICB2YXIgbW9kdWxlVG9DaGVjayA9IHF1ZXVlLnBvcCgpXG4gICAgICBzZWVuTW9kdWxlc1txdWV1ZU5hbWVdID0gc2Vlbk1vZHVsZXNbcXVldWVOYW1lXSB8fCB7fVxuICAgICAgaWYgKHNlZW5Nb2R1bGVzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10gfHwgIXNvdXJjZXNbcXVldWVOYW1lXVttb2R1bGVUb0NoZWNrXSkgY29udGludWVcbiAgICAgIHNlZW5Nb2R1bGVzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10gPSB0cnVlXG4gICAgICByZXF1aXJlZE1vZHVsZXNbcXVldWVOYW1lXSA9IHJlcXVpcmVkTW9kdWxlc1txdWV1ZU5hbWVdIHx8IFtdXG4gICAgICByZXF1aXJlZE1vZHVsZXNbcXVldWVOYW1lXS5wdXNoKG1vZHVsZVRvQ2hlY2spXG4gICAgICB2YXIgbmV3TW9kdWxlcyA9IGdldE1vZHVsZURlcGVuZGVuY2llcyhzb3VyY2VzLCBzb3VyY2VzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10sIHF1ZXVlTmFtZSlcbiAgICAgIHZhciBuZXdNb2R1bGVzS2V5cyA9IE9iamVjdC5rZXlzKG5ld01vZHVsZXMpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5ld01vZHVsZXNLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIG1vZHVsZXNRdWV1ZVtuZXdNb2R1bGVzS2V5c1tqXV0gPSBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dIHx8IFtdXG4gICAgICAgIG1vZHVsZXNRdWV1ZVtuZXdNb2R1bGVzS2V5c1tqXV0gPSBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dLmNvbmNhdChuZXdNb2R1bGVzW25ld01vZHVsZXNLZXlzW2pdXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVxdWlyZWRNb2R1bGVzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBzb3VyY2VzID0ge1xuICAgIG1haW46IF9fd2VicGFja19yZXF1aXJlX18ubVxuICB9XG5cbiAgdmFyIHJlcXVpcmVkTW9kdWxlcyA9IG9wdGlvbnMuYWxsID8geyBtYWluOiBPYmplY3Qua2V5cyhzb3VyY2VzKSB9IDogZ2V0UmVxdWlyZWRNb2R1bGVzKHNvdXJjZXMsIG1vZHVsZUlkKVxuXG4gIHZhciBzcmMgPSAnJ1xuXG4gIE9iamVjdC5rZXlzKHJlcXVpcmVkTW9kdWxlcykuZmlsdGVyKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtICE9PSAnbWFpbicgfSkuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgdmFyIGVudHJ5TW9kdWxlID0gMFxuICAgIHdoaWxlIChyZXF1aXJlZE1vZHVsZXNbbW9kdWxlXVtlbnRyeU1vZHVsZV0pIHtcbiAgICAgIGVudHJ5TW9kdWxlKytcbiAgICB9XG4gICAgcmVxdWlyZWRNb2R1bGVzW21vZHVsZV0ucHVzaChlbnRyeU1vZHVsZSlcbiAgICBzb3VyY2VzW21vZHVsZV1bZW50cnlNb2R1bGVdID0gJyhmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHsgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fOyB9KSdcbiAgICBzcmMgPSBzcmMgKyAndmFyICcgKyBtb2R1bGUgKyAnID0gKCcgKyB3ZWJwYWNrQm9vdHN0cmFwRnVuYy50b1N0cmluZygpLnJlcGxhY2UoJ0VOVFJZX01PRFVMRScsIEpTT04uc3RyaW5naWZ5KGVudHJ5TW9kdWxlKSkgKyAnKSh7JyArIHJlcXVpcmVkTW9kdWxlc1ttb2R1bGVdLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuICcnICsgSlNPTi5zdHJpbmdpZnkoaWQpICsgJzogJyArIHNvdXJjZXNbbW9kdWxlXVtpZF0udG9TdHJpbmcoKSB9KS5qb2luKCcsJykgKyAnfSk7XFxuJ1xuICB9KVxuXG4gIHNyYyA9IHNyYyArICcoJyArIHdlYnBhY2tCb290c3RyYXBGdW5jLnRvU3RyaW5nKCkucmVwbGFjZSgnRU5UUllfTU9EVUxFJywgSlNPTi5zdHJpbmdpZnkobW9kdWxlSWQpKSArICcpKHsnICsgcmVxdWlyZWRNb2R1bGVzLm1haW4ubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gJycgKyBKU09OLnN0cmluZ2lmeShpZCkgKyAnOiAnICsgc291cmNlcy5tYWluW2lkXS50b1N0cmluZygpIH0pLmpvaW4oJywnKSArICd9KShzZWxmKTsnXG5cbiAgdmFyIGJsb2IgPSBuZXcgd2luZG93LkJsb2IoW3NyY10sIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSlcbiAgaWYgKG9wdGlvbnMuYmFyZSkgeyByZXR1cm4gYmxvYiB9XG5cbiAgdmFyIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCB8fCB3aW5kb3cubW96VVJMIHx8IHdpbmRvdy5tc1VSTFxuXG4gIHZhciB3b3JrZXJVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gIHZhciB3b3JrZXIgPSBuZXcgd2luZG93Lldvcmtlcih3b3JrZXJVcmwpXG4gIHdvcmtlci5vYmplY3RVUkwgPSB3b3JrZXJVcmxcblxuICByZXR1cm4gd29ya2VyXG59XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIFRoZSBsb3ctbGV2ZWwgUnVzaENvcmUgbW9kdWxlIHByb3ZpZGVzIHRoZSBoZWFydCBvZiBSdXNoYSxcbi8vIGEgaGlnaC1zcGVlZCBzaGExIGltcGxlbWVudGF0aW9uIHdvcmtpbmcgb24gYW4gSW50MzJBcnJheSBoZWFwLlxuLy8gQXQgZmlyc3QgZ2xhbmNlLCB0aGUgaW1wbGVtZW50YXRpb24gc2VlbXMgY29tcGxpY2F0ZWQsIGhvd2V2ZXJcbi8vIHdpdGggdGhlIFNIQTEgc3BlYyBhdCBoYW5kLCBpdCBpcyBvYnZpb3VzIHRoaXMgYWxtb3N0IGEgdGV4dGJvb2tcbi8vIGltcGxlbWVudGF0aW9uIHRoYXQgaGFzIGEgZmV3IGZ1bmN0aW9ucyBoYW5kLWlubGluZWQgYW5kIGEgZmV3IGxvb3BzXG4vLyBoYW5kLXVucm9sbGVkLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBSdXNoYUNvcmUoc3RkbGliJDg0NiwgZm9yZWlnbiQ4NDcsIGhlYXAkODQ4KSB7XG4gICAgJ3VzZSBhc20nO1xuICAgIHZhciBIJDg0OSA9IG5ldyBzdGRsaWIkODQ2LkludDMyQXJyYXkoaGVhcCQ4NDgpO1xuICAgIGZ1bmN0aW9uIGhhc2gkODUwKGskODUxLCB4JDg1Mikge1xuICAgICAgICAvLyBrIGluIGJ5dGVzXG4gICAgICAgIGskODUxID0gayQ4NTEgfCAwO1xuICAgICAgICB4JDg1MiA9IHgkODUyIHwgMDtcbiAgICAgICAgdmFyIGkkODUzID0gMCwgaiQ4NTQgPSAwLCB5MCQ4NTUgPSAwLCB6MCQ4NTYgPSAwLCB5MSQ4NTcgPSAwLCB6MSQ4NTggPSAwLCB5MiQ4NTkgPSAwLCB6MiQ4NjAgPSAwLCB5MyQ4NjEgPSAwLCB6MyQ4NjIgPSAwLCB5NCQ4NjMgPSAwLCB6NCQ4NjQgPSAwLCB0MCQ4NjUgPSAwLCB0MSQ4NjYgPSAwO1xuICAgICAgICB5MCQ4NTUgPSBIJDg0OVt4JDg1MiArIDMyMCA+PiAyXSB8IDA7XG4gICAgICAgIHkxJDg1NyA9IEgkODQ5W3gkODUyICsgMzI0ID4+IDJdIHwgMDtcbiAgICAgICAgeTIkODU5ID0gSCQ4NDlbeCQ4NTIgKyAzMjggPj4gMl0gfCAwO1xuICAgICAgICB5MyQ4NjEgPSBIJDg0OVt4JDg1MiArIDMzMiA+PiAyXSB8IDA7XG4gICAgICAgIHk0JDg2MyA9IEgkODQ5W3gkODUyICsgMzM2ID4+IDJdIHwgMDtcbiAgICAgICAgZm9yIChpJDg1MyA9IDA7IChpJDg1MyB8IDApIDwgKGskODUxIHwgMCk7IGkkODUzID0gaSQ4NTMgKyA2NCB8IDApIHtcbiAgICAgICAgICAgIHowJDg1NiA9IHkwJDg1NTtcbiAgICAgICAgICAgIHoxJDg1OCA9IHkxJDg1NztcbiAgICAgICAgICAgIHoyJDg2MCA9IHkyJDg1OTtcbiAgICAgICAgICAgIHozJDg2MiA9IHkzJDg2MTtcbiAgICAgICAgICAgIHo0JDg2NCA9IHk0JDg2MztcbiAgICAgICAgICAgIGZvciAoaiQ4NTQgPSAwOyAoaiQ4NTQgfCAwKSA8IDY0OyBqJDg1NCA9IGokODU0ICsgNCB8IDApIHtcbiAgICAgICAgICAgICAgICB0MSQ4NjYgPSBIJDg0OVtpJDg1MyArIGokODU0ID4+IDJdIHwgMDtcbiAgICAgICAgICAgICAgICB0MCQ4NjUgPSAoKHkwJDg1NSA8PCA1IHwgeTAkODU1ID4+PiAyNykgKyAoeTEkODU3ICYgeTIkODU5IHwgfnkxJDg1NyAmIHkzJDg2MSkgfCAwKSArICgodDEkODY2ICsgeTQkODYzIHwgMCkgKyAxNTE4NTAwMjQ5IHwgMCkgfCAwO1xuICAgICAgICAgICAgICAgIHk0JDg2MyA9IHkzJDg2MTtcbiAgICAgICAgICAgICAgICB5MyQ4NjEgPSB5MiQ4NTk7XG4gICAgICAgICAgICAgICAgeTIkODU5ID0geTEkODU3IDw8IDMwIHwgeTEkODU3ID4+PiAyO1xuICAgICAgICAgICAgICAgIHkxJDg1NyA9IHkwJDg1NTtcbiAgICAgICAgICAgICAgICB5MCQ4NTUgPSB0MCQ4NjU7XG4gICAgICAgICAgICAgICAgSCQ4NDlbayQ4NTEgKyBqJDg1NCA+PiAyXSA9IHQxJDg2NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaiQ4NTQgPSBrJDg1MSArIDY0IHwgMDsgKGokODU0IHwgMCkgPCAoayQ4NTEgKyA4MCB8IDApOyBqJDg1NCA9IGokODU0ICsgNCB8IDApIHtcbiAgICAgICAgICAgICAgICB0MSQ4NjYgPSAoSCQ4NDlbaiQ4NTQgLSAxMiA+PiAyXSBeIEgkODQ5W2okODU0IC0gMzIgPj4gMl0gXiBIJDg0OVtqJDg1NCAtIDU2ID4+IDJdIF4gSCQ4NDlbaiQ4NTQgLSA2NCA+PiAyXSkgPDwgMSB8IChIJDg0OVtqJDg1NCAtIDEyID4+IDJdIF4gSCQ4NDlbaiQ4NTQgLSAzMiA+PiAyXSBeIEgkODQ5W2okODU0IC0gNTYgPj4gMl0gXiBIJDg0OVtqJDg1NCAtIDY0ID4+IDJdKSA+Pj4gMzE7XG4gICAgICAgICAgICAgICAgdDAkODY1ID0gKCh5MCQ4NTUgPDwgNSB8IHkwJDg1NSA+Pj4gMjcpICsgKHkxJDg1NyAmIHkyJDg1OSB8IH55MSQ4NTcgJiB5MyQ4NjEpIHwgMCkgKyAoKHQxJDg2NiArIHk0JDg2MyB8IDApICsgMTUxODUwMDI0OSB8IDApIHwgMDtcbiAgICAgICAgICAgICAgICB5NCQ4NjMgPSB5MyQ4NjE7XG4gICAgICAgICAgICAgICAgeTMkODYxID0geTIkODU5O1xuICAgICAgICAgICAgICAgIHkyJDg1OSA9IHkxJDg1NyA8PCAzMCB8IHkxJDg1NyA+Pj4gMjtcbiAgICAgICAgICAgICAgICB5MSQ4NTcgPSB5MCQ4NTU7XG4gICAgICAgICAgICAgICAgeTAkODU1ID0gdDAkODY1O1xuICAgICAgICAgICAgICAgIEgkODQ5W2okODU0ID4+IDJdID0gdDEkODY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChqJDg1NCA9IGskODUxICsgODAgfCAwOyAoaiQ4NTQgfCAwKSA8IChrJDg1MSArIDE2MCB8IDApOyBqJDg1NCA9IGokODU0ICsgNCB8IDApIHtcbiAgICAgICAgICAgICAgICB0MSQ4NjYgPSAoSCQ4NDlbaiQ4NTQgLSAxMiA+PiAyXSBeIEgkODQ5W2okODU0IC0gMzIgPj4gMl0gXiBIJDg0OVtqJDg1NCAtIDU2ID4+IDJdIF4gSCQ4NDlbaiQ4NTQgLSA2NCA+PiAyXSkgPDwgMSB8IChIJDg0OVtqJDg1NCAtIDEyID4+IDJdIF4gSCQ4NDlbaiQ4NTQgLSAzMiA+PiAyXSBeIEgkODQ5W2okODU0IC0gNTYgPj4gMl0gXiBIJDg0OVtqJDg1NCAtIDY0ID4+IDJdKSA+Pj4gMzE7XG4gICAgICAgICAgICAgICAgdDAkODY1ID0gKCh5MCQ4NTUgPDwgNSB8IHkwJDg1NSA+Pj4gMjcpICsgKHkxJDg1NyBeIHkyJDg1OSBeIHkzJDg2MSkgfCAwKSArICgodDEkODY2ICsgeTQkODYzIHwgMCkgKyAxODU5Nzc1MzkzIHwgMCkgfCAwO1xuICAgICAgICAgICAgICAgIHk0JDg2MyA9IHkzJDg2MTtcbiAgICAgICAgICAgICAgICB5MyQ4NjEgPSB5MiQ4NTk7XG4gICAgICAgICAgICAgICAgeTIkODU5ID0geTEkODU3IDw8IDMwIHwgeTEkODU3ID4+PiAyO1xuICAgICAgICAgICAgICAgIHkxJDg1NyA9IHkwJDg1NTtcbiAgICAgICAgICAgICAgICB5MCQ4NTUgPSB0MCQ4NjU7XG4gICAgICAgICAgICAgICAgSCQ4NDlbaiQ4NTQgPj4gMl0gPSB0MSQ4NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGokODU0ID0gayQ4NTEgKyAxNjAgfCAwOyAoaiQ4NTQgfCAwKSA8IChrJDg1MSArIDI0MCB8IDApOyBqJDg1NCA9IGokODU0ICsgNCB8IDApIHtcbiAgICAgICAgICAgICAgICB0MSQ4NjYgPSAoSCQ4NDlbaiQ4NTQgLSAxMiA+PiAyXSBeIEgkODQ5W2okODU0IC0gMzIgPj4gMl0gXiBIJDg0OVtqJDg1NCAtIDU2ID4+IDJdIF4gSCQ4NDlbaiQ4NTQgLSA2NCA+PiAyXSkgPDwgMSB8IChIJDg0OVtqJDg1NCAtIDEyID4+IDJdIF4gSCQ4NDlbaiQ4NTQgLSAzMiA+PiAyXSBeIEgkODQ5W2okODU0IC0gNTYgPj4gMl0gXiBIJDg0OVtqJDg1NCAtIDY0ID4+IDJdKSA+Pj4gMzE7XG4gICAgICAgICAgICAgICAgdDAkODY1ID0gKCh5MCQ4NTUgPDwgNSB8IHkwJDg1NSA+Pj4gMjcpICsgKHkxJDg1NyAmIHkyJDg1OSB8IHkxJDg1NyAmIHkzJDg2MSB8IHkyJDg1OSAmIHkzJDg2MSkgfCAwKSArICgodDEkODY2ICsgeTQkODYzIHwgMCkgLSAxODk0MDA3NTg4IHwgMCkgfCAwO1xuICAgICAgICAgICAgICAgIHk0JDg2MyA9IHkzJDg2MTtcbiAgICAgICAgICAgICAgICB5MyQ4NjEgPSB5MiQ4NTk7XG4gICAgICAgICAgICAgICAgeTIkODU5ID0geTEkODU3IDw8IDMwIHwgeTEkODU3ID4+PiAyO1xuICAgICAgICAgICAgICAgIHkxJDg1NyA9IHkwJDg1NTtcbiAgICAgICAgICAgICAgICB5MCQ4NTUgPSB0MCQ4NjU7XG4gICAgICAgICAgICAgICAgSCQ4NDlbaiQ4NTQgPj4gMl0gPSB0MSQ4NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGokODU0ID0gayQ4NTEgKyAyNDAgfCAwOyAoaiQ4NTQgfCAwKSA8IChrJDg1MSArIDMyMCB8IDApOyBqJDg1NCA9IGokODU0ICsgNCB8IDApIHtcbiAgICAgICAgICAgICAgICB0MSQ4NjYgPSAoSCQ4NDlbaiQ4NTQgLSAxMiA+PiAyXSBeIEgkODQ5W2okODU0IC0gMzIgPj4gMl0gXiBIJDg0OVtqJDg1NCAtIDU2ID4+IDJdIF4gSCQ4NDlbaiQ4NTQgLSA2NCA+PiAyXSkgPDwgMSB8IChIJDg0OVtqJDg1NCAtIDEyID4+IDJdIF4gSCQ4NDlbaiQ4NTQgLSAzMiA+PiAyXSBeIEgkODQ5W2okODU0IC0gNTYgPj4gMl0gXiBIJDg0OVtqJDg1NCAtIDY0ID4+IDJdKSA+Pj4gMzE7XG4gICAgICAgICAgICAgICAgdDAkODY1ID0gKCh5MCQ4NTUgPDwgNSB8IHkwJDg1NSA+Pj4gMjcpICsgKHkxJDg1NyBeIHkyJDg1OSBeIHkzJDg2MSkgfCAwKSArICgodDEkODY2ICsgeTQkODYzIHwgMCkgLSA4OTk0OTc1MTQgfCAwKSB8IDA7XG4gICAgICAgICAgICAgICAgeTQkODYzID0geTMkODYxO1xuICAgICAgICAgICAgICAgIHkzJDg2MSA9IHkyJDg1OTtcbiAgICAgICAgICAgICAgICB5MiQ4NTkgPSB5MSQ4NTcgPDwgMzAgfCB5MSQ4NTcgPj4+IDI7XG4gICAgICAgICAgICAgICAgeTEkODU3ID0geTAkODU1O1xuICAgICAgICAgICAgICAgIHkwJDg1NSA9IHQwJDg2NTtcbiAgICAgICAgICAgICAgICBIJDg0OVtqJDg1NCA+PiAyXSA9IHQxJDg2NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHkwJDg1NSA9IHkwJDg1NSArIHowJDg1NiB8IDA7XG4gICAgICAgICAgICB5MSQ4NTcgPSB5MSQ4NTcgKyB6MSQ4NTggfCAwO1xuICAgICAgICAgICAgeTIkODU5ID0geTIkODU5ICsgejIkODYwIHwgMDtcbiAgICAgICAgICAgIHkzJDg2MSA9IHkzJDg2MSArIHozJDg2MiB8IDA7XG4gICAgICAgICAgICB5NCQ4NjMgPSB5NCQ4NjMgKyB6NCQ4NjQgfCAwO1xuICAgICAgICB9XG4gICAgICAgIEgkODQ5W3gkODUyICsgMzIwID4+IDJdID0geTAkODU1O1xuICAgICAgICBIJDg0OVt4JDg1MiArIDMyNCA+PiAyXSA9IHkxJDg1NztcbiAgICAgICAgSCQ4NDlbeCQ4NTIgKyAzMjggPj4gMl0gPSB5MiQ4NTk7XG4gICAgICAgIEgkODQ5W3gkODUyICsgMzMyID4+IDJdID0geTMkODYxO1xuICAgICAgICBIJDg0OVt4JDg1MiArIDMzNiA+PiAyXSA9IHk0JDg2MztcbiAgICB9XG4gICAgcmV0dXJuIHsgaGFzaDogaGFzaCQ4NTAgfTtcbn07XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgX3RoaXMgPSB0aGlzO1xuXG4vKiBlc2xpbnQtZW52IGNvbW1vbmpzLCBicm93c2VyICovXG5cbnZhciByZWFkZXIgPSB2b2lkIDA7XG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzZWxmLkZpbGVSZWFkZXJTeW5jICE9PSAndW5kZWZpbmVkJykge1xuICByZWFkZXIgPSBuZXcgc2VsZi5GaWxlUmVhZGVyU3luYygpO1xufVxuXG4vLyBDb252ZXJ0IGEgYmluYXJ5IHN0cmluZyBhbmQgd3JpdGUgaXQgdG8gdGhlIGhlYXAuXG4vLyBBIGJpbmFyeSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gb25seSBjb250YWluIGNoYXIgY29kZXMgPCAyNTYuXG52YXIgY29udlN0ciA9IGZ1bmN0aW9uIChzdHIsIEg4LCBIMzIsIHN0YXJ0LCBsZW4sIG9mZikge1xuICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgIG9tID0gb2ZmICUgNCxcbiAgICAgIGxtID0gKGxlbiArIG9tKSAlIDQsXG4gICAgICBqID0gbGVuIC0gbG07XG4gIHN3aXRjaCAob20pIHtcbiAgICBjYXNlIDA6XG4gICAgICBIOFtvZmZdID0gc3RyLmNoYXJDb2RlQXQoc3RhcnQgKyAzKTtcbiAgICBjYXNlIDE6XG4gICAgICBIOFtvZmYgKyAxIC0gKG9tIDw8IDEpIHwgMF0gPSBzdHIuY2hhckNvZGVBdChzdGFydCArIDIpO1xuICAgIGNhc2UgMjpcbiAgICAgIEg4W29mZiArIDIgLSAob20gPDwgMSkgfCAwXSA9IHN0ci5jaGFyQ29kZUF0KHN0YXJ0ICsgMSk7XG4gICAgY2FzZSAzOlxuICAgICAgSDhbb2ZmICsgMyAtIChvbSA8PCAxKSB8IDBdID0gc3RyLmNoYXJDb2RlQXQoc3RhcnQpO1xuICB9XG4gIGlmIChsZW4gPCBsbSArICg0IC0gb20pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoaSA9IDQgLSBvbTsgaSA8IGo7IGkgPSBpICsgNCB8IDApIHtcbiAgICBIMzJbb2ZmICsgaSA+PiAyXSA9IHN0ci5jaGFyQ29kZUF0KHN0YXJ0ICsgaSkgPDwgMjQgfCBzdHIuY2hhckNvZGVBdChzdGFydCArIGkgKyAxKSA8PCAxNiB8IHN0ci5jaGFyQ29kZUF0KHN0YXJ0ICsgaSArIDIpIDw8IDggfCBzdHIuY2hhckNvZGVBdChzdGFydCArIGkgKyAzKTtcbiAgfVxuICBzd2l0Y2ggKGxtKSB7XG4gICAgY2FzZSAzOlxuICAgICAgSDhbb2ZmICsgaiArIDEgfCAwXSA9IHN0ci5jaGFyQ29kZUF0KHN0YXJ0ICsgaiArIDIpO1xuICAgIGNhc2UgMjpcbiAgICAgIEg4W29mZiArIGogKyAyIHwgMF0gPSBzdHIuY2hhckNvZGVBdChzdGFydCArIGogKyAxKTtcbiAgICBjYXNlIDE6XG4gICAgICBIOFtvZmYgKyBqICsgMyB8IDBdID0gc3RyLmNoYXJDb2RlQXQoc3RhcnQgKyBqKTtcbiAgfVxufTtcblxuLy8gQ29udmVydCBhIGJ1ZmZlciBvciBhcnJheSBhbmQgd3JpdGUgaXQgdG8gdGhlIGhlYXAuXG4vLyBUaGUgYnVmZmVyIG9yIGFycmF5IGlzIGV4cGVjdGVkIHRvIG9ubHkgY29udGFpbiBlbGVtZW50cyA8IDI1Ni5cbnZhciBjb252QnVmID0gZnVuY3Rpb24gKGJ1ZiwgSDgsIEgzMiwgc3RhcnQsIGxlbiwgb2ZmKSB7XG4gIHZhciBpID0gdm9pZCAwLFxuICAgICAgb20gPSBvZmYgJSA0LFxuICAgICAgbG0gPSAobGVuICsgb20pICUgNCxcbiAgICAgIGogPSBsZW4gLSBsbTtcbiAgc3dpdGNoIChvbSkge1xuICAgIGNhc2UgMDpcbiAgICAgIEg4W29mZl0gPSBidWZbc3RhcnQgKyAzXTtcbiAgICBjYXNlIDE6XG4gICAgICBIOFtvZmYgKyAxIC0gKG9tIDw8IDEpIHwgMF0gPSBidWZbc3RhcnQgKyAyXTtcbiAgICBjYXNlIDI6XG4gICAgICBIOFtvZmYgKyAyIC0gKG9tIDw8IDEpIHwgMF0gPSBidWZbc3RhcnQgKyAxXTtcbiAgICBjYXNlIDM6XG4gICAgICBIOFtvZmYgKyAzIC0gKG9tIDw8IDEpIHwgMF0gPSBidWZbc3RhcnRdO1xuICB9XG4gIGlmIChsZW4gPCBsbSArICg0IC0gb20pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoaSA9IDQgLSBvbTsgaSA8IGo7IGkgPSBpICsgNCB8IDApIHtcbiAgICBIMzJbb2ZmICsgaSA+PiAyIHwgMF0gPSBidWZbc3RhcnQgKyBpXSA8PCAyNCB8IGJ1ZltzdGFydCArIGkgKyAxXSA8PCAxNiB8IGJ1ZltzdGFydCArIGkgKyAyXSA8PCA4IHwgYnVmW3N0YXJ0ICsgaSArIDNdO1xuICB9XG4gIHN3aXRjaCAobG0pIHtcbiAgICBjYXNlIDM6XG4gICAgICBIOFtvZmYgKyBqICsgMSB8IDBdID0gYnVmW3N0YXJ0ICsgaiArIDJdO1xuICAgIGNhc2UgMjpcbiAgICAgIEg4W29mZiArIGogKyAyIHwgMF0gPSBidWZbc3RhcnQgKyBqICsgMV07XG4gICAgY2FzZSAxOlxuICAgICAgSDhbb2ZmICsgaiArIDMgfCAwXSA9IGJ1ZltzdGFydCArIGpdO1xuICB9XG59O1xuXG52YXIgY29udkJsb2IgPSBmdW5jdGlvbiAoYmxvYiwgSDgsIEgzMiwgc3RhcnQsIGxlbiwgb2ZmKSB7XG4gIHZhciBpID0gdm9pZCAwLFxuICAgICAgb20gPSBvZmYgJSA0LFxuICAgICAgbG0gPSAobGVuICsgb20pICUgNCxcbiAgICAgIGogPSBsZW4gLSBsbTtcbiAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iLnNsaWNlKHN0YXJ0LCBzdGFydCArIGxlbikpKTtcbiAgc3dpdGNoIChvbSkge1xuICAgIGNhc2UgMDpcbiAgICAgIEg4W29mZl0gPSBidWZbM107XG4gICAgY2FzZSAxOlxuICAgICAgSDhbb2ZmICsgMSAtIChvbSA8PCAxKSB8IDBdID0gYnVmWzJdO1xuICAgIGNhc2UgMjpcbiAgICAgIEg4W29mZiArIDIgLSAob20gPDwgMSkgfCAwXSA9IGJ1ZlsxXTtcbiAgICBjYXNlIDM6XG4gICAgICBIOFtvZmYgKyAzIC0gKG9tIDw8IDEpIHwgMF0gPSBidWZbMF07XG4gIH1cbiAgaWYgKGxlbiA8IGxtICsgKDQgLSBvbSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChpID0gNCAtIG9tOyBpIDwgajsgaSA9IGkgKyA0IHwgMCkge1xuICAgIEgzMltvZmYgKyBpID4+IDIgfCAwXSA9IGJ1ZltpXSA8PCAyNCB8IGJ1ZltpICsgMV0gPDwgMTYgfCBidWZbaSArIDJdIDw8IDggfCBidWZbaSArIDNdO1xuICB9XG4gIHN3aXRjaCAobG0pIHtcbiAgICBjYXNlIDM6XG4gICAgICBIOFtvZmYgKyBqICsgMSB8IDBdID0gYnVmW2ogKyAyXTtcbiAgICBjYXNlIDI6XG4gICAgICBIOFtvZmYgKyBqICsgMiB8IDBdID0gYnVmW2ogKyAxXTtcbiAgICBjYXNlIDE6XG4gICAgICBIOFtvZmYgKyBqICsgMyB8IDBdID0gYnVmW2pdO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCBIOCwgSDMyLCBzdGFydCwgbGVuLCBvZmYpIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBjb252U3RyKGRhdGEsIEg4LCBIMzIsIHN0YXJ0LCBsZW4sIG9mZik7XG4gIH1cbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBjb252QnVmKGRhdGEsIEg4LCBIMzIsIHN0YXJ0LCBsZW4sIG9mZik7XG4gIH1cbiAgLy8gU2FmZWx5IGRvaW5nIGEgQnVmZmVyIGNoZWNrIHVzaW5nIFwidGhpc1wiIHRvIGF2b2lkIEJ1ZmZlciBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgZGlzdFxuICBpZiAoX3RoaXMgJiYgX3RoaXMuQnVmZmVyICYmIF90aGlzLkJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xuICAgIHJldHVybiBjb252QnVmKGRhdGEsIEg4LCBIMzIsIHN0YXJ0LCBsZW4sIG9mZik7XG4gIH1cbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBjb252QnVmKG5ldyBVaW50OEFycmF5KGRhdGEpLCBIOCwgSDMyLCBzdGFydCwgbGVuLCBvZmYpO1xuICB9XG4gIGlmIChkYXRhLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGNvbnZCdWYobmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKSwgSDgsIEgzMiwgc3RhcnQsIGxlbiwgb2ZmKTtcbiAgfVxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICByZXR1cm4gY29udkJsb2IoZGF0YSwgSDgsIEgzMiwgc3RhcnQsIGxlbiwgb2ZmKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGRhdGEgdHlwZS4nKTtcbn07XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKiBlc2xpbnQtZW52IGNvbW1vbmpzLCBicm93c2VyICovXG5cbnZhciBSdXNoYSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSksXG4gICAgdG9IZXggPSBfcmVxdWlyZS50b0hleDtcblxudmFyIEhhc2ggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhhc2goKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2gpO1xuXG4gICAgdGhpcy5fcnVzaGEgPSBuZXcgUnVzaGEoKTtcbiAgICB0aGlzLl9ydXNoYS5yZXNldFN0YXRlKCk7XG4gIH1cblxuICBIYXNoLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoZGF0YSkge1xuICAgIHRoaXMuX3J1c2hhLmFwcGVuZChkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBIYXNoLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiBkaWdlc3QoZW5jb2RpbmcpIHtcbiAgICB2YXIgZGlnZXN0ID0gdGhpcy5fcnVzaGEucmF3RW5kKCkuYnVmZmVyO1xuICAgIGlmICghZW5jb2RpbmcpIHtcbiAgICAgIHJldHVybiBkaWdlc3Q7XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ2hleCcpIHtcbiAgICAgIHJldHVybiB0b0hleChkaWdlc3QpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIGRpZ2VzdCBlbmNvZGluZycpO1xuICB9O1xuXG4gIHJldHVybiBIYXNoO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBIYXNoKCk7XG59O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9