const size = 30;
const rows = width / size;
const cols = width / size;
let Grid = [];

for (let j = 0; j < rows; j++) {
  for (let i = 0; i < cols; i++) {
    Grid.push(new Cell(i, j, size));
  }
}
