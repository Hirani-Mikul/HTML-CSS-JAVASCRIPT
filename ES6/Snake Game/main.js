const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const speed = 10;

let x, y, fruitX, fruitY;
let tailPos = [];
const sSize = 10;
let gameOver;

const clear = () => {
  ctx.clearRect(0, 0, width, height);
};

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft' || 'Left':
      console.log('Moving Left');
      x -= speed;
      break;
    case 'ArrowRight' || 'Right':
      console.log('Moving Right');
      break;
    case 'ArrowUp' || 'Up':
      console.log('Moving Up');
      break;
    case 'ArrowDown' || 'Down':
      console.log('Moving Down');
      break;
    default:
      break;
  }
});

const Start = () => {
  x = 300;
  y = 300;
  gameOver = false;
};
Start();
const segment = () => {
  ctx.fillStyle = 'black';
  ctx.rect(x, y, sSize, sSize);
  ctx.fill();
};

const main = () => {
  clear();

  segment();
  // x++;

  requestAnimationFrame(main);
};
main();
