const db = require("../models");

updateUserProfile = (userProfile, id) => {
    return new Promise((resolve, reject) => {
        db.profile.update({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            aboutMe: userProfile.bio,
            gender: userProfile.gender,
            pets: userProfile.pets,
            smokes: userProfile.smokes,
            rent: userProfile.rent
        },{where: {id: id}}).then((res) => resolve(true));
    })
}

module.exports = updateUserProfile;

