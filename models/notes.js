module.exports = function(sequelize, DataTypes) {
    var Notes = sequelize.define("Notes", {
        author: DataTypes.STRING,
        notesBody: DataTypes.TEXT,
        subject: DataTypes.STRING,
        class: DataTypes.STRING,
        school: DataTypes.STRING,
        professor: DataTypes.STRING
    });
    return Notes;
};