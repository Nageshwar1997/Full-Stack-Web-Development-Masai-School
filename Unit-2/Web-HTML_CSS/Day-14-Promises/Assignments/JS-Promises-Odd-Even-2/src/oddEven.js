// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error"(in a string)
// If data is an odd number, return a promise resolve 2 seconds later and give the data "odd"(in a string)
// If data is an even number, return a promise resolve 4 seconds later and give the data "even"(in a string)
function getData(data) {
    let promise = new Promise((resolve, reject) => {
        if (typeof data !== "number") {
            reject("error");
        }
        else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve("odd");
            }, 2000);
        }
        else {
            setTimeout(() => {
                resolve("even");
            }, 4000);
        }
    });
    return promise;
}
// getData(6);
export default getData
