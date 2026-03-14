
let str = 'hello'; //0-4: 5

console.log(str.length);
console.log(str.indexOf('h'));
console.log(str.indexOf('p'));//-1
console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));

console.log(str.includes('ell'));
console.log(str.includes('naveen'));

console.log(str.startsWith('he'));
console.log(str.endsWith('lo'));
console.log(str.endsWith('hello'));

//slice:
console.log(str.slice(1, 3));
console.log(str.slice(-3));
console.log(str.slice(-1));
console.log(str.slice(0));
console.log(str.slice(-5));

console.log(str.slice(-4, -1));
console.log(str.slice(-3, -1));
console.log(str.slice(-5, -3));

console.log(str.slice(-4, 4));
console.log(str.slice(-5, 3));

console.log('==========');
console.log(str.slice(0, -5));
//start>=end

console.log(str.substring(1, 3));

console.log('==========');

let st = 'playwright';
console.log(st.charAt(0));
console.log(st.charAt(-1));

console.log("A".charCodeAt());
console.log("a".charCodeAt());
console.log("abc".charCodeAt(2));
console.log(" ".charCodeAt());
console.log("$".charCodeAt());

//A-Z: 65 to 90
//a-z: 97 to 122
//0-9: 48 to 57

console.log(st.toUpperCase());
console.log(st.toLowerCase());

console.log("  hello    ".trim());
console.log("  hello    ".trimStart());
console.log("  hello    ".trimEnd());

//replace:

console.log("hi hi".replace("hi", "hey"));
console.log("hi hi".replaceAll("hi", "hey"));

let dob = "01-01-1990"; //01/01/1990
console.log(dob.replaceAll("-", "/"));

//conact:
console.log("hello".concat(" ", " Selenium", " Automation"));

//padding:
console.log("7".padStart(3, 0));
console.log("7".padEnd(3, 0));
console.log("7".padEnd(3, 'hi'));
console.log("7".padEnd(7, 'hello'));

//repeat:
console.log("".repeat(3));

//split:
let lang = 'java_python_ruby';
let lg = lang.split('_');
console.log(lg[0]);

