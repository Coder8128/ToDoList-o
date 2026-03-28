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