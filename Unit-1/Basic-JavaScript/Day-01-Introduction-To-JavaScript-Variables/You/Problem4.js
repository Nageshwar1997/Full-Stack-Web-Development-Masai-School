// 2. Non Premitive Data Type (1)

// Object

// 1) An Object
let x={
  name:"Nageshwar",
  age:25,
  marriage:false
};
console.log(x); // { name: 'Nageshwar', age: 25, marriage: false }
console.log(typeof(x)); // object

// 2) An Array
let y=["Nageshwar", "Manjusha", "Pawar"];
console.log(y); // [ 'Nageshwar', 'Manjusha', 'Pawar' ]
console.log(typeof(y)); // object

// 3) A Date
let dateAndTime=new Date("01-09-1997 02:12:05.001");
console.log(dateAndTime); // 1997-01-09T02:12:05.000Z
console.log(typeof(dateAndTime)); // object

let date=new Date("01-09-1997");
console.log(date); // 1997-01-09T00:00:00.000Z
console.log(typeof(date)); // object