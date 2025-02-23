function Bridge(last, y, r) {
  this.Balls = [];
  this.last = last;
  this.prev = null;
  for (let i = 0; i < this.last; i++) {
    let fixed = false;
    if (i == 0 || i == this.last - 1) {
      fixed = true;
    }
    let x = i * 20;
    let b = new Ball(x, y, r, fixed, 0);
    this.Balls.push(b);
    if (this.prev) {
      let options = {
        bodyA: b.body,
        bodyB: this.prev.body,
        length: 5,
        stiffness: 0.2,
      };
      let constraint = Constraint.create(options);
      World.add(world, constraint);
    }
    this.prev = b;
  }
}
Bridge.prototype = {
  display: function () {
    let prev = null;
    for (let i = 0; i < this.Balls.length; i++) {
      let b = this.Balls[i];
      b.display();
      let pos = b.body.position;
      if (prev) {
        let prevPos = prev.body.position;
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
        ctx.moveTo(prevPos.x, prevPos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      }
      prev = b;
    }
  },
};
