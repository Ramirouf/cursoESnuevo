//Former way of defining default params
function newUser(name, age, country) {
    var name = name || "Ramiro";
    var age = age || 21;
    var country = country || "ARG";
    console.log(name, age, country);
}

//ES6
function newAdmin(name = "Ramiro", age = 21, country = "ARG") {
    console.log(name, age, country);
}

newUser();
newAdmin();