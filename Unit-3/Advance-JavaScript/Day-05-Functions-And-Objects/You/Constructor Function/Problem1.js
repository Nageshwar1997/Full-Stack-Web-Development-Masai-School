// write a ES6 Class IPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in generation, ASIN, weight, OS, RAM, color, display, camera
// the object it creates has the following
// properties: generation, ASIN, weight, OS, RAM, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"
// feel free to copy your constructor function solution and then make changes to them

class IPhone1 {
    constructor(generation, ASIN, weight, OS, RAM, color, display, camera) {
        this.generation = generation;
        this.asin = ASIN;
        this.weight = weight;
        this.os = OS;
        this.ram = RAM;
        this.color = color;
        this.display = display;
        this.camera = camera;
    }

    dial() {
        console.log("tring.. tring...");
    }

    sendMessage() {
        console.log("Sending message...");
    }

    cameraClick() {
        console.log("Camera clicked");
    }
}

let i1 = new IPhone1(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP"
);

i1.dial(); // "tring.. tring..."
i1.sendMessage(); // "Sending message..."
i1.cameraClick(); // "Camera clicked"