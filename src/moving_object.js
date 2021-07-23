// base class for anything that moves
// move(), draw(ctx), isCollidedWith(otherMovingObject)

//  example options object:
// {
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// };

function MovingObject(optionsObj) {
    // 2d velocity and position
    this.pos = optionsObj.pos;
    this.vel = optionsObj.vel;
    this.radius = optionsObj.radius;
    this.color = optionsObj.color;
}

MovingObject.prototype.draw = function (ctx) {
    // draw a circle with radius at pos
    // fill circle with color
}

MovingObject.prototype.move = function() {
    // call Game#wrap() on position
    // increment pos by vel
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    // two circles collide when the distance between their center points
    // is less than the sum of their radii
}

MovingObject.prototype.collideWith = function(otherObject) {
    // call Game#remove on this and otherObject
}

module.exports = MovingObject;