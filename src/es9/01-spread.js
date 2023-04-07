const user = { username: 21, age: 21, country: "ARG" };

const { username, ...values } = user;
console.log(username);
console.log(values);