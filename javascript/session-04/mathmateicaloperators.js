
//additon: +
console.log(1 + 1);//2
console.log("1" + 1);//11
console.log("1" + "1");//11
console.log(1 + "1");//11

//subtraction: -
console.log(1 - "1"); //1-1=0
console.log("5" - 2);//5-2=3
console.log("5" - "2");//5-2=3
console.log(5 - 'hello');//5-hello=NaN(not a number)
console.log('hello' - 10);//hello-10=NaN
console.log('hello' - '10');//hello-10=NaN
console.log('hello' - 'hi');//hello-hi=NaN

//multiplication: *
console.log(1 * "1");//1*1=1
console.log(-1 + "1" * 1);//-1+1*1=0
console.log(1 + "1" - 2);//"11"-2=11-2=9

console.log('hello' * 'hi');//hello*hi=NaN

//division:
console.log(10 / "2"); //5
console.log("10" / "2"); //5

console.log(10 + "10" / "2"); //10+10/2 => 10+5 = 15


console.log(10 + "10" + 10);//"1010"+10=101010
console.log(10 - "10" - 10);//10-10-10=-10
console.log(10 + "10" - 10);//"1010"-10=> 1010-10 = 1000


//unary plus:  + 
console.log(+"42" + 5);//42+5=47
let billAmount = "1000";
console.log(+billAmount + 100);

//unary negation: -
console.log(-"42" + 5);//-42+5=-37
console.log(-billAmount + 200);//-1000+200=-800

console.log(Number.parseInt(billAmount) + 100);

let bmi = "17.88";
console.log(Number.parseFloat(bmi) + 100);

console.log(-1 + "1");//- 1 + "1"=-11
console.log("1" - 1);//1-1=0

console.log(-"42" + "5");//-42 + "5" ==> -425

console.log(+"42" + "5");//42 + "5" ==> 425

console.log(+"42" + +"5");//42 + 5 ==> 47

console.log(+"42" - "5");//42 - 5 ==> 37

console.log(-"42" - -"5");//-42 - -5 => -42+5 = -37

//DMAS: 

console.log(-1 + "1" * 1);//-1 + 1 * 1=-1+1=0

console.log(4 - -2);

console.log(+"2" - -"2");//2 - -2 =4

