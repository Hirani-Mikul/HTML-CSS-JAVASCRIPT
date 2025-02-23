const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let color1 = { r: 0, g: 255, b: 255};
let color2 = { r: 212, g: 78, b: 11};
let color3 = { r: 12, g: 50, b: 201};

let ps = [];

ps.push(new ParticleSystem(new Vector(300, 20), color1));
ps.push(new ParticleSystem(new Vector(100, 20), color2));
ps.push(new ParticleSystem(new Vector(500, 20), color3));


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ps.forEach(s => {
    s.addParticles();
    s.update();
  })

  requestAnimationFrame(draw);
}
draw();
