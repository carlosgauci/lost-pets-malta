require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    //   Get token
    const token = req.headers.authorization.split(" ")[1];
    const isGoogleAuth = token.length > 500;

    let decodedData;

    // Custom token verify
    if (token && !isGoogleAuth) {
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      // Google token verify
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
