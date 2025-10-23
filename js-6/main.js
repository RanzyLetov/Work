"use strict";
// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

// Задание 1.
const users = [
    { name: "Alex", age: 24, isAdmin: false },
    { name: "Bob", age: 13, isAdmin: false },
    { name: "John", age: 31, isAdmin: true },
    { name: "Jane", age: 20, isAdmin: false },
];
console.log(users);

users.push(
    { name: "Ann", age: 19, isAdmin: false },
    { name: "Jack", age: 43, isAdmin: true }
);

console.log(users);

// Задание 2.

function getUserAverageAge(users) {
    let totalAge = 0;
    for (let i = 0; i < users.length; i++) {
        totalAge += users[i].age;
    }
    return totalAge / users.length;
}

console.log(getUserAverageAge(users));

// Задание 3.

function getAllAdmins(users) {
    const adminArr = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin == true) {
            adminArr.push(users[i]);
        }
    }
    return adminArr;
}

console.log(getAllAdmins(users));

// Задание 4.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function first(numbers, n) {
    if (n == undefined) {
        return numbers[0];
    } else if (n <= 0) {
        return [];
    }

    return numbers.slice(0, n);
}
console.log(first(numbers, 4));
