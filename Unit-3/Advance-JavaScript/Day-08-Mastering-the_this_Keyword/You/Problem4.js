CreateArray.prototype.insertItem = function (item) {
    this.arr.push(item);
}

function CreateArray() {
    // this = {}
    this.arr = [];

    // return this;
}
CreateArray.prototype.clearItem = function () {
    this.arr = [];
}
const arr = new CreateArray();


arr.insertItem("One");
arr.insertItem("Two");
console.log(arr); // CreateArray { arr: [ 'One', 'Two' ] }

arr.clearItem();
console.log(arr); // CreateArray { arr: [] }