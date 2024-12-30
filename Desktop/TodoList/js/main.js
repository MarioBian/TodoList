const todolist = [];
const inputElement = document.getElementById("input");
const addButton = document.getElementById("addTodo");
const messageElement = document.getElementById("message");
const todoList = document.getElementById("todoList");
const dueDateElement = document.getElementById("dueDate");

addButton.addEventListener("click", addTodo);

function addTodo() {
  const name = inputElement.value.trim();
  const dueDate = dueDateElement.value;
  if (name && dueDate) {
    todolist.push({ name, dueDate });
    inputElement.value = "";
    dueDateElement.value = "";
    messageElement.textContent = "Added to list";
    updateTodoList();
  } else {
    messageElement.textContent = "The field is empty";
  }
}

function updateTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `<p>${name} - ${dueDate}
    <button onclick="deleteTodo(${i});
    ">Delete</button></p>`;
    todoListHTML += html;
  }
  todoList.innerHTML = todoListHTML;
}
function deleteTodo(i) {
  todolist.splice(i, 1);
  updateTodoList();
}
