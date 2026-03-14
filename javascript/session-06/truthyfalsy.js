//What are Truthy and Falsy Values?

//In JavaScript, every value has an inherent boolean value when used in a boolean context (like in if statements). 
// Values are either truthy (evaluate to true) or falsy (evaluate to false).


//8 different types of falsy values:
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

if (" ") {
    console.log('hi');
}
else {
    console.log('hello');

}



//Truthy Values
//Everything else is truthy! Here are common examples:
// true
// 1, 42, -5
// "hello", "0", "false"
// []
// {}
// function() {}
// new Date()
// Infinity, -Infinity