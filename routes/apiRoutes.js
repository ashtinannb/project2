/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function(app) {

  // Get all notes
  app.get("/api/notes", function(req, res) {
    db.Notes.findAll({}).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });

    // Get all users
    app.get("/api/user", function(req, res) {
      db.Notes.findAll({}).then(function(dbUsers) {
        res.json(dbUsers);
      });
    });


  // Get notes by id
  app.get("/api/notes/id/:id", function(req, res) {
    db.Notes.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });

  // Get notes by author
  app.get("/api/notes/:author", function(req, res) {
    db.Notes.findAll({}).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });

  // Get notes by subject
  app.get("/api/notes/:subject", function(req, res) {
    db.Notes.findAll({
      where: {
        subject: req.params.subject
      }
    }).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });

  // Get notes by professor
  app.get("/api/notes/:professor", function(req, res) {
    db.Notes.findAll({}).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });

  // Get notes by class
  app.get("/api/notes/:class", function(req, res) {
    db.Notes.findAll({}).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });

  // Create a new notes post
  app.post("/api/notes", function(req, res) {
    db.Notes.create(req.body).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });


    // Create a new user
    app.post("/api/user", function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
    });

  // Delete a notes post by id
  app.delete("/api/notes/:id", function(req, res) {
    db.Notes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });



      // PUT route for updating notes
  app.put("/api/notes", function(req, res) {
    db.Notes.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbNotes) {
        res.json(dbNotes);
      });
  });

    // Delete a notes post by id
    app.delete("/api/notes/:id", function(req, res) {
        db.Notes.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbNotes) {
            res.json(dbNotes);
        });
    });







    app.get("/api/user/count/:name", function(req, res){
      db.User.count({
        where: { email: req.params.name }
      })
        .then(result, function(req, res) {
          // console.log(result);
          res.json(result);
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
        });
    });


app.post('/api/signup', (req, res) => {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });


  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        user: { id: req.user.id, name: req.user.name }
      });
    }
  }); 

  app.get("/api/user/:id", (req, res) => {
    db.User.findOne({
      attributes: ["id", "name"],
      where: {
        id: req.params.id
      }
    }).then(name => {
      res.json(name);
    });
  });

  app.put("/api/user/name/:id", (req, res) => {
    db.User.update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(name => {
      res.json(name);
    });
  });



app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });


    // Authenticate user
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
      res.json("/user/profile");
    }); 



}

