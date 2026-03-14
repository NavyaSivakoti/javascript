
let user = {
    name: 'pratik',
    age: 30,
    city: 'LA'
};

let dept = {
    name: 'admin',
    HOD: 'Sushant'
};

/**
 * 
 * @param {object} userobj 
 */
function printUserData(userobj, deptobj) {
    userobj.age = 40;//update
    userobj.zip = 202020;//adding
    console.log(userobj);
    console.log(deptobj);

};

printUserData(user, dept);//callbyRef

console.log(user.age);
console.log(user.zip);