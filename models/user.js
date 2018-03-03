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
        // birthday: {
        //     type: DataTypes.INTEGER
        // },
        aboutMe: {
            type: DataTypes.TEXT
        }, 
        gender:{
            type: DataTypes.STRING
        },
        pets: {
            type: DataTypes.STRING
        },
        smokes: {
            type: DataTypes.STRING
        },
        rent: {
            type: DataTypes.INTEGER
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