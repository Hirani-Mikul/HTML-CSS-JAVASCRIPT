const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let keys = [];

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  keys[e.keyCode] = true;
}
function keyUpHandler(e) {
  keys[e.keyCode] = false;
}
