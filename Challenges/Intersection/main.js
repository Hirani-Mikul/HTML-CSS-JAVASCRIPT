const clear = () => {
  ctx.clearRect(0, 0, width, height);
};

let lines = [];

lines[0] = new Line(150, 150, 450, 450);
lines[1] = new Line(150, 450, 450, 150);

let selected = null;


const draw = () => {
  clear();

  for (let i = 0; i < lines.length; i++)
  {
    lines[i].display();
  }
  
  let pt = lines[0].intersect(lines[1]);

  if (pt)
  {
    lines[0].mark(pt.x, pt.y, 'red');
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

  
  for (let i = 0; i < lines.length; i++)
  {
    if (isInside(lines[i].sPos.x, lines[i].sPos.y, mouseX, mouseY, 5))
    {
      selected = lines[i].sPos;
    }
    else if (isInside(lines[i].ePos.x, lines[i].ePos.y, mouseX, mouseY, 5)) {
      selected = lines[i].ePos;
    }
  }


})

canvas.addEventListener('mousemove', (event) => {
  
  mousePos(event);

  if (selected)
  {
    selected.x = mouseX;
    selected.y = mouseY;
  }

})
canvas.addEventListener('mouseup', (event) => {

  mousePos(event);
  if (selected) selected = false;
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