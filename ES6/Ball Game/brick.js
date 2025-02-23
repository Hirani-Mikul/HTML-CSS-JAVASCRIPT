function Brick(position) {
  this.x = position.x;
  this.y = position.y;
  this.width = 80;
  this.height = 15;
  this.hit = false;
}
Brick.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();
  },
};
