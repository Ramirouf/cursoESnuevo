//There are 2 destructuring: arrays and objects

//Array destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring
let user = { username: "Ramiro", age: 21 };
let { username, age } = user;
console.log(username, user.age);

//Spread operator
let person = { name: "Ramiro", age: 21 };
let country = "ARG";
let data = { id: 1, ...person, country };
console.log(data);

// Rest params (usefull to receive many params)
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3);