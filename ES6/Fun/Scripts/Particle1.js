const asteroid = document.getElementById('rock');

function Particle1(position) {
  this.position = position.clone();
  this.velocity = new Vector(Random(-1, 1), Random(-1, 0));
  this.acceleration = new Vector(0, 0.05);
  this.size = 80;
  this.timeToLive = 1;
  this.angle = 0;
  this.aVel = 0.03;
}
Particle1.prototype.run = function () {
  this.update();
  this.display();
};
Particle1.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);

  this.timeToLive -= 0.007;
};
// Particle1.prototype.display = function () {
//   ctx.beginPath();
//   ctx.globalAlpha = this.timeToLive;
//   ctx.fillStyle = 'rgba(0, 255, 255)';
//   ctx.strokeStyle = 'black';
//   ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
//   ctx.stroke();
//   ctx.fill();
// };

Particle1.prototype.display = function () {
  ctx.save();
  ctx.translate(this.position.x, this.position.y);
  ctx.rotate(this.angle + Math.PI / 2);
  ctx.drawImage(asteroid, -this.size / 2, -this.size / 2, this.size, this.size);
  this.angle += this.velocity.x < 0 ? -this.aVel : this.aVel;
  ctx.restore();
};
Particle1.prototype.isDead = function () {
  return this.timeToLive < 0;
};

export default Particle1;
