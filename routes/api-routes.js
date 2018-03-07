const signup = require("../controllers/signup.js");
const login = require("../controllers/login.js");

// const jwt = require("jsonwebtoken");

const db = require("../models");
// const AccountDB = require("../models/accounts.js");
// const Accounts = 

module.exports = (app)=>{


    //ROUTE FOR LOGIN
    app.post("/api/login", function (req, res) {
        validateUser(req.body.email, req.body.password).then((val) => res.json(val));
    })


    //ROUTE FOR CREATING ACCOUNT
    app.post("/api/newacct", function (req, res) {
        createNewAccount(req.body.email, req.body.password).then((val) => res.json(val));
    });


    //ROUTE FOR CREATING USER PROFILE
    app.post("/api/profile", function (req, res) {
        console.log("post Made to /api/profile");

        let profile = req.body;

        console.log(profile);

        db.user.create({
            firstName: profile.firstName,
            lastName: profile.lastName,
            aboutMe: profile.bio,
            gender: profile.gender,
            pets: profile.pets,
            smokes: profile.smokes,
            rent: profile.rent
        }).then(() => console.log('GOOD ADD TO DB'));
    })


    //ROUTE FOR GETING MATCHES
    app.get("/api/matches", function (req, res) {
        //WE SHOULD HAVE A FUNCTION THAT DETERMINES WHAT SEARCH PARAMATERS ARE SENT TO DB BASED ON THE OBJECT RECIEVED 

        console.log("request made to /api/matches");

        temp = JSON.parse(req.query.matchData);
        console.log(temp);
        db.user.findAll({}).then((dbMatches) => res.json(dbMatches));
    })


//FINDING A CURRENT USER? RR
//   app.GET("/api/:userId", (req, res)=>{
//     db.roommates.findOne({
//       where: {
//         userId: req.params.userId
//       }
//     })
//     .then(() => console.log(res));
/*    .then((dbUser)=>{
      if (!dbUser) {
        db.User.create(req.body).then((dbUser)=>{
          res.json(dbUser);
        });
      }
      else res.json(false);
    });*/
//   });

//UPDATING THE NEW DATABASE? RR
// app.PUT("/api/updateDB/:userId"), (res,res) => {

//     db.User.update ({
//         added: true
//     },
//         where: {
//         userId: req.params.userId
//       }
//     ).then(() => console.log(res));
    /*    .then((dbUser)=>{
      if (!dbUser) {
        db.User.create(req.body).then((dbUser)=>{
          res.json(dbUser);
        });
      }
      else res.json(false);
    });*/
// }




};














//EXTRA STUFF THAT MAY BE USEFUL LATER!!!!! KEPT OUTSIDE OF FUNCITON FOR EASIER READING
//====================================================================
//====================================================================
//====================================================================
// function cb(result, res, email){
//     let token = false;

//     if(result){
//       let token = jwt.sign({
//         exp: Math.floor(Date.now() / 1000) + (60 * 60),
//         data: email,
//       }, 'WeAreSparTans');
//       res.send(token);
//     }
//     else{
//       console.log('Log in Failed')
//     }
// }

// function verify(token){
//   let decoded = jwt.verify(token, 'WeAreSparTans');
//   console.log(decoded);
// }


// //Current User
//   app.post("/api/userId", (req, res)=>{
//     db.User.findOne({
//       where: {
//         userId: "test"
//       }
//     })
//     .then((dbUser)=>{
//       if (!dbUser) {
//         db.User.create(req.body).then((dbUser)=>{
//           res.json(dbUser);
//         });
//       }
//       else res.json(false);
//     });
//   });
//====================================================================
//====================================================================
//====================================================================
//====================================================================
//====================================================================