const db = require("../models");

updateUserProfile = (userProfile, id) => {
    console.log(userProfile);
    
    return new Promise((resolve, reject) => {
        db.profile.update({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            avatar: userProfile.avatar,
            aboutMe: userProfile.bio,
            gender: userProfile.gender,
            pets: userProfile.pets,
            smokes: userProfile.smokes,
            rent: userProfile.rent
        },{where: {id: id}}).then((res) => resolve(true));
    })
}

module.exports = updateUserProfile;

