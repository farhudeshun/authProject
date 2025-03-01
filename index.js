const express = require("express");
const app = express();
const debug = require("debug")("app:main");
const config = require("config");
const router = require("./src/routes/");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgresProject", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("✅ PostgreSQL connected successfully!"))
  .catch((err) => console.error("❌ Database connection failed:", err.message));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", router);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`litening on port ${port}`));
