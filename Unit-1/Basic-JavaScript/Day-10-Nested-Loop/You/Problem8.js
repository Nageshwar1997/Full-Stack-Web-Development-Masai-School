// Code 7 : Father has 5 fields. Son needs to put the seeds in decreasing order.

// Field 1 → 5 seed
// Field 2 → 4 seed
// Field 3 → 3 seed
// Field 4 → 2 seed
// Field 5 → 1 seed

for (let field = 1; field <= 5; field++) {
  let bag = "";
  for (let seed = 5; seed >= field; seed--) {
    bag += "* ";
  }
  console.log("Field :", field, "Seed :", bag);
}

// Field : 1 Seed : * * * * * 
// Field : 2 Seed : * * * * 
// Field : 3 Seed : * * * 
// Field : 4 Seed : * * 
// Field : 5 Seed : * 