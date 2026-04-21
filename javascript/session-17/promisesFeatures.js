


// let p1 = Promise.resolve('task 1 done');
// let p2 = Promise.reject('500 error');

// p1.then((result) => console.log(result));
// p2.catch((error) => console.log(error));

//1. promise.all(): run multiple promises in parallel mode and waits until all of them succeed.
let p1 = Promise.resolve('task 1 done');
let p2 = Promise.resolve('task 2 done');
let p3 = Promise.resolve('task 3 done');

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
});    

//with wait:
let p11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('display logo on the page');
    }, 1000);
});

let p12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('load the login form');
    }, 3000);
});

let p13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('load footer of the page');
    }, 4000);
});

Promise.all([p11, p12, p13])
    .then((result) => console.log(result));


//one of them is rejected/failed:
let c11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('display logo on the page');
    }, 1000);
});

let c12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('login form error with loading...');
    }, 2000);
});

let c13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('load footer of the page');
    }, 3000);
});

Promise.all([c11, c12, c13])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


//2. race(): retunrs the first promise that finishes

let t11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('display logo on the page with error');
    }, 1000);
});

let t12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('login form error with loading...');
    }, 3000);
});

let t13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('load footer of the page');
    }, 500);
});

Promise.race([t11, t12, t13])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));



//3. allSettled():
//waits for all the promses to finish, whethe they succedd or failed.

let a11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('display logo on the page');
    }, 1000);
});

let a12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('login form error with loading...');
    }, 3000);
});

let a13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('load footer of the page');
    }, 500);
});

Promise.allSettled([a11, a12, a13])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

    

//4. any(): returns the first successul promise
//if all promises are failed---> then it gives the aggregator error

let x11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('display logo on the page');
    }, 1000);
});

let x12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('login form error with loading...');
    }, 3000);
});

let x13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('load footer of the page');
    }, 500);
});

Promise.any([x11, x12, x13])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
