

let browser = 'ie';

switch (browser.trim().toLowerCase()) { 
    case 'chrome':
        console.log('launch chrome');
        break;
    case 'firefox':
        console.log('launch firefox');
        break;
    case 'edge':
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;
    case 'opera':
        console.log('launch opera');
        break;
    default:
        console.log('invalid browser...plz pass the right browser...');
        break;
    case 'brave':
        console.log('launch brave');
        break;
        
}

console.log('byee');



console.log('==================');

//1 to 100 marks -- grades
let marks = 17;

switch (marks) {
    case 1:
        console.log('marks = 1');
        break;
    case 2:
        console.log('marks = 2');
        break;

    default:
        console.log('invalid marks');
        break;
}

console.log('==================');

let isElementActive = true;

switch (isElementActive) {
    case true:
        console.log('ele is active');
        break;
    case false:
        console.log('ele is not active');
        break;
    default:
        break;
}

// console.log('==================');
// //use cases:
// //1. cross browser logic:
// //2. months -- jan to dec
// //3. RBAC: user permissions/roles: admin, seller, partner, vendor, customer
// //4. multiple environments: QA, DEV, Stage, Prod
// //5. in API: GET, POST, PUT, DELETE
// //6. payment options: upi, cc, paypal, cash

let type = 'get';

switch (type) {
    case 'get':
          //call the get api -- logic  
        break;
    case 'post':
        //add json payload, user auth, othe....
        break;

    default:
        break;
}

//nested switch cases:
let env = 'qa';
let username = 'admin';

switch (env) {
    case 'qa':
        console.log('run tcs on qa env');
            switch (username) {
                case 'admin':
                    console.log('login with admin');
                    break;
            
                default:
                    break;
            }
        break;

    default:
        break;
}

let shape = 'line'

switch (true) {
    case 'line':
        console.log('line');
        break;
    case true:
        console.log('hello');
        break;

    default:
        console.log('bye');
        break;
}




