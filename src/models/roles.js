const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const User = require("./user");
const Role = require("./roles");

const UserRoles = sequelize.define("UserRoles", {}, { timestamps: false });

// Define Many-to-Many Relationship
User.belongsToMany(Role, { through: UserRoles });
Role.belongsToMany(User, { through: UserRoles });

module.exports = UserRoles;
