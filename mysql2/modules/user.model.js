const { DataTypes } = require("sequelize")
//const sequelize = require("../db")
// const User = sequelize.define("store",
//     {
//         // model attribute define
//         userName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         passWord: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//     }
// )
function model(sequelize) {
    const attributes = {
        userName: { type: DataTypes.STRING, allowNull: true },

        email: { type: DataTypes.STRING, allowNull: false },
        passWord: { type: DataTypes.STRING, allowNull: true },
    };
    const options = {
        // timestamps: true,
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    return sequelize.define("Model", attributes, options);
}
module.exports = model;
