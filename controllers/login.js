
let bcrypt = require('bcrypt');
const db = require("../models");


validateUser = (email, password) => {
    return new Promise((resolve, reject)=>{

        db.accounts.findOne({
            where: { email: email }
        }).then((user) => {
            let temp = bcrypt.compareSync(password, user.password);
            resolve(temp)
        });
    })

}

module.exports = validateUser;




// validateUser().then((val)=>console.log(val));
