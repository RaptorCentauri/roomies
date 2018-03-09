const db = require("../models");
const getUserProfile = require("../controllers/getUserProfile.js")


searchToMake = (searchId, searchGender, searchPets, searchSmoke, searchRent) => {
    let SearchParams= {
        sId: "",
        sGen: "",
        sPet: "",
        sSmoke: "",
        sRent: "",
    }

    switch (searchGender) {
        case "man":
            SearchParams.gGen = ['man']
            break;
        case 'woman':
            SearchParams.sGen = ['woman']
            break; 
        case 'both':
            SearchParams.sGen = ['man', 'woman']
            break;

        default:
            break;
    }

    switch (searchPets) {
        case "none":
            SearchParams.sPet = ['none']
            
            break;
        case "dog":
            SearchParams.sPet = ['dog']

            break;
        case "cat":
            SearchParams.sPet = ['cat']

            break;
        case "both":
            SearchParams.sPet = ['both', 'cat', 'dog']

            break;
    
        default:
            break;
    }

    switch (searchSmoke) {
        case "1":
            SearchParams.gSmoke = ['1', '0']
            break;
        case "0":
            SearchParams.sSmoke = ['0']
            break;

        default:
            break;
    }

    SearchParams.sId = searchId;
    SearchParams.sRent = searchRent;

    return SearchParams
}


getUserMatches = (id) => {
    return new Promise((resolve, reject) => {

    getUserProfile(id).then((result) =>{
        
        sParamsUser = result.dataValues;

        let sUser = searchToMake(sParamsUser.id, sParamsUser.genderSearch, sParamsUser.petSearch, sParamsUser.smokeSearch, sParamsUser.rentSearch);
        
        db.profile.findAll({
            where: { 
                id: { [db.Sequelize.Op.not]: sUser.sId },
                gender: {[db.Sequelize.Op.or]: sUser.sGen},
                pets: {[db.Sequelize.Op.or]: sUser.sPet},
                smokes: {[db.Sequelize.Op.or]: sUser.sSmoke},
                rent: { [db.Sequelize.Op.gte]: sUser.sRent }
            }
        }).then((matches) => {
            if (!matches) {
                resolve(false);
            }
            else {
                resolve(matches);
            }
        });
    
    })    

    })
}

module.exports = getUserMatches;