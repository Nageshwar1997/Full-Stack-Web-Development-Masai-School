// Code 12: Print the first 3 items in the array using a loop.

let array = ["Spider Man", "Ant Man", "Iron Man", "Bat Man", "Hulk", "Thor"];

// 1st way
for (let i = 0; i < 3; i++) {
  console.log(array[i]);
}
// Spider Man
// Ant Man
// Iron Man


// 2nd way [ Using Break ]
for (let i = 0; i < array.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(array[i]);
}
// Spider Man
// Ant Man
// Iron Man