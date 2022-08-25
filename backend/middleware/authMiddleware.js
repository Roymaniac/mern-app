const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protected = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token payload
      req.user = await User.findById(decoded.id).select("-password");

      // next
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("User is not unauthorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Invalid token");
  }
});

module.exports = { protected };
