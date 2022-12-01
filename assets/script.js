// Countdown clock
var showScoresBtn = document.querySelector("#showScores");
var userName;
var getLeaderboard = () => {
  console.log("Hello There");
  let currentScores = JSON.parse(localStorage.getItem("scores"));
  currentScores.forEach((s) => {
    let scoreEl = document.createElement("p");
    scoreEl.innerHTML = `${s.name}: ${s.score}`;
    scoreEl.setAttribute("style", "color: white");
    document.getElementById("results").append(scoreEl);
  });
};

showScoresBtn.addEventListener("click", getLeaderboard);
