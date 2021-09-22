const  sequelizer = require("../../../config/mysql2");
const  result = require("../../../utils/Result");
const { QueryTypes } = require('sequelize');

module.exports = async (req, res) => {
    const param = req.query;

    let offer = 0;
    let limit = 10;
    if(param.pageSize != undefined && param.current != undefined){
            offer = Number((param.current-1)*param.pageSize);
            limit = Number(param.pageSize)
    }
    let option = {
        offset:offer,
        limit:limit,
        order: [[ 'create_time', 'desc' ]],
    }
    let data = await  sequelizer.PetTransaction.findAndCountAll(option);
    res.status(200).json(result.success(data));
}
