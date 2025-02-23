function Asteroid(x, y, r = 40) {
  this.pos = new Vector(x, y);
  this.vel = Vector.random2D();
  this.angle = 0;
  this.aVel = random(-0.005, 0.005);
  this.isHit = false;
  this.r = r;
  this.vertices = 20;
  this.model = [];

  this.create();
}
Asteroid.prototype = {
    
    create: function() {
      this.vertices = Math.floor(random(15, 20));
        for (let i = 0; i < this.vertices; i++)
        {
            let angle = (i / this.vertices) * Math.PI * 2;
            let radius = random(0, 1) * 0.4 + 0.8;
            let x = radius * Math.sin(angle);
            let y = radius * Math.cos(angle);
            this.model.push({x: x, y: y});
        }
    },

  display: function () {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.angle);
    
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    for (let i = 0; i < this.model.length; i++)
    {
        ctx.lineTo(this.model[i].x * this.r, this.model[i].y * this.r);
    }
    ctx.closePath();
    ctx.stroke();

    this.angle += this.aVel;
    ctx.restore();
  },
  update: function () {
    this.pos.add(this.vel);
  },
  checkCollision: function(x, y)
  {
    return (
      Math.sqrt((this.pos.x - x) * (this.pos.x - x) + (this.pos.y - y) * (this.pos.y - y)) < this.r
    );
  },
  checkEdges: function () {
    if (this.pos.x - this.r > width)
    {
      this.pos.x = 0 - this.r;
    } else if (this.pos.x + this.r < 0)
    {
      this.pos.x = width + this.r;
    }
    if (this.pos.y - this.r > height)
    {
      this.pos.y = 0 - this.r;
    } else if (this.pos.y + this.r < 0)
    {
      this.pos.y = width + this.r;
    }
  },
};
