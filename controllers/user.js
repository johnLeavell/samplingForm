const db = require("../models");
const { ValidationError } = require("sequelize");
const { validate: uuidValidate } = require("uuid");

const create = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.info("400 error @ POST /user", err);
      return res.status(400).send(err.message);
    }
    console.error("500 error @ POST /user", err);
    return res.status(500).send("Something went wrong");
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!uuidValidate(id)) {
      return res.status(404).send("Provided ID is not a valid UUID");
    }
    const user = await db.User.findByPk(id);

    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send("User with the specificed ID does not exist!");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { create, getUserById };
