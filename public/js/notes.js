/* eslint-disable prettier/prettier */
$(document).ready(function() {

  // notesContainer holds all of our notes
  var notesContainer = $(".notes-repository");
  var notesSubjectSelect = $("#subject");
    




  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleNotesDelete);

  $(document).on("click", "button.edit", handleNotesEdit);

  $(document).on("click", "#search-for-authors", function() {
    var author = $("#author-search").val();
    getAuthorNotes(author);
  });

  notesSubjectSelect.on("change", handleSubjectChange);


  // $("#search-for-notes").on("click", getNotes);

  // $("#search-for-authors").on("click", function() {
  //   console.log(author);
  // });

  var notes;
  

  // This function grabs notes from the database and updates the view
    
  function getNotes(subject) {
    var subjectString = subject || "";
    if (subjectString) {
      subjectString = "/subject/" + subjectString;
    }
    $.get("/api/notes" + subjectString, function(data) {
      console.log("Notes", data);
      notes = data;
      if (!notes || !notes.length) {
        displayEmpty();
      }

      $.get("/api/notes" + subjectString, function(data) {
        console.log("Notes", data);
        notes = data;
        if (!notes || !notes.length) {
          displayEmptySubject();
        }
        else {
          initializeRows();
        }
      });
    });
  }

  function getAuthorNotes(author) {
    var authorString = author || "";
    if (authorString) {
      authorString = "/author/" + authorString;
    }
    $.get("/api/notes" + authorString, function(data) {
      console.log("Notes", data);
      notes = data;
      if (!notes || !notes.length) {
        displayEmptyAuthor();
      }
      else {
        initializeRows();
      }
    });
  }
  



  // This function does an API call to delete notes
  function deleteNotes(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/notes/" + id
    })
      .then(function() {
        getNotes(notesSubjectSelect.val());
      });
  }
  

  // Getting the initial list of notes
  getNotes();


  // Append notes to HTML container
  function initializeRows() {
    notesContainer.empty();
    var notesToAdd = [];
    for (var i = 0; i < notes.length; i++) {
      notesToAdd.push(createNewRow(notes[i]));
    } notesContainer.append(notesToAdd);
  } notesContainer.append(notesToAdd);
  
  
  // Build HTML for notes
  function createNewRow(notes) {

    var newNotesCard = $("<div>");
    newNotesCard.addClass("card");


    var newNotesCardHeading = $("<div>");
    newNotesCardHeading.addClass("card-header");

    var deleteBtn = $("<button>");
    deleteBtn.text("DELETE");
    deleteBtn.addClass("delete btn btn-danger");

    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-primary");


    var newNotesTitle = $("<h2>");
    var newNotesDate = $("<small>");

    var newNotesSubject = $("<h5>");
    newNotesSubject.text(notes.studySubject);

    var newNotesClass = $("<h5>");
    newNotesClass.text("Class: " + notes.className);

    var newNotesProfessor = $("<h5>");
    newNotesProfessor.text("Professor: " + notes.professor);

    var newNotesAuthor = $("<h4>");
    newNotesAuthor.text("Author: " + notes.author);

    newNotesSubject.text(notes.studySubject);
    newNotesSubject.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
        "-15px"
    });

    var newNotesCardBody = $("<div>");
    newNotesCardBody.addClass("card-body");

    var newNotesBody = $("<h5>");
    newNotesTitle.text(notes.title + " ");
    newNotesBody.text(notes.notesBody);

    // var formattedDate = new Date(notes.createdAt);
    // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    // newNotesDate.text(formattedDate);
      
    // Build 
    newNotesTitle.append(newNotesDate);

    newNotesCardHeading.append(deleteBtn);
    newNotesCardHeading.append(editBtn);
    newNotesCardHeading.append(newNotesTitle);
    newNotesCardHeading.append(newNotesAuthor);
    newNotesCardHeading.append(newNotesSubject);
    newNotesCardHeading.append(newNotesClass);
    newNotesCardHeading.append(newNotesProfessor);

    newNotesCardBody.append(newNotesBody);
    newNotesCard.append(newNotesCardHeading);
    newNotesCard.append(newNotesCardBody);
    newNotesCard.data("notes", notes);

    return newNotesCard;
  }
  
  // Determine note to be deleted; execute delete function
  function handleNotesDelete() {
    var currentNotes = $(this)
      .parent()
      .parent()
      .data("notes");
    deleteNotes(currentNotes.id);
  }
  
  // Handles determining notes to edit and brings user to edit page with notes updates
  function handleNotesEdit() {
    var currentNotes = $(this)
      .parent()
      .parent()
      .data("notes");
    window.location.href = "/post-your-notes?id=" + currentNotes.id;
  }
  
  // This function displays a message when there are no notes for a given subject
  function displayEmptySubject() {
    notesContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No one has created notes for this subject yet. <br> Want to create your own notes? Click <a href='/post-your-notes'>here</a>.");
    notesContainer.append(messageH2);
  }

  // This function displays a message when there are no notes for a given author
  function displayEmptyAuthor() {
    notesContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("Sorry, looks like that author doesn't exist. <br> Search again.");
    notesContainer.append(messageH2);
  }
  
  // This function handles reloading new notes when the category changes
  function handleSubjectChange() {
    var newNotesSubject = $(this).val();
    getNotes(newNotesSubject);
  }

  // // This function handles reloading new notes when the author changes
  // function handleAuthorChange() {
  //   var newNotesAuthor = $(this).val();
  //   getNotes(newNotesAuthor);
  // }
});


  