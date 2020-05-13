$(document).ready(function() {
    // references from input/form
    var signUserUp = $("#signup");
    var userEmail = $("input#user-email");
    var userPassword = $("input#user-password");
    var passwordMatch = $("input#password-match");
    $("#password-match").keyup(checkPasswordMatch);
    $(".modal-background").click(function(){
      $(".modal").toggleClass("is-active");
    });
  
    // validate to ensure forms are filled in
    signUserUp.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: userEmail.val().trim().toLowerCase(),
        password: userPassword.val().trim(),
        passwordCheck: passwordMatch.val().trim()
      };
      console.log(userData.email);
      let userCount = "/api/user/count/";
      userCount += userData.email;
      console.log(userCount);
      $.get(userCount).then ( function(result){
        console.log(result);
        if (result === 1){
          modalAlert("Username already exists.");
        }else{
          if (!userData.email || !userData.password) {
            modalAlert("Please fill in email and password");
            return;
          }
          else if (userData.password !== userData.passwordCheck){
            modalAlert("Passwords do not match");
          }else{
            // sign up user w/ email and password
            signUserUp(userData.email, userData.password);
            userEmail.val("");
            userPassword.val("");
          }
        }
      });
    });
      
  
    // post to signup route and redirect to notes page
    function signUserUp(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(function(data) {
          window.location.replace(data);
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  
  function checkPasswordMatch() {
    var password = $("#user-password").val();
    var confirmPassword = $("#password-match").val();
  
    if (password !== confirmPassword){
      $("#divCheckPasswordMatch").html("Passwords do not match.");
    }
    else{
      $("#divCheckPasswordMatch").html("Passwords match.");
    }
  }
  
  function modalAlert(text){
    $(".modal h1").html(text + "<br> Please Try Again");
    $(".modal").toggleClass("is-active");
  }