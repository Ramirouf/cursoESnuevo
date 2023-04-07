const asyncFunc = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Async!"), 2000)
            : reject(new Error("Error"));
    });
}

const func = async () => {
    const result = await asyncFunc();
    console.log(result);
}

console.log("Before");
func();
console.log("After");