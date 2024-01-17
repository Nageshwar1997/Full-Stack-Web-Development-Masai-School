// Code 9 : Combining Code 6 and Code 8 form a pyramid.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let father = 1; father <= 5; father++) {
  bag1 = "";
  for (let son = 1; son <= father; son++) {
    bag1 += +son + " ";
  }
  console.log(bag1);
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let father = 4; father >= 1; father--) {

  let bag2 = "";
  for (let son = 1; son <= father; son++) {
    bag2 += son + " ";
  }
  console.log(bag2)
}
// 1 2 3 4
// 1 2 3
// 1 2
// 1