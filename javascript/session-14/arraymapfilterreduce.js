//1. map: transform every element of the given array
//return: returns a new array

let number = [1, 2, 3, 4, 5];

let num = number.map(e => e * 2);
console.log(num);
console.log(number);

let sqrt = number.map(e => e * e);
console.log(sqrt);


let empNames = ['UDay', 'AnkiTa', 'navya', 'senthil'];
let namesUpper = empNames.map(n => n.toUpperCase());
console.log(namesUpper);

//2. filter: remove the elements on the basis of given condition

let numbers = [10, 25, 30, 45, 50, 60];
let grThan30 =  numbers.filter(n => n > 30);
console.log(grThan30);

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

let names = ['Naveen', 'Ankita', 'Priyatosh', 'jay', 'om', 'peter'];
let longNames = names.filter(n => n.length > 3);
console.log(longNames);

let productData = ['apple macbook', 'apple iph', 'samsung galaxy', 'canon', 'apple air'];
let appleProducts = productData
                            .filter(p => p.startsWith('apple'))
                                    .filter(p => p.includes('iph'))
                                        .map(p => p.replace('iph', 'iPhone'));
console.log(appleProducts);


//3. reduce: combine everything into ONE value
//it will return a single value

let numData = [10, 20, 30, 40, 50];

let total = numData.reduce((sum, n) => sum + n, 0);
console.log(total);

let empAddress = ["Sridevi", "500", "Rainbow apts", "Pune", "India"];

let actAddress =  empAddress.reduce((initaddress, word) =>  initaddress+word+" " , "");
console.log(actAddress); //500 Rainbow apts Pune India 

//chain all the methods:
//number array: even --> square them --> sum

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//10

let finalSum = myNumbers
    .filter(e => e % 2 === 0)//[2,4,6,8,10]-->5
    .map(e => e * e)//[4,16,36,64,100] --> 5
    .reduce((sum, n) => sum + n, 0);

console.log(finalSum);
