// Convert this array to a string
// Writ a function to convert Uppercase character into Lowercase and Lowercase character into Uppercase

let arr=["mANJUSHA","nAGESHWAR","pAWAR"];
let str=arr.join();

let upperToLowerAndLowerToUpper=(char)=>{
  if(char==char.toLowerCase()){
    return char.toUpperCase();
  }
  else{
    return char.toLowerCase();
  }
}
let bag="";
for(let i=0; i<str.length; i++){
  if(str[i]==","){
    bag+=" ";
  }
  else{
    bag+=upperToLowerAndLowerToUpper(str[i]);
  }
}
console.log(bag); // Manjusha Nageshwar Pawar