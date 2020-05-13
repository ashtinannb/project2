var db = require("../models");
var path = require("path");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/test", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/test.html"));
    });


    // *************************** BOILERPLATE TO FIX OR REMOVE AS NEEDED *******************

    // // Load notes page and pass in a note post by id
    // app.get("/notes/:id", function(req, res) {
    //     db.Notes.findOne({ where: { id: req.params.id } }).then(function(dbNotes) {
    //         res.render("notes", {
    //             notes: dbNotes
    //         });
    //     });
    // });

    // Render 404 page for any unmatched routes
    // app.get("*", function(req, res) {
    //     res.send("ERROR: 404");
    // });
};