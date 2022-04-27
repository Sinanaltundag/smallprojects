let scoreToWin = document.getElementById("score-to-win");
let addScoreButton = document.querySelectorAll(".add")[0];
let addScoreButton2 = document.querySelectorAll(".add")[1];
let winner = document.querySelector(".winner");
let reset = document.getElementById("reset");
let score = [0, 0];
let scores = document.querySelectorAll(".player");
console.log(scores);
function addScore(playerNum) {
  let scoreTable = document.querySelectorAll(".player")[playerNum];
  score[playerNum] += 1;
  scoreTable.innerHTML = score[playerNum];
  console.log(score);

  if (score[playerNum] == scoreToWin.value) {
    winner.innerHTML = `Player ${playerNum + 1} win!`;
    scoreTable.style.color = "yellow";
    addScoreButton.disabled = true;
    addScoreButton2.disabled = true;
  }
}
addScoreButton.addEventListener("click", () => {
  addScore(0);
});
addScoreButton2.addEventListener("click", () => {
  addScore(1);
});
reset.addEventListener("click", () => {
  score = [0, 0];
  for (let index = 0; index < 2; index++) {
    scores[index].style.color = "white";
    scores[index].innerHTML=0;
  }
  addScoreButton.disabled = false;
  addScoreButton2.disabled = false;
  winner.innerHTML = "";
});
