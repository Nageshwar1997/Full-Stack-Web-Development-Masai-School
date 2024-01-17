//find the average rating of the amazon data.

let amazon = [
  { name: "speakers", price: 5400, rating: 4 },
  { name: "headphones", price: 3000, rating: 3 },
  { name: "playstation", price: 50000, rating: 5 },
  { name: "watch", price: 3000, rating: 4 }
];

let sum = 0;
let count = 0;

for (let i = 0; i < amazon.length; i++) {
  sum += amazon[i]["rating"];
  count++;
}
console.log(sum / count); // 4