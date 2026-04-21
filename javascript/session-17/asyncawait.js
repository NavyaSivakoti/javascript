
//async - await:

//async function: async keywork as prefix
//it always returns a promise (generally)
//inside the async funciton body: we have to write multiple await(asynchronous/promises) steps

 async function hello() {
    return "hello world";
}

hello().then(res => console.log(res));

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('user data');
        }, 3000);
    });
};

async function getData() {
    console.log('fetching data...');
    let result = await fetchData();
    console.log(result);
    console.log('data fetching done....');
}

getData();




console.log("====================");


function startMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('machine started');
            resolve();
        }, 5000);
    })
};

function grindBeans() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('grinding coffee beans');
            resolve();
        }, 3000);
    })
};

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Boiling Water');
            resolve();
        }, 2000);
    })
};


function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Brewing Coffee');
            resolve();
        }, 3000);
    })
};

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('pouring coffee into cup');
            resolve();
        }, 1000);
    })
};


async function makeCoffee() {
    await startMachine();//5
    await grindBeans();//3
    await boilWater();//1
    await brewCoffee();//2
    await pourCoffee();//3
    console.log('coffee is ready....');
};

makeCoffee();

//

function waitForElement(locator, timeout) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isEleFound = true;
            if (isEleFound) {
                let webElement = `driver.findElement(${locator})`;
                resolve(webElement);
            }
            else {
                reject(null);
            }
        }, timeout)
    })
}

async function waitFor() {
    await waitForElement('#username', 5000);
}

function click(element) {
    console.log(`clicking on the element by using:  ${element}`);
}

waitForElement('#loginBtn', 5000)
    .then(element => click(element))
    .catch(erorr => console.log('element not found....', erorr));            
