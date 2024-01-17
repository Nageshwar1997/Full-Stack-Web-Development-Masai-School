//print the numbers from 0 to 10,but we need to find only even numbers in this 0 to 10
// 0
// 2
// 4
// 6
// 8
// 10

let number = 0;

while (number <= 10) {
  if (number % 2 == 0) {
    console.log(number);
  }
  number = number + 1; // number++ or ++number
}