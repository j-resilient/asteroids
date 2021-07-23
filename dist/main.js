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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n// should inherit from MovingObject\nfunction Asteroid(pos) {\n    MovingObject.call(this, { \n        pos: pos, \n        vel: Util.randomVec(2), \n        radius: 5, \n        color: \"#a9a9a9\" \n    });\n}\n\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module) => {

eval("// Holds all of the moving objects and the logic for moving them\nfunction Game() {\n    this.dim_x = 1000;\n    this.dim_y = 600;\n    this.num_asteroids = 4;\n    this.asteroids = [];\n    this.addAsteroids();\n}\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < this.num_asteroids; i++) {\n        this.asteroids.push(new Asteroid(this.randomPosition()));\n    }\n}\nGame.prototype.randomPosition = function() {\n    return [Math.round(Math.random() * 1000), Math.round(Math.random() * 600)];\n}\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, this.dim_x, this.dim_y);\n    this.asteroids.forEach(a => a.draw(ctx));\n}\nGame.prototype.moveObjects = function() {\n    this.asteroids.forEach(a => a.move());\n}\nGame.prototype.wrap = function(pos) {\n    // returns a \"wrapped position\"\n    // if the asteroid goes off the screen, make it reappear on the other side\n}\nGame.prototype.checkCollisions = function() {\n    // enumerate asteroids and check for collisions\n    // in the event of a collision, allert \"COLLISION\"\n    // (do not check if an asteroid collides with itself)\n}\n\nGame.prototype.step = function() {\n    // call Game#moveObjects\n    // Game#checkCollisions\n}\n\nGame.prototype.remove = function(asteroid) {\n    // remove asteroid\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack is working\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", (e) => {\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    // let x = new Game();\n    // x.draw(ctx);\n    // setInterval(() => {\n    //     x.moveObjects();\n    //     x.draw(ctx);\n\n    // }, 100);\n    // construct a GameView and call start on it\n});\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// base class for anything that moves\n// move(), draw(ctx), isCollidedWith(otherMovingObject)\n\n//  example options object:\n// {\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// };\n\nfunction MovingObject(optionsObj) {\n    // 2d velocity and position\n    this.pos = optionsObj.pos;\n    this.vel = optionsObj.vel;\n    this.radius = optionsObj.radius;\n    this.color = optionsObj.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n    // call Game#wrap() on position\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    // two circles collide when the distance between their center points\n    // is less than the sum of their radii\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n    // call Game#remove on this and otherObject\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childclass, parentClass) {\n        // code to make the childclass inherit from the parent class\n        // then export a JS object containing it\n        childclass.prototype = Object.create(parentClass.prototype);\n        childclass.prototype.constructor = childclass;\n    },\n    // next two methods provided by appacademy for the project\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\nmodule.exports = Util;\n\n//# sourceURL=webpack://asteroids/./src/util.js?");

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