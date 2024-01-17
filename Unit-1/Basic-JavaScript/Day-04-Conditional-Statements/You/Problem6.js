/*
syntax for if..else if...else statement.

  if(condtion1){
  // if condition 1 is true
  }
else if( condition 2){
//only if condition 2 is true.  
}
else if(condition 3){
//only if condition3 is true
  
}
else{
  // if all the conditions are false.
}
*/

let tooth_paste = "Dabur";

if (tooth_paste == "Colgate") {
  console.log("please give me Colgate");
}
else if (tooth_paste == "Pepsodent") {
  console.log("please give me Pepsodent");
}
else if (tooth_paste == "Closeup") {
  console.log("please give me Closeup");
}
else {
  console.log("I did not found any toothpaste of my choice");
}