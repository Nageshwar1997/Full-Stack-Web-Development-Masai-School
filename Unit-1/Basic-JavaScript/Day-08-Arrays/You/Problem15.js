// Code 17 : For Even or Odd Array, print the first half of the arr1ay

let oddArray = ["A", "B", "C", "D", "E", "F", "G"];

if (oddArray.length % 2 == 0) {
  end = oddArray.length / 2;
}
else {
  end = Math.floor(oddArray.length / 2);
}

for (let i = 0; i < end; i++) {
  console.log(oddArray[i]);
}

// A
// B
// C

let evenArray = ["A", "B", "C", "D", "E", "F", "G"];

if (evenArray.length % 2 == 0) {
  end = evenArray.length / 2;
}
else {
  end = Math.floor(evenArray.length / 2);
}

for (let i = 0; i < end; i++) {
  console.log(evenArray[i])
}
// A
// B
// C