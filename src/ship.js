function Ship() {
    // define ship color, radius, and vel
}
// ship should inherit from MovingObject

Ship.prototype.relocate = function() {
    // reset ship's position to random location
    // reset ship's velocity to the zero vector
}

Ship.prototype.power = function(impulse) {
    // add impulse to ship's current velocity
}

Ship.prototype.fireBullet = function() {
    // create a new bullet(this.vel)
    // add bullet to game's array of bullets
}

module.exports = Ship;