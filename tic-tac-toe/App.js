const container = document.querySelector(".container");
const table = document.querySelector(".table");
let currentBoard = [];
let board = [
  {
    cell: 0,
  },
  {
    cell: 1,
  },
  {
    cell: 2,
  },
  {
    cell: 3,
  },
  {
    cell: 4,
  },
  {
    cell: 5,
  },
  {
    cell: 6,
  },
  {
    cell: 7,
  },
  {
    cell: 8,
  },
];

function setList(activeBoard) {
  let boardSection = activeBoard
    .map((item) => {
      return `<button class="btn">${item.cell}</button>`;
    })
    .join("");

  table.innerHTML = boardSection;
  container.appendChild(table);
}
// setList()
loadList();

function loadList() {
  currentBoard = [...board];
  setList(currentBoard);
}

let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    handleClick(btn, index);
    checkWinner(emptyArr);
  });
});

function handleClick(params, index) {
  console.log(params);
  if (params.innerText === "X" || params.innerText === "O") {
    return;
  }
  if (xO === "X") {
    emptyArr[index] = xO;
    params.innerText = xO;
    setTurn("O");
  } else {
    params.innerText = xO;
    emptyArr[index] = xO;
    setTurn("X");
  }
}
let xO = "X";

function setTurn(str) {
  if (xO === "X") {
    return (xO = str);
  }
  return (xO = str);
}

let emptyArr = Array(9).fill("");
function checkWinner(arr) {
  let line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    console.log(arr[a]);
    if (arr[a] && arr[a] === arr[b] && arr[c] === arr[a]) {
      alert(`winner ${arr[a]}`);

      return arr[a];
    }
  }
}
