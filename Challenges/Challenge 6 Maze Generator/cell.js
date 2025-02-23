function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.size = w;
  this.visited = false;
  this.walls = [true, true, true, true];
  this.revisited = 0;
}
Cell.prototype = {
  display: function () {
    let x = this.x * this.size;
    let y = this.y * this.size;

    // Top wall
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'white';
    if (this.walls[0]) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + this.size, y);
      ctx.stroke();
    }

    // Right wall
    if (this.walls[1]) {
      ctx.beginPath();
      // ctx.strokeStyle = "yellow";
      ctx.moveTo(x + this.size, y);
      ctx.lineTo(x + this.size, y + this.size);
      ctx.stroke();
    }
    // Bottom wall
    if (this.walls[2]) {
      ctx.beginPath();
      // ctx.strokeStyle = "blue";
      ctx.moveTo(x, y + this.size);
      ctx.lineTo(x + this.size, y + this.size);
      ctx.stroke();
    }
    // Left wall
    if (this.walls[3]) {
      ctx.beginPath();
      // ctx.strokeStyle = "purple";
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + this.size);
      ctx.stroke();
    }
    if (this.visited) {
      if (this.revisited === 1) {
        ctx.fillStyle = 'blue';
      } else if (this.revisited === 2) {
        ctx.fillStyle = 'aqua';
      } else if (this.revisited === 3) {
        ctx.fillStyle = 'red';
      } else {
        ctx.fillStyle = 'green';
      }
      ctx.beginPath();
      ctx.fillRect(x, y, this.size, this.size);
      ctx.fill();
    }
  },
  highlight: function () {
    let x = this.x * this.size;
    let y = this.y * this.size;
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, this.size, this.size);
    ctx.fill();
  },
  index: function (x, y) {
    if (x < 0 || y < 0 || x > rows - 1 || y > cols - 1) {
      return -1;
    }
    return x + y * rows;
  },
  checkNeighbors: function () {
    let neighbors = [];

    let top = Grid[this.index(this.x, this.y - 1)];
    let rigth = Grid[this.index(this.x + 1, this.y)];
    let bottom = Grid[this.index(this.x, this.y + 1)];
    let left = Grid[this.index(this.x - 1, this.y)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (rigth && !rigth.visited) {
      neighbors.push(rigth);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let r = Math.floor(random(0, neighbors.length));
      return neighbors[r];
    }
  },
};
