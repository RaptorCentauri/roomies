const path = require("path"), db = require("../models"), Sequelize = require('sequelize'), Op = Sequelize.Op;
 
module.exports = (app)=>{






//Login
  app.get("/", (req, res)=>{
      res.render("login", {layout: false});
  });

//New User
  app.get("/newUser/:id", (req, res)=>{
    db.User.findOne({
        where: {
          id: req.params.id,
        }
      }).then((dbUser)=>{
        res.render("newUser", { user: dbUser });
      });
  });

//Current User
  app.get("/user/:id", (req, res)=>{
    db.User.findOne({
        where: {
          id: req.params.id,
        }
      }).then((dbUser)=>{
        res.render("user", { user: dbUser });
      });
  });

//Welcome Page
  app.get("/welcome/:id", (req, res)=>{
    db.User.findOne({
        where: {
          id: req.params.id,
        }
      }).then((dbUser)=>{
        res.render("welcome", { user: dbUser });
      });
  });

//Search for Roomies
  app.get("/search/:id", (req, res)=>{
    db.User.findOne({
      where: {
        id: req.params.id,
      }
    }).then((dbUser)=>{
      db.gender.findAll({
        attributes: [
          "tagOne", "tagTwo", "tagThree"
        ],
        where: {
          UserId: req.params.id
        },
      }).then((dbExperience)=>{
        db.pets.findAll({
          attributes: [
            "tagOne", "tagTwo", "tagThree"
          ],
          where: {
            UserId: req.params.id
          },
        }).then((dbEducation)=>{
          db.smoking.findAll({
            attributes: [
              "tagOne", "tagTwo", "tagThree"
            ],
            where: {
              UserId: req.params.id
            },
          }).then((dbWork)=>{
            let data = { expTags: dbExperience, eduTags: dbEducation, workTags: dbWork }, dataTags = {}, tagArr = [];
            getTags(data.expTags, dataTags);
            getTags(data.eduTags, dataTags);
            getTags(data.workTags, dataTags);
            for (let tag in dataTags) tagArr.push({ "tag": tag, "id": dbUser.id } );
            res.render("build", { user: dbUser, tags: tagArr });
          });
        });
      });
    });
  });

//Results Page
  app.get("/resume/:id/:tag", (req, res)=>{
    db.User.findOne({
        where: {
          id: req.params.id,
        }
      }).then((dbUser)=>{
        db.Work.findAll({
          where: {
            [Op.or]: [{tagOne: req.params.tag}, {tagTwo: req.params.tag}, {tagThree: req.params.tag}],
            UserId: req.params.id
          },
        }).then((dbWork)=>{
          db.Experience.findAll({
            where: {
              [Op.or]: [{tagOne: req.params.tag}, {tagTwo: req.params.tag}, {tagThree: req.params.tag}],
              UserId: req.params.id
            },
          }).then((dbExperience)=>{
            db.Education.findAll({
              where: {
                [Op.or]: [{tagOne: req.params.tag}, {tagTwo: req.params.tag}, {tagThree: req.params.tag}],
                UserId: req.params.id
              },
            }).then((dbEducation)=>{
              res.render("resume", { layout: false, user: dbUser, works: dbWork, skills: dbExperience, educations: dbEducation });
            });
          });
        });
      });
  });

  function getTags(objArr, newObj) {
    for (let object of objArr) {
      if (object.tagOne != "") newObj[object.tagOne] = object.tagOne;
      if (object.tagTwo != "") newObj[object.tagTwo] = object.tagTwo;
      if (object.tagThree != "") newObj[object.tagThree] = object.tagThree;
    }
  }

};