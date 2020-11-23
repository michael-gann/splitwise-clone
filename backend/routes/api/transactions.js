const router = require("express").Router();
const { Transaction, User } = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { restoreUser } = require("../../utils/auth");

router.get(
  "/history",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    const userId = parseInt(user.id, 10);

    const transactions = await Transaction.findAll({
      where: {
        [Op.or]: {
          to: userId,
          from: userId,
        },
      },
    });

    const users = await User.findAll({
      where: {
        id: {
          [Op.in]: transactions
            .map((transaction) => transaction.from)
            .concat(transactions.map((transaction) => transaction.to)),
        },
      },
    });

    const usersMap = {};
    for (const user of users) {
      usersMap[user.id] = user;
    }

    let transactionSummaryByUserId = {};

    // Set object to send to front end to access balances and transactions by other users relating to current user
    for (let transaction of transactions) {
      let otherUserId;
      let amount = transaction.amount / 2;
      if (transaction.to === userId) {
        otherUserId = transaction.from;
      } else {
        otherUserId = transaction.to;
        amount = -1 * amount;
      }

      if (!transactionSummaryByUserId[otherUserId]) {
        transactionSummaryByUserId[otherUserId] = {
          name: usersMap[otherUserId].username,
          balance: amount,
          transactions: [transaction],
        };
      } else {
        transactionSummaryByUserId[otherUserId].balance += amount;
        transactionSummaryByUserId[otherUserId].transactions.push(transaction);
      }
    }

    // console.log(
    //   "transaction summary -----------------",
    //   transactionSummaryByUserId
    // );

    // const result = {
    //   transactions,
    //   users: usersMap,
    // };

    // console.log("API ROUTE", result);
    res.send(transactionSummaryByUserId);
  })
);

router.get(
  "/all",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    const userId = parseInt(user.id, 10);

    const transactions = await Transaction.findAll({
      where: {
        [Op.or]: {
          to: userId,
          from: userId,
        },
      },
    });

    const users = await User.findAll({
      where: {
        id: {
          [Op.in]: transactions
            .map((transaction) => transaction.from)
            .concat(transactions.map((transaction) => transaction.to)),
        },
      },
    });

    const usersMap = {};
    for (const user of users) {
      usersMap[user.id] = user;
    }

    const result = {
      transactions,
      users: usersMap,
    };

    res.send(result);
  })
);

module.exports = router;
