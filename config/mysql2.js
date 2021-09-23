// Require and initialize outside of your main handler
const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize('router_events', 'vercel', 'vercel123', {
//     host: 'db4free.net',
//     port: 3306,
//     dialect: 'mysql',
//     dialectModule: require('mysql2'),
// });
// const sequelize = new Sequelize('router_events', 'admin', 'admin123456', {
//     host: '139.9.214.55',
//     port: 3306,
//     dialect: 'mysql',
//     dialectModule: require('mysql2'),
// });
const sequelize = new Sequelize('router_events', 'nullsre', 'hcJBhncnUsZayXWf$$', {
    host: 'rm-3nsbo8xy0h258g04yjo.mysql.rds.aliyuncs.com',
    port: 3306,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    pool: {
        max: 15,
        min: 5,
        idle: 20000,
        evict: 15000,
        acquire: 30000
    },
});

module.exports = sequelize
