/* eslint-disable prettier/prettier */
$(document).ready(function() {
  // references from input/form
  var signUserUp = $("#signup");
  var userName = $("#input#username");
  var userPassword = $("input#user-password");
  $(".modal-background").click(function(){
    $(".modal").toggleClass("is-active");
  });
  
  // validate to ensure forms are filled in
  signUserUp.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: userName.val().trim().toLowerCase(),
      password: userPassword.val().trim(),
    };


    console.log(userData.username);
    var userCount = "/api/user/count/";
    userCount += userData.username;
    console.log(userCount);
    $.get(userCount).then (function(result){
      if (result === 1){
        modalAlert("Username already exists.");
      }else{
        if (!userData.username || !userData.password) {
          modalAlert("Please fill in email and password");
          return;
        }else{
          // sign up user w/ username and password
          signUserUp(userData.username, userData.password);
          userName.val("");
          userPassword.val("");
        }
      }
    });
  });
      
  
  // post to signup route and redirect to notes page
  function signUserUp(username, password) {
    $.post("/api/signup", {
      username: username,
      password: password
    })
      .then(function(data) {
        window.location.replace(data);
      })

      //catch and alert any errors
      .catch(handleLoginErr);
  }
  
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
  
function modalAlert(text){
  $(".modal h1").html(text + "<br> Please Try Again");
  $(".modal").toggleClass("is-active");
}