const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserAutho =  (req, res, next) => {
  
    const authorizationUser = req.headers["authorization"];
    if (!authorizationUser) {
      return res
        .status(400)
        .json({ message: "Unauthorized please login first" });
    }

    const token = authorizationUser && authorizationUser.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .json({ message: "Unauthorized please login first" });
    }

   try{
     const decodeToken =  jwt.verify(token, process.env.JWT_SECRET_KEY);
     console.log(decodeToken);
     
    req.userInfo = decodeToken;
    next()
   }
  catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token, please login again",
    });
  }
};

module.exports = UserAutho
