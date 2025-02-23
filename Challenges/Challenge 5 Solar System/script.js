const FPS = 30;
const Frame_Min_Time = (1000 / 60) * (60 / FPS) - (1000 / 60) * 0.5;

let lastTime = 0;

function loop(timeStamp) {
  if (timeStamp - lastTime < Frame_Min_Time) {
    requestAnimationFrame(loop);
    return;
  }
  lastTime = timeStamp;
  clear();
  drawStar();
  drawPlanets();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
