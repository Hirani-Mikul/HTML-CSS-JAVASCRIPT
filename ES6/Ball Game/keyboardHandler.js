var rightPressed = false;
var leftPressed = false;

document.addEventListener("keypress", (e) => {
  if (e.key === "p" || e.key === "P") {
    //console.log("Paused");
    togglePause();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "Left") {
    leftPressed = true;
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    rightPressed = true;
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "Left") {
    leftPressed = false;
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    rightPressed = false;
  }
});

