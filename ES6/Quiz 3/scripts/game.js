const question = document.getElementById("question");
const choicesEl = Array.from(document.getElementsByClassName("choice-text"));
const totalTime = document.getElementById("total-time");
const countDownEl = document.getElementById("countdown-timer");
const countDownAreaEl = document.getElementById("countdown-area");

const scoreEl = document.getElementById("score");

const hintEl = document.getElementById("hint");
const hintAreaEl = document.getElementById("hint-area");

const hintBtn = document.getElementById("hint-btn");

const lifeLineBtn = document.getElementById("lifelineBtn");

let availableQuestion = [...Questions];
let currentQuestion = {};
let acceptAnswer = false;
let interval;
let countDownInterval;
let currentTime = 0;
let time = 0;
let offSet;
const maxTime = 1; // Time left in minutes
let timeLeft = maxTime * 59; // Time Left in Seconds

let wrongOptions = [];

let score = 0;

let bonusScore = 10;

let showHint = false;

startGame = () => {
  getQuestion();
  calculateTime();
  calculateTimeLeft();
};

function calculateTimeLeft() {
  countDownInterval = setInterval(updateCountDownTime, 1000);
}

function skipQuestion() {
  getQuestion();
}

function resetCountDownTime() {
  timeLeft = maxTime * 59;
}

function updateCountDownTime() {
  // const minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft);

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countDownEl.innerHTML = seconds + "s";

  if (seconds <= 0) skipQuestion();

  timeLeft--;
}

function calculateTime() {
  interval = setInterval(updateTime, 1000);
  offSet = Date.now();
}
function updateTime() {
  time += getDeltaTime();
  let formattedTime = formatTime(time);
  totalTime.innerHTML = formattedTime;
}
function getDeltaTime() {
  let now = Date.now();
  let timePassed = now - offSet;
  offSet = now;
  return timePassed;
}
function formatTime(timeInSec) {
  let time = new Date(timeInSec);
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  // let hour = time.getHours().toString();

  // if (hour.length < 2) hour = "0" + hour;
  if (minutes.length < 2) minutes = "0" + minutes;
  if (seconds.length < 2) seconds = "0" + seconds;

  return `${minutes} : ${seconds}`;
}

function getQuestion() {
  if (!availableQuestion.length) {
    clearInterval(countDownInterval);
    clearInterval(interval);
    // return;
    return window.location.assign("result.html");
  }

  if (showHint) showTimerArea();
  removeLifeLineStyle();

  let questionIndex = Math.floor(Math.random() * availableQuestion.length);

  currentQuestion = availableQuestion[questionIndex];

  question.innerHTML = currentQuestion.Question;

  choicesEl.map((choice, i) => {
    if (currentQuestion.options[i] == undefined)
      choice.innerHTML = "Not Given..";
    else choice.innerHTML = currentQuestion.options[i];
  });

  resetCountDownTime();

  acceptAnswer = true;

  availableQuestion.splice(questionIndex, 1);
}
choicesEl.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptAnswer) return;
    acceptAnswer = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const output =
      selectedAnswer == currentQuestion.answer ? "correct" : "wrong";

    selectedChoice.parentElement.classList.add(output);

    getCorrectChoice(output);

    setTimeout(() => {
      updateScore(output);
      selectedChoice.parentElement.classList.remove(output);
      getQuestion();
    }, 1000);
  });
});

function getCorrectChoice(result) {
  let correctChoice = choicesEl.filter((choice) => {
    return choice.dataset.number == currentQuestion.answer;
  });

  if (result === "wrong") {
    correctChoice[0].parentElement.classList.add("show-correct");

    setTimeout(() => {
      correctChoice[0].parentElement.classList.remove("show-correct");
    }, 1000);
  }
}

function provideHint() {
  showHintArea();

  hintEl.innerHTML = currentQuestion.hint;

  setTimeout(() => {
    showTimerArea();
  }, 4000);
}

function showTimerArea() {
  countDownAreaEl.classList.remove("hidden");
  hintAreaEl.classList.add("hidden");

  showHint = false;
}
function showHintArea() {
  showHint = true;

  countDownAreaEl.classList.add("hidden");
  hintAreaEl.classList.remove("hidden");
}

function updateScore(result) {
  if (result === "correct") {
    score += bonusScore;
    scoreEl.innerHTML = "Score: " + score;
  } else return;
}

hintBtn.addEventListener("click", () => {
  provideHint();
});
lifeLineBtn.addEventListener("click", () => {
  halfTheOptions();
});

function halfTheOptions() {
  let wrongChoices = currentQuestion.lifeLine;
  choicesEl.forEach((choice) => {
    wrongChoices.forEach((opt) => {
      if (parseInt(choice.dataset.number) == opt) {
        choice.parentElement.classList.add("denied-option");
        wrongOptions.push(choice);
      }
    });
  });
}

function removeLifeLineStyle() {
  wrongOptions.forEach((opt) => {
    opt.parentElement.classList.remove("denied-option");
  });
}

startGame();
