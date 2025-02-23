function Boundry(x, y, ex, ey) {
  this.x = x;
  this.y = y;
  this.ex = ex;
  this.ey = ey;
}
Boundry.prototype = {
  display: function () {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.ex, this.ey);
    ctx.stroke();
  }
};
