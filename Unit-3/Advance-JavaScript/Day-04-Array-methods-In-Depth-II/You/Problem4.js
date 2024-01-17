let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((element) => {
    let obj = {};
    obj.fullName = `${element.name} ${element.surname}`
    obj.id = element.id;

    return obj;
});

    /* 
    end result/sample output: 
    usersMapped = [
      { fullName: "John Smith", id: 1 },
      { fullName: "Pete Hunt", id: 2 },
      { fullName: "Mary Key", id: 3 }
    ]
    */

    console.log(usersMapped);
console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith

/*
 form a new array using the users array
 the new array is expected to have objects with the following properties:
  - fullName: <name><space><surname> 
  - id: <id>
 check the end result / sample output in the comment above. 
*/
