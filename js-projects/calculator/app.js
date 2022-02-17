let operateLine = document.getElementById("op-num");
let resultLine = document.getElementById("result");
let opSpan = document.getElementById("op");
let percent = document.getElementById("percent");
let allClear = document.getElementById("ac");
let backspace = document.getElementById("del");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let add = document.getElementById("add");
let minus = document.getElementById("minus");
let equal = document.getElementById("equal");
let numbers = document.querySelectorAll(".numbers");

let numset = [2, "+", 5];
let num1, num2, operator;
let operateInput = "";
numbers.forEach((numButton) =>
  numButton.addEventListener("click", () => {
    resultLine.innerHTML += numButton.innerHTML;
  })
);

// console.log(operate(2,"+",3));
function operate(num1, num2, operator) {
  if (num2) {
    operateLine.innerHTML = eval(num1 + operator + num2);
  }

  operateLine.innerHTML = resultLine.innerHTML;
  opSpan.innerHTML = operator;
  resultLine.innerHTML = "";
}
divide.addEventListener("click", () => {
  num1
    ? (num2 = (resultLine.innerHTML, (num1 = operateLine.innerHTML)))
    : (num1 = resultLine.innerHTML);
  operate(num1, num2, "/");
  num1 = operateLine.innerHTML;
});

multiply.addEventListener("click", () => {
  console.log(num1);
  if (num1) {
    num2 = resultLine.innerHTML;
    console.log(+num2);
    resultLine.innerHTML = +num1 * +num2;
    opSpan.innerHTML = `<i class="fas fa-solid fa-divide"></i>`;
  }
  num1 = resultLine.innerHTML;
  console.log(num1);
  operateLine.innerHTML = resultLine.innerHTML;
  opSpan.innerHTML = `<i class="fas fa-solid fa-asterisk"></i>`;
  resultLine.innerHTML = operateInput = "";
});

equal.addEventListener("click", () => {
  // for (let index = 0; index < numset.length; index++) {
  //     let result = numset[index];
  // }
  // let result= +(numset.join(""))
  // console.log(result);
  // resultLine.innerHTML= 2/1+3*2;
});

allClear.addEventListener("click", () => {
  resultLine.innerHTML =
    opSpan.innerHTML =
    operateLine.innerHTML =
    num1 =
    num2 =
      "";
});
backspace.addEventListener("click", () => {
  if (resultLine.innerHTML) {
    resultLine.innerHTML = resultLine.innerHTML.slice(0, -1);
  }
});
