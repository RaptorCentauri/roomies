const signup = require("../controllers/signup.js");
const login = require("../controllers/login.js");
const updateUserProfile = require("../controllers/updateUserProfile.js")
const updateUserSearchParams = require("../controllers/updateUserSearchParams.js")
const getUserProfile = require("../controllers/getUserProfile.js")
const getUserMatches = require("../controllers/getUserMatches.js")
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
        getUserProfile(req.body.id).then((val) =>res.json(val));
    })




    //ROUTE FOR SAVING SEARCH PARAMETERS
    app.post("/api/searchparams", function (req, res) {
        updateUserSearchParams(req.body.searchParams, req.body.id).then((val) => res.json(val));
    })


    //ROUTE FOR GETING MATCHES
    app.post("/api/matches", function (req, res) {
        console.log("at api-routes");
        getUserMatches(req.query.id).then((val)=>res.json(val))
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