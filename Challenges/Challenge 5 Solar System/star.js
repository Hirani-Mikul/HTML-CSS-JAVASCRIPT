function Star(x, y, m) {
  this.pos = new Vector(x, y);
  this.G = 5;
  this.mass = m;
  this.r = 20;
}
Star.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(this.pos.x, this.pos.y, this.mass * this.r, 0, Math.PI * 2);
    ctx.fill();
  },
  attract: function (planet) {
    let force = Vector.subtract(this.pos, planet.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    let strength = (this.G * this.mass * planet.mass) / (distance * distance);
    force.mult(strength);
    return force;
  },
};
