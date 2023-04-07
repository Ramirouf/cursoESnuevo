async function* generator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const gen = generator();
gen.next().then(response => console.log(response.value));
gen.next().then(response => console.log(response.value));
gen.next().then(response => console.log(response.value));
console.log("Hi");

async function names(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const namess = names(["Ramiro", "Itati", "Mora"]);
console.log("After");