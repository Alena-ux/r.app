var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth()+ 1);
console.log(date.getHours());

class Person {
    constructor(name, age, happiness) {
        this.name= name;
        this.age= age;
        this.happiness= happiness;
    }
}

var alex = new Person('Alex', 45, true);
console.log(alex.name);


