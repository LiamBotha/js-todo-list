const createTodo = (title, description, dueDate, priority, completed) => {

    let bIsCompleted = completed;
    let bIsEditing = false;

    const displayTodo = (itemList, index) => {

        let item = document.createElement("div");
        let input = document.createElement("input");
        let titleElem = document.createElement("h4");
        let descrElem = document.createElement("p");
        let dateElem = document.createElement("h6");
        let priorityElem = document.createElement("h6");

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

        item.addEventListener("dblclick", (e) => {
            let btns = document.querySelectorAll(".add-btn")
            for(let i = 0; i < btns.length; i++) btns[i].remove();

            let titleEditElem = document.createElement("input");
            let descrEditElem = document.createElement("div");
            let dateEditInputElem = document.createElement("input");
            let priorityEditInputElem = document.createElement("input");

            let saveEditBtn = document.createElement("button");

            titleEditElem.value = title;
            descrEditElem.textContent = description
            dateEditInputElem.value = new Date(dateElem.innerText.substring(5));
            priorityEditInputElem.value = priority;
            saveEditBtn.textContent = "SAVE";

            console.log(priority);

            descrEditElem.contentEditable = true;
            dateEditInputElem.type = "date";
            priorityEditInputElem.type = "number";

            item.style = "position: relative; background: rgb(255, 238, 109); padding: 1rem 1rem 2rem; width: 275px; min-height: 150px; border: 1px solid #cfcfcf; box-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin: 1rem 0";
            item.style.display="flex";
            item.style.flexDirection = "column";

            titleEditElem.style = "background: transparent; border: 1px dashed black; margin-bottom: 0.5rem; outline: none";
            descrEditElem.style.flexGrow="1";
            descrEditElem.style.overflowWrap = "anywhere";
            descrEditElem.style.border = "1px dashed black";
            descrEditElem.style.outline = "none";
            descrEditElem.style.whiteSpace = "pre-line";

            dateEditInputElem.style = "position: absolute; bottom: 5px; left: 5px; font-size: 0.8rem";
            priorityEditInputElem.style = "position: absolute; bottom: 5px; right: 5px; font-size: 0.8rem; width: 2.3rem";

            saveEditBtn.style = "position: absolute; right: 55px; bottom: 5px";

            saveEditBtn.addEventListener("click", (e) => {
                title = titleEditElem.value;
                description = descrEditElem.innerText;
                dueDate = dateEditInputElem.valueAsDate != null ? dateEditInputElem.valueAsDate.toDateString() : dueDate;
                priority = priorityEditInputElem.valueAsNumber;
                console.log(priorityEditInputElem.value);

                dispatchEvent(new Event("refresh"));
            });

            titleElem.replaceWith(titleEditElem);
            descrElem.replaceWith(descrEditElem);
            dateElem.replaceWith(dateEditInputElem);
            priorityElem.replaceWith(priorityEditInputElem);
            item.appendChild(saveEditBtn);
            
            deleteBtn.remove();
        });

        titleElem.innerHTML += "" + title;
        descrElem.textContent = "" + description;
        dateElem.textContent = "due: " + dueDate
        priorityElem.textContent = "priority: " + priority;

        titleElem.style = "margin: 0";
        dateElem.style = "position: absolute; left: 5px; bottom:-20px";
        priorityElem.style = "position: absolute; right: 5px; bottom: -20px";
        descrElem.style = "white-space: pre-wrap; overflow-wrap: anywhere; font-size: 0.8rem;";

        item.style = "background: rgb(255, 238, 109); padding: 1rem; width: 275px; min-height: 150px; border: 1px solid #cfcfcf; box-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin: 1rem 0";
        item.style.textDecoration = bIsCompleted ? "line-through" : "none";
        item.style.position = "relative";

        titleElem.prepend(input);
        item.appendChild(titleElem);
        item.appendChild(descrElem);
        item.appendChild(dateElem);
        item.appendChild(priorityElem);

        return item;
    };  

    return { title, description, dueDate, priority, displayTodo };
};

export default createTodo;