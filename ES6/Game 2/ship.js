const shipImg = document.getElementById("ship");

function Ship() {
  this.pos = new Vector(width / 2, height / 2);
  this.vel = new Vector();
  this.acc = new Vector();
  this.angle = 0;
  this.vAngle = 0.08;
  this.width = 100;
  this.height = 50;
  this.velLimit = 6;
  this.damping = 0.995;
}
Ship.prototype = {
  thrust: function () {
    let angle = this.angle;
    let force = new Vector(Math.cos(angle), Math.sin(angle));
    this.applyForce(force);
  },
  applyForce: function (force) {
    let f = force.clone();
    this.acc.add(f);
  },
  update: function () {
    this.vel.add(this.acc);
    this.vel.limit(this.velLimit);
    this.vel.multiply(this.damping);
    this.pos.add(this.vel);
    this.acc.multiply(0);
  },
  turn: function (dir) {
    this.angle += this.vAngle * dir;
  },
  display: function () {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.angle + Math.PI / 2);
    ctx.drawImage(
      shipImg,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    ctx.restore();
  },
  checkEdges: function () {
    if (this.pos.x - this.width / 2 > width) {
      this.pos.x = 0 - this.width / 2;
    } else if (this.pos.x + this.width / 2 < 0) {
      this.pos.x = width + this.width / 2;
    }
    if (this.pos.y - this.height / 2 > height) {
      this.pos.y = 0 - this.height / 2;
    } else if (this.pos.y + this.height / 2 < 0) {
      this.pos.y = height + this.height / 2;
    }
  },
};
