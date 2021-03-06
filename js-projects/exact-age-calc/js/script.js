let countDisplay = document.getElementById("countdown");
let background = document.getElementsByTagName("body")[0];
let birthInput = document.querySelector("[name='birthday']");
let selectText = document.getElementsByTagName("label")[0];

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

  if (second < 0) {
    minute--;
    second += 60;
  }
  if (minute < 0) {
    hour--;
    minute += 60;
  }
  if (hour < 0) {
    day--;
    hour += 24;
  }
  if (month < 0) {
    year--;
    month += 12;
  }
  if (day < 0) {
    month--;
    console.log(month);
    switch (month) {
      case 4:
      case 6:
      case 9:
      case 11:
        day += 30;
        console.log(day);
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day += 31;
        console.log(day);
        break;
      case 2:
        day += 28;
        break;
    }
  }

  

  isNaN(year) || birthday.getFullYear() < 1000
    ? (countDisplay.style.opacity = 0)
    : (years.innerText = year.toString().padStart(2, "0"));
  months.innerText = month.toString().padStart(2, "0");
  days.innerText = day.toString().padStart(2, "0");
  hours.innerText = hour.toString().padStart(2, "0");
  minutes.innerText = minute.toString().padStart(2, "0");
  seconds.innerText = second.toString().padStart(2, "0");
}
birthInput.addEventListener("input", () => {
  let birthday = new Date(birthInput.value);
  let today = new Date();
  today - birthday < 0
    ? (alert("Girdi??iniz tarih bug??nden sonra olamaz."),
      (countDisplay.style.opacity = 0),
      (birthInput.value = ""))
    : (setInterval(ageCalc, 1000),
      (background.style.backgroundImage = "url(./img/birth2.jpg)"),
      (countDisplay.style.opacity = 1));
});
