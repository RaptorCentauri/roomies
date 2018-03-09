module.exports = function (sequelize, DataTypes) {
    const profile = sequelize.define('profile', {
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        avatar:{
            type: DataTypes.BLOB
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING
        },
        aboutMe: {
            type: DataTypes.TEXT
        },
        gender: {
            type: DataTypes.STRING
        },
        pets: {
            type: DataTypes.STRING
        },
        smokes: {
            type: DataTypes.BOOLEAN
        },
        rent: {
            type: DataTypes.INTEGER
        },
        genderSearch:{
            type: DataTypes.STRING
        },
        petSearch:{
            type: DataTypes.STRING
        },
        smokeSearch:{
            type: DataTypes.BOOLEAN
        },
        rentSearch:{
            type: DataTypes.INTEGER
        }
    },
        {
            timestamps: false
        }
    );

    return profile;
};