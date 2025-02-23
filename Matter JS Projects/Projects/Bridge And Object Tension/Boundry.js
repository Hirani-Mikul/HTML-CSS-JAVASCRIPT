function Boundry(x, y, w, h) {
  this.option = {
    isStatic: true,
  };
  this.body = Bodies.rectangle(x, y, w, h, this.option);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
}
Boundry.prototype = {
  display: function () {
    let pos = this.body.position;
    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.fillRect(pos.x - this.w / 2, pos.y - this.h / 2, this.w, this.h);
    ctx.fill();
  },
};
