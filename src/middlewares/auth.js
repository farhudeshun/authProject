const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("./../models/user"); // Assuming you export User correctly from Sequelize models

async function isLoggedIn(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.get("jwt_key"));
    console.log("Decoded token:", decoded);
    // Change `decoded.id` to `decoded._id` (because you're using _id in the payload)
    const user = await User.findOne({ where: { id: decoded._id } });

    if (user === null) {
      console.log("User not found!");
      return res.status(400).send("User not found");
    }

    console.log("User found:", user);
    req.user = user;
    next();
  } catch (ex) {
    console.error("Token verification failed:", ex.message);
    res.status(400).send("Invalid token");
  }
}

async function isAdmin(req, res, next) {
  if (!req.user.isadmin) return res.status(403).send("Access denied");
  next();
}

module.exports = {
  isLoggedIn,
  isAdmin,
};
