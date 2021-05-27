const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.PG_CONN_STR, { logging: false });
