let speed;
const stars = Array(400)
  .fill()
  .map((element) => new Star());
clear = () => {
  ctx.clearRect(0, 0, width, height);
};
loop = () => {
  clear();
  speed = mapNum(mouseX, 0, width, 1, 50);
  ctx.save();
  ctx.translate(width / 2, height / 2);
  stars.forEach((star) => {
    star.update();
    star.show();
  });
  ctx.restore();
  requestAnimationFrame(loop);
};
loop();
