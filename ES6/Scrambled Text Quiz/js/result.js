const recentScore = localStorage.getItem("recentScore");
const Final_Recent_Score_Text = document.getElementById("final-recent-score");
const username = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");

const High_Score = JSON.parse(localStorage.getItem("high_score")) || [];

const topScore = 5;

Final_Recent_Score_Text.innerText = recentScore;

username.addEventListener("keyup", () => {
  saveBtn.disabled = !username.value.trim();
});

savescore = (e) => {
  e.preventDefault();

  const score = {
    score: parseInt(recentScore),
    username: username.value,
  };
  High_Score.push(score);
  High_Score.sort((a, b) => b.score - a.score);
  High_Score.splice(topScore);
  localStorage.setItem("high_score", JSON.stringify(High_Score));

  username.value = "";
  setTimeout(() => {
    return window.location.assign("../index.html");
  }, 500);
};
