//Destructuring: 
//clean way to extract the values from arrays or objects and assign them to variables in a single line.

//Array Destructuring:
let [a, b, c] = [10, 20, 30];
console.log(a, b, c);

let arr = [40, 50, 60];
let [x, y, z] = arr;
console.log(x, y, z);

let [p, , r] = arr;
console.log(p, r);

let ar = [10];
let [a1, b1 = 50] = ar;
console.log(a1);
console.log(b1);
 

let num = [1, 2, 3, 4, 5, 6];
let [t1, t2, ...pop] = num;
console.log(t1, t2);
console.log(pop);

//Object Destructuring:
let user = {
    name: 'Tom',
    age: 30
};

let { name, age } = user;
console.log(name, age);

console.log('-------------');



let customer = {
    name: 'Peter',
    age: 40,
    city: 'LA',
    zip: 1010
};


function placeOrder({ name, city}) {
    console.log(name, city);
};

placeOrder(customer);


function launchBrowser({ browserName, headless, url }) {
    console.log(browserName, headless, url);
};

let page = {
    title: 'login',
    browserName: 'chrome',
    url: 'https://nal.com',
    headless: true,
    footer: [1, 2, 3]
};

launchBrowser(page);


