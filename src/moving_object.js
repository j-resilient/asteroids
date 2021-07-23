// base class for anything that moves
// move(), draw(ctx), isCollidedWith(otherMovingObject)

//  example options object:
// {
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// };

class MovingObject {
    constructor(optionsObj) {
        // 2d velocity and position
        this.pos = optionsObj.pos;
        this.vel = optionsObj.vel;
        this.radius = optionsObj.radius;
        this.color = optionsObj.color;
    }
}

module.exports = MovingObject;