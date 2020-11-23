"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //
    // Add seed commands here.
    //
    // Example:
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          to: 2,
          from: 1,
          title: "test transaction 1",
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 3,
          from: 1,
          title: "test transaction 2",
          amount: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 1,
          from: 3,
          title: "test transaction 3",
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 1,
          from: 4,
          title: "test transaction 4",
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 1,
          from: 2,
          title: "test transaction 5",
          amount: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 4,
          from: 1,
          title: "test transaction 6",
          amount: 510,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 1,
          from: 4,
          title: "test transaction 7",
          amount: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 5,
          from: 1,
          title: "test transaction 8",
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 1,
          from: 3,
          title: "test transaction 9",
          amount: 4.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 1,
          from: 5,
          title: "test transaction 10",
          amount: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * ;
     */
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
