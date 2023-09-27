const jwt = require('jsonwebtoken');
const token = jwt.sign({
 
    // Assigning data value
    data: 'Token Data'
}, 'secretKey', {
    expiresIn: '10m'
});
const date = new Date();
console.log(`Token Generated at:- ${date.getHours()}
                               :${date.getMinutes()}
                               :${date.getSeconds()}`);
// Printing JWT token
console.log(token);