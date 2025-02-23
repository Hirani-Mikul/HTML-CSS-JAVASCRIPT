function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}
Vector.prototype = {
  negative: function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  },
  add: function (v) {
    if (v instanceof Vector) {
      this.x += v.x;
      this.y += v.y;
    } else {
      this.x += v;
      this.y += v;
    }
    return this;
  },
  subtract: function (v) {
    if (v instanceof Vector) {
      this.x -= v.x;
      this.y -= v.y;
    } else {
      this.x -= v;
      this.y -= v;
    }
    return this;
  },
  multiply: function (v) {
    if (v instanceof Vector) {
      this.x *= v.x;
      this.y *= v.y;
    } else {
      this.x *= v;
      this.y *= v;
    }
    return this;
  },
  divide: function (v) {
    if (v instanceof Vector) {
      if (v.x != 0) this.x /= v.x;
      if (v.y != 0) this.y /= v.y;
    } else {
      if (v != 0) {
        this.x /= v;
        this.y /= v;
      }
    }
    return this;
  },
  dot: function (v) {
    return (this.x *= v.x) + (this.y *= v.y);
  },
  length: function () {
    return Math.sqrt(this.dot(this));
  },
  normalize: function () {
    return this.divide(this.length());
  },
  min: function () {
    return Math.min(this.x, this.y);
  },
  max: function () {
    return Math.max(this.x, this.y);
  },
  set: function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
  clone: function () {
    return new Vector(this.x, this.y);
  },
};

// Static Methods

Vector.negative = function (v) {
  return new Vector(-v.x, -v.y);
};
Vector.add = function (a, b) {
  if (b instanceof Vector) return new Vector(a.x + b.x, a.y + b.y);
  else return new Vector(a.x + b, a.y + b);
};
Vector.subtract = function (a, b) {
  if (b instanceof Vector) return new Vector(a.x - b.x, a.y - b.y);
  else return new Vector(a.x - b, a.y - b);
};
Vector.multiply = function (a, b) {
  if (b instanceof Vector) return new Vector(a.x * b.x, a.y * b.y);
  else return new Vector(a.x * b, a.y * b);
};
Vector.divide = function (a, b) {
  if (b instanceof Vector) return new Vector(a.x / b.x, a.y / b.y);
  else return new Vector(a.x / b, a.y / b);
};
Vector.dot = function (a, b) {
  return a.x * b.x + a.y * b.y;
};
Vector.cross = function (a, b) {
  return a.x * b.y - a.y * b.x;
};
