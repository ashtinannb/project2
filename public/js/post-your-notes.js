$(document).ready(function() {

    $("#post-your-notes").on("click", function handleFormSubmit(event) {
        event.preventDefault();

        // Getting jQuery references to form and all fields:

        var title = $("#title");
        var author = $("#author");
        var studySubject = $("#core-subject");
        var subSubject = $("#specific-subject");
        var className = $("#class-name");
        var school = $("#school");
        var professor = $("#professor");
        var notesBody = $("#notes-body");
        var notesForm = $("#notes-form");

        // Won't submit the post if we are missing a body or a title
        if (!title.val().trim() || !notesBody.val().trim()) {
            return;
        }

        // Constructing a newNotes object to hand to the database
        var newNotes = {
            title: title.val().trim(),
            author: author.val().trim(),
            studySubject: studySubject.val().trim(),
            subSubject: subSubject.val().trim(),
            className: className.val().trim(),
            school: school.val().trim(),
            professor: professor.val().trim(),
            notesBody: notesBody.val().trim()
        };

        console.log(newNotes);

        submitNotes(newNotes);

        displayNotes(newNotes);

        // }
    });

    // Submits a new notes post and brings user to Notes repository
    function submitNotes(Notes) {
        $.post("/api/notes/", Notes, function() {
            window.location.href = "/notes";
        });
    }

    // function displayNotes(data) {
    //     var notesDiv = $("<div>");

    //     var noteTitle = data[0].title
    //     var noteAuthor = data[0]
    //     var noteSubject
    //     var noteSubSubject
    //     var noteClassName
    //     var noteSchool
    //     var noteProfessor
    //     var noteText
    // }


    // // Gets post data for a post if we're editing
    // function getNotesData(id) {
    //     $.get("/api/notes/" + id, function(data) {
    //         if (data) {
    //             // If this post exists, prefill our cms forms with its data
    //             title.val(data.title);
    //             notesBody.val(data.body);
    //             subjectSelect.val(data.category);
    //             // If we have a post with this id, set a flag for us to know to update the post
    //             // when we hit submit
    //             updating = true;
    //         }
    //     });
    // }

    // Update a given post, bring user to the blog page when done
    // function updatePost(post) {
    //     $.ajax({
    //             method: "PUT",
    //             url: "/api/notes",
    //             data: post
    //         })
    //         .then(function() {
    //             window.location.href = "/";
    //         });
    // }
});