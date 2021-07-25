// Holds all of the moving objects and the logic for moving them
function Game() {
    this.dim_x = 1000;
    this.dim_y = 600;
    this.num_asteroids = 4;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship(this, this.randomPosition());
    this.bullets = [];
}

Game.prototype.add = function(obj) {
    if (obj instanceof Asteroid) { this.asteroids.push(obj) }
    if (obj instanceof Bullet) { this.bullets.push(obj) }
}

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < this.num_asteroids; i++) {
        this.add(new Asteroid(this.randomPosition(), this));
    }
}

Game.prototype.randomPosition = function() {
    return [Math.round(Math.random() * 1000), Math.round(Math.random() * 600)];
}
Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    this.allObjects().forEach(a => a.draw(ctx));
}
Game.prototype.moveObjects = function() {
    this.allObjects().forEach(a => a.move());
}
Game.prototype.wrap = function(pos) {
    // returns a "wrapped position"
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
    const otherObjs = [].concat(this.bullets, this.ship);
    for (let a = 0; a < this.asteroids.length; a++) {
        for (let o = 0; o < otherObjs.length; o++) {
            if (this.asteroids[a].isCollidedWith(otherObjs[o])) {
                this.asteroids[a].collideWith(otherObjs[o]);
            }
        }
    }
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroid) {
        let index = this.asteroids.indexOf(obj);
        this.asteroids.splice(index, 1);
    } else if (obj instanceof Bullet) {
        let index = this.bullets.indexOf(obj);
        this.bullets.splice(index, 1);
    }
}

Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.bullets, this.ship);
}

Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] > this.dim_x || pos[1] > this.dim_y || pos.some(p => p < 0)) {
        return true;
    }
    return false;
}

module.exports = Game;
