function Animal1(x, y) {
  Creature.call(this, x, y);
}
Animal1.prototype = Object.create(Creature.prototype);
Animal1.prototype.display = function () {
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.arc(this.position.x, this.position.y, this.Age, 0, Math.PI * 2);
  ctx.fill();
};
