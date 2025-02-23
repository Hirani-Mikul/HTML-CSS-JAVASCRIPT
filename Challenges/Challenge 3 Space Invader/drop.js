export default function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.width = 4;
  this.speed = 15;
  this.height = 10;
  this.hasHit = false;
  this.missed = false;
}
Bullet.prototype = {
  display: function () {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
  },
  shoot: function () {
    this.y -= this.speed;
    if (this.y < 0) {
      this.hasHit = true;
    }
  },
  hit: function (star) {
    return (
      this.x - this.width / 2 > star.x - star.size &&
      this.x + this.width / 2 < star.x + star.size &&
      this.y - this.height < star.y + star.size &&
      this.y + this.height > star.y - star.size
    );
  },
};
