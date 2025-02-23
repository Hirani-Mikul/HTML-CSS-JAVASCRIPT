var ball;
var paddle;
var bricks;
var currentLevel;
var Game_Paused = false;
var score = 0;
var lives = 3;

function startGame() {
  ball = new Ball();
  paddle = new Paddle();
  bricks = [];
  currentLevel = 0;
  buildLevel();
}
startGame();

function togglePause() {
  Game_Paused = !Game_Paused;

    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 255, 255)";
    ctx.textAlign = "center";
    ctx.font = "40px monospace";
    ctx.fillText("GAME PAUSED", canvas.width / 2, canvas.height / 2);
    ctx.fill();

  if (!Game_Paused) draw();
}

function resetBall()
{
  ball.x = 300;
  ball.y = 300;
}

function rebuildLevel()
{
  bricks = [];
  resetBall();
  buildLevel();
  lives = 3;
}
function nextLevel()
{
  Levels[currentLevel].complete = true;
  console.log(Levels[currentLevel].complete);
  currentLevel++;
  rebuildLevel();

}

function buildLevel() {
  if (currentLevel >= Levels.length) currentLevel = 0;
  let level = Levels[currentLevel][0].Data;
  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 120 * brickIndex + 60,
          y: 40 * rowIndex + 60,
        };
        bricks.push(new Brick(position));
      }
    });
  });
}

function movePaddle() {
  if (leftPressed) paddle.update(-1);
  if (rightPressed) paddle.update(1);
}

function drawBricks() {
  bricks.forEach((brick) => {
    if (ball.collision(brick)) {
      brick.hit = true;
      ball.dy *= -1;
      score += 10;
    }
    brick.display();
  });
  bricks = bricks.filter((brick) => !brick.hit);
  if (bricks.length == 0)
  {
    nextLevel();
  }
}

function drawBall() {
  if (ball.collision(paddle)) {
    ball.dy *= -1;
  }
  ball.update();
  ball.checkEdges();
  ball.display();
  if (ball.dead) {
    lives--;
    resetBall();
    if (lives <= 0) {
      score = 0;
      rebuildLevel();
    }
    ball.dead = false;
  }
}
function drawPaddle() {
  movePaddle();
  paddle.checkEdges();
  paddle.display();
}

function displayText() {
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 255, 255)";
  ctx.textAlign = "left";
  ctx.font = "20px monospace";
  ctx.fillText("Score: " + score, 20, 30);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 255, 255)";
  ctx.textAlign = "center";
  ctx.font = "20px monospace";
  ctx.fillText("Level: " + (currentLevel + 1), canvas.width / 2, 30);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 255, 255)";
  ctx.textAlign = "right";
  ctx.fillText("Lives: " + lives, canvas.width - 20, 30);
  ctx.fill();
}
