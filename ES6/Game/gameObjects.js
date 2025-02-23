const ship = new Ship();
var numOfBullets = 100;
var bullets = [];
var roids;
function turnShip() {
  if (keys[37]) {
    ship.turn(-1);
    ship.rightThruster = true;
  } else ship.rightThruster = false;
  if (keys[39]) {
    ship.turn(1);
    ship.leftThruster = true;
  } else ship.leftThruster = false;
}
function thrustShip() {
  if (keys[38]) {
    ship.thrust();
    ship.thrusting = true;
  } else {
    ship.thrusting = false;
  }
}
function createRoids() {
  let x = getRandomNum(0, canvas.width);
  let y = getRandomNum(0, canvas.height);
  roids = new Array(5).fill().map((element) => new Asteroid(x, y));
}
createRoids();
function createBullets() {
  bullets.push(new Bullet(ship.pos, ship.angle));
}
function triggerShooting() {
  createBullets();
  bullets.forEach((bullet) => {
    if (!bullet.shot) bullet.shoot();
    bullet.shot = true;
  });
}

function drawRoids() {
  roids.forEach((roid) => {
    bullets.forEach((bullet) => {
      if (bullet.hit(roid)) {
        roid.isHit = true;
        bullet.hasHit = true;
      }
    });
    roid.update();
    roid.checkEdges();
    roid.display();
  });
  roids = roids.filter((roid) => !roid.isHit);
  bullets = bullets.filter((bullet) => !bullet.hasHit);
}
function drawBullets() {
  if (!bullets.length) return;
  bullets.forEach((bullet) => {
    bullet.lifeSpan--;
    bullet.update();
    bullet.checkEdges();
    bullet.display();
  });
  bullets = bullets.filter((bullet) => bullet.lifeSpan);
}
function drawShip() {
  turnShip();
  thrustShip();
  ship.update();
  ship.checkEdges();
  ship.display();
}
