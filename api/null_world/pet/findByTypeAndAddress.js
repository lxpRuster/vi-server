const  sequelizer = require("../../../config/mysql2");
const  result = require("../../../utils/Result");
const { QueryTypes } = require('sequelize');

module.exports = async (req, res) => {
    let address = req.query.address;
    let param = {
        where:{'owner_address':address,'type':255,'status':4},
    }
    let data = await sequelizer.pet.findAll(param);
    res.status(200).json(result.success(data));
}
