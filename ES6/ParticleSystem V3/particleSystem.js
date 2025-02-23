function ParticleSystem(origin, color) {
  this.origin = origin.clone();
  this.Particles = [];
  this.color = color;
}
ParticleSystem.prototype.addParticles = function () {
    this.Particles.push(new Particle(this.origin, this.color));
};
ParticleSystem.prototype.update = function () {
  for (let p of this.Particles) {
    p.run();
  }
  this.Particles = this.Particles.filter((p) => !p.isDead());

};