const router = require("express").Router();
const { User, Friend } = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { restoreUser } = require("../../utils/auth");

router.get(
  "/",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;
    const userId = user.id;

    const friends = await Friend.findAll({
      where: {
        [Op.or]: [{ userId1: userId }, { userId2: userId }],
      },
    });

    const friendIds = friends.map((friend) =>
      friend.userId1 === userId ? friend.userId2 : friend.userId1
    );

    const usersByUserId = (
      await User.findAll({
        where: {
          id: {
            [Op.in]: friendIds,
          },
        },
      })
    ).reduce((map, user) => {
      map[user.id] = user;
      return map;
    }, {});

    const myFriends = {};

    console.log(usersByUserId);

    console.log(friendIds);

    for (const id of friendIds) {
      if (!myFriends[id]) {
        myFriends[id] = {
          username: usersByUserId[id].username,
        };
      }
    }

    res.send(myFriends);
  })
);

router.post(
  "/",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { friend } = req.body;
    const { user } = req;

    const userId = user.id;

    const friendId = (
      await User.findOne({
        where: {
          username: friend,
        },
      })
    ).id;

    const addFriend = await Friend.create({
      userId1: userId,
      userId2: friendId,
    });

    console.log(friendId);

    console.log(addFriend);

    res.send({ success: true });
  })
);

module.exports = router;
