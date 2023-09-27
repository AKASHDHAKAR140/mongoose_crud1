const Sequelize = require("sequelize")

const sequelize = new Sequelize("user-signup", "root", "", {
    host: "localhost",
    logging: false,
    dialect: "mysql"
});

const db = {};

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");

    // Synchronize the database with the models (create tables if they don't exist)
    sequelize.sync()
      .then(() => {
        console.log("Database synchronized");
      })
      .catch((error) => {
        console.error("Error syncing database:", error);
      });
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });

db.sequelize = sequelize;
db.Model = require("./modules/user.model")(sequelize)
module.exports = db;