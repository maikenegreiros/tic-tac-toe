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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/ts/Views/TicTacToe.ts":
/*!************************************************!*\
  !*** ./resources/assets/ts/Views/TicTacToe.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var TicTacToe = (function () {\n        function TicTacToe(canvas) {\n            this.canvas = canvas;\n        }\n        TicTacToe.prototype.drawBoard = function () {\n            var ctx = this.canvas.getContext(\"2d\");\n            ctx.moveTo(0, 100);\n            ctx.lineTo(300, 100);\n            ctx.moveTo(0, 200);\n            ctx.lineTo(300, 200);\n            // ctx.moveTo(0,300)\n            // ctx.lineTo(300,300)\n            ctx.moveTo(100, 0);\n            ctx.lineTo(100, 300);\n            ctx.moveTo(200, 0);\n            ctx.lineTo(200, 300);\n            // ctx.moveTo(300,0)\n            // ctx.lineTo(300,300)\n            ctx.stroke();\n            return this;\n        };\n        return TicTacToe;\n    }());\n    exports.TicTacToe = TicTacToe;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Views/TicTacToe.ts?");

/***/ }),

/***/ "./resources/assets/ts/main.ts":
/*!*************************************!*\
  !*** ./resources/assets/ts/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Views/TicTacToe */ \"./resources/assets/ts/Views/TicTacToe.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, TicTacToe_1) {\n    \"use strict\";\n    exports.__esModule = true;\n    window.addEventListener(\"DOMContentLoaded\", function () {\n        var canvas = document.querySelector(\"#game-canvas\");\n        var ticTacToe = new TicTacToe_1.TicTacToe(canvas);\n        ticTacToe.drawBoard();\n    });\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/main.ts?");

/***/ })

/******/ });