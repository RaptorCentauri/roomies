const db = require("../models");
const getUserProfile = require("../controllers/getUserProfile.js")
const Op = db.Op;


// searchGender
// petSearch
// smokeSearh
// rentSearch

// searchToMake = (searchGender, searchPets, searchSmoke, searchRent) => {

searchToMake = (searchGender) =>{
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
        case true:
            SearchParams.gSmoke = [true, false]
            break;
        case false:
            SearchParams.sSmoke = [false]
            break;

        default:
            break;
    }



    return SearchParams
}


getUserMatches = (id) => {
    return new Promise((resolve, reject) => {

    getUserProfile(id).then((result) =>{
        
        foo = result.dataValues;

        let gary = searchToMake(foo.genderSearch);
        console.log(gary.sGen);
        console.log(typeof(gary.sGen));

        // searchToMake(foo.genderSearch, foo.petSearch, foo.smokeSearch, foo.rentSearch)
        
        db.profile.findAll({
            where: { 
                gender: {[db.Sequelize.Op.or]: gary.sGen},
                // pets: foo,
                // smokes: foo,
                // rent: foo
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