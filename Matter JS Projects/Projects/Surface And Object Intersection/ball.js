function Ball(x, y, r) {
  this.option = {
    // density: 100,
    friction: 0.0,
    restitution: 1,
  };
  this.body = Bodies.circle(x, y, r, this.option);
  this.r = r;
  this.health = 200;
  World.add(world, this.body);
}
Ball.prototype = {
  removeFromWorld: function () {
    World.remove(world, this.body);
  },
  update: function () {
    this.health -= 0.5;
  },
  display: function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 200, 0)";
    ctx.arc(0, 0, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  },
};
