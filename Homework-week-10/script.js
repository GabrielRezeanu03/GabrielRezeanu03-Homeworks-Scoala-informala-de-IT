"use strict";

function Vehicle(name, color, engine, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.fuel = fuel;
  this.wheels = wheels;
}
Vehicle.prototype = {
  drive() {},
  park() {},
};

function Car(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel);
  this.wheels = 4;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Moto(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel);
  this.wheels = 2;
}
Moto.prototype = Object.create(Vehicle.prototype);
Moto.prototype.constructor = Moto;

function Bus(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel);
  this.wheels = 16;
  this.color = "Yellow";
}
Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Moto;

function Engine(name, capacity) {
  this.name = name;
  this.capacity = capacity;
}
Engine.prototype.run = function () {
  console.log("Running");
};
Engine.prototype.start = function () {
  console.log("Starting");
  this.run();
};
Engine.prototype.stop = function () {
  console.log("Has stopped");
};

function Fleet(lotNumber, vehicle) {
  this.vehicle = vehicle;
  this.lotNumber = lotNumber;
}

Fleet.prototype.make = function () {
  let fleet = [];
  for (let i = 0; i < this.lotNumber; i++) {
    fleet.push(this.vehicle);
  }

  return fleet;
};

const car = new Car("ford", "black", "2.0", "diesel");
const moto = new Moto("Yamaha", "white", "1.0", "diesel");

const carFleet = new Fleet(20, car);
const motoFleet = new Fleet(10, moto);

console.table(motoFleet.make());
