const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes");
const db = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Welome to SamplingForms" });
});

app.use("/", routes);
db.sequelize.sync();
module.exports = app;
