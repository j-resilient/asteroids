// Holds all of the moving objects and the logic for moving them
function Game() {
    this.dim_x = 1000;
    this.dim_y = 600;
    this.num_asteroids = 4;
    this.asteroids = [];
    this.addAsteroids();
}
Game.prototype.addAsteroids = function() {
    for (let i = 0; i < this.num_asteroids; i++) {
        this.asteroids.push(new Asteroid(this.randomPosition(), this));
    }
}
Game.prototype.randomPosition = function() {
    return [Math.round(Math.random() * 1000), Math.round(Math.random() * 600)];
}
Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    this.asteroids.forEach(a => a.draw(ctx));
}
Game.prototype.moveObjects = function() {
    this.asteroids.forEach(a => a.move());
}
Game.prototype.wrap = function(pos) {
    // returns a "wrapped position"
    // if the asteroid goes off the screen, make it reappear on the other side
    if (pos[0] > this.dim_x) {
        pos[0] = 0;
    } else if (pos[0] < 0) {
        pos[0] = this.dim_x;
    }

    if (pos[1] > this.dim_y) {
        pos[1] = 0;
    } else if (pos[1] < 0) {
        pos[1] = this.dim_y;
    }
    return pos;
}
Game.prototype.checkCollisions = function() {
    // enumerate asteroids and check for collisions
    // in the event of a collision, allert "COLLISION"
    // (do not check if an asteroid collides with itself)
}

Game.prototype.step = function() {
    // call Game#moveObjects
    // Game#checkCollisions
}

Game.prototype.remove = function(asteroid) {
    // remove asteroid
}

module.exports = Game;
