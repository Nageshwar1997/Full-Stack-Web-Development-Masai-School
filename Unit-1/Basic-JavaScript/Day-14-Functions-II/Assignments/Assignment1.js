// Write a custom function that has the same behavior of inbuilt Array Join

let arr = ["Nageshwar", "Pundlikrao", "Pawar"];
let separator = "-"

function join(arr, separator) {
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      bag += arr[i];
    }
    else {
      bag += arr[i] + separator;
    }
  }
  return bag;
}

let output = join(arr, separator);

console.log(output); // Nageshwar-Pundlikrao-Pawar