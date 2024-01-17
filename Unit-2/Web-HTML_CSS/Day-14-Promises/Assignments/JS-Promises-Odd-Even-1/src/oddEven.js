
let btn = document.getElementById("generate-number");

function generateNumber() {
  let number = document.getElementById("number");
  // generate a random integer(hint : Math.random)
  let randomNumber = Math.floor(Math.random() * 100);
  number.textContent = randomNumber;
  checkOddEven(randomNumber);
}

function checkOddEven(num) {
  // logic for even / odd
  let oddEvenNum = document.getElementById("odd-even");
  if (num % 2 == 0) {
    oddEvenNum.textContent = "The number is even";
  }
  else if (num % 2 == 1) {
    oddEvenNum.textContent = "The number is odd";
  }
}

window.onload = function () {
  // add event listeners to the button here
  btn.addEventListener("click", () => {
    generateNumber();
    checkOddEven();
  });
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
