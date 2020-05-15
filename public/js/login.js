/* eslint-disable prettier/prettier */
function createNewAccount(){
  $("#createAccount").click(function() {
    window.location.href = "/user/new";
  });
}
$(document).ready(function() {
  createNewAccount();
  
  // Grab login references
  var login = $("#login");
  var userName = $("input#username");
  var userPassword = $("input[type='password']");
  
  // Ensure there is a username and password submitted
  login.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: userName.val().trim().toLowerCase(),
      password: userPassword.val().trim()
    };
  
    if (!userData.username || !userData.password) {
      return;
    }
  
    // Log user in and clear form
    loginUser(userData.username, userData.password);
    userName.val("");
    userPassword.val("");
  });
  
  // post to api/login route and redirect to homepage
  function loginUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      if (err){
        console.log(err);
      }
    });
  }
});