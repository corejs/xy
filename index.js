module.exports = function (x, y) {
  return new Xy(x, y);
};

var Xy = function (x, y) {
  var xy = {
    x: x || 0,
    y: y || 0,
    last: {}
  };

  this.x = function () {
    return xy.x;
  };

  this.y = function () {
    return xy.y;
  };

  this.move = movements(xy);
};

var movements = function (xy) {
  return {
    to: function (x, y) {
      move(xy, x, y);
    },
    back: function () {
      moveBack(xy);
    },
    up: function (times) {
      times = times || 1;
      move(xy, xy.x, xy.y - times);
    },
    down: function (times) {
      times = times || 1;
      move(xy, xy.x, xy.y + times);
    },
    left: function (times) {
      times = times || 1;
      move(xy, xy.x - times, xy.y); 
    },
    right: function (times) {
      times = times || 1;
      move(xy, xy.x + times, xy.y);
    }
  };
};

var move = function (xy, x, y) {
  xy.last.x = xy.x;
  xy.last.y = xy.y;
  xy.x = x;
  xy.y = y;
};

var moveBack = function (xy) {
    xy.x = xy.last.x; 
    xy.y = xy.last.y;
    xy.last = {};
};
