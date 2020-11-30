const router = require("express").Router();
const {
  Transaction,
  User,
  TransactionUser,
  Comment,
} = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { restoreUser } = require("../../utils/auth");

router.get(
  "/all",
  restoreUser,
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();

    const userIds = comments.map((c) => c.userId);

    const usersById = (
      await User.findAll({
        where: {
          id: {
            [Op.in]: userIds,
          },
        },
      })
    ).reduce((map, user) => {
      map[user.id] = user;
      return map;
    }, {});

    const commentsById = {};
    const commentList = [];

    for (const comment of comments) {
      commentsById[comment.id] = {
        user: usersById[comment.userId],
        content: comment.content,
        transactionId: comment.transactionId,
      };
    }

    // console.log(commentsByTransactionId);

    res.send(commentsById);
  })
);

router.post(
  "/",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;
    const { formData } = req.body;

    const userId = user.id;
    const comment = formData.comment;
    const transactionId = formData.transactionId;

    const newComment = await Comment.create({
      userId,
      transactionId,
      content: comment,
    });

    res.send({ success: true });
  })
);

module.exports = router;
