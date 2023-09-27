const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-secret-key';
const  expiresIn = "10s";

function verifyToken(req, res, next) {
  const token = expiresIn;

  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token has expired' });
      } else {
        return res.status(403).json({ message: 'Invalid token' });
      }
    }
    
    // Token is valid, store the decoded data in the request object
    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;