//JS object ---> JSON : serialization (marshelling)
//JSON ---> JS object : de-serialization (unmarshelling)

//API automation:
//POST call: url, json
//user object in JS ---> JSON String
//(Javascript object notation)

//api response (JSON) --> JS Object

let user = {
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true
};
//JS object to JSON string: serialization
let userJson = JSON.stringify(user, null, 1);
console.log(userJson);
console.log(typeof userJson);//string

console.log('---------');

//JSON string to JS Object: de-serialization
let userObj = JSON.parse(userJson);
console.log(userObj);
console.log(typeof userObj);//object

console.log(user.name === userObj.name);


console.log('---------');



let customer = {
    name: 'Ravi',
    age: 30,
    city: 'Pune',
    isActive: true,
    address: {
        flat: 101,
        zip: 545454,
        lat: 10.34,
        long: 11.22
    },
    devices: ['iphone', 'mouse', 'keyboard'],
};

//JS object to JSON string:
let customerJson = JSON.stringify(customer, null, 2);
console.log(customerJson);

//call an API: given to the server

//JSON string to JS Object:
let customerObj = JSON.parse(customerJson);
console.log(customerObj);

console.log(customer.devices.length === customerObj.devices.length);
console.log(customer.address.flat === customerObj.address.flat);

