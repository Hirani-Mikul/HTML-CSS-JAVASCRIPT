function Particle(position, color) {
  this.position = position.clone();
  this.velocity = new Vector(getRandomNum(-1, 1), getRandomNum(-1, 0));
  this.acceleration = new Vector(0, 0.09);
  this.size = getRandomNum(5, 10);
  this.timeTolive = 1;
  this.color = color;
}
Particle.prototype.run = function () {
  this.update();
  this.display();
};
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.timeTolive -= 0.01;
};
Particle.prototype.display = function () {
  ctx.beginPath();
  // ctx.fillStyle = `rgba(0, 255, 255, ${this.timeTolive})`;
  ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.timeTolive})`;
  
  ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};
Particle.prototype.isDead = function () {
  return this.timeTolive < 0;
};
