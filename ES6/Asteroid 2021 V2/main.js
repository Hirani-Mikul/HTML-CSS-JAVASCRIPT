const s = new Ship();

const turnShip = () => {
  if (keys[37]) s.turn(-1);
  else if (keys[39]) s.turn(1);
};

const thrustShip = () => {
  if (keys[38]) s.thrust();
};

const draw = () => {
  clear();

  turnShip();
  thrustShip();
  s.update();
  s.display();
  requestAnimationFrame(draw);
};
draw();
