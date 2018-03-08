const db = require("../models");

updateUserSearchParams = (searchParams, id) => {
    console.log(searchParams);

    return new Promise((resolve, reject) => {
        db.profile.update({
            genderSearch: searchParams.gender,
            petSearch: searchParams.pets,
            smokeSearch: searchParams.smokes,
            rentSearch: searchParams.rent
        }, { where: { id: id } }).then((res) => resolve(true));
    })
}

module.exports = updateUserSearchParams;