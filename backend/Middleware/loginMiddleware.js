const jwt = require('jsonwebtoken');
const secretKey = 'test-key';

const loginMiddleware = {
  protectRoute(req, res, next) {
    let accessToken = req.headers.authorization; // Access token in the Authorization header
    // console.log(accessToken)
    accessToken = accessToken.split(' ')[1];
    if (!accessToken) {
      return res.status(401).json({ message: 'Access token is missing' });
    }

    try {
      const decodedToken = jwt.verify(accessToken, secretKey);
      req.user = decodedToken; // Attach the user data to the request object
      next(); 
    } catch (err) {
      return res.status(401).json({ message: 'Invalid access token' });
    }
  },
};

module.exports = loginMiddleware;
