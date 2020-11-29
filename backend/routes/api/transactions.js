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

router.post(
  "/expense",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;
    const { formData } = req.body;

    const createdBy = user.id;
    const paidByString = formData.paidBy;
    const amountCents = Math.floor(parseFloat(formData.amount) * 100);
    const title = formData.title;

    const otherUsers = formData.users;
    const date = formData.date;

    const paidById = (
      await User.findOne({
        where: {
          username: paidByString,
        },
      })
    ).id;

    const userIds = (
      await User.findAll({
        where: {
          username: {
            [Op.in]: otherUsers,
          },
        },
      })
    )
      .map((user) => user.id)
      .concat([createdBy]);

    const numUsers = userIds.length;
    const shareCents = Math.floor(amountCents / numUsers);
    let shareAmountByUserId = {};
    for (const id of userIds) {
      shareAmountByUserId[id] = shareCents;
    }

    let remainingAmount =
      amountCents -
      Object.values(shareAmountByUserId).reduce(
        (sum, amount) => sum + amount,
        0
      );

    let i = 0;
    while (remainingAmount > 0) {
      remainingAmount -= 1;
      shareAmountByUserId[userIds[i % userIds.length]] += 1;
      i += 1;
    }

    for (const userId in shareAmountByUserId) {
      shareAmountByUserId[userId] /= 100;
    }

    const newExpense = await Transaction.create({
      createdBy,
      paidBy: paidById,
      amount: amountCents / 100,
      title,
      createdAt: date,
      updatedAt: new Date(),
    });

    let newTu = {};

    for (let user in shareAmountByUserId) {
      newTu[user] = {
        userId: user,
        transactionId: newExpense.id,
        amount: shareAmountByUserId[user],
      };
    }

    const newTuArr = Object.values(newTu);

    await TransactionUser.bulkCreate(newTuArr);

    res.send({ success: true });
  })
);

router.get(
  "/all",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    const userId = user.id;

    const myTransactionIds = (
      await TransactionUser.findAll({
        where: {
          userId: userId,
        },
      })
    ).map((tu) => tu.transactionId);

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

    // A list of users who paid for transactions I'm involved in
    const paidByUserById = (
      await User.findAll({
        where: {
          id: {
            [Op.in]: myTransactions.map((t) => t.paidBy),
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
        const userShares = [];

        for (const tu of Object.values(transactionUsersByTransactionId[t.id])) {
          const username = usersById[tu.userId].username;
          let amount = 0;
          if (t.paidBy === tu.userId) {
            amount = t.amount - parseFloat(tu.amount);
          } else {
            amount = parseFloat(tu.amount);
          }
          userShares.push({
            userId: tu.userId,
            username,
            amount,
          });
        }

        // if (t.paidBy === userId) {
        //   for (const tu of Object.values(
        //     transactionUsersByTransactionId[t.id]
        //   )) {
        //     if (tu.userId !== userId) {
        //       amount += parseFloat(tu.amount);
        //       if (tu.transactionId === t.id)
        //         otherUsers.push(usersById[tu.userId].username);
        //     }
        //   }
        // } else {
        //   amount =
        //     -1 *
        //     parseFloat(transactionUsersByTransactionId[t.id][userId].amount);
        // }
        const createdByUsername = createdUserById[t.createdBy].username;

        return {
          createdBy: createdByUsername,
          paidBy: paidByUserById[t.paidBy].username,
          userShares,
          title: t.title,
          total: t.amount,
          date: {
            day: t.createdAt.getDate(),
            month: t.createdAt.toLocaleString("default", { month: "short" }),
            year: t.createdAt.getFullYear(),
          },
          transactionId: t.id,
        };
      }) // sort by transactionId (most recent)
      .sort((a, b) => b.transactionId - a.transactionId); // DESC

    res.send({ result });
  })
);

module.exports = router;
