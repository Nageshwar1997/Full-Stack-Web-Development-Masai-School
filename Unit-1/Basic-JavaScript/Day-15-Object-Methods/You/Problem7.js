// Way 1

//write a function to print each and every element inside the array.
//write the function inside the object.

let obj = {
  array: ["Nageshwar", "Manjusha", "Dhanashree", "Rutuja"],
  print: function() {
    for (let i = 0; i < this.array.length; i++) {
      console.log(this.array[i]);
    }
  }
}
obj.print();
// Nageshwar
// Manjusha
// Dhanashree
// Rutuja




// Way 2

//write a function to print each and every element inside the array.
//write the function inside the object.

let object = {
  array: ["Nagesh", "Mahesh", "Sanket", "Vishnu"],
  print: function(name) {
    return name;
  }
}

for (let i = 0; i < object["array"].length; i++) {
  let output = object.print(object.array[i]);
  console.log(output);
}
// Nagesh
// Mahesh
// Sanket
// Vishnu