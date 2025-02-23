function Particle2(position) {
  Particle1.call(this, position);
  this.size = 10;
}
Particle2.prototype = Object.create(Particle1.prototype);
Particle2.prototype.display = function () {
  ctx.beginPath();
  ctx.fillStyle = "purple";
  ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
  ctx.fill();
};
