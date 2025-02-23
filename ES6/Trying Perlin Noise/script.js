const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

function draw() {
  requestAnimationFrame(draw);
}
// draw();

function displayMountains() {
  ctx.strokeStyle = "green";
  drawRange(0.01, 1);

  ctx.strokeStyle = "blue";
  drawRange(0.0061, 1.28);
}

function displaySky() {
  drawSky(0.01);
}
// displayMountains();
displaySky();
