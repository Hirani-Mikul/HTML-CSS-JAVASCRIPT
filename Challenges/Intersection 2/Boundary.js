function Boundary(x, y, x2, y2)
{
  this.sPos = new Vector(x, y);
  this.ePos = new Vector(x2, y2);
}
Boundary.prototype = {
  display: function() {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(this.sPos.x, this.sPos.y);
    ctx.lineTo(this.ePos.x, this.ePos.y);
    ctx.stroke();
  }
}

