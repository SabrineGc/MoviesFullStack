
const { Sequelize } = require("sequelize");
const sequelize = require("./config.js");


sequelize.sync().then(() => console.log("database connected"));
const connection= sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  }); 

  module.exports = connection