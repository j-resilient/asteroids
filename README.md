# To play
- "a" moves the ship right
- "d" moves the ship left
- "s" moves the ship down
- "w" moves the ship up
- the space bar fires
# A quick overview
- src/utils.js contains utility code like vector math.
- src/moving_object.js is the base class for anything that moves.
- src/asteroid.js containst the actual asteroid stuff. Inherits from MovingObject.
- src/bullet.js bullet class, inherits from MovingObject.
- src/ship.js ship class, inherits from MovingObject.
- src/game.js actually runs the games and keeps track of all the objects in it.
- src/game_view.js stores the game and canvas and listeners and timers, basically the interface.
# Notes
- We weren't allowed to use ES6 syntax for this.