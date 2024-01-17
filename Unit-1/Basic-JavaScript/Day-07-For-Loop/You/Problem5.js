// print number from 1 to 10 in horizontal manner. 
// check the datatype of output

let bag=""; // empty string ""
// let bag=" "; // empty string with space " "
for(let i=1; i<=10; i++){
  bag+=i+" "; 
}
console.log(bag); // 1 2 3 4 5 6 7 8 9 10
console.log(typeof(bag)); // string




let bag1="";

for(let i=1; i<=10; i++){
  bag1+=i+""; 
}
console.log(bag1); // 12345678910
console.log(typeof(bag1)); // string