let dress=function(){
  console.log("I bought a new dress which is Orange in colour");
}

function party(x,y){
  y(); // Converting a parameter to a function, because here parameter y value is dress function
  console.log(x,"I am going for a party")
}
party("Yes",dress); // a function passing as an argument to another function

/* 
I bought a new dress which is Orange in colour
Yes I am going for a party */