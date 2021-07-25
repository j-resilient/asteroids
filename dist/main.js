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

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n// should inherit from MovingObject\nfunction Asteroid(pos, currentGame) {\n    MovingObject.call(this, { \n        pos: pos, \n        vel: Util.randomVec(2), \n        radius: 20, \n        color: \"#a9a9a9\",\n        game: currentGame\n    });\n}\nUtil.inherits(Asteroid, MovingObject);\n\n// overwrite MovingObject's method\nAsteroid.prototype.collideWith = function(otherObject) {\n    if (otherObject instanceof Ship) { \n        otherObject.relocate(); \n    } else if (otherObject instanceof Bullet) {\n        this.game.remove(otherObject);\n        this.game.remove(this);\n    }\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n// Subclass of MovingObject\nfunction Bullet(dirX, dirY, x, y, game) {\n    MovingObject.call(this, {\n        vel: this.velocity(dirX, dirY),\n        pos: [x, y],\n        game: game,\n        color: \"#66FF00\",\n        radius: 5\n    });\n}\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.velocity = function(dirX, dirY) {\n    let velocity = [dirX, dirY];\n    if (dirX > 0) { velocity[0] = (dirX + 1) }\n    if (dirX < 0) { velocity[0] = (dirX - 1) }\n    if (dirY > 0) { velocity[1] = (dirY + 1) }\n    if (dirY < 0) { velocity[1] = (dirY - 1) }\n    return velocity;\n}\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack://asteroids/./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module) => {

eval("// Holds all of the moving objects and the logic for moving them\nfunction Game() {\n    this.dim_x = 1000;\n    this.dim_y = 600;\n    this.num_asteroids = 4;\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship(this, this.randomPosition());\n    this.bullets = [];\n}\n\nGame.prototype.add = function(obj) {\n    if (obj instanceof Asteroid) { this.asteroids.push(obj) }\n    if (obj instanceof Bullet) { this.bullets.push(obj) }\n}\n\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < this.num_asteroids; i++) {\n        this.add(new Asteroid(this.randomPosition(), this));\n    }\n}\n\nGame.prototype.randomPosition = function() {\n    return [Math.round(Math.random() * 1000), Math.round(Math.random() * 600)];\n}\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, this.dim_x, this.dim_y);\n    this.allObjects().forEach(a => a.draw(ctx));\n}\nGame.prototype.moveObjects = function() {\n    this.allObjects().forEach(a => a.move());\n}\nGame.prototype.wrap = function(pos) {\n    // returns a \"wrapped position\"\n    if (pos[0] > this.dim_x) {\n        pos[0] = 0;\n    } else if (pos[0] < 0) {\n        pos[0] = this.dim_x;\n    }\n\n    if (pos[1] > this.dim_y) {\n        pos[1] = 0;\n    } else if (pos[1] < 0) {\n        pos[1] = this.dim_y;\n    }\n    return pos;\n}\nGame.prototype.checkCollisions = function() {\n    const otherObjs = [].concat(this.bullets, this.ship);\n    for (let a = 0; a < this.asteroids.length; a++) {\n        for (let o = 0; o < otherObjs.length; o++) {\n            if (this.asteroids[a].isCollidedWith(otherObjs[o])) {\n                this.asteroids[a].collideWith(otherObjs[o]);\n            }\n        }\n    }\n}\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(obj) {\n    if (obj instanceof Asteroid) {\n        let index = this.asteroids.indexOf(obj);\n        this.asteroids.splice(index, 1);\n    } else if (obj instanceof Bullet) {\n        let index = this.bullets.indexOf(obj);\n        this.bullets.splice(index, 1);\n    }\n}\n\nGame.prototype.allObjects = function() {\n    return this.asteroids.concat(this.bullets, this.ship);\n}\n\nGame.prototype.isOutOfBounds = function(pos) {\n    // returns true if position is off screen\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module) => {

eval("// keeps track of the canvas context, the game, and the ship\n// sets the interval to animate the game\nfunction GameView(ctx) {\n    this.game = new Game();\n    this.ctx = ctx;\n}\nGameView.prototype.start = function() {\n    // call bindKeyHandlers()\n    this.bindKeyHandlers();\n    setInterval(() => {\n        this.game.step();\n        this.game.draw(this.ctx);\n    }, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function() {\n    // bind keys to Ship.power()\n    key('s', () => { this.game.ship.power([0, 1]) });\n    key('w', () => { this.game.ship.power([0, -1]) });\n    key('a', () => { this.game.ship.power([1, 0]) });\n    key('d', () => { this.game.ship.power([-1, 0]) });\n    key('space', () => { this.game.ship.fireBullet() });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://asteroids/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack is working\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", (e) => {\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    const newView = new GameView(ctx);\n    newView.start();\n});\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\nwindow.Ship = Ship;\nwindow.Bullet = Bullet;\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// base class for anything that moves\n// move(), draw(ctx), isCollidedWith(otherMovingObject)\n\n//  example options object:\n// {\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// };\n\nfunction MovingObject(optionsObj) {\n    // 2d velocity and position\n    this.pos = optionsObj.pos;\n    this.vel = optionsObj.vel;\n    this.radius = optionsObj.radius;\n    this.color = optionsObj.color;\n    this.game = optionsObj.game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n    this.pos = this.game.wrap(this.pos);\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    // check if object is out of bounds and wrap if wrappable || remove\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    // two circles collide when the distance between their center points\n    // is less than the sum of their radii\n    let distance = Math.sqrt(((this.pos[0] - otherObject.pos[0]) ** 2) + ((this.pos[1] - otherObject.pos[1]) ** 2));\n    let sum = this.radius + otherObject.radius;\n    return (distance < sum ? true : false);\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n    // overwritten in subclasses\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Ship(currentGame, pos) {\n    // define ship color, radius, and vel\n    MovingObject.call(this, {\n        pos: pos,\n        vel: [0, 0],\n        radius: 10,\n        color: \"#090088\",\n        game: currentGame\n    });\n}\n// ship should inherit from MovingObject\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n    this.pos = this.game.randomPosition();\n    this.vel = [0,0];\n}\n\nShip.prototype.power = function(impulse) {\n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n}\n\nShip.prototype.fireBullet = function() {\n    if (!(this.vel[0] === 0 && this.vel[1] === 0)) {\n        let bullet = new Bullet(this.vel[0], this.vel[1], this.pos[0], this.pos[1], this.game);\n        this.game.add(bullet);\n    } \n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack://asteroids/./src/ship.js?");

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