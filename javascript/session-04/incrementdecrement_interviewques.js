// let i = 11;
// let j = i++ + ++i;
// console.log(i);//13
// console.log(j);//24

// let a = 11, b = 22;		
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c);


// let i=0;
// let j = i++ - --i + ++i - i--;
// console.log(i);
// console.log(j);


// let i=19, j=29, k=9;
// let m = i-- - j-- - k--;
// console.log("i="+i);//18
// console.log("j="+j);//28
// console.log("k=" + k);//8
// console.log("m=" + m);//-19



// let i = 11;
// let j = --(i++); //error

// console.log(++11);//error


let m = 0, n = 0;
let p = --m * --n * n-- * m--;

console.log(p);
console.log(m);
console.log(n);

// console.log(++true);//error

let a = 10n;
console.log(++a);//11n

let d = 1.5, D = 2.5;
console.log(d++ + ++D);


console.log(d);
console.log(D);

