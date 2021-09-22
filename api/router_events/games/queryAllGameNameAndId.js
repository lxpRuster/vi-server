const mysql = require('../../../config/mysql')
const { QueryTypes } = require('sequelize');
const sequelize = require('../../../config/mysql2')

const Result = require('../../../constants/result')

module.exports = async (req, res) => {

    const sql = 'select gameId,gameName from NewGame';

    const result = await sequelize.query(sql, { type: QueryTypes.SELECT });
    // const result = await mysql.query(sql);
    const data = Result.commonResult(result);

    res.status(200).json(data);
}
