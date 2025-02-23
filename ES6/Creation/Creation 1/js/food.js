function Food() {
  this.position = new Vector(random(width), random(height));
  this.size = 2;
  this.Age = this.size;
}
Food.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  },
  update: function () {
    this.position.x = random(width);
    this.position.y = random(height);
  },
};
