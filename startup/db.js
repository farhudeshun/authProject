module.exports = function () {
  const { Sequelize, DataTypes } = require("sequelize");
  const sequelize = new Sequelize("postgresProject", "postgres", "password", {
    host: "localhost",
    dialect: "postgres",
  });

  sequelize
    .authenticate()
    .then(() => console.log("✅ PostgreSQL connected successfully!"))
    .catch((err) =>
      console.error("❌ Database connection failed:", err.message)
    );
};
