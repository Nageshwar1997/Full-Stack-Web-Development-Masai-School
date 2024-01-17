const userData1 = (name, email) => ({
    name: name,
    email: email
});

console.log(userData1("Nageshwar", "nageshpawarpatil@gmail.com")); // { name: 'Nageshwar', email: 'nageshpawarpatil@gmail.com' }


// Short Hand Object
const userData2 = (name, email) => ({
    name,
    email
});
console.log(userData2("Nageshwar", "nageshpawarpatil@gmail.com")); // { name: 'Nageshwar', email: 'nageshpawarpatil@gmail.com' }
