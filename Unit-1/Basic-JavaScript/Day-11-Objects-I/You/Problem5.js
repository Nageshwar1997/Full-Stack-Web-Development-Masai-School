// Access the information in Object inside Object

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

// 1. Bracket Notation
console.log(obj["address"]["dist"]); // Nanded
console.log(obj["address"]);
/*{
  village: 'Amdura',
  post: 'Mugat',
  taluka: 'Mudkhed',
  dist: 'Nanded',
  pinCode: 431806
}*/

// 2. Dot Notation
console.log(obj.address.taluka); // Mudkhed
console.log(obj.address);
/*{
  village: 'Amdura',
  post: 'Mugat',
  taluka: 'Mudkhed',
  dist: 'Nanded',
  pinCode: 431806
}*/