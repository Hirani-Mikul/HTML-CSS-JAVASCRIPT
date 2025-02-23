var roidBigImg = new Image();
roidBigImg.src = "Images/asteroidBig.png";
function Asteroid(x, y) {
  this.pos = new Vector(x, y);
  this.vel = Vector.random2D();
  this.angle = 0;
  this.aVel = getRandomNum(-0.01, 0.01);
  this.width = 80;
  this.height = 80;
  this.isHit = false;
}
Asteroid.prototype = {
  display: function () {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.angle);
    ctx.drawImage(roidBigImg, -this.width / 2, -this.height / 2);
    this.angle += this.aVel;
    ctx.restore();
  },
  update: function () {
    this.vel.multiply(2);
    this.vel.limit(2);
    this.pos.add(this.vel);
  },
  checkEdges: function () {
    let ans = Math.floor(getRandomNum(0, 2));
    if (
      this.pos.x - this.width / 2 > canvas.width ||
      this.pos.x + this.width / 2 < 0
    ) {
      this.vel = Vector.random2D();
      if (ans === 0) {
        this.pos.x = 0 - this.width / 2;
        this.pos.y = getRandomNum(0, canvas.height);
      } else {
        this.pos.x = canvas.width + this.width / 2;
        this.pos.y = getRandomNum(0, canvas.height);
      }
    } else if (
      this.pos.y - this.height / 2 > canvas.height ||
      this.pos.y + this.height / 2 < 0
    ) {
      this.vel = Vector.random2D();

      if (ans === 0) {
        this.pos.y = 0 - this.height / 2;
        this.pos.x = getRandomNum(0, canvas.width);
      } else {
        this.pos.y = canvas.height + this.height / 2;
        this.pos.x = getRandomNum(0, canvas.width);
      }
    }
  },
};
