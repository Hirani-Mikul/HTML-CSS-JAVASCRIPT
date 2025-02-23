const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const Engine = Matter.Engine,
  World = Matter.World,
  Render = Matter.Render,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

const engine = Engine.create();
const world = engine.world;

let mConstraint;

let balls = [];
function start() {
  let prev = null;
  for (let i = 0; i < 10; i++) {
    let x = i * 20 + 300;
    let fixed = false;
    if (!prev) {
      fixed = true;
    }
    let b = new Ball(x, 30, 10, fixed);
    balls.push(b);
    if (prev) {
      let option = {
        bodyA: b.body,
        bodyB: prev.body,
        length: 20,
        stiffness: 0.2,
      };
      let constraint = Constraint.create(option);
      World.add(world, constraint);
    }
    prev = b;
  }
  mouseConstraintAction();
}
start();

function mouseConstraintAction() {
  let mouseCon = Mouse.create(canvas);
  // mouseCon.pixelRation = 2;
  let options = {
    mouse: mouseCon,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function displayChain() {
  balls.forEach((ball) => {
    ball.display();
  });
}

function drawLineAndShape() {
  if (mConstraint.body) {
    let pos = mConstraint.body.position;
    let m = mConstraint.mouse.position;
    let offSet = mConstraint.constraint.pointB;
    // Fill Shape
    ctx.beginPath();
    ctx.fillStyle = "lightgreen";
    ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Draw Line
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.moveTo(pos.x + offSet.x, pos.y + offSet.y);
    ctx.lineTo(m.x, m.y);
    ctx.stroke();
  }
}

function clear() {
  ctx.clearRect(0, 0, width, height);
}
function draw() {
  Engine.update(engine);
  clear();
  displayChain();
  drawLineAndShape();
  requestAnimationFrame(draw);
}
draw();
