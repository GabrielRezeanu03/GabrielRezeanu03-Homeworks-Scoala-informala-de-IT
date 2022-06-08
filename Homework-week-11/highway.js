// ES6 classes

class Vehicle {
  constructor(name, color, engine, fuel, wheels) {
    this.name = name;
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = wheels;
  }

  drive() {
    console.log(`${this.name} can drive`);
  }

  park() {
    console.log(`${this.name} can drive`);
  }
}

class Car extends Vehicle {
  constructor(name, color, engine, fuel) {
    super(name, color, engine, fuel);
    this.wheels = 4;
  }
}

class Moto extends Vehicle {
  constructor(name, color, engine, fuel) {
    super(name, color, engine, fuel);
    this.wheels = 2;
  }
}

class Bus extends Vehicle {
  constructor(name, color, engine, fuel) {
    super(name, color, engine, fuel);
    this.wheels = 16;
    this.color = "Yellow";
  }
}

class Engine {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
  }
  stop() {
    console.log("Has stopped");
  }
  start() {
    console.log("starting");
  }
  run() {
    console.log("running");
  }
}

class Fleet {
  _fleet = [];
  constructor(lotNumber, vehicle) {
    this.vehicle = vehicle;
    this.lotNumber = lotNumber;
  }

  make() {
    for (let i = 0; i < this.lotNumber; i++) {
      this._fleet.push(this.vehicle);
    }
  }
  getFleet() {
    return this._fleet;
  }
}

const bus = new Bus("volvo", "", "4.0", "diesel");
const mercedes = new Car("Mercedes", "black", "2.0", "diesel");
const engine = new Engine("v2", "2.0");

class Highway {
  constructor(...vehicles) {
    this.vehicles = vehicles;
  }

  isDriving() {
    for (let vehicle of this.vehicles) {
      if (Vehicle.prototype.isPrototypeOf(vehicle)) {
        vehicle.drive();
      }
    }
  }
}

const highway = new Highway(bus, mercedes, engine);
