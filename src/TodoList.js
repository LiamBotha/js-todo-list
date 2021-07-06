import createTodo from "./TodoItem.js";

// creates a todo list
const createList = (listName, event) => {
    let itemList = [];
    let bEditTitle = false;
    let refreshEvent = event;
    let name = listName;

    const appendItem = (item) => {
        itemList.push(item);
    };

    function renderList(todoLists, index) {
        itemList.sort((a, b) => a.priority - b.priority);

        let listElem = document.createElement("div");
        let listTitleElem = document.createElement("h3");
        let titleInputElem = document.createElement("input");
        let self = this;

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
            titleInputElem.style = "font-size: 1.2rem; font-weight: bold; background: transparent; color: black; border: 1px solid white; margin: 16px 0";
            titleInputElem.addEventListener("blur", (e) => {
                bEditTitle = false;
                name = e.target.value;
                dispatchEvent(refreshEvent);
            })
            
            listElem.appendChild(titleInputElem);
        }

        for(let j = 0; j < itemList.length; j++)
        {
            let item = itemList[j].displayTodo(itemList, j);
            listElem.appendChild(item);
        }

        let addBtn = document.createElement("button");
        addBtn.textContent = "Add Item +";
        addBtn.classList.add("add-btn");
        addBtn.addEventListener("click", (e) => {
            //self.appendItem(createTodo("new", "test desc new", 2021, 1));
            //let parent = e.target.parentNode;
            //parent.textContent = "";
            //parent.replaceWith(self.renderList());

            //e.target.remove();
            let btns = document.querySelectorAll(".add-btn")

            for(let i = 0; i < btns.length; i++) btns[i].remove();

            let createItemElem = document.createElement("div");
            let createTitleInputElem = document.createElement("input");
            let createDescInputElem = document.createElement("div");
            let createSaveBtn = document.createElement("button");
            let createDeleteBtn = document.createElement("button");
            
            createDescInputElem.contentEditable = true;

            createItemElem.style = "background: rgb(255, 238, 109); padding: 1rem; width: 275px; min-height: 150px; border: 1px solid #cfcfcf; box-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin: 1rem 0";
            createItemElem.style.display="flex";
            createItemElem.style.flexDirection = "column";

            createTitleInputElem.style.marginBottom = "0.5rem";
            createDescInputElem.style.flexGrow="1";
            createDescInputElem.style.overflowWrap="anywhere";

            createTitleInputElem.value = "Title";
            createDescInputElem.textContent = "Description";

            createSaveBtn.textContent = "Save";
            createDeleteBtn.textContent = "Delete";

            createSaveBtn.addEventListener("click", (e) => {
                self.appendItem(createTodo(createTitleInputElem.value, createDescInputElem.textContent, 2021, 1));
                dispatchEvent(refreshEvent);
            });

            createDeleteBtn.addEventListener("click", (e) => {
                dispatchEvent(refreshEvent);
            });

            createItemElem.appendChild(createTitleInputElem);
            createItemElem.appendChild(createDescInputElem);
            createItemElem.appendChild(createSaveBtn);
            createItemElem.appendChild(createDeleteBtn);
            listElem.appendChild(createItemElem).focus();;
        });

        listElem.appendChild(addBtn);

        listElem.style = "position: relative; padding: 1rem; margin: 0.5rem 0 0.5rem 0.7rem; width: max-content; height: 0%; background: white; flex-shrink: 0;";
        addBtn.style = "display: block; margin: 0 0 0 auto";

        return listElem;
    };

    const getName = () => { return name };

    return { getName, itemList, appendItem, renderList };
};

export default createList;