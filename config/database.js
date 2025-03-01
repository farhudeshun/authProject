const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgresProject", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Set to true for debugging SQL queries
});

sequelize
  .authenticate()
  .then(() => console.log("✅ PostgreSQL connected successfully!"))
  .catch((err) => console.error("❌ Database connection failed:", err.message));

module.exports = sequelize;
