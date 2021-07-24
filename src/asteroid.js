const Util = require("./util");
const MovingObject = require("./moving_object");

// should inherit from MovingObject
function Asteroid(pos, currentGame) {
    MovingObject.call(this, { 
        pos: pos, 
        vel: Util.randomVec(2), 
        radius: 10, 
        color: "#a9a9a9",
        game: currentGame
    });
}

// overwrite MovingObject's method
Asteroid.prototype.collideWith(otherObject) {
    // if otherObject is ship, call ship.relocate()
    // else delete both asteroids?? I think??
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;