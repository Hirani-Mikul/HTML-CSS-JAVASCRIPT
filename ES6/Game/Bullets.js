function Bullet(position, shipAngle) {
  this.pos = new Vector(position.x, position.y);
  this.vel = new Vector();
  this.acc = new Vector();
  this.lifeSpan = 100;
  this.width = 15;
  this.height = 4;
  this.angle = shipAngle;
  this.shot = false;
  this.speedLimit = 15;
  this.hasHit = false;
}
Bullet.prototype = {
  display: function () {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 200, 0)";
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.fill();
    ctx.restore();
  },
  update: function () {
    this.vel.add(this.acc);
    this.vel.limit(this.speedLimit);
    this.pos.add(this.vel);
  },
  applyForce: function (force) {
    let f = force.clone();
    this.acc.add(f);
  },
  shoot: function () {
    let angle = this.angle;
    let force = new Vector(Math.cos(angle), Math.sin(angle));
    this.applyForce(force);
  },
  checkEdges: function () {
    if (this.pos.x > canvas.width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = canvas.width;
    }
    if (this.pos.y > canvas.height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = canvas.height;
    }
  },
  hit: function (roid) {
    let roidX = roid.pos.x;
    let roidY = roid.pos.y;
    let roidW = roid.width / 4;
    let roidH = roid.height / 4;
    return (this.pos.x + this.width / 2 > roidX - roidW && this.pos.x - this.width / 2 < roidX + roidW && this.pos.y + this.height / 2 > roidY - roidH && this.pos.y - this.height / 2 < roidY + roidH);
  }
};
