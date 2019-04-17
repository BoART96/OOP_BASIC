module.exports = class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    saySomething() {
        console.log("Hi there! My name is ${this.name} and I started web dev at ${this.age} years old!");
    }
}