/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/sequelize");


const pet = sequelize.define('pet', {
    pet_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: DataTypes.INTEGER(1),
        allowNull: true
    },
    owner_address: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    type: {
        type: DataTypes.INTEGER(3),
        allowNull: true
    },
    image: {
        type: DataTypes.INTEGER(255),
        allowNull: true
    },
    create_time: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    tx_hash: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'pet'
});
module.exports = pet