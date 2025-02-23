let colors = [
  'rgb(0, 255, 255)',
  'rgb(255, 0, 255)',
  'rgb(255, 255, 0)',
  'rgb(255, 0, 0)',
  'rgb(0, 255, 0)',
];

let cam = new Camera();

const Shout = () => {
  console.log('Dancing');
};

let Boxes = [];

function CreateBoxes() {
  let j = 0;
  for (let i = 0; i < 1; i++) {
    j++;

    if (j >= colors.length) j = 0;

    // const y = 40 * i;
    const y = 40;
    Boxes.push(new Entity(5, y, width - 10, 80, 10, colors[j]));
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

  if (ScrollY < 0) {
    cam.SetScale(cam.GetScale() * zoomFactor);
  }
  if (ScrollY > 0) {
    cam.SetScale(cam.GetScale() / zoomFactor);
  }

  scale_text.innerHTML = `${round(cam.scale)}`;
}

function draw() {
  clear();
  requestAnimationFrame(draw);

  ControlCamera();

  for (let b of Boxes) {
    cam.Draw(b.GetDrawable());
  }

  ScrollY = 0;
}
CreateBoxes();
draw();
