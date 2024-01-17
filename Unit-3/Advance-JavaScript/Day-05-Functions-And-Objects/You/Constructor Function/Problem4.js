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
        console.log('tring.. tring...');
    }

    sendMessage() {
        console.log('Sending message...');
    }

    cameraClick() {
        console.log('Camera clicked')
    }
}


let i1 = new IPhone1(1, 'B09X67JBQV', 7.8, 'IOS', '128mb', 'Gray', '90mm', '2.0 MP');


// --------------------------------
// bluetooth feature added
// 3g Internet feature added
// high resolution capture added
// -------------------------------- 

class IPhone2 extends IPhone1 {
    constructor(generation, ASIN, weight, OS, RAM, color, display, camera, bluetooth, internetType) {
        super(generation, ASIN, weight, OS, RAM, color, display, camera);
        this.bluetooth = bluetooth;
        this.internet = internetType;
    }

    connectWithBlutoothDevice() {
        console.log('Connecting with bluetooth divice...')
    }

    connectWithInternet() {
        console.log('Connecting with 3g Internet...')
    }

    cameraClick() {
        console.log('Clicking a high resolution pic...')
    }
}


console.log(i1);
let i2 = new IPhone2(1, 'B09X67JBQV', 7.8, 'IOS', '128mb', 'Gray', '90mm', '2.0 MP', "3.0", "3g");
console.log(i2);