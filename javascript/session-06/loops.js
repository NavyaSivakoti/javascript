
// 1 to 10:

//1. while:
let i = 1;
while (i <= 10) {
    console.log(i);//1 2 3 4 5 6 7 8 9 10
    i++;//11
    //++i;//11
    //i = i + 1;
}

console.log('------');

while (true) {
    console.log('welcome to NAL');
    break;
}

console.log('------');

let j = 1;
while (j <= 50) {
    console.log(j);//1 2 3 4 5 hello
    if (j % 5 == 0) {
        console.log('hello');
        break;
    }
    j++;//5
    
}
console.log(j);//5


console.log('------');

//1 to 10:
//for loop
for (let p = 1; p <= 10; p++){
    console.log(p); //1 2 3 4 5678910
}

//10 to 1:
for (let m = 10; m >= 1; m--){
    console.log(m);//10
}

//1 to 10:
let n = 1;
for ( ; n<=10; ){
    console.log('hello NAL');
    n++;
}

console.log('-------');
for (;;){
    console.log('welcome to hotel taj');
    break;
}


console.log('-------');
//do while loop:
//1 to 10:
let k = 1;
do {
    console.log(k);
    k++;
}
while (k <= 10);
