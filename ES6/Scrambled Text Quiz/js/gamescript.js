const scrambleText = document.getElementById("scrambleText");
const userInput = document.getElementById("userText");
const checkBtn = document.getElementById("checkBtn");
const scoreText = document.getElementById("score");
const skipBtn = document.getElementById("skip");
const message = document.getElementById("msg");
const correct_answer_text = document.getElementById("correct-answer");
const levelTxt = document.getElementById("level");
const gameMode = document.getElementById("gameMode");

const Max_Words = 5;
let wordCounter = 0;
let wordList;
let availableWords = [];
let currentWord = {};
let acceptingAnswer = false;
let score = 0;
let acceptSkipping = false;
fetch("../wordlist.txt")
  .then((res) => {
    return res.text();
  })
  .then((word) => {
    const words = Array.from(word.split("\r\n"));
    wordList = [...words];
    startGame();
  });

userInput.addEventListener("keyup", () => {
  checkBtn.disabled = !userInput.value.trim();
});

disableBtn = () => {
  checkBtn.disabled = "true";
  userInput.value = "";
};

checkAnswer = (e) => {
  e.preventDefault();
  if (!acceptingAnswer) return;
  acceptingAnswer = false;

  const output = userInput.value === currentWord.word ? "correct" : "wrong";

  setTimeout(() => {
    if (output === "correct") {
      updateScore();
    }
  }, 300);

  setTimeout(() => {
    disableBtn();
    getNewWord();
  }, 1000);
};
skipBtn.addEventListener("click", () => {
  if (!acceptSkipping) return;
  acceptSkipping = false;

  correct_answer_text.innerText = currentWord.word;

  message.classList.remove("hidden");
  setTimeout(() => {
    message.classList.add("hidden");
    getNewWord();
  }, 2000);
});

startGame = () => {
  availableWords = [...wordList];
  getNewWord();
};

scrambleWord = (str) => {
  if (typeof str != "string") return;
  var word = str.split("");
  var counter = word.length;
  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;
    var temp = word[counter];
    word[counter] = word[index];
    word[index] = temp;
  }

  return word.join("");
};

getNewWord = () => {
  if (availableWords.length === 0 || wordCounter > wordList.length) {
    localStorage.setItem("recentScore", score);
    return window.location.assign("../html/result.html");
  }
  wordCounter++;

  levelTxt.innerText = `Level ${wordCounter}`;
  gameMode.innerText = `Pro`;

  const wordIndex = Math.floor(Math.random() * availableWords.length);
  var scrambledWord = scrambleWord(availableWords[wordIndex]);
  currentWord = {
    word: availableWords[wordIndex],
    jumbledWord: scrambledWord,
  };
  scrambleText.innerText = currentWord.jumbledWord;

  availableWords.splice(wordIndex, 1);
  acceptingAnswer = true;
  acceptSkipping = true;
};

updateScore = () => {
  score += 10;
  scoreText.innerText = score;
};

/*
..........FOR TESTING.........
  ...........FOR SPLICING THE EMPTY STRING (UNICODE === 13 --- NEW LINE OR CARRIAGE) FROM THE ARRAY......  
  word = word.splice(0, word.length - 1);
  console.log(str.charCodeAt(str.length - 1));


  ...........IMPORTING WORDLIST FROM LOCAL STORAGE......
  var client = new XMLHttpRequest();
  client.open("Get", "../wordlist.txt");
  client.onreadystatechange = () => {
    const data = Array.from(client.responseText.split("\r\n"));
    wordList = [...data];
    console.log(wordList);
  };
  client.send();

*/
