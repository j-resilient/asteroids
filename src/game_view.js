// keeps track of the canvas context, the game, and the ship
// sets the interval to animate the game
function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}
GameView.prototype.start = function() {
    // call bindKeyHandlers()
    setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20);
}

GameView.prototype.bindKeyHandlers = function() {
    // bind keys to Ship.power()
    // bind key to Ship.fireBullet()
}

module.exports = GameView;