// Loops in Objects

let obj={ // outer object
  name:"Nageshwar",
  age:26,
  DOB:"01-09-1997",
  gender:"Male",
  city:"Nanded",
  hobbies:"Coding",
  marks:[10,20,30],
  address:{ // inner object
    village: "Amdura",
    post: "Mugat",
    taluka:"Mudkhed",
    dist:"Nanded",
    pinCode:431806
  }
}

// for...in loop (it will work with onject only)

for(let key in obj){
  console.log("key:",key,"------","value:",obj[key]);
}
/*
key: name ------ value: Nageshwar
key: age ------ value: 26
key: DOB ------ value: 01-09-1997
key: gender ------ value: Male
key: city ------ value: Nanded
key: hobbies ------ value: Coding
key: marks ------ value: [ 10, 20, 30 ]
key: address ------ value: {
  village: 'Amdura',
  post: 'Mugat',
  taluka: 'Mudkhed',
  dist: 'Nanded',
  pinCode: 431806
}
*/