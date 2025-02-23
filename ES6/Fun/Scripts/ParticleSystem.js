import Particle1 from './Particle1.js';

function ParticleSystem(origin) {
  this.origin = origin.clone();
  this.Particles = Array(5)
    .fill()
    .map((x) => new Particle1(this.origin));
}

ParticleSystem.prototype.addParticles = function () {
  let rand = Math.random();

  if (rand < 0.08) this.Particles.push(new Particle1(this.origin));
  else return;
  // else this.Particles.push(new P)
};
ParticleSystem.prototype.update = function () {
  for (let p of this.Particles) p.run();
  this.Particles = this.Particles.filter((p) => !p.isDead());

  let center = this.Particles.reduce(
    (a, p) => a.add(p.position.x, p.position.y),
    new Vector(0, 0)
  );
};

export default ParticleSystem;
