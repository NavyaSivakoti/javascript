//additon: +
//The + operator always favors concatenation if a string is present.
console.log(1 + 1);//2
console.log("1" + 1);//11
console.log("1" + "1");//11
console.log(1 + "1");//11

//subtraction: -
// For operators -, *, /, JavaScript attempts to convert string numbers into actual numbers
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
console.log(-1 + "1"); // -11
console.log(-1 + "1" * 2);//1

console.log('hello' * 'hi');//hello*hi=NaN

//division:
console.log(10 / "2"); //5
console.log("10" / "2"); //5

console.log(10 + "10" / "2"); //10+10/2 => 10+5 = 15

console.log(10 + "10" + 10);//"1010"+10=101010
console.log(10 - "10" - 10);//10-10-10=-10
console.log(10 + "10" - 10);//"1010"-10=> 1010-10 = 1000

//unary plus:  + 
// Placing a + immediately before a numeric string converts it to a number.
console.log(+"42" + 5);//42+5=47
let billAmount = "1000";
console.log(+billAmount + 100);

//unary negation: -
//Converts a string to a number and negates it.
console.log(-"42" + 5);//-42+5=-37
console.log(-billAmount + 200);//-1000+200=-800

//Alternatively, you can use built-in methods
console.log(Number.parseInt(billAmount) + 100);


console.log("sum is " + 10 + 20);
console.log("sum is", 10+20);

