//Creates a model that matches up with DB
module.exports = function(sequelize, DataTypes) {

    var user = sequelize.define('user', {
        user_id: {
            type: DataTypes.INTEGER,
        }, 	
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
        type: DataTypes.STRING	
        },
        rent: {
            type: DataTypes.INTEGER
        },
        smoker: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        zipCode: {
            type: DataTypes.INTEGER
        },
        pets: {
            type: DataTypes.STRING
        },
        aboutMe: {
            type: DataTypes.TEXT
        },   
    },
    {
    timestamps: false}
    );

    user.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        user.hasOne(models.accounts, {
        onDelete: "cascade"
        });
    };

    return user;
};