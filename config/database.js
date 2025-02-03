const { Sequelize } = require('sequelize');

// Set up a connection to the database
const sequelize = new Sequelize('userdata', 'root', 'Admin123@', {
  host: 'localhost', // or your MySQL host
  dialect: 'mysql',  // You can change this to 'postgres', 'sqlite', etc. depending on your DB
  logging: false,    // Turn off logging if you don't want to see SQL queries in the console
});

module.exports = sequelize;
