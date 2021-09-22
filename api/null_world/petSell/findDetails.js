const  sequelizer = require("../../../config/mysql2");
const  result = require("../../../utils/Result");
const { QueryTypes } = require('sequelize');

module.exports = async (req, res) => {
    let id = req.query.id;
    console.log("==============================id==========",id)
    let petSell = await sequelizer.pet_sell.findByPk(id);
    let list = [];
    if(petSell!=null){
        let pet = await sequelizer.Pet.findByPk(petSell.pet_id);
        if(pet!=null){
            petSell.dataValues.type = pet.type;
        }
        //查询恐龙成交记录
        let option = {
            where:{pet_id:petSell.pet_id}
        }
        list = await sequelizer.pet_transaction.findAll(option);
    }

    let data = {
        petSell:petSell,
        transaction:list
    }
    res.status(200).json(result.success(data));
}
