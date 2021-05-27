const db = require('../config/db');
const { DataTypes } = require('sequelize')

module.exports = db.define('Wand', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  core: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  length: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
})