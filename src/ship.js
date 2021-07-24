const MovingObject = require("./moving_object");
const Util = require("./util");

function Ship(currentGame, pos) {
    // define ship color, radius, and vel
    MovingObject.call(this, {
        pos: pos,
        vel: 0,
        radius: 5,
        color: "#66FF00",
        game: currentGame
    });
}
// ship should inherit from MovingObject
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
    // reset ship's position to random location
    // reset ship's velocity to the zero vector
}

Ship.prototype.power = function(impulse) {
    // add impulse to ship's current velocity
}

Ship.prototype.fireBullet = function() {
    // create a new bullet(this.vel)
    // add bullet to game's array of bullets
}

module.exports = Ship;