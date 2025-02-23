let user = {
    name: 'Victor',
    adg: 16,
    height: 185,
};

// ===============================================

let hi = {
    hello: {
        sayHello(name) {
            console.log(`Hello, ${name}`);
        }
    }
}
hi.hello.sayHello('Bob');
// =====================================================

let users = [{
    name: 'Bob',
    adg: 11,
    isAdmin: true,
},
{
    name: 'LoL',
    adg: 23,
    isAdmin: true,
},
{
    name: 'Noob',
    adg: 34,
    isAdmin: false,
},
{
    name: 'Stanley Pines',
    adg: 74,
    isAdmin: true,
},
{
    name: 'Alex',
    adg: 35,
    isAdmin: false,
},
{
    name: 'John Cena',
    adg: 73,
    isAdmin: false,
},
{
    name: 'Kick Buttowski',
    adg: 56,
    isAdmin: true,
},
{
    name: 'Bill',
    adg: 54,
    isAdmin: false,
}];

let simpleUser = 0;

for (let i = 0; i < users.length; i ++) {
    if (users[i].isAdmin == false) {
        simpleUser++
    }
}
console.log(`Простых пользователей: ${simpleUser}`)