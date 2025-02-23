function Ball(x, y, r, fixed, res) {
  this.option = {
    restitution: res,
    isStatic: fixed,
  };
  this.body = Bodies.circle(x, y, r, this.option);
  this.r = r;
  World.add(world, this.body);
}
Ball.prototype = {
  display: function () {
    let pos = this.body.position;
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(pos.x, pos.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  },
};
