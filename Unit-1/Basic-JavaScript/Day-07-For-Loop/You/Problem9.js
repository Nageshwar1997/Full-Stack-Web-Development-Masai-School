//continue.

//print the number 1-5;

// I want to skip print the number 4;
// 1
// 2
// 3
// 5
// in this case I will be using continue


for(let i=1; i<=5; i++){
  if(i==4){
    continue;
  }
  console.log(i);
}
