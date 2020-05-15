// Require bcrypt for password hashing
var bcrypt = require("bcryptjs");

//user model with email, password, name and profile picture from URL only
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: "Anonymous",
            allowNull: true
        },
        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            },
        },
    });

    // upon user creation, automatically hash their password
    User.beforeCreate(async function(user) {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    // ensure password can be compared to hashed password
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    // User.associate = function(models) {
    //     models.User.hasMany(models.notes, {
    //         onDelete: "CASCADE"
    //     })
    // };

    return User;
};