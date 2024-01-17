// Write a function to check the character is small case character or not

let a = "n";

function smallCaseChar(a) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < lower.length; i++) {
    if (a == lower[i]) {
      return true;
    }
  }
  return false;
}

let result = smallCaseChar(a);


if (result == true) {
  console.log(a, "is a small case character");
}
else {
  console.log(a, "is not a small case character");
}

// n is a small case character