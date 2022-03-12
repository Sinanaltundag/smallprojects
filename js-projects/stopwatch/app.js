const minuteText = document.getElementById("minute");
const secondText = document.getElementById("second");
const mSecondText = document.getElementById("mSecond");
const startPauseBtn = document.getElementById("startPause");
const start = document.querySelector(".fa-circle-play");
const stopBtn = document.getElementById("stop");
let ms = 0,
  s = 0,
  m = 0;
let timerInt;

startPauseBtn.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.firstChild.classList.contains("fa-circle-play")) {
    startPauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    timerInt = setInterval(timer, 10);
  } else {
    clearInterval(timerInt);
    startPauseBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
  }
});
stopBtn.addEventListener("click", () => {
  clearInterval(timerInt);
  ms = s = m = 0;
  mSecondText.textContent = ms.toString().padStart(2, "0");
  secondText.textContent = s.toString().padStart(2, "0");
  minuteText.textContent = m.toString().padStart(2, "0");
});

function timer() {
  ms++;
  console.log(ms.toString());
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
  mSecondText.textContent = ms.toString().padStart(2, "0");
  secondText.textContent = s.toString().padStart(2, "0");
  minuteText.textContent = m.toString().padStart(2, "0");
}

/*     setInterval(()=>{
minuteText.innerText=(+(minuteText.innerText)+1).toString().padStart(2, "0") ;

    },60000)
    setInterval(()=>{
secondText.innerText= (+(secondText.innerText)+1).toString().padStart(2, "0");
    },1000) */
