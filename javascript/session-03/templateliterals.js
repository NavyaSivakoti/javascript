//template literals String: concept
//back tick: ``
let mesg = `this is navya here`;
console.log(mesg);

let para = `hi this is my JS code
I love JS
I want to learn PW
I have exp in selenium`;
console.log(para);

//op: I love 'javascript' coding

    console.log('I love \'javascript\' coding');
console.log("I love \"javascript\" coding");

console.log(`the product name is 'macbook' and price '12.33$'`);

//dynamic values:
let username = 'seller';
console.log('welcome ' + username);
console.log(`welcome ${username}`);

let productName = 'Apple iMac';
let price = 1002.33;

console.log(`the search product name is ${productName} and price is ${price}`);
console.log(`the ${productName} price value is ${price}`);

let playerName = 'Joe.root';
//button[text()='ViratKohli']

console.log(`//button[text()='${playerName}']`);
console.log(`//button[text()="${playerName}"]`);

let n1 = 100;
let n2 = 200;
console.log(`The sum of n1 and n2 is ${n1+n2}`);

let emailId = 'automation@gmail.com';
let password = 'testing@123';
console.log(`the user credentials are
    emailId is ${emailId}
    password is ${password}`);

let str = `hi this is naveen here`;
console.log(typeof str); 

//When you use a comma, you are passing multiple distinct arguments 
// (values) to the console.log function. 
// this is treated like passing a collection or an array 
// of values to be printed sequentially.
console.log(emailId, password, 'admin');
