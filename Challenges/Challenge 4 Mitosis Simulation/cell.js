function Cell(pos, r, red, green, blue) {
  if (pos) {
    this.position = pos.clone();
  } else {
    this.position = new Vector(random(width), random(height));
  }
  this.size = r || 30;
  this.hasSplit = false;
  this.colR = red || random(255);
  this.colG = green || random(255);
  this.colB = blue || random(255);
}
Cell.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.colR}, ${this.colG}, ${this.colB})`;
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  },
  mitosis: function () {
    let r = this.colR;
    let g = this.colG;
    let b = this.colB;
    this.position.x += this.size;
    let cell = new Cell(this.position, this.size / 2, r, g, b);
    return cell;
  },
  move: function () {
    let velocity = Vector.random2D();
    velocity.mult(2);
    velocity.limit(5);
    this.position.add(velocity);
  },
  inside: function (mx, my) {
    let d = dist(this.position.x, this.position.y, mx, my);
    return d < this.size;
  },
  checkEdges: function () {
    if (
      this.position.x + this.size > width ||
      this.position.x - this.size < 0
    ) {
      this.position.set(random(width), random(height));
    }
    if (
      this.position.y + this.size > height ||
      this.position.y - this.size < 0
    ) {
      this.position.set(random(width), random(height));
    }
  },
};
