var $username = $("#username");
var $saveBtn = $("#saveBtn");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var $finalScore = $("#final-score");
var highScore = JSON.parse(localStorage.getItem("highScores")) || [];

var MAX_HIGHSCORE = 5;
var $playAgainBtn = $("#play-again-btn");
var $homeBtn = $("#homeBtn");

$finalScore.text(mostRecentScore);
$username.on("keyup", function () {
  $saveBtn.attr("disabled", !$username.val());
});
function saveHighScore(e) {
  e.preventDefault();
  const score = {
    score: parseInt(mostRecentScore),
    username: $username.val(),
  };
  highScore.push(score);

  highScore.sort(function (a, b) {
    return b.score - a.score;
  });
  highScore.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScore));
  $username.val("");
  setTimeout(function () {
    return window.location.assign("index.html");
  }, 1000);
}
$playAgainBtn.on("click", function () {
  return window.location.assign("game.html");
});
$homeBtn.on("click", function () {
  return window.location.assign("index.html");
});
