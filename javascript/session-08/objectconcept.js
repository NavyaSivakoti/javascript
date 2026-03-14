//object --> non prmitive data type
//reference type
//key-value pair format

let user = {
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true,
    address: {
        flat: 101,
        zip: 545454,
        lat: 10.34,
        long: 11.22
    },
};

console.log(user);
console.log(user.name);//GET

console.log(user.age);
console.log(user.tel);
console.log(user['city']);

console.log(user.address.flat);
console.log(user.address.lat);
console.log(user.address['zip']);
console.log(user['address']['flat']);


//create a new key-value pair
user.email = 'tom@gmail.com';
console.log(user);

//delete a pair
delete user.age;
console.log(user);
//update a pair
user.name = 'Tom Autmation';
console.log(user);







