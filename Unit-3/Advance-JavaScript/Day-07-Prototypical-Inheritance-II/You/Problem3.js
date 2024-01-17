// Any function that is intended to be called with the new keyword should be called a constructor function.

// When we use this keyword then we don't need to create object, we don't need to return object and also we don't need to setPrototypeOf(those object).
IPhone1.prototype.dial = function () {
    console.log("tring... tring");
}

function IPhone1(generation, color) {
    this.generation = generation;
    this.color = color;
}

let i1 = new IPhone1(1, "Black");


Object.setPrototypeOf(IPhone2.prototype, IPhone1.prototype);

IPhone2.prototype.sendMessage = function () {
    console.log("Sending message...");
}

function IPhone2(generation, color, bluetoothType) {
    // this.generation = generation;
    // this.color = color;
    IPhone1.call(this, generation, color);
    this.bluetoothType = bluetoothType;
}
let i2= new IPhone2(2, "Red", "BT 5.0")


// console.log(i1);
// i1.dial();


console.log(i2);
// i2.sendMessage();
// i2.dial();