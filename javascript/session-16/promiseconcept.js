//Promise: is used to handle Async operations(things that take time)
//ex:
//1. api calls
//2. file reading
//3. DB query
//4. AJAX: element is coming on the page 5 10 15 20 0


//instead of callbacks, Js has introduced promises to handle the async operations in a cleaner way...

//Promise:
// you place the order: promise is created
// prepare the food: pending/in-progress
// food is delivered: Resolved / fullfilment
// cancels the order: Rejected / Error

//3 states: pending, Resolved & Rejected


let myPromise = new Promise((resolve, reject) => {
    
    let success = false;

    if (success) {
        resolve('Task Completed - 200 OK');
    }
    else {
        reject('task cancelled - 500 error');
    }

});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


console.log('-------------');

//Ex: real async opeation: setTimeoput: 3000 ms

let dataPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        reject('data is not received from server');
    }, 3000);

});

dataPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


//Ex: real async opeation with user data: setTimeoput: 3000 ms

function fetchUser() {
    return new Promise((resolve, reject) => {

        let flag = true;

        if (flag) {
            setTimeout(() => {
            let user = {
                name: 'priya',
                role: 'QA'
            };
            resolve(user);
        }, 5000);
        }
        else {
            setTimeout(() => {
                reject('user is not found: 404 NOT FOUND');
            }, 2000);
        }
    });
};


fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('disconnect with DB');

    });


console.log("=============");
//promise chaining:

let p1 = new Promise((resolve, reject) => {
    resolve(5);
});

p1
    .then((n) => n * 2)//10
    .then((n) => n * 3)//30
    .then((result) => console.log(result));//30
    