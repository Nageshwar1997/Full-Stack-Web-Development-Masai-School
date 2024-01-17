// Code 5 : [Student Task] Marriage Problem
// Gender is male and age ≥ 21 : He can marry
// Gender is female and age ≥ 18 : She can marry

let gender = "male";
let age = 20;


if ((gender == "male") && (age >= 21)) {
  console.log("He can marry");
}
else if ((gender == "female") && (age >= 18)) {
  console.log("She can marry");
}
else {
  console.log("can't get marry"); // can't get marry
}