function getGreeting(firstName, lastName) {
    return `Hi from ${firstName} ${lastName}.`
}


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersGreetings = users.map((element) => {
    let greet = getGreeting(element.name, element.surname);
    return greet;
})

    console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]

/*
  Use of the array functons to manipulate the users array. We need a new array called usersGreetings.
  usersGreetings will be an array of strings: ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]
  You are expected to use the getGreeting function inside the callback of the array method that you choose to use.
*/