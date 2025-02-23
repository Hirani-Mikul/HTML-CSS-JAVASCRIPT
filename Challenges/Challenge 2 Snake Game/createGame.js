const scl = 10;
const snake = new Snake();
let food;
let score = 0;

function foodLocation() {
  const cols = Math.floor(width / scl);
  const rows = Math.floor(height / scl);
  food = {
    x: Math.floor(random(cols)),
    y: Math.floor(random(rows)),
    r: scl,
  };
  food.x *= scl;
  food.y *= scl;
}
foodLocation();

function drawScore() {
  ctx.beginPath();
  ctx.fillStyle = "lightblue";
  ctx.textAlign = "left";
  ctx.font = "20px monospace";
  ctx.fillText(`Score: ${score}`, 10, 20);
}

function drawFood() {
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(food.x, food.y, food.r, food.r);
  ctx.fill();
}
function updateFood() {
  if (snake.eat(food)) {
    snake.tailLength++;
    score += 10;
    foodLocation();
  }
}

function drawSnake() {
  if (snake.isDead) {
    score = 0;
  }
  snake.dead();
  snake.update();
  snake.checkEdges();
  snake.display();
}
