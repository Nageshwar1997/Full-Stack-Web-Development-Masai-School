function objectCreator1(o,a,b,c,d,e) {
    let obj = o;
    obj.property1 = a;
    obj.property2 = b;
    obj.property3 = c;
    obj.property4 = d;
    obj.property5 = e;

    return obj
}
function objectCreator2(a, b, c, d, e, f) {
    let obj = {};
    objectCreator1(obj, a, b, c, d, e);

    // obj.property1 = a;
    // obj.property2 = b;
    // obj.property3 = c;
    // obj.property4 = d;
    // obj.property5 = e;
    obj.property6 = f;


    return obj
}

// Both will give us same output
console.log(objectCreator2("a","b","c","d","e","f"));
console.log(objectCreator1({},"a","b","c","d","e"));



