const  sequelizer = require("../../../config/mysql2");
const  result = require("../../../utils/Result");
const { QueryTypes,Op } = require('sequelize');

module.exports = async (req, res) => {
    let where = {
        owner_address:req.query.address
    }
    if(req.query.status != 0){
        where.status = req.query.status
    }
    let offer = 0;
    let limit = 10;
    if(req.query.pageSize != undefined && req.query != undefined){
            offer = Number((req.query.current-1)*req.query.pageSize);
            limit = Number(req.query.pageSize)
    }
    let type = req.query.type;
    if(type == 1){
        where.type = 255
    }
    if(type == 2){
        where.type = { [Op.ne]: 255}
    }
    let data = {
        where:where,
        offset:offer,
        limit:limit,
        order:[["type",'desc'],["create_time","desc"]]
    }
    let data = await sequelizer.pet.findAndCountAll(data);

    res.status(200).json(result.success(data));
}