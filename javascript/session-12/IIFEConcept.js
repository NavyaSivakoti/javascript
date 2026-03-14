//IIFE function: Immediate Invoke Function Expression
//has no name: Annonymous function

(
    function (browserName) {
    console.log('hello world');
    console.log(10 + 20);
    console.log(browserName);

    //read test data from csv/excel
    //DB connection code
    //start the server
    click();

    }
)('chrome');

function click() {
    console.log('click element');
}

(function () {
    console.log('hello world');
})();

(function () {
    console.log('bye');

        (function () {
        console.log('hello world');
        })();

    

})();


(
    function () {
        console.log('bye');
    }
)();