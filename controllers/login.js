let bcrypt = require('bcrypt');
const db = require("../models");

validateUser = (email, password) => {
    return new Promise((resolve, reject)=>{
        db.profile.findOne({
            where: { email: email }
        }).then((user) => {
            if(!user){
                resolve(false);
            }
            else{
                resolve({id: user.id, success:bcrypt.compareSync(password, user.password)});
            }
        });
    })
}

module.exports = validateUser;
