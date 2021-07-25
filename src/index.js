const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

document.addEventListener("DOMContentLoaded", (e) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    new GameView(ctx).start();
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;
window.Bullet = Bullet;