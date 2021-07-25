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
    if (!(this.vel[0] === 0 && this.vel[1] === 0)) {
        let bullet = new Bullet(this.vel[0], this.vel[1], this.pos[0], this.pos[1], this.game);
        this.game.add(bullet);
    } 
}

module.exports = Ship;