const FPS = 30;
let lastTime = 0;
const Frame_Min_Time = (1000 / 60) * (60 / FPS) - (1000 / 60) * 0.5;

import { drawShip, drawBullets, drawStars } from "./drawGame.js";
function loop(timeStamp) {
  if (timeStamp - lastTime < Frame_Min_Time) {
    requestAnimationFrame(loop);
    return;
  }
  lastTime = timeStamp;
  clear();
  drawStars();
  drawBullets();
  drawShip();
  // trial();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
