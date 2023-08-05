const mysql=require("mysql")
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) console.log("Error to connect to database", err);
  else console.log("Finally my database is connected!");
});


module.exports = connection