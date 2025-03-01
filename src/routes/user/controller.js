const controller = require("../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

module.exports = new (class extends controller {
  async dashboard(req, res) {
    res.send("user dashboard");
  }

  async me(req, res) {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateProfile(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
      }).select("-password");
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
})();
