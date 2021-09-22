const  sequelizer = require("../../../config/mysql2");
const  result = require("../../../utils/Result");
const { QueryTypes } = require('sequelize');

module.exports = async (req, res) => {
    let param = req.query;
    let current = param.current;
    let pageSize = param.pageSize;

    let obj = {
        current:current,
        pageSize:pageSize,
    }
    let offer = 0;
    let limit = 10;
    if(obj.pageSize != undefined && obj.current != undefined){
            offer = Number((obj.current-1)*obj.pageSize);
            limit = Number(obj.pageSize)
    }
    let param = {
        offset: offer,
        limit: limit,
        order:[["create_time",'desc']],
    }
    let data = await sequelizer.RingRecord.findAndCountAll(param);
    res.status(200).json(result.success(data));
}
