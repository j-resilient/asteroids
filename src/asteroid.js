const Util = require("./util");
const MovingObject = require("./moving_object");

// should inherit from MovingObject
function Asteroid(pos, currentGame) {
    MovingObject.call(this, { 
        pos: pos, 
        vel: Util.randomVec(2), 
        radius: 20, 
        color: "#a9a9a9",
        game: currentGame
    });
}
Util.inherits(Asteroid, MovingObject);

// overwrite MovingObject's method
Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Ship) { 
        otherObject.relocate(); 
    }
}

module.exports = Asteroid;