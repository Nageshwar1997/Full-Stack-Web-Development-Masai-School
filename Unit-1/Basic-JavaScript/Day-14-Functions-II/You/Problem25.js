// Rest Operator (...parameterName)

// It is used to convert all the argument to array format and store to a variable



let print=function(...array){
  console.log("Array",array);
}
// Array [ 1, 2, 3, 'String', '[array]', '{object}', true, false ]
print(1,2,3,"String","[array]","{object}",true,false);