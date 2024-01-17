function iPhone(model, storage, ram, color, networkType) {
    let obj = {
        model: model,
        storage: storage,
        ram: ram,
        networkType: networkType,
        color: color,
        printModel: function () {
            console.log(`${this.model} ${this.storage}GB ${this.ram}GB Network Type ${this.networkType} in ${this.color} Color`);
        }
    };

    return obj;
};

let iPhone1 = iPhone("iPhone 15 Pro Max", 256, 8, "Red", "5G");
console.log(iPhone1);
iPhone1.printModel();

let iPhone2 = iPhone("iPhone 15 Plus", 512, 8, "Black", "5G");
console.log(iPhone2);
iPhone2.printModel();