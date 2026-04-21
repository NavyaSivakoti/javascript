class Car{

    static wheels = 4;
    min_speed = 100;

     //private var/methods:
    #password = 1234;
    
    getPassword() {
        return this.#password;
    }

    #getEngine() {
        console.log('car -- engine data');
    }
    
    getEngineData() {
        this.#getEngine();
    }

    start() {
        console.log('car -- start');
        console.log(this.#password);
    }

    stop() {
        console.log('car -- stop');
    }

    refuel() {
        console.log('car -- refuel');
    }
    
    data = ()=>console.log('hello world'); 

};

let car = new Car();
console.log(car.getPassword());
car.getEngineData();
console.log(Car.wheels);
car.data();


class BMW extends Car{
    min_speed = 200;
    
    start() {
        console.log('bmw -- start');
    }

    autoParking() {
        console.log('bmw -- auto parking');
    }

};

class Audi extends Car{
    theftSafety() {
        console.log('audi -- theftSafety');
    }

};

export { Car, BMW, Audi };

// let bmw = new BMW();
// bmw.stop();//inherited
// bmw.refuel();//inherited
// bmw.start();//overridden
// bmw.autoParking();//individual


// console.log('---------');

//let audi = new Audi();
//audi.getEngineData();
//audi.start();
// audi.stop();
// audi.refuel();
// audi.theftSafety();

// console.log('---------');

// let car = new Car();
// car.start();
// car.stop();
// car.refuel();

//OOP:
//1. inheritnace: yes
//2. method overriding: yes
//3. object/class: yes
//4. encapsulation: yes
//5. public-private: yes
//6. abstraction/interface: NO
//7. method/const... overloading: NO