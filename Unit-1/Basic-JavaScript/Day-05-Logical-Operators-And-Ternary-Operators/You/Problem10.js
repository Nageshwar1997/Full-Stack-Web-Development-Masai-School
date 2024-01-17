// Code 11 : Marriage Problem
// Male : age≥21
// Female : age≥18

let gender = "female";
let age = 19;

if (((gender == "male") && (age >= 21)) || ((gender == "female") && (age >= 18))) {
  console.log(gender, "can get married");
}
else {
  console.log(gender, "can't get married");
}