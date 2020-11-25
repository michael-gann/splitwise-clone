"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "TransactionUsers",
      [
        {
          userId: 1,
          transactionId: 1,
          amount: 12.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          transactionId: 1,
          amount: 12.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          transactionId: 2,
          amount: 17.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          transactionId: 2,
          amount: 17.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          transactionId: 3,
          amount: 9.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          transactionId: 3,
          amount: 9.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          transactionId: 4,
          amount: 5.125,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          transactionId: 4,
          amount: 5.125,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          transactionId: 5,
          amount: 50.425,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          transactionId: 5,
          amount: 50.425,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          transactionId: 6,
          amount: 42.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          transactionId: 6,
          amount: 42.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          transactionId: 7,
          amount: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          transactionId: 7,
          amount: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          transactionId: 8,
          amount: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          transactionId: 8,
          amount: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TransactionUsers", null, {});
  },
};
