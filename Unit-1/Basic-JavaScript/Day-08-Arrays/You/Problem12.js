// Code 13: Print all movies except the third and fifth movies.

let movies = ["Bahuballi", "Spider Man", "Iron Man", "Super Man", "Bahubali", "RRR", "KGF"];

for (let i = 0; i < movies.length; i++) {
  if (i == 2 || i == 4) {
    continue;
  }
  console.log(movies[i]);
}

// Bahuballi
// Spider Man
// Super Man
// RRR
// KGF