/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/sequelize");

const pet_transaction = sequelize.define('pet_transaction', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    pet_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    pet_image: {
        type: DataTypes.INTEGER(2),
        allowNull: true
    },
    buy_user_address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    sell_user_address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    price: {
        type: DataTypes.STRING(18),
        allowNull: true
    },
    tx_hash: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    create_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    currency: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    current_contract: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'pet_transaction'
});
module.exports = pet_transaction

