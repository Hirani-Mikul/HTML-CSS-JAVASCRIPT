import Ship from "./ship.js";
import Bullet from "./drop.js";
import { keys } from "./events.js";
import Star from "./invader.js";

export const ship = new Ship();
export let bullets = [];

let stars = [];

export function createBullets() {
  bullets.push(new Bullet(ship.x, ship.y));
}

function createStars() {
  for (let i = 0; i < 11; i++) {
    let x = i * 50 + 50;
    for (let j = 0; j < 3; j++) {
      let y = j * 50 + 100;
      stars.push(new Star(x, y));
    }
  }
}
createStars();

function moveShip() {
  if (keys[37]) {
    ship.move(-1);
  }
  if (keys[39]) {
    ship.move(1);
  }
}
export function drawStars() {
  let hitEdge = false;
  stars.forEach((s) => {
    s.move();
    s.display();
    if (s.x + s.size > width || s.x - s.size < 0) {
      hitEdge = true;
    }
  });
  if (hitEdge) {
    stars.forEach((s) => {
      s.shiftDown();
    });
  }
  stars = stars.filter((s) => !s.isHit);
}
export function drawBullets() {
  bullets.forEach((b) => {
    b.shoot();
    b.display();
    stars.forEach((s) => {
      if (b.hit(s)) {
        b.hasHit = true;
        s.isHit = true;
      }
    });
  });
  bullets = bullets.filter((b) => !b.hasHit);
}

export function drawShip() {
  moveShip();
  ship.checkEdges();
  ship.display();
}
