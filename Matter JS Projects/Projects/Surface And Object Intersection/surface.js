function Surface(x, y, w, h, a) {
  this.option = {
    friction: 0,
    isStatic: true,
    angle: a,
  };
  this.body = Bodies.rectangle(x, y, w, h, this.option);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
}
Surface.prototype = {
  display: function () {
    let angle = this.body.angle;
    ctx.save();
    ctx.translate(this.body.position.x, this.body.position.y);
    ctx.rotate(angle);
    ctx.translate(-this.body.position.x, -this.body.position.y);
    ctx.translate(
      this.body.position.x - this.w / 2,
      this.body.position.y - this.h / 2
    );
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, this.w, this.h);
    ctx.fill();
    ctx.restore();
  },
};
