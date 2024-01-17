// Access object data inside object (nested object)


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

for(let key1 in obj){
  for(let key2 in obj.address){
    console.log(key2,":",obj["address"][key2]);
  }
  console.log("-----------");
}
/* 
village : Amdura
post : Mugat
taluka : Mudkhed
dist : Nanded
pinCode : 431806
--------
village : Amdura
post : Mugat
taluka : Mudkhed
dist : Nanded
pinCode : 431806
--------
village : Amdura
post : Mugat
taluka : Mudkhed
dist : Nanded
pinCode : 431806
--------
village : Amdura
post : Mugat
taluka : Mudkhed
dist : Nanded
pinCode : 431806
--------
village : Amdura
post : Mugat
taluka : Mudkhed
dist : Nanded
pinCode : 431806
--------
village : Amdura
post : Mugat
taluka : Mudkhed
dist : Nanded
pinCode : 431806
--------
village : Amdura
post : Mugat
taluka : Mudkhed
dist : Nanded
pinCode : 431806
--------
village : Amdura
post : Mugat
taluka : Mudkhed
dist : Nanded
pinCode : 431806
--------
*/