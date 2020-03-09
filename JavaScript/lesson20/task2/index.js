class Vehicle {
    constructor (name, numberOfWheels) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
};

class Ship extends Vehicle {
    constructor(maxSpeed) {
        super('Agro', 0)
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
    }
    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
};

export { Vehicle, Ship };