
let num = [10, 20, 30, 40]; //0-3, l=4

//to print all the values of array: use for loop:

//index based loop:
for (let i = 0; i <= num.length-1; i++){
    console.log(num[i]);//10 20 30 40
}

console.log('-------------');
//for..of loop: iterate the values
for (let e of num) {
    console.log(e);
}

console.log('-------------');
//for..in loop: iterate the index
for (let k in num) {
    console.log(k + ":" + num[k]);
    console.log(typeof k); 
}



console.log('-------------');
let empData = ['pratik', 30, 'SDET1', 'IBM', 12.33, true];//0-5; len = 6

for (let e of empData) {
    console.log(e);
    if (e === 'SDET1') {
        console.log('10% hike');
        break;
    }
}

console.log('-------------');

for (let i = empData.length - 1; i >= 0; i--){
    console.log(empData[i]);
}


