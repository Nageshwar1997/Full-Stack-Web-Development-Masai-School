let object = {};

// 1. Adding key and values inside the object
object["Name"] = "Nageshwar"; // Bracket Notation (objectName["keyName"])
object.Age = 25; // Dot Notation (objectName.keyName)
object["MobileNo"] = 9730870409; // Bracket Notation (objectName["keyName"])
object.Location = "Nanded"; // Dot Notation (objectName.keyName)
object["DrivingLicence"] = true; // Bracket Notation (objectName["keyName"])
object.BreakFast = false; // Dot Notation (objectName.keyName)

console.log(object);
/* {
  Name: 'Nageshwar',
  Age: 25,
  MobileNo: 9730870409,
  Location: 'Nanded',
  DrivingLicence: true,
  BreakFast: false
} */


// 2. Updating the values already present keys inside the object
object["MobileNo"] = 9503198637; // Bracket Notation (objectName["keyName"])
object.Age = 26; // Dot Notation (objectName.keyName)
object["DrivingLicence"] = false; // Bracket Notation (objectName["keyName"])
object.BreakFast = true; // Dot Notation (objectName.keyName)

console.log(object);
/* {
  Name: 'Nageshwar',
  Age: 26,
  MobileNo: 9503198637,
  Location: 'Nanded',
  DrivingLicence: false,
  BreakFast: true
} */


// 3. Deleting some elements (key-value pair) from the object

delete object["DrivingLicence"]; // Bracket Notation (objectName["keyName"])
delete object.BreakFast; // Dot Notation (objectName.keyName)

console.log(object);
/* {
  Name: 'Nageshwar',
  Age: 26,
  MobileNo: 9503198637,
  Location: 'Nanded'
} */


// 4. Run for....in loop over the object & print the keys and value

for (let key in object) {
  console.log("Key -", key, // it will give us all the keys present inside the object
    "&",
    "Value -", object[key] // it will give us all values of keys
  );
}
/* Key - Name & Value - Nageshwar
Key - Age & Value - 26
Key - MobileNo & Value - 9503198637
Key - Location & Value - Nanded */