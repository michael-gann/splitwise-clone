const router = require("express").Router();
const { Transaction, User, TransactionUser } = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { restoreUser } = require("../../utils/auth");

router.get(
  "/balances",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    const userId = parseInt(user.id, 10);

    // query for TransactionUsers that involve currentUser
    const myTxnUsers = await TransactionUser.findAll({
      include: [
        {
          model: Transaction,
          include: [User],
        },
      ],
      where: {
        userId: userId,
      },
    });

    // filter and map over paidBy to get userId's that are not current user to
    const paidTransactionIds = myTxnUsers
      .filter((obj) => obj.Transaction.paidBy === userId)
      .map((obj) => obj.Transaction.id);

    // query for users that have a balance with current user
    const incomingTxnUsers = await TransactionUser.findAll({
      include: [User],
      where: {
        transactionId: {
          [Op.in]: paidTransactionIds,
        },
        userId: {
          [Op.not]: userId,
        },
      },
    });

    const usersById = {};
    const balancesByUserId = {};

    for (const transactionUser of myTxnUsers) {
      if (transactionUser.Transaction.paidBy !== userId) {
        if (balancesByUserId[transactionUser.Transaction.paidBy]) {
          balancesByUserId[transactionUser.Transaction.paidBy] -= parseFloat(
            transactionUser.amount
          );
        } else {
          balancesByUserId[transactionUser.Transaction.paidBy] =
            -1 * parseFloat(transactionUser.amount);
        }
      }
      usersById[transactionUser.Transaction.User.id] =
        transactionUser.Transaction.User;
    }

    for (transactionUser of incomingTxnUsers) {
      if (balancesByUserId[transactionUser.userId]) {
        balancesByUserId[transactionUser.userId] += parseFloat(
          transactionUser.amount
        );
      } else {
        balancesByUserId[transactionUser.userId] = parseFloat(
          transactionUser.amount
        );
      }
      usersById[transactionUser.User.id] = transactionUser.User;
    }

    const result = {
      balancesByUserId,
      users: usersById,
    };

    res.send(result);
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
      order: [["createdAt", "ASC"]],
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

// OLD LOGIC

// const transactions = await Transaction.findAll({
//   where: {
//     [Op.or]: {
//       to: userId,e
//       from: userId,
//     },
//   },
// });

// const users = await User.findAll({
//   where: {
//     id: {
//       [Op.in]: transactions
//         .map((transaction) => transaction.from)
//         .concat(transactions.map((transaction) => transaction.to)),
//     },
//   },
// });

// let transactionSummaryByUserId = {};

// // Set object to send to front end to access balances and transactions by other users relating to current user
// for (let transaction of transactions) {
//   let otherUserId;
//   let amount = transaction.amount / 2;
//   if (transaction.to === userId) {
//     otherUserId = transaction.from;
//   } else {
//     otherUserId = transaction.to;
//     amount = -1 * amount;
//   }

//   if (!transactionSummaryByUserId[otherUserId]) {
//     transactionSummaryByUserId[otherUserId] = {
//       name: usersMap[otherUserId].username,
//       balance: amount,
//       transactions: [transaction],
//     };
//   } else {
//     transactionSummaryByUserId[otherUserId].balance += amount;
//     transactionSummaryByUserId[otherUserId].transactions.push(transaction);
//   }
// }

// console.log(
//   "transaction summary -----------------",
//   transactionSummaryByUserId
// );
