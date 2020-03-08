const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

const ship = {
    __proto__:vehicle,
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        vehilce.move();
    },
    stopMachine() {
        vehicle.stop();
        console.log(`${this.name} lifting anchor down`);
    },
};

export { vehicle, ship };