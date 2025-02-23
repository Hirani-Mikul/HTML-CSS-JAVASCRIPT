const map = document.getElementById('map');
const scale_text = document.getElementById('scale-text');

let styles = getComputedStyle(map);

let width = parseInt(styles.width);
let height = parseInt(styles.height);

let ScrollY = 0;
let cameraSpeed = 10;

let isEngaged = false;
let zoomFactor = 1.01;
let lastPos = { x: 0, y: 0 };

let mouse = {
  x: 0,
  y: 0,
};

let selectedBall = null;
