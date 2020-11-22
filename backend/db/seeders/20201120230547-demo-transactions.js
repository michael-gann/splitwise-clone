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
          title: "test transaction",
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 3,
          from: 1,
          title: "test transaction",
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          to: 1,
          from: 3,
          title: "test transaction",
          amount: 50,
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
