const db = require("../models"), Sequelize = require('sequelize'), Op = Sequelize.Op;
const users = require("../controllers/login.js");
const signup = require("../controlllers/signup.js");
const jwt = require("jsonwebtoken");

module.exports = (app)=>{


//Login BCrypt
app.post("/api/login", function(req, res) {
    console.log(req.body.email);
    users(req.body.email, req.body.password, cb, res);
});

//Signup BCrypt
app.post("/api/signup", function(req, res) {
    console.log(req.body.email);
    users(req.body.email, req.body.password, cb, res);
});


function cb(result, res, email){
    let token = false;

    if(result){
      let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: email,
      }, 'WeAreSparTans');
      res.send(token);
    }
    else{
      console.log('Log in Failed')
    }
}

function verify(token){
  let decoded = jwt.verify(token, 'WeAreSparTans');
  console.log(decoded);
}




//Login
  app.post("/api/login", (req, res)=>{
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then((dbUser)=>{
      res.json(dbUser);
    });
  });

//Sign Up
  app.post("/api/signup", (req, res)=>{
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        gender: req.body.gender,
        rent: req.body.rent,
        smoking: req.body.smoking,
        pets: req.body.pets,
        about: req.body.about
      }
    }).then((dbUser)=>{
      if (!dbUser) {
    users(req.body.email, req.body.password, req.body.firstName, req.body.lastName, req.body.birthday, req.body.gender, req.body.rent, req.body.smoking, req.body.pets, req.body.about, cb, res);
      }
      else res.json(false);

      //Render AJAX adapter in React

    });
  });


//Current User
  app.post("/api/userId", (req, res)=>{
    db.User.findOne({
      where: {
        userId: 
      }
    }).then((dbUser)=>{
      if (!dbUser) {
        db.User.create(req.body).then((dbUser)=>{
          res.json(dbUser);
        });
      }
      else res.json(false);
    });
  });

//Welcome Page
  app.post("/api/welcome", (req, res)=>{
    db.Welcome.create(req.body).then((dbWelcome)=>{

      res.json(dbWelcome);
    });
  });

//Search for Roomies
  app.post("/api/search", (req, res)=>{
    db.Search.create(req.body).then((dbSearch)=>{
      res.json(dbSearch);
    });
  });

//Results Page
  app.post("/api/results", (req, res)=>{
    db.Results.create(req.body).then((dbResults)=>{
      res.json(dbResults);
    });
  });

};

