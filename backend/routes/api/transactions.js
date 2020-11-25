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
    const transactionUsers = await TransactionUser.findAll({
      where: {
        transactionId: {
          [Op.in]: myTransactionIds,
        },
      },
    });

    // All the transactions that I have a share in
    const myTransactions = await Transaction.findAll({
      where: {
        id: {
          [Op.in]: myTransactionIds,
        },
      },
    });

    const usersById = (
      await User.findAll({
        where: {
          id: {
            [Op.in]: transactionUsers
              .map((tu) => tu.userId)
              .concat(myTransactions.map((t) => t.paidBy)),
          },
        },
      })
    ).reduce((map, user) => {
      map[user.id] = user;
      return map;
    }, {});

    const transactionUsersByTransactionId = transactionUsers.reduce(
      (map, tu) => {
        if (map[tu.transactionId]) {
          map[tu.transactionId][tu.userId] = tu;
        } else {
          map[tu.transactionId] = { [tu.userId]: tu };
        }
        return map;
      },
      {}
    );

    const balancesByUserId = {};
    for (const transaction of myTransactions) {
      if (transaction.paidBy !== userId) {
        if (!balancesByUserId[transaction.paidBy]) {
          balancesByUserId[transaction.paidBy] =
            -1 *
            parseFloat(
              transactionUsersByTransactionId[transaction.id][userId].amount
            );
        } else {
          balancesByUserId[transaction.paidBy] -= parseFloat(
            transactionUsersByTransactionId[transaction.id][userId].amount
          );
        }
      } else {
        for (const tu of Object.values(
          transactionUsersByTransactionId[transaction.id]
        )) {
          if (tu.userId !== userId) {
            if (!balancesByUserId[tu.userId]) {
              balancesByUserId[tu.userId] = parseFloat(
                transactionUsersByTransactionId[transaction.id][tu.userId]
                  .amount
              );
            } else {
              balancesByUserId[tu.userId] += parseFloat(
                transactionUsersByTransactionId[transaction.id][tu.userId]
                  .amount
              );
            }
          }
        }
      }
    }

    const result = {
      balancesByUserId,
      usersById,
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
