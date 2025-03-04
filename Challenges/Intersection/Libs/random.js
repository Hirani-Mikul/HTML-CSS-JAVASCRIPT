function getRandomNum(min, max) {
  let rand = Math.random();
  if (typeof min === "undefined") {
    return rand;
  } else if (typeof max === "undefined") {
    if (min instanceof Array) {
      return min[Math.floor(rand * min.length)];
    } else {
      return rand * min;
    }
  } else {
    if (min > max) {
      const tmp = min;
      min = max;
      max = tmp;
    }
    return Math.random() * (max - min) + min;
  }
  // min = Math.ceil(min);
  // max = Math.floor(max);
}
