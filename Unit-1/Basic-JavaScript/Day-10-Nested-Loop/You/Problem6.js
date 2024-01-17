// Code 5 : Father has 5 fields. Son needs to put the seeds in increasing order.

// Field 1 → 1 seed
// Field 2 → 2 seed
// Field 3 → 3 seed
// Field 4 → 4 seed
// Field 5 → 5 seed

for (let field = 1; field <= 5; field++) {
  let bag = "";
  for (let seed = 1; seed <= field; seed++) {
    bag += "*" + " ";
  }
  console.log("Field :", field, "Seed :", bag)
}

// Field : 1 Seed : * 
// Field : 2 Seed : * * 
// Field : 3 Seed : * * * 
// Field : 4 Seed : * * * * 
// Field : 5 Seed : * * * * * 