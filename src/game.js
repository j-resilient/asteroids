// Holds all of the moving objects and the logic for moving them
function Game() {
    this.dim_x = 1000;
    this.dim_y = 600;
    this.num_asteroids = 4;
    this.asteroids = [];
    this.addAsteroids();
    // build a ship with a random position
    // create array of bullets
}

Game.prototype.addAsteroids = function() {
    // rewrite to add bullets or asteroids
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
    // iterate through and draw allObjects() instead of asteroids
}
Game.prototype.moveObjects = function() {
    this.asteroids.forEach(a => a.move());
    // iterate through and move all() objects instead of asteroids
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
    // in the event of a collision, alert "COLLISION"
    // (do not check if an asteroid collides with itself)
    for (let outer = 0; outer < this.asteroids.length; outer++) {
        for (let inner = outer + 1; inner < this.asteroids.length; inner++) {
            if (this.asteroids[outer].isCollidedWith(this.asteroids[inner])) {
                alert("Collision!");
                this.asteroids[outer].collideWith(this.asteroids[inner]);
                this.num_asteroids -= 1;
                break;
            }
        }
    }
    // iterate through allObjects() instead of asteroids
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    // rewrite to remove any kind of object
    let index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
}

Game.prototype.allObjects = function() {
    // return an array of asteroids + the ship
    // rewrite to include bullets
}

Game.prototype.isOutOfBounds = function(pos) {
    // returns true if position is off screen
}

module.exports = Game;
