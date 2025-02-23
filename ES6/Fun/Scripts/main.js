import Particle1 from './Particle1.js';
import ParticleSystem from './ParticleSystem.js';

let ps = new ParticleSystem(new Vector(300, 20));

const draw = () => {
  clear();

  ps.addParticles();
  ps.update();
  requestAnimationFrame(draw);
};

draw();
