import "./style.css";

let projects = [];

function createToDo(title, text, priority, proj) {
    let rand = Math.floor(Math.random() * 300);
    let finish = false;

    return {
        id: rand,
        title: title,
        text: text,
        priority: priority,
        finish: finish,
        proj: proj
    };
}

function createProject(name) {
    const todoArr = [];
    return {
        name: name,
        todoArr,
        add: function (todo) {
            this.todoArr.push(todo);
        }
    };
}

//create a few fake projects and todos
let mainProject = createProject("Main");
let todo1 = createToDo("Cook food", "Cook 150g Chicken, 100g Rice", "High", false, "Main");
let todo2 = createToDo("Clean the house", "Wash dishes, dust off the surfaces etc", "High", false, "Main");
let todo3 = createToDo("Send mail", "Send the item back", "Low", false, "Main");
mainProject.todoArr.push(todo1);
mainProject.todoArr.push(todo2);
mainProject.todoArr.push(todo3);

projects.push(mainProject);
dispProjects();

function flip(e, todo) {
    e.innerHTML == "true" ? e.innerHTML = "false" : e.innerHTML = "true";
    todo.finish = !todo.finish;
    console.log(todo);
}

function dispProjects() {

    document.querySelector(".projectList").innerHTML = "";

    projects.forEach(x => {
        var titl = document.createElement("H2");
        titl.innerHTML = x.name;
        document.querySelector(".projectList").appendChild(titl);
        let indx = projects.indexOf(x);
        titl.id = indx;
        titl.addEventListener("click", () => { displayNotes(x) });
    });
    console.log(projects);
}

function displayNotes(project) {
    console.log(project.todoArr);
    document.querySelector(".todoFull").innerHTML = "";

    project.todoArr.forEach(x => {
        var item = document.createElement("div");

        var titleFull = document.createElement("H2");
        var desc = document.createElement("p");
        var prio = document.createElement("p");
        var finish = document.createElement("p");
        var delBtn = document.createElement("p");

        item.id = x.id;
        item.classList.add("itemBlock");
        titleFull.innerHTML = x.title;
        desc.innerHTML = x.text;
        prio.innerHTML = x.priority;
        finish.innerHTML = x.finish;
        finish.id = "fnsh";
        finish.addEventListener("click", () => { flip(finish, x) });
        delBtn.innerHTML = "DELETE";
        delBtn.id = "delBtn";
        delBtn.addEventListener("click", () => { deleteNote(project, project.todoArr.indexOf(x)) });

        item.appendChild(titleFull);
        item.appendChild(desc);
        item.appendChild(prio);
        item.appendChild(finish);
        item.appendChild(delBtn);
        document.querySelector(".todoFull").appendChild(item);
    })
    var plusBtn = document.createElement("div");
    var plusBtnH2 = document.createElement("h2");
    plusBtnH2.innerHTML = "+";
    plusBtnH2.addEventListener("click", function () {
        createNewNote(project, plusBtn);
    });
    plusBtn.classList.add("plusSign");
    plusBtn.appendChild(plusBtnH2);
    document.querySelector(".todoFull").appendChild(plusBtn);
}

function createNewNote(x, btn) {
    const form = document.createElement("form");
    form.id = "itemForm";
    btn.innerHTML = "";

    form.innerHTML = `
    <label for="title">Title:</label><br>
    <input id="title" type="text" placeholder="text..." value="Cook food"><br>

    <label for="text">Description:</label><br>
    <input id="text" type="text" placeholder="text..." value="Cook 150g Chicken, 100g Rice"><br>

    <label for="priority">Priority:</label><br>
    <input id="priority" type="text" placeholder="text..." value="High"><br>

    <br>

    <button type="submit">Create Item</button>`;

    btn.classList.remove("plusSign");
    btn.classList.add("plusBlock");
    btn.appendChild(form);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        document.querySelector(".todoFull").innerHTML = "";

        const todo = createToDo(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value);
        console.log(todo);
        console.log(x);
        x.todoArr.push(todo);
        console.log(projects);
        displayNotes(x);

    });
}

function deleteNote(proj, id) {

    proj.todoArr.splice(id, 1);
    displayNotes(proj);
    console.log(proj.todoArr);
}

document.getElementById("projectsForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const proj = createProject(e.target[0].value);
    projects.push(proj);
    console.log(projects);
    dispProjects();
});