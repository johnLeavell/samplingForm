const db = require("../models");
const { ValidationError } = require("sequelize");
const { validate: uuidValidate } = require("uuid");

const create = async (req, res) => {
  try {
    const site = await db.Site.create(req.body);
    return res.status(201).json({ site });
  } catch (err) {
    if (err instanceof ValidationError) {
      console.info("400 error @ POST / location", err);
      return res.status(400).send(err.message);
    }
    console.error("500 error @ POST / location", err);
    return res.status(500), send("Something went wrong");
  }
};

const getSiteById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!uuidValidate(id)) {
      return res.status(400).send("Provided ID is not valid UUID");
    }

    const site = await db.Site.findByPk(id);

    if (site) {
      return res.status(200).json({ site });
    }
    return res
      .status(404)
      .send("Location with the specificed ID does not exist!");
  } catch (err) {
    console.error("500 - Something is not right", err);
    return res.status(500).status(err.message);
  }
};

const findAll = async (req, res) => {
  try {
    const siteList = await db.Site.findAll();
    return res.status(200).json(siteList);
  } catch (err) {
    if (err) {
      console.log("400 validation error", err);
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const site = await db.Site.findOne({
      where: { id },
    });

    await site.update(
      { ...req.body },
      {
        where: { id },
      }
    );
    return res.status(200).json({ message: "Site updated" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteSite = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Site.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).send("Site deleted");
  } catch (err) {
    if (err) {
      console.log("Delete error", err);
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ err: err.message });
  }
};
module.exports = { create, findAll, getSiteById, update, deleteSite };
