// Require bcrypt for password hashing
var bcrypt = require("bcryptjs");

//user model with username, password, name
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );

  // upon user creation, automatically hash their password
  User.beforeCreate(function(user) {
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

  User.associate = function(models) {
    models.User.hasMany(models.Notes, {
      onDelete: "CASCADE"
    });
  };

  return User;
};
