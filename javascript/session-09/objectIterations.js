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
    devices: ['iphone', 'mouse', 'keyboard'],
    
};

console.log(Object.keys(user));//this will print all the keys in user object.

//for in loop:
for (let key in user) {
    console.log(key, ':', user[key]);
}

console.log(user.devices.length);//to get the length of the devices

for (let key in user) {
    console.log(key, ':', user[key]);
    if (key === 'address') { //if you want to interate the address
        for (let ele in user[key]) {
            console.log(user[key][ele]);
        }
    }
    if (key === 'devices') { //if you want to interate devices array
        for (let ele of user[key]) {
            console.log(ele);
        }
    }
}