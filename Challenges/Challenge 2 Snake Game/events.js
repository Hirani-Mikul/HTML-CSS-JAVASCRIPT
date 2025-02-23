document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "Left") {
    if (snake.speedX != 0) return;
    snake.move(-1, 0);
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    if (snake.speedX != 0) return;
    snake.move(1, 0);
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    if (snake.speedY != 0) return;
    snake.move(0, -1);
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    if (snake.speedY != 0) return;
    snake.move(0, 1);
  }
});
