import "./style.css";

function createToDo(title, text, priority) {
    let rand = Math.floor(Math.random() * 300);

    return {
        id: rand,
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

function displayNote(todo) {
    document.querySelector(".todoFull").innerHTML = "";

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

