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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = animate;
function animate(){
    console.log('from anmate');
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isElement(ele) {
    return ele.nodeType && ele.nodeType === Node.DOCUMENT_NODE;
}
function each(list, cb) {
    if (list.hasOwnProperty('length') || !isInteger(list.length)) {
        cb(list, 0, list);
        return;
    }
    for (var i = 0; i < list.length; i++) {
        cb(list[i], i, list);
    }
}
function isInteger(value) {
    return typeof value === 'number' &&
        !isNaN(value) &&
        value % 1 === value;
}
function isArrayLike(arr) {
    return typeof arr === 'object' &&
        isInteger(arr.length) &&
        arr.length === 0 ||
        arr.length > 0 &&
            arr.length - 1 in arr;
}
//navigator
function selection(items, state, initNum) {
    /**
     * init choose the first item
     * when click a item :
     *      clean the current item state
     *      set current item state
     *
     */
    if (!isArrayLike(items))
        return;
    var stateClass = state;
    var current = initNum || 0;
    var menus = items;
    each(items, function (v, i, li) {
        if (!isElement(v))
            return;
        v.addEventListener('click', function (e) {
            var preEle = li[current];
            preEle.classList.remove(stateClass);
            v.classList.add(stateClass);
            current = i;
        });
    });
}
exports.selection = selection;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_animate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_app__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_component__);




console.log(__WEBPACK_IMPORTED_MODULE_0__lib_animate__["a" /* default */]);

console.log(__WEBPACK_IMPORTED_MODULE_2__lib_component__["selection"]);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map