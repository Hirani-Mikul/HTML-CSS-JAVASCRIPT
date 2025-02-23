function ParticleSystem() {
  this.Particles = [];
}
ParticleSystem.prototype.addParticles = function (pos, dir) {
    this.Particles.push(new Particle(pos, dir));
};
ParticleSystem.prototype.update = function () {
  for (var i = this.Particles.length - 1; i >= 0; i--) {
    var particle = this.Particles[i];
    particle.run();
    if (particle.isDead()) {
      this.Particles.splice(i, 1);
    }
  }
};
