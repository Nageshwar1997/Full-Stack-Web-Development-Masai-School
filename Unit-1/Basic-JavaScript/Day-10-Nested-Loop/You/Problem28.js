// Problem 1 : Given an array find the unique items in the array

let arr = ["Nageshwar", "Manjusha", "Dhanashree", "Rutuja", "Rutuja", "Kiran", "Sonali"];

let party = [];
let present = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < party.length; j++) {
    if (arr[i] == party[j]) {
      present = true;
      break;
    }
  }
  if (present == false) {
    party.push(arr[i]);
  }
  else {
    present = false;
  }
}
console.log(party); // [ 'Nageshwar', 'Manjusha', 'Dhanashree', 'Rutuja', 'Kiran', 'Sonali' ]