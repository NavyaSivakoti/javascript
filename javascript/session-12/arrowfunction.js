

//Arrow Function: =>
//has no name: Annonymous function
//used in callback function
//no need to add function keyword

//1. no param arrow function:
let print = ()=> console.log('hello JS');
print();

//2. 1 param arrow function:
let printName = (name)=> console.log(name);
printName('Naveen');

console.log('----------');
let test = (a)=> console.log(a+10);
test(10);

console.log('----------');
let printNum = (num)=> console.log(`total number:  ${num + 100}`); 
printNum(40);

console.log('----------');

let printTotal = total => console.log(total + 90);
printTotal(1000);

console.log('----------');

let printBill = (billing) => {
    console.log(billing + 90);
    console.log('billing is done');
    console.log('bye!!!');
}
printBill(200);

console.log('----------');

let pro = (a) => a + 4;

let r1 = pro(100);
console.log(r1);

console.log('----------');

/**
 * 
 * @param {string} name 
 * @returns 
 */
let doLowerCase = (name) => name.toLowerCase();
let lower = doLowerCase('TESTING');
console.log(lower);


console.log('----------');

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns this will add two numbers
 */
let sum = (a, b) => a + b;
let p1 = sum(10, 20);
console.log(p1);

console.log('----------');


let initBrowser = (browserName) => {
    console.log(`browser name is : ${browserName}`);
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        
        case 'firefox':
            console.log('launch ff');
            return true;
        
        case 'edge':
            console.log('launch edge');
            return true;
        
        default:
            console.log('plz pass the right browser', browserName);
            return false;
    }
};

let flag = initBrowser('chrome');
console.log(flag);
if (flag) {
    console.log('enter the url: google.com');
}


console.log('----------');

/**
 * 
 * @param  {...string} details 
 * @returns 
 */
let printDetails =  (...details) => {
    console.log(details);
    console.log(details.length);
    return 0;
};

let s1 = printDetails('pawan', 'pooja', 'sridevi');
console.log(s1);



console.log('=============');

function rest(...devices) {
    console.log(devices);
};

rest(['sim', 'mouse'], ['iphe', 'keyboard']);



function printData(userData) {
    console.log(userData.name);
}

let user = {
    name: 'Imtiaz',
    age: 30
};

printData(user); //call by object