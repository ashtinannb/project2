$(document).ready(function() {
  var url = window.location.search;

  var notesId;
  var updating = false;

  if (url.indexOf("?id=") !== -1) {
    notesId = url.split("=")[1];
    getNotesData(notesId);
  }

  // Getting jQuery references to form and all fields:

  var title = $("#title");
  var author = $("#author");
  var studySubject = $("#core-subject");
  var subSubject = $("#specific-subject");
  var className = $("#class-name");
  var school = $("#school");
  var professor = $("#professor");
  var notesBody = $("#notes-body");
  //var notesForm = $("#notes-form");

  $("#post-your-notes").on("click", function handleFormSubmit(event) {
    event.preventDefault();

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
    // Otherwise run submitPost to create a whole new post

    if (updating) {
      newNotes.id = notesId;
      updateNotes(newNotes);
    } else {
      submitNotes(newNotes);
    }

    displayNotes(newNotes);
  });

  // Submits a new notes post and brings user to Notes repository
  function submitNotes(Notes) {
    $.post("/api/notes/", Notes, function() {
      window.location.href = "/notes";
    });
  }

  // Gets post data for a notes post if we're editing
  function getNotesData(id) {
    $.get("/api/notes/id/" + id, function(data) {
      console.log(data[0]);
      if (data) {
        // If this notes exists, prefill our cms forms with its data

        author.val(data[0].author);
        className.val(data[0].className);
        title.val(data[0].title);
        notesBody.val(data[0].notesBody);
        studySubject.val(data[0].studySubject);
        subSubject.val(data[0].subSubject);
        school.val(data[0].school);
        professor.val(data[0].professor);

        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given notes post, bring user to the notes page when done
  function updateNotes(notes) {
    $.ajax({
      method: "PUT",
      url: "/api/notes",
      data: notes
    }).then(function() {
      window.location.href = "/notes";
    });
  }
});
