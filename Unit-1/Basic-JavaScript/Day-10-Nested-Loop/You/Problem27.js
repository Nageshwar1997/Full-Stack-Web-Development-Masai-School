// skip floor number 2
console.log("Skip Floor No. 2");
for (let floor = 1; floor <= 3; floor++) {
  for (let room = 1; room <= 4; room++) {
    if (floor == 2) {
      continue; // we can use break here
    }
    console.log(floor, "-", room);
  }
}
// Skip Floor No. 2
// 1 - 1
// 1 - 2
// 1 - 3
// 1 - 4
// 3 - 1
// 3 - 2
// 3 - 3
// 3 - 4

console.log("Skip Room No. 2");
for (let floor = 1; floor <= 3; floor++) {
  for (let room = 1; room <= 4; room++) {
    if (room == 2) {
      continue; // we can use break here
    }
    console.log(floor, "-", room);
  }
}
// Skip Room No. 2
// 1 - 1
// 1 - 3
// 1 - 4
// 2 - 1
// 2 - 3
// 2 - 4
// 3 - 1
// 3 - 3
// 3 - 4