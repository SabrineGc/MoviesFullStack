
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("filmList", "root", "Sabrine96", {

  host: "localhost",
  dialect: "mysql",
 
});


module.exports = sequelize;