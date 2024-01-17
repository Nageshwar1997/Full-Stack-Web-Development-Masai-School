function truthyOrFalsy(val) {
    if (val) {
        console.log(`${val} is Truthy value`);
    }
    else {
        console.log(`${val} is Falsy value`);
    }
}

// Falsy Values in JavaScript
truthyOrFalsy(undefined); // undefined is Falsy value
truthyOrFalsy(null); // null is Falsy value
truthyOrFalsy(NaN); // NaN is Falsy value
truthyOrFalsy(0); // 0 is Falsy value
truthyOrFalsy(""); // "(Empty String)" is Falsy value
truthyOrFalsy(false); // false is Falsy value

// Truthy Values in JavaScript
truthyOrFalsy(-1); // -1 is Truthy value
truthyOrFalsy(1); // 1 is Truthy value
truthyOrFalsy([]); // [Empty Array] is Truthy value
truthyOrFalsy({}); // {Empty Object} is Truthy value
truthyOrFalsy([1,2]); // [1,2] is Truthy value
truthyOrFalsy({name:"Nageshwar"}); //  {name : "Nageshwar"} is Truthy value
truthyOrFalsy("String"); // String is Truthy value
