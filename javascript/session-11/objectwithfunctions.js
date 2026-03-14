const { X } = require("lucide-react");

let user = {

    //properties: key-value pair
    name: 'mukul',
    age: '30',
    dept: 'QA',
    salary: 34.44,
    city: 'Pune',
    comp: 'IBM',

    //functions: behaviour
    coding() {
        console.log('user is coding....');
    },

    travel() {
        console.log('user is travelling....');
    },
};

console.log(user);
console.log(user.name);
console.log(user.comp);

user.coding();
user.travel();


console.log('=========');


let loginPage = {
    username: 'naveen@gmail.com',
    password: 'naveen@123',
    role: 'admin',

    login() {
        console.log('login to app using : ' + this.username);
        let x = 10;//local var
        this.resetPwd();
    },
    resetPwd() {
        console.log('reset pwd');
        this.logout();
    },
    logout() {
        console.log('logout from app');
    }
};

loginPage.login();
loginPage.resetPwd();


let cart=function addToCart(){
    console.log('add To cart');
    return true;
}
let a2=cart();

console.log('**************')
console.log(cart);
console.log('**************')
console.log('test: ' +cart);










