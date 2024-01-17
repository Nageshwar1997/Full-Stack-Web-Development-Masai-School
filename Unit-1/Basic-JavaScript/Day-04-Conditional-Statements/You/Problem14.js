// Code 8 : Solve the Marriage Problem
// Legal Age in India Males ----> 21
// Females ----> 18


let bride_age = 17;
let groom_age = 20;

if ((bride_age >= 18) && (groom_age >= 21)) {
    console.log("They can do marriage");
}

else if ((groom_age >= 21) && (bride_age <= 18)) {
  console.log("bride's age not completed for marriage criteria");
}
  
else if ((groom_age <= 21) && (bride_age >= 18)) {
  console.log("groom's age not completed for marriage criteria");
}

else {
  console.log("both are not fulfilled marriage age criteria");
}