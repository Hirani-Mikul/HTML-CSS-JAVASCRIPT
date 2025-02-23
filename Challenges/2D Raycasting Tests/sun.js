function Sun(x, y, r) {
  this.x = x;
  this.y = y;
  this.intensity = 1;
  this.rayLength = 200;
  this.numOfRays = 20;
  this.rays = new Array(this.numOfRays);
  this.ray = null;
}
Sun.prototype = {
  create: function() {
    this.ray = new Ray(this.x, this.y, this.rayLength);
  },
  update: function() {
    this.ray.display();

  },
  lookAt: function(x, y) { 
    this.ray.lookAt(x, y);
   },
  cast2: function(boundary) {
    let pt = this.ray.overlaps(boundary);

    if (pt)
    {
     ctx.save(); 
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(pt.x, pt.y, 5, 0, 2 * Math.PI, false);
      ctx.fill();

      ctx.restore();
    }
  },
  cast: function(walls) {
    let pt = this.ray.overlaps(walls);

    if (pt)
    {
     ctx.save(); 
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(pt.x, pt.y, 5, 0, 2 * Math.PI, false);
      ctx.fill();

      ctx.restore();
    }
  }
}
