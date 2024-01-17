let a = 3;
let b = 2;
let c = 3;

if (a == b) {
  console.log("values of a & b are same");
}
else if (b == c) {
  console.log("values of b & c are same");
}
else if (a == c) {
  console.log("values of a & c are same");
}
else if (a == b && a == c) {
  console.log("values of a, b & c are same");
}
else {
  console.log("all valuse are different");
}