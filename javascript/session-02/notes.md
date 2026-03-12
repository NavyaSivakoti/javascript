# Session 02 — Variables & Data Types
Feb 2, 2026

---

## var, let, const

JS is a run-time language — it doesn't understand int, float like Java. So var, let, const are the keywords introduced instead.

---

### var

- Re-declaration is allowed
- Duplication of variable is allowed
- That's why var is not used anymore

```js
var x = 10;
var x = 20; // allowed — no error
console.log(x); // 30
```

**Hoisting** — this means using a variable before it is even declared. JS allows this with var.

```js
console.log(t); // undefined — no error
var t = 90;
```

Never use var in modern JS — it's outdated.

---

### let

Re-declaration is not allowed — that's exactly why let was introduced.

```js
let p = 10;
console.log(p); // 10

let a;
console.log(a); // undefined — no value assigned yet
```

Hoisting with let throws an error at run time:

```js
// console.log(h); // Cannot access 'h' before initialization
// let h = 25;
```

Re-assignment is allowed with let:

```js
let total = 900;
total = 970;
total = 1000;
console.log(total); // 1000
```

---

### const

- Write const names in CAPS
- Always initialise — you can't declare const without a value
- Re-assignment not allowed
- Re-declaration not allowed
- Hoisting not allowed
- Use const when the value is never going to change

```js
const PI = 3.14;
// PI = 90.99; // TypeError: Assignment to constant variable

const LOGIN_TITLE = 'LoginPage';
const DAYS_IN_WEEK = 7;
```

---

## Data Types

Two types:

**1. Primitive** — simple, stack memory, fixed size, no garbage collector

**2. Non-Primitive** — Object, References, Class, Arrays, Functions, Interfaces — heap memory, dynamic size

---

## Primitive Data Types

### 1. Number

There is no int or float in JS. Any type of number is just called number.

- Memory: 8 bytes = 64 bits
- Range: -(2⁵³ - 1) to (2⁵³ - 1)
- Going beyond this range causes precision loss

```js
let i = 10;
console.log(typeof i); // number

let j = 12.33;
console.log(typeof j); // number — float is also number in JS
```

---

### 2. String

Sequence of characters — written in ' ' or " "

- Memory: 2 bytes per character
- Should be written only in small letters

```js
let a = '25';
console.log(typeof a); // string
```

---

### 3. Boolean

true or false — that's it.

- Memory: ~1 byte
- Memory allocation happens only at run time

```js
let x = true;
console.log(typeof x); // boolean

const rest = 'true'; // this is string, not boolean — because it's in quotes
```

---

### 4. BigInt

Used when you want to go beyond the number range.
Other numbers in the same operation also have to be BigInt — you can't mix.

```js
let amt = 10n;
console.log(typeof amt); // bigint

let x = 10n;
let y = 20n;
console.log(x + y); // 30n

let pop = BigInt(100); // another way to declare
console.log(typeof pop); // bigint
```

---

### 5. Null

Nothing — no value, no object. It's intentional absence of a value.
Use it when you don't know what the value will be yet.

```js
let myData = null;
console.log(typeof myData); // object — this is actually a bug in JS
```

---

### 6. Undefined

When you declare a variable but don't assign any value — it's undefined.

```js
let v;
console.log(typeof v); // undefined
```

Type of undefined is undefined.
