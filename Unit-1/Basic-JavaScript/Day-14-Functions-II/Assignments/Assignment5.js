// Write a custom function that has the same behavior of inbuilt Array Includes Function

let arr = ["My", "Name", "Is", "Nageshwar", "Pawar"];

let check_el = "Nageshwar"; // it is the element which is we want to check in the array

let isElementPresent = function(arr, check_el) { // using anonymous function
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == check_el) { // checking the element is present in the array or not
      return true; // if the elemnt is present then return true
    }
  }
  return false; // if the above condition is not satisfied then return false
}

console.log(isElementPresent(arr, check_el)); // calling the function and printing the result