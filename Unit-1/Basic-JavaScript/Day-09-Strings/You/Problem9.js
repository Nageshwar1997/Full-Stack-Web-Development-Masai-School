// Code 10: Update String using array and third variable. [Second Method]

// 2nd way

let name = "Mageshwar";
let bag = ""; // empty string
for (let i = 0; i < name.length; i++) {
  if (i == 0) { // checking when the i'th position will be 0 then
    bag = bag + "N"; // replacing the value of i'th index to "N"
  }
  else {
    bag += name[i]; // adding all characters in a bag
  }
}
console.log(bag); // Nageshwar