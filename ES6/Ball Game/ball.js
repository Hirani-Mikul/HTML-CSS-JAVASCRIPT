function Ball() {
  this.x = canvas.width / 2;
  this.y = canvas.height * 0.9;
  this.size = 8;
  this.dx = 3;
  this.dy = 5;
  this.dead = false;
}
Ball.prototype = {
  update: function () {
    this.x += this.dx;
    this.y += this.dy;
  },
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  },
  checkEdges: function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.dx *= -1;
    }
    if (this.y - this.size < 0) {
      this.dy *= -1;
    } else if (this.y + this.size > canvas.height + 100) {
      this.dy *= -1;
      this.dead = true;
    }
  },
  collision: function (other) {
    return (
      this.x + this.size + this.dx > other.x - other.width / 2 &&
      this.x - this.size + this.dx < other.x + other.width / 2 &&
      this.y + this.size + this.dy > other.y - other.height / 2 &&
      this.y - this.size + this.dy < other.y + other.height / 2
    );
  },
};
