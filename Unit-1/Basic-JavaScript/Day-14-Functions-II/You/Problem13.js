// Code 12 : Custom split mySplit()

// input ---> "The quick brown fox"
// output ---> [ 'The', 'quick', 'brown', 'fox' ]

// Step 1: Declare a function named "mySplit" which takes a string "str" as a parameter.
function mySplit(str) {
  var output = []; // Step 2: Declare an empty array called "output" to store the split words.
  var bag = ""; // Step 3: Declare an empty string variable called "bag" to temporarily store each word.

  // Step 4: Start a loop that iterates over each character in the input string "str".
  for (var i = 0; i < str.length; i++) {
    // Step 5: Check if the current character is not a space character.
    if (str[i] != " ") {
      bag = bag + str[i]; // Step 6: If it's not a space, add the character to the "bag" variable.
    }
    else {
      // Step 7: If the current character is a space and "bag" is not empty, it means we have a complete word. In this case, add the word to the "output" array.
      if (bag != "") {
        output.push(bag);
      }
      bag = ""; // after pushing the bag into a "output" we need to do "bag" as an empty
    }
  }
  output.push(bag); //Step 8: After the loop ends, add the last word in "bag" (if any) to the "output" array.
  return output; // Step 9: Finally, return the "output" array.
}
// Step 10: Declare a variable "str" and assign it the value "The quick brown fox".
var str = "The quick brown fox";

// Step 11: Call the "mySplit" function with the "str" variable as an argument and store the result in a variable (not shown in the code).

// Step 12: Display the result of the "mySplit" function by logging it to the console.
console.log(mySplit(str)); // [ 'The', 'quick', 'brown', 'fox' ]


/* Overall, the code takes a string as input, splits it into individual words, and returns an array containing those words.
The "mySplit" function accomplishes this by iterating over each character in the string, accumulating characters into a temporary "bag" variable until a space character is encountered.
At that point, the word in the "bag" is added to the "output" array, and the "bag" is reset for the next word.
The resulting array of words is then logged to the console. */