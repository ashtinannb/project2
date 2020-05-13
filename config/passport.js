var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
    {
        username: "email"
    },
    function (email, password, done) {
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function (dbUser) {
            if (!dbUser) {
                return done(null, false, {
                    message: "Email is incorrect."
                });
            }

        else if (!dbUser.validPassword(password)){
            return done(null, false, {
                message: "Password is incorrect."
            });
        }
        return done(null, dbUser);
        });
    }
));

module.exports = passport;