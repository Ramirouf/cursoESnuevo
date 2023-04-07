//There are 2 destructuring: arrays and objects

//Array destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring
let user = { username: "Ramiro", age: 21 };
let { username, age } = user;
console.log(username, user.age);