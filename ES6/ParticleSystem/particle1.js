function Particle1(position) {
  this.position = position.clone();
  this.velocity = new Vector(getRandomNum(-1, 1), getRandomNum(-1, 0));
  this.acceleration = new Vector(0, 0.09);
  this.size = 5;
  this.timeTolive = 1;
}
Particle1.prototype.run = function () {
  this.update();
  this.display();
};
Particle1.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.timeTolive -= 0.01;
};
Particle1.prototype.display = function () {
  ctx.beginPath();
  ctx.globalAlpha = this.timeTolive;
  ctx.fillStyle = "rgba(0, 255, 255)";
  ctx.strokeStyle = "black";
  ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
};
Particle1.prototype.isDead = function () {
  return this.timeTolive < 0;
};
