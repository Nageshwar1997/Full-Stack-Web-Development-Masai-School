// Code 9 : Splice
// syntax:---> newArray=array.splice(startIndex, deleteCount, addedElements(it is separated by commas))

// It will affect on origional array length and create new array

let animals1 = ["cat", "dog", "rat", "lion"];

let newArr1 = animals1.splice(); //  it will create a new array but here we nothing is defined starting point thatswhy this array will be empty

console.log("New Array :", newArr1); // New Array : []
console.log("Original", animals1); // Original [ 'cat', 'dog', 'rat', 'lion' ]



let animals2 = ["cat", "dog", "rat", "lion"];

let newArr2 = animals2.splice(2); // here our starting index is 2 thatswhy after index 2 all element will be deleting from origional array and moving to new array, we don't take how many element want to delete

console.log("New Array :", newArr2); // New Array : [ 'rat', 'lion' ]
console.log("Original", animals2); // Original [ 'cat', 'dog' ]



let animals3 = ["cat", "dog", "rat", "lion"];

let newArr3 = animals3.splice(1, 1); // here we know our starting index and how many elements want to remove from origional array and move to the new array

console.log("New Array :", newArr3); // New Array : [ 'dog' ]
console.log("Original", animals3); // Original [ 'cat', 'rat', 'lion' ]



let animals4 = ["cat", "dog", "rat", "lion"];

let newArr4 = animals4.splice(1, 2, "tiger"); // here we know our starting index and how many elements want to remove from origional array and move to the new array and last we know which element want to add in previous array at the position of removed element (doesn't matter how many elements are removed opr deleted)

console.log("New Array :", newArr4); // New Array : [ 'dog', 'rat' ]
console.log("Original", animals4); // Original [ 'cat', 'tiger', 'lion' ]



let animals5 = ["cat", "dog", "rat", "lion"];

let newArr5 = animals5.splice(1, 2, "tiger", true, 5); // here we know our starting index and how many elements want to remove from origional array and move to the new array and last we know which element want to add in previous array at the position of removed element (doesn't matter how many elements are removed opr deleted) we can add number of elements add that index, we can add every type of data

console.log("New Array :", newArr5); // New Array : [ 'dog', 'rat' ]
console.log("Original", animals5); // Original [ 'cat', 'tiger', true, 5, 'lion' ]


