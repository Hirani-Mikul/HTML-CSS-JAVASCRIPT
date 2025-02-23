class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 0;
    this.speed = 1;
    this.r = scl;
    this.tail = [];
    this.tailLength = 0;
    this.isDead = false;
  }
  move(sx, sy) {
    this.speedX = sx;
    this.speedY = sy;
  }
  eat(food) {
    return (
      this.x + this.r > food.x &&
      this.x < food.x + food.r &&
      this.y + this.r > food.y &&
      this.y < food.y + food.r
    );
  }
  dead() {
    this.tail.forEach((tail) => {
      if (
        this.x + this.r > tail.x &&
        this.x < tail.x + tail.r &&
        this.y + this.r > tail.y &&
        this.y < tail.y + tail.r
      ) {
        this.tailLength = 0;
        this.tail = [];
        this.isDead = true;
      }
    });
  }
  update() {
    if (this.tailLength === this.tail.length) {
      for (let i = 0; i < this.tailLength; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.tailLength - 1] = {
      x: this.x,
      y: this.y,
      r: this.r,
    };
    this.x += this.speedX * scl;
    this.y += this.speedY * scl;
  }
  checkEdges() {
    if (this.x + this.r > width) {
      this.x = 0 - this.r;
    } else if (this.x < 0) {
      this.x = width;
    } else if (this.y + this.r > height) {
      this.y = 0 - this.r;
    } else if (this.y < 0) {
      this.y = height;
    }
  }

  display() {
    this.tail.forEach((tail) => {
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.fillRect(tail.x, tail.y, tail.r, tail.r);
      ctx.strokeRect(tail.x, tail.y, tail.r, tail.r);
      ctx.fill();
    });

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.r, this.r);
    ctx.strokeRect(this.x, this.y, this.r, this.r);
    ctx.fill();
  }
}
