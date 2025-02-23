let colors = [
  'rgb(0, 255, 255)',
  'rgb(255, 0, 255)',
  'rgb(255, 255, 0)',
  'rgb(255, 0, 0)',
  'rgb(0, 255, 0)',
];

let cam = new Camera();

let Boxes = [];
let timelane = new Entity(-60, 110, 20, 400, 20, 'rgb(255, 255, 255)');

function CreateBoxes() {
  let j = 0;
  for (let i = 0; i < 10; i++) {
    j++;

    if (j >= colors.length) j = 0;

    const y = 20 * i + 20;
    Boxes.push(new Entity(0, y, 180, 40, 10, colors[j]));
  }
}

function ControlCamera() {
  // 37 - left, 39 - right, 38 - top, 40 - bottom
  if (keys[38]) cam.MoveBy(0, -cameraSpeed);
  if (keys[40]) cam.MoveBy(0, cameraSpeed);

  if (isEngaged) {
    const curPos = { x: mouse.x, y: mouse.y };
    let delta = { x: curPos.x - lastPos.x, y: curPos.y - lastPos.y };
    delta.x = -delta.x;
    delta.y = -delta.y;
    // cam.MoveBy(delta.x / cam.scale, delta.y / cam.scale);
    cam.MoveBy(0, delta.y / cam.scale);
    lastPos = curPos;
  }

  if (ScrollY < 0) cam.SetScale(cam.GetScale() * zoomFactor);
  if (ScrollY > 0) cam.SetScale(cam.GetScale() / zoomFactor);

  hudScale.innerHTML = `${round(cam.scale)}`;
}

function draw() {
  clear();
  requestAnimationFrame(draw);

  ControlCamera();

  for (let b of Boxes) {
    cam.Draw(b.GetDrawable());
  }

  cam.AbsoluteDraw(timelane.GetDrawable());
  ScrollY = 0;
}
CreateBoxes();
draw();
