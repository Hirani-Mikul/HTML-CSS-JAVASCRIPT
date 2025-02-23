const clear = () => {
  ctx.clearRect(0, 0, width, height);
};

let isMoving = false;

let ray = new Ray(200, 300);
let boundaries = [];

boundaries.push(new Boundary(500, 100, 500, 500));

const draw = () => {
  clear();


  ray.display();

  for (let i = 0; i < boundaries.length; i++)
  {
    boundaries[i].display();
  }

  let pt = ray.cast(boundaries[0]);

  if (pt)
  {
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2, false);
    ctx.fill();
  }

  requestAnimationFrame(draw);
};
draw();

function isInside(x, y, mx, my, r) {
  
  let dist = Math.sqrt(
    ((mx - x) * (mx - x)) +
    ((my - y) * (my - y))
  );

  // Instead of finding square root of the distance ...
  // multiply 'r' by itself.

  return dist < r;
}

canvas.addEventListener('mousedown', (event) => {
  mousePos(event);

  isMoving = true;

})

canvas.addEventListener('mousemove', (event) => {
  
  mousePos(event);

  if (isMoving)
  {
    ray.lookAt(mouseX, mouseY);
  }

})
canvas.addEventListener('mouseup', (event) => {

  mousePos(event);

  isMoving = false;

})

/*
document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.key === ' ') console.log("Space bar");;

});

canvas.addEventListener('mousedown', (event) => {
  mousePos(event);

})
canvas.addEventListener('mousemove', (event) => {
  
  mousePos(event);

})
canvas.addEventListener('mouseup', (event) => {

  mousePos(event);
})



*/