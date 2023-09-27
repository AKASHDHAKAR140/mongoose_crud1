const { DataTypes } = require("sequelize")
const sequelize = require("./index")


const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
},
    { tableName: 'User' }
);
//console.log(books === sequelize.models.books); 
module.exports = User;