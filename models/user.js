const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define a "User" model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = User;
