console.log("webpack is working");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

document.addEventListener("DOMContentLoaded", (e) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    // let x = new Game();
    // x.draw(ctx);
    // setInterval(() => {
    //     x.moveObjects();
    //     x.draw(ctx);

    // }, 100);
    // construct a GameView and call start on it
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;