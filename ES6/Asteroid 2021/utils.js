const keys = [];

const keyDownHandler = (e) => {
  keys[e.keyCode] = true;
};
const keyUpHandler = (e) => {
  keys[e.keyCode] = false;
};

document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.key === ' ')
    shoot();
});

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
