let rows, cols;
let scl = 20;
let w, h;
let terrain;
let flying = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  w = 1800;
  h = 1200;
  rows = w/scl;
  cols = h/scl;
  terrain = [];
}

function terrainLandscape () {
  flying -= 0.1;
    let yOff = 0;
    for (let y = 0; y < rows; y++) {
      let xOff = flying;
      terrain[y] = [];
      for (let x = 0; x < cols; x++) {
        terrain[y][x] = map(noise(xOff, yOff), 0, 1, -50, 50);
        xOff += 0.2;  
      }
      yOff += 0.2;
    }
  stroke(255);
  //noFill();
  //noStroke();
  fill(0, 255, 255, 100);
  push();
  //translate(width/2, 0);
  rotateX(PI/3);
  translate(-w/3, -h/2);
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
  pop();
}
function draw() {
  background(0);
  terrainLandscape();

}
