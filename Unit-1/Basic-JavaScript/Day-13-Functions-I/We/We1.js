// Create a function to check if the number is prime or not

function prime_or_not(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(number, "is a prime number");
  }
  else {
    console.log(number, "is not a prime number");
  }
}
prime_or_not(37); // 37 is a prime number