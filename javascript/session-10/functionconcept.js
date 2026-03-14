
//1. simple function: no input and no return
function test() { //0 iinput
    console.log('test function');
    //no output: no return keyword - void
}

console.log(typeof test);

//call function:
test();

function printInfo() {
    console.log('hello automation');
}
printInfo();

console.log('----------------');

//2. no input but some return:
function getTrainerName() {
    console.log('get trainer name');
    let trainerName = 'naveen';
    return trainerName;
}

let name = getTrainerName();
console.log(name);
console.log(getTrainerName());

console.log('----------------');

//3. some input and some return:
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function add( a, b ) { //2 parameters
    console.log('adding two numbers....');
    let c = a + b; //10naveen
    return c;//10naveen: string
}

let res = add(10, 'naveen'); //2 args
console.log(res);

let r = add(100, 200); //2 values/arguments
console.log(r);
//call by value


console.log('------------');
//AC: create a function.
//which will calculate the student marks ..range : 1 to 100.
//input param: studentName (string)
//return: marks of that student (number)
//if student name is not found... print student name is not found and return -1


/**
 * 
 * @param {string} studentName 
 * @returns this function returns the student marks
 */
function getStudentMarks(studentName) {
    console.log('getting marks for student: ' + studentName);
    let marks = -1;

    if (studentName === 'ravi') {
        // return 90;
        marks = 90;
    }
    else if (studentName === 'uday') {
        // return 80;
        marks = 80;
    }
    else if (studentName === 'ankit') {
        // return 100;
        marks = 100;
    }
    else {
        console.log(`${studentName} is not found`);
    }

    return marks;

};

let m1 = getStudentMarks('ravi');
console.log(m1);

console.log('================');


/**
 * 
 * @param {string} studentName 
 */
function getMarks(studentName) {
    console.log('getting marks for student: ' + studentName);

    switch (studentName.trim().toLowerCase()) {
        case 'ravi':
            return 90;
        case 'pooja':
            return 80;
        case 'uday':
            return 100;
    
        default:
            console.log(`${studentName} is not found`);
            return -1;
    }
    
};

let m2 = getMarks('naveen');
console.log(m2);


console.log('================');


/**
 * 
 * @param {number} productPrice 
 * @param {number} tax 
 * @param {number} lateFee 
 * @returns this will return the total billing amount
 */
function getTotalBilling(productPrice, tax, lateFee, gst) {
    console.log('calculating the final billing.....');
    return productPrice + tax + lateFee;

};

let amt = getTotalBilling(1000, 10, 20, 5);
console.log(amt);

console.log(typeof getTotalBilling);
console.log(getTotalBilling.name);
console.log(getTotalBilling.length);




