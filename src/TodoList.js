import createTodo from "./TodoItem.js";

// creates a todo list
const createList = (name, event) => {
    let itemList = [];
    let bEditTitle = false;
    let refreshEvent = event;

    const appendItem = (item) => {
        itemList.push(item);
    };

    function renderList(todoLists, index) {
        let listElem = document.createElement("div");
        let listTitleElem = document.createElement("h3");
        let titleInputElem = document.createElement("input");

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.style = "display: block; position: absolute; top: 5px; right: 5px; color: red; background: transparent; border: none; margin: 0 0 0 auto; font-size: 1.2rem";
        deleteBtn.addEventListener("click", (e) => {
            todoLists.splice(index, 1);
            dispatchEvent(refreshEvent);
        });
        listElem.appendChild(deleteBtn);

        if(bEditTitle == false) {
            listTitleElem.textContent = name;
            listTitleElem.addEventListener("click", (e) => {
                bEditTitle = true;
                dispatchEvent(refreshEvent);
            });
            listElem.appendChild(listTitleElem);
        }
        else {
            titleInputElem.value = name;
            titleInputElem.style = "font-size: 1.2rem; font-weight: bold; background: transparent; color: white; border: 1px solid white; margin: 16px 0";
            titleInputElem.addEventListener("blur", (e) => {
                bEditTitle = false;
                name = e.target.value;
                dispatchEvent(refreshEvent);
            })
            
            listElem.appendChild(titleInputElem);
        }

        for(let j = 0; j < itemList.length; j++)
        {
            let item = itemList[j].displayTodo();
            listElem.appendChild(item);
        }

        let self = this;

        let addBtn = document.createElement("button");
        addBtn.textContent = "Add Item +";
        addBtn.addEventListener("click", (e) => {
            self.appendItem(createTodo("new", "test desc new", 2021, 1));
            let parent = e.target.parentNode;
            parent.textContent = "";
            parent.replaceWith(self.renderList());
        });

        listElem.appendChild(addBtn);

        listElem.style = "position: relative; color: black; padding: 1rem; margin: 0.5rem 0 0.5rem 0.7rem; width: max-content; height: 0%; background: white";
        addBtn.style = "display: block; margin: 0 0 0 auto";

        return listElem;
    };

    return { name, itemList, appendItem, renderList };
};

export default createList;