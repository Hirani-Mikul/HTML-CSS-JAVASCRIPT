function Ball(x, y, r, fixed) {
  this.option = {
    restitution: 0,
    isStatic: fixed,
  };
  this.body = Bodies.circle(x, y, r, this.option);
  this.r = r;
  World.add(world, this.body);
}
Ball.prototype.display = function () {
  let pos = this.body.position;
  let angle = this.body.angle;
  ctx.save();
  ctx.translate(pos.x, pos.y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.arc(0, 0, this.r, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(0, 0);
  ctx.lineTo(this.r, 0);
  ctx.stroke();
  ctx.restore();
};
