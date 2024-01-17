const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once: 227005

// 1st Way
let total1 = 0;
for (let item of wishlist) {
    total1 += item.price;
}
console.log(total1); // 227005


// 2nd Way
let total2 = wishlist.reduce((acc, item) => {
    return acc + item.price;
}, 0);
console.log(total2); // 227005