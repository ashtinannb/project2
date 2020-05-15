/* eslint-disable prettier/prettier */
//passport dependencies
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//require models folder for database
var db = require("../models");

//Use localstrategy with passport
passport.use(new LocalStrategy(
  {
    username: "email"
  },
  //executes when a user tries to sign in
  function (email, password, done) {
    db.User.findOne({
      where: {
        email: email
      }
    //displays error message if email is not found
    }).then(function (dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Email is incorrect."
        });
      }
      //if user is found, but password is incorrect
      else if (!dbUser.validPassword(password)){
        return done(null, false, {
          message: "Password is incorrect."
        });
      }
      return done(null, dbUser);
    });
  }
));

//serializes and deserializes user to keep auth state consistent
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;