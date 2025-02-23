const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

let engine;
let world;

let ground;
let balls = [];
let bridges = [];
function setup() {
  engine = Engine.create();
  world = engine.world;
  ground = new Boundry(300, height - 10, width, 20);
  bridges.push(new Bridge(30, 200, 10));
  bridges.push(new Bridge(30, 300, 10));
}
setup();

canvas.addEventListener("click", () => {
  balls.push(new Ball(mouseX, mouseY, random(5, 10), false, 1));
});
canvas.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  balls.push(new Ball(mouseX, mouseY, random(20, 30), false, 1));
});

function displayBridges() {
  bridges.forEach((bridge) => {
    bridge.display();
  });
}

function displayBalls() {
  balls.forEach((ball) => {
    ball.display();
  });
}

function displayGround() {
  ground.display();
}

function clear() {
  ctx.clearRect(0, 0, width, height);
}
function draw() {
  Engine.update(engine);
  clear();
  displayBridges();
  displayBalls();
  displayGround();
  requestAnimationFrame(draw);
}
draw();
