console.log("webpack is working");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

document.addEventListener("DOMContentLoaded", (e) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    let x = new Asteroid([30, 30]);
    x.draw(ctx);
    x.move();
    x.draw(ctx);
    // construct a GameView and call start on it
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;