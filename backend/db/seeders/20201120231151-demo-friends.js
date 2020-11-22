"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Friends",
      [
        {
          userId1: 1,
          userId2: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId1: 2,
          userId2: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId1: 3,
          userId2: 1,
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
    await queryInterface.bulkDelete("Friends", null, {});
  },
};
