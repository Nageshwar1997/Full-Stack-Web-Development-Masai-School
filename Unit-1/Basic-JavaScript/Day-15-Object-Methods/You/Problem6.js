//create a object and write your length and width inside the object as keys with their values.

// write  a function for calculating area of that length and width
// area=length*width

// write  a function for calculating perimeter of that length and width
// perimeter=2*(length+width)


let rectangle = {
  length: 2,
  width: 4,
  area: function() {
    console.log("Area-", this.length * this.width);
  },
  perimeter: function() {
    console.log("Perimete-", 2 * (this.length + this.width));
  }
}

rectangle.area(); // Area- 8
rectangle.perimeter(); // Perimete- 12