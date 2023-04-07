function solution(
    json1 = {
        name: "Mr. Michi",
        food: "Pescado"
    },
    json2 = {
        age: 12,
        color: "Blanco"
    }) {
    let obj = { ...json1, ...json2 }
    return obj;
}

console.log(solution());