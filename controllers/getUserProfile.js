const db = require("../models");

getUserProfile = (id) => {
    return new Promise((resolve, reject) => {
        db.profile.findOne({
            where: { id: id }
        }).then((user) => {
            if (!user) {
                resolve(false);
            }
            else {
                resolve(user);
            }
        });
    })
}

module.exports = getUserProfile;