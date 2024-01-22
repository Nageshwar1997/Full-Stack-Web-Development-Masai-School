function greet(name) {
    var greeting = "Hello, ";

    function sayHello() {
        console.log(greeting + name);
    }

    return sayHello;
}

var greetUser = greet("Nageshwar");
greetUser();
