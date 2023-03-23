// Selection of elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList= document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


let oldInputValue;


// functions
const saveTodo=(text)=>{
    const todo =document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("btn btn-success");
    doneBtn.innerHTML = '<i class="fa-solid fa-check-double"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn btn-warning");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn btn-danger");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);
    
    todoList.appendChild(todo);
    todoInput.value="";
    todoInput.focus();
};

const toggleForms = () =>{
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};


const updateTodo = (text) =>{
    const todos = document.querySelectorAll(".todo")
    todos.forEach((todo) =>{
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerHTML = text;
        }
    });
};

// events


todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const inputvalue = todoInput.value;

    if(inputvalue) {
      saveTodo(inputvalue)
    };
});

document.addEventListener("click", (e) =>{
    const targetEL = e.target;
    const parentEL = targetEL.closest("div");
    let todoTitle;


    if( parentEL && parentEL.querySelector("h3")) {
         todoTitle = parentEL.querySelector("h3").innerText ;
       }

    if(targetEL.classList.contains("btn btn-success")){
        parentEL.classList.toggle("done");
    }
    
    if(targetEL.classList.contains("btn btn-success")){
        parentEL.remove();
    }

    if(targetEL.classList.contains("edit-todo")){
        toggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
    
});

cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    toggleForms();
});


editForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const editInputValue = editInput.value


    if(editInputValue){
        updateTodo(editInputValue)
    };
    toggleForms()
});


