const Util = {
    inherits(childclass, parentClass) {
        // code to make the childclass inherit from the parent class
        // then export a JS object containing it
        childclass.prototype = Object.create(parentClass.prototype);
        childclass.prototype.constructor = childclass;
    },
    // next two methods provided by appacademy for the project
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
};
module.exports = Util;