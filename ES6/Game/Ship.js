const shipImg = document.getElementById("ship");
var thrustImg = new Image();
thrustImg.src = "Images/thrust.png";

function Ship() {
  this.pos = new Vector(canvas.width / 2, canvas.height / 2);
  this.vel = new Vector();
  this.acc = new Vector();
  this.angle = 0;
  this.aVel = 0.08;
  this.velLimit = 6;
  this.width = 100;
  this.height = 50;
  this.damping = 0.995;
  this.thrusting = false;
  this.rightThruster = false;
  this.leftThruster = false;
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
    this.angle += this.aVel * dir;
  },
  displayThrust: function () {
    if (!this.thrusting && !this.rightThruster && !this.leftThruster) return;
    if (this.thrusting) {
      let thrustHeight = getRandomNum(10, 50);
      ctx.drawImage(thrustImg, -8, 20, 20, thrustHeight);
    }
    if (this.rightThruster) {
      let rightThrustHeight = getRandomNum(10, 30);
      ctx.drawImage(thrustImg, 8, 20, 10, rightThrustHeight);
    }
    if (this.leftThruster) {
      let leftThrustHeight = getRandomNum(10, 30);
      ctx.drawImage(thrustImg, -15, 20, 10, leftThrustHeight);
    }
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
    this.displayThrust();
    ctx.restore();
  },
  checkEdges: function () {
    if (this.pos.x - this.width / 2 > canvas.width) {
      this.pos.x = 0 - this.width / 2;
    } else if (this.pos.x + this.width / 2 < 0) {
      this.pos.x = canvas.width + this.width / 2;
    }
    if (this.pos.y - this.height / 2 > canvas.height) {
      this.pos.y = 0 - this.height / 2;
    } else if (this.pos.y + this.height / 2 < 0) {
      this.pos.y = canvas.height + this.height / 2;
    }
  },
};
