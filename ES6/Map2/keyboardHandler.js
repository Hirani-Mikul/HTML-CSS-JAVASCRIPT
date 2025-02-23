let keys = [];

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);``
function keyDownHandler(e) {
  keys[e.keyCode] = true;
}
function keyUpHandler(e) {
  keys[e.keyCode] = false;
}