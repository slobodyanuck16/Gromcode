const vehile = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

const ship = {
    name: 'Argo',
    hasWheels: false,
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        vehile.move();
    },
    stopMachine() {
        vehile.stop();
        console.log(`${this.name} lifting anchor down`);
    },
    __proto__:vehile
};

export { vehile, ship };