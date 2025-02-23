function Ray(x, y) {
  this.x = x;
  this.y = y;
  this.dir = { x: 1, y: 0 };
}
Ray.prototype = {
  display: function() {
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 1;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.dir.x * 20, this.dir.y * 20);
    ctx.stroke();
    ctx.restore();
  },
  lookAt: function(x, y) {
    this.dir.x = x - this.x;
    this.dir.y = y - this.y;

    let len = Math.sqrt(this.dir.x * this.dir.x + this.dir.y * this.dir.y);

    if (len != 0) {
      this.dir.x *= (1 / len);
      this.dir.y *= (1 / len);
    }

  },

  overlaps2: function(boundary) {
    let x = boundary.x; // bx
    let y = boundary.y; // by
    let x2 = boundary.ex; // bx2
    let y2 = boundary.ey; //by2

    let bx = this.x; // x
    let by = this.y; // y
    let bx2 = this.x + this.dir.x; // x2
    let by2 = this.y + this.dir.y; // y2

    let den = (x - x2) * (by - by2) - (y - y2) * (bx - bx2);

    if (den == 0) return null;

    let tnum = (x - bx) * (by - by2) - (y - by) * (bx - bx2);
    let unum = (x - bx) * (y - y2) - (y - by) * (x - x2);

    let t = tnum / den;
    let u = (unum / den);

    if (t > 0 && t < 1 && u > 0)
    {
      let pt = { x: 0, y: 0 };
      pt.x = x + t * (x2 - x);
      pt.y = y + t * (y2 - y);
      return pt;

    } else return null;
    // console.log();
  },
  overlaps: function(walls) {

    let closest = null;
    
    for (let b of walls)
    {
      let x = b.x;
      let y = b.y;
      let x2 = b.ex;
      let y2 = b.ey;

      let bx = this.x; // x
      let by = this.y; // y
      let bx2 = this.x + this.dir.x; // x2
      let by2 = this.y + this.dir.y; // y2

      let den = (x - x2) * (by - by2) - (y - y2) * (bx - bx2);

    if (den == 0) return null;

    let tnum = (x - bx) * (by - by2) - (y - by) * (bx - bx2);
    let unum = (x - bx) * (y - y2) - (y - by) * (x - x2);

    let t = tnum / den;
    let u = (unum / den);

    if (t > 0 && t < 1 && u > 0)
    {
      let pt = { x: 0, y: 0 };
      pt.x = x + t * (x2 - x);
      pt.y = y + t * (y2 - y);
      return pt;

    } else return null;

    }

    
    // console.log();
  }
}