const singleThreaded = () => {
    console.log(1);

    console.log(2);

    console.log(3);
}

const asynchronous = () => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 2000);
  console.log(3);
};


// console.log("Single Threaded")
// singleThreaded();
/**
 * 1
 * 2
 * 3
 * 4
 */

console.log("Async Threaded")
console.log(4);
asynchronous();

/**
 * 4
 * 1
 * 3
 * 2
 */