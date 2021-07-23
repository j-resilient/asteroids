const Util = require("./util");

// should inherit from MovingObject
function Asteroid() {
    MovingObject.call(optionsObj);
    // pick default color and radius; set them as properties
    // specify the pos and get a random vector from the Util object
    // pass it all in to the MovingObject constructor
}

Util.inherits(Asteroid, MovingObject);
