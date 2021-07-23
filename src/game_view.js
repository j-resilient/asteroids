// keeps track of the canvas context, the game, and the ship
// sets the interval to animate the game
function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}
GameView.prototype.start = function() {
    setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20);
}

module.exports = GameView;