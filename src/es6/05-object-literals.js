//Enhanced object literals

function newUser1(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

//Also works
function newUser2(user, age, country) {
    return {
        user,
        age,
        country
    }
}