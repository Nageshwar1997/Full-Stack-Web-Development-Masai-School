//create a object and write your length and width inside the object as keys with their values.

// write  a function for calculating area of that length and width

// write  a function for calculating perimeter of that length and width

let length = 5;
let width = 4;


let rectangle = {
  l:length,
  w:width,
  area: function() {
    let areaOfRect = this.w * this.l;
    console.log("Area -", areaOfRect);
  },
  perimeter: function() {
    let perimeterOfRect = 2 * (this.w + this.l);
    console.log("Perimeter -", perimeterOfRect);
  }
}

rectangle.area(length,width); // Area - 20
rectangle.perimeter(length,width); // Perimeter - 18
