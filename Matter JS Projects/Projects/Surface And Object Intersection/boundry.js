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
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 255, 255)";
    ctx.fillRect(
      this.body.position.x - this.w / 2,
      this.body.position.y - this.h / 2,
      this.w,
      this.h
    );
    ctx.fill();
  },
};
