// Convert this array into a string using Anonymous Function


let arr=["Manjusha","Nageshwar","Pawar"];

let arrayToString= function (element){

  let bag="";
  for(let i=0; i<element.length; i++){
    if(element[i]==","){
      bag+=" ";
    }
    else{
      bag+=element[i];
    }
  }
  return bag;
}

let result=arr.join();
// console.log(result); // Manjusha,Nageshwar,Pawar

let output=arrayToString(result);
console.log(output); // Manjusha Nageshwar Pawar