/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/sequelize");


  const event_Log = sequelize.define('event_Log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    block_hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    log_index: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'event_Log'
  });
module.exports = event_Log
