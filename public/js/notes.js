$(document).ready(function() {
    // notesContainer holds all of our notes
    var notesContainer = $(".notes-repository");
    var notesSubjectSelect = $("#subject");

    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleNotesDelete);

    $(document).on("click", "button.edit", handleNotesEdit);

    notesSubjectSelect.on("change", handleSubjectChange);



    var notes;
  
    // This function grabs notes from the database and updates the view
    $("#search-for-notes").on("click", getNotes);
    
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
        else {
          initializeRows();
        }
      });
    };
  
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



    // InitializeRows handles appending all of our constructed post HTML inside
    // notesContainer
    function initializeRows() {
      notesContainer.empty();
      var notesToAdd = [];
      for (var i = 0; i < notes.length; i++) {
        notesToAdd.push(createNewRow(notes[i]));
      }
      notesContainer.append(notesToAdd);
    }
  
    // This function constructs a notes's HTML
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
  
    // This function figures out which post we want to delete and then calls
    // deleteNotes
    function handleNotesDelete() {
      var currentNotes = $(this)
        .parent()
        .parent()
        .data("notes");
      deleteNotes(currentNotes.id);
    }
  
    // This function figures out which post we want to edit and takes it to the a ppropriate url

    function handleNotesEdit() {
      var currentNotes = $(this)
        .parent()
        .parent()
        .data("notes");
      window.location.href = "/post-your-notes?id=" + currentNotes.id;
    }
  
    // This function displays a message when there are no notes

    function displayEmpty() {
      notesContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No one has created notes for this subject yet. <br> Want to create your own notes? Navigate <a href='/post-your-notes'>here</a> in order to create a new notes post.");
      notesContainer.append(messageH2);
    }
  
    // This function handles reloading new notes when the category changes
    function handleSubjectChange() {
      var newNotesSubject = $(this).val();
      getNotes(newNotesSubject);
    }
  
  });
  