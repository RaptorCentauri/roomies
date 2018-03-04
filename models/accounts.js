
//Creates a model that matches up with DB
module.exports = function(sequelize, DataTypes) {
var accounts = sequelize.define('accounts', {
	account_id: {
		type: DataTypes.INTEGER,
	},
	email: {
		type: DataTypes.STRING,
    },
    password: {
		type: DataTypes.STRING,
    },
})

// accounts.associate = function(models) {
//     // We're saying that a Post should belong to an Author
//     // A Post can't be created without an Author due to the foreign key constraint
//     accounts.belongsTo(models.user, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

  return accounts;
};