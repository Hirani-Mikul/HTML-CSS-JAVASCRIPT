function Line(x, y, x2, y2)
{
  this.sPos = new Vector(x, y);
  this.ePos = new Vector(x2, y2);
}
Line.prototype = {
  display: function() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(this.sPos.x, this.sPos.y);
    ctx.lineTo(this.ePos.x, this.ePos.y);
    ctx.stroke();

    this.mark(this.sPos.x, this.sPos.y, 'black');
    this.mark(this.ePos.x, this.ePos.y, 'black');
  },
  mark: function(x, y, col) {
    ctx.beginPath();
    ctx.fillStyle = col;
    ctx.strokeStyle = 'yellow';
    ctx.arc(x, y, 5, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
  },
  intersect: function(l) {
    // Find the slope
    // y = mx + c
    let x1 = this.sPos.x;
    let y1 = this.sPos.y;
    let x2 = this.ePos.x;
    let y2 = this.ePos.y;
    let lx1 = l.sPos.x;
    let ly1 = l.sPos.y;
    let lx2 = l.ePos.x;
    let ly2 = l.ePos.y;

    // USING STANDARD FORMULA
    // Ax + By = C

    // A = y2 - y1
    // B = x1 - x2
    // C = Ax1 + By1

    // Standard formula for this line


    let A_1 = y2 - y1,
        B_1 = x1 - x2,
        C_1 = A_1 * x1 + B_1 * y1;

    let A_2 = ly2 - ly1,
    B_2 = lx1 - lx2,
    C_2 = A_2 * lx1 + B_2 * ly1;

    let den = (A_1 * B_2) - (A_2 * B_1);

    if (den == 0) return null;

    let px = (B_2 * C_1 - B_1 * C_2) / den;
    let py = (A_1 * C_2 - A_2 * C_1) / den;


    return { x: px, y: py };

  }
}

