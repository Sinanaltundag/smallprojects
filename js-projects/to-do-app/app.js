let add = document.getElementById("add-button");
let newInput = document.getElementById("add");
let all = document.getElementById("all");
let complete = document.getElementById("completed");
let todoDiv = document.getElementById("todo");
let lists = document.querySelectorAll(".list");
let ulList = document.getElementsByTagName("ul")[0];
let todoContainer = document.getElementById("todos");

const addFunc = () => {
  if (newInput.value.trim()) {
    ulList.innerHTML += `<li class="flex list"><i class="fas fa-solid fa-pen"></i><input type="text" class="todo-list" value="${newInput.value}" disabled /><button class="erase">-</button></li>`;
    newInput.value = "";
  }
  complete.innerHTML = completed;
  all.innerHTML = document.querySelectorAll(".list").length;
}

add.addEventListener(
  "click",
  (addFunc)
);
let completed = 0;
all.innerHTML = lists.length;

todoDiv.addEventListener(
  "click",
  (todo = (e) => {
    let inputEdit = e.target.parentElement.childNodes[1];

    if (e.target.tagName === "BUTTON") {
      if (inputEdit.style.textDecoration == "line-through") {
        completed--;
      }
      e.target.parentElement.remove();
    }
    if (e.target.tagName === "INPUT") {
      e.target.style.textDecoration == "line-through"
        ? ((e.target.style.textDecoration = "none"), completed--)
        : ((e.target.style.textDecoration = "line-through"), completed++);
    }
    if (e.target.tagName === "I") {
      if (inputEdit.disabled) {
        inputEdit.disabled = false;
        todoDiv.removeEventListener("click", todo);
        add.removeEventListener("click", addFunc);
        newInput.disabled = true;
        todoContainer.style.opacity = "0.3";
        // todoDiv.style.opacity="0.3";
        // inputEdit.style.opacity="1";
        inputEdit.addEventListener("keyup", (e) => {
          if (e.key == "Enter") {
            inputEdit.disabled = true;
            newInput.disabled = false;
            todoContainer.style.opacity = "1";
            // todoDiv.style.opacity="1"
            todoDiv.addEventListener("click", todo);
            add.addEventListener("click", addFunc);
          }
        });
        return;
      }
      inputEdit.disabled = true;
    }
    complete.innerHTML = completed;
    all.innerHTML = document.querySelectorAll(".list").length;
  })
);
function edit() {
  inputEdit.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      todoDiv.addEventListener("click", a);
    }
  });
}
/* function completedTodos() {
  
lists.forEach(item=>{
  
  if( item.childNodes[2].style.textDecoration == "line-through"){
    completed++
    console.log(completed);
  }
})
} */
/* function eraser() {
  let erase = document.querySelectorAll(".erase");
  for (let i = 0; i < erase.length; i++) {
    let erase = document.querySelectorAll(".erase")[i];
    erase.addEventListener("click", () => {
      erase.parentNode.remove();
    });
  }
} */
/* list.addEventListener("click", handler);
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
  } */
/* function check(list) {
      function handler() {
        if (list.childNodes[0].style.visibility == "visible") {
          list.childNodes[1].style.textDecoration = "none";
          list.childNodes[0].style.visibility = "hidden";
          return;
        }
        list.childNodes[1].style.textDecoration = "line-through";
        list.childNodes[0].style.visibility = "visible";
      } */
