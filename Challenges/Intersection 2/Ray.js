function Ray(x, y) {
  this.pos = new Vector(x, y);
  this.dir = new Vector(1, 0);

}
Ray.prototype = {
  display: function() {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(247, 247, 5)";
    ctx.moveTo(0, 0);
    ctx.lineTo(this.dir.x * 30, this.dir.y * 30);
    ctx.stroke();
    ctx.restore();
  },
  lookAt(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;

    this.dir.normalize();
  },
  cast: function(b) {

    let x1 = this.pos.x;
    let y1 = this.pos.y;
    let x2 = this.dir.x + x1;
    let y2 = this.dir.y + y1;
    let lx1 = b.sPos.x;
    let ly1 = b.sPos.y;
    let lx2 = b.ePos.x;
    let ly2 = b.ePos.y;


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