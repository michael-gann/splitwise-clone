"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Friends", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId1: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
        },
      },
      userId2: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Friends");
  },
};
