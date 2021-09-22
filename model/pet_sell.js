/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/sequelize");


const pet_sell = sequelize.define('pet_sell', {
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
    current: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    current_contract: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    sell_account: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    create_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    tx_hash: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'pet_sell'
});
module.exports = pet_sell
