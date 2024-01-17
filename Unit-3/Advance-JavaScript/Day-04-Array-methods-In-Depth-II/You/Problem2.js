let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];

// [16, 20, 23, 30]

let newArr = users.reduce((acc, item) => {
    // iteration 2 - acc: [16]
    // iteration 2 - item: {age: 20}
    acc.push(item.age);

    return acc;
}, [])

console.log(newArr); // [ 16, 20, 23, 30 ]

let newArr2 = users.map((item) => {
  return item.age * 2;
});


console.log(newArr2); // [ 32, 40, 46, 60 ]

/*
Problem Statement: 

Use proper array method such that the newArr becomes: 
 [16,20,23,30]
 
The newArr is simply an array of numbers, in this problem the ages of the users. 
*/