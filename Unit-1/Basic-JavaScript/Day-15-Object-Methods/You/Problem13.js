// Using For in loop ---->

// Create a submit function print all the values which are inside an object

// Create a total function to print the total of Marks

// Create a function to reset the all values of keys in object

let details = {
  Name: "Nageshwar",
  Age: 25,
  City: "Nanded",
  Marks: {
    Eng: 85,
    Phy: 80,
    Chem: 84,
    Math: 82
  },
  submit: function() {
    for (let key in details) {
      if ((key === "submit") || (key === "total") || (key === "reset")) {
        continue;
      }
      else {
        console.log(key + ":", details[key]);
      }
    }
  },
  total: function() {
    let totalMarks = 0
    for (let key in this.Marks) {
      totalMarks += this.Marks[key];
    }
    console.log("Total Marks:", totalMarks);
  },
  reset: function() {
    for (let key in details) {
      if ((key === "submit") || (key === "total") || (key === "reset")) {
        continue;
      }
      else {
        if (key === "Marks") {
          for (let m in this.Marks) {
            this.Marks[m] = "Empty"
            console.log("Marks Of", m + ":", this.Marks[m]);
          }
        }
        else {
          details[key] = "Empty";
          console.log(key + ":", details[key])
        }
      }
    }
  }
}
details.submit();
/* 
Name: Nageshwar
Age: 25
City: Nanded
Marks: { Eng: 85, Phy: 80, Chem: 84, Math: 82 } */

details.total();
// Total Marks: 331

details.reset();
/* 
Name: Empty
Age: Empty
City: Empty
Marks Of Eng: Empty
Marks Of Phy: Empty
Marks Of Chem: Empty
Marks Of Math: Empty */