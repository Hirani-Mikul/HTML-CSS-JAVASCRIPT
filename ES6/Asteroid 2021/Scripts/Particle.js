function Particle(position, dir) {
    this.position = position.clone();
    this.velocity = Vector.random2D();
    this.acceleration = dir.clone();
    this.timeTolive = 1;
    this.size = random(5, 10);
  }
  Particle.prototype.run = function () {
    this.update();
    this.display();
  };
  Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.timeTolive -= 0.018;
  };
  Particle.prototype.isDead = function () {
    return this.timeTolive < 0;
  };
  Particle.prototype.display = function () {
  
    ctx.beginPath();
    ctx.fillStyle = `rgba(204, 202, 196, ${this.timeTolive})`;
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
  