function clear() {
  ctx.clearRect(0, 0, width, height);
}
function draw() {
  clear();
  drawShip();
  requestAnimationFrame(draw);
}
draw();
