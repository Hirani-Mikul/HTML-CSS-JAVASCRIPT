function Animal2(x, y) {
  Creature.call(this, x, y);
  this.Age = 10;
  this.speed = 5;
}
Animal2.prototype = Object.create(Creature.prototype);
Animal2.prototype.display = function () {
  ctx.save();
  ctx.translate(
    this.position.x - this.Age / 1.25,
    this.position.y - this.Age / 4
  );
  ctx.beginPath();
  ctx.rotate(this.angle);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, this.Age * 1.5, this.Age / 2);
  ctx.restore();
};
