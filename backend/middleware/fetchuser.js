var jwt = require("jsonwebtoken");
const JWT_SECRET = 'Thisisagoodboy';
// middle function takes req res and next and calls next so that the next function will get called
const fetchuser = (req, res, next) => {
  // Get the user form the jwt token and add id to req object
  // we take token  from the header
  const token = req.header('auth-token');
// if token is wrong then it will return error 
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    //    if some of the error is occured then it will show error
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
};
module.exports = fetchuser;
