"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, { foreignKey: "to" });
      Transaction.belongsTo(models.User, { foreignKey: "from" });
      Transaction.hasMany(models.Comment, { foreignKey: "transactionId" });
    }
  }
  Transaction.init(
    {
      to: DataTypes.INTEGER,
      from: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
