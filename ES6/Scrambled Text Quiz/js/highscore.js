const listing = document.getElementById("listing");

const High_Score = JSON.parse(localStorage.getItem("high_score")) || [];

listing.innerHTML = High_Score.map((element) => {
  return `<li><span>${element.username}</span><span>${element.score}</span></li>`;
}).join("");
