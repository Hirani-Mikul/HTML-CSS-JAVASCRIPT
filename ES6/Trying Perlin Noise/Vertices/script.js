const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let vert = [];
function draw() {
  requestAnimationFrame(draw);

  // for (let x = 0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     let ny = noise();
  //     ctx.beginPath();
  //     ctx.strokeStyle = "blue";
  //     ctx.moveTo(x, 0);
  //     ctx.lineTo(x + 1, y);
  //     ctx.stroke();
  //   }
  // }
  vert.forEach((obj) => {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(obj.xP, obj.yP);
    ctx.lineTo(obj.xP + 5, obj.yP);
    ctx.stroke();
  });

  terrain2(0.003);
}
terrain();
draw();

function terrain() {
  let yOff = 0;
  for (let x = 0; x < width; x += 5) {
    let y = mapNum(noise(yOff), 0, 1, height, 400);
    vert[x] = { xP: x, yP: y };
    // ctx.beginPath();
    // ctx.strokeStyle = "blue";
    // ctx.moveTo(x, y);
    // ctx.lineTo(x + 1, y);
    // ctx.stroke();
    yOff += 0.005;
  }
}
function terrain2(incAmount) {
  for (let i = 0; i < incAmount * width; i += incAmount) {
    let n = noise(i);
    let y = mapNum(n, 0, 1, height, 300);
    let x = i / incAmount;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(x, y);
    ctx.lineTo(x + 1, y);
    ctx.stroke();
  }
}
