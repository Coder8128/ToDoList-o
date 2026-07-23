import "./style.css";

function createToDo(title, text, priority) {
    let rand = Math.floor(Math.random() * 300);
    let finish = false;

    return {
        id: rand,
        title: title,
        text: text,
        priority: priority,
        finish: finish
    };
}

function createPorject(name) {
    const todoArr = [];
    return {
        name: name,
        todoArr,
        add: function (todo) {
            this.todoArr.push(todo);
        }
    };
}

function flip(e, todo) {
    e.innerHTML == "true" ? e.innerHTML = "false" : e.innerHTML = "true";
    todo.finish = !todo.finish;
    console.log(todo);
}

function displayNote(todo) {
    document.querySelector(".todoFull").innerHTML = "";

    //Right tab

    var todoContainer = document.createElement("div");
    var desc = document.createElement("p");
    var prio = document.createElement("p");
    var finish = document.createElement("p");
    var titleFull = document.createElement("H2");

    todoContainer.id = todo.id;
    todoContainer.classList.add("todoItem")
    titleFull.innerHTML = todo.title;
    desc.innerHTML = todo.text;
    prio.innerHTML = todo.priority;
    finish.innerHTML = todo.finish;
    finish.id = "fnsh";
    finish.addEventListener("click", () => { flip(finish, todo) });

    todoContainer.appendChild(titleFull);
    todoContainer.appendChild(desc);
    todoContainer.appendChild(prio);
    todoContainer.appendChild(finish);
    document.querySelector(".todoFull").appendChild(todoContainer);
}

document.getElementById("itemForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelector(".todoFull").innerHTML = "";

    const todo = createToDo(e.target[0].value, e.target[1].value, e.target[2].value);
    console.log(todo);



    //Side tab
    var titl = document.createElement("H1");
    titl.innerHTML = todo.title;
    document.querySelector(".tododTitle").appendChild(titl);
    titl.id = todo.id;
    titl.addEventListener("click", () => { displayNote(todo) });



});

