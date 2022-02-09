let countDisplay = document.getElementById("countdown");
let background = document.getElementsByTagName("body")[0];
let birthInput = document.querySelector("[name='birthday']");

let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function ageCalc() {
  let birthday = new Date(birthInput.value);
  let today = new Date();
  let year = today.getFullYear() - birthday.getFullYear();
  let month = today.getMonth() - birthday.getMonth();
  let day = today.getDate() - birthday.getDate();
  let hour = today.getHours() - birthday.getHours();
  let minute = today.getMinutes() - birthday.getMinutes();
  let second = today.getSeconds() - birthday.getSeconds();

  years.innerText = year;
  month > 0
    ? (months.innerText = month)
    : ((months.innerText = month + 12),
      (years.innerText = parseInt(years.innerText) - 1));

  day > 0
    ? (days.innerText = day)
    : ((days.innerText = day + 30),
      (months.innerText = parseInt(months.innerText) - 1));
  hour > 0
    ? (hours.innerText = hour)
    : ((hours.innerText = hour + 24),
      (days.innerText = parseInt(days.innerText) - 1));
  minute > 0
    ? (minutes.innerText = minute)
    : (minute + 60, (hours.innerText = parseInt(hours.innerText) - 1));
  second > 0
    ? (seconds.innerText = second)
    : (second + 60, (minutes.innerText = parseInt(minutes.innerText) - 1));
}

birthInput.addEventListener("input", () => {
  let birthday = new Date(birthInput.value);
  let today = new Date();
  today - birthday < 0 
    ? (alert("Girdiğiniz tarih bugünden sonra olamaz."),
      (countDisplay.style.opacity = 0),
      (birthInput.value = ""))
    : (setInterval(ageCalc, 1000),
      (background.style.backgroundImage = "url(./img/birth2.jpg)"),
      (countDisplay.style.opacity = 1));
});
