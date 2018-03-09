const db = require("../models");
const getUserProfile = require("../controllers/getUserProfile.js")
const Op = db.Op;


// searchGender
// petSearch
// smokeSearh
// rentSearch
// searchRent
searchToMake = (searchGender, searchPets, searchSmoke, searchRent) => {
// searchToMake = (searchGender) =>{
    let SearchParams= {
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

    SearchParams.sRent = searchRent;

    return SearchParams
}


getUserMatches = (id) => {
    return new Promise((resolve, reject) => {

    getUserProfile(id).then((result) =>{
        
        foo = result.dataValues;

        let gary = searchToMake(foo.genderSearch, foo.petSearch, foo.smokeSearch, foo.rentSearch);
        console.log(gary.sGen);
        console.log(typeof(gary.sGen));

        // searchToMake(foo.genderSearch, foo.petSearch, foo.smokeSearch, foo.rentSearch)
        
        db.profile.findAll({
            where: { 
                gender: {[db.Sequelize.Op.or]: gary.sGen},
                pets: {[db.Sequelize.Op.or]: gary.sPet},
                smokes: {[db.Sequelize.Op.or]: gary.sSmoke},
                rent: { [db.Sequelize.Op.lte]: gary.sRent }
            }
        }).then((user) => {
            if (!user) {
                console.log("red");

                resolve(false);
            }
            else {
                console.log("blue");

                resolve(user);
            }
        });
    
    })    

    })
}

module.exports = getUserMatches;