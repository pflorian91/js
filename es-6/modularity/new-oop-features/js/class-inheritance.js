class Person {
  constructor() {
    console.log('Hello from class person.');
  }

  whoami() {
    console.log('I am a person.');
  }

}

const Validation = Sup => class extends Sup {
  validate(schema) {

  }

  whoami() {
    console.log('I am a validated person.');
  }
};

const Storage = Sup => class extends Sup {
  save(database) {

  }

  whoami() {
    console.log('I am a validated person with storage.');
  }
};

class Employee extends Storage(Validation(Person)) {
  whoami() {
    console.log('I am an employee.');
  }
}

let mike = new Employee();
mike.whoami();
