const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//
const width = canvas.width;
const height = canvas.height;

const FPS = 30;
const Frame_Min_Time = (1000 / 60) * (60 / FPS) - (1000 / 60) * 0.5;
let lastTime = 0;

function clear() {
  ctx.clearRect(0, 0, width, height);
}

let a = new Animal1(300, 300);
let f = new Food();
let a2 = new Animal2(30, 300);
function displayFood() {
  f.display();
}
function createAnimal() {
  a.getFood(f);
  a.update();
  a.display();
  a2.getFood(a);
  a2.update();
  a2.display();
  if (a.checkCollision(f)) {
    f.update();
  }
}

function loop(timeStamp) {
  if (timeStamp - lastTime < Frame_Min_Time) {
    requestAnimationFrame(loop);
    return;
  }
  lastTime = timeStamp;
  clear();
  createAnimal();
  displayFood();

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
