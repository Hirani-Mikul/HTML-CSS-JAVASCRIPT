function Planet(x, y, m) {
  this.pos = new Vector(x, y);
  this.vel = new Vector(0, 0);
  this.acc = new Vector(0, 0);
  this.mass = m;
  this.r = 10;
  this.col = [random(255), random(255), random(255)];
}
Planet.prototype = {
  update: function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  },
  applyForce: function (f) {
    let force = Vector.divide(f, this.mass);
    this.acc.add(force);
  },
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = `rgb(${this.col[0]}, ${this.col[1]}, ${this.col[2]})`;
    ctx.arc(this.pos.x, this.pos.y, this.mass * this.r, 0, Math.PI * 2);
    ctx.fill();
  },
};
