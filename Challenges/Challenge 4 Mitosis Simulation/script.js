const FPS = 30;
const Frame_Min_Time = (1000 / 60) * (60 / FPS) - (1000 / 60) * 0.5;

let lastTime = 0;

let cells = Array(2)
  .fill()
  .map((element) => new Cell());

document.addEventListener("mousedown", () => {
  cells.forEach((c, index) => {
    if (c.inside(mouseX, mouseY)) {
      c.hasSplit = true;
      let cellA = c.mitosis();
      let cellB = c.mitosis();
      cells.push(cellA);
      cells.push(cellB);
    }
  });
});

function drawCell() {
  cells.forEach((c) => {
    c.move();
    c.checkEdges();
    c.display();
  });
  cells = cells.filter((c) => !c.hasSplit);
}

function loop(timeStamp) {
  if (timeStamp - lastTime < Frame_Min_Time) {
    requestAnimationFrame(loop);
    return;
  }
  lastTime = timeStamp;
  clear();
  drawCell();

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
