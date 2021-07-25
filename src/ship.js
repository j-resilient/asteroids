const MovingObject = require("./moving_object");
const Util = require("./util");

function Ship(currentGame, pos) {
    // define ship color, radius, and vel
    MovingObject.call(this, {
        pos: pos,
        vel: [0, 0],
        radius: 10,
        color: "#090088",
        game: currentGame
    });
}
// ship should inherit from MovingObject
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
}

Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function() {
    let bullet = new Bullet(this.vel, this.pos, this.game);
    this.game.add(bullet);
}

module.exports = Ship;