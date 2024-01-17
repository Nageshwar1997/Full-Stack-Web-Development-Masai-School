// Nested Loop with While
// Code 10 : Use While Loop. Print the below pattern

// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * *

let field = 1;
while (field <= 6) {
  let bag = "";
  let seed = 1;
  while (seed <= 10) {
    bag += "*" + " ";
    seed++;
  }
  console.log(bag);
  field++;
}