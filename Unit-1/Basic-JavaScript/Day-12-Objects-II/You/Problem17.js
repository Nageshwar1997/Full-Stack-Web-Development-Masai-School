let obj={};
let arr = [5,3,4,1,2,1,2];
for(let i=0; i<arr.length; i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]++;
  }
}

for(let key in obj){
  
}