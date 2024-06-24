// Impure Function

const addNewNumber = (num) => {
    let randomValue = Math.ceil(Math.random() * 10);

    return num + randomValue;
}

console.log(addNewNumber(5)); // every time new Value
console.log(addNewNumber(5)); // every time new Value
console.log(addNewNumber(5)); // every time new Value