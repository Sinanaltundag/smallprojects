let inputNum = document.getElementById("input-num");
let button = document.getElementById("button");
let listBox = document.querySelector(".list-box");

button.addEventListener("click", () => {
  while (listBox.hasChildNodes()) {
    listBox.removeChild(listBox.firstChild);
  }
  let n = inputNum.value;
  if (n < 1 || n > 8 || n == "") {
    alert("Enter a number between 1-8");
    return;
  }

  for (let i = 0; i < n; i++) {
    let rand = Math.floor(Math.random() * 100)+1;
    let luckyNumberList = [];

    while (luckyNumberList.length < 6) {
      rand = Math.floor(Math.random() * 100 )+ 1;
      if (!luckyNumberList.includes(rand)) {
        luckyNumberList.push(rand);
      }
    }
    luckyNumberList.sort(function (a, b) {
      return a - b;
    });
    while (luckyNumberList.length < 7) {
      rand = Math.floor(Math.random() * 100 )+ 1;
      if (!luckyNumberList.includes(rand)) {
        luckyNumberList.push(rand);
      }
    }
    rand = Math.floor(Math.random() * 100) + 1;
    luckyNumberList.push(rand);
    let list = document.createElement("p");
    list.innerText =
      luckyNumberList.slice(0, 6).join(" , ") +
      " | " +
      luckyNumberList[6] +
      " | **" +
      luckyNumberList[7] +
      "**";
    listBox.appendChild(list);
  }
});

