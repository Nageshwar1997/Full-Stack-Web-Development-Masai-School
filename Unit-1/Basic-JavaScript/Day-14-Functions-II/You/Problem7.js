// Code 7 : custom join 

// 1. way using bag in for loop
/* 
function customJoin(arr, char) {
  if (char == undefined) {
    char = ",";
  }
  var bag = "";
  for (var i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      bag = bag + arr[i] + char;
    }
    else {
      bag = bag + arr[i];
    }
  }
  return bag;
}
var arr = ["M", "A", "N"];
console.log(customJoin(arr));
*/



// The join() method is a built-in JavaScript method that concatenates all the elements of an array into a single string, using a specified separator between each element.

let bag2 = arr.join(""); // After applying the join() method, these elements are concatenated into a single string without space between them.
console.log(bag2); // MAN


let bag3 = arr.join("-"); // After applying the join() method, these elements are concatenated into a single string with hyphen between them.
console.log(bag3); // M-A-N


let bag4 = arr.join(" "); // After applying the join() method, these elements are concatenated into a single string with space between them.
console.log(bag4); // M A N


let bag5 = arr.join(","); // After applying the join() method, these elements are concatenated into a single string with commas between them.
console.log(bag5); // M,A,N


let bag6 = arr.join("_"); // After applying the join() method, these elements are concatenated into a single string with underscore between them.
console.log(bag6); // M_A_N
