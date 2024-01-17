// Code 4 : Father has 5 fields . Each fields son needs to put 10 seeds

for (let field = 1; field <= 5; field++) {
  let bag = "";
  for (let seed = 1; seed <= 10; seed++) {
    bag += "*" + " ";
  }
  console.log("Field :", field, "Seeds :", bag);
}

// Field : 1 Seeds : * * * * * * * * * * 
// Field : 2 Seeds : * * * * * * * * * * 
// Field : 3 Seeds : * * * * * * * * * * 
// Field : 4 Seeds : * * * * * * * * * * 
// Field : 5 Seeds : * * * * * * * * * * 