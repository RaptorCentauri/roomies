
let con = require('../config/connection.js');
let bcrypt = require('bcrypt-nodejs');

function addUser(email, password, firstName, lastName, birthday, gender, pets, smoking, rent, about, cb, res){
    console.log(email);
    bcrypt.hash(password, 5, function( err, bcryptedPassword) {
        let newPassword = bcryptedPassword;
        console.log(newPassword);

        let sql = `INSERT INTO roommates (email, password, firstName, lastName, birthday, gender, pets, smoking, rent, about) VALUES ("${email}", "${newPassword}", "${firstName}", "${lastName}", "${birthday}","${gender}", "${pets}", "${smoking}", "${rent}", "${about}");`

        con.query(sql, function (err, result) {
            if (err) throw err;
        });
    });
}

module.exports = addUser;