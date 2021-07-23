const Util = require("./util");
const MovingObject = require("./moving_object");

// should inherit from MovingObject
function Asteroid(pos, currentGame) {
    MovingObject.call(this, { 
        pos: pos, 
        vel: Util.randomVec(2), 
        radius: 5, 
        color: "#a9a9a9",
        game: currentGame
    });
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;