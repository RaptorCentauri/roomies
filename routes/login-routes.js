// const UserDB = require("../models"), Sequelize = require('sequelize'), Op = Sequelize.Op;
// const users = require("../controllers/login.js");
// const signup = require("../controllers/signup.js");
// const jwt = require("jsonwebtoken");

const db = require("../models");
// const AccountDB = require("../models/accounts.js");
// const Accounts = 

module.exports = (app) => {

    app.post("/api/login", function (req, res) {

        console.log("post Made to /api/login");

        let profile = req.body;

        console.log(profile);

        db.account.create({
            email: profile.firstName,
            password: profile.lastName,
        }).then(() => console.log('GOOD ADD TO DB'));
    })
};

