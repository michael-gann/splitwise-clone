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
      .filter((obj) => obj.Transaction === userId)
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
  "/activity",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    const userId = parseInt(user.id, 10);

    // Transaction IDs that I have a share in
    const myTransactionIds = (
      await TransactionUser.findAll({
        where: {
          userId: userId,
        },
      })
    ).map((tu) => tu.transactionId);

    // All the transactionUsers that have a share in the transactions
    // that I have a share in
    const transactionUsersByTransactionId = (
      await TransactionUser.findAll({
        where: {
          transactionId: {
            [Op.in]: myTransactionIds,
          },
        },
      })
    ).reduce((map, tu) => {
      if (map[tu.transactionId]) {
        map[tu.transactionId][tu.userId] = tu;
      } else {
        map[tu.transactionId] = { [tu.userId]: tu };
      }
      return map;
    }, {});

    console.log(transactionUsersByTransactionId);

    // All the transactions that I have a share in
    const myTransactions = await Transaction.findAll({
      where: {
        id: {
          [Op.in]: myTransactionIds,
        },
      },
    });

    // All the users that created the transactions I'm involved in
    const createdUserById = (
      await User.findAll({
        where: {
          id: {
            [Op.in]: myTransactions.map((t) => t.createdBy),
          },
        },
      })
    ).reduce((map, user) => {
      map[user.id] = user;
      return map;
    }, {});

    // creating object of useable info
    const result = myTransactions
      .map((t) => {
        let amount = 0;
        if (t.paidBy === userId) {
          for (const tu of Object.values(
            transactionUsersByTransactionId[t.id]
          )) {
            if (tu.userId !== userId) {
              amount += parseFloat(tu.amount);
            }
          }
        } else {
          amount =
            -1 *
            parseFloat(transactionUsersByTransactionId[t.id][userId].amount);
        }
        const createdByUsername = createdUserById[t.createdBy].username;

        return {
          title: t.title,
          createdBy: createdByUsername,
          amount,
          transactionId: t.id,
        };
      }) // sort by transactionId (most recent)
      .sort((a, b) => b.transactionId - a.transactionId); // DESC

    res.send(result);
  })
);

module.exports = router;

// OLD LOGIC

// const transactionIds = TxnUsersIncludeCurrentUser.map(
//   (txnUser) => txnUser.transactionId
// );

// const transactionActivity = await Transaction.findAll({
//   where: {
//     id: {
//       [Op.in]: transactionIds,
//     },
//   },
//   order: [["createdAt", "ASC"]],
// });

// // const users = await User.findAll({});

// // const usersMap = {};
// // for (const user of users) {
// //   usersMap[user.id] = user;
// // }

// const result = {
//   // only current users transactionusers
//   myTxnUsers,
//   // all transactionUsers that include current User
//   // TxnUsersIncludeCurrentUser,
//   // "transactionActivity": [
//   //   {
//   //     "id": 1,
//   //     "createdBy": 1,
//   //     "paidBy": 1,
//   //     "amount": "25",
//   //     "title": "One Mc'D's",
//   //     "createdAt": "2020-11-23T23:37:08.091Z",
//   //     "updatedAt": "2020-11-23T23:37:08.091Z"
//   // },
//   // "TxnUsersIncludeCurrentUser": [
//   //   {
//   //       "userId": 1,
//   //       "transactionId": 1,
//   //       "amount": "12.5",
//   //       "createdAt": "2020-11-23T23:37:08.163Z",
//   //       "updatedAt": "2020-11-23T23:37:08.163Z",
//   //       "User": {
//   //           "id": 1,
//   //           "username": "Demo-lition"
//   //       }
//   //   },
//   // all transactions that include current user
//   // transactionActivity,
//   // "transactionActivity": [
//   //   {
//   //     "id": 1,
//   //     "createdBy": 1,
//   //     "paidBy": 1,
//   //     "amount": "25",
//   //     "title": "One Mc'D's",
//   //     "createdAt": "2020-11-23T23:37:08.091Z",
//   //     "updatedAt": "2020-11-23T23:37:08.091Z"
//   // },
// };

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
