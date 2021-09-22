// Require and initialize outside of your main handler
const {Sequelize} = require("sequelize");
const sequelize = new Sequelize('router_events', 'vercel', 'vercel123', {
    host: 'db4free.net',
    port: 3306,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
});

module.exports = sequelize
