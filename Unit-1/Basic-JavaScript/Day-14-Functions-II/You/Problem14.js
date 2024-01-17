// Write a function to check the number is even or odd
function check_even_or_odd(number) {
  if (number % 2 == 0) {
    return true; // Even
  }
  else {
    return false; // Odd
  }
}




// 1. Print How many even numbers are present in the given array
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenCount = 0;

for (let i = 0; i < arr1.length; i++) {
  let result = check_even_or_odd(arr1[i]);

  if (result) { // here result ===> (result == true)
    evenCount++;
  }
}
console.log(evenCount, "Even numbers are present in array"); // 5 Even numbers are present in array



// 2. Print How many numbers are even and odd present in the given array

let arr2 = [11, 22, 32, 65, 45, 48, 48, 65, 95, 93, 97, 98];

let evenCount1 = 0;
let oddCount1 = 0;

for (let i = 0; i < arr2.length; i++) {
  if (check_even_or_odd(arr2[i]) == true) {
    evenCount1++;
  }
  else {
    oddCount1++;
  }
}
console.log(evenCount1, "Even numbers are present in an array"); // 5 Even numbers are present in an array
console.log(oddCount1, "Odd numbers are present in an array"); // 7 Odd numbers are present in an array




// if even numbers are more print the count of even number.
// else if odd number numbers are more print the count of odd number.
// else if both numbers count are same print both are same.

let arr3 = [2, 454, 6567, 787, 345, 3458678];

let evenCount2 = 0;
let oddCount2 = 0;

for (let i = 0; i < arr3.length; i++) {
  if (check_even_or_odd(arr3[i]) == true) {
    evenCount2++;
  }
  else {
    oddCount2++;
  }
}
if (evenCount2 > oddCount2) {
  console.log(evenCount2, "Even");
}
else if (oddCount2 > evenCount2) {
  csole.log(oddCount2, "Odd");
}
else if (oddCount2 == evenCount2) {
  console.log("Even and Odd both numbers are same");
}
// Even and Odd both numbers are same