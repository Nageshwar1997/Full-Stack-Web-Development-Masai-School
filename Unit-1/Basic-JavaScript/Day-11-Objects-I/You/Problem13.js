let friend=["Nageshwar","Manjusha","Dhanashree","Rutuja","Kiran","Sonali","Vaishnavi","Pooja"];

let obj={};
for(let i=0; i<friend.length; i++){
  obj[friend[i]]="unique"; // we cannot use here dot notation (.) we need to use here bracket notation [] without quotes ("")
}
console.log(obj);

/* {
  Nageshwar: 'unique',
  Manjusha: 'unique',
  Dhanashree: 'unique',
  Rutuja: 'unique',
  Kiran: 'unique',
  Sonali: 'unique',
  Vaishnavi: 'unique',
  Pooja: 'unique'
} */

for(let key in obj){
  console.log(key+" : "+obj[key]);
}
/* Nageshwar : unique
Manjusha : unique
Dhanashree : unique
Rutuja : unique
Kiran : unique
Sonali : unique
Vaishnavi : unique
Pooja : unique */