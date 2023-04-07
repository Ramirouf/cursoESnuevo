//flat
const array = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];
console.log(array.flat(2));

//flatmap
const array2 = [1, 2, 3, 4];
console.log(array2.flatMap((v) => [v, v * 2]));