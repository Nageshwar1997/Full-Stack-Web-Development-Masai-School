// Print the Product with price Which price is highest


let object = {
  data: [
    { name: "iPhone", price: 80000, color: "Red" },
    { name: "OnePlus", price: 60000, color: "Blue" },
    { name: "Samsung", price: 50000, color: "Green" },
  ],
  high_price: function() {
    let maxPrice = -Infinity;
    let product = null;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].price > maxPrice) {
        maxPrice = this.data[i].price;
        product = this.data[i]["name"];
      }
    }
    // console.log(product,"-",maxPrice);
    return (product + "\n" + maxPrice);
  }
}
// object.high_price(); // iPhone - 80000
let output = object.high_price();
console.log(output);
// iPhone
// 80000