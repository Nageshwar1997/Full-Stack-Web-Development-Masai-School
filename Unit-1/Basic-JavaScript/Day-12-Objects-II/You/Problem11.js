let flipkart = [
  { type: "Monitor", brand: "HP", price: 2000 },
  { type: "Camera", brand: "SONY", price: 15000 },
  { type: "Laptop", brand: "Dell", price: 80000 },
  { type: "Mobile", brand: "Samsung", price: 19000 },
  { type: "Printer", brand: "Brother", price: 18000 },
  { type: "Monitor", brand: "Zebster", price: 1000 }
];

let query = "Monitor";

for (let i = 0; i < flipkart.length; i++) {
  if (flipkart[i]["type"] == query) {
    console.log(flipkart[i]);
  }
}
// { type: 'Monitor', brand: 'HP', price: 2000 }
// { type: 'Monitor', brand: 'Zebster', price: 1000 }