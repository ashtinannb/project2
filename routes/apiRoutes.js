var db = require("../models");

module.exports = function(app) {

    // Get all notes
    app.get("/api/notes", function(req, res) {
        db.Notes.findAll({}).then(function(dbNotes) {
            res.json(dbNotes);
        });
    });


    // Get notes by author
    app.get("/api/notes/author/:author", function(req, res) {
        db.Notes.findAll({
            where: {
                author: req.params.author
            }
        }).then(function(dbNotes) {
            res.json(dbNotes);
        });
    });

    // Get notes by subject
    app.get("/api/notes/subject/:subject", function(req, res) {
        db.Notes.findAll({
            where: {
                studySubject: req.params.subject
            }
        }).then(function(dbNotes) {
            res.json(dbNotes);
        });
    });

    // Get notes by professor
    app.get("/api/notes/professor/:professor", function(req, res) {
        db.Notes.findAll({
            where: {
                professor: req.params.professor
            }
        }).then(function(dbNotes) {
            res.json(dbNotes);
        });
    });

    // Get notes by class
    app.get("/api/notes/class/:class", function(req, res) {
        db.Notes.findAll({
            where: {
                className: req.params.class
            }
        }).then(function(dbNotes) {
            res.json(dbNotes);
        });
    });

        // Get notes by school
        app.get("/api/notes/school/:school", function(req, res) {
            db.Notes.findAll({
                where: {
                    school: req.params.school
                }
            }).then(function(dbNotes) {
                res.json(dbNotes);
            });
        });

    // Create a new notes post
    app.post("/api/notes", function(req, res) {
        db.Notes.create({
            title: req.body.title,
            author: req.body.author,
            studySubject: req.body.studySubject,
            subSubject: req.body.subSubject,
            className: req.body.className,
            school: req.body.school,
            professor: req.body.professor,
            notesBody: req.body.notesBody
        }).then(function(dbNotes) {
            res.json(dbNotes);
        });
    });

    // Delete a notes post by id
    app.delete("/api/notes/id/:id", function(req, res) {
        db.Notes.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbNotes) {
            res.json(dbNotes);
        });
    });
};