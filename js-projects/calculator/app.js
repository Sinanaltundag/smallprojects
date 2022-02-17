let operateLine = document.getElementById("op-num");
let resultLine = document.getElementById("result");
let opSpan = document.getElementById("op");
let calculator = document.getElementById("container");
let numbers = document.querySelectorAll(".numbers");

function operate(op) {
  if (resultLine.innerHTML == "") {
    return;
  }
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
    if (op=="=") {
      op=opSpan.innerHTML
    }
    switch (op) {
      case "+":
        operateLine.innerHTML = +operateLine.innerHTML + +resultLine.innerHTML;
        break;
      case "-":
        operateLine.innerHTML = operateLine.innerHTML - resultLine.innerHTML;
        break;
      case "*":
        operateLine.innerHTML = operateLine.innerHTML * resultLine.innerHTML;
        break;
      case "/":
        operateLine.innerHTML = operateLine.innerHTML / resultLine.innerHTML;
        break;
      case "=":
        operateLine.innerHTML = operateLine.innerHTML + resultLine.innerHTML;
        break;
    
    }
    // operateLine.innerHTML = Number(operateLine.innerHTML) + opSpan.innerHTML + Number(resultLine.innerHTML);
    resultLine.innerHTML = "";
    return;
  }
  operateLine.innerHTML = resultLine.innerHTML;
  resultLine.innerHTML = "";
}

calculator.addEventListener("click", (e) => {
  console.log();
if (e.target.tagName==='BUTTON') {
  switch (e.target.id) {
    case "divide":
    case "multiply":
    case "add":
    case "minus":
    case "percent":
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
      resultLine.innerHTML += e.target.innerHTML;
      break;
    case "n0":
      /* if (!resultLine.innerHTML[0]==0&&) {
        resultLine.innerHTML[0]==0
      } */
      resultLine.innerHTML += e.target.innerHTML;
      break;
    case "equal":
      operate("=");
      opSpan.innerHTML = "";
      break;
    case "ac":
      resultLine.innerHTML = opSpan.innerHTML = operateLine.innerHTML = "";
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
    default:
      resultLine.innerHTML += e.target.innerHTML;
      break;
  }
}
  
});

