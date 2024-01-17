function greet() {
    let say = "Hello";
    return function () {
        let name = "Nageshwar";
        console.log(`${say} ${name}`);
    }
}

let returnedFunctionFromGreetFunction = greet();

returnedFunctionFromGreetFunction();