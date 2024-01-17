/**
 * Arrow Functions does not bind 𝑡𝒽𝑖𝓈 at all
 * 
 * In an arrow function, the this keyword behaves like any other variable, the this gets lexically resolved from one of its parent's scope (Just like any other variable).
 * if its a regular function, how the function is invoked matters to determine this!! - if it's an arrow function, where the function sits (lexically) matters to determine this, no matter how it was invoked!!
 * when you want the this keyword to resolve lexically from one of its parent's scope, use the arrow function - when you want the this keyword to resolve dynamically at the call site, use the regular functions.
 */

var john = { name: "John Doe", age: 25 };

var sayArrowHello = () => {
  console.log("Arrow Hello ", this);
};

function sayRegularHello() {
  console.log("Regular Hello ", this);
}

function sayRegularName() {
  console.log("My Regular name is ", this.name, this); // points to john because of line no.42
  sayRegularHello();
  sayArrowHello();
  var sayArrowGoodBye = () => {
    console.log("Arrow GoodBye ", this); // lexically resolves to john
  };
  sayArrowGoodBye();
}

sayRegularName.call(john);
