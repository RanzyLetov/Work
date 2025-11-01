import { getTodosFromLocalStorege } from "./storeg.js";
import { renderTodos, initTodoHandlers } from "./dom.js";

const todos = getTodosFromLocalStorege() || [];

document.addEventListener("DOMContentLoaded", () => {
    renderTodos(todos);
    initTodoHandlers(todos);
});
