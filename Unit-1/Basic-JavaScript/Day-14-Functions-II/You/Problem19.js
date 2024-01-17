// Write afunction to create a string

function arrayToString(element) {
  let bag = "";
  for (let i = 0; i < element.length; i++) {
    if (element[i] == ",") {
      bag += " ";
    }
    else {
      bag += element[i];
    }
  }
  return bag;
}


let arr = ["Nageshwar", "Pundlikrao", "Pawar"];
// converting array to single string using join() menthod
let str = arr.join(); // "Nageshwar,Pundlikrao,Pawar"

let output = arrayToString(str); // calling a function

console.log(output); // Nageshwar Pundlikrao Pawar