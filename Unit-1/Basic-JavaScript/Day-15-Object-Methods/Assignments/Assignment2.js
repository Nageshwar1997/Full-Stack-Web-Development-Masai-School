// Input

let name = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let price = [60, 50, 20];

// Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}
let data = [];

for (let i = 0; i < name.length; i++) {
  let obj = {};
  obj.Name = name[i];
  obj.Quantity = quantity[i];
  obj.Price = price[i];
  data.push(obj);
}
// console.log(data);
// [
//   { Name: 'Rice', Quantity: 2, Price: 60 },
//   { Name: 'Dal', Quantity: 3, Price: 50 },
//   { Name: 'Salt', Quantity: 1, Price: 20 }
// ]


// The object must have a method called total which calculates the total values of items (multiplying quantity of each with its price)
let total = function() {
  let totalValue = 0;
  for (let i = 0; i < data.length; i++) {
    totalValue += data[i]["Quantity"] * data[i]["Price"];
  }
  return totalValue;
}

// Sample output for the above case 290
console.log(total()); // 290