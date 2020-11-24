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
      Transaction.belongsTo(models.User, { foreignKey: "createdBy" });
      Transaction.belongsTo(models.User, { foreignKey: "paidBy" });
      Transaction.hasMany(models.Comment, { foreignKey: "transactionId" });
    }
  }
  Transaction.init(
    {
      createdBy: DataTypes.INTEGER,
      paidBy: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
