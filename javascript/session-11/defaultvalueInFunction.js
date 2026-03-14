
/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @param {*} role 
 * @param {*} status 
 */
function login(username, password, role = 'admin', status = 'active') {
    console.log(username, password, role, status);
};

// login('naveen@gmail.com', 'naveen@123');
// login('naveen@gmail.com', 'naveen@123', 'seller');
login('kiran', 'kiran@123' , null,   'inactive');
