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
  sub: function (v) {
    if (v instanceof Vector) {
      this.x -= v.x;
      this.y -= v.y;
    } else {
      this.x -= v;
      this.y -= v;
    }
    return this;
  },
  mult: function (v) {
    if (v instanceof Vector) {
      this.x *= v.x;
      this.y *= v.y;
    } else {
      this.x *= v;
      this.y *= v;
    }
    return this;
  },
  div: function (v) {
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
    const len = this.mag();
    if (len !== 0) this.mult(1 / len);
    return this;
    // return this.div(this.length());
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
  magSq: function () {
    const x = this.x;
    const y = this.y;
    return x * x + y * y;
  },
  limit: function (max) {
    const mSq = this.magSq();
    if (mSq > max * max) {
      this.div(Math.sqrt(mSq)).mult(max);
    }
    return this;
  },
  mag: function () {
    return Math.sqrt(this.magSq());
  },
  heading: function () {
    const h = Math.atan2(this.y, this.x);
    return h;
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
  if (b instanceof Vector) {
    return new Vector(a.x - b.x, a.y - b.y);
  } else {
    return new Vector(a.x - b, a.y - b);
  }
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
Vector.fromAnlge = function (theta, len) {
  if (typeof len === "undefined") len = 1;
  return new Vector(len * Math.cos(theta), len * Math.sin(theta), 0);
};
Vector.random2D = function () {
  return Vector.fromAnlge(Math.random() * Math.PI * 2);
};

// Random number generator
function random(min, max) {
  let rand = Math.random();
  if (typeof min === "undefined") {
    return rand;
  } else if (typeof max === "undefined") {
    if (min instanceof Array) {
      return min[Math.floor(rand * min.length)];
    } else {
      return rand * min;
    }
  } else {
    if (min > max) {
      const tmp = min;
      min = max;
      max = tmp;
    }
    return Math.random() * (max - min) + min;
  }
}

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
}

function mapNum(n, start1, stop1, start2, stop2, withinBounds) {
  const newVal = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newVal;
  }
  if (start2 < stop2) {
    return constrain(newVal, start2, stop2);
  } else {
    return constrain(newVal, stop2, start2);
  }
}
function dist(...args) {
  if (args.length === 4) {
    // 2D
    return Math.hypot(args[2] - args[0], args[3] - args[1]);
  } else if (args.length === 6) {
    // 3D
    return Math.hypot(args[3] - args[0], args[4] - args[1], args[5] - args[2]);
  }
}

let mouseX = 0;
let mouseY = 0;
function mousePos(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}
