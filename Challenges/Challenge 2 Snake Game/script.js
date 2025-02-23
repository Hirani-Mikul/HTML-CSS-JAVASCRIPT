const FPS = 10;
let lastTime = 0;
const frameRate = (1000 / 60) * (60 / FPS) - (1000 / 60) * 0.5;

function loop(timestamp) {
  if (timestamp - lastTime < frameRate) {
    requestAnimationFrame(loop);
    return;
  }
  lastTime = timestamp;
  requestAnimationFrame(loop);
  clear();
  drawFood();
  drawSnake();
  updateFood();
  drawScore();
}
requestAnimationFrame(loop);
