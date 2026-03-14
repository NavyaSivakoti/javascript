

function login() {
    console.log('login to app');
    search();
};

function search() {
    console.log('perform search');
    addToCart();
};

function addToCart() {
    console.log('add to cart');
    login();
};


login();

console.log('--------------');

function billing() {
    console.log('billing function');
    let x = 10;
    let y = x + 10;
    console.log(y);
    billing(); //recursive
}

billing();
