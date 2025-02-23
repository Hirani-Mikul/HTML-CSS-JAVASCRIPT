export default function Star(x, y) {
  this.x = x;
  this.y = y;
  this.size = 15;
  this.speed = 1;
  this.isHit = false;
}
Star.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = "purple";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  },
  shiftDown: function () {
    this.speed *= -1;
    this.y += this.size;
  },
  move: function () {
    this.x -= this.speed;
    if (this.x < this.size / 2 || this.x > width - this.size / 2) {
      // this.speed *= -1;
      // this.y += this.size * 3;
    }
  },
};
