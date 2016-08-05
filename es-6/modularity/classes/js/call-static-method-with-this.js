/**
 * call-static-method-with-this created on 7/4/16 10:50 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

class Person {
    constructor(name) {
        this.name = name;
    }
    toString() { // (A)
        return `Person named ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    toString() {
        return `${super.toString()} (${this.title})`; // (B)
    }
}

const jane = new Employee('Jane', 'CTO');
console.log(jane.toString()); // Person named Jane (CTO)
