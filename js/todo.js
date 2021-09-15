const toDoForm = document.getElementById("todo-form");
const toDoIpt = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const targetLi = event.target.parentElement;
    targetLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(targetLi.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const listTag = document.createElement("li");
    listTag.id = newTodo.id;
    const spanTag = document.createElement("span");
    spanTag.innerText = newTodo.text;
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
    const newTodoOBJ = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoOBJ);
    paintToDo(newTodoOBJ);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const loadToDos = localStorage.getItem(TODOS_KEY);

if(loadToDos!==null) {
    const parsedToDos = JSON.parse(loadToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function arrayFilter() {
    
}