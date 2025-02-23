function ParticleSystem(origin) {
  this.origin = origin.clone();
  this.Particles = Array(100)
    .fill()
    .map((x) => new Particle1(this.origin));
}
ParticleSystem.prototype.addParticles = function () {
  let rand = Math.random();
  if (rand < 0.5) {
    this.Particles.push(new Particle1(this.origin));
  } else {
    this.Particles.push(new Particle2(this.origin));
  }
  // let rand = Math.random();
  // if (rand < 0.5) {
  //   this.Particles = Array(100)
  //     .fill()
  //     .map((x) => new Particle1(this.origin));
  // } else {
  //   this.Particles = Array(100)
  //     .fill()
  //     .map((x) => new Particle2(this.origin));
  // }
  // this.Particles = this.Particles.map((x) => new Particle1(this.origin));
};
ParticleSystem.prototype.update = function () {
  for (let p of this.Particles) {
    p.run();
  }
  this.Particles = this.Particles.filter((p) => !p.isDead());

  let center = this.Particles.reduce(
    (a, p) => a.add(p.position.x, p.position.y),
    new Vector(0, 0)
  );

  //
  center.divide(this.Particles.length);
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(center.x, center.y, 10, 0, Math.PI * 2);
  ctx.fill();
};

// use also sort function to make the particle with more alpha to appear on top
