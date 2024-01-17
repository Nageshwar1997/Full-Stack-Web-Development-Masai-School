function objectCreator1() {
    let obj = {};
    obj.property1 = 1;
    obj.property2 = 2;
    obj.property3 = 3;
    obj.property4 = 4;
    obj.property5 = 5;

    return obj
}
function objectCreator2() {
    let obj = objectCreator1();
    obj.property6 = 6;

    return obj
}

console.log(objectCreator2()); // { property1: 1, property2: 2, property3: 3, property4: 4, property5: 5, property6: 6 }





