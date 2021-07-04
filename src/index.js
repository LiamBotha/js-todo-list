import createList from "./TodoList.js";
import createTodo from "./TodoItem.js";

const container = document.querySelector("#container");

const app = (() => {
    let todoLists = [];
    
    let todo = createList("default")
    todo.appendItem(createTodo("Hello", "test desc H", 2020, 1));
    todo.appendItem(createTodo("1", "test desc 1", 2020, 2));
    todo.appendItem(createTodo("2", "test desc 2", 2020, 2));
    todoLists.push(todo);

    let spareTodo = createList("spare");
    spareTodo.appendItem(createTodo("a", "test desc a", 2020, 1));
    spareTodo.appendItem(createTodo("B", "test desc b", 2020, 2));
    spareTodo.appendItem(createTodo("c", "test desc c", 2020, 3));
    spareTodo.appendItem(createTodo("D", "test desc d", 2020, 4));
    todoLists.push(spareTodo);

    const renderLists = () => {
        container.textContent = "";

        for(let i = 0; i < todoLists.length; i++)
        {
            let list = todoLists[i].renderList();
            container.appendChild(list);
        }

        let addBtn = document.createElement("button");
        addBtn.textContent = "Add List +";

        addBtn.addEventListener("click", (e) => {
            let newList = createList("New List");

            todoLists.push(newList);

            renderLists();
        });

        container.appendChild(addBtn);
    }
    renderLists();
    
})();