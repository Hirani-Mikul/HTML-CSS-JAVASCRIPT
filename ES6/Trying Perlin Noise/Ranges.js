function drawRange(incAmount, hA) {
  for (let i = 0; i < incAmount * width; i += incAmount) {
    let n = noise(i);
    let y = mapNum(n, 0, 1, 0, height / hA);
    let x = (i * 1) / incAmount;
    ctx.beginPath();
    ctx.moveTo(x, height - y);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
}
let zOff = 0;
function drawSky(incAmount) {
  let xOff = 0;
  for (let i = 0; i < 200; i++) {
    let yOff = 0;
    for (let j = 0; j < 200; j++) {
      let colR = mapNum(noise(xOff, yOff), 0, 1, 50, 100);
      let colG = mapNum(noise(xOff, yOff), 0, 1, 50, 200);
      let colB = mapNum(noise(xOff, yOff), 0, 1, 100, 250);
      let bright = mapNum(noise(xOff, yOff, zOff), 0, 1, 0, 250);
      ctx.beginPath();
      ctx.fillStyle = `rgb(${bright}, ${bright}, ${bright})`;
      ctx.arc(i, j, 1, 0, Math.PI * 2);
      ctx.fill();
      yOff += incAmount;
    }
    xOff += incAmount;
  }
  zOff += incAmount;
}
