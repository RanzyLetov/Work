"use strict";

const todoKeys = {
    id: "id",
    text: "text",
    is_complited: "is_complited",
};

let todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.is_complited]: false,
    };
    todos.push(newTodo);
    return newTodo;
};

const complitedTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
    if (!todo) {
        console.error(errTodoNotFound());
        return null;
    }
    todo[todoKeys.is_complited] = !todo[todoKeys.is_complited];
    return todo;
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] == todoId);
    if (todoIndex === -1) {
        console.error(errTodoNotFound());
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};
