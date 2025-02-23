function Paddle() {
  this.x = canvas.width / 2;
  this.y = canvas.height * 0.94;
  this.width = 100;
  this.height = 10;
  this.speed = 7;
}
Paddle.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
  },
  update: function (dir) {
    this.x += this.speed * dir;
  },
  checkEdges: function () {
    if (this.x + this.width / 2 > canvas.width) {
      this.x = canvas.width - this.width / 2;
    } else if (this.x - this.width / 2 < 0) {
      this.x = this.width / 2;
    }
  },
};
