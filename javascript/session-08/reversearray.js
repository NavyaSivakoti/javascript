let num = [1, 2, 3, 4, 5];//0-4, len=5

//let count = num.length - 1;
for (let e of num) {
    let count = num.length - num.indexOf(e) - 1; //4
    console.log(num[count]);
}

console.log('---------');

let counter = num.length - 1;//4
for (let e in num) {
    e = counter;//3
    console.log(num[e]);
    counter--;//3
}

