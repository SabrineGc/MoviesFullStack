
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("filmList", "root", "sabrine96", {

  host: "localhost",
  dialect: "mysql",
 
});


module.exports = sequelize;