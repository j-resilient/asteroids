// Holds all of the moving objects and the logic for moving them
function Game() {
    // define DIM_X, DIM_Y and NUM_ASTEROIDS
    // create empty array asteroids
    // call addAsteroids
}
Game.prototype.addAsteroids = function() {
    // randomly place asteroids
    // store in asteroids array
}
Game.prototype.randomPosition = function() {
    // generate random positions
}
Game.prototype.draw = function(ctx) {
    // call clearRect on ctx and call draw on every asteroid
}
Game.prototype.moveObjects = function() {
    // call move on every asteroid
}
Game.prototype.wrap = function(pos) {
    // returns a "wrapped position"
    // if the asteroid goes off the screen, make it reappear on the other side
}
Game.prototype.checkCollisions = function() {
    // enumerate asteroids and check for collisions
    // in the event of a collision, allert "COLLISION"
    // (do not check if an asteroid collides with itself)
}

Game.prototype.step = function() {
    // call Game#moveObjects
    // Game#checkCollisions
}

Game.prototype.remove = function(asteroid) {
    // remove asteroid
}
