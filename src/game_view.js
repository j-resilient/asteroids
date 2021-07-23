// keeps track of the canvas context, the game, and the ship
// sets the interval to animate the game
function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}
GameView.prototype.start = function() {
    // call setInterval to call Game#moveObjects and Game#draw every 20ms
    setInterval(() => {
        this.game.moveObjects();
        this.game.draw(this.ctx);
    }, 20);
}

module.exports = GameView;