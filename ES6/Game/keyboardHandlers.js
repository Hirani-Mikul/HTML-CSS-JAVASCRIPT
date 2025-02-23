
var keys = [];
document.addEventListener("keydown", function (e) {
  if (e.repeat) return;
  if (e.key === " ") {
    triggerShooting();
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
