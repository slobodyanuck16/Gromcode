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
    __proto__:vehile,
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        vehile.move();
    },
    stopMachine() {
        vehile.stop();
        console.log(`${this.name} lifting anchor down`);
    },
};

export { vehicle, ship };