// Code 6 : Print the below pattern

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  let bag = "";
  for (let j = 1; j <= i; j++) { // loop run till the i
    bag += j + " ";
  }
  console.log(bag);
}