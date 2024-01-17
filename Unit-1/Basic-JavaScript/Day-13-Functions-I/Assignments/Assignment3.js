// Write a function isOdd which returns a boolean value based on the number is odd or not

function isOdd(num){
  if(num%2==1){
    return true;
  }
  else{
    return false;
  }
}

// Use this function to print the odd numbers from 0 to a given limit(included)

for(let i=1; i<=20; i++){
  if(isOdd(i)){
    console.log(i);
  }
}