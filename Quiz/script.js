var $answer = $("#ask");
var $options = $("#ask option");
var $getForm = $("#quiz-section form");
var questionTxt = $("#questionTxt");
var currentQuestionAns;
var currentQuestion = 0;
var bonus = 10;
var $score = $("#score h1");
var score = 0;
var $updateQuestionTxt = $("#hud-items p");
var $updateProgressBarFull = $("#progressBarFull");

var $subBtn = $("#submit");

var $response = $("#questionResponse");

$("#next").on("click", function () {
  if (currentQuestion < Questions.length && currentQuestionAns[0].Marked) {
    prevNextQuestion(1);
  } else {
    prevNextQuestion(0);
  }
});
$("#prev").on("click", function () {
  if (currentQuestion > 0) {
    prevNextQuestion(-1);
  } else {
    prevNextQuestion(0);
  }
});

function shuffleQuestions(array) {
  var counter = array.length;
  while (counter > 0) {
    var ind = Math.floor(Math.random() * counter);
    counter--;
    var temp = array[counter];
    array[counter] = array[ind];
    array[ind] = temp;
  }
}
shuffleQuestions(Questions);
function changeQuestions() {
  $answer.prop("selectedIndex", 0);
  var Que = Questions[currentQuestion];
  currentQuestionAns = Que;
  var currentQue = Que[0];
  var getQuestion = currentQue.Q;
  for (var j = 0; j < currentQue.options.length; j++) {
    var queOptions = currentQue.options[j];
    $options[j].textContent = queOptions;
    $options[j].value = queOptions;
  }
  questionTxt.text(currentQuestion + 1 + ": " + getQuestion);
}
function prevNextQuestion(dir) {
  currentQuestion += dir;
  nextQuestion();
}
function nextQuestion() {
  $subBtn.attr("disabled", false);
  $response.removeClass();
  $response.addClass("neutral");
  if (currentQuestion >= Questions.length) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("result.html");
  } else if (currentQuestion >= 0) {
    changeQuestions();
  }
}
function calculateScore() {
  score += bonus;
  $score.html(score);
}
function updateQuestionBar() {
  var queTxt = currentQuestion + 1 + "/" + Questions.length;
  $updateQuestionTxt.html("Question: " + queTxt);
  var currentProgress = ((currentQuestion + 1) / Questions.length) * 100;
  $updateProgressBarFull.css({
    width: currentProgress + "%",
  });
}
updateQuestionBar();
function checkAnswers() {
  var answer = $answer.val();
  if (answer === currentQuestionAns[0].Answer) {
    $response.removeClass();
    $response.addClass("correct");
  } else {
    $response.removeClass();
    $response.addClass("wrong");
  }
  currentQuestionAns[0].Marked = true;
  currentQuestion++;
  setTimeout(function () {
    if (answer === currentQuestionAns[0].Answer) {
      calculateScore();
    }
    nextQuestion();
    updateQuestionBar();
  }, 1000);
  //}
}
nextQuestion();
$getForm.on("submit", function (e) {
  e.preventDefault();
  checkAnswers();
  $subBtn.attr("disabled", true);
});
