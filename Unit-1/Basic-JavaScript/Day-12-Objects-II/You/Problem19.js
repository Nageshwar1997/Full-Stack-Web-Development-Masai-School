let obj = {
    Name: "Nageshwar",
    Age: 26,
    Gender: "Male",
    City: "Nanded",
    Address: {
        Flat_No: 253,
        Street: "Mudkhed Road",
        Place: "Amdura",
        PinCode: 431806,
    }
}

obj.Address.City = obj.City;
delete obj.City;


let State = "Maharashtra";

obj.Address[State] = State;
console.log(obj);
/*
{
    Name: 'Nageshwar',
        Age: 26,
        Gender: 'Male',
        Address: {
            Flat_No: 253,
            Street: 'Mudkhed Road',
            Place: 'Amdura',
            PinCode: 431806,
            City: 'Nanded',
            State: 'Maharashtra'
        }
}
*/