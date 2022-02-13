let inputNum = document.getElementById("guess");
let checkButton = document.getElementById("check");
let attemptNum = document.getElementById("attempt");
let upDown = document.getElementById("up-down");

let luckyNum = Math.floor(Math.random() * 100) + 1;
let attempt = 2;
let attempted = [];

function guess(luckyNum) {
  if (attempted.includes(inputNum.value)) {
    upDown.innerHTML = `You guessed ${inputNum.value} number before`;
    inputNum.value = "";
  } else if (inputNum.value > 100 || inputNum.value < 1) {
    upDown.innerHTML = `Your guess must be 1-100`;
    inputNum.value = "";
  } else if (inputNum.value < luckyNum) {
    if (Math.abs(inputNum.value - luckyNum) > 20) {
      upDown.innerHTML = `${inputNum.value} is too small then Lucky Number`;
      refresh();
      return;
    }
    upDown.innerHTML = `${inputNum.value} is smaller then Lucky Number`;
    refresh();
  } else if (inputNum.value > luckyNum) {
    if (Math.abs(inputNum.value - luckyNum) > 20) {
      upDown.innerHTML = `${inputNum.value} is too big then Lucky Number`;
      refresh();
      return;
    }
    upDown.innerHTML = `${inputNum.value} is bigger then Lucky Number`;
    refresh();
  } else {
    finish(1);
  }
}
function finish(fin) {
  upDown.innerHTML = fin
    ? `Congratulations! You find ${inputNum.value}, Lucky Number`
    : (upDown.innerHTML = `Game over!`);
  checkButton.setAttribute("id", "restart");
  let restart = document.getElementById("restart");
  restart.innerHTML = "Restart";
  restart.addEventListener("click", () => {
    window.location.reload();
  });
}
function refresh() {
  attempt--;
  if (attempt == 0) {
    finish();
    attemptNum.innerHTML = attempt;
    attemptNum.style.color = "red";
    return;
  }
  attempted.push(inputNum.value);
  attemptNum.innerHTML = attempt;
  inputNum.value = "";
}
checkButton.addEventListener("click", () => {
  guess(luckyNum);
});
inputNum.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    checkButton.click();
  }
});
