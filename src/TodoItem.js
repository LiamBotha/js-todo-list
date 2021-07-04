const createTodo = (title, description, dueDate, priority) => {
    
    const displayTodo = () => {

        let item = document.createElement("div");
        let input = document.createElement("input");
        let text = document.createElement("h5");

        input.type = "checkbox";

        text.appendChild(input);
        item.appendChild(text);

        text.innerHTML += "title: " + title + ", desc: " + description + ", due: " + dueDate + ", priority: " + priority;

        return item;
    };  

    return { title, description, dueDate, priority, displayTodo };
};

export default createTodo;