const MovingObject = require("./moving_object");
const Util = require("./util");

// Subclass of MovingObject
function Bullet(dirX, dirY, x, y, game) {
    MovingObject.call(this, {
        vel: this.velocity(dirX, dirY),
        pos: [x, y],
        game: game,
        color: "#66FF00",
        radius: 5
    });
    this.isWrappable = false;
}
Util.inherits(Bullet, MovingObject);

Bullet.prototype.velocity = function(dirX, dirY) {
    let velocity = [dirX, dirY];
    if (dirX > 0) { velocity[0] = (dirX + 1) }
    if (dirX < 0) { velocity[0] = (dirX - 1) }
    if (dirY > 0) { velocity[1] = (dirY + 1) }
    if (dirY < 0) { velocity[1] = (dirY - 1) }
    return velocity;
}

module.exports = Bullet;