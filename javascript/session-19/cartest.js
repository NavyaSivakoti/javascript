import {Car, BMW, Audi } from './cardesign.js';

let bmw = new BMW();
bmw.stop();//inherited
bmw.refuel();//inherited
bmw.start();//overridden
bmw.autoParking();//individual
console.log(bmw.min_speed);


console.log('---------');

let audi = new Audi();
audi.start();
audi.stop();
audi.refuel();
audi.theftSafety();
console.log(audi.min_speed);

console.log('---------');

let car = new Car();
car.start();
car.stop();
car.refuel();
console.log(Car.wheels);




// for (let i = 1; i <= 3; i++) {//i=4
//     setTimeout(
//         () => {
//             console.log(i);
//         }, 1000);
// };