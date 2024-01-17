let array=[1,2,3,4,5,6,7,8,9,10];

let evenCount=0;
let oddCount=0
for(let i=0; i<array.length; i++){
  if(array[i]%2==0){
    evenCount++;
  }
  else{
    oddCount++
  }
}
console.log("Even :",evenCount,"And","Odd :",oddCount); //Even : 5 And Odd : 5

// OR
// here we need only one count (evenCount or oddCount)
console.log("Even :",evenCount,"And","Odd :",array.length-evenCount); //Even : 5 And Odd : 5
