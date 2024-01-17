// Code 13 : Break vs Continue . Predict the Output

// **BREAK**

for (let sultan = 1; sultan <= 5; sultan++) {

  for (let bahubali = 1; bahubali <= 5; bahubali++) {
    if (sultan == bahubali) {
      break;
    }
    console.log("Sultan :", sultan, "Bahubali :", bahubali);
  }
}

// Sultan : 2 Bahubali : 1
// Sultan : 3 Bahubali : 1
// Sultan : 3 Bahubali : 2
// Sultan : 4 Bahubali : 1
// Sultan : 4 Bahubali : 2
// Sultan : 4 Bahubali : 3
// Sultan : 5 Bahubali : 1
// Sultan : 5 Bahubali : 2
// Sultan : 5 Bahubali : 3
// Sultan : 5 Bahubali : 4


// **CONTINUE**

for (let sultan = 1; sultan <= 5; sultan++) {
  for (let bahubali = 1; bahubali <= 5; bahubali++) {
    if (sultan == bahubali) {
      continue;
    }
    console.log("Sultan :", sultan, "Bahubali :", bahubali);
  }
}

// Sultan : 2 Bahubali : 1
// Sultan : 3 Bahubali : 1
// Sultan : 3 Bahubali : 2
// Sultan : 4 Bahubali : 1
// Sultan : 4 Bahubali : 2
// Sultan : 4 Bahubali : 3
// Sultan : 5 Bahubali : 1
// Sultan : 5 Bahubali : 2
// Sultan : 5 Bahubali : 3
// Sultan : 5 Bahubali : 4
// Sultan : 1 Bahubali : 2
// Sultan : 1 Bahubali : 3
// Sultan : 1 Bahubali : 4
// Sultan : 1 Bahubali : 5
// Sultan : 2 Bahubali : 1
// Sultan : 2 Bahubali : 3
// Sultan : 2 Bahubali : 4
// Sultan : 2 Bahubali : 5
// Sultan : 3 Bahubali : 1
// Sultan : 3 Bahubali : 2
// Sultan : 3 Bahubali : 4
// Sultan : 3 Bahubali : 5
// Sultan : 4 Bahubali : 1
// Sultan : 4 Bahubali : 2
// Sultan : 4 Bahubali : 3
// Sultan : 4 Bahubali : 5
// Sultan : 5 Bahubali : 1
// Sultan : 5 Bahubali : 2
// Sultan : 5 Bahubali : 3
// Sultan : 5 Bahubali : 4