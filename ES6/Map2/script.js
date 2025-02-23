
const scale_text = document.getElementById('scale');
const map = document.getElementById('map');
const entity = document.getElementById('entity');

let lastScrollTop = 0;
let result = 0;
let scale = 1;

let keys = [];
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);``
function keyDownHandler(e) {
  keys[e.keyCode] = true;

  const styles = getComputedStyle(map);
  const mapwidth = parseInt(styles.width);
  const mapheight = parseInt(styles.height);
  const mapscale = parseInt(map.style.transform);
  if (keys[90])
  {
    console.log(mapscale);
    scale = 1.05;
    // map.style = `width: ${mapwidth * scale}px; height: ${mapheight * scale}px`;
    map.style = `transform: scale(${scale})`;
    // map.style.width = ;
  }
  if (keys[88])
  {
    scale = 0.95;
    // map.style = `width: ${mapwidth * scale}px; height: ${mapheight * scale}px`;
    map.style = `transform: scale(${1 * scale})`;
  }

}
function keyUpHandler(e) {
  keys[e.keyCode] = false;
}

// z = 90
// x = 88