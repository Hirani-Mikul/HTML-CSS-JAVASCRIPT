const s = new Ship();
let bullets = [];
let asteroids = [];
let newAsteroids = [];

let score = 0;

const turnShip = () => {
  if (keys[37]) s.turn(-1);
  else if (keys[39]) s.turn(1);
};

const addAsteroid = () =>
{
  let x = random(0, width);
  let y = random(0, height);
  asteroids.push(new Asteroid(x, y));
}

addAsteroid();
addAsteroid();
addAsteroid();
addAsteroid();

const thrustShip = () => {
  if (keys[38]) s.thrust();
};
const shoot = () => {
    let angle = s.angle;
    let force = new Vector(Math.cos(angle), Math.sin(angle));

    bullets.push({ x: s.position.x, y: s.position.y, dx: force.x, dy: force.y});
}

const draw = () => {
  clear();

  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 255, 255)";
  ctx.textAlign = "right";
  ctx.font = "20px monospace";
  ctx.fillText("Score: " + score, canvas.width - 20, 30);
  ctx.fill();
  

  for (let i = 0; i < asteroids.length; i++)
  {
    asteroids[i].display();
    asteroids[i].checkEdges();
    asteroids[i].update();
  }

  for (let i = 0; i < bullets.length; i++)
  {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    let x = bullets[i].x;
    let y = bullets[i].y;
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    
    bullets[i].x += bullets[i].dx * 10;
    bullets[i].y += bullets[i].dy * 10;

    
    for (let j = 0; j < asteroids.length; j++)
    {
      if(asteroids[j].checkCollision(bullets[i].x, bullets[i].y))
      {
        bullets[i].x = -100;
        let x = asteroids[j].pos.x;
        let y = asteroids[j].pos.y;
        let radius = asteroids[j].r / 2;

        score += 10;

        if (radius > 5)
        {
          newAsteroids.push(new Asteroid(
            x + radius, y, radius
            ));
          newAsteroids.push(new Asteroid(
            x - radius, y, radius
          ));
        }

        asteroids[j].isHit = true;
      }
    }
  }

  bullets = bullets.filter((b) => {
    return !(b.x < 0 || b.x > width || b.y < 0 || b.y > height);
  })

  for (let i = 0; i < newAsteroids.length; i++)
  {
    asteroids.push(newAsteroids[i]);
  }
  newAsteroids = [];

  asteroids = asteroids.filter(a => !a.isHit);

  if (asteroids.length == 0)
  {
    addAsteroid();
    addAsteroid();
    addAsteroid();
  }

  turnShip();
  thrustShip();
  s.checkEdges();
  s.update();
  s.display();
  requestAnimationFrame(draw);
};
draw();
