let con = require('../config/connection.js');
let bcrypt = require('bcrypt-nodejs');

function validateUser(email, password, cb, res){
    let sql = `SELECT password FROM roommates WHERE email="${email}"`

    con.query(sql, function (err, result) {
        if (err) throw err;

        let hash = result[0].password;

        bcrypt.compare(password, hash, function(err, doesMatch){
        if (doesMatch){
            cb(true, res, email);
        }else{
            cb(false, res);
        }
        });
    });
}

module.exports = validateUser;