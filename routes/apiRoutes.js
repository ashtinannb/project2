/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function(app) {

  // Get all notes
  app.get("/api/notes", function(req, res) {
    db.Notes.findAll({}).then(function(dbNotes) {
      res.json(dbNotes);
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



  // ***** IN PROGRESS *****

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
};