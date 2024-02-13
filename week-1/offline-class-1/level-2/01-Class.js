class Animal {
    constructor(name, legCount) {
        this.name = name;
        this.legCount = legCount;
    }

    static myType = () => console.log("Animal");

    describe() {
        return `${this.name} has ${this.legCount} legs`;
    }
}

const myObj = new Animal("Buddy", 4);
console.log(myObj.describe());

Animal.myType();
