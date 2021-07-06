const createTodo = (title, description, dueDate, priority, completed) => {

    let bIsCompleted = completed;

    const displayTodo = (itemList, index) => {

        let item = document.createElement("div");
        let input = document.createElement("input");
        let titleElem = document.createElement("h4");
        let descrElem = document.createElement("h5");
        let dateElem = document.createElement("h6");

        input.type = "checkbox";
        input.checked = bIsCompleted;
        input.addEventListener('change', (e) => {
            bIsCompleted = e.target.checked;

            dispatchEvent(new Event("refresh"));
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.style = "display: block; position: absolute; top: 5px; right: 5px; color: red; background: transparent; border: none; margin: 0 0 0 auto; font-size: 1.2rem";
        deleteBtn.addEventListener("click", (e) => {
            itemList.splice(index, 1);
            dispatchEvent(new Event("refresh"));
        });
        item.appendChild(deleteBtn);

        titleElem.innerHTML += "title: " + title;
        descrElem.textContent = "desc: " + description;
        dateElem.textContent = "due: " + dueDate + ", priority: " + priority;

        item.style = "background: rgb(255, 238, 109); padding: 1rem; width: 275px; min-height: 150px; border: 1px solid #cfcfcf; box-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin: 1rem 0";
        item.style.textDecoration = bIsCompleted ? "line-through" : "none";
        item.style.position = "relative";

        titleElem.prepend(input);
        item.appendChild(titleElem);
        item.appendChild(descrElem);
        item.appendChild(dateElem);

        return item;
    };  

    return { title, description, dueDate, priority, displayTodo };
};

export default createTodo;