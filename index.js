const express = require("express");
require("dotenv").config();
const { sequelize } = require("./models/index");
const app = require("./server");
const PORT = process.env.PORT || 3000;

async function testSequelizeConnection() {
  try {
    await sequelize.authenticate();
    console.log();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testSequelizeConnection();
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
