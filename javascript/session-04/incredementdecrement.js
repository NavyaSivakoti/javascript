//++ and --

//1. post (later/after) increment:
let a = 1;
let b = a++;
console.log(a);//2
console.log(b);//1

let x = -99;
let y = x++;
console.log(x);//-98
console.log(y);//-99

let total = 10;
console.log(total++);//10
console.log(total);//11

//2. pre(before/first) increment: 
let p = 1;
let q = ++p;
console.log(p);//2
console.log(q);//2

let p1 = -999;
let q1 = ++p1;
console.log(p1);//-998
console.log(q1);//-998

let u = 0;
let v = ++u;
console.log(u);
console.log(v);


//3. post(later/after) decrement: --
let m = 2;
let n = m--;
console.log(m);//1
console.log(n);//2

//4. pre (first/before) decrement : --

let t = 2;
let r = --t;
console.log(t);
console.log(r);

let bill = 100;
console.log(--bill);//99
console.log(bill);

let amt = 10;
console.log(amt--);//10
console.log(amt);//9

console.log("--------------");







