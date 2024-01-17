function caseConversion(str) {
    if (str == str.toLowerCase()) {
        return str.toUpperCase();
    }
    else if(str== str.toUpperCase()){
        return str.toLowerCase();
    }
    return str;
}

let arr = ["MA", "SA", "I", "SCH", "OOL"];

let output = arr.map((element) => {
    return caseConversion(element);
});

console.log(output);

let arr2 = ['ma', 'sa', 'i', 'sch', 'ool'];

let output2 = arr2.map((element) => {
    return caseConversion(element);
});

console.log(output2);