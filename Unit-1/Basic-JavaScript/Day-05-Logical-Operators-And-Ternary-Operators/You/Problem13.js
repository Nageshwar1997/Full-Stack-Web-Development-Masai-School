let a = 200;
let b = 200;
let c = 200;

if ((a > b) && (a > c)) {
  console.log("a is greater");
}
else if ((b > a) && (b > c)) {
  console.log("b is greater");
}
else if((c > a) && (c > b)){
  console.log("c is greater");
}
else if((a == b) && (a == c)){
  console.log("a, b and c are equal"); // a, b and c are equal
}
else if(a == b){
  console.log("a and b are equal");
}
else if(b == c) {
  console.log("b and c are equal");
}
else{
  console.log("invalid inputs");
}


// Ternary operator
/*
((a > b) && (a > c)) ? console.log("a is greater") : ((b > a) && (b > c)) ? console.log("b is greater") : ((c > a) && (c > b)) ? console.log("c is greater") : ((a == b) && (a == c)) ? console.log("a, b and c are equal") : (a == b) ? console.log("a and b are equal") : (b == c) ? console.log("b and c are equal") : console.log("invalid inputs");
*/

// a, b and c are equal