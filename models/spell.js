const db = require('../config/db');
const { DataTypes } = require('sequelize')

module.exports = db.define('Spell', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  light: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  incantation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  effect: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pronunciation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})