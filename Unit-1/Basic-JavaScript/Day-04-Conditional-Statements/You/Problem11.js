let rice_availaible = false;
let wheat_availaible = true;
let apple_availaible = true;
if (rice_availaible) {
  console.log("Buy rice");
}
else if (wheat_availaible) {
  console.log("Buy Wheat"); // Buy Wheat
}
// when we got a true condition then compiler will be ignore everything below what are write their
else if (apple_availaible) {
  console.log("Buy apple");
}
else {
  console.log("Nothing is availaible");
}
