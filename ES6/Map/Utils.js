
window.addEventListener('resize', (e) => {

  styles = getComputedStyle(map);
  width = parseInt(styles.width);
  height = parseInt(styles.height);
})

map.addEventListener('wheel', (e) => {
  ScrollY = e.deltaY;
})

map.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
})
map.addEventListener('mousedown', handleMouseDown)
map.addEventListener('mouseup', handleMouseUp)

function clear()
{
  map.innerHTML = '';
}

function handleMouseDown(e) {

  lastPos = { x: mouse.x, y: mouse.y };
  isEngaged = true;
}
function handleMouseUp(e) {
  isEngaged = false;
}
