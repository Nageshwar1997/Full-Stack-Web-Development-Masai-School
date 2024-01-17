// Nested Loop with While
// Code 10 : Use While Loop. Print the below pattern and take father and son farming analogy

// Field : 1 Seed : * * * * * * * * * * 
// Field : 2 Seed : * * * * * * * * * * 
// Field : 3 Seed : * * * * * * * * * * 
// Field : 4 Seed : * * * * * * * * * * 
// Field : 5 Seed : * * * * * * * * * * 
// Field : 6 Seed : * * * * * * * * * *

let field = 1;
while (field <= 6) {
  let bag = "";
  let seed = 1;
  while (seed <= 10) {
    bag += "*" + " ";
    seed++;
  }
  console.log("Field :", field, "Seed :", bag);
  field++;
}