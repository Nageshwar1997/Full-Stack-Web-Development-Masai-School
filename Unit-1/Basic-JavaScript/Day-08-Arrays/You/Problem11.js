// Code 12: Print all movies except the third movie.

let movies = ["Bahuballi", "Spider Man", "Iron Man", "Super Man"];

for (let i = 0; i < movies.length; i++) {
  if (i == 2) {
    continue;
  }
  console.log(movies[i]);
}
// Bahuballi
// Spider Man
// Super Man