let subjectsHash = {
    1: 'Javascript',
    2: 'HTML',
    3: 'CSS',
    4: 'Java',
    5: 'Rust',
}

let students = [
    { id: 1, name: 'Prateek', subjectID: 5 },
    { id: 2, name: 'Yogesh', subjectID: 2 },
    { id: 3, name: 'Nrupul', subjectID: 4 },
    { id: 4, name: 'Prateek', subjectID: 1 },
]

let newObj = students.reduce((acc, student) => {
    const { name, subjectID } = student;
    // console.log(name); // it will give us all names
    // console.log(subjectID); // it will give us all subjectId's

    // Use the subjectID to get the subject from subjectsHash
    const subject = subjectsHash[subjectID];

    // Check if the name already exists in the accumulator
    if (acc[name]) {
        // If it exists, push the subject to the existing array
        acc[name].push(subject);
    } else {
        // If it doesn't exist, create a new array with the subject
        acc[name] = [subject];
    }

    return acc;
}, {});
console.log(newObj);
/* 
----------------------------------
create a new object called `newObj` using the `students` array &  
the `subjectsHash` object.
----------------------------------

Expected Output of `newObj`: 
{
  Prateek: ["Rust", "Javascript"],
  Yogesh: ["HTML"],
  Nrupul: ["Java"],
}
*/