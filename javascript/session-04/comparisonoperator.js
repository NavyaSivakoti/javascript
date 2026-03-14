// 10 is eq to 10
//naveen is eq to naveen

// == : Loose equality : compares the value only
// === : Strict equality : compares both value and type

console.log(10 == 10);
console.log(10 == "10");//true
console.log(10 == '10');

console.log(10 === 10);
console.log(10 === "10");//false
console.log(10 === '10');
console.log('10' === 10);

let bill = "10000";
console.log(bill == 10000);
console.log(bill === 10000);
console.log('10' === "10");

//true = 1
//false = 0
console.log(true == 1);
console.log(1 == true);
console.log(true === 1);
console.log(false == 0);

console.log('somika' == 'Somika');
console.log('somika' === 'Somika');
console.log('A' == 'a');
