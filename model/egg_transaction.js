/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/sequelize");


  const egg_transaction = sequelize.define('egg_transaction', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    form_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    to_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'egg_transaction'
  });
module.exports = egg_transaction
