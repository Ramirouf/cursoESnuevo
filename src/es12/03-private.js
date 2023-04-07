//Declaring a class
class User { };
//Instantiating a class
const newUser = new User();

class user {
    //Methods
    greet() {
        return "Hello";
    }
}

const user1 = new user();
console.log(user1.greet());

//Constructor
class user2 {
    constructor() {
        console.log("New user");
    }
    greet() {
        return "Hello"
    }
}

const user22 = new user2();


//This
class user3 {
    constructor(name) {
        this.name = name;
    }
    //Methods
    speak() {
        return "Hello"
    }
    greet() {
        return `${this.speak()} ${this.name}`
    }
}

const user33 = new user3("Ramiro");
console.log(user33.greet());


//Getters and setters

class user4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #speak() {
        return "Hello";
    }
    greet() {
        return `${this.speak()} ${this.name}`
    }
    get #uAge() {
        return this.age;
    }
    set uAge(age) {
        this.age = age
    }
}

const user44 = new user4("Ramiro", 21);
console.log(user44.uAge);
console.log(user44.uAge = 99);