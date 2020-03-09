class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge(age) {
        if (age < 0) return false;
        this.age = age;
        if (age >= 25) console.log(`New photo request was sent for ${this.name}`);
        return age;
    };
    static createEmpty() {
        this.name = name;
        this.age = age;
    }
}


export { User }