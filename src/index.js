import createList from "./TodoList.js";
import createTodo from "./TodoItem.js";

const container = document.querySelector("#container");

const app = (() => {
    let todoLists = [];
    let refreshEvent = new Event("refresh");

    let displayArea = document.createElement("div");
    let sidebar = document.createElement("div");

    document.querySelector("body").style = "background: #1f1f1f;";

    if(typeof(Storage) !== undefined) {
        let storedData = JSON.parse(localStorage.getItem("todo-lists"));

        if(storedData != null)
        {   
            console.log(storedData);

            for(let i =0; i < storedData.length; i++)
            {
                let data = storedData[i];

                let todo = createList(data.name, refreshEvent);

                for(let j = 0; j < data.itemList.length; j++)
                {
                    let item = data.itemList[j];
                    todo.appendItem(createTodo(item.title, item.description, item.dueDate, item.priority));
                }

                todoLists.push(todo);
            }
        }
        else {
            let todo = createList("default", refreshEvent);
            todo.appendItem(createTodo("Hello", "test desc H", 2020, 1, false));
            todo.appendItem(createTodo("2", "test desc 1", 2020, 2, false));
            todo.appendItem(createTodo("3", "test desc 2", 2020, 2, false));
            todoLists.push(todo);
        }
    }
    else {
        let todo = createList("default", refreshEvent);
        todo.appendItem(createTodo("Hello", "test desc H", 2020, 1, false));
        todo.appendItem(createTodo("2", "test desc 1", 2020, 2, false));
        todo.appendItem(createTodo("3", "test desc 2", 2020, 2, false));
        todoLists.push(todo);
    }

    addEventListener("refresh", () => {
        console.log("refresh");
        renderLists();
        renderSidebar();

        if(typeof(Storage) != undefined)
        {
            let storageList = [];
            for(let i = 0; i < todoLists.length; i++)
            {
                let storeName = todoLists[i].getName();
                let storeItems = todoLists[i].getListData();
    
                storageList.push({ "name": storeName, "itemList": storeItems });
            }
    
            localStorage.setItem("todo-lists", JSON.stringify(storageList));
        }
    });

    sidebar.style = "position: fixed; top: 0; left: 0; width: 250px; height: 100vh; background: #3f3f3f; text-align:center; color: white; font-size: 1.3rem;";
    displayArea.style = "margin-left: 250px;";

    container.appendChild(sidebar);
    container.appendChild(displayArea);

    const renderSidebar = () => {
        sidebar.textContent = "";
        
        for(let i = 0; i < todoLists.length; ++i)
        {   
            let sideListElem = document.createElement("h5");

            sideListElem.textContent = todoLists[i].getName();

            sidebar.appendChild(sideListElem);
        }

        let addBtn = document.createElement("button");
        addBtn.textContent = "Add List +";
        addBtn.style = "width: 90%; padding: 0.3rem 0; font-size: 1rem;font-weight: bold;";
        addBtn.addEventListener("click", (e) => {
            let newList = createList("New List", refreshEvent);

            todoLists.push(newList);

            renderLists();
            renderSidebar();
        });

        sidebar.appendChild(addBtn);
    }

    const renderLists = () => {
        displayArea.textContent = "";

        let listBoxDiv = document.createElement("div");
        listBoxDiv.style = "display: flex; flex-direction: row;";

        for(let i = 0; i < todoLists.length; i++)
        {
            let list = todoLists[i].renderList(todoLists, i);
            listBoxDiv.appendChild(list);
        }

        displayArea.appendChild(listBoxDiv);
    }

    renderLists();
    renderSidebar();

})();