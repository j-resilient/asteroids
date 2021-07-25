// base class for anything that moves
// move(), draw(ctx), isCollidedWith(otherMovingObject)

function MovingObject(optionsObj) {
    // 2d velocity and position
    this.pos = optionsObj.pos;
    this.vel = optionsObj.vel;
    this.radius = optionsObj.radius;
    this.color = optionsObj.color;
    this.game = optionsObj.game;
    this.isWrappable = true;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
}

MovingObject.prototype.move = function() {
    if (this.game.isOutOfBounds(this.pos)) {
        if (this.isWrappable) { 
            this.pos = this.game.wrap(this.pos); 
        } else {
            this.game.remove(this);
        }
    }
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    // two circles collide when the distance between their center points
    // is less than the sum of their radii
    let distance = Math.sqrt(((this.pos[0] - otherObject.pos[0]) ** 2) + ((this.pos[1] - otherObject.pos[1]) ** 2));
    let sum = this.radius + otherObject.radius;
    return (distance < sum ? true : false);
}

MovingObject.prototype.collideWith = function(otherObject) {
    // overwritten in subclasses
}

module.exports = MovingObject;