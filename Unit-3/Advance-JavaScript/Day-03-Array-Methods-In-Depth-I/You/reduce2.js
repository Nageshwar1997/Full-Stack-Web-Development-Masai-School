let developersArray = [
    { first: "Nageshwar", last: "Pawar", dept: "WEB", commits: 10 },
    { first: "Manjusha", last: "Magar", dept: "BHMS", commits: 15 },
    { first: "Suyog", last: "Barsagade", dept: "BE", commits: 20 },
    { first: "Dhanashree", last: "Bobhate", dept: "BHMS", commits: 14 }
];

// console.log(developersArray);

let initialValue1 = 0;
let totalCommits = developersArray.reduce((accumulatedValue, item) => {
    return accumulatedValue += item.commits;
}, initialValue1);

console.log(totalCommits); // 59

let initialValue2 = [];
let engineers = developersArray.reduce((accumulatedValue, item) => {
    let fullName = `${item.first} ${item.last}`;
    accumulatedValue.push(fullName);
    return accumulatedValue;
},initialValue2)

console.log(engineers);

// [
//     'Nageshwar Pawar',
//     'Manjusha Magar',
//     'Suyog Barsagade',
//     'Dhanashree Bobhate'
// ]


