const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

let mousedown = false;

let mouse = { x: 0, y: 0 };

const clear = () => {
  ctx.clearRect(0, 0, width, height);
};

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
}

function mapNum(n, start1, stop1, start2, stop2, withinBounds) {
  const newVal = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newVal;
  }
  if (start2 < stop2) {
    return constrain(newVal, start2, stop2);
  } else {
    return constrain(newVal, stop2, start2);
  }
}

function round(num) {
  let m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

canvas.addEventListener('mousedown', () => {
  mousedown = true;
});
canvas.addEventListener('mouseup', () => {
  mousedown = false;
});

canvas.addEventListener('click', () => {
  SelectSlider();
});

function isInside(pos, size) {
  return (
    mouse.x >= pos.x &&
    mouse.x <= pos.x + size &&
    mouse.y >= pos.y &&
    mouse.y <= pos.y + size
  );
}
function dist(pos, r) {
  return (
    Math.sqrt(
      (pos.x - mouse.x) * (pos.x - mouse.x) +
        (pos.y - mouse.y) * (pos.y - mouse.y)
    ) < r
  );
}

let keys = [];
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
function keyDownHandler(e) {
  keys[e.keyCode] = true;
}
function keyUpHandler(e) {
  keys[e.keyCode] = false;
}
