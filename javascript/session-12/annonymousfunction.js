//has no name: Annonymous function
//used in callback function

let world = function () {
    console.log('hello world');
    return 100;
};

console.log(world());

let t1 = world();
console.log(t1);

console.log('------------');


initDriver('ie');


/**
 * 
 * @param {string} browserName 
 */
let initDriver = function (browserName) {
    
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

let isInit = initDriver('ie');
if (isInit) {
    console.log('enter the url: google.com');
}