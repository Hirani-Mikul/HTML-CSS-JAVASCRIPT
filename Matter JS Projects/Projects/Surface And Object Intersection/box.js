function Box(x, y, w, h) {
  this.option = {
    // density: 100,
    friction: 1,
    restitution: 0.8,
  };
  this.body = Bodies.rectangle(x, y, w, h, this.option);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
}
Box.prototype = {
  display: function () {
    let pos = this.body.position;
    let angle = this.body.angle;
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate(angle);
    ctx.translate(-pos.x, -pos.y);
    ctx.translate(pos.x - this.w / 2, pos.y - this.h / 2);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.fillStyle = "rgb(255, 5, 250)";
    ctx.fillRect(0, 0, this.w, this.h);
    ctx.strokeRect(0, 0, this.w, this.h);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  },
};
