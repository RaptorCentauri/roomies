//References Sequelize libray
var Sequelize = require("sequelize");

// references the connection to the DB
var sequelize=require("../config/connection.js");

//Creates a model that matches up with DB
var roommates = sequelize.define('roommates', {
	user_id: {
	 	type: Sequelize.INTEGER,
	}, 	
	firstName: {
		type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING	
    },
    email: {
      type: Sequelize.STRING
    },
    user_password: {
      type: Sequelize.STRING
    },
    rent: {
    	type: Sequelize.INTEGER
    },
    smoker: {
    	type: Sequelize.STRING
    },
    age: {
    	type: Sequelize.INTEGER
    },
    zipCode: {
    	type: Sequelize.INTEGER
    },
    pets: {
    	type: Sequelize.STRING
    },
    aboutMe: {
    	type: Sequelize.TEXT
    },   
  },
   {
  timestamps: false}
);


//Sync with DB
roommates.sync();

// create table
module.exports = roommates;