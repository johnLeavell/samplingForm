'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sampleDate: {
        type: Sequelize.DATE
      },
      sampleTime: {
        type: Sequelize.DATE
      },
      sampleVolume: {
        type: Sequelize.TEXT
      },
      sampleTemp: {
        type: Sequelize.TEXT
      },
      samplePh: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reports');
  }
};