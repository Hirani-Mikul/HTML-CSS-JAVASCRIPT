let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let points = [];

let easycam;

function setup() {
  createCanvas(800, 600, WEBGL);
  setAttributes("antialias", true);
  easycam = createEasyCam();
  colorMode(HSB);
  // easycam = new Dw.EasyCam(this._renderer, { distance: 600 });
  document.oncontextmenu = function () {
    return false;
  };
  document.onmousedown = function () {
    return false;
  };
}
let angle = 0;
function draw() {
  background(0);
  let dt = 0.01;

  let dx = a * (y - x) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(createVector(x, y, z));

  scale(5);
  stroke(255);
  noFill();
  let hu = 0;
  beginShape();
  for (let p of points) {
    stroke(hu, 255, 255);
    let x = cos(angle);
    vertex(p.x, p.y, p.z);
    let offSet = p5.Vector.random3D();
    offSet.mult(0.1);
    p.add(offSet);
    hu += 0.1;
    if (hu > 255) {
      hu = 0;
    }
  }
  angle += 1;
  endShape();
  // translate(width / 2, height / 2);
  // vertex(x, y, z);
  // console.log(x, y, z);
}
