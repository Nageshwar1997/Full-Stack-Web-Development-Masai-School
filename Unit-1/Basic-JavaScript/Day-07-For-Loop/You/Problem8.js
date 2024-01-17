//print number 1-5;
//break;
//when the loop reaches number 4 I need to break;
//the loop to end when it reach number 4;


for(let i=1; i<5; i++){
  if(i==4){
    break;
  }
  console.log(i);
}
// 1
// 2
// 3


for(let i=1; i<5; i++){
  if(i>=4){
    break;
  }
  console.log(i);
}
// 1
// 2
// 3


for(let i=1; i<5; i++){
  console.log(i);
  if(i==4){
    break;
  }
}
// 1
// 2
// 3
// 4
