const db = require("../models");

getUserMatches = (id) => {
    return new Promise((resolve, reject) => {
        // db.profile.findOne({
        //     where: { id: id }
        // }).then((user) => {
        //     if (!user) {
        //         resolve(false);
        //     }
        //     else {
        //         resolve(user);
        //     }
        });
    // })
}

module.exports = getUserMatches;