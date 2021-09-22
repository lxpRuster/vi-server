/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/sequelize");


  const config = sequelize.define('config', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    config_key: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    config_value: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'config'
  });

module.exports = config
