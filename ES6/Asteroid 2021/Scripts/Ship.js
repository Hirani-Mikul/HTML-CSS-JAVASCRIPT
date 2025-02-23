function Ship() {
  this.position = new Vector(300, 300);
  this.vel = new Vector();
  this.acc = new Vector();
  this.angle = 0;
  this.aVel = 0.08;
  this.velLimit = 6;
  this.damping = 0.995;
  this.particles = [];
  this.size = 30;
}

Ship.prototype = {
  display: function () {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);
    let x = (60/100) * this.size;

    // ctx.fillStyle = '#00FFFF';
    ctx.fillStyle = '#313eeb';
    ctx.beginPath();
    ctx.moveTo(this.size, 0);
    ctx.lineTo(-x, -x);
    ctx.lineTo(-x, x);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#db460f';
    ctx.fillRect(-(75/100) * this.size, -(40/100) * this.size, this.size / 6, this.size / 1.3);
    ctx.fill();


    ctx.restore();
  },
  checkEdges: function()
  {
    if (this.position.x - this.size >= width) {
      this.position.x = 0 - this.size;
    } else if (this.position.x + this.size <= 0)
    {
      this.position.x = width + this.size;
    }
    if (this.position.y - this.size >= height) {
      this.position.y = 0 - this.size;
    } else if (this.position.y + this.size <= 0)
    {
      this.position.y = height + this.size;
    }
  },
  thrust: function () {
    let force = new Vector(Math.cos(this.angle), Math.sin(this.angle));

    let offset = force.clone().mult(-(75/100) * this.size);

    force.mult(.2);
    this.applyForce(force);
    
    force.mult(-0.4);
    
    let pos = this.position.clone();
    
    pos.add(offset);

    this.particles.push(new Particle(pos, force));
  },
  applyForce: function (force) {
    let f = force.clone();
    this.acc.add(f);
  },
  update: function () {
    this.vel.add(this.acc);
    this.vel.limit(this.velLimit);
    this.vel.mult(this.damping);
    this.position.add(this.vel);
    this.acc.mult(0);

    for (var i = this.particles.length - 1; i >= 0; i--) {
      let particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
    
  },
  turn: function (dir) {
    this.angle += this.aVel * dir;
  },
};
