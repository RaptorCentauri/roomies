const signup = require("../controllers/signup.js");
const login = require("../controllers/login.js");
const updateUserProfile = require("../controllers/updateUserProfile.js")
const updateUserSearchParams = require("../controllers/updateUserSearchParams.js")
const getUserProfile = require("../controllers/getUserProfile.js")

// const jwt = require("jsonwebtoken");
const db = require("../models");

module.exports = (app)=>{

    //ROUTE FOR LOGIN
    app.post("/api/login", function (req, res) {
        validateUser(req.body.email, req.body.password).then((val) => res.json(val));
    })

    //ROUTE FOR CREATING ACCOUNT
    app.post("/api/newacct", function (req, res) {        
        createNewAccount(req.body.email, req.body.password).then((val) => res.json({id: val, success: true}));
    });

    //ROUTE FOR CREATING USER PROFILE
    app.post("/api/profile", function (req, res) {        
        updateUserProfile(req.body.profile, req.body.id).then((val)=> res.json(val));
    })

    app.post("/api/getprofile", function (req, res) {
        console.log("#############################");
        console.log("#############################");
        console.log(req.body);
        // console.log(req.body.ProfileId);
        // console.log(req.body.ProfileId.id);
        console.log(req.body.id);
        


        // let temp = JSON.parse(req.query.ProfileId)
        // console.log(temp);
        console.log("#############################");
        console.log("#############################");

        
        getUserProfile(req.body.id).then((val) =>{ console.log(val.profile);
         res.json(val)});
    })

    //ROUTE FOR SAVING SEARCH PARAMETERS
    app.post("/api/searchparams", function (req, res) {
        updateUserSearchParams(req.body.searchParams, req.body.id).then((val) => res.json(val));
    })


    //ROUTE FOR GETING MATCHES
    app.get("/api/matches", function (req, res) {
        //WE SHOULD HAVE A FUNCTION THAT DETERMINES WHAT SEARCH PARAMATERS ARE SENT TO DB BASED ON THE OBJECT RECIEVED 

        console.log("request made to /api/matches");

        temp = JSON.parse(req.query.matchData);
        console.log(temp);
        db.profile.findAll({}).then((dbMatches) => res.json(dbMatches));
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