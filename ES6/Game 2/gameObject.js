const ship = new Ship();

function turnShip() {
  if (keys[37]) ship.turn(-1);
  if (keys[39]) ship.turn(1);
}

function thrustShip() {
  if (keys[38]) ship.thrust();
}

function drawShip() {
  turnShip();
  thrustShip();
  ship.update();
  ship.checkEdges();
  ship.display();
}
