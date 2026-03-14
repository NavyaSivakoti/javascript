let u1 = {
    name: 'ravi',
    age: 30,
    city: 'LA'
};

let u2 = {
    name: 'ankita',
    age: 20,
    city: 'pune'
};

let u3 = {
    name: 'pravin',
    age: 40,
    city: 'delhi'
};


console.log(u1);
console.log(u2);
console.log(u3);

console.log('=======');
u1 = u2;
console.log(u1);//ankita
console.log(u2);//ankita
console.log(u3);//pravin

console.log('=======');
u2 = u3;
console.log(u1);//Ankita
console.log(u2);//Pravin
console.log(u3);//Pravin

console.log('=======');
u3 = u1;
console.log(u1);
console.log(u2);
console.log(u3);



