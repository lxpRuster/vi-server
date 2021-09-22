/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/sequelize");


const ring_record = sequelize.define('ring_record', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ring_pet_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    ring_address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    item_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    challenger_pet_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    challenger_address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    rv: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    isWin: {
        type: DataTypes.INTEGER(1),
        allowNull: true
    },
    create_time: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    value: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    tx_hash: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    uuid: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'ring_record'
});
module.exports = ring_record

