const bcrypt = require('bcrypt');
const db = require("../models");

createNewAccount = (email, password) => {
    let newAccount ={
        email: email,
        password: null
    }
    
    bcrypt.hash(password, 5).then((hash)=>{
        newAccount.password = hash;

        db.accounts.create({
            email: newAccount.email,
            password: newAccount.password
        }).then(()=>console.log("Added user to Db"));
    })
}

module.exports = createNewAccount;