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
    console.log("Name:", this.Name);
    console.log("Age:", this.Age);
    console.log("City:", this.City);
    console.log("Marks Of Eng:", this.Marks.Eng);
    console.log("Marks Of Phy:", this.Marks.Phy);
    console.log("Marks Of Chem:", this.Marks.Chem);
    console.log("Marks Of Math:", this.Marks.Math);
  },
  total: function() {
    let total = (this.Marks.Eng) + (this.Marks.Phy) + (this.Marks.Chem) + (this.Marks.Math);
    console.log("Total Marks:", total);
  },
  reset: function() {
    this.Name = "";
    console.log("Name:", this.Name);
    this.Age = "";
    console.log("Age:", this.Age);
    this.City = "";
    console.log("City:", this.City);
    this.Marks.Eng = "";
    console.log("Marks Of Eng:", this.Marks.Eng);
    this.Marks.Phy = "";
    console.log("Marks Of Phy:", this.Marks.Phy);
    this.Marks.Chem = "";
    console.log("Marks Of Chem:", this.Marks.Chem);
    this.Marks.Math = "";
    console.log("Marks Of Math:", this.Marks.Math);
  }
}
details.submit();
/* 
Name: Nageshwar
Age: 25
City: Nanded
Marks Of Eng: 85
Marks Of Phy: 80
Marks Of Chem: 84
Marks Of Math: 82 */

details.total();
// Total Marks: 331

details.reset();
/* 
Name: 
Age: 
City: 
Marks Of Eng: 
Marks Of Phy: 
Marks Of Chem: 
Marks Of Math: */