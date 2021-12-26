"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    static associate(models) {}
  }
  Report.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
      },
      sampleDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sampleTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sampleVolume: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sampleTemp: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      samplePh: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Report", tableName: "reports" }
  );
  return Report;
};
