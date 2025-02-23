function getRandomNum(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.random() * (max - min) + min;
}

function round(num) {
  let m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}
