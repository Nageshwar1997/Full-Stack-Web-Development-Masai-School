// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties

// Create two methods area and perimeter, that will return the area and perimeter of the rectangle



let rectangle = {
  length: 5,
  width: 4,

  area: function() {

    let areaOfRect = this.length * this.width;
    return areaOfRect;
  },

  perimeter: function() {

    let perimeterOfRect = 2 * (this.length + this.width);
    return perimeterOfRect;
  }
}

let areaOfRectangle = rectangle.area();
console.log("Area of the Rectangle is", areaOfRectangle);

let perimeterOfRectangle = rectangle.perimeter();
console.log("Perimeter of the Rectangle is", perimeterOfRectangle);

console.log(rectangle);