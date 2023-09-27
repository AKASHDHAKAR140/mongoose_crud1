// const jwt = require('jsonwebtoken');
// const token = jwt.sign({
 
//     // Expression for initialising expiry time
//     exp: Math.floor(Date.now() / 1000) + (10 * 60),
//     data: 'Token Data'
// }, 'secretKey');
// const date = new Date();
// console.log(`Token Generated at:- ${date.getHours()}
//                                :${date.getMinutes()}
//                                :${date.getSeconds()}`);
 
// // Printing the JWT token
// console.log(token);

// const jwt = require('jsonwebtoken');
// const token = jwt.sign({
 
//     // Assigning data value
//     data: 'Token Data'
// }, 'secretKey', {
//     expiresIn: '1m'
// });
// const date = new Date();
// console.log(`Token Generated at:- ${date.getHours()}
//                                :${date.getMinutes()}
//                                :${date.getSeconds()}`);
// // Printing JWT token
// console.log(token);

const jwt = require('jsonwebtoken');

// Your secret key (should be kept secret and not hard-coded in production)
const secretKey = 'your-secret-key';

// Data to include in the token, including the date
const data = {
  userId: 123,
  username: 'john.doe',
  expirationDate: new Date().getTime() + 20 * 60 * 60 * 1000, // Set the expiration date (e.g., 24 hours from now)
};

// Generate the JWT token
const token = jwt.sign(data, secretKey);

console.log('Generated Token:', token);
