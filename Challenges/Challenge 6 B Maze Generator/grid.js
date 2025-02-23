const size = 30
const rows = width / size
const cols = height / size

let Grid = []

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {

  }
}
function Cell (x, y, w) {
  this.x = x
  this.y = y
  this.size = w
}

Cell.prototype = {
  display: function () {
    // let x = this.x * this.size;
    // let y = this.y * this.size;
    let x = this.x
    let y = this.y

    ctx.beginPath()
    // ctx.lineWidth = 3
    ctx.moveTo(x, y)
    ctx.lineTo(x + this.size, y)
    ctx.strokeStyle = "red"
    ctx.stroke()

  },
}
