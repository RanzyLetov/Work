"use strict";
const formElement = document.querySelector(".form");
const inputElement = document.querySelector("#new-todo");
const sendBtnElement = document.querySelector("#new-todo-send");
const todosElement = document.querySelector(".todos");

const todoKeys = {
    id: "id",
    text: "text",
    is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.is_completed]: false,
    };
    todos.push(newTodo);
    return newTodo;
};

const completeTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId));
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};

const createTodoElement = (text) => {
    todosElement.insertAdjacentHTML(
        "beforeend",
        `
        <li class="todo">
            <div class="todo-text">${text}</div>
            <div class="todo-actions">
                <button class="button-complete button">&#10004;</button>
                <button class="button-delete button">&#10006;</button>
            </div>
        </li>    
    `
    );
};

const handleCreateTodo = (todos, text) => {
    createTodo(todos);
    createTodoElement(text);
};

sendBtnElement.addEventListener("click", () => {
    const text = inputElement.value.trim();
    if (!text) return (inputElement.value = "");
    handleCreateTodo(todos, text);
    inputElement.value = "";
});
