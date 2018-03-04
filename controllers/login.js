let bcrypt = require('bcrypt');
const db = require("../models");


validateUser = (email, password, res) => {
    db.accounts.findOne({
        where:{email: email}
    }).then((user)=>{
        // let encryptedPass = user.password;
        let valid = bcrypt.compareSync(password, user.password);
        console.log(valid);
    });
}

module.exports = validateUser;