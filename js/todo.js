const toDoForm = document.getElementById("todo-form");
const toDoIpt = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const targetLi = event.target.parentElement;
    targetLi.remove();
}

function paintToDo(newTodo) {
    const listTag = document.createElement("li");
    const spanTag = document.createElement("span");
    spanTag.innerText = newTodo;
    const buttonTag = document.createElement("button");
    buttonTag.innerText = "❌";
    buttonTag.addEventListener("click",deleteToDo);
    listTag.appendChild(spanTag);
    listTag.appendChild(buttonTag);
    toDoList.appendChild(listTag);
}


function handleToDoSubmit() {
    event.preventDefault();
    const newTodo = toDoIpt.value;
    toDoIpt.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);