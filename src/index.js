import "./style.css";

function createToDo(title, text, priority) {
    return {
        title: title,
        text: text,
        priority: priority
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

document.getElementById("itemForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const todo = createToDo(e.target[0].value, e.target[1].value, e.target[2].value);
    console.log(todo);

    //Side tab
    var titl = document.createElement("H1");
    titl.innerHTML = todo.title;
    document.querySelector(".tododTitle").appendChild(titl);

    //Right tab

    var desc = document.createElement("p");
    var prio = document.createElement("p");
    var titleFull = document.createElement("H2");

    titleFull.innerHTML = todo.title;
    desc.innerHTML = todo.text;
    prio.innerHTML = todo.priority;

    document.querySelector(".todoFull").appendChild(titleFull);
    document.querySelector(".todoFull").appendChild(desc);
    document.querySelector(".todoFull").appendChild(prio);


});
