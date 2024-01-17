// create a object method, where you need to reverse the names in the array

/* input --->["Nageshwar","Manjusha","Dhanashree","Suyog"]
this array should be inside the object.*/


/* you need to convert each element in reverse order and print a new array. output ---> [ 'rawhsegaN', 'ahsujnaM', 'eerhsanahD', 'goyuS' ] */

// 1. create a  object.
// 2. array should be inside the object.
// 3. write a function which can loop over this array and convert each element of array in reverse order.


// Way 1

let obj1 = {
  array: ["Nageshwar", "Manjusha", "Dhanashree", "Suyog"],
  reverse: function(element) {
    let reversedElement = "";
    for (let i = element.length - 1; i >= 0; i--) {
      reversedElement += element[i];
    }
    return reversedElement;
  }
}
let newArray = [];
for (let i = 0; i < obj1.array.length; i++) {
  newArray.push(obj1.reverse(obj1.array[i]))
}
console.log(newArray);
// [ 'rawhsegaN', 'ahsujnaM', 'eerhsanahD', 'goyuS' ]



// Way 2

let obj2 = {
  array: ["Nageshwar", "Manjusha", "Dhanashree", "Suyog"],
  reversedArray: function() {
    let newArray = []; // taking empty array
    let reversed = ""; // taking empty string

    for (let i = 0; i < this.array.length; i++) { // run a loop over the array
      for (let j = this.array[i].length - 1; j >= 0; j--) {
        reversed += this.array[i][j]; // adding each character of array element into reversed string
      }
      newArray.push(reversed); // pushing reversed string into newArray
      reversed = ""; // making reversed(bag) empty
    }
    return newArray; // returning newArray
  }
}
let output = obj2.reversedArray(); // storing the function into a variable
console.log(output); // printing the output

// [ 'rawhsegaN', 'ahsujnaM', 'eerhsanahD', 'goyuS' ]