// const UserDB = require("../models"), Sequelize = require('sequelize'), Op = Sequelize.Op;
// const users = require("../controllers/login.js");
// const signup = require("../controllers/signup.js");
// const jwt = require("jsonwebtoken");

const db = require("../models");
// const AccountDB = require("../models/accounts.js");
// const Accounts = 

module.exports = (app)=>{

app.get("/api/all", function(req,res){





    //get the model

    let myTemp ={
        "name":"Kermit",
        "species": "Frog",
        "color": "Green"
    };

    res.send(myTemp);
});


app.post("/api/profile", function (req,res) {

    console.log("post Made to /api/profile");

    let profile = req.body;

    console.log(profile);

    db.user.create({
        firstName: profile.firstName,
        lastName: profile.lastName,
        pets: profile.pets,
        smoker: profile.smokes
    }).then(()=> console.log('GOOD ADD TO DB'));    
})

app.get("/api/matches", function(req,res){
    console.log("request made to /api/matches");
    
    temp = JSON.parse(req.query.matchData);
    console.log(temp);

        db.user.findAll({
        where:{
            gender: temp.gender, 
            pets: temp.pets,
            smoker: temp.smokes,
            rent: temp.rent
        }
    }).then(function(dbMatches){
        console.log(dbMatches);
    });

})


// app.get("/", function(req,res){
//     console.log("t accutaly workts (GET FUNVTION).");
    
//     res.render("../client/public/index.html");
//     console.log("sending react Page");   
// });

// //Login BCrypt
// app.post("/api/login", function(req, res) {
//     console.log(req.body.email);
//     users(req.body.email, req.body.password, cb, res);
// });

// //Signup BCrypt
// app.post("/api/signup", function(req, res) {
//     console.log(req.body.email);
//     users(req.body.email, req.body.password, cb, res);
// });


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




// //Login
//   app.post("/api/login", (req, res)=>{
//     db.User.findOne({
//       where: {
//         email: req.body.email,
//         password: req.body.password
//       }
//     }).then((dbUser)=>{
//       res.json(dbUser);
//     });
//   });

// //Sign Up
//   app.post("/api/signup", (req, res)=>{
//     db.User.findOne({
//       where: {
//         email: req.body.email,
//         password: req.body.password,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         birthday: req.body.birthday,
//         gender: req.body.gender,
//         rent: req.body.rent,
//         smoking: req.body.smoking,
//         pets: req.body.pets,
//         about: req.body.about
//       }
//     }).then((dbUser)=>{
//       if (!dbUser) {
//     users(req.body.email, req.body.password, req.body.firstName, req.body.lastName, req.body.birthday, req.body.gender, req.body.rent, req.body.smoking, req.body.pets, req.body.about, cb, res);
//       }
//       else res.json(false);

//       //Render AJAX adapter in React

//     });
//   });


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

// //Welcome Page
//   app.post("/api/welcome", (req, res)=>{
//     db.Welcome.create(req.body).then((dbWelcome)=>{

//       res.json(dbWelcome);
//     });
//   });

// //Search for Roomies
//   app.post("/api/search", (req, res)=>{
//     db.Search.create(req.body).then((dbSearch)=>{
//       res.json(dbSearch);
//     });
//   });

// //Results Page
//   app.post("/api/results", (req, res)=>{
//     db.Results.create(req.body).then((dbResults)=>{
//       res.json(dbResults);
//     });
//   });

};

