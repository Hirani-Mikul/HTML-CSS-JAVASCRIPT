//

let s = new Slider(100, 100, 180, 20, 1, 10, 20, 15);
let s2 = new Slider(200, 200, 200, 30, 2, 0, 100, 100);
let s3 = new Slider(10, 300, 500, 40, 3, -100, 1000, 500, 10);

function Slide() {
  s.slide();
  s2.slide();
  s3.slide();
}

function SelectSlider() {
  s.select();
  s2.select();
  s3.select();
}

s.construct();
s2.construct();
s3.construct();

const draw = () => {
  clear();

  s.display();
  s2.display();
  s3.display();

  if (keys[37]) {
    s.slide(-1);
    s2.slide(-1);
    s3.slide(-1);
  } else if (keys[39]) {
    s.slide(1);
    s2.slide(1);
    s3.slide(1);
  }
  // if (mousedown) Slide();

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.font = '16px Arial';
  ctx.fillText('1: ' + s.value, 250, 450);

  ctx.font = '16px Arial';
  ctx.fillText('2: ' + s2.value, 250, 490);
  ctx.fill();

  ctx.font = '16px Arial';
  ctx.fillText('3: ' + s3.value, 250, 530);
  ctx.fill();
  requestAnimationFrame(draw);
};

draw();
