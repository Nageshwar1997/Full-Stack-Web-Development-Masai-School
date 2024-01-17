// Code 10 : indexOf

let paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

let searchTerm1 = 'e'; // we can search first index of character in a string

let indexOfFirst1 = paragraph.indexOf(searchTerm1);
console.log(indexOfFirst1); // 2


let searchTerm2 = ' '; // we can search first index of character (space) in a string

let indexOfFirst2 = paragraph.indexOf(searchTerm2);
console.log(indexOfFirst2); // 3


let searchTerm3 = 'lazy'; // we can search first index of word in a string (here it will consider whole word's first character index eg.--> l)

let indexOfFirst3 = paragraph.indexOf(searchTerm3);
console.log(indexOfFirst3); // 35 (it is the index of word of first character "l")
