var $listsName = $("#listingName");
var $listsScore = $("#listingScore");
var highScore = JSON.parse(localStorage.getItem("highScores")) || [];

function displayHighScore() {
  for (var i = 0; i < highScore.length; i++) {
    var $li = $("<li></li>");
    var $li2 = $("<li></li>");
    $li.text(highScore[i].username);
    $li2.text(highScore[i].score);
    $li2.addClass("lists");
    $li.addClass("lists");
    $listsScore.append($li2);
    $listsName.append($li);
  }
}
displayHighScore();
