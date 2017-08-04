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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isElement(ele) {
        return ele.nodeType && ele.nodeType === Node.DOCUMENT_NODE;
    }
    function each(list, cb) {
        if (!isArrayLike(list)) {
            cb(list, 0, list);
            return;
        }
        for (var i = 0; i < list.length; i++) {
            cb(list[i], i, list);
        }
    }
    exports.each = each;
    function isInteger(value) {
        return typeof value === 'number' &&
            !isNaN(value) &&
            value % 1 === 0 || value === 0;
    }
    function isArrayLike(arr) {
        return typeof arr === 'object' &&
            isInteger(arr.length) &&
            arr.length === 0 ||
            arr.length > 0 &&
                arr.length - 1 in arr;
    }
    var Utils = {
        isArrayLike: isArrayLike,
        isInteger: isInteger,
        each: each,
        isElement: isElement
    };
    exports.Utils = Utils;
    //navigator
    function selection(items, state, initNum) {
        /**
         * init choose the first item
         * when click a item :
         *      clean the current item state
         *      set current item state
         *
         */
        // if(!isArrayLike(items)) return;
        var stateClass = state;
        var current = initNum || 0;
        var menus = items;
        each(items, function (v, i, li) {
            // if(!isElement(v)) return;
            console.log(li, i, v);
            v.addEventListener('click', function (e) {
                var preEle = li[current];
                preEle.classList.remove(stateClass);
                v.classList.add(stateClass);
                current = i;
            });
        });
    }
    exports.selection = selection;
    function state(i) {
        var init = i;
        return {
            get state() { return init; },
            set state(s) { init = s; }
        };
    }
    exports.state = state;
    function scrollTo(ele, callback) {
        var start = document.body.scrollTop;
        var end = start + ele.getBoundingClientRect().top;
        animate(function (now) {
            document.body['scrollTop'] = start + Math.round((end - start) * now);
        }, callback);
        // let current=state(0);
        // each(ele,function(ele,i,arr){
        //     ele.addEventListener('click',(e:Event)=>{
        //         //get target element
        //         //get its offset
        //         //caculate start end
        //         //animate it
        //         //change state
        //     });
        // })
    }
    exports.scrollTo = scrollTo;
    function slideToggle() {
    }
    exports.slideToggle = slideToggle;
    function slideDown(ele, cb, display) {
        //get ele's height
        var styleHeight = ele.style.height;
        ele.style.display = display || 'block';
        var h = window.getComputedStyle(ele).height;
        ele.style.height = 0;
        slide(ele, 0, parseInt(h), function () {
            ele.style.height = styleHeight;
            cb();
        });
    }
    exports.slideDown = slideDown;
    function slideUp(ele, cb) {
        //is visible
        var originHeight = window.getComputedStyle(ele).height;
        var styleHeight = ele.style.height;
        var start = parseInt(originHeight);
        var end = 0;
        slide(ele, start, end, function () {
            ele.style.display = 'none';
            ele.style.height = styleHeight;
            cb();
        });
    }
    exports.slideUp = slideUp;
    function slide(ele, start, end, cb) {
        animate(function (now) {
            ele.style.height = start + (end - start) * now;
        }, cb);
    }
    exports.slide = slide;
    function animate(setp, complete) {
        var current = 0;
        var duart = 300;
        tween(function () {
            var next = getNext(current);
            setp(next);
            current += 16 / duart;
            if (current > 0.98) {
                if (complete instanceof Function)
                    complete();
                return false;
            }
            return true;
        });
        function getNext(now) {
            var x = now + 16 / duart;
            return ease(x > 1 ? 1 : x);
        }
    }
    exports.animate = animate;
    function ease(x) {
        return Math.cos(x * Math.PI + Math.PI) / 2 + 1.0 / 2;
    }
    exports.ease = ease;
    function tween(cb) {
        var handler;
        if (window.requestAnimationFrame) {
            handler = function () {
                if (cb())
                    window.requestAnimationFrame(handler);
            };
            window.requestAnimationFrame(handler);
        }
        else {
            handler = function () {
                if (cb())
                    setTimeout(handler, 16);
            };
            setTimeout(handler, 16);
        }
        ;
    }
    exports.tween = tween;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_component__);


describe("document test",function(){
    describe("component test",function(){
        it("ease test",function(){
            expect(__WEBPACK_IMPORTED_MODULE_0__lib_component__["ease"](0)).to.be(0);
            expect(__WEBPACK_IMPORTED_MODULE_0__lib_component__["ease"](1)).to.be(1);
            // expect(Component.ease(0.5)).to.be(0.5);
        });

        it("tween",function(done){
            let tween=__WEBPACK_IMPORTED_MODULE_0__lib_component__["tween"];
            let i=0;
            tween(()=>{
                i++;
                if(i>5){
                    console.log(i);
                    done();
                    return false;
                }
                return true;
            });
        });

        // it("animate test",function(done){
        //      var ele=document.getElementById("test-animate");
        //      var width=parseInt(ele.style.width.split('px')[0],10);
        //     Component.animate((now)=>{
        //         width+=10;
        //         ele.style.width=width;//width should be string eg:'100px'
        //         console.log(now);
        //     },done);
        // });

        // it("scroll animate",(done)=>{
        //     var ele=document.getElementById('test-animate');
        //     Component.scrollTo(ele,()=>{
        //         done();
        //         console.log('scroll end');
        //     });
        // });

        it("slide animate",(done)=>{
            let e=document.getElementById('test-animate');
            __WEBPACK_IMPORTED_MODULE_0__lib_component__["slide"](e,0,100,done);
        });

        it("slide down test1",(done)=>{
            let e1=document.getElementById('slide-down1');
            __WEBPACK_IMPORTED_MODULE_0__lib_component__["slideUp"](e1,()=>{
                console.log('test1');
                done();
            });
        });
        // it("slide down test2",(done)=>{
        //     let e2=document.getElementById('slide-down2');
        //     Component.slideDown(e2,()=>{
        //         Component.slideUp(e2,done);
        //     },'flex');
        // });
        it("slide down test3",(done)=>{
            let e3=document.getElementById('slide-down3');
            __WEBPACK_IMPORTED_MODULE_0__lib_component__["slideUp"](e3,done);
        })
        
    });
});

/***/ })
/******/ ]);