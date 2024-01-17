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
};

// Print the inner object's keys and values

for(let key in obj.address){
  console.log(key, "-", obj.address[key]);
}
// village - Amdura
// post - Mugat
// taluka - Mudkhed
// dist - Nanded
// pinCode - 431806