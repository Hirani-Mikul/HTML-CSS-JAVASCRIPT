function Sun(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.intensity = 1;
  this.rayLength = 7;
  this.numOfRays = 20;
  this.rays = new Array(this.numOfRays);
  this.create();
}
Sun.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fill();
  },

  create: function() {
    for (let i = 0; i < this.rays.length; i++)
    {

      let angle = i / this.rays.length * (Math.PI * 2);
      let sx = this.r * Math.sin(angle);
      let sy = this.r * Math.cos(angle);

      this.rays[i] = { 
        sx: sx,
        sy: sy,
        ex: sx * this.rayLength,
        ey: sy * this.rayLength 
      };
    }
  },
  cast: function() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.strokeStyle = 'rgb(245, 208, 2)';
    ctx.lineWidth = 3;

    for (let i = 0; i < this.rays.length; i++)
    {
      let r = this.rays[i];
      ctx.beginPath();
      ctx.moveTo(r.sx, r.sy);
      ctx.lineTo(r.ex, r.ey);
      ctx.stroke();
    }

    ctx.restore();
  },
  overlaps: function(wall) {
    // Check if the end point of the line(rays) touches the boundary
    // Loop through each rays
    let index = 0;
    for (let i = 0; i < this.rays.length; i++) {
      let r = this.rays[i];
      let rx = this.rays[i].ex + this.x;
      let ry = this.rays[i].ey + this.y;
      let nx = r.ex;
      let ny = r.ey;
      if (rx > wall.x && rx < wall.x + wall.w && ry > wall.y && ry < wall.y + wall.h)
      {
        // Change the end point of the ray to be the point where it hits the wall.

        // Find the overlap length of the ray
        
        // nx = r.ex;
        // ny = r.ey;
        // this.rays[i].ex--;
        // this.rays[i].ey--;
        // index = i;
      }
    }
  }
}








// cast: function() { 
//   ctx.save();
//   ctx.translate(this.x, this.y);

//   // const gradient = ctx.createLinearGradient(20, 0, 220, 0);

//   // gradient.addColorStop(0, 'rgb(245, 208, 2)');
//   // gradient.addColorStop(0.5, "rgb(247, 219, 64)");
//   // gradient.addColorStop(1, "rgb(245, 245, 181)");
//   // ctx.strokeStyle = gradient;
//   ctx.strokeStyle = 'rgb(245, 208, 2)';
//   ctx.lineWidth = 3;

//   for (let i = 0; i < this.rays.length; i++)
//   {

//     let angle = i / this.rays.length * (Math.PI * 2);
//     ctx.beginPath();
//     ctx.moveTo(this.r * Math.sin(angle), this.r * Math.cos(angle));
//     ctx.lineTo(this.r * Math.sin(angle) * this.rayLength, this.r * Math.cos(angle) * this.rayLength);
//     ctx.stroke();

//     let sx = this.r * Math.sin(angle);
//     let sy = this.r * Math.cos(angle);

//     this.rays[i] = { 
//       sx: sx,
//       sy: sy,
//       ex: sx * this.rayLength,
//       ey: sy * this.rayLength 
//     };
//   }

//   ctx.restore();
// }, 