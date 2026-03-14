//function expression:

let cart = function addToCart(productName) {
    console.log('add to cart', productName);
    return true;
};

console.log(cart);

//function expression name: cart
//actual function name: addToCart


//addToCart(); error


//call the function:
let n1 = cart('macbook pro');
console.log(n1);

console.log(cart.name);


console.log('===============');


let waitFor = function waitForElementPresenceWithExplicitWaitOnThePage(productName) {
    console.log('add to cart', productName);
    return true;
};

console.log(waitFor('sim card'));
console.log(waitFor('sim'));


let flag = waitFor('imac');
console.log(flag);

flag = waitFor('macbook');
console.log(flag);

flag = waitFor('samsung');
console.log(flag);

console.log(waitFor.name);