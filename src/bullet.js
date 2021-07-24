const MovingObject = require("./moving_object");

// Subclass of MovingObject
function Bullet(vel, pos, game) {
    MovingObject.call({
        vel: vel,
        pos: pos,
        game: game,
        color: "#66FF00",
        radius: 5
    });
    // #66FF00

}

module.export = Bullet;