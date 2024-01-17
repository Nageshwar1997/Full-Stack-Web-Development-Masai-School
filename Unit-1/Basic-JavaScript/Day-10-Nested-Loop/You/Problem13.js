// Que:- Sultan and Bahubali were the good friends , but Sultan was the king whereas Bahubali does n’t have any kingdom. Later Sultan gave one part of his empire to Bahubali with a condition that Bahubali will never try to cross the status of Sultan and if he tries that then sultan will attack on the Bahubali's clan.

// Code 11 : Using Break

for (let sultan = 1; sultan <= 5; sultan++) {

  for (let bahubali = 1; bahubali <= 5; bahubali++) {
    if (bahubali > sultan) {
      break;
    }
    console.log("Sultan :", sultan, "Bahubali :", bahubali);
  }
}

// In the above code, whenever the value of Bahubali become greater than Sultan, At that point the inner loop of bahuballi will break [ It means sultan attacked on his clan because Bahubali betray him, by not following his conditions]


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