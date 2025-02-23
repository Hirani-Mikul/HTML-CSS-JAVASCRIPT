const grid = document.getElementById('grid');
const cells = Array.from(document.getElementsByClassName('cells'));
const playerSymbolText = document.getElementById('player-symbol');
const computerSymbolText = document.getElementById('computer-symbol');

let SYMBOLS = ['X', 'O'];

let players = ['player', 'computer'];

let playerSymbol;
let computerSymbol;
let computerChoice;

let currentTurn;

let wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function Start() {
  currentTurn = flipCoin();
  getPlayerSymbol();

  if (currentTurn == players[1]) {
    computerTurn();
  }
}

function flipCoin() {
  const turnIndex = Math.floor(Math.random() * players.length);

  return players[turnIndex];
}

function getPlayerSymbol() {
  const availableSYMBOL = [...SYMBOLS];
  const playerSymbolIndex = Math.floor(Math.random() * availableSYMBOL.length);
  playerSymbol = availableSYMBOL[playerSymbolIndex];
  availableSYMBOL.splice(playerSymbolIndex, 1);
  computerSymbol = availableSYMBOL[0];
  playerSymbolText.innerText = playerSymbolText.innerText + ' ' + playerSymbol;
  computerSymbolText.innerText =
    computerSymbolText.innerText + ' ' + computerSymbol;
}

function computerTurn() {
  let availableIndex = [];

  for (i = 0; i < cells.length; i++) {
    if (!cells[i].classList.contains('marked')) {
      availableIndex.push(i);
    }
  }

  if (availableIndex.length < 1) return;

  const cellIndex = Math.floor(Math.random() * availableIndex.length);

  computerChoice = availableIndex[cellIndex];

  cells[computerChoice].innerText = computerSymbol;
  cells[computerChoice].classList.add('marked');

  currentTurn = 'player';
}

function checkForWin() {
  let winner = null;
  let row;
  for (let i = 0; i < wins.length; i++) {
    for (let j = 0; j < wins[i].length; j++) {
      if ((wins[i][j] = 'O')) {
        winner = 'O';
      } else winner = 'X';
    }
  }
  console.log(winner);
}

cells.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    if (currentTurn != players[0]) return;
    if (cell.classList.contains('marked')) return;
    e.target.innerText = playerSymbol;
    cell.classList.add('marked');
    currentTurn = 'computer';
    if (currentTurn == 'computer') {
      setTimeout(() => {
        computerTurn();
      }, 1000);
    }
  });
});
Start();
