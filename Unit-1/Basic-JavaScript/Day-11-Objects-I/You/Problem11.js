// Push the data in object

let object={}; // empty object

let friend=["Nageshwar","Manjusha","Dhanashree","Rutuja","Kiran","Sonali","Vaishnavi","Rutuja","Pooja"];

for(let i=0; i<friend.length; i++){
  if(object[friend[i]]==undefined){
    object[friend[i]]=1; // adding element into object.
  }
  else{
    object[friend[i]]++; // if the key is already present then we updating the value
  }
}
console.log(object);

/* {
  Nageshwar: 1,
  Manjusha: 1,
  Dhanashree: 1,
  Rutuja: 2,
  Kiran: 1,
  Sonali: 1,
  Vaishnavi: 1,
  Pooja: 1
} */