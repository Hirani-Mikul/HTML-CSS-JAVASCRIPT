const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let boxes = [];
let balls = [];
let ground;
let leftWall;
let rightWall;
let surfaces = [];

function setup() {
  engine = Engine.create();
  world = engine.world;
  // Engine.run(engine);
  ground = new Boundry(300, height - 2, width, 20);
  leftWall = new Boundry(0, 297.5, 5, height - 5);
  rightWall = new Boundry(width, 297.5, 5, height - 5);

  surfaces.push(new Surface(200, 200, 400, 10, 0.3));
  surfaces.push(new Surface(400, 400, 400, 10, -0.3));
}
canvas.addEventListener("click", () => {
  balls.push(new Ball(mouseX, mouseY, random(5, 10)));
  console.log(balls.length, world.bodies.length);
});
canvas.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
});

setup();

function createSurfaces() {
  surfaces.forEach((s) => {
    s.display();
  });
}

function displayWalls() {
  leftWall.display();
  rightWall.display();
}

function displayGround() {
  ground.display();
}

function displayBalls() {
  balls.forEach((b, index) => {
    b.update();
    b.display();
    if (b.health < 0) {
      b.removeFromWorld();
      balls.splice(index, 1);
    }
  });
}

function createBox() {
  boxes.forEach((box) => {
    box.display();
  });
}

function clear() {
  ctx.clearRect(0, 0, width, height);
}

function draw() {
  // let rand = random(1);
  // if (rand < 0.1) {
  //   balls.push(new Ball(300, 30, random(5, 10)));
  // }

  Engine.update(engine);
  clear();
  displayWalls();
  displayGround();
  createSurfaces();
  displayBalls();
  createBox();
  requestAnimationFrame(draw);
}
draw();
