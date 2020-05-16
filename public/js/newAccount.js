/* eslint-disable prettier/prettier */
$(document).ready(function() {
  // references from input/form
  // var signUserUp = $("#signup");
  var userName = $("#username");
  var userPassword = $("#user-password");
  // $(".modal-background").click(function(){
  //   $(".modal").toggleClass("is-active");
  // });

  
  // validate to ensure forms are filled in
  // signUserUp.on("submit", function(event) {

  $("#submit-account-info").on("click", function handleFormSubmit(event){
    event.preventDefault();

    var newUser = {
      username: userName.val().trim().toLowerCase(),
      password: userPassword.val().trim(),
    };


    console.log(newUser.username);
    console.log(newUser.password);

    submitUserData(newUser);

    // var userCount = "/api/user/count/";

    // userCount += newUser.username;

    // console.log(userCount);

    // $.get(userCount).then (function(result){
    //   if (result === 1){
    //     alert("Username already exists.");
    //   }else{
    //     if (!newUser.username || !newUser.password) {
    //       alert("Please fill in email and password");
    //       return;
    //     }else{
    //       // sign up user w/ username and password
    //       signUserUp(newUser.username, newUser.password);
    //       userName.val("");
    //       userPassword.val("");
    //     }
    //   }
    // });
  });
      
  // post to user route and redirect to notes page
  function submitUserData(User) {
    $.post("/api/user", User, function() {
      window.location.href = "/";
    });
  }
});