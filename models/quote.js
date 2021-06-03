const db = require('../config/db');
const { DataTypes } = require('sequelize')

module.exports = db.define('Quote', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})