const { Sequelize, DataTypes } = require('sequelize');
const connection = require("../index.js");
const sequelize = require('../config.js');


const User = sequelize.define('User',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
},{ timestamps: false })

module.exports = {User};
