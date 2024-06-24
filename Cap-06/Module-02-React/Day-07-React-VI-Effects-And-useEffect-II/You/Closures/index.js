const globalVariable = "Global Variable";
function outerFunction() {
  const outerVariable = "Outer Variable";
  return function innerFunction() {
    const innerVariable = "Inner Variable";
    return [globalVariable, outerVariable, innerVariable];
  };
}
// Closure happens when outer function returns inner function
const innerFunction = outerFunction();
const result = innerFunction();

console.log(result); // [10, 20, 30]

function counter1(initValue) {
  let count = initValue;

  function increaseCount1() {
    count = count + 1;
    console.log("Count from increaseCount function", count);
  }

  let message = `Count is ${count}`;
  function getMessage1() {
    console.log(message);
  }

  return [increaseCount1, getMessage1];
}

const [increaseCount1, getMessage1] = counter1(5);

increaseCount1(); // 6
increaseCount1(); // 7
increaseCount1(); // 8
getMessage1(); // Count is 5 Why? Closure happens when outer function returns inner function

function counter2(initValue) {
  let count = initValue;

  function increaseCount2() {
    count = count + 1;
    console.log("Count from increaseCount function", count);
  }

  function getMessage2() {
    let message = `Count is ${count}`;
    console.log(message);
  }

  return [increaseCount2, getMessage2];
}

const [increaseCount2, getMessage2] = counter2(5);

increaseCount2(); // 6
increaseCount2(); // 7
increaseCount2(); // 8
getMessage2(); // Count is 8
