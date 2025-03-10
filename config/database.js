const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgresProject", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  logging: console.log, // Enable SQL query logging
});

sequelize
  .authenticate()
  .then(() => console.log("✅ PostgreSQL connected successfully!"))
  .catch((err) => console.error("❌ Database connection failed:", err.message));

module.exports = sequelize;
