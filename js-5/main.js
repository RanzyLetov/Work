// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// Задача 1.
const person = {
    name: "Виктор",
    age: 17,
    isStudent: true,
};
console.log(person);

// Задача 2.
const isEmpty = (obj) => {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isEmpty(person));

// Задача 4.
const callAllMethods = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
            obj[key]();
        }
    }
};

const myObject = {
    method1() {
        console.log("Метод 1 вызван");
    },
    method2() {
        console.log("Метод 2 вызван");
    },
    property: "Это не метод",
};

callAllMethods(myObject);
