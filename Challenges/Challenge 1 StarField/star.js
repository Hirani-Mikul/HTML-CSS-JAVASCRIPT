class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.colR = random(255);
    this.colG = random(255);
    this.colB = random(255);
  }
  update() {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.pz = this.z;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }
  show() {
    let sx = mapNum(this.x / this.z, 0, 1, 0, width);
    let sy = mapNum(this.y / this.z, 0, 1, 0, height);

    let px = mapNum(this.x / this.pz, 0, 1, 0, width);

    let py = mapNum(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(sx, sy);
    ctx.stroke();

    let r = mapNum(this.z, 0, width, 10, 0);
    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.colR}, ${this.colG}, ${this.colB})`;
    ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.fill();
  }
}
