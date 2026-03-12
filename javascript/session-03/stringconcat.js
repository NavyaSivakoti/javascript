let a = 10;
let b = 20;
console.log(a + b);//30

console.log('hello' + 'playwright');

let x = 'hello';
let y = 'automation';

console.log(a + b + x + y);//30helloautomation
console.log(x + y + a + b);//helloautomation1020
console.log(x + y + (a + b));//helloautomation30

console.log(a + b + x + y + a + b);//30helloautomation1020

console.log('the value of a : ' + a);
console.log('the value of b : ' + b);
console.log('the sum is : ' + (a + b));