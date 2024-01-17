function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function (updatedSpeed) {
    this.speed += updatedSpeed || 5;
    console.log(`${this.brand} ${this.model} is moving at ${this.speed} km/h.`);
}

Vehicle.prototype.break = function (updatedSpeed) {
    this.speed -= updatedSpeed || 5;
    console.log(`${this.brand} ${this.model} is moving at ${this.speed} km/h.`);
}

Vehicle.prototype.refuel = function(){
    console.log(`${this.brand} ${this.model} is refueling.....!`);
}

function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this,brand, model, speed, fuelType);

    this.numberOfWheels = numberOfWheels;
}

// Car.prototype = Object.create(Vehicle.prototype); // OR
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);


Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking!`);
};


function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);

    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

// Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype); // OR
Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off....!`);
}
Airplane.prototype.land = function () {
    if (this.hasLandingGear) {
        console.log(`${this.brand} ${this.model} is landing....!`);
    }
    else {
        console.log(`${this.brand} ${this.model} has no landing gear....!`);
    }
}



console.log("Only Vehicle Methods");
let veh1 = new Vehicle("Mercedes", "S-Class", 200, "Petrol");
// console.log(veh1);
veh1.accelerate();
veh1.accelerate(20);
veh1.break();
veh1.break(10);
veh1.refuel();
console.log("");

// Only Car Methods
console.log("Only Car Methods");
let car1 = new Car("BMW", "M-Class", 300, "Diesel", 4);
// console.log(car1);
car1.accelerate();
car1.accelerate(20);
car1.break();
car1.break(10);
car1.refuel();
car1.honk();
console.log("");


console.log("Only Airplane Methods");
let airpl1 = new Airplane("Boeing", "747", 500, "Jet", 2, true);
// console.log(airpl1);
airpl1.accelerate();
airpl1.accelerate(20);
airpl1.break();
airpl1.break(10);
airpl1.refuel();
airpl1.takeOff();
airpl1.land();
console.log("");
