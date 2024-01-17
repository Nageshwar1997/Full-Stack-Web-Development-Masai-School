// Continue:-

// The below code gives the same output as the previous (p13) code but the only difference is on break is that the execution will stop completely but in case of continue the process will keep on skipping the step and execution will end only once the loop will done.

// Code 12 : Using Continue

for (let sultan = 1; sultan <= 5; sultan++) {
  for (let bahubali = 1; bahubali <= 5; bahubali++) {
    if (bahubali > sultan) {
      continue;
    }
    console.log("Sultan :", sultan, "Bahubali :", bahubali);
  }
}

// Sultan : 1 Bahubali : 1
// Sultan : 2 Bahubali : 1
// Sultan : 2 Bahubali : 2
// Sultan : 3 Bahubali : 1
// Sultan : 3 Bahubali : 2
// Sultan : 3 Bahubali : 3
// Sultan : 4 Bahubali : 1
// Sultan : 4 Bahubali : 2
// Sultan : 4 Bahubali : 3
// Sultan : 4 Bahubali : 4
// Sultan : 5 Bahubali : 1
// Sultan : 5 Bahubali : 2
// Sultan : 5 Bahubali : 3
// Sultan : 5 Bahubali : 4
// Sultan : 5 Bahubali : 5