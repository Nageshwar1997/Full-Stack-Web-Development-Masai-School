const arr = ["Iron-Man", "Spider-Man", "Hulk", "Captain America"];

// Pure Function
const addNewAvenger = (newAvenger, avengersArr) => {
    let newAvengersArr = [...avengersArr, newAvenger];

    return newAvengersArr;
}

const newArr = addNewAvenger("Black Panther", arr);
console.log(arr); // [ 'Iron-Man', 'Spider-Man', 'Hulk', 'Captain America' ]


console.log(newArr); // [ 'Iron-Man', 'Spider-Man', 'Hulk', 'Captain America', 'Black Panther' ]
