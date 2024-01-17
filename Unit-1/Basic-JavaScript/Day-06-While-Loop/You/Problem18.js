//run a loop from 1-15 print only the odd number in it
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
let number = 1;

while (number <= 15) {
  if (number % 2 == 1) {
    console.log(number);
  }
  number++;
}