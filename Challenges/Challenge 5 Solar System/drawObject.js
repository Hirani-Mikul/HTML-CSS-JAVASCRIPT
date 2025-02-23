const star = new Star(width / 2, height / 2, 3);
let planets = Array(5)
  .fill()
  .map((element) => {
    let x = random(width);
    let y = random(height);
    let m = random(0.5, 2);
    return new Planet(x, y, m);
  });
function drawStar() {
  star.display();
}
function drawPlanets() {
  planets.forEach((p) => {
    let gravity = star.attract(p);
    p.applyForce(gravity);
    p.update();
    p.display();
  });
}
