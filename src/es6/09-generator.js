function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Ramiro", "Juan", "Pedro"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);