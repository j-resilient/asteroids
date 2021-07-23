const Util = require("./util");
const MovingObject = require("./moving_object");

// should inherit from MovingObject
function Asteroid(pos) {
    MovingObject.call(this, { 
        pos: pos, 
        vel: Util.randomVec(this.radius * 2), 
        radius: 5, 
        color: "#a9a9a9" 
    });
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;