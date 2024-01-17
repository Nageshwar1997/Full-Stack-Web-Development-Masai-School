function sayGoodbye() {
  console.log("Good bye! ", this);
}
function sayHello() {
  console.log("Hello! ", this);
  sayGoodbye();
}

sayHello();