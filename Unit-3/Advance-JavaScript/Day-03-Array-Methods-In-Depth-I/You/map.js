let developersArray = [
    { first: "Nageshwar", last: "Pawar", dept: "WEB", commits: 10 },
    { first: "Manjusha", last: "Magar", dept: "BHMS", commits: 15 },
    { first: "Suyog", last: "Barsagade", dept: "BE", commits: 20 },
    { first: "Dhanashree", last: "Bobhate", dept: "BHMS", commits: 14 }
];

// console.log(developersArray);

let engineers1 = developersArray.map((item) => {
    let fullName = `${item.first} ${item.last}`;
    return fullName;
})

console.log(engineers1);

let engineers2 = developersArray.map(item => `${item.first} ${item.last}`);
console.log(engineers2);

// [
//     'Nageshwar Pawar',
//     'Manjusha Magar',
//     'Suyog Barsagade',
//     'Dhanashree Bobhate'
// ]

