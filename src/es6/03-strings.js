let hello = "Hello";
let world = "world";

//Previous ES6:
let phrase = hello + " " + world + "!";
console.log(phrase);

//Template literals
let phrase2 = `${hello} ${world}!`;
console.log(phrase2);

//Multiline strings
let lorem = "Sample text \n " + "New line";
let lorem2 = `Sample text
new line`;
console.log(lorem);
console.log(lorem2);