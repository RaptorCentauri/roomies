const db = require("../models"), Sequelize = require('sequelize'), Op = Sequelize.Op;

module.exports = (app)=>{

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

//New User
  app.post("/api/newUser", (req, res)=>{
    db.User.findOne({
      where: {
        email: req.body.email
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

//Current User
  app.post("/api/userId", (req, res)=>{
    db.User.findOne({
      where: {
        email: req.body.email
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

