module.exports = function(sequelize, DataTypes) {
    var Notes = sequelize.define("Notes", {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        notesBody: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        class: {
            type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        professor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }

    });
    return Notes;
};