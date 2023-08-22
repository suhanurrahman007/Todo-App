// Selecktion Item ---------
const container = document.querySelector(".container");
const card = document.querySelector(".card");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const todpLists = document.querySelector("#lists");
const todoMessage = document.querySelector("#message");

// show Massage
const showMessage = (text,status) =>{
    todoMessage.textContent = text;
    todoMessage.classList.add(`bg-${status}`);
    setTimeout (() => {
        todoMessage.textContent ="";
        todoMessage.classList.remove("bg-success");

    },1000);
};

// CreatTodo 
const creatTodo = (todoId,todoValue) =>{
    const todoElement = document.createElement("li")
    todoElement.id = todoId;
    todoElement.innerHTML = `
        <span>${todoValue}</span>
        <span> <button class ="btn-delete" id ="deleteButton"> <i class ="fa fa-trash"> </i></button> </span>
    `;

    todpLists.appendChild(todoElement);
    todoElement.classList.add("li-style")

    document.getElementById('deleteButton').addEventListener('click', function () {
        document.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', function () {
                li.remove();
            });
        });
    })
    
};


// Add Todo 
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;


    // unique id
    const todoId = Date.now().toString();
    creatTodo(todoId,todoValue);
    showMessage("todo is created","success");
};

// Add Event Listners
todoForm.addEventListener("submit", addTodo);