// This file initiates the connection to MYSQL

//Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("roommates", "root", "Zui30*read",{
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Export connection
module.exports = sequelize;
