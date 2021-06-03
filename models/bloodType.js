const db = require('../config/db');
const { DataTypes } = require('sequelize')

module.exports = db.define('BloodType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})