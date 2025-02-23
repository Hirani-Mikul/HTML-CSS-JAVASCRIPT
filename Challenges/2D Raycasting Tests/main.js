const clear = () => {
  ctx.clearRect(0, 0, width, height);
};


let moveRay = false;

let boundary = new Boundry(450, 150, 50, 300);
let boudaries = [];
let sun = new Sun(200, 300, 200);


document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.key === ' ') { moveRay = !moveRay; }

});

canvas.addEventListener('mousedown', (event) => {

  mousePos(event);

})
canvas.addEventListener('mousemove', (event) => {
  
  mousePos(event);

  sun.lookAt(mouseX, mouseY);

  
})

sun.create();

const init = () => {
  for (let i = 0; i < 5; i++)
  {
    let x = getRandomNum(0, width);
    let y = getRandomNum(0 , height);
    let ex = getRandomNum(300, width);
    let ey = getRandomNum(300 , height);

    boudaries.push(new Boundry(x, y, ex, ey));
  }
}

init();

const draw = () => {
  clear();

  boundary.display();

  sun.update();
  sun.cast(boudaries);

  for (let b of boudaries)
  {
    b.display();
  }
  
  requestAnimationFrame(draw);
};
draw();


