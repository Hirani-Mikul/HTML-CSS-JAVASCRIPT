const FPS = 10
const frameRate = (1000 / 60) * (60 / FPS) - (1000 / 60) * .5

let lastTime = 0

let cell = new Cell(300, 300, 30)

const loop = (timeStamp) => {
  if (timeStamp - lastTime < frameRate) {
    requestAnimationFrame(loop)
    return
  }
  lastTime = timeStamp
  requestAnimationFrame(loop)
  clear()
  cell.display()

}
requestAnimationFrame(loop)
