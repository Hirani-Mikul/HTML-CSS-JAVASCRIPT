export default function Ship() {
  this.x = width / 2;
  this.y = height - 15;
  this.width = 20;
  this.height = 30;
  this.speed = 7;
}
Ship.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();
  },
  update: function () {
    this.x += 10;
  },
  move: function (dir) {
    this.x += dir * this.speed;
  },
  checkEdges: function () {
    if (this.x + this.width / 2 > width) {
      this.x = width - this.width / 2;
    } else if (this.x - this.width / 2 < 0) {
      this.x = 0 + this.width / 2;
    }
  },
};
