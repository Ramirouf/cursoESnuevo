const func = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Solved");
        } else {
            reject("Failed");
        }
    })
}

func()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log("Finally !"));