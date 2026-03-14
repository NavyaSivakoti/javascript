//callback : a CB function is a simple function passed as an argument to another function, which will be called later.

//call by value
//call by obj ref
//call by function : callback

function sayHi() {
    console.log('hiii');
};

let sayHello = function (callback) {
    callback();
};

sayHello(function sayHi() {
    console.log('hiii');
});
//calling a function by passing a function name

console.log('=============');

//utility functions
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

//core function: end user function
function calculator(a, b, callback) {
   return callback(a, b);
};

let r1 = calculator(10, 20, add);
console.log(r1);//30

r1 = calculator(100, 50, sub);
console.log(r1);

r1 = calculator(10, 30, mul);
console.log(r1);

r1 = calculator(10, 2, div);
console.log(r1);

console.log('=============');


function initDriver(browserName) {
    console.log('browser name : ', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;
    
        default:
            console.log('plz pass the right browser::', browserName);
            return false;
    }
};


function enterURL(browserName, url, callback) {
    console.log('starting the test case execution.....');

    if (callback(browserName)) {
        console.log('enter the url: ' , url);
    }

}

enterURL('chrome', 'https://www.nal.com', initDriver);

console.log('=============');

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} callback 
 * @returns 
 */
function myCalc(a, b, callback) {
    return callback(a, b);
};

let t1 = myCalc(10, 20, (a, b) => a + b);
console.log(t1);

t1 = myCalc(10, 20, (a, b) => a / b);
console.log(t1);


myCalc(
    100,
    200,
    function (a, b) {
    return a + b;
    }
)




console.log('=============');

function launchBrowser(browserName, callback) {
    return callback(browserName);
};


let flag = launchBrowser('chrome', (browserName) => {
    console.log('browser name : ', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;
    
        default:
            console.log('plz pass the right browser::', browserName);
            return false;
    }
});

if (flag) {
    console.log('enter the url');
}


console.log('=============');

let num = [1, 2, 3, 4, 5];
num.forEach(e => console.log(e + 5));


num.forEach(function (e) {
    console.log(e + 5);
});


let nm = num.filter(e => e > 3);
console.log(nm);


function perform(callback1, callback2){

    callback1();
    callback2();

};

perform(() => console.log('hi'), () => console.log('hello'));

console.log('-----------');


function calculator(mycallback, ...x){
    console.log(mycallback(...x))
};

let addition = (...a) => {
    sum = 0;
    for (i = 0; i < a.length; i++) {
        sum = sum + a[i];
    };
    return sum;
};

calculator(addition, 1, 2, 3, 4);