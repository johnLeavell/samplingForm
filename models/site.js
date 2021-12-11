"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Site extends Model {
    static associate(models) {
      // define association here
    }
  }
  Site.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    siteName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    siteLocation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sequelize,
    modelName: "Site",
    tableName: "sites",
  });
  return Site;
};
