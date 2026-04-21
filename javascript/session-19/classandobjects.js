class Employee{

    //class vars: global vars
    name;
    age;
    salary;
    isPerm;

    //construtor : only one const... is allowed
    constructor(name, age, salary, isPerm) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isPerm = isPerm;
    };

    //methods
    study() {
        console.log(`${this.name} is studying here...`);
    }

    getInfo() {
        console.log(`${this.name}, ${this.age}, ${this.salary}, ${this.isPerm}`);
    }

};

//object of the Employee class: using new keyword:
let e1 = new Employee('Tom', 30, 12.33, true);

console.log(e1.name, e1.age);
e1.study();
e1.getInfo();

let e2 = new Employee('peter', 35, 13.33, false);





