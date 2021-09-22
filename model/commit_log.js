/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/sequelize");

const commit_log = sequelize.define('commit_log', {
    commit_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    hash: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    nonce: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    dateline: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    commit_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    model: {
        type: DataTypes.INTEGER(1),
        allowNull: true
    }
}, {
    tableName: 'commit_log'
});
module.exports = commit_log
