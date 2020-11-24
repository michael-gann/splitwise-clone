"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransactionUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransactionUser.belongsTo(models.User, { foreignKey: "userId" });
      TransactionUser.belongsTo(models.Transaction, {
        foreignKey: "transactionId",
      });
    }
  }
  TransactionUser.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      transactionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      amount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "TransactionUser",
    }
  );
  return TransactionUser;
};
