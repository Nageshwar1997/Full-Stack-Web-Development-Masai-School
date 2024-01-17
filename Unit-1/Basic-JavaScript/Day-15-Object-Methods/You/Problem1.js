// Some Important rules
// 1. We cannot call a function inside object when the given function is declared in inside the object
// 2. We cannot use Normal Function inside the object
// 3. We can use Anonymous function inside the object, we can also use Arrow function but some cases it will shown Error, thatswhy we need to use only Anonymous function inside object


let details = {
  name: "Nageshwar",
  age: 25,
  print: function() { // Anonymous Function
    console.log("This is a Anonymous Function");
  },
  print1: () => { // Arrow Function
    console.log("This is a Arrow Function");
  }
}

// it is a way to call the function which is written inside the object.
details.print(); // This is a Anonymous Function
details.print1(); // This is a Arrow Function

