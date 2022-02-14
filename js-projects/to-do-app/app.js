let add = document.getElementById("add-button");
let newInput = document.getElementById("add");
let ulList = document.getElementsByTagName("ul")[0];
let todoDiv = document.getElementById("todo");
let lists = document.querySelectorAll(".list");
lists.forEach(check);
eraser();
add.addEventListener("click", () => {
  if (newInput.value.trim()) {
    ulList.innerHTML += `<li class="flex list"><i class="fas fa-check"></i><input type="text" class="todo-list" value="${newInput.value}" disabled /><button class="erase"><i class="fas fa-minus"></i></button></li>`;
    newInput.value = "";
    eraser();
    lists = document.querySelectorAll(".list");
    lists.forEach(check);
  }
});

function check(list) {
  function handler() {
    if (list.childNodes[0].style.visibility == "visible") {
      list.childNodes[1].style.textDecoration = "none";
      list.childNodes[0].style.visibility = "hidden";
      return;
    }
    list.childNodes[1].style.textDecoration = "line-through";
    list.childNodes[0].style.visibility = "visible";
  }
  list.addEventListener("click", handler);
  list.addEventListener("dblclick", () => {
    list.childNodes[1].disabled = false;
    list.childNodes[1].style.textDecoration = "none";
    list.childNodes[0].style.visibility = "hidden";
    list.removeEventListener("click", handler);
    list.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        list.childNodes[1].disabled = true;
        list.addEventListener("click", handler);
      }
    });
  });
}
function eraser() {
  let erase = document.querySelectorAll(".erase");
  for (let i = 0; i < erase.length; i++) {
    let erase = document.querySelectorAll(".erase")[i];
    erase.addEventListener("click", () => {
      erase.parentNode.remove();
    });
  }
}
