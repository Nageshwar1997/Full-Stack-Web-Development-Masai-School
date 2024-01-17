// Code 8 : Print the below reverse pattern
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 5; i >= 1; i--) {
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag += j + " ";
  }
  console.log(bag);
}