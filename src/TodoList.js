import createTodo from "./TodoItem.js";

// creates a todo list
const createList = (name) => {
    let itemList = [];

    const appendItem = (item) => {
        itemList.push(item);
    };

    function renderList() {
        let list = document.createElement("div");
        let listTitle = document.createElement("h3");
        
        listTitle.textContent = name;
        list.appendChild(listTitle);

        for(let j = 0; j < itemList.length; j++)
        {
            let item = itemList[j].displayTodo();
            list.appendChild(item);
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

        list.appendChild(addBtn);

        list.style = "background: #1f1f1f; color: white; padding: 1rem; margin: 0.5rem 0 0.5rem 0.1rem; max-width: 500px;";
        addBtn.style = "display: block; margin: 0 0 0 auto";

        return list;
    };

    return { name, itemList, appendItem, renderList };
};

export default createList;