function Particle(position, dir) {
  this.position = position.clone();
  this.velocity = Vector.random2D();
  this.acceleration = dir.clone();
  this.timeTolive = 255;
  this.size = random(5, 10);
}
Particle.prototype.run = function () {
  this.update();
  this.display();
};
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.timeTolive -= 2;
};
Particle.prototype.isDead = function () {
  return this.timeTolive < 0;
};
Particle.prototype.display = function () {

  ctx.beginPath();
  ctx.globalAlpha = this.timeTolive;
  ctx.fillStyle = "#cccac4";
  ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};
