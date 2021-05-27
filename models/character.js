const db = require('../config/db');
const { DataTypes } = require('sequelize')

module.exports = db.define('Character', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hairColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eyeColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skinColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patronus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  boggart: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})