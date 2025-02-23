const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function draw() {
  if (Game_Paused) return;
  clear();
  drawBall();
  drawPaddle();
  drawBricks();
  displayText();
  requestAnimationFrame(draw);
}
draw();
