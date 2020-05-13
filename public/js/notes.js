$(document).ready(function() {
    // Gets an optional query string from our url (i.e. ?post_id=23)
    // var url = window.location.search;
    // var notesID;

    // Sets a flag for whether or not we're updating a post to be false initially
    // var updating = false;

    // If we have this section in our url, we pull out the post id from the url
    // In localhost:8080/cms?post_id=1, notesID is 1
    // if (url.indexOf("?post_id=") !== -1) {
    //     notesID = url.split("=")[1];
    //     getNotesData(notesID);
    // }





    // Adding an event listener for when the form is submitted

    // $(notesForm).on("submit", function handleFormSubmit(event) {

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

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitNotes to create a whole new post
        // if (updating) {
        //     newNotes.id = notesID;
        //     updatePost(newNotes);
        // } else {

        submitNotes(newNotes);

        // }
    });

    // Submits a new notes post and brings user to notes API page upon completion
    function submitNotes(Notes) {
        $.post("/api/notes/", Notes, function() {
            window.location.href = "/api/notes";
        });
    }

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