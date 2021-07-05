const createTodo = (title, description, dueDate, priority) => {
    
    const displayTodo = () => {

        let item = document.createElement("div");
        let input = document.createElement("input");
        let titleElem = document.createElement("h4");
        let descrElem = document.createElement("h5");
        let dateElem = document.createElement("h6");

        input.type = "checkbox";

        titleElem.appendChild(input);
        item.appendChild(titleElem);
        item.appendChild(descrElem);
        item.appendChild(dateElem);

        titleElem.innerHTML += "title: " + title;
        descrElem.textContent = "desc: " + description;
        dateElem.textContent = "due: " + dueDate + ", priority: " + priority;

        item.style = "background: rgb(255, 238, 109); padding: 1rem; width: 275px; min-height: 150px; border: 1px solid #cfcfcf; box-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin: 1rem 0";

        return item;
    };  

    return { title, description, dueDate, priority, displayTodo };
};

export default createTodo;