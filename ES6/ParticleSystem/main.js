const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var ps = new ParticleSystem(new Vector(300, 20));
var Particles = Array(100)
  .fill()
  .map((x) => new Particle1(new Vector(300, 20)));
function createParticles() {
  Particles.push(new Particle1(new Vector(300, 20)));
  for (let p of Particles) {
    p.run();
  }
  Particles = Particles.filter((p) => !p.isDead());
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ps.addParticles();
  ps.update();
  //createParticles();
  // ps.addParticles();
  // ps.update();
  requestAnimationFrame(draw);
}
draw();
