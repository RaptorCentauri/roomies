const bcrypt = require('bcrypt');
const db = require("../models");

createNewAccount = (email, password) => {
    return new Promise((resolve, reject) => {
        let newAccount = {
            email: email,
            password: null
        }

        bcrypt.hash(password, 5).then((hash) => {
            newAccount.password = hash;

            db.accounts.create({
                email: newAccount.email,
                password: newAccount.password
            }).then((data) => resolve(true));
        })
    })
}

module.exports = createNewAccount;



