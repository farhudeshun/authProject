const express = require("express");
const app = express();
const config = require("config");
const router = require("./src/routes/");

const sequelize = require("./config/database");

require("./startup/config")(app, express);
require("./startup/db")();
require("./startup/logging")();

sequelize
  .sync()
  .then(() => {
    console.log("✅ Models synced with the database.");
  })
  .catch((error) => {
    console.error("❌ Error syncing models:", error);
  });

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
