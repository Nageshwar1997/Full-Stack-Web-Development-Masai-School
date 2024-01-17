// Count of unquie names inside the array.

let friend=["Nageshwar","Manjusha","Dhanashree","Rutuja","Kiran","Sonali","Vaishnavi","Rutuja","Pooja"];

let obj={};

for(let i=0; i<friend.length; i++){
  if(obj[friend[i]]==undefined){
    obj[friend[i]]="unique";
  }
}

let count=0;
for(let key in obj){
  if(obj[key]=="unique"){
    count++;
  }
}
console.log(count); // 7