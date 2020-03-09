class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge = function(age) {
        if (age < 0) return false;
        this.age = age;
        if (age >= 25) console.log(`New photo request was sent for ${this.name}`);
        return age;
    };
    createEmpty = function () {
        this.name = ' ';
        this.age = ' ';
    }
}


export { User }