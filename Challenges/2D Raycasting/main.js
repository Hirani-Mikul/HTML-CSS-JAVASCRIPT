const clear = () => {
  ctx.clearRect(0, 0, width, height);
};


let boundaries = [];
let drawingMarks = [];
let isMarked = false;
let moveSun = false;

let sun = new Sun(300, 300, 30);

const currentMouseLocation = { x: 0, y: 0 };
const previousMouseLocation = { x:0, y: 0 };
let isDrawing = false; 


boundaries[0] = new Boundry(0, 4, 4, 592);
boundaries[1] = new Boundry(4, 0, 592, 4);
boundaries[2] = new Boundry(596, 4, 4, 592);
boundaries[3] = new Boundry(4, 596, 592, 4);

// DELETE THIS BOUDARY TEMP
boundaries[1] = new Boundry(4, 70, 592, 4);


// const keys = [];

// const keyDownHandler = (e) => {
//   if (e.repeat) return;
//   keys[e.keyCode] = true;
// };
// const keyUpHandler = (e) => {
//   keys[e.keyCode] = false;
// };

document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.key === ' ') moveSun = !moveSun;

});

// canvas.addEventListener('keydown', keyDownHandler);
// canvas.addEventListener('keyup', keyUpHandler);

const drawBoundry = () => {

  let bWidth;
  let bHeight;


  if (currentMouseLocation.x < previousMouseLocation.x)
  {
    let temp = previousMouseLocation.x;
    previousMouseLocation.x = currentMouseLocation.x;
    currentMouseLocation.x = temp;
  }
  if (currentMouseLocation.y < previousMouseLocation.y)
  {
    let temp = previousMouseLocation.y;
    previousMouseLocation.y = currentMouseLocation.y;
    currentMouseLocation.y = temp;
  }

  bWidth = Math.abs(previousMouseLocation.x - currentMouseLocation.x);
  bHeight = Math.abs(previousMouseLocation.y - currentMouseLocation.y);

  if (bWidth <= 10 && bHeight <= 10) return;

  for (let i = 0; i < boundaries.length; i++)
  {
    if (boundaries[i].overlaps(previousMouseLocation.x, previousMouseLocation.y, bWidth, bHeight) )
    {
      isMarked = true;
    }
  }

  if (isMarked) {
    isMarked = false;
    return;
  }

  boundaries.push(new Boundry(previousMouseLocation.x, previousMouseLocation.y, bWidth, bHeight));
}

canvas.addEventListener('mousedown', (event) => {

  if (!moveSun)
  {
  if (isDrawing) return;


  mousePos(event);


  previousMouseLocation.x = mouseX;
  previousMouseLocation.y = mouseY;


  drawingMarks.push(new Mark(mouseX, mouseY));
  drawingMarks.push(new Mark(mouseX, mouseY));

  isDrawing = true;
  }
  else {
    sun.x = mouseX;
    sun.y = mouseY;
  }
})
canvas.addEventListener('mousemove', (event) => {
  
  mousePos(event);

  if (!moveSun)
  {
    if (!isDrawing) return;
    currentMouseLocation.x = mouseX;
    currentMouseLocation.y = mouseY;
  
    drawingMarks[1].x = mouseX;
    drawingMarks[1].y = mouseY;
    
  } else {
    sun.x = mouseX;
    sun.y = mouseY;
  }


})
canvas.addEventListener('mouseup', (event) => {
  isDrawing = false;

  mousePos(event);
  
  if (!moveSun)
  {
    currentMouseLocation.x = mouseX;
    currentMouseLocation.y = mouseY;
  
  
    drawingMarks.splice(0, drawingMarks.length);
    drawBoundry();

  } else {
    sun.x = mouseX;
    sun.y = mouseY;
  }
})

const draw = () => {
  clear();

  sun.display();

  if (boundaries.length > 0)
  {

    for (let i = 0; i < boundaries.length; i++)
    {
      boundaries[i].display();
    }
  }

  if (drawingMarks.length > 0)
  {
    for (let i = 0; i < drawingMarks.length; i++)
      {
        drawingMarks[i].display();
      }

    ctx.strokeStyle = 'green';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(drawingMarks[0].x, drawingMarks[0].y);
    ctx.lineTo(drawingMarks[1].x, drawingMarks[1].y);
    ctx.stroke();

  }

  sun.overlaps(boundaries[1]);

  sun.cast();
  

  requestAnimationFrame(draw);
};
draw();


