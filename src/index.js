import createList from "./TodoList.js";
import createTodo from "./TodoItem.js";

const container = document.querySelector("#container");

const app = (() => {
    let todoLists = [];
    let refreshEvent = new Event("refresh");

    let displayArea = document.createElement("div");
    let sidebar = document.createElement("div");

    let todo = createList("default", refreshEvent);
    todo.appendItem(createTodo("Hello", "test desc H", 2020, 1));
    todo.appendItem(createTodo("1", "test desc 1", 2020, 2));
    todo.appendItem(createTodo("2", "test desc 2", 2020, 2));
    todoLists.push(todo);

    let spareTodo = createList("spare", refreshEvent);
    spareTodo.appendItem(createTodo("a", "test desc a", 2020, 1));
    spareTodo.appendItem(createTodo("B", "test desc b", 2020, 2));
    spareTodo.appendItem(createTodo("c", "test desc c", 2020, 3));
    spareTodo.appendItem(createTodo("D", "test desc d", 2020, 4));
    todoLists.push(spareTodo);

    addEventListener("refresh", () => {
        console.log("refresh");
        renderLists();
    });

    sidebar.style = "position: fixed; top: 0; left: 0; width: 250px; height: 100vh; background: #3f3f3f";
    displayArea.style = "margin-left: 250px;";

    container.appendChild(sidebar);
    container.appendChild(displayArea);

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

        let addBtn = document.createElement("button");
        addBtn.textContent = "Add List +";

        addBtn.addEventListener("click", (e) => {
            let newList = createList("New List", refreshEvent);

            todoLists.push(newList);

            renderLists();
        });

        displayArea.appendChild(addBtn);
    }

    renderLists();

})();