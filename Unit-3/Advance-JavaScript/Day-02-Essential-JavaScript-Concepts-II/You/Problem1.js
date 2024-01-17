let obj1 = { name: "Nageshwar" };
let obj2 = obj1;
console.log(obj2); // { name: 'Nageshwar'}
let obj3 = obj2;

obj2.name = "Manjusha"
obj3.age = 26;
console.log(obj2); // { name: 'Manjusha', age: 26 }
console.log(obj1); // { name: 'Manjusha', age: 26 }
console.log(obj3); // { name: 'Manjusha', age: 26 }



let str1 = "Nageshwar";
let str2 = str1;
let str3 = str2;

str3 = "Manjusha";
console.log(str1); // Nageshwar
console.log(str2); // Nageshwar
console.log(str3); // Manjusha


let arr1 = [1, 2, 3];
let arr2 = arr1;
let arr3 = arr2;

arr3[0] = 5;
console.log(arr1); // [ 5, 2, 3 ]
console.log(arr2); // [ 5, 2, 3 ]
console.log(arr3); // [ 5, 2, 3 ]
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]); // 5 2 3
}



let func1 = function () {
    console.log("Hello World!");
}
let func2 = func1;
let func3 = func2;

console.log(func1); // [Function: func1]
console.log(func2); // [Function: func1]
console.log(func3); // [Function: func1]