let object = {
  a: 5,
  b: 6
}
object.a++;
object["b"]++

console.log(object.a); // 6
console.log(object["b"]); // 7


for (let key in object) {
  console.log(object[key]);
}
/* 
6
7
*/