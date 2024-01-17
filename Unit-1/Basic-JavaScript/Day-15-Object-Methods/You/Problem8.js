// Convert this elements of array into a reverse manner 

// input --->["Nageshwar","Manjusha","Dhanashree","Suyog"]
// output ---> [ 'rawhsegaN', 'ahsujnaM', 'eerhsanahD', 'goyuS' ]


let obj = {
  array: ["Nageshwar", "Manjusha", "Dhanashree", "Suyog"],
  reverse: function() {
    let newArray = [];
    for (let i = 0; i < this.array.length; i++) {
      let string = this.array[i];
      let bag = "";
      for (let j = string.length - 1; j >= 0; j--) {
        bag += string[j];
      }
      newArray.push(bag);
    }
    console.log(newArray);
  }
}
obj.reverse();
// [ 'rawhsegaN', 'ahsujnaM', 'eerhsanahD', 'goyuS' ]