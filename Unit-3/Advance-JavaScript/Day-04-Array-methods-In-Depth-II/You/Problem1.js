let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let newArr = users.reduce((acc, item) => {
    acc[item.name] = item.id;
    return acc;
},{})

console.log(newArr); // { John: 1, Pete: 2, Mary: 3 }
/*
Use proper array method such that the newArr becomes: 
 {John: 1, Pete: 2, Mary: 3}
 
Note: the order doesnot matter here. 

Problem Statement: you are expected to use of the array mehtods
to create a new object called newArr using the users Array.

the keys of the new object (newArr) would be the name of the user 
and the values would be the id of the user
*/