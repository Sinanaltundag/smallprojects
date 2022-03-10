const movieSelector = document.getElementById("movie");
const seatContainer = document.querySelector(".container");

const selectedSeatsCount = document.getElementById("count");
const selectedFilm = document.getElementById("film");
const totalCost = document.getElementById("total");
const seats = document.querySelectorAll(".container .seat");

let movieObj = {
  selectSeats: [],
  selectFilm: "",
};

if (localStorage.getItem("movieobj")) {
  movieObj = JSON.parse(localStorage.getItem("movieobj"));
  movieSelector.selectedIndex=movieObj.selectFilm
  selectedFilm.textContent = movieSelector.options[movieSelector.selectedIndex].text.split("(")[0];
  selectedSeatsCount.textContent = movieObj.selectSeats.length
  setDescText();
  seats.forEach((seat, i) => {
    if (movieObj.selectSeats.includes(i)) {
      seat.classList.toggle("selected");
    }
  });
} else {
  selectedFilm.textContent =
  movieSelector.options[movieSelector.selectedIndex].text.split("(")[0];
}
seatContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat")) {
    if (e.target.classList.contains("occupied")) {
      return "This seat is occupied";
    } else {
      e.target.classList.toggle("selected");
    }
  }

  movieObj.selectSeats = calcSelected();

  selectedSeatsCount.textContent = [...seats].filter((seat) => {
    return seat.classList.contains("selected");
  }).length;
  setDescText();
});

movieSelector.addEventListener("change", () => {
  selectedFilm.textContent = 
  movieSelector.options[movieSelector.selectedIndex].text.split("(")[0];
  movieObj.selectFilm = movieSelector.selectedIndex
  setDescText();
});

function calcSelected() {
  temp = [];
  [...seats].forEach((seat) => {
    if (seat.classList.contains("selected")) {
      temp.push([...seats].indexOf(seat));
    }
  });
  return temp;
}
function setDescText() {
  totalCost.textContent = movieSelector.value * movieObj.selectSeats.length;
  addLocal();
}
function addLocal() {
  localStorage.setItem("movieobj", JSON.stringify(movieObj));
}
