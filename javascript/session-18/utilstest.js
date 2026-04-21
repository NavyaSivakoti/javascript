
import printInfo, { name as username, add as sum, test, user, addTwoNum } from './utils.js';
import { getRandomNumber } from './stringutil.js';

// import * as utils from './utils.js';

// console.log(utils.name);
// console.log(utils.addTwoNum(10, 20));
// utils.default();


console.log(username);
console.log(sum(10, 20));
test();

printInfo();

console.log(getRandomNumber());


console.log(user.name);

console.log(addTwoNum(100, 200));
