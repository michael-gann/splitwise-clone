"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TransactionUsers", {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
        },
      },
      transactionId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Transactions",
        },
      },
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable("TransactionUsers");
  },
};
