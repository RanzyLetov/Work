// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0)); // 90
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

// Задача 1.
const calculateFinalPrice = (basePrice, discountPercent, taxRate) => {
    return basePrice * (1 - discountPercent / 100) * (1 + taxRate);
};

// Задача 2.
console.log(calculateFinalPrice(100, 10, 0)); // 90
console.log(calculateFinalPrice(100, 10, 0.2)); // 10

const checkAccess = (login, password) => {
    return login == "admin" && password == 123456
        ? console.log("Доступ разрешен")
        : console.log("Доступ запрещен");
};
checkAccess("admin", 123456);

// Задача 3.

const getTimeOfDay = (time) => {
    switch (true) {
        case time >= 0 && time < 6:
            console.log("Ночь");
            break;
        case time >= 6 && time < 12:
            console.log("Утро");
            break;
        case time >= 12 && time < 18:
            console.log("День");
            break;
        case time >= 18 && time < 24:
            console.log("Вечер");
            break;
        default:
            console.log("Некорректное время");
    }
};
getTimeOfDay(12);

// Задача 4.

const findFirstEven = (start, end) => {
    for (i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return console.log(i);
        }
    }
    return console.log("Чётных чисел нет");
};
findFirstEven(17, 17);
