// OR operator(||)

/*
// syntax
if ((condition1) || (consition2)) {
  true result
}
else {
  false result
}
*/

let mathematics = 60;
let english = 70;
let science = 80;

let mathematics_result = 59;
let english_result = 70;
let science_result = 79;

if ((mathematics_result > mathematics) || (english_result > english) || (science_result > science)) {
  console.log("my parents will give me a bike");
}
else {
  console.log("my parents not give me a bike");
}
// my parents not give me a bike