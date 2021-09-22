const  sequelizer = require("../../../config/mysql2");
const  result = require("../../../utils/Result");
const { QueryTypes } = require('sequelize');

module.exports = async (req, res) => {

    let param = {
        where:{'model':1,'status':1},
        order:[["count",'asc']]
    }
    let item = await sequelizer.Item.findOne(param);
    
    if(item == undefined){
        res.status(200).json(result.error("没有找到对应的item"));
      return
    }
    let data = {
        item_id:item.contract_item_id
    }
    res.status(200).json(result.success(data));
}
s