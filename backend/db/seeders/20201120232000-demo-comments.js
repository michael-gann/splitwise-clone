"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          transactionId: 2,
          content: "I don't remember spending that much money",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          transactionId: 3,
          content: "Did you forget to pay me?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          transactionId: 1,
          content: "I'm just giving away money",
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
     *
     */
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
