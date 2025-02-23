function Boundry(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}
Boundry.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'white';
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  },
  isInside(mx, my) {
    return (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h);
  },
  overlaps(x, y, w, h) {
    return (x + w > this.x && x < this.x + this.w && y + h > this.y && y < this.y + this.h);
  }
};


function Mark(x, y) {
  this.x = x;
  this.y = y;
}
Mark.prototype = {
  display: function () {

    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
    ctx.fill();
  },
};