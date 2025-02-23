import { ship, createBullets } from "./drawGame.js";

export const keys = [];

document.addEventListener("keypress", () => {
  if (keys[32]) {
    createBullets();
  }
});

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
function keyDownHandler(e) {
  keys[e.keyCode] = true;
}
function keyUpHandler(e) {
  keys[e.keyCode] = false;
}
