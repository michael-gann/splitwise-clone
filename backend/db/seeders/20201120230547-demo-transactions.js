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
          createdBy: 1,
          paidBy: 1,
          amount: 25,
          title: "One Mc'D's",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          createdBy: 3,
          paidBy: 3,
          amount: 34.5,
          title: "Second Wendys",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          createdBy: 2,
          paidBy: 2,
          amount: 18.5,
          title: "Uber Ride",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          createdBy: 1,
          paidBy: 3,
          amount: 10.25,
          title: "Arbys",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          createdBy: 5,
          paidBy: 1,
          amount: 100.85,
          title: "A day at the spa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          createdBy: 6,
          paidBy: 2,
          amount: 85,
          title: "Covid Supplies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          createdBy: 1,
          paidBy: 1,
          amount: 112,
          title: "Groceries",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          createdBy: 6,
          paidBy: 1,
          amount: 500,
          title: "Rent",
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
