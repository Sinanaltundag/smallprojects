let operateLine = document.getElementById("op-num");
let resultLine = document.getElementById("result");
let opSpan = document.getElementById("op");
let calculator = document.getElementById("container");
let numbers = document.querySelectorAll(".numbers");
let clockTop = document.getElementById("clock");

setInterval(() => {
  const time = new Date();
const [h,m,s] = [time.getHours().toString().padStart(2,"0"), time.getMinutes().toString().padStart(2,"0"), time.getSeconds().toString().padStart(2,"0")] 
clockTop.innerHTML = h + ":" + m +":"+s;
}, 1000);

function operate(op) {
  if (resultLine.innerHTML == "") return;

if (opSpan.innerHTML=="" && operateLine.innerHTML){
         operateLine.innerHTML=resultLine.innerHTML;
      resultLine.innerHTML=""
      return
    }
  if (operateLine.innerHTML) {
    if ((opSpan.innerHTML == "％")) {
      operateLine.innerHTML =
        (operateLine.innerHTML * resultLine.innerHTML) / 100;
      resultLine.innerHTML = "";
      return;
    }
    if (op=="=") op=opSpan.innerHTML;
    
    switch (op) {
      case "+":
        operateLine.innerHTML = +operateLine.innerHTML + +resultLine.innerHTML;
        break;
      case "-":
        operateLine.innerHTML = operateLine.innerHTML - resultLine.innerHTML;
        break;
      case "×":
        operateLine.innerHTML = operateLine.innerHTML * resultLine.innerHTML;
        break;
      case "÷":
        operateLine.innerHTML = (operateLine.innerHTML / resultLine.innerHTML == Infinity || isNaN(operateLine.innerHTML / resultLine.innerHTML))?"Can not use 0 for division.": operateLine.innerHTML / resultLine.innerHTML;
        break;
     
    }

    resultLine.innerHTML = "";
    return;
  }
  operateLine.innerHTML = resultLine.innerHTML;
  resultLine.innerHTML = "";
}

calculator.addEventListener("click", (e) => {
if (e.target.tagName==='BUTTON') {
  switch (e.target.id) {
    case "divide":
    case "multiply":
    case "add":
    case "minus":
    case "percent":
      if (isNaN(+operateLine.innerHTML)) {
        document.getElementById("ac").click();
        return
      }
      if (resultLine.innerHTML.endsWith(".")) {
        resultLine.innerHTML = resultLine.innerHTML.slice(0, -1);
      }
      if (resultLine.innerHTML){
        operate(opSpan.innerHTML);
      }
      
      if (operateLine.innerHTML){
        opSpan.innerHTML = e.target.innerHTML;
      }
      break;
    case "n1":
    case "n2":
    case "n3":
    case "n4":
    case "n5":
    case "n6":
    case "n7":
    case "n8":
    case "n9":
    case "n0":
      if (resultLine.innerHTML==="0" ) {
        resultLine.innerHTML=""
      }
      if (resultLine.innerHTML.length<16) {
        resultLine.innerHTML += e.target.innerHTML;
      }
      break;
    case "equal":
      operate(opSpan.innerHTML);
      opSpan.innerHTML = "";
      break;
    case "ac":
      resultLine.innerHTML = 0
      opSpan.innerHTML = operateLine.innerHTML = "";
      break;
    case "del":
      if (resultLine.innerHTML) {
        resultLine.innerHTML = resultLine.innerHTML.slice(0, -1);
      }
      break;
    case "dot":
      if (resultLine.innerHTML && !resultLine.innerHTML.includes(".")) {
        resultLine.innerHTML += ".";
      }
      break
    }
}
  
});
