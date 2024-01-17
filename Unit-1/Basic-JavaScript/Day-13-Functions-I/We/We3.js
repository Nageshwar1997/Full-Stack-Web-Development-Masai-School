// Create a function to check if the number is prime or non-prime

function prime_or_not(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

// Using the above function to print the non-prime numbers from 2 to 10

for (let j = 2; j <= 10; j++) {
  let result = prime_or_not(j);
  if (result == false) {
    console.log(j, "is a non-prime number");
  }
}
/* 
4 is a non-prime number
6 is a non-prime number
8 is a non-prime number
9 is a non-prime number
10 is a non-prime number */