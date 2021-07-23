/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack is working\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n// document.getEventListener(\"DOMContentLoaded\", () => {\n//     const canvas = document.getElementById(\"game-canvas\");\n//     const ctx = canvas.getContext(\"2d\");\n//     // construct a GameView and call start on it\n// });\n\nwindow.MovingObject = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// base class for anything that moves\n// move(), draw(ctx), isCollidedWith(otherMovingObject)\n\n//  example options object:\n// {\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// };\n\nfunction MovingObject(optionsObj) {\n    // 2d velocity and position\n    this.pos = optionsObj.pos;\n    this.vel = optionsObj.vel;\n    this.radius = optionsObj.radius;\n    this.color = optionsObj.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    // draw a circle with radius at pos\n    // fill circle with color\n}\n\nMovingObject.prototype.move = function() {\n    // call Game#wrap() on position\n    // increment pos by vel\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    // two circles collide when the distance between their center points\n    // is less than the sum of their radii\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n    // call Game#remove on this and otherObject\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;