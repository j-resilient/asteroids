// keeps track of the canvas context, the game, and the ship
// sets the interval to animate the game
function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}
GameView.prototype.start = function() {
    // call bindKeyHandlers()
    this.bindKeyHandlers();
    setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20);
}

GameView.prototype.bindKeyHandlers = function() {
    // bind keys to Ship.power()
    key('s', () => { this.game.ship.power([0, 1]) });
    key('w', () => { this.game.ship.power([0, -1]) });
    key('a', () => { this.game.ship.power([1, 0]) });
    key('d', () => { this.game.ship.power([-1, 0]) });
    // bind key to Ship.fireBullet()
}

module.exports = GameView;