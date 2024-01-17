const voters = [
    { name: 'Zack', age: 19, voted: false }, // Young
    { name: 'Sam', age: 20, voted: false }, // Young
    { name: 'Phil', age: 18, voted: true }, // Young
    { name: 'Kate', age: 16, voted: false }, // Young
    { name: 'Bob', age: 30, voted: true }, // Mid
    { name: 'Jeff', age: 30, voted: true }, // Mid
    { name: 'Mary', age: 31, voted: false }, // Mid
    { name: 'Jake', age: 32, voted: true }, // Mid
    { name: 'Joey', age: 41, voted: true }, // Olds
    { name: 'Becky', age: 43, voted: false }, // Olds
    { name: 'Tami', age: 54, voted: true }, // Olds
    { name: 'Ed', age: 55, voted: true }, // Olds
];


let initialObject = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotes: 0,
    numMidPeople: 0,
    numOldVotes: 0,
    numOldPeople: 0
}

let resultObject = voters.reduce((acc, item) => {

    if (item.age <= 20) {
        acc.numYoungPeople++;
        if (item.voted) {
            acc.numYoungVotes++;
        }
    }
    else if (item.age > 20 && item.age <= 40) {
        acc.numMidPeople++;
        if (item.voted) {
            acc.numMidVotes++;
        }
    }
    else if (item.age > 40) {
        acc.numOldPeople++;
        if (item.voted) {
            acc.numOldVotes++;
        }
    }

    return acc;
}, initialObject);

console.log(resultObject);
/*
{ numYoungVotes: 1, // 19
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/