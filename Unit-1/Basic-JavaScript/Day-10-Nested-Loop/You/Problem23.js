// Print the output below pattern
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

for (let horizontal = 1; horizontal <= 10; horizontal++) {
  let bag = "";
  for (let vertical = 1; vertical <= 10; vertical++) {
    if (horizontal == 1 || horizontal == 10) {
      bag += "*";
    }
    else if (vertical == 1 || vertical == 10) {
      bag += "*";
    }
    else {
      bag += " ";
    }
  }
  console.log(bag);
}