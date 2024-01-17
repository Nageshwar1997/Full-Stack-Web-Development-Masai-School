let developersArray = [
    { first: "Nageshwar", last: "Pawar", dept: "WEB", commits: 10 },
    { first: "Manjusha", last: "Magar", dept: "BHMS", commits: 15 },
    { first: "Suyog", last: "Barsagade", dept: "BE", commits: 20 },
    { first: "Dhanashree", last: "Bobhate", dept: "BHMS", commits: 14 }
];


let departments = developersArray.reduce((acc, item) => {
    acc[item.dept] = true;
    return acc;
}, {})
console.log(departments); // { WEB: true, BHMS: true, BE: true }